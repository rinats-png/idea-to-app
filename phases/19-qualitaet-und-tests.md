# Phase 19 – Qualität & Tests

> Kurz: Woran erkennen wir, dass eine Funktion fertig ist und sicher funktioniert?

| | |
|---|---|
| **Ziel** | Akzeptanzkriterien, Teststrategie, automatisierte Sicherheitstests, lückenlose Rückverfolgung |
| **Ergebnis** | `projekte/<slug>/19-tests.md` |
| **Visual** | Rückverfolgungsmatrix (Funktion → Kriterium → Test) |
| **Dauer** | ca. 15–20 Minuten |
| **Überspringen** | Lite-Modus: optional, aber **vor Veröffentlichung Pflicht** |
| **Referenz** | `security/sicherheitstests.md` |

## Für Einsteiger erklärt

KI-Tools schreiben schnell Code – aber sie behaupten auch gern, etwas sei „fertig“, obwohl es nicht richtig funktioniert. **Tests** sind kleine Programme, die automatisch prüfen, ob die App das Richtige tut. Besonders wichtig: Tests, die prüfen, dass die App das **Falsche nicht** tut – etwa dass Nutzer A niemals die Daten von Nutzer B sieht. Diese Tests laufen bei jeder Änderung automatisch und schlagen Alarm, wenn etwas kaputtgeht.

Damit nichts vergessen wird, bekommt alles eine Nummer: Jede Funktion (`F-01`) hat Kriterien (`AK-F01-1`), und jedes Kriterium hat einen Test (`TEST-F01-1`). So sieht man sofort, wo etwas fehlt.

## Fragen

**Q1 – Wie willst du selbst testen?**
- a) Ich klicke mich selbst durch (manuelle Checkliste) – plus automatische Tests, die die KI schreibt **(Empfehlung)**
- b) Nur automatische Tests
- c) Zusätzlich Testpersonen aus der Zielgruppe (Beta-Test)

**Q2 – Gibt es Abläufe, die auf keinen Fall kaputtgehen dürfen?** (Vorschläge: Login, Kernfunktion, Bezahlung, Datenexport, Konto löschen.)

**Q3 – Willst du einen Beta-Test vor dem Launch?** Wenn ja: mit wie vielen Personen, wie lange?

## Was die KI selbst ergänzen soll

- **Akzeptanzkriterien** für jede Muss-Funktion aus Phase 5, ID `AK-F01-1`, `AK-F01-2` …, im Format „**Gegeben** <Ausgangslage>, **wenn** <Aktion>, **dann** <Ergebnis>.“ – binär prüfbar.
- Für jedes Kriterium mindestens einen Test `TEST-F01-1` … mit Ebene (Unit / Integration / End-to-End).
- **Teststrategie** passend zum Stack aus Phase 13 (z. B. Vitest/Jest, Playwright, GitHub Actions) – Tests laufen automatisch bei jedem Push.
- **Pflicht-Sicherheitstests** aus Phase 12 und 14 übernehmen (`T-SEC-…`, jeweils mit Bezug `BD-…` oder Regel) und mit `security/sicherheitstests.md` ergänzen. Erwartungen bei verweigertem Zugriff gemäß **Zugriffs-Antwortstrategie** aus Phase 14 – und immer: keine fremden Daten in der Antwort.
- **Rückverfolgungsmatrix** (siehe Vorlage). Lücken offen benennen.
- **Manuelle Checkliste** für den Nutzer (Klick-Test vor jedem Release) in einfacher Sprache.
- Barrierefreiheit: automatischer Check (z. B. axe / Lighthouse) + kurzer Tastatur-Test.
- **Definition of Done für jede Aufgabe** (geht in den Handoff).

## Missbrauchs- und Sicherheitscheck

- Tests nutzen **eigene Testdaten und Testkonten**, nie echte Nutzerdaten, und laufen nie gegen die Produktionsdatenbank.
- Sicherheitstests müssen **fehlschlagen, wenn der Schutz fehlt** – beim Bauen einmal prüfen, dass der Test ohne Schutz wirklich rot wird.

## Ergebnis-Dokument `19-tests.md`

```markdown
# Qualität & Tests

## Akzeptanzkriterien und Tests
### F-01 <Funktion>
| ID | Kriterium | Test | Ebene |
|---|---|---|---|
| AK-F01-1 | Gegeben …, wenn …, dann … | TEST-F01-1 | E2E |

## Rückverfolgungsmatrix
| Funktion | Priorität | Kriterien | Tests | Aufgaben (Phase 21) |
|---|---|---|---|---|
| F-01 | Muss | AK-F01-1, AK-F01-2 | TEST-F01-1, TEST-F01-2 | (in Phase 21 ergänzen) |

## Teststrategie
| Ebene | Werkzeug | Was | Wann |
|---|---|---|---|

## Pflicht-Sicherheitstests
| ID | Test | Erwartung | Sichert ab |
|---|---|---|---|
| T-SEC-01 | Nutzer A liest Eintrag von B per ID | verweigert gemäß Strategie, keine Daten | BD-01 |

## Manuelle Release-Checkliste
- [ ] …

## Beta-Test
…

## Definition of Done (pro Aufgabe)
- …
```

## Definition of Done
- [ ] Jede Muss-Funktion hat mindestens ein `AK`, jedes `AK` mindestens einen `TEST`
- [ ] Jede Bedrohung aus Phase 14 hat einen `T-SEC` oder ein akzeptiertes Risiko
- [ ] Teststrategie mit Werkzeugen
- [ ] Manuelle Checkliste für den Nutzer

→ **Gate**
