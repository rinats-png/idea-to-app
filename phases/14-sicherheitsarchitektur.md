# Phase 14 – Sicherheitsarchitektur

> Kurz: Wir legen fest, wie die App gegen die häufigsten Angriffe geschützt wird – bevor eine Zeile Code entsteht.

| | |
|---|---|
| **Ziel** | Verbindliches Sicherheitskonzept passend zur Risikostufe |
| **Ergebnis** | `projekte/<slug>/14-sicherheit.md` |
| **Visual** | Bedrohungsmodell-Tabelle + Datenfluss mit Vertrauensgrenzen |
| **Dauer** | ca. 20–40 Minuten |
| **Überspringen** | **nie** (Umfang richtet sich nach der Risikostufe) |
| **Referenz** | `security/` – vor dieser Phase `security/README.md` und `security/regeln-fuer-ki.md` lesen |

## Für Einsteiger erklärt

Die meisten Sicherheitsprobleme in Apps sind keine raffinierten Hacks, sondern **vergessene Grundregeln**: ein geheimer Schlüssel im Code, eine fehlende Berechtigungsprüfung, unbegrenzte Login-Versuche. KI-Coding-Tools vergessen diese Regeln besonders gern, wenn man sie nicht ausdrücklich verlangt. In dieser Phase legen wir sie fest – und in Phase 22 werden sie dem Coding-Tool als **nicht verhandelbare Regeln** mitgegeben.

**Du musst dafür kein Sicherheitsexperte sein.** Ich schlage für alles sinnvolle Standards vor und erkläre sie. Du entscheidest nur dort, wo es echte Wahlmöglichkeiten gibt.

## Ablauf für die KI

1. Lies `security/README.md`, `security/regeln-fuer-ki.md` und `security/bedrohungsmodell.md`.
2. Bestimme die Abschnitte nach Risikostufe und Überspring-Logik (Tabelle unten).
3. Erstelle zuerst gemeinsam ein **kurzes Bedrohungsmodell** (Q1–Q3).
4. Gehe dann die Abschnitte A–K durch. **Setze Standards selbst** und stelle nur die markierten Fragen. Erkläre jeden Standard in einem Satz („Warum?“).
5. Schreibe das Sicherheitskonzept und die daraus folgenden Testfälle.

| Abschnitt | Stufe 1 | Stufe 2 | Stufe 3 |
|---|---|---|---|
| Bedrohungsmodell | kurz | normal | ausführlich |
| A Passwörter & Login | – (keine Konten) | ✅ | ✅ + 2FA-Pflicht für Admins, 2FA-Angebot für Nutzer |
| B Sitzungen | – | ✅ | ✅ kürzere Laufzeiten |
| C Zugriffskontrolle | Admin-Bereich | ✅ | ✅ + Audit-Log |
| D Secrets & Schlüssel | ✅ | ✅ | ✅ + Rotation geplant |
| E Missbrauchsschutz | ✅ | ✅ | ✅ + Alarmierung |
| F Eingaben & Ausgaben | ✅ | ✅ | ✅ |
| G Transport & Browser | ✅ | ✅ | ✅ strenge CSP |
| H Daten | Basis | ✅ | ✅ + Feldverschlüsselung prüfen |
| I Zahlung, Webhooks, Mobile, KI | wenn zutreffend | wenn zutreffend | wenn zutreffend |
| J Lieferkette, Logging, Fehler | ✅ | ✅ | ✅ |
| K Verifikation | Checkliste | ASVS Level 1 | ASVS Level 2 + externe Prüfung |

## Fragen

**Q1 – Was ist in deiner App am wertvollsten oder am peinlichsten, wenn es in falsche Hände gerät?** (Die KI schlägt aus Phase 11 vor: z. B. „Gesundheitsnotizen“, „E-Mail-Liste“, „Zahlungen“, „Admin-Zugang“.)

