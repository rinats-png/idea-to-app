# Sicherheitskonzept

Risikostufe: 2 | Zielstandard: Checkliste + OWASP ASVS Level 1

## Bedrohungsmodell
| ID | Was ist wertvoll? | Wer greift an? | Wie? (STRIDE) | Folge | Wahrscheinlichkeit | Gegenmaßnahme | Abschnitt | Test / akzeptiert |
|---|---|---|---|---|---|---|---|---|
| BD-01 | Dienstpläne (verraten Abwesenheit) | Neugieriger oder böswilliger Nutzer | ID in URL ändern (I) | Datenleck, Einbruchsrisiko | hoch | Besitzprüfung serverseitig + Row Level Security | C | T-SEC-01, T-SEC-02 |
| BD-02 | Konten | Angreifer von außen | Prüfen, ob eine E-Mail registriert ist (I) | Nutzer-Enumeration | mittel | Identische Antworten bei Login, Registrierung, Reset | D | T-SEC-03 |
| BD-03 | Verfügbarkeit, Kosten | Skript | Massenregistrierung und Login-Versuche (D) | Missbrauch, Kosten | mittel | Rate Limits pro IP und Konto | E | T-SEC-04 |
| BD-04 | Datenintegrität | Nutzer | `owner_id` im Anfragekörper setzen (T, E) | Fremde Daten überschreiben | mittel | Allowlist erlaubter Felder, Besitzer nur aus Sitzung | C | T-SEC-05 |
| BD-05 | Geheime Schlüssel | Jeder mit Zugriff auf Paket oder Repository | Schlüssel im Frontend oder Repository (I) | Vollzugriff auf Datenbank | mittel | Nur öffentlicher Schlüssel im Frontend, `.env` ignoriert, Scan in CI | A | T-SEC-06 |

## Projektwerte (aus security/standardwerte.md übernommen)
| Punkt | Wert | Abweichung vom Standard? Begründung |
|---|---|---|
| Zugriffs-Antwortstrategie | 404 für Nutzerdaten, 403 für Admin-Bereich (E-005) | – |
| Login | Anbieter: Supabase Auth, E-Mail-Link (E-003) | Keine eigene Passwortverwaltung; Abschnitt „Passwörter“ des Standards entfällt |
| Reset-Link-Laufzeit | wie Standardwert, Abschnitt 3 | – |
| Sitzungen | wie Standardwert für Stufe 2, Abschnitt 4 | – |
| 2FA | für Nutzer anbieten, für Betreiber-Zugänge Pflicht | – |

## Rate Limits
| Endpunkt | Pro Konto | Pro IP | Reaktion |
|---|---|---|---|
| Login | wie Standardwert, Abschnitt 6 | wie Standardwert | `429` + `Retry-After` |
| Registrierung | – | wie Standardwert | `429` |
| Allgemeine API | wie Standardwert | wie Standardwert | `429` |

## Schlüssel
| Name der Umgebungsvariable | Öffentlich / geheim | Wo gespeichert | Wer nutzt ihn |
|---|---|---|---|
| `VITE_SUPABASE_URL` | öffentlich | Build-Einstellung | Frontend |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | öffentlich (nur sicher mit aktiver Row Level Security) | Build-Einstellung | Frontend |
| `SUPABASE_SERVICE_ROLE_KEY` | geheim | nur Server-Umgebung, nie im Frontend | Server-Funktionen |

## Festlegungen A–K
- A Geheimnisse: `.env*` ist in `.gitignore`, `.env.example` mit Platzhaltern liegt im Repository (Regel 1.3).
- C Zugriff: Alle Tabellen mit Row Level Security; Standard ist verweigern (Regeln 2.1–2.6).
- D Login: Fertiger Anbieter, gleiche Antworten unabhängig vom Konto (Regel 3.4).
- E Missbrauchsschutz: Rate Limits laut Tabelle oben.
- K Externe Fachprüfung: Bei Stufe 2 nicht vorgeschrieben; eine Zweitprüfung mit frischem Kontext ist empfohlen und noch offen (Hinweis im Prüfbericht).

## Bewusst akzeptierte Risiken
| ID | Bezug | Risiko | Warum akzeptiert | Neu bewerten bis |
|---|---|---|---|---|
| E-006 | BD-03 | Kein CAPTCHA im ersten Wurf | Rate Limits reichen für eine kleine Nutzerzahl; wird bei Auffälligkeiten ergänzt | 2027-01-15 |

## Pflicht-Sicherheitstests (für Phase 19)
| Test | Sichert ab | Erwartung |
|---|---|---|
| T-SEC-01 | BD-01 | Nutzer A liest Schicht von B per ID: verweigert (404), keine Daten |
| T-SEC-02 | BD-01 | Liste der Schichten enthält nur eigene Einträge |
| T-SEC-03 | BD-02 | Antwort bei bekannter und unbekannter E-Mail ist identisch |
| T-SEC-04 | BD-03 | Nach Überschreiten des Limits kommt `429` |
| T-SEC-05 | BD-04 | Mitgesendete `owner_id` wird ignoriert |
| T-SEC-06 | BD-05 | Scan findet keinen geheimen Schlüssel im Repository und im Build |

## Missbrauchs- und Sicherheitscheck
- Jede Funktion mit 🔒 aus Phase 5 ist berücksichtigt: Konten und Schichten (BD-01 bis BD-04). Erinnerungen (F-04) kommen später und bekommen dann eine eigene Bedrohung.
