# Entscheidungen und akzeptierte Risiken

| ID | Datum | Entscheidung | Begründung | Verworfene Alternativen | Neu bewerten bis |
|---|---|---|---|---|---|
| E-001 | 2026-10-06 | Schichten als lokale Uhrzeit plus Zeitzone speichern (Wandzeit) | Eine Schicht „22:00“ soll nach der Zeitumstellung 22:00 bleiben (siehe guides/zeit-und-formate.md) [Q-001] | Alles in UTC speichern: Schicht würde nach der Umstellung um eine Stunde rutschen | 2027-03-01 |
| E-002 | 2026-10-06 | Eine Schicht über Mitternacht zählt zum Tag, an dem sie beginnt | Auswertungen „Training pro Tag“ bleiben eindeutig | Aufteilen auf zwei Tage: doppelte Zählung, schwer zu testen | 2027-03-01 |
| E-003 | 2026-10-08 | Fertigen Login-Anbieter nutzen (E-Mail-Link oder Passwort über den Anbieter) | Keine eigene Passwortverwaltung, weniger Risiko für einen Einsteiger [Q-002] | Eigener Login mit Passwort-Hashing | 2027-03-01 |
| E-004 | 2026-10-09 | Export (F-05) und Erinnerungen (F-04) kommen nach dem ersten Wurf | MVP klein halten, Erinnerungen brauchen Zeitzonen-Tests und Push-Berechtigungen | Alles im ersten Wurf | 2027-01-15 |
| E-005 | 2026-10-12 | Zugriffs-Antwortstrategie: 404 für Nutzerdaten | Existenz fremder Pläne soll nicht erkennbar sein | 403 mit Hinweis | 2027-03-01 |