**Q2 – Wer könnte ein Interesse haben, die App anzugreifen oder zu missbrauchen?** (Die KI schlägt vor: automatisierte Bots, neugierige Nutzer, Ex-Partner/Bekannte eines Nutzers, Spammer, Konkurrenz, Insider mit Admin-Rechten.)

**Q3 – Was wäre das Schlimmste, das passieren könnte?** (Datenleck, Kontoübernahme, hohe Rechnung durch Missbrauch teurer Dienste, App wird für Spam genutzt, Ausfall.)

**Q4 (nur Stufe 2–3) – Login-Methode:**
- a) **Erprobter Login-Anbieter** (z. B. Supabase Auth, Firebase Auth, Auth.js, Clerk) **(Empfehlung – eigene Login-Systeme sind die häufigste Fehlerquelle)**
- b) Zusätzlich / nur „Login mit Google / Apple“
- c) Magic Link (Login per E-Mail-Link, kein Passwort)
- d) Eigenes Passwort-System (nur mit Begründung; dann gelten alle Regeln aus A ausdrücklich)

**Q5 (nur Stufe 2–3) – Zwei-Faktor-Anmeldung (2FA) für normale Nutzer?**
- a) Optional anbieten **(Empfehlung Stufe 2)**
- b) Pflicht **(Empfehlung Stufe 3)**
- c) Nicht im MVP (dokumentiertes Risiko; für Admins trotzdem Pflicht)

**Q6 – Was soll passieren, wenn jemand sehr oft falsche Passwörter eingibt?** Die KI erklärt die Optionen und empfiehlt **steigende Wartezeit + vorübergehende Sperre + CAPTCHA**, statt dauerhafter Kontosperre (siehe E).

Alle weiteren Punkte setzt die KI als Standard und fragt nur bei echten Zielkonflikten nach.

---

## A. Passwörter & Login (bei Nutzerkonten)

| Regel | Standard | Warum |
|---|---|---|
| Hashing | **Argon2id** (min. 19 MiB Speicher, 2 Iterationen, Parallelität 1) oder **bcrypt** (Kostenfaktor ≥ 10; Achtung: bcrypt nutzt nur die ersten 72 Byte) | Gestohlene Hashes lassen sich so kaum zurückrechnen |
| Keine eigene Krypto | Bibliothek bzw. Login-Anbieter nutzen | Selbstgebautes ist fast immer fehlerhaft |
| Passwortregeln | Mindestlänge **12** (besser 15), Maximallänge ≥ 64, alle Zeichen erlaubt, **Abgleich mit bekannten geleakten Passwörtern** (z. B. Have-I-Been-Pwned-Range-API), **keine** Pflicht-Sonderzeichen, **kein** Zwangswechsel ohne Anlass | Länge schützt mehr als Komplexität; Pflichtregeln führen zu „Passwort1!“ |
| Passwort-Manager | Einfügen erlauben, `autocomplete`-Attribute setzen | Fördert starke Passwörter |
| E-Mail-Bestätigung | Vor sensiblen Aktionen Pflicht | Verhindert Konten auf fremde Adressen |
| Passwort zurücksetzen | Einmal-Token, zufällig (≥ 128 Bit), **gehasht gespeichert**, Ablauf ≤ 60 Min., nach Nutzung ungültig, alle Sitzungen danach abmelden | Reset-Links sind ein beliebter Angriffsweg |
| Keine Nutzer-Enumeration | Login, Registrierung und Reset antworten **gleich**, egal ob die E-Mail existiert („Falls ein Konto existiert, haben wir eine E-Mail geschickt.“) | Sonst lässt sich prüfen, wer Kunde ist |
| 2FA | TOTP-App oder Passkeys; Pflicht für Admins | Schützt bei gestohlenem Passwort |
| Wichtige Änderungen | E-Mail-/Passwortänderung erfordert erneute Anmeldung, Benachrichtigung an alte E-Mail | Erschwert Kontoübernahme |

## B. Sitzungen

