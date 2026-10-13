# Phase 22 – Build-Handoff

> Kurz: Wir übergeben den kompletten Bauplan so an ein Coding-Tool, dass es ihn sicher umsetzen kann.

| | |
|---|---|
| **Ziel** | Ein eigenständiges Übergabepaket für ein neues App-Repository |
| **Ergebnis** | `projekte/<slug>/handoff/` mit `AGENTS.md`, `CLAUDE.md`, `docs/`, `START-PROMPT.md` |
| **Visual** | keins |
| **Dauer** | ca. 10 Minuten |
| **Überspringen** | nie |
| **Vorlagen** | `templates/handoff-AGENTS.md`, `templates/start-prompt-build.md`, `security/regeln-fuer-ki.md` |

## Für Einsteiger erklärt

Bisher haben wir geplant. Jetzt packen wir alles in ein **Übergabepaket**: einen Ordner, den du in ein neues, leeres Projekt (Repository) kopierst. Darin steht für das Coding-Tool, **was** gebaut wird, **womit**, in **welcher Reihenfolge** – und welche **Sicherheitsregeln** es nie brechen darf. Dazu gibt es einen fertigen Start-Text, den du dem Coding-Tool als erste Nachricht gibst.

## Fragen

**Q1 – Welches Coding-Tool nutzt du?** (Aus Phase 13 bestätigen.) Davon hängt ab, welche Steuerdateien erzeugt werden (`AGENTS.md` funktioniert bei den meisten; `CLAUDE.md` für Claude Code; `.cursor/rules` für Cursor).

**Q2 – Soll die KI direkt mit dem Bauen anfangen** (falls dein Tool das kann und du das neue Repository schon hast) **oder nur das Paket erstellen?**
- a) Nur Paket erstellen **(Standard)**
- b) Paket erstellen und mit Meilenstein M0 beginnen

## Ablauf für die KI

1. Prüfe `PROJECT_STATE.md`: Gibt es Phasen mit Status `⚠️ prüfen` oder offene Punkte, die den Bau blockieren? Wenn ja: zuerst nennen und klären.
2. **Lite-Modus**: Weise deutlich darauf hin, welche Phasen vor einer Veröffentlichung noch fehlen (12, 16, 19, 20, 23), und nimm sie als Aufgaben in die Roadmap auf.
3. Lege `handoff/` an:

```
handoff/
├── AGENTS.md            ← aus templates/handoff-AGENTS.md, vollständig ausgefüllt
├── CLAUDE.md            ← enthält nur: @AGENTS.md (für Claude Code)
├── START-PROMPT.md      ← aus templates/start-prompt-build.md
└── docs/
    ├── produkt.md       ← Zusammenfassung Phasen 1–5 (Idee, Zielgruppe, Scope)
    ├── flows-und-screens.md   ← Phasen 6–7 inkl. Diagramme
    ├── design.md        ← Phase 9 + 10 (Tokens, Barrierefreiheit)
    ├── daten-und-rechte.md    ← Phasen 11–12 (Datenmodell, Matrix)
    ├── architektur.md   ← Phasen 13, 15, 18
    ├── sicherheit.md    ← Phase 14 vollständig
    ├── recht.md         ← Phase 16 (Funktionen, die gebaut werden müssen)
    ├── tests.md         ← Phase 19
    ├── betrieb.md       ← Phase 20
    ├── roadmap.md       ← Phase 21 (Aufgabenliste)
    └── mockups/         ← Kopie der freigegebenen Mockups
```

4. In `AGENTS.md` des Handoffs übernimmst du **wörtlich** die Regeln aus `security/regeln-fuer-ki.md` und ergänzt die projektspezifischen Festlegungen aus Phase 14 (Login-Anbieter, Rate-Limits, Schlüsselliste).
5. Annahmen (`[ANNAHME]`), die nie bestätigt wurden, listest du im Handoff unter „Offene Annahmen“ auf, damit das Coding-Tool nachfragt statt rät.
6. Erkläre dem Nutzer in 5 einfachen Schritten, wie er weitermacht (neues Repository anlegen, Ordnerinhalt hineinkopieren, Coding-Tool öffnen, Start-Prompt einfügen, nach jedem Meilenstein selbst testen).

## Was die KI selbst ergänzen soll

- **Arbeitsregeln für das Coding-Tool** (stehen in der Vorlage): kleine Schritte, eine Aufgabe nach der anderen, Tests zuerst bzw. mitliefern, nach jeder Aufgabe Status in `docs/roadmap.md` aktualisieren, bei Unklarheit fragen statt raten, keine neuen Abhängigkeiten ohne Begründung, keine Abkürzungen bei Sicherheitsregeln.
- **Definition of Done** pro Aufgabe (aus Phase 19).
- **Abnahme durch den Nutzer** nach jedem Meilenstein: kurze Klick-Checkliste in einfacher Sprache.

## Missbrauchs- und Sicherheitscheck

- Das Handoff-Paket enthält **keine echten Schlüssel oder Passwörter** – nur Namen von Umgebungsvariablen und `.env.example`.
- Alle Sicherheitsregeln sind als „MUSS“ formuliert, nicht als „sollte“.
- Pflicht-Sicherheitstests sind als eigene Aufgaben in M1 enthalten.

## Definition of Done
- [ ] Handoff-Ordner vollständig
- [ ] Sicherheitsregeln wörtlich übernommen + projektspezifisch ergänzt
- [ ] Offene Annahmen gelistet
- [ ] Start-Prompt fertig
- [ ] Nutzer weiß, wie es weitergeht

→ **Standard-Gate**
