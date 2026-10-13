# Automatisierte Sicherheitstests

> Diese Testfälle werden in Phase 19 übernommen und in Phase 22 als Aufgaben (Meilenstein M1) an das Coding-Tool übergeben. Die Codebeispiele sind **Vorlagen** (TypeScript, Vitest, `fetch`) und müssen an den tatsächlichen Stack und die tatsächlichen Endpunkte angepasst werden.

## Grundprinzip

Jeder Sicherheitstest prüft, dass etwas **nicht** passiert. Damit so ein Test aussagekräftig ist, muss er **rot werden, wenn der Schutz fehlt**. Beim ersten Einrichten deshalb einmal den Schutz testweise entfernen (lokal!) und prüfen, dass der Test fehlschlägt.

Tests laufen gegen eine **Test-Umgebung mit Testdaten**, niemals gegen die Produktion.

**Zugriffs-Antwortstrategie:** Ob ein verweigerter Zugriff mit `404` oder `403` beantwortet wird, ist eine Projektentscheidung (`docs/sicherheit.md`, Ausgangswerte in `standardwerte.md`). Die Tests prüfen deshalb gegen eine konfigurierbare Liste erlaubter Statuscodes – und vor allem, dass **keine fremden Daten** in der Antwort stehen.

**Rückverfolgung:** Jeder `T-SEC` nennt in Phase 19 die Bedrohung (`BD-…`) oder Regel, die er absichert.

## Testfall-Katalog

| ID | Testfall | Erwartung | Stufe |
|---|---|---|---|
| T-SEC-01 | Nutzer A ruft Datensatz von B per ID ab | verweigert gemäß Strategie, keine Daten | 2 |
| T-SEC-02 | Nutzer A ändert / löscht Datensatz von B | verweigert gemäß Strategie, Datensatz unverändert | 2 |
| T-SEC-03 | Nutzer schickt `role`, `is_admin`, `owner_id` beim Anlegen / Ändern | Felder ignoriert bzw. Anfrage abgelehnt | 2 |
| T-SEC-04 | Listen- und Suchendpunkte | enthalten nur eigene bzw. erlaubte Datensätze | 2 |
| T-SEC-05 | Viele falsche Logins in kurzer Zeit | ab Schwelle 429 bzw. Verzögerung | 2 |
| T-SEC-06 | Passwort-Reset: Token zweimal verwenden / abgelaufenes Token | beim zweiten Mal bzw. nach Ablauf abgelehnt | 2 |
| T-SEC-07 | Teurer Endpunkt über Tageslimit | 429 | 1 |
| T-SEC-08 | Geschützte Endpunkte ohne Anmeldung | 401 (bzw. gemäß Strategie), keine Daten | 2 |
| T-SEC-09 | Login/Reset mit existierender vs. nicht existierender E-Mail | identische Antwort (Status und Text) | 2 |
| T-SEC-10 | Datei von B über Pfad / ID abrufen | kein Zugriff | 2 |
| T-SEC-11 | Eingaben mit `<script>`, sehr langen Strings, SQL-Fragmenten | sauber abgelehnt oder escaped gespeichert und angezeigt | 1 |
| T-SEC-12 | Security-Header auf der Startseite | vorhanden und korrekt | 1 |
| T-SEC-13 | Frontend-Build enthält keine geheimen Schlüssel | Scan findet nichts | 1 |
| T-SEC-14 | Admin-Endpunkt mit normalem Nutzer | verweigert gemäß Strategie (oft 403), keine Daten | 1 |
| T-SEC-15 | Konto löschen | danach keine Daten und Dateien des Nutzers mehr abrufbar | 2 |
| T-SEC-16 | Zahlungs-Freischaltung über manipulierten Client-Parameter | keine Freischaltung | 1 |

## Beispiel-Hilfsfunktionen

