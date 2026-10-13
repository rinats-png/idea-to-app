# <App-Name> – Anweisungen für das Coding-Tool

> Diese Datei wurde mit **idea-to-app** erstellt. Sie ist verbindlich für jede Aufgabe in diesem Repository.

## 1. Worum geht es?

<Ein-Satz-Pitch aus Phase 1>

- **Zielgruppe:** <Persona-Kurzfassung>
- **Kernfunktion:** <aus Phase 5>
- **Risikostufe:** <1/2/3> – <Grund>
- **Plattform:** <Web/PWA/Native>

Ausführliche Unterlagen liegen in `docs/`. Lies vor jeder Aufgabe die dort referenzierten Abschnitte.

| Datei | Inhalt |
|---|---|
| `docs/produkt.md` | Idee, Zielgruppe, Funktionsumfang |
| `docs/flows-und-screens.md` | Abläufe, Zustände, Screens, Navigation |
| `docs/design.md` | Design-Tokens, Komponenten, Barrierefreiheit |
| `docs/daten-und-rechte.md` | Datenmodell, Klassifizierung, Berechtigungsmatrix |
| `docs/architektur.md` | Tech-Stack, Dienste, Qualitätsziele |
| `docs/sicherheit.md` | Sicherheitskonzept, Rate-Limits, Schlüsselliste |
| `docs/recht.md` | Rechtliche Funktionen (Export, Löschung, Einwilligung) |
| `docs/tests.md` | Akzeptanzkriterien, Teststrategie, Sicherheitstests |
| `docs/betrieb.md` | Deployment, Monitoring, Backups |
| `docs/roadmap.md` | Meilensteine und Aufgabenliste mit IDs und Status |
| `docs/entscheidungen.md` | Entscheidungen und bewusst akzeptierte Risiken |
| `docs/aenderungen.md` | Abweichungen vom Plan während der Umsetzung (Abschnitt 7) |
| `docs/mockups/` | Freigegebene Mockups |

## 2. Tech-Stack

| Bereich | Technologie |
|---|---|
| Frontend | … |
| Backend | … |
| Datenbank | … |
| Auth | … |
| Hosting | … |
| Tests | … |

Keine weiteren Frameworks oder Abhängigkeiten ohne Rückfrage.

## 3. Arbeitsweise

1. Arbeite die Aufgaben aus `docs/roadmap.md` **der Reihe nach** ab, eine nach der anderen. Beginne erst eine neue Aufgabe, wenn die vorherige die Definition of Done erfüllt.
2. Kleine Schritte: Eine Aufgabe ändert nur, was für sie nötig ist.
3. Vor dem Umsetzen: kurz sagen, was du vorhast und welche Dateien du änderst.
4. **Tests gehören zur Aufgabe.** Bei Funktionen mit Nutzerdaten immer auch den Test „anderer Nutzer hat keinen Zugriff“.
5. Nach jeder Aufgabe: Status in `docs/roadmap.md` aktualisieren, in 2–3 Sätzen in einfacher Sprache berichten, was der Projektinhaber jetzt ausprobieren kann. Abweichungen vom Plan nach Abschnitt 7.
6. **Bei Unklarheit fragen, nicht raten.** Offene Annahmen stehen in Abschnitt 6.
7. Nach jedem Meilenstein: Kurze Klick-Checkliste für den Projektinhaber ausgeben und auf seine Abnahme warten.
8. Behaupte nie, etwas funktioniere, ohne es getestet zu haben.

## 4. Definition of Done (jede Aufgabe)

- [ ] Akzeptanzkriterien (`AK-…`) aus `docs/tests.md` erfüllt; zugehörige Tests (`TEST-…`, `T-SEC-…`) grün
- [ ] Tests geschrieben und grün (inkl. Sicherheitstests, wo zutreffend)
- [ ] Sicherheitsregeln (Abschnitt 5) eingehalten
- [ ] Keine Fehler/Warnungen in Konsole und Linter
- [ ] Barrierefreiheit beachtet (Beschriftungen, Kontrast, Tastatur)
- [ ] Texte über Sprachdateien (i18n)
- [ ] `docs/roadmap.md` aktualisiert

## 5. Nicht verhandelbare Sicherheitsregeln

<!-- Phase 22: Hier den Inhalt von security/regeln-fuer-ki.md WÖRTLICH einfügen (ab „## Grundsatz“). Regelnummern nicht ändern – das Prüfskript kontrolliert sie. Danach diesen Kommentar löschen. -->

Alle konkreten Werte, auf die diese Regeln verweisen (Passwort-Hashing, Längen, Laufzeiten, Rate-Limits, Größenlimits, Header, Zugriffs-Antwortstrategie, Schlüsselliste), stehen in **`docs/sicherheit.md`**. Gibt es dort für eine Regel keinen Wert: nicht raten, sondern nachfragen.

## 6. Offene Annahmen – vor Umsetzung beim Projektinhaber klären

<!-- Alle Annahmen mit Status „nein“ aus PROJECT_STATE.md, mit ID. Keine offenen Annahmen: „Keine“. -->

| ID | Annahme | Betrifft |
|---|---|---|

## 7. Abweichungen vom Plan (Rückweg)

Der Plan in `docs/` ist die verbindliche Grundlage. Wenn sich beim Bauen zeigt, dass etwas anders gemacht werden muss:

1. **Kleine Abweichung** (Detail ohne Auswirkung auf Daten, Rechte, Sicherheit, Kosten oder Umfang): umsetzen, in `docs/aenderungen.md` eintragen und das betroffene Dokument in `docs/` anpassen.
2. **Wesentliche Abweichung** (neue oder geänderte Funktion, Rolle, Datenfeld, externer Dienst, Kosten, oder eine Sicherheitsregel ist berührt): **anhalten und den Projektinhaber fragen.** Erst nach Zustimmung umsetzen, dann `docs/aenderungen.md`, betroffene Dokumente, Akzeptanzkriterien und Tests aktualisieren.
3. **Größere Erweiterung:** dem Projektinhaber empfehlen, sie mit idea-to-app im Modus „Bestehende App“ zu planen.

Jeder Eintrag in `docs/aenderungen.md` nennt die betroffenen IDs (`F-…`, `AK-…`, `T-SEC-…`, `TASK-…`, `E-…`). Ein Plan, der nicht mehr zum Code passt, ist ein Fehler – kein Detail.

## 8. Vor einer Veröffentlichung zusätzlich nötig

<!-- Im Lite-Modus: fehlende Phasen 12, 16, 19, 20, 23 als Hinweis. Sonst: Verweis auf die Launch-Checkliste mit Nachweis-Pflicht. -->
- …
