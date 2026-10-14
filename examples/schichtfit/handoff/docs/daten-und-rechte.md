# Daten und Rechte

| Objekt | Felder | Besitzer | Zeitbezug |
|---|---|---|---|
| Nutzer | id, E-Mail, Zeitzone | der Nutzer | – |
| Schicht | id, owner_id, Starttag, Beginn, Ende, Zeitzone | owner_id | Wandzeit plus Zeitzone (E-001) |
| Einheit | id, owner_id, Datum, Art, Dauer, abgehakt_am | owner_id | abgehakt_am in UTC |

## Berechtigungen
Es gibt nur die Rolle „Nutzer“. Jeder Nutzer darf ausschließlich Datensätze lesen, ändern und löschen, deren `owner_id` seiner Sitzung entspricht. `owner_id` und `abgehakt_am` setzt der Server. Eine Schicht über Mitternacht gehört zum Starttag (E-002). Beim Löschen des Kontos werden alle Daten des Nutzers gelöscht.
