# Fehlersuche: Wenn die KI nicht tut, was sie soll

> Kurz: KI-Assistenten machen Fehler – im Gespräch mit idea-to-app und später beim Bauen. Hier steht, woran du das erkennst und was du dann schreibst oder tust.

## Für Einsteiger erklärt

Du musst nichts von der Technik verstehen, um gegenzusteuern. Die meisten Probleme lösen sich, wenn du die KI **auf die Regeldatei zurückverweist** (`AGENTS.md`) oder ein **frisches Gespräch** mit dem gespeicherten Stand startest. Die Sätze in den Tabellen kannst du so kopieren.

## A. Im Gespräch mit idea-to-app

| Symptom | Wahrscheinliche Ursache | Was du schreibst oder tust |
|---|---|---|
| Die KI stellt mehrere Fragen auf einmal | Sie ist im adaptiven Modus oder hat die Regel vergessen | `geführt` schreiben. Oder: „Lies AGENTS.md Abschnitt 2 und stelle ab jetzt nur eine Frage pro Nachricht.“ |
| Sie geht ohne dein „weiter“ zur nächsten Phase | Das Gate wurde übersprungen | „Stopp. Nach AGENTS.md Abschnitt 7 darf es erst weitergehen, wenn ich es ausdrücklich sage. Zeige mir das Gate für Phase <N>.“ |
| Sie hat frühere Festlegungen vergessen oder widerspricht ihnen | Das Gespräch ist zu lang geworden | Statusblock ausgeben lassen (`status`), **neue Unterhaltung** öffnen, Start-Text aus `START.md` und den Statusblock einfügen |
| Sie nennt Zahlen, Preise oder Gesetze ohne Quelle | Verstoß gegen AGENTS.md Abschnitt 12 | „Trage jede externe Tatsache mit Quelle in QUELLEN.md ein oder markiere sie als Annahme.“ |
| Sie stimmt allem zu und widerspricht nie | Falsche Rolle | „Du sollst nach AGENTS.md Abschnitt 2 ehrlich widersprechen. Nenne mir die drei größten Schwächen meiner bisherigen Entscheidungen.“ |
| Sie schreibt schon Code in den Planungsphasen | Verstoß gegen „Keine vorzeitige Umsetzung“ | „In den Phasen 0–21 schreibst du keinen Produktivcode. Lösche das und bleibe beim Plan.“ |
| Du verstehst einen Begriff nicht | Fachwort ohne Erklärung | `erklär das` |
| Du weißt nicht, was du antworten sollst | Frage zu fachlich | `entscheide du` – die KI trifft eine begründete Annahme und markiert sie |
| Du willst etwas ändern, das du früher festgelegt hast | Normal | `zurück zu Phase <N>` – die KI markiert abhängige Phasen mit `⚠️ prüfen` |
| Die KI kann keine Dateien speichern | Reines Chat-Tool | Sie soll Ergebnis-Dokumente und den Statusblock im Chat ausgeben; du speicherst sie selbst (siehe [`tools.md`](tools.md)) |
| Ein Mockup öffnet sich nicht | HTML-Datei wird als Text angezeigt | Datei auf dem Rechner speichern und im Browser öffnen (Doppelklick), oder das Tool um eine Vorschau bitten |

## B. Das Prüfskript (`prüfen`)

| Meldung | Bedeutung | Was zu tun ist |
|---|---|---|
| **FEHLER** | Eine Pflicht ist verletzt (z. B. Muss-Funktion ohne Test) | Beheben oder bewusst als Risiko `E-…` akzeptieren. Das Gate von Phase 22 bleibt sonst zu |
| **WARNUNG** | Etwas Wichtiges ist unvollständig (z. B. Annahme ohne ID) | Ansehen und meist beheben |
| **HINWEIS** | Zur Information (z. B. `[PRÜFEN]` im Text) | Vor dem Launch klären |
| **NICHT GEPRÜFT** | Das Skript konnte etwas nicht auswerten, meist weil IDs in Listen statt Tabellen stehen | **Ist kein Grün.** Die KI soll die IDs in die Tabellen der Vorlage schreiben und das Skript erneut laufen lassen |
| „Abgehakt ohne überprüfbaren Nachweis“ | Der Nachweis enthält nichts Nachprüfbares | Datum, Link, Dateipfad, ID oder Commit-Nummer eintragen – „erledigt“ reicht nicht |
| Regelwerk-Version weicht ab | Das Projekt wurde mit einer älteren Version begonnen | `CHANGELOG.md` lesen, betroffene Phasen kurz prüfen |
| Skript lässt sich nicht starten | Node.js fehlt oder ist zu alt | Node.js ab Version 18 installieren (siehe [`tools.md`](tools.md)) |

