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
| `docs/roadmap.md` | Meilensteine und Aufgabenliste mit Status |
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
5. Nach jeder Aufgabe: Status in `docs/roadmap.md` aktualisieren, in 2–3 Sätzen in einfacher Sprache berichten, was der Projektinhaber jetzt ausprobieren kann.
6. **Bei Unklarheit fragen, nicht raten.** Offene Annahmen stehen in Abschnitt 6.
7. Nach jedem Meilenstein: Kurze Klick-Checkliste für den Projektinhaber ausgeben und auf seine Abnahme warten.
8. Behaupte nie, etwas funktioniere, ohne es getestet zu haben.

## 4. Definition of Done (jede Aufgabe)

- [ ] Akzeptanzkriterien aus `docs/tests.md` erfüllt
- [ ] Tests geschrieben und grün (inkl. Sicherheitstests, wo zutreffend)
- [ ] Sicherheitsregeln (Abschnitt 5) eingehalten
- [ ] Keine Fehler/Warnungen in Konsole und Linter
- [ ] Barrierefreiheit beachtet (Beschriftungen, Kontrast, Tastatur)
- [ ] Texte über Sprachdateien (i18n)
- [ ] `docs/roadmap.md` aktualisiert

## 5. Nicht verhandelbare Sicherheitsregeln

<!-- Phase 22: Hier den Inhalt von security/regeln-fuer-ki.md WÖRTLICH einfügen (ab „## Grundsatz“). -->

### Projektspezifische Festlegungen

<!-- Aus Phase 14 übernehmen -->
- Login-Anbieter: …
- Passwort-Mindestlänge: …
- 2FA: …

**Rate-Limits**

| Endpunkt | Limit | Reaktion |
|---|---|---|

**Schlüssel**

| Name der Umgebungsvariable | Öffentlich / geheim | Wo verwendet |
|---|---|---|

## 6. Offene Annahmen – vor Umsetzung beim Projektinhaber klären

- …

## 7. Vor einer Veröffentlichung zusätzlich nötig

<!-- Im Lite-Modus: fehlende Phasen 12, 16, 19, 20, 23 als Hinweis. Sonst: Verweis auf docs/ und Launch-Checkliste. -->
- …
