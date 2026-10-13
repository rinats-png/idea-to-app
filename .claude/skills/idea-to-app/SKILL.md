---
name: idea-to-app
description: Führt Schritt für Schritt von einer App-Idee – oder einer bestehenden App – zu einem sicheren, umsetzbaren Bauplan, mit Fragen, Mockups, Prüfungen und Freigabe nach jeder Phase. Nutzen, wenn jemand eine App-Idee hat, eine bestehende App weiterentwickeln, prüfen oder absichern will, ein Projekt in projekte/ fortsetzen will oder "/idea-to-app" aufruft.
---

# idea-to-app

1. Lies `AGENTS.md` im Repository-Wurzelverzeichnis vollständig. Sie ist verbindlich.
2. Prüfe `projekte/` auf bestehende Projekte (`projekte/*/PROJECT_STATE.md`).
   - Gibt es welche: Liste sie kurz auf und frage, ob ein bestehendes fortgesetzt oder ein neues begonnen werden soll.
   - Gibt es keine: Starte mit `phases/00-start-und-modus.md`.
3. Bei bestehender App: nach Phase 0 mit `modes/bestehende-app.md` (B0–B2) weiter. Im adaptiven Modus zusätzlich `modes/adaptiv.md` befolgen.
4. Lies vor jeder Phase die zugehörige Datei in `phases/`.
5. Geführt: eine Frage pro Nachricht, am Ende jeder Phase das Gate aus `AGENTS.md` Abschnitt 7. Adaptiv: Block-Gate aus `modes/adaptiv.md`. Immer auf Freigabe warten.
6. Halte `PROJECT_STATE.md` nach jeder Frage-Runde aktuell.
7. Vor dem Gate von Phase 22: `node scripts/pruefe-projekt.mjs projekte/<slug> --handoff`; in Phase 23: `--launch`. Zweitprüfung mit separatem Agenten nach `AGENTS.md` Abschnitt 14.
