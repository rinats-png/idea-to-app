# Umsetzungshinweise für verbreitete Stacks

> Beispiele zur Orientierung. Vor dem Einsatz mit der aktuellen Dokumentation des jeweiligen Anbieters abgleichen – Namen von Schlüsseln, Funktionen und Standardeinstellungen ändern sich.

---

## Supabase (Postgres + Auth + Storage)

### Schlüssel
- **Publishable / Anon Key** → darf ins Frontend, **aber nur mit aktiver Row Level Security (RLS)** auf jeder Tabelle.
- **Secret / Service-Role Key** → umgeht RLS vollständig. **Nur** in Edge Functions oder eigenem Backend, nie im Frontend, nie mit Client-Präfix (`VITE_`, `NEXT_PUBLIC_`, `EXPO_PUBLIC_`).

### Tabelle mit Besitzer und RLS

```sql
create table public.entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  title text not null check (char_length(title) between 1 and 200),
  note text check (char_length(note) <= 10000),
  created_at timestamptz not null default now()
);

alter table public.entries enable row level security;

create policy "entries: eigene lesen"
  on public.entries for select to authenticated
  using ( (select auth.uid()) = user_id );

create policy "entries: eigene anlegen"
  on public.entries for insert to authenticated
  with check ( (select auth.uid()) = user_id );

create policy "entries: eigene ändern"
  on public.entries for update to authenticated
  using ( (select auth.uid()) = user_id )
  with check ( (select auth.uid()) = user_id );

create policy "entries: eigene löschen"
  on public.entries for delete to authenticated
  using ( (select auth.uid()) = user_id );
```

- `default auth.uid()` setzt den Besitzer serverseitig; die `with check`-Bedingung verhindert, dass ein fremder `user_id` gesetzt wird.
- `on delete cascade` sorgt dafür, dass beim Löschen des Kontos auch die Einträge verschwinden (Dateien im Storage separat löschen!).
- Den **Security Advisor** im Supabase-Dashboard regelmäßig prüfen (zeigt u. a. Tabellen ohne RLS).

### Rollen gegen Mass Assignment schützen

Rollen nicht in einer Tabelle speichern, die der Nutzer selbst ändern darf. Wenn ein Profil vom Nutzer bearbeitbar ist, nur einzelne Spalten freigeben:

```sql
revoke update on public.profiles from authenticated;
grant update (display_name, avatar_url) on public.profiles to authenticated;
```

Rollen in einer eigenen Tabelle (`user_roles`) ohne Schreib-Policy für normale Nutzer pflegen – Änderungen nur über Service-Role im Backend bzw. durch Admins mit Audit-Log.

### Storage: private Dateien pro Nutzer

Bucket als **privat** anlegen, Dateien unter `<user_id>/<zufälliger-name>` ablegen:

```sql
create policy "files: eigene lesen"
  on storage.objects for select to authenticated
  using ( bucket_id = 'private-files' and (storage.foldername(name))[1] = (select auth.uid())::text );

create policy "files: eigene hochladen"
  on storage.objects for insert to authenticated
  with check ( bucket_id = 'private-files' and (storage.foldername(name))[1] = (select auth.uid())::text );

create policy "files: eigene löschen"
  on storage.objects for delete to authenticated
  using ( bucket_id = 'private-files' and (storage.foldername(name))[1] = (select auth.uid())::text );
```

Auslieferung über **signierte URLs** mit kurzer Laufzeit.

### Auth-Einstellungen prüfen
- E-Mail-Bestätigung aktiv
- Mindest-Passwortlänge und (falls verfügbar) Schutz gegen geleakte Passwörter aktiv
- Eingebaute Rate Limits prüfen und ggf. anpassen; CAPTCHA-Schutz für Registrierung/Login aktivieren, wenn nötig
- Erlaubte Redirect-URLs auf eigene Domains beschränken
- Eigenen SMTP-Versand für Produktion einrichten

