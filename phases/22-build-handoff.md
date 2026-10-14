# Phase 22 – Build-Handoff

> Kurz: Wir übergeben den kompletten Bauplan so an ein Coding-Tool, dass es ihn sicher umsetzen kann – und dass Änderungen beim Bauen zurück in den Plan finden.

| | |
|---|---|
| **Ziel** | Ein vollständiges, geprüftes Übergabepaket mit geregeltem Rückweg |
| **Ergebnis** | `projekte/<slug>/handoff/` mit `AGENTS.md`, `CLAUDE.md`, `START-PROMPT.md`, `docs/` |
| **Visual** | keins |
| **Dauer** | ca. 15 Minuten |
| **Überspringen** | nie |
| **Vorlagen** | `templates/handoff-AGENTS.md`, `templates/start-prompt-build.md`, `security/regeln-fuer-ki.md` |
| **Prüfung** | Prüfskript `--handoff` ohne FEHLER · Zweitprüfung (Stufe 3 Pflicht, Stufe 2 empfohlen) |

## Für Einsteiger erklärt

Bisher haben wir geplant. Jetzt packen wir alles in ein **Übergabepaket**: einen Ordner, den du in dein App-Projekt kopierst. Darin steht für das Coding-Tool, **was** gebaut wird, **womit**, in **welcher Reihenfolge** – und welche **Sicherheitsregeln** es nie brechen darf. Bevor du es bekommst, wird automatisch geprüft, dass nichts verloren gegangen ist. Und weil beim Bauen immer etwas anders kommt als geplant, steht im Paket auch, wie solche Änderungen sauber zurück in die Unterlagen kommen.

## Fragen

**Q1 – Welches Coding-Tool nutzt du?** (Aus Phase 13 bestätigen.) Davon hängt ab, welche Steuerdateien erzeugt werden (`AGENTS.md` funktioniert bei den meisten; `CLAUDE.md` für Claude Code; `.cursor/rules` für Cursor).

**Q2 – Soll die KI direkt mit dem Bauen anfangen** (falls dein Tool das kann und das App-Repository bereitsteht) **oder nur das Paket erstellen?**
- a) Nur Paket erstellen **(Standard)**
- b) Paket erstellen und mit dem ersten Meilenstein beginnen

## Ablauf für die KI

1. **Vorprüfung:** Gibt es Phasen mit `⚠️ prüfen`, offene kritische Fragen oder unbearbeitete Befunde einer Zweitprüfung? Erst klären. Stimmt das Feld `Regelwerk-Version` in `PROJECT_STATE.md` noch mit der aktuellen Version überein (AGENTS.md Abschnitt 4)? Wenn nicht: `CHANGELOG.md` lesen und betroffene Phasen prüfen, bevor du übergibst.
2. **Lite-Modus:** Deutlich sagen, welche Phasen vor einer Veröffentlichung noch fehlen (12, 16, 19, 20, 23), und sie als Aufgaben in die Roadmap aufnehmen.
3. **Paket erzeugen:**

```
handoff/
├── AGENTS.md            ← aus templates/handoff-AGENTS.md, vollständig ausgefüllt
├── CLAUDE.md            ← enthält nur: @AGENTS.md (für Claude Code)
├── START-PROMPT.md      ← aus templates/start-prompt-build.md
└── docs/
    ├── produkt.md            ← Phasen 1–5 (Idee, Zielgruppe, Scope mit F-IDs)
    ├── flows-und-screens.md  ← Phasen 6–7 inkl. Diagramme
    ├── design.md             ← Phasen 9–10 (Tokens, Barrierefreiheit)
    ├── daten-und-rechte.md   ← Phasen 11–12 (Datenmodell, Klassifizierung, Matrix)
    ├── architektur.md        ← Phasen 13, 15, 18
    ├── sicherheit.md         ← Phase 14 vollständig – inkl. aller Projektwerte (Hashing, Längen, Laufzeiten, Rate-Limits, Größen, Header, Zugriffs-Antwortstrategie, Schlüsselliste)
    ├── recht.md              ← Phase 16 (Funktionen, die gebaut werden müssen)
    ├── tests.md              ← Phase 19 inkl. Rückverfolgungsmatrix
    ├── betrieb.md            ← Phase 20
    ├── roadmap.md            ← Phase 21 (Aufgaben mit IDs und Status)
    ├── entscheidungen.md     ← Kopie von ENTSCHEIDUNGEN.md
    ├── aenderungen.md        ← aus templates/aenderungen.md (Rückweg, siehe unten)
    └── mockups/              ← freigegebene Mockups
```

