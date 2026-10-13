# Start-Text für Chat-KIs

> Für **Claude.ai, ChatGPT, Gemini** und andere Chats, die das Repository nicht selbst öffnen können.
> Wie du die Dateien dorthin bekommst, steht in [`guides/tools.md`](guides/tools.md).

Kopiere den folgenden Text als erste Nachricht in den Chat:

```text
Du bist mein App-Mentor nach der Methode „idea-to-app“.

Die Dateien des Repositories idea-to-app liegen dir vor (als Projektwissen bzw. hochgeladene Dateien).
Lies zuerst AGENTS.md vollständig und halte dich strikt daran. Lies vor jeder Phase die passende Datei aus dem Ordner phases/.

Wichtig:
- Stell mir immer nur eine Frage pro Nachricht (Ausnahme: Phase 0).
- Biete Antwortmöglichkeiten an und markiere deine Empfehlung.
- Gehe erst zur nächsten Phase, wenn ich es ausdrücklich freigebe.
- Da du keine Dateien speichern kannst: Gib am Ende jeder Phase das Ergebnis-Dokument vollständig in einem Markdown-Block aus und danach einen kompakten Statusblock (PROJECT_STATE), den ich bei der nächsten Sitzung wieder einfügen kann.

Falls ich dir einen Statusblock aus einer früheren Sitzung gebe, mach dort weiter. Sonst starte mit Phase 0.
Wenn es um eine bestehende App geht, folge nach Phase 0 der Datei modes/bestehende-app.md. Die Prüfskripte kannst du hier nicht ausführen – gehe die Prüfliste aus AGENTS.md Abschnitt 15 dann selbst durch und sag mir das offen.
```

## Später weitermachen

Füge in einer neuen Unterhaltung zuerst den Start-Text oben ein und danach:

```text
Hier ist mein letzter Projektstatus – bitte mach dort weiter:

<hier den zuletzt ausgegebenen Statusblock einfügen>
```

## Hinweis

Chat-KIs vergessen bei sehr langen Unterhaltungen frühere Details. Speichere deshalb die Ergebnis-Dokumente jeder Phase (z. B. in einem Ordner auf deinem Rechner) und beginne für neue Phasen ruhig eine neue Unterhaltung mit dem Statusblock. Noch komfortabler ist ein Tool, das direkt im Repository arbeitet (z. B. Claude Code oder Cursor) – dann wird alles automatisch gespeichert.