- Sitzungs-Cookies mit `HttpOnly`, `Secure`, `SameSite=Lax` (oder `Strict`).
- **Neue Sitzungs-ID nach dem Login** (gegen Session Fixation).
- Abmelden beendet die Sitzung **serverseitig**; „Überall abmelden“ anbieten.
- Laufzeiten: Inaktivitäts-Timeout und absolute Maximaldauer festlegen (Stufe 3 kürzer).
- Tokens nicht im `localStorage` ablegen, wenn eine Cookie-Lösung möglich ist (Schutz vor Diebstahl über XSS). Wenn der Login-Anbieter es anders vorsieht: dessen Empfehlung folgen und XSS-Schutz (F, G) besonders ernst nehmen.

## C. Zugriffskontrolle (gegen „ID in der URL ändern“)

Aus Phase 12 übernehmen und technisch festschreiben:
- **Jede** Anfrage auf Daten prüft **serverseitig**, ob der angemeldete Nutzer sie lesen/ändern darf. Die ID aus URL oder Formular ist nur ein Wunsch.
- **Deny by default.**
- Abfragen immer mit Besitzfilter, z. B. `WHERE id = :id AND owner_id = :aktueller_nutzer`.
- **Zweite Schutzebene in der Datenbank**: Row Level Security (Supabase/Postgres) bzw. Security Rules (Firebase). Beispiele: `security/stack-hinweise.md`.
- **Mass Assignment verhindern**: Nur erlaubte Felder aus der Anfrage übernehmen (Allowlist). Felder wie `id`, `owner_id`, `role`, `is_admin`, `plan`, `price`, `created_at` setzt nur der Server.
- Kein Zugriff → **404**.
- UUIDs statt fortlaufender IDs (zusätzlich – kein Ersatz für die Prüfung).
- Dateien nur über **kurzlebige, signierte URLs** nach Berechtigungsprüfung.
- Admin-Aktionen mit **Audit-Log** (wer, was, wann, warum).

## D. Secrets & API-Schlüssel

- **Geheime Schlüssel niemals im Frontend, in der App oder im Repository.** Apps und Webseiten lassen sich auslesen.
- Unterscheiden:
  - **Öffentliche Schlüssel** (dafür gebaut, im Browser zu stehen: z. B. Supabase Publishable/Anon Key, Stripe Publishable Key, Karten-Schlüssel mit Domain-Beschränkung) → erlaubt, **aber nur sicher, wenn die Absicherung serverseitig steht** (RLS, Domain-Beschränkung, Limits).
  - **Geheime Schlüssel** (Supabase Service-Role/Secret Key, Stripe Secret Key, KI-API-Schlüssel, SMTP-Passwörter, Datenbank-Passwörter) → nur auf dem Server bzw. in Edge Functions.
- Aufrufe kostenpflichtiger APIs (KI, SMS, E-Mail) **über das eigene Backend** leiten – mit Login-Prüfung und Limits.
- `.env`-Dateien in `.gitignore`; eine `.env.example` ohne echte Werte ins Repository.
- Secret-Scanning (z. B. GitHub Secret Scanning / Push Protection, `gitleaks`).
- **Eigene Schlüssel pro Umgebung**; Plan, was bei einem Leak passiert (Schlüssel sofort widerrufen und neu erzeugen).

## E. Missbrauchsschutz (Brute Force, Bots, Kosten)