4. Trage in `handoff/AGENTS.md` die **Regelwerk-Version** ein (Zeile unter der Überschrift). Sie sagt dem Coding-Tool und späteren Sitzungen, mit welchem Stand von idea-to-app der Plan erstellt wurde. In `AGENTS.md` des Handoffs übernimmst du **wörtlich** den Inhalt von `security/regeln-fuer-ki.md` ab „## Grundsatz“ (Regelnummern unverändert).
5. `docs/sicherheit.md` enthält **alle konkreten Werte**, auf die die Regeln verweisen. Fehlt ein Wert, ist der Handoff unvollständig.
6. Alle Annahmen mit Status „nein“ (unbestätigt) listest du in `AGENTS.md` unter „Offene Annahmen“ mit ID auf, damit das Coding-Tool nachfragt statt rät.
7. **Prüfskript** ausführen: `node scripts/pruefe-projekt.mjs projekte/<slug> --handoff`. Ausgabe in `pruefungen/` speichern. FEHLER beheben (oder als Risiko `E-…` akzeptieren lassen). Steht in der Ausgabe **„NICHT GEPRÜFT“**, ist das kein Grün: Meist stehen IDs in Listen statt in den Tabellen der Vorlagen – korrigieren und erneut laufen lassen. Sage dem Nutzer in einem Satz, dass die Prüfung Vorhandensein und Verknüpfung prüft, nicht Richtigkeit. Ohne Befehlsausführung: Prüfliste aus `AGENTS.md` Abschnitt 15 manuell, und sage das offen.
8. **Zweitprüfung** (Stufe 3 Pflicht, Stufe 2 empfohlen) mit dem Prüfauftrag „Handoff Phase 22“.
9. **Risikostufe 3:** Sage dem Nutzer jetzt offen, dass vor der Veröffentlichung für andere eine **externe Fachprüfung** (oder ein bewusst akzeptiertes Risiko `E-…`) nötig ist und dass das Prüfskript sonst „Nicht freigabefähig“ meldet. Eine zweite KI ersetzt sie nicht. Nimm die Aufgabe „externe Prüfung organisieren“ in die Roadmap auf.
10. Erkläre dem Nutzer in 5 einfachen Schritten, wie es weitergeht (Repository anlegen bzw. öffnen, Ordnerinhalt hineinkopieren, Coding-Tool öffnen, Start-Prompt einfügen, nach jedem Meilenstein selbst testen) und verweise auf [`guides/nach-der-uebergabe.md`](../guides/nach-der-uebergabe.md) und [`guides/fehlersuche.md`](../guides/fehlersuche.md).

### Bei bestehender App

- Paket unter `docs/idea-to-app/` im **bestehenden** Repository ablegen, nicht im Wurzelverzeichnis.
- Vorhandene `AGENTS.md` / `CLAUDE.md` / Cursor-Regeln **nicht ersetzen**: einen Abschnitt „idea-to-app“ ergänzen, der auf `docs/idea-to-app/AGENTS.md` verweist; Widersprüche dem Nutzer nennen.
- Roadmap beginnt mit Meilenstein M-S (Sofortmaßnahmen aus B1).

## Der Rückweg: Vom Code zurück in den Plan

Beim Bauen stellt sich oft heraus, dass etwas anders gemacht werden muss. Das Paket regelt das (Abschnitt „Abweichungen vom Plan“ in `templates/handoff-AGENTS.md`):

1. **Kleine Abweichung** (Detail, keine Auswirkung auf Daten, Rechte, Sicherheit, Kosten): Coding-Tool setzt um, trägt sie in `docs/aenderungen.md` ein und passt das betroffene `docs/`-Dokument an.
2. **Wesentliche Abweichung** (neue Funktion, neue Rolle, neue Daten, anderer Dienst, Sicherheitsregel betroffen): Coding-Tool **stoppt und fragt** den Projektinhaber. Nach Zustimmung: Eintrag in `docs/aenderungen.md` mit betroffenen IDs, Dokumente und Tests anpassen.
3. **Größere Änderungen** (z. B. neue Funktionsbereiche nach dem Launch): zurück in idea-to-app, Modus **„Bestehende App“** mit Ziel „Weiterentwickeln“ – dort wird der dann aktuelle Code als Ist-Zustand eingelesen.

## Missbrauchs- und Sicherheitscheck

- Das Paket enthält **keine echten Schlüssel oder Passwörter** – nur Namen von Umgebungsvariablen und `.env.example` (das Prüfskript sucht danach).
- Alle Sicherheitsregeln sind als „MUSS“ formuliert, nicht als „sollte“.
- Pflicht-Sicherheitstests sind als eigene Aufgaben enthalten (M1 bzw. M-S).

## Definition of Done
- [ ] Handoff-Ordner vollständig, `docs/sicherheit.md` mit allen Werten
- [ ] Sicherheitsregeln wörtlich übernommen (alle Regelnummern vorhanden)
- [ ] Regelwerk-Version in `PROJECT_STATE.md` und `handoff/AGENTS.md` eingetragen
- [ ] Offene Annahmen mit IDs gelistet
- [ ] Prüfskript `--handoff` ohne FEHLER (oder verbleibende als `E-…` akzeptiert) und ohne ungeklärtes „NICHT GEPRÜFT“
- [ ] Bei Stufe 3: Nutzer weiß, dass externe Fachprüfung oder akzeptiertes Risiko für den Launch nötig ist
- [ ] Zweitprüfung durchgeführt (wenn Pflicht/empfohlen), Befunde bearbeitet
- [ ] Start-Prompt fertig; Nutzer weiß, wie es weitergeht

→ **Gate**
