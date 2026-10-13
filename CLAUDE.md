# Claude Code

Dieses Repository ist ein geführter Prozess von der App-Idee (oder einer bestehenden App) zum sicheren Bauplan.
Alle verbindlichen Anweisungen stehen in `AGENTS.md`:

@AGENTS.md

Zusätzlich für Claude Code:
- Nutze die Aufgabenliste, um die aktuelle Phase bzw. den aktuellen Block sichtbar zu machen.
- Nutze für Auswahlfragen das Frage-Werkzeug (AskUserQuestion), wenn es verfügbar ist – im geführten Modus immer nur eine Frage.
- Schreibe Ergebnisse direkt in `projekte/<slug>/`.
- Führe das Prüfskript selbst aus (`node scripts/pruefe-projekt.mjs projekte/<slug> [--handoff|--launch] --bericht`).
- Für die Zweitprüfung (`AGENTS.md` Abschnitt 14) starte einen separaten Agenten, der nur `templates/pruefauftrag-zweitpruefung.md` und die genannten Dateien bekommt – nicht deine Begründungen.
- Bestehende App: Den App-Ordner zusätzlich freigeben (z. B. `/add-dir <pfad>`) und während B0–B2 ausschließlich lesen.
- Der Einstieg ist auch über den Skill `/idea-to-app` möglich.
