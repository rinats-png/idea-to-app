# Nach der Übergabe: Was mache ich mit dem Bauplan?

> Kurz: Phase 22 hat einen Ordner `handoff/` erzeugt. Dieser Guide zeigt Schritt für Schritt, wie daraus eine laufende App wird – ohne dass das Coding-Tool vom Plan abdriftet.

Wird gebraucht in: Phase 22 (Übergabe), Phase 23 (Launch).

## Für Einsteiger erklärt

Bisher hast du **geplant**. Jetzt **baut** ein Coding-Tool die App (ein KI-Programm, das Code schreibt, z. B. Claude Code, Cursor, GitHub Copilot oder Codex). Es arbeitet nur so gut wie die Unterlagen, die du ihm gibst. Der `handoff/`-Ordner ist genau dafür gemacht: Er enthält die Regeln, den Plan und die Aufgabenliste. Dein Job ab jetzt: ein bisschen Disziplin und regelmäßig ausprobieren.

## Die ersten 30 Minuten

1. **Neues Repository anlegen.** Ein leerer Ordner, in dem später der Code der App liegt, verwaltet mit Git (ein Programm, das jede Änderung speichert und rückgängig machen kann). Dein Coding-Tool kann dir beim Anlegen helfen: „Lege ein neues Git-Repository an.“
2. **Inhalt von `handoff/` hineinkopieren.** `AGENTS.md`, `CLAUDE.md` und der Ordner `docs/` kommen in die oberste Ebene des neuen Repositorys.
3. **Geheimnisse vorbereiten.** Lege eine Datei `.env` an (Schlüssel, Passwörter der Dienste) und stelle sicher, dass sie in `.gitignore` steht, bevor du irgendetwas committest. Schlüssel gehören nie in den Chat, nie in den Code, nie ins Repository.
4. **Start-Prompt einfügen.** Kopiere den Text aus `handoff/START-PROMPT.md` (Vorlage: `templates/start-prompt-build.md`) als erste Nachricht in dein Coding-Tool.
5. **Zusammenfassung prüfen.** Das Tool soll in höchstens zehn Zeilen sagen, was es verstanden hat. Stimmt das nicht mit deinem Plan überein, korrigiere es jetzt – billiger wird es nie wieder.
6. **Offene Annahmen klären.** Alle Annahmen mit Status „nein“ aus `AGENTS.md` Abschnitt 6 beantwortest du, bevor der erste Code entsteht.

## Der Arbeitsrhythmus

Immer nur **eine Aufgabe** (`TASK-…`) auf einmal:

1. Das Tool nennt die Aufgabe und ihre Akzeptanzkriterien (`AK-…`).
2. Es schreibt die Tests und den Code.
3. Es lässt die Tests laufen, auch die Sicherheitstests (`T-SEC-…`).
4. Es erklärt dir in einfacher Sprache, was es getan hat und was du ausprobieren kannst.
5. **Du probierst es aus** – nicht nur den schönen Weg, sondern auch die Fehlerfälle aus `docs/flows-und-screens.md`.
6. Erst dann: speichern (Commit) und nächste Aufgabe.

Speichere in kleinen Schritten. Ein Commit pro Aufgabe ist ein guter Standard; so kannst du zu jedem funktionierenden Stand zurück.

## Was du selbst prüfen solltest (ohne Programmierkenntnisse)

- **Läuft die App?** Öffne sie und klicke durch den wichtigsten Ablauf.
- **Sicherheit sichtbar testen:** Lege zwei Testkonten an. Kann Konto B etwas von Konto A sehen, wenn du die Zahl in der Adresszeile änderst? Es darf nicht gehen.
- **Steht ein Schlüssel im Code?** Frage das Tool: „Suche im gesamten Repository nach Schlüsseln, Passwörtern und Tokens und zeige mir die Fundstellen.“
- **Sind die Tests grün?** Frage nach dem Ergebnis des Testlaufs, nicht nach einer Versicherung. „Alles funktioniert“ ist keine Antwort; ein Testprotokoll ist eine.
- **Hat das Tool Regeln abgeschaltet?** Warnzeichen: „vorübergehend deaktiviert“, „zum Testen offen gelassen“, `*` bei erlaubten Herkünften, auskommentierte Prüfungen. Das widerspricht `AGENTS.md` Regel 10.4.

## Wenn das Tool vom Plan abweicht

`AGENTS.md` Abschnitt 7 regelt das:

- **Kleine Abweichung** (Detail ohne Folgen für Daten, Rechte, Sicherheit, Kosten, Umfang): Das Tool setzt sie um und trägt sie in `docs/aenderungen.md` ein.
- **Wesentliche Abweichung:** Das Tool muss **anhalten und fragen**. Tut es das nicht, erinnere es: „Lies AGENTS.md Abschnitt 7 und halte dich daran.“
- **Du willst selbst etwas ändern:** Kleine Dinge trägst du in `docs/aenderungen.md` ein. Bei größeren Änderungen gehst du zurück in idea-to-app und planst sie im Modus „Bestehende App“ – dort wird der echte Code als Ist-Zustand eingelesen und der Plan aktualisiert.

Bei Problemen mit dem Tool hilft [`fehlersuche.md`](fehlersuche.md).

## Vor der Veröffentlichung

1. Lasse die Projektprüfung laufen: `node scripts/pruefe-projekt.mjs projekte/<slug> --launch` (Phase 23). Ohne die Möglichkeit, Befehle auszuführen, gehst du die Launch-Liste von Hand durch.
2. Jeder Haken in der Launch-Liste braucht einen **Nachweis**: ein Datum, einen Link, einen Dateipfad, eine ID oder eine Commit-Nummer.
3. Bei Risikostufe 3 gehört eine externe Fachprüfung dazu – oder die bewusste, begründete Entscheidung, darauf zu verzichten (`E-…` in `ENTSCHEIDUNGEN.md`).
4. Prüfe, ob die Regelwerk-Version in `PROJECT_STATE.md` noch zur aktuellen idea-to-app-Version passt (Hinweise im `CHANGELOG.md`).
5. Plane den Start mit [`launch-und-auffindbarkeit.md`](launch-und-auffindbarkeit.md) und, bei Store-Apps, [`appstore-veroeffentlichung.md`](appstore-veroeffentlichung.md).

## Nach dem Start

Phase 24 beschreibt die Wartungsroutine (Updates, Backups testen, Feedback auswerten). Plane dafür feste Termine ein; Apps, die niemand pflegt, werden mit der Zeit unsicher.
