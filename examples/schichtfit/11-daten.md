# Daten & Inhalte

| Objekt | Felder | Klasse | Besitzer | Zeitbezug |
|---|---|---|---|---|
| Nutzer | id, E-Mail, Zeitzone | personenbezogen | der Nutzer selbst | – |
| Schicht | id, owner_id, Starttag (Datum), Beginn (lokale Uhrzeit), Ende (lokale Uhrzeit), Zeitzone | personenbezogen, sensibel im Sinn von „verrät Abwesenheit“ | owner_id | Wandzeit + Zeitzone (E-001) |
| Einheit | id, owner_id, Datum, Art, Dauer, abgehakt_am | personenbezogen | owner_id | abgehakt_am als Zeitpunkt in UTC |

- Klassifizierung: keine besonderen Kategorien nach Art. 9 DSGVO, keine Zahlungsdaten, kein Standort. Risikostufe bleibt 2.
- Eine Schicht über Mitternacht gehört zum Starttag (E-002).
- Löschen: Beim Löschen des Kontos werden Schichten und Einheiten mit gelöscht.
- Der Server entscheidet über Besitzer und Zeitstempel; `owner_id` und `abgehakt_am` kommen nie vom Client.