```ts
// tests/security/helpers.ts
const BASE = process.env.TEST_BASE_URL ?? "http://localhost:3000";

// Zugriffs-Antwortstrategie aus docs/sicherheit.md, z. B. [404] oder [403] oder [403, 404]
export const DENIED_STATUS = [404];

export async function loginAs(email: string, password: string): Promise<string> {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(`Login fehlgeschlagen: ${res.status}`);
  const { token } = await res.json(); // an das echte Login-Verfahren anpassen
  return token;
}

export function api(token?: string) {
  return (path: string, init: RequestInit = {}) =>
    fetch(`${BASE}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(init.headers ?? {}),
      },
    });
}
```

## T-SEC-01 bis 04: Zugriff auf fremde Daten

```ts
// tests/security/access-control.test.ts
import { describe, it, expect, beforeAll } from "vitest";
import { loginAs, api, DENIED_STATUS } from "./helpers";

let asA: ReturnType<typeof api>;
let asB: ReturnType<typeof api>;
let entryOfB: { id: string };

beforeAll(async () => {
  asA = api(await loginAs("test-a@example.test", process.env.TEST_PW_A!));
  asB = api(await loginAs("test-b@example.test", process.env.TEST_PW_B!));
  const res = await asB("/api/entries", {
    method: "POST",
    body: JSON.stringify({ title: "Privat von B" }),
  });
  entryOfB = await res.json();
});

describe("Zugriffskontrolle", () => {
  it("T-SEC-01: A kann den Eintrag von B nicht lesen", async () => {
    const res = await asA(`/api/entries/${entryOfB.id}`);
    expect(DENIED_STATUS).toContain(res.status);
    expect(await res.text()).not.toContain("Privat von B");
  });

  it("T-SEC-02: A kann den Eintrag von B nicht ändern oder löschen", async () => {
    const upd = await asA(`/api/entries/${entryOfB.id}`, {
      method: "PATCH",
      body: JSON.stringify({ title: "gehackt" }),
    });
    expect(DENIED_STATUS).toContain(upd.status);

    const del = await asA(`/api/entries/${entryOfB.id}`, { method: "DELETE" });
    expect(DENIED_STATUS).toContain(del.status);

    const check = await asB(`/api/entries/${entryOfB.id}`);
    expect((await check.json()).title).toBe("Privat von B");
  });

  it("T-SEC-03: owner_id und role aus dem Client werden ignoriert", async () => {
    const res = await asA("/api/entries", {
      method: "POST",
      body: JSON.stringify({ title: "Test", owner_id: "id-von-b", role: "admin" }),
    });
    const created = await res.json();
    expect(created.owner_id).not.toBe("id-von-b");

    const me = await asA("/api/me");
    expect((await me.json()).role).not.toBe("admin");
  });

  it("T-SEC-04: Liste enthält keine fremden Einträge", async () => {
    const res = await asA("/api/entries");
    const list: Array<{ id: string }> = await res.json();
    expect(list.find((e) => e.id === entryOfB.id)).toBeUndefined();
  });
});
```

## T-SEC-05 und T-SEC-09: Login-Schutz

```ts
// tests/security/auth.test.ts
import { describe, it, expect } from "vitest";
import { api } from "./helpers";

describe("Login-Schutz", () => {
  it("T-SEC-05: Rate Limit nach vielen Fehlversuchen", async () => {
    const anon = api();
    const statuses: number[] = [];
    for (let i = 0; i < 15; i++) {
      const res = await anon("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: "test-a@example.test", password: `falsch-${i}` }),
      });
      statuses.push(res.status);
    }
    expect(statuses).toContain(429);
  });

  it("T-SEC-09: Keine Nutzer-Enumeration beim Passwort-Reset", async () => {
    const anon = api();
    const known = await anon("/api/auth/reset", {
      method: "POST",
      body: JSON.stringify({ email: "test-a@example.test" }),
    });
    const unknown = await anon("/api/auth/reset", {
      method: "POST",
      body: JSON.stringify({ email: "gibt-es-nicht@example.test" }),
    });
    expect(known.status).toBe(unknown.status);
    expect(await known.text()).toBe(await unknown.text());
  });
});
```

> Hinweis: Rate-Limit-Tests beeinflussen sich gegenseitig. Für Tests eigene Testkonten verwenden und Zähler zwischen Testläufen zurücksetzen (z. B. separater Speicher in der Testumgebung).

## T-SEC-12: Security-Header

```ts
// tests/security/headers.test.ts
import { it, expect } from "vitest";

