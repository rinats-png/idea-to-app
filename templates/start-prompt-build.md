# Start-Prompt für das Coding-Tool

> Kopiere den Text im Kasten als **erste Nachricht** in dein Coding-Tool (Claude Code, Cursor, Copilot, Codex …), nachdem du den Inhalt des `handoff/`-Ordners in dein neues App-Repository kopiert hast.

```text
Du arbeitest in einem neuen Repository für meine App „<App-Name>“.

1. Lies zuerst AGENTS.md vollständig. Die Regeln dort – besonders Abschnitt 5 „Nicht verhandelbare Sicherheitsregeln“ – gelten für jede Aufgabe.
2. Lies danach docs/produkt.md, docs/architektur.md, docs/sicherheit.md und docs/roadmap.md.
3. Fasse mir in maximal 10 Zeilen zusammen, was du verstanden hast, und nenne Unklarheiten oder Widersprüche, die du in den Unterlagen findest.
4. Kläre mit mir die offenen Annahmen aus AGENTS.md Abschnitt 6 – eine Frage nach der anderen.
5. Beginne dann mit der ersten offenen Aufgabe aus docs/roadmap.md. Arbeite eine Aufgabe nach der anderen ab.
6. Wenn du vom Plan abweichen musst, halte dich an AGENTS.md Abschnitt 7: kleine Abweichungen dokumentieren, wesentliche vorher mit mir abstimmen.

Ich bin <Einsteiger / Entwickler>. Erkläre mir nach jeder Aufgabe in einfacher Sprache, was du gemacht hast und was ich ausprobieren kann. Wenn ich etwas tun muss (z. B. ein Konto bei einem Dienst anlegen oder einen Schlüssel eintragen), erkläre mir die Schritte genau – und sag mir, wo der Schlüssel hingehört, ohne dass ich ihn dir in den Chat schreiben muss.
```

## Tipps

- **Geheime Schlüssel** nie in den Chat kopieren. Trage sie selbst in die Datei `.env` ein (die nicht ins Repository hochgeladen wird) bzw. in die Einstellungen deines Hosting-Anbieters.
- Nach jedem Meilenstein **selbst ausprobieren** – auch die Sonderfälle aus `docs/flows-und-screens.md`.
- Wenn das Tool vom Plan abweicht: auf `AGENTS.md` und `docs/` verweisen.
- Wenn du den Plan ändern willst: zurück in **idea-to-app**, betroffene Phase anpassen, Handoff neu erzeugen.