### Teure Aufrufe
KI-, SMS- oder E-Mail-APIs nur aus **Edge Functions** aufrufen: dort Nutzer prüfen (JWT), Limits pro Nutzer zählen (z. B. Tabelle `usage` mit Tageszähler), dann den geheimen Schlüssel aus den Function-Secrets verwenden.

---

## Firebase (Firestore + Auth + Storage)

- Die Firebase-Konfiguration im Frontend ist öffentlich – Schutz entsteht **nur** durch Security Rules.
- **Nie im „Testmodus“ (alles erlaubt) live gehen.**

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /entries/{entryId} {
      allow read, delete: if request.auth != null
                          && resource.data.ownerId == request.auth.uid;
      allow create: if request.auth != null
                    && request.resource.data.ownerId == request.auth.uid;
      allow update: if request.auth != null
                    && resource.data.ownerId == request.auth.uid
                    && request.resource.data.ownerId == resource.data.ownerId;
    }
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

- Rules mit dem **Emulator** und automatisierten Tests prüfen.
- **App Check** gegen Missbrauch durch fremde Clients prüfen.
- Rollen per **Custom Claims** (nur serverseitig setzbar), nicht als Feld im Nutzerdokument.

---

## Eigenes Backend (Node.js / Express als Beispiel)

```ts
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { z } from "zod";

const app = express();
app.use(helmet());                       // setzt viele Security-Header
app.use(express.json({ limit: "100kb" })); // Größenlimit

const loginLimiter = rateLimit({   // Werte aus docs/sicherheit.md übernehmen
  windowMs: 15 * 60 * 1000,
  limit: 20,                         // pro IP; Limit pro Konto zusätzlich im Login-Handler
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
app.post("/api/auth/login", loginLimiter /*, Login-Handler */);

const EntryInput = z.object({
  title: z.string().min(1).max(200),
  note: z.string().max(10000).optional(),
}).strict(); // unbekannte Felder (owner_id, role …) → Fehler

app.get("/api/entries/:id", requireAuth, async (req, res) => {
  const entry = await db.entry.findFirst({
    where: { id: req.params.id, ownerId: req.user.id }, // Besitzprüfung in der Abfrage
  });
  if (!entry) return res.status(404).end(); // Zugriffs-Antwortstrategie aus docs/sicherheit.md
  res.json(entry);
});

app.post("/api/entries", requireAuth, async (req, res) => {
  const parsed = EntryInput.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Ungültige Eingabe" });
  const entry = await db.entry.create({
    data: { ...parsed.data, ownerId: req.user.id }, // Besitzer setzt der Server
  });
  res.status(201).json(entry);
});
```

- Rate-Limit-Zähler in einem gemeinsamen Speicher (z. B. Redis), sobald mehr als ein Server-Prozess läuft.
- `requireAuth` und `db` stehen für die eigene Auth-Middleware bzw. den Datenbankzugriff.

---

## Security-Header über das Hosting

**Vercel** (`vercel.json`):

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Content-Security-Policy", "value": "default-src 'self'; img-src 'self' data: blob:; connect-src 'self' https://<projekt>.supabase.co; frame-ancestors 'none'; base-uri 'self'; form-action 'self'" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains" }
      ]
    }
  ]
}
```

**Netlify** (`public/_headers`):

```
/*
  Content-Security-Policy: default-src 'self'; img-src 'self' data: blob:; connect-src 'self' https://<projekt>.supabase.co; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=63072000; includeSubDomains
```

Die CSP muss an die tatsächlich genutzten Dienste angepasst werden (`connect-src`, `img-src`, `script-src`). Nach dem Deployment mit einem Header-Prüftool und der Browser-Konsole kontrollieren.

---

## Native Apps (React Native / Expo, Flutter)

- Tokens in **Keychain/Keystore** (z. B. `expo-secure-store`, `flutter_secure_storage`), nicht in AsyncStorage/SharedPreferences.
- Keine geheimen Schlüssel im App-Paket – auch nicht „versteckt“ oder verschleiert.
- Deep Links validieren; Berechtigungen (Kamera, Standort) erst bei Bedarf anfragen.
- Orientierung: OWASP MASVS.
