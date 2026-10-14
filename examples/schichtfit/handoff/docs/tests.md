# Tests

| Funktion | Kriterien | Tests |
|---|---|---|
| F-01 | AK-F01-1, AK-F01-2 | TEST-F01-1, TEST-F01-2 |
| F-02 | AK-F02-1, AK-F02-2, AK-F02-3 | TEST-F02-1, TEST-F02-2, TEST-F02-3 |
| F-03 | AK-F03-1, AK-F03-2 | TEST-F03-1, TEST-F03-2 |
| F-06 | AK-F06-1 | TEST-F06-1 |

| Sicherheitstest | Sichert ab | Erwartung |
|---|---|---|
| T-SEC-01 | BD-01 | Fremde Schicht per ID: 404, keine Daten |
| T-SEC-02 | BD-01 | Schichtliste nur mit eigenen Einträgen |
| T-SEC-03 | BD-02 | Identische Antwort bei bekannter und unbekannter E-Mail |
| T-SEC-04 | BD-03 | Über dem Limit: `429` |
| T-SEC-05 | BD-04 | Fremde `owner_id` wird ignoriert |
| T-SEC-06 | BD-05 | Secret-Scan ohne Funde |

Die ausformulierten Kriterien stehen im Planungsprojekt in `19-tests.md`. Zeittests laufen mit Europe/Berlin und UTC, inklusive Tag der Zeitumstellung.
