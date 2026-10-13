# Sicherheits-Checkliste vor dem Launch

> Spalte **Stufe** zeigt, ab welcher Risikostufe der Punkt Pflicht ist. Nicht zutreffende Punkte mit „n/a“ und kurzer Begründung markieren. Nicht erfüllte Pflichtpunkte gehören in „Bewusst akzeptierte Risiken“ – mit Begründung und Datum.

## Geheimnisse
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | Keine geheimen Schlüssel im Frontend-Build / App-Paket (Build-Scan aus `sicherheitstests.md` grün) | 1 |
| ☐ | `.env*` in `.gitignore`, `.env.example` vorhanden | 1 |
| ☐ | GitHub Secret Scanning / Push Protection aktiv (oder `gitleaks` in CI) | 1 |
| ☐ | Getrennte Schlüssel für Entwicklung / Test / Produktion | 2 |
| ☐ | Liste aller Schlüssel mit Ort und Verantwortlichem; Rotationsplan | 3 |

## Zugriffskontrolle
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | Jede Tabelle mit Nutzerdaten hat aktive Zugriffsregeln (RLS / Security Rules / Server-Prüfung) | 2 |
| ☐ | Test: Nutzer A kann Daten von B weder lesen, ändern, löschen noch in Listen sehen | 2 |
| ☐ | Test: Dateien von B sind für A nicht abrufbar | 2 |
| ☐ | Test: `role`, `owner_id` u. ä. können vom Client nicht gesetzt werden | 2 |
| ☐ | Admin-Bereich serverseitig geschützt, Admins mit 2FA | 1 |
| ☐ | Admin-Aktionen im Audit-Log | 3 |

## Login & Sitzungen
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | Erprobter Login-Anbieter oder Argon2id/bcrypt | 2 |
| ☐ | Mindestlänge und Prüfung gegen geleakte Passwörter | 2 |
| ☐ | Keine Nutzer-Enumeration bei Login, Registrierung, Reset | 2 |
| ☐ | Reset-Links einmalig, kurzlebig; Sitzungen nach Passwortänderung beendet | 2 |
| ☐ | Cookies `HttpOnly`, `Secure`, `SameSite` | 2 |
| ☐ | Logout beendet Sitzung serverseitig | 2 |
| ☐ | 2FA für Nutzer angeboten (Stufe 3: Pflicht oder dringend empfohlen) | 3 |

## Missbrauchsschutz
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | Rate Limit auf Login, Registrierung, Reset (pro Konto und IP) – Test grün | 2 |
| ☐ | Rate Limit / Tageslimit auf teuren Endpunkten + Budget-Grenze beim Anbieter | 1 |
| ☐ | Keine dauerhafte automatische Kontosperre | 2 |
| ☐ | Größenlimits für Anfragen, Uploads, Listen | 1 |

## Eingaben & Ausgaben
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | Serverseitige Schema-Validierung aller Eingaben | 1 |
| ☐ | Nur parametrisierte Datenbankabfragen / ORM | 1 |
| ☐ | Keine ungefilterte HTML-Ausgabe von Nutzerinhalten | 1 |
| ☐ | CSRF-Schutz bei Cookie-Sitzungen | 2 |
| ☐ | Uploads: Typprüfung, Größenlimit, privat, zufälliger Name | 1 |
| ☐ | Keine offenen Weiterleitungen; SSRF-Schutz falls URLs abgerufen werden | 1 |

## Transport & Browser
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | HTTPS überall, HSTS | 1 |
| ☐ | Security-Header gesetzt (CSP, nosniff, Referrer-Policy, frame-ancestors, Permissions-Policy) | 1 |
| ☐ | CORS nur eigene Domains | 1 |
| ☐ | CSP ohne `unsafe-inline` / `unsafe-eval` (oder begründete Ausnahme) | 3 |

## Daten & Betrieb
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | Keine sensiblen Daten in Logs, URLs, Fehlermeldungen, Analytics, Push-Texten | 1 |
| ☐ | Konto löschen entfernt alle Daten inkl. Dateien | 2 |
| ☐ | Datenexport nur für den Nutzer selbst | 2 |
| ☐ | Backups verschlüsselt, Wiederherstellung getestet | 2 |
| ☐ | 2FA auf allen Betreiber-Zugängen (GitHub, Hosting, DB, Domain, E-Mail, Stores) | 1 |
| ☐ | Fehler-Tracking ohne sensible Daten; Alarme für Sicherheitsereignisse | 2 |
| ☐ | Notfallplan vorhanden | 2 |

## Abhängigkeiten
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | Lockfile eingecheckt | 1 |
| ☐ | Keine bekannten hohen/kritischen Schwachstellen (`npm audit` o. ä.) | 1 |
| ☐ | Automatische Update-Hinweise aktiv (Dependabot / Renovate) | 2 |

## Zahlung, Webhooks, Mobile, KI (falls zutreffend)
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | Preis und Freischaltung nur serverseitig; Webhook-Signatur geprüft | 1 |
| ☐ | Mobile: keine Geheimnisse im Paket; Tokens im Keychain/Keystore | 2 |
| ☐ | KI: Ausgaben nicht ungeprüft ausgeführt; nur erlaubte Daten im Kontext; Limits | 1 |

## Abschluss
| ✓ | Prüfpunkt | Stufe |
|---|---|---|
| ☐ | Abgleich mit OWASP ASVS Level 1 | 2 |
| ☐ | Abgleich mit OWASP ASVS Level 2 | 3 |
| ☐ | Externe Prüfung (Pentest / Code-Review) durchgeführt oder bewusst verschoben | 3 |
