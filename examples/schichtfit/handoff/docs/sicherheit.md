# Sicherheit (Projektwerte)

Risikostufe 2, Zielstandard Checkliste und OWASP ASVS Level 1. Ausgangswerte: `security/standardwerte.md` im idea-to-app-Repository; hier die Festlegungen für dieses Projekt.

## Zugriffs-Antwortstrategie
404 für Nutzerdaten (Schichten, Einheiten), 403 für einen späteren Admin-Bereich. Nicht angemeldet: 401. Keine Inhalte oder Hinweise auf fremde Datensätze (Regel 2.4).

## Login
Anbieter: Supabase Auth mit E-Mail-Link (E-003). Eigene Passwortverwaltung entfällt; Regeln 3.2 und 3.3 gelten nur, falls später doch Passwörter selbst gespeichert werden. Reset- und Bestätigungs-Links, Sitzungen und 2FA: Standardwerte für Stufe 2 (Abschnitte 3 bis 5). Antworten bei Login, Registrierung und Reset sind identisch (Regel 3.4).

## Rate Limits
Login, Registrierung und allgemeine API: Standardwerte aus Abschnitt 6; Reaktion `429` mit `Retry-After`. Keine dauerhafte automatische Kontosperre. Kein CAPTCHA im ersten Wurf (E-006).

## Schlüssel
| Name der Umgebungsvariable | Öffentlich / geheim | Wo gespeichert |
|---|---|---|
| `VITE_SUPABASE_URL` | öffentlich | Build-Einstellung |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | öffentlich, nur mit aktiver Row Level Security | Build-Einstellung |
| `SUPABASE_SERVICE_ROLE_KEY` | geheim | nur Server-Umgebung |

## Größenlimits, Header, Protokolle, Backups
Standardwerte aus den Abschnitten 7 bis 10; Abweichungen gibt es nicht.

## Bedrohungen und Tests
BD-01 bis BD-05 mit den Tests T-SEC-01 bis T-SEC-06 stehen in `docs/tests.md`.

## Bewusst akzeptierte Risiken
E-006: Kein CAPTCHA im ersten Wurf, neu bewerten bis 2027-01-15.