it("T-SEC-12: Security-Header sind gesetzt", async () => {
  const res = await fetch(process.env.TEST_BASE_URL ?? "http://localhost:3000");
  const h = res.headers;
  expect(h.get("content-security-policy")).toBeTruthy();
  expect(h.get("x-content-type-options")).toBe("nosniff");
  expect(h.get("referrer-policy")).toBeTruthy();
  const csp = h.get("content-security-policy") ?? "";
  const xfo = h.get("x-frame-options") ?? "";
  expect(csp.includes("frame-ancestors") || xfo.toUpperCase() === "DENY").toBe(true);
});
```

## T-SEC-13: Build nach geheimen Schlüsseln durchsuchen

Ein kleines Skript, das in der CI nach dem Build läuft und fehlschlägt, wenn typische Muster geheimer Schlüssel im ausgelieferten Frontend auftauchen. Die Muster an die genutzten Dienste anpassen.

```js
// scripts/scan-build-for-secrets.mjs
// Aufruf: node scripts/scan-build-for-secrets.mjs dist
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2] ?? "dist";
const patterns = [
  /sk_live_[0-9a-zA-Z]{10,}/,          // Stripe Secret Key (live)
  /sk_test_[0-9a-zA-Z]{10,}/,          // Stripe Secret Key (test)
  /sb_secret_[0-9a-zA-Z_-]{10,}/,      // Supabase Secret Key (neues Format)
  /service_role/,                      // Hinweis auf Supabase Service-Role-Schlüssel
  /sk-ant-[0-9a-zA-Z_-]{10,}/,         // Anthropic API Key
  /sk-(proj-)?[0-9a-zA-Z_-]{20,}/,     // OpenAI-ähnliche Schlüssel
  /AKIA[0-9A-Z]{16}/,                  // AWS Access Key ID
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/,// private Schlüssel
];

let hits = 0;
function walk(p) {
  for (const name of readdirSync(p)) {
    const full = join(p, name);
    if (statSync(full).isDirectory()) { walk(full); continue; }
    if (!/\.(js|mjs|cjs|html|json|map|txt)$/.test(name)) continue;
    const text = readFileSync(full, "utf8");
    for (const re of patterns) {
      if (re.test(text)) { console.error(`Möglicher Schlüssel (${re}) in ${full}`); hits++; }
    }
  }
}
walk(dir);
if (hits > 0) { console.error(`${hits} Treffer – Build abgebrochen.`); process.exit(1); }
console.log("Keine verdächtigen Schlüssel im Build gefunden.");
```

## Datenbankregeln direkt testen (Supabase / Postgres)

Zugriffsregeln in der Datenbank lassen sich auch ohne API testen, z. B. mit pgTAP (`supabase test db`) oder mit zwei Supabase-Clients, die als unterschiedliche Testnutzer angemeldet sind. Grundidee:

```ts
// Zwei Clients mit dem öffentlichen Schlüssel, jeweils als anderer Nutzer angemeldet
const { data } = await clientA.from("entries").select("*").eq("id", idVonB);
expect(data).toEqual([]); // RLS liefert keine fremden Zeilen
```

## CI-Einbindung

Die Sicherheitstests laufen bei jedem Push und Pull Request. Ein Fehlschlag blockiert das Deployment (siehe Phase 20).
