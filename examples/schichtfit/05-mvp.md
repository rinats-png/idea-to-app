# MVP-Umfang

## Funktionen
| ID | Funktion | Priorität | User Story | Aufwand (S/M/L) | 🔒 Risiko-Markierung | Machbarkeit (grob) |
|---|---|---|---|---|---|---|
| F-01 | Konto anlegen und anmelden | Muss | Als Nutzer möchte ich ein eigenes Konto, damit nur ich meine Pläne sehe | M | Konten | 🟢 Standardbaustein |
| F-02 | Dienstplan eintragen | Muss | Als Nutzer möchte ich meine Schichten (Beginn, Ende) eintragen, damit die App meinen Alltag kennt | M | speichert personenbezogene Daten | 🟢 Standardbaustein |
| F-03 | Trainingsvorschläge passend zum Plan | Muss | Als Nutzer möchte ich pro freiem Fenster einen Vorschlag, damit ich nicht selbst planen muss | M | – | 🟡 Eigene Regel nötig (Fenster nach Schichtende) |
| F-04 | Erinnerung vor einer Einheit | Soll | Als Nutzer möchte ich erinnert werden, damit ich nicht vergesse zu trainieren | M | versendet | 🟡 Push auf iPhone eingeschränkt |
| F-05 | Daten exportieren | Kann | Als Nutzer möchte ich meine Daten mitnehmen können | S | lädt herunter | 🟢 Standardbaustein |
| F-06 | Training abhaken und Verlauf ansehen | Muss | Als Nutzer möchte ich sehen, was ich geschafft habe, damit ich motiviert bleibe | S | – | 🟢 Standardbaustein |

Pro Nutzer gibt es im ersten Wurf höchstens eine Schicht pro Tag.

Die Trainingsvorschläge sind allgemeine Fitness-Anregungen, keine medizinische Beratung; die App zeigt einen entsprechenden Hinweis. [ANNAHME A-003]

## Bewusst nicht im MVP
Kalender-Import, Wochenrückblick per E-Mail, Gruppen und Teilen mit anderen Nutzern.

## Missbrauchs- und Sicherheitscheck
- F-02 speichert Dienstpläne: nur der Besitzer darf lesen (BD-01).
- F-04 versendet Nachrichten: Zahl pro Tag begrenzen (BD-03).
