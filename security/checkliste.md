# Sicherheits-Checkliste vor dem Launch

> Spalte **Stufe** zeigt, ab welcher Risikostufe der Punkt Pflicht ist.
> **Ein Punkt gilt nur als erfüllt (☑), wenn in der Spalte „Nachweis“ etwas Überprüfbares steht:** Testname + Datum des grünen Laufs, Link zum CI-Lauf, Konfigurationsdatei, Screenshot, Datum des Wiederherstellungstests. „Erledigt“ oder „geprüft“ allein ist kein Nachweis.
> Nicht zutreffend: `n/a` mit Begründung in der Nachweis-Spalte. Nicht erfüllte Pflichtpunkte gehören in „Bewusst akzeptierte Risiken“ (`E-…`) – mit Begründung und Datum.
> Diese Checkliste wird in Phase 23 in `23-launch.md` übernommen; das Prüfskript (`--launch`) kontrolliert die Nachweise.

## Geheimnisse
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Keine geheimen Schlüssel im Frontend-Build / App-Paket (Build-Scan aus `sicherheitstests.md` grün) | 1 | |
| ☐ | `.env*` in `.gitignore`, `.env.example` vorhanden | 1 | |
| ☐ | GitHub Secret Scanning / Push Protection aktiv (oder `gitleaks` in CI) | 1 | |
| ☐ | Getrennte Schlüssel für Entwicklung / Test / Produktion | 2 | |
| ☐ | Liste aller Schlüssel mit Ort und Verantwortlichem; Rotationsplan | 3 | |

## Zugriffskontrolle
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Jede Tabelle mit Nutzerdaten hat aktive Zugriffsregeln (RLS / Security Rules / Server-Prüfung) | 2 | |
| ☐ | Test: Nutzer A kann Daten von B weder lesen, ändern, löschen noch in Listen sehen; Antwort gemäß Zugriffs-Antwortstrategie | 2 | |
| ☐ | Test: Dateien von B sind für A nicht abrufbar | 2 | |
| ☐ | Test: `role`, `owner_id` u. ä. können vom Client nicht gesetzt werden | 2 | |
| ☐ | Admin-Bereich serverseitig geschützt, Admins mit 2FA | 1 | |
| ☐ | Admin-Aktionen im Audit-Log | 3 | |

## Login & Sitzungen
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Erprobter Login-Anbieter oder Passwort-Hashing gemäß `docs/sicherheit.md` | 2 | |
| ☐ | Passwortregeln gemäß `docs/sicherheit.md` inkl. Prüfung gegen geleakte Passwörter | 2 | |
| ☐ | Keine Nutzer-Enumeration bei Login, Registrierung, Reset | 2 | |
| ☐ | Reset-Links einmalig, kurzlebig; Sitzungen nach Passwortänderung beendet | 2 | |
| ☐ | Cookies `HttpOnly`, `Secure`, `SameSite` | 2 | |
| ☐ | Logout beendet Sitzung serverseitig | 2 | |
| ☐ | 2FA für Nutzer angeboten (Stufe 3: Pflicht oder dringend empfohlen) | 3 | |

## Missbrauchsschutz
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Rate Limit auf Login, Registrierung, Reset (pro Konto und IP) gemäß `docs/sicherheit.md` – Test grün | 2 | |
| ☐ | Rate Limit / Tageslimit auf teuren Endpunkten + Budget-Grenze beim Anbieter | 1 | |
| ☐ | Keine dauerhafte automatische Kontosperre | 2 | |
| ☐ | Größenlimits für Anfragen, Uploads, Listen | 1 | |

## Eingaben & Ausgaben
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Serverseitige Schema-Validierung aller Eingaben | 1 | |
| ☐ | Nur parametrisierte Datenbankabfragen / ORM | 1 | |
| ☐ | Keine ungefilterte HTML-Ausgabe von Nutzerinhalten | 1 | |
| ☐ | CSRF-Schutz bei Cookie-Sitzungen | 2 | |
| ☐ | Uploads: Typprüfung, Größenlimit, privat, zufälliger Name | 1 | |
| ☐ | Keine offenen Weiterleitungen; SSRF-Schutz falls URLs abgerufen werden | 1 | |

## Transport & Browser
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | HTTPS überall, HSTS | 1 | |
| ☐ | Security-Header gesetzt (CSP, nosniff, Referrer-Policy, frame-ancestors, Permissions-Policy) | 1 | |
| ☐ | CORS nur eigene Domains | 1 | |
| ☐ | CSP ohne `unsafe-inline` / `unsafe-eval` (oder begründete Ausnahme) | 3 | |

## Daten & Betrieb
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Keine sensiblen Daten in Logs, URLs, Fehlermeldungen, Analytics, Push-Texten | 1 | |
| ☐ | Konto löschen entfernt alle Daten inkl. Dateien | 2 | |
| ☐ | Datenexport nur für den Nutzer selbst | 2 | |
| ☐ | Backups verschlüsselt, Wiederherstellung getestet | 2 | |
| ☐ | 2FA auf allen Betreiber-Zugängen (GitHub, Hosting, DB, Domain, E-Mail, Stores) | 1 | |
| ☐ | Fehler-Tracking ohne sensible Daten; Alarme für Sicherheitsereignisse | 2 | |
| ☐ | Notfallplan vorhanden | 2 | |

## Abhängigkeiten
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Lockfile eingecheckt | 1 | |
| ☐ | Keine bekannten hohen/kritischen Schwachstellen (`npm audit` o. ä.) | 1 | |
| ☐ | Automatische Update-Hinweise aktiv (Dependabot / Renovate) | 2 | |

## Zahlung, Webhooks, Mobile, KI (falls zutreffend)
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Preis und Freischaltung nur serverseitig; Webhook-Signatur geprüft | 1 | |
| ☐ | Mobile: keine Geheimnisse im Paket; Tokens im Keychain/Keystore | 2 | |
| ☐ | KI: Ausgaben nicht ungeprüft ausgeführt; nur erlaubte Daten im Kontext; Limits | 1 | |

## Abschluss
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Abgleich mit OWASP ASVS Level 1 | 2 | |
| ☐ | Abgleich mit OWASP ASVS Level 2 | 3 | |
| ☐ | Externe Prüfung (Pentest / Code-Review) durchgeführt oder bewusst verschoben | 3 | |
