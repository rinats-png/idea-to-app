# idea-to-app mit deinem KI-Tool nutzen

idea-to-app ist **kein Programm**, sondern eine Sammlung von Anleitungen, die eine KI liest. Du brauchst also nur ein KI-Tool und die Dateien dieses Repositories.

> Die Menüs und Bezeichnungen der Tools ändern sich häufig. Wenn ein Schritt anders aussieht, hilft die Hilfeseite des jeweiligen Tools.

## Welches Tool passt zu mir?

| Tool | Speichert Ergebnisse automatisch? | Mockups ansehen | Für wen |
|---|---|---|---|
| **Claude Code** | ✅ ja, direkt im Ordner | HTML-Dateien im Browser öffnen | Einsteiger mit etwas Mut zum Terminal, Entwickler |
| **Cursor / Windsurf / VS Code + Copilot** | ✅ ja | Datei im Browser oder in der Vorschau öffnen | Wer gern in einem Editor arbeitet |
| **Claude.ai / ChatGPT / Gemini (Chat)** | ❌ du speicherst selbst | Artifacts / Canvas, sonst HTML kopieren | Absolute Einsteiger, schneller Start |
| **Codex / Gemini CLI** | ✅ ja | im Browser öffnen | Entwickler |

**Empfehlung für Einsteiger:** Starte im Chat (Claude.ai oder ChatGPT), wenn dir Terminal und Git fremd sind. Wechsle zum Bauen (ab Phase 22) in ein Coding-Tool.

---

## Claude Code

1. Repository herunterladen – entweder
   - `git clone https://github.com/rinats-png/idea-to-app.git`, oder
   - auf GitHub **„Use this template“** → eigenes Repository erstellen und das klonen (empfohlen, dann gehören die Projektdateien dir).
2. Im Terminal in den Ordner wechseln und `claude` starten.
3. Schreibe: **„Ich habe eine App-Idee“** oder rufe den Skill **`/idea-to-app`** auf.
4. Claude Code liest `CLAUDE.md` → `AGENTS.md` automatisch und legt dein Projekt in `projekte/<name>/` an.

## Cursor / Windsurf

1. Repository klonen bzw. herunterladen und den Ordner im Editor öffnen.
2. Den KI-Chat im **Agent-Modus** öffnen.
3. Schreiben: **„Lies AGENTS.md und starte mit Phase 0.“**
   Cursor lädt zusätzlich `.cursor/rules/idea-to-app.mdc` automatisch.

## VS Code + GitHub Copilot

1. Ordner in VS Code öffnen.
2. Copilot Chat im **Agent-Modus** öffnen.
3. Schreiben: **„Lies AGENTS.md und starte mit Phase 0.“**
   Copilot berücksichtigt `.github/copilot-instructions.md`.

## OpenAI Codex / Gemini CLI

Beide lesen Anweisungsdateien im Repository (`AGENTS.md` bzw. `GEMINI.md`). Im Ordner starten und schreiben: **„Starte mit Phase 0.“**

---

## Claude.ai (Chat)

**Variante A – Projekt mit GitHub-Verbindung (empfohlen):**
1. In Claude.ai ein neues **Projekt** anlegen (z. B. „Meine App-Idee“).
2. Unter Projektwissen das GitHub-Repository `idea-to-app` hinzufügen (GitHub-Integration) bzw. die Ordner `AGENTS.md`, `phases/`, `security/`, `templates/`, `guides/glossar.md` auswählen.
3. Einen neuen Chat im Projekt öffnen und den Text aus [`START.md`](../START.md) einfügen.

**Variante B – Dateien hochladen:**
1. Repository als ZIP herunterladen (GitHub → „Code“ → „Download ZIP“), entpacken.
2. Im Projekt die Dateien `AGENTS.md`, alle Dateien aus `phases/` und `security/` und die Vorlagen hochladen.
3. Text aus `START.md` einfügen.

Mockups zeigt Claude als **Artifact** direkt im Chat an.

## ChatGPT

1. Ein **Projekt** anlegen und die Dateien wie bei Claude.ai Variante B hochladen (oder einen eigenen GPT mit diesen Dateien als Wissen erstellen).
2. Text aus [`START.md`](../START.md) einfügen.
3. Mockups lassen sich im **Canvas** anzeigen; sonst HTML kopieren, als `.html`-Datei speichern und im Browser öffnen.

## Gemini (Chat)

Wie ChatGPT: Dateien hochladen bzw. als „Gem“-Wissen hinterlegen, Text aus `START.md` einfügen.

---

## Bestehende App einbinden

Für den Modus „Bestehende App“ muss die KI den Code **lesen** können (verändert wird in der Bestandsaufnahme nichts):

| Tool | So geht's |
|---|---|
| **Claude Code** | Im `idea-to-app`-Ordner starten und den App-Ordner zusätzlich freigeben (z. B. `/add-dir ../meine-app`). Alternativ beide Ordner nebeneinander und Claude Code im übergeordneten Ordner starten. |
| **Cursor / VS Code** | Beide Ordner in einem Arbeitsbereich öffnen („Ordner zum Arbeitsbereich hinzufügen“). |
| **Claude.ai / ChatGPT** | App-Repository per GitHub-Verbindung als Projektwissen hinzufügen oder als ZIP hochladen. Große Repositories nur teilweise – die KI sagt dann, was sie nicht prüfen konnte. |
| **Nur Screenshots / einzelne Dateien** | Möglich, aber die Ist-Analyse bleibt lückenhaft; Sicherheitsaussagen sind dann nur eingeschränkt belastbar. |

Das Übergabepaket landet bei bestehenden Apps später unter `docs/idea-to-app/` in deinem App-Repository; vorhandene `AGENTS.md`/`CLAUDE.md` werden ergänzt, nicht ersetzt.

## Prüfskript ausführen

Wer ein Terminal nutzt (oder ein Tool, das Befehle ausführen kann), lässt die Projektprüfung laufen – Node.js ≥ 18, nichts zu installieren:

```bash
node scripts/pruefe-projekt.mjs projekte/<slug>            # jederzeit
node scripts/pruefe-projekt.mjs projekte/<slug> --handoff  # vor der Übergabe
node scripts/pruefe-projekt.mjs projekte/<slug> --launch   # vor dem Launch
```

In Chat-Tools geht die KI dieselben Punkte manuell durch.

---

## Browser-Baukästen (Lovable, Bolt, v0 …)

Diese Tools sind stark darin, **schnell Code zu erzeugen**, aber nicht für den Planungsprozess gedacht. Sinnvolle Kombination:

1. Planung mit idea-to-app (in einem der Tools oben) bis Phase 22.
2. Den Inhalt von `handoff/AGENTS.md` und `handoff/docs/` als Projekt-Anweisungen / Wissen im Baukasten hinterlegen.
3. **Besonders prüfen:** Zugriffsregeln der Datenbank (z. B. Supabase Row Level Security), keine geheimen Schlüssel im Frontend, Rate-Limits. Die Pflicht-Sicherheitstests aus `security/sicherheitstests.md` sind hier besonders wichtig.