| Maßnahme | Standard-Vorschlag (anpassbar) |
|---|---|
| Login | pro **Konto** und pro **IP** begrenzen, z. B. 5 Fehlversuche in 15 Min. → steigende Wartezeit; ab ~10 → 15–30 Min. vorübergehend gesperrt + CAPTCHA |
| Registrierung | pro IP begrenzen (z. B. 5 pro Stunde); CAPTCHA bei Auffälligkeit |
| Passwort-Reset / E-Mail-Versand | pro Konto und IP begrenzen (z. B. 3 pro Stunde) |
| Allgemeine API | pro Nutzer und IP, z. B. 60–120 Anfragen / Minute; Antwort `429 Too Many Requests` |
| Teure Endpunkte (KI, SMS, Export) | eigenes, enges Tageslimit pro Nutzer + **Budget-Obergrenze** beim Anbieter |
| Größenlimits | max. Anfragegröße, Upload-Größe, Seitengröße bei Listen (z. B. max. 100 Einträge) |
| Benachrichtigung | E-Mail bei Login von neuem Gerät / nach vielen Fehlversuchen |

**Warum keine dauerhafte Kontosperre?** Wenn ein Konto nach X Fehlversuchen dauerhaft gesperrt wird, kann ein Angreifer gezielt fremde Konten lahmlegen, indem er absichtlich falsche Passwörter eingibt. Steigende Wartezeiten und vorübergehende Sperren bremsen Angreifer genauso, ohne echte Nutzer auszusperren.

Umsetzung: Viele Login-Anbieter haben eingebaute Limits (prüfen und dokumentieren); zusätzlich Limits im eigenen Backend bzw. über die Hosting-Plattform (Firewall/WAF). Rate-Limit-Zähler müssen serverseitig liegen (nicht im Browser).

## F. Eingaben & Ausgaben

- **Validierung immer serverseitig** mit Schema (z. B. `zod`), Frontend-Validierung nur für Komfort.
- Datenbankzugriffe nur **parametrisiert** bzw. über ORM/Query-Builder (gegen SQL-Injection). Nie Nutzereingaben in SQL-Strings zusammenbauen.
- **Ausgaben escapen** (gegen XSS). Kein `innerHTML` / `dangerouslySetInnerHTML` mit Nutzerinhalten; falls Rich-Text nötig: mit `DOMPurify` o. ä. bereinigen.
- **CSRF-Schutz** bei cookie-basierten Sitzungen (SameSite + Token bzw. Framework-Schutz).
- **Datei-Uploads**: Typ anhand des Inhalts prüfen (nicht nur Endung), Größenlimit, neuer zufälliger Dateiname, privat speichern, nie ausführbar; Bilder ggf. neu kodieren (entfernt Metadaten wie GPS).
- **SSRF**: Falls die App fremde URLs abruft (Link-Vorschau, Import) → Allowlist, keine internen Adressen.
- **Weiterleitungen** nur auf eigene Ziele (keine offenen Redirects).

## G. Transport & Browser

- Nur **HTTPS**, **HSTS** aktivieren.
- Security-Header: `Content-Security-Policy` (so streng wie möglich), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `frame-ancestors 'none'` (bzw. `X-Frame-Options: DENY`), `Permissions-Policy` (nicht benötigte Funktionen wie Kamera abschalten).
- **CORS** nur für eigene Domains; nie `*` bei Endpunkten mit Login.
- Cookies wie in B.

## H. Daten

- Verschlüsselung bei Übertragung (HTTPS) und Speicherung (beim Anbieter aktiviert – prüfen).
- Stufe 3: Prüfen, ob besonders sensible Felder zusätzlich verschlüsselt werden müssen.
- **Datensparsamkeit** (Phase 11): nicht speichern, was nicht gebraucht wird.
- Keine sensiblen Daten in **URLs, Logs, Fehlermeldungen, Analytics, Push-Texten**.
- Backups verschlüsselt, **Wiederherstellung getestet** (Phase 20).
- Lokale Daten auf dem Gerät (Offline): Native → Keychain/Keystore für Tokens; Web → keine sensiblen Daten unverschlüsselt im `localStorage`.

## I. Zahlung, Webhooks, Mobile, KI-Funktionen (wenn zutreffend)

