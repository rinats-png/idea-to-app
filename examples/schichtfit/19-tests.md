# Qualität & Tests

## Akzeptanzkriterien und Tests

### F-01 Konto anlegen und anmelden
| ID | Kriterium | Test | Ebene |
|---|---|---|---|
| AK-F01-1 | Gegeben eine neue E-Mail, wenn der Nutzer sich registriert, dann erhält er einen Anmelde-Link und die Antwort verrät nicht, ob die Adresse schon existiert | TEST-F01-1 | E2E |
| AK-F01-2 | Gegeben ein angemeldeter Nutzer, wenn er sich abmeldet, dann ist die Sitzung serverseitig beendet | TEST-F01-2 | E2E |

### F-02 Dienstplan eintragen
| ID | Kriterium | Test | Ebene |
|---|---|---|---|
| AK-F02-1 | Gegeben eine Schicht 22:00–06:00, wenn sie gespeichert wird, dann gehört sie zum Starttag | TEST-F02-1 | Einheit |
| AK-F02-2 | Gegeben ein Ende vor dem Beginn am selben Tag, wenn gespeichert wird, dann wird es als Schicht über Mitternacht behandelt oder verständlich abgelehnt | TEST-F02-2 | Einheit |
| AK-F02-3 | Gegeben Nutzer B, wenn er die Schicht von Nutzer A per ID abruft, dann ist der Zugriff verweigert | TEST-F02-3 | Integration |

### F-03 Trainingsvorschläge passend zum Plan
| ID | Kriterium | Test | Ebene |
|---|---|---|---|
| AK-F03-1 | Gegeben eine Nachtschicht, wenn Vorschläge berechnet werden, dann gibt es am Folgetag kein Training vor dem Schlaffenster | TEST-F03-1 | Einheit |
| AK-F03-2 | Gegeben die Nacht der Zeitumstellung, wenn Vorschläge berechnet werden, dann stimmt die Dauer der Schicht in Stunden | TEST-F03-2 | Einheit |

### F-06 Training abhaken und Verlauf ansehen
| ID | Kriterium | Test | Ebene |
|---|---|---|---|
| AK-F06-1 | Gegeben ein Vorschlag, wenn der Nutzer ihn abhakt, dann erscheint er im Verlauf mit Zeitpunkt vom Server | TEST-F06-1 | E2E |

## Rückverfolgungsmatrix
| Funktion | Priorität | Kriterien | Tests | Aufgaben (Phase 21) |
|---|---|---|---|---|
| F-01 | Muss | AK-F01-1, AK-F01-2 | TEST-F01-1, TEST-F01-2 | TASK-003 |
| F-02 | Muss | AK-F02-1, AK-F02-2, AK-F02-3 | TEST-F02-1, TEST-F02-2, TEST-F02-3 | TASK-004 |
| F-03 | Muss | AK-F03-1, AK-F03-2 | TEST-F03-1, TEST-F03-2 | TASK-005 |
| F-06 | Muss | AK-F06-1 | TEST-F06-1 | TASK-006 |

## Teststrategie
| Ebene | Werkzeug | Was | Wann |
|---|---|---|---|
| Einheit | Vitest | Zeit- und Vorschlagslogik | bei jeder Änderung |
| Integration | Vitest gegen Test-Datenbank | Zugriffsregeln | bei jeder Änderung |
| E2E | Playwright | Hauptabläufe | vor jedem Meilenstein |

Zeittests laufen mit den Zeitzonen Europe/Berlin und UTC (siehe guides/zeit-und-formate.md).

## Pflicht-Sicherheitstests
| ID | Test | Erwartung | Sichert ab |
|---|---|---|---|
| T-SEC-01 | Nutzer A liest Schicht von B per ID | verweigert (404), keine Daten | BD-01 |
| T-SEC-02 | Schichtliste von A | nur eigene Einträge | BD-01 |
| T-SEC-03 | Anmelden mit bekannter und unbekannter E-Mail | identische Antwort | BD-02 |
| T-SEC-04 | Zu viele Anmeldeversuche | `429` | BD-03 |
| T-SEC-05 | Anfrage mit fremder `owner_id` | Wert ignoriert | BD-04 |
| T-SEC-06 | Secret-Scan über Repository und Build | keine Funde | BD-05 |

Gegenprobe: Beim Bauen wird einmal geprüft, dass T-SEC-01 ohne aktive Zugriffsregel rot wird.
