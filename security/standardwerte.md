# Sicherheits-Standardwerte

> **Einzige Stelle für konkrete Zahlen und Einstellungen.** Phase 14 übernimmt diese Werte projektspezifisch in `14-sicherheit.md` (und passt sie begründet an); Phase 22 überträgt sie nach `docs/sicherheit.md` im Handoff. Die Regeln in `regeln-fuer-ki.md` verweisen nur auf `docs/sicherheit.md` und enthalten selbst keine Zahlen.
>
> Die Werte orientieren sich an den OWASP Cheat Sheets (Password Storage, Authentication, Session Management, Forgot Password) und NIST SP 800-63B. Werte mit „Vorschlag“ sind sinnvolle Ausgangspunkte, keine Norm – an Nutzung und Risikostufe anpassen und Abweichungen begründen.

## 1. Zugriffs-Antwortstrategie (bei fehlender Berechtigung)

| Strategie | Wann | Verhalten |
|---|---|---|
| **404 – verbergen** (Standard) | Daten anderer Nutzer, deren Existenz niemanden etwas angeht (Einträge, Dateien, Profile) | Gleiche Antwort wie bei „gibt es nicht“ – Status, Text und möglichst Antwortzeit identisch |
| **403 – verweigern** | Der Nutzer weiß ohnehin, dass es die Ressource gibt (z. B. Admin-Seite, geteiltes Dokument nach Entzug der Freigabe), und eine Erklärung hilft ihm | Allgemeiner Hinweis ohne Inhalte |

Festlegung pro Projekt in `14-sicherheit.md` (ggf. pro Ressourcentyp). **Unabhängig von der Strategie:** keine Inhalte, Metadaten oder Hinweise auf den fremden Datensatz in der Antwort. Nicht angemeldet → `401`.

## 2. Passwörter (nur falls nicht vollständig über einen Login-Anbieter gelöst)

| Punkt | Wert |
|---|---|
| Hashing (bevorzugt) | **Argon2id**, mindestens 19 MiB Speicher (19456 KiB), 2 Iterationen, Parallelität 1 |
| Alternativen | **scrypt** (N=2^17, r=8, p=1) · **bcrypt** mit Kostenfaktor ≥ 10 – Achtung: bcrypt verarbeitet nur die ersten 72 Byte · **PBKDF2-HMAC-SHA256** mit ≥ 600.000 Iterationen nur, wenn FIPS-Vorgaben es verlangen |
| Mindestlänge | **12** Zeichen; **15**, wenn das Passwort der einzige Faktor ist (kein 2FA) |
| Maximallänge | mindestens 64 Zeichen erlauben |
| Erlaubte Zeichen | alle (inkl. Leerzeichen, Unicode) |
| Prüfung | gegen Liste bekannter geleakter Passwörter (z. B. Have-I-Been-Pwned-Range-API, k-Anonymität) |
| Kompositionsregeln | **keine** Pflicht zu Sonderzeichen/Ziffern |
| Zwangswechsel | **nein**, nur bei Verdacht auf Kompromittierung |

## 3. Tokens und Links

| Art | Zufall | Speicherung | Laufzeit | Nutzung |
|---|---|---|---|---|
| Passwort-Reset | ≥ 128 Bit | gehasht | **≤ 60 min** (Vorschlag: 30 min) | einmalig; danach alle Sitzungen beenden |
| E-Mail-Bestätigung | ≥ 128 Bit | gehasht | ≤ 24 h | einmalig |
| Einladung | ≥ 128 Bit | gehasht | ≤ 7 Tage (Vorschlag) | einmalig, widerrufbar |
| Teilen-Link | ≥ 128 Bit | gehasht oder als Zufalls-ID | nach Wahl, widerrufbar | Rechte nur „lesen“, wenn nicht anders entschieden |
| Signierte Datei-URL | vom Anbieter | – | 5–15 min (Vorschlag) | nach Berechtigungsprüfung erzeugen |

## 4. Sitzungen (Vorschlag – an Nutzung anpassen)

| Stufe | Inaktivitäts-Timeout | Absolute Höchstdauer | Erneute Anmeldung für sensible Aktionen |
|---|---|---|---|
| 2 | bis 30 Tage mit „angemeldet bleiben“, sonst 24 h | 90 Tage | Anmeldung nicht älter als 15 min (E-Mail/Passwort ändern, Konto löschen, Export) |
| 3 | 30 min bis 12 h je nach Nutzung | 24 h bis 7 Tage | wie Stufe 2, zusätzlich 2FA-Bestätigung |
| Admins | ≤ 30 min | ≤ 12 h | immer mit 2FA |