- **Zahlung**: Preis, Produkt und Freischaltung bestimmt **der Server**, nie der Client. Freischaltung erst nach bestätigtem Zahlungseingang (Webhook). Keine Kartendaten selbst speichern – Zahlungsanbieter (z. B. Stripe, App-Store-Käufe) nutzen.
- **Webhooks**: Signatur prüfen, Zeitstempel prüfen (gegen Wiederholung), idempotent verarbeiten.
- **Mobile Apps**: keine Geheimnisse im App-Paket; Tokens im Keychain/Keystore; Deep Links validieren; nur nötige Berechtigungen (Kamera, Standort …) anfragen.
- **KI-Funktionen in der App**:
  - Mit **Prompt-Injection** rechnen: Nutzereingaben und eingelesene Dokumente können Anweisungen enthalten.
  - KI-Ausgaben nie ungeprüft als Befehl, SQL, HTML oder Berechtigungsentscheidung verwenden.
  - Der KI nur Daten geben, die der aktuelle Nutzer sehen darf.
  - Kosten- und Anfragelimits pro Nutzer (siehe E).
  - Nutzer informieren, welche Daten an welchen KI-Anbieter gehen (Phase 16).

## J. Lieferkette, Logging, Fehlerbehandlung

- Lockfile (`package-lock.json` o. ä.) einchecken; automatische Prüfung (Dependabot, `npm audit`); nur verbreitete, gepflegte Pakete.
- **Sicherheitsereignisse protokollieren**: Logins, Fehlversuche, Passwortänderungen, verweigerte Zugriffe, Admin-Aktionen, Rate-Limit-Treffer – **ohne** Passwörter, Tokens oder sensible Inhalte.
- Alarm bei Auffälligkeiten (Stufe 3 Pflicht, Stufe 2 empfohlen).
- Fehlermeldungen für Nutzer allgemein; Details (Stacktrace) nur im Server-Log.

## K. Verifikation

- Abschluss-Prüfung mit `security/checkliste.md`.
- Stufe 2: Orientierung an **OWASP ASVS Level 1**; Stufe 3: **Level 2**.
- Automatisierte Sicherheitstests (Phase 19, Vorlagen in `security/sicherheitstests.md`).
- Stufe 3: **Externe Prüfung** (Penetrationstest oder Code-Review durch Fachperson) vor dem Launch dringend empfohlen.
- Ehrlicher Hinweis an den Nutzer: **Dieses Konzept macht die App nicht automatisch sicher.** Es sorgt dafür, dass die richtigen Regeln gelten und geprüft werden. KI-generierter Code muss trotzdem getestet und überprüft werden.

---

## Ergebnis-Dokument `14-sicherheit.md`

```markdown
# Sicherheitskonzept

Risikostufe: … | Zielstandard: Checkliste / ASVS L1 / ASVS L2

## Bedrohungsmodell
| Was ist wertvoll? | Wer greift an? | Wie? | Folge | Gegenmaßnahme | Abschnitt |
|---|---|---|---|---|---|

## Festlegungen
### A Login & Passwörter
…
### B Sitzungen
…
### C Zugriffskontrolle
…
### D Secrets
| Schlüssel | Typ (öffentlich/geheim) | Wo gespeichert | Wer nutzt ihn |
|---|---|---|---|
### E Missbrauchsschutz
| Endpunkt | Limit | Reaktion |
|---|---|---|
### F–J
…

## Bewusst akzeptierte Risiken
| Risiko | Warum akzeptiert | Wann neu bewerten |
|---|---|---|

## Pflicht-Sicherheitstests (für Phase 19)
- …
```

## Definition of Done
- [ ] Bedrohungsmodell mit mindestens 5 Einträgen (Stufe 1: 3)
- [ ] Alle zutreffenden Abschnitte A–K festgelegt
- [ ] Liste aller Schlüssel mit Einstufung öffentlich/geheim
- [ ] Rate-Limits pro sensiblen Endpunkt
- [ ] Akzeptierte Risiken dokumentiert (inkl. abgelehnter Empfehlungen)
- [ ] Testfälle formuliert

→ **Standard-Gate**