Wichtig: Die Prüfung sagt, ob Teile **vorhanden und verknüpft** sind. Ob sie **stimmen**, sagt sie nicht. Dafür gibt es die Zweitprüfung (`zweitprüfung`).

## C. Beim Bauen mit dem Coding-Tool

| Symptom | Wahrscheinliche Ursache | Was du schreibst oder tust |
|---|---|---|
| Das Tool ignoriert Sicherheitsregeln | Die Regeln stehen nicht im Kontext | „Lies AGENTS.md Abschnitt 5 erneut vollständig. Prüfe, welche Regeln dein letzter Code berührt, und korrigiere Verstöße.“ |
| Es schaltet etwas „vorübergehend“ ab (Zugriffsschutz, Prüfungen) | Es will einen Fehler schnell loswerden | „Das verstößt gegen Regel 10.4. Stelle die Prüfung wieder her und löse das eigentliche Problem.“ |
| Es installiert ein Paket, das du nicht kennst | Möglicherweise erfundener oder verwechselter Paketname | „Begründe das Paket und zeige Herausgeber und Pflegestand. Siehe Regel 9.5 und guides/lieferkette.md.“ |
| Es fragt nach einem Schlüssel im Chat | Falsches Vorgehen | Schlüssel nie in den Chat. „Sag mir, in welche Datei oder Einstellung er gehört, ich trage ihn selbst ein.“ |
| Es hat einen Schlüssel in den Code geschrieben | Verstoß gegen die Regeln in Abschnitt 1 (Geheimnisse) | Sofort: Schlüssel beim Anbieter **widerrufen und neu erzeugen**, aus dem Code entfernen, Git-Verlauf prüfen lassen. Entfernen aus der letzten Version reicht nicht |
| Tests sind grün, aber die App ist kaputt | Tests prüfen das Falsche | „Zeige mir, welche Akzeptanzkriterien jeder Test abdeckt (AK-… → TEST-…).“ Dann den Fall als neuen Test ergänzen |
| Das Tool behauptet „erledigt“ ohne Beleg | Verstoß gegen Regel 10.5 | „Zeige das Testprotokoll und die geänderten Dateien.“ |
| Es baut Funktionen, die nicht im Plan stehen | Eigenmächtige Erweiterung | „Das steht nicht in docs/roadmap.md. Lies AGENTS.md Abschnitt 7 und frage mich, bevor du abweichst.“ |
| Plan und Code passen nicht mehr zusammen | Abweichungen wurden nicht dokumentiert | `docs/aenderungen.md` nachtragen lassen. Bei größeren Lücken: idea-to-app im Modus „Bestehende App“ |
| Das Gespräch mit dem Tool wird unübersichtlich | Zu viel Kontext | Neue Sitzung starten, `AGENTS.md` und `docs/roadmap.md` lesen lassen, bei der nächsten offenen Aufgabe weitermachen |
| Das Tool kann eine Datei nicht finden | Falscher Ordner | Prüfen, ob du im Hauptordner des Repositorys arbeitest; Pfade im Chat nennen |

## D. Wenn alles hakt

1. `status` bzw. den Statusblock ausgeben lassen und lesen: Stimmt der Stand?
2. Neue Unterhaltung mit Regeldatei und Statusblock starten.
3. Das Problem im Repository melden (Issue mit Auszug aus dem Dialog, **ohne persönliche Daten und ohne Schlüssel**). Das hilft, das Regelwerk zu verbessern (siehe [`CONTRIBUTING.md`](../CONTRIBUTING.md)).