Cookies: `HttpOnly`, `Secure`, `SameSite=Lax` (oder `Strict`), neue Sitzungs-ID nach Login.

## 5. Zwei-Faktor-Authentisierung

| Wer | Stufe 1 | Stufe 2 | Stufe 3 |
|---|---|---|---|
| Admins / Betreiber-Zugänge | Pflicht | Pflicht | Pflicht |
| Normale Nutzer | – | anbieten | Pflicht oder dringend empfohlen |

Verfahren: Passkeys oder TOTP-App; SMS nur als Notlösung.

## 6. Rate Limits (Vorschlag)

| Endpunkt | Pro Konto | Pro IP | Reaktion |
|---|---|---|---|
| Login | 5 Fehlversuche / 15 min → steigende Wartezeit; ab 10 → 15–30 min vorübergehend gesperrt | 20 Fehlversuche / 15 min | `429` + `Retry-After`, ab Auffälligkeit CAPTCHA; Benachrichtigung an Nutzer bei vielen Fehlversuchen |
| Registrierung | – | 5 / Stunde | `429`, CAPTCHA bei Auffälligkeit |
| Passwort-Reset / E-Mail-Versand | 3 / Stunde | 10 / Stunde | gleiche Antwort wie bei Erfolg (keine Enumeration), intern nicht versenden |
| Allgemeine API | 60–120 / min | 300 / min | `429` |
| Teure Endpunkte (KI, SMS, Export) | Tageslimit nach Kostenrechnung (Phase 17) | eng | `429` + verständlicher Hinweis |

**Keine dauerhafte automatische Kontosperre** – sie lässt sich missbrauchen, um fremde Konten gezielt zu blockieren. Zähler serverseitig und – bei mehreren Server-Instanzen – in einem gemeinsamen Speicher.

## 7. Größenlimits (Vorschlag)

| Was | Wert |
|---|---|
| JSON-Anfrage | 100 KB |
| Bild-Upload | 5 MB; erlaubte Typen explizit (z. B. JPEG, PNG, WebP), Inhalt prüfen, neu kodieren |
| Dokument-Upload | 10 MB; nur benötigte Typen |
| Listen / Seiten | max. 100 Einträge pro Abruf |
| Freitextfelder | sinnvolles Maximum je Feld (z. B. Titel 200, Notiz 10.000 Zeichen) |

## 8. Security-Header (Grundlinie)

| Header | Wert |
|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains` |
| `Content-Security-Policy` | Start: `default-src 'self'; img-src 'self' data: blob:; connect-src 'self' <eigene APIs>; frame-ancestors 'none'; base-uri 'self'; form-action 'self'` – an genutzte Dienste anpassen, ohne `unsafe-inline`/`unsafe-eval` wo machbar |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | ungenutzte Funktionen sperren, z. B. `camera=(), microphone=(), geolocation=()` |
| CORS | nur eigene Domains, kein `*` bei Endpunkten mit Anmeldung |

## 9. Protokollierung & Aufbewahrung (Vorschlag)

| Was | Wert |
|---|---|
| Sicherheitsereignisse | Login (Erfolg/Fehlschlag), Passwortänderung, 2FA-Änderung, verweigerte Zugriffe, Admin-Aktionen, Rate-Limit-Treffer |
| Niemals loggen | Passwörter, Tokens, Schlüssel, Gesundheits- und andere sensible Inhalte |
| Aufbewahrung Sicherheitslogs | 30–90 Tage (Abwägung Sicherheit vs. Datensparsamkeit, in Phase 16 dokumentieren) |
| Audit-Log Admin-Aktionen | ab Stufe 3 Pflicht, länger aufbewahren als Betriebslogs |

## 10. Backups (Vorschlag)

| Punkt | Wert |
|---|---|
| Häufigkeit | täglich (bei „kein Datenverlust“ zusätzlich Point-in-Time-Recovery des Anbieters) |
| Aufbewahrung | 7–30 Tage; gelöschte Nutzerdaten verschwinden spätestens mit Ablauf |
| Wiederherstellungstest | vor Launch, danach vierteljährlich |
