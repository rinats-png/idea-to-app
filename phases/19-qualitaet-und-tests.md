# Phase 19 – Qualität & Tests

> Kurz: Woran erkennen wir, dass eine Funktion fertig ist und sicher funktioniert?

| | |
|---|---|
| **Ziel** | Akzeptanzkriterien, Teststrategie, automatisierte Sicherheitstests |
| **Ergebnis** | `projekte/<slug>/19-tests.md` |
| **Visual** | Testmatrix (Tabelle) |
| **Dauer** | ca. 15–20 Minuten |
| **Überspringen** | Lite-Modus: optional, aber **vor Veröffentlichung Pflicht** |
| **Referenz** | `security/sicherheitstests.md` |

## Für Einsteiger erklärt

KI-Tools schreiben schnell Code – aber sie behaupten auch gern, etwas sei „fertig“, obwohl es nicht richtig funktioniert. **Tests** sind kleine Programme, die automatisch prüfen, ob die App das Richtige tut. Besonders wichtig: Tests, die prüfen, dass die App das **Falsche nicht** tut – etwa dass Nutzer A niemals die Daten von Nutzer B sieht. Diese Tests laufen bei jeder Änderung automatisch und schlagen Alarm, wenn etwas kaputtgeht.

## Fragen

**Q1 – Wie willst du selbst testen?**
- a) Ich klicke mich selbst durch (manuelle Checkliste) – plus automatische Tests, die die KI schreibt **(Empfehlung)**
- b) Nur automatische Tests
- c) Zusätzlich Testpersonen aus der Zielgruppe (Beta-Test)

**Q2 – Gibt es Abläufe, die auf keinen Fall kaputtgehen dürfen?** (Die KI schlägt vor: Login, Kernfunktion, Bezahlung, Datenexport, Konto löschen.)

**Q3 – Willst du einen Beta-Test vor dem Launch?** Wenn ja: mit wie vielen Personen, wie lange?

## Was die KI selbst ergänzen soll

- **Akzeptanzkriterien** für jede Muss-Funktion aus Phase 5 im Format:
  „**Gegeben** <Ausgangslage>, **wenn** <Aktion>, **dann** <Ergebnis>.“ – binär prüfbar (erfüllt / nicht erfüllt).
- **Teststrategie** (passend zum Stack aus Phase 13):
  - Unit-Tests für Logik (z. B. Vitest / Jest)
  - Integrationstests für API und Datenbankregeln
  - End-to-End-Tests für die kritischen Abläufe (z. B. Playwright)
  - Automatisch bei jedem Push (z. B. GitHub Actions)
- **Pflicht-Sicherheitstests** aus Phase 12 und 14 übernehmen und mit `security/sicherheitstests.md` ergänzen:
  - Zugriff auf fremde Daten per ID → 404 (lesen, ändern, löschen, Listen, Dateien)
  - Mass Assignment (`role`, `owner_id`) wird ignoriert
  - Rate Limit greift (Login, Reset, teure Endpunkte)
  - Keine Nutzer-Enumeration (gleiche Antwort für existierende und nicht existierende E-Mail)
  - Ohne Anmeldung kein Zugriff auf geschützte Endpunkte
  - Security-Header vorhanden
  - Keine geheimen Schlüssel im ausgelieferten Frontend (Build durchsuchen)
  - Eingaben mit Sonderzeichen / HTML / sehr lang werden sicher behandelt
- **Manuelle Checkliste** für den Nutzer (Klick-Test vor jedem Release) in einfacher Sprache.
- Barrierefreiheit: automatischer Check (z. B. axe / Lighthouse) + kurzer Tastatur-Test.
- **Definition of Done für jede Aufgabe** (geht in den Handoff): Akzeptanzkriterien erfüllt, Tests geschrieben und grün, Sicherheitsregeln eingehalten, keine Fehler in der Konsole, Doku aktualisiert.

## Missbrauchs- und Sicherheitscheck

- Tests nutzen **eigene Testdaten und Testkonten**, nie echte Nutzerdaten.
- Sicherheitstests müssen **fehlschlagen, wenn der Schutz fehlt** – die KI soll beim Bauen einmal prüfen, dass der Test ohne Schutz wirklich rot wird.
- Tests dürfen nicht gegen die Produktionsdatenbank laufen.

## Ergebnis-Dokument `19-tests.md`

```markdown
# Qualität & Tests

## Akzeptanzkriterien
### F1 <Funktion>
- Gegeben …, wenn …, dann …

## Teststrategie
| Ebene | Werkzeug | Was | Wann |
|---|---|---|---|

## Pflicht-Sicherheitstests
| # | Test | Erwartung | Quelle |
|---|---|---|---|
| T-SEC-01 | Nutzer A liest Eintrag von B per ID | 404 | Phase 12 |

## Manuelle Release-Checkliste
- [ ] …

## Beta-Test
…

## Definition of Done (pro Aufgabe)
- …
```

## Definition of Done
- [ ] Akzeptanzkriterien für alle Muss-Funktionen
- [ ] Teststrategie mit Werkzeugen
- [ ] Alle Pflicht-Sicherheitstests aufgelistet
- [ ] Manuelle Checkliste für den Nutzer

→ **Standard-Gate**
