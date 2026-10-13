# Phase 8 – Mockups

> Kurz: Wir machen die App sichtbar – erst als schlichte Skizze, dann klickbar.

| | |
|---|---|
| **Ziel** | Wireframes für alle Haupt-Screens, Varianten für unsichere Stellen |
| **Ergebnis** | `projekte/<slug>/08-mockups.md` + HTML-Dateien in `mockups/` |
| **Visual** | HTML-Wireframes (Basis: `templates/wireframe.html`) |
| **Dauer** | ca. 20–40 Minuten |
| **Überspringen** | nie |

## Für Einsteiger erklärt

Ein **Wireframe** ist eine einfache, graue Skizze eines Bildschirms – ohne Farben und Bilder. Es geht nur um **Was steht wo?** Farben und Stil kommen in Phase 9. Du kannst die Dateien im Browser öffnen (Doppelklick) und dir vorstellen, wie die App sich anfühlt. Änderungen sind jetzt noch billig – später im Code werden sie teuer.

## Ablauf für die KI

1. Wähle die **3–6 wichtigsten Screens** (Start/Übersicht, Kernfunktion, Detail, Formular, Einstellungen).
2. Kopiere `templates/wireframe.html` und baue pro Screen eine Datei `mockups/<SID>-<name>.html`. Lies vorher die Kommentare im Template.
3. Zeige den **ersten** Screen und frage nach Feedback. Ist der Nutzer unsicher, baue **2–3 echte Gestaltungsrichtungen** desselben Screens (`mockups/S01-uebersicht-a.html`, `-b`, `-c`). Die Varianten müssen sich im **Aufbau** unterscheiden, nicht nur in Details – z. B.:
   - **A – Kompakt / informationsdicht:** viel auf einen Blick, Listen und Kennzahlen
   - **B – Minimal / fokussiert:** eine Hauptaktion, viel Weißraum, Details auf Unterseiten
   - **C – Karten / mobil zuerst:** große Karten, Daumenbedienung, Wischen
   Jede Variante zeigt echte Inhalte und mindestens einen Leer- oder Fehlerzustand. Die Wahl kommt als `E-…` ins Entscheidungs-Log.
4. Übertrage das Feedback auf die übrigen Screens, zeige sie gesammelt.
5. Optional: Verlinke die Screens untereinander (klickbarer Prototyp) – die Template-Links machen das einfach.

Wenn dein Tool HTML direkt anzeigen kann (Artifact, Canvas, Vorschau), zeige die Mockups dort. Sonst gib dem Nutzer den Hinweis: „Öffne die Datei im Browser.“ Ohne Dateizugriff: vollständiges HTML im Codeblock ausgeben.

## Fragen

**Q1 – Wie soll die App vom Gefühl her wirken?**
- a) Ruhig und aufgeräumt
- b) Verspielt und motivierend
- c) Professionell und sachlich
- d) Sportlich / energetisch
- e) Eigene Beschreibung

**Q2 – Gibt es Apps, deren Aufbau dir gefällt?** (Nur als Inspiration für Struktur, nicht zum Kopieren.)

**Q3 – Feedback zum ersten Wireframe:** Was gefällt dir, was nicht, was fehlt? (Bei Varianten: Welche Richtung nehmen wir – oder eine Mischung? Was genau soll aus der anderen übernommen werden?)

**Q4 – Feedback zu den übrigen Screens.**

## Was die KI selbst ergänzen soll

- Platzhaltertexte, die **realistisch** sind (keine „Lorem ipsum“), damit man die App versteht.
- Leerzustände und Fehlerzustände für mindestens einen Screen sichtbar machen.
- Bei Formularen: Pflichtfelder markieren, Fehlermeldung am Feld zeigen.
- Mobile-first: Handy-Rahmen als Standard, wenn die Hauptsituation mobil ist (Phase 3).
- Hinweise zur Bedienbarkeit: Daumenzone, große Tippflächen (mind. 44×44 px), Kontrast.

## Missbrauchs- und Sicherheitscheck

- Formulare: Zeige, wo **Eingabelängen** begrenzt werden und welche Felder optional sind (Datensparsamkeit – nur abfragen, was nötig ist).
- Teilen-Funktionen: Ist klar sichtbar, **was öffentlich** wird und für wen?
- Login: keine Hinweise wie „E-Mail falsch“ vs. „Passwort falsch“, sondern „E-Mail oder Passwort falsch“.
- Passwortfeld: Option zum Anzeigen des Passworts, Unterstützung von Passwort-Managern, kein Verbot von Einfügen.

## Ergebnis-Dokument `08-mockups.md`

```markdown
# Mockups

| Screen | Datei | Status | Feedback / Entscheidungen |
|---|---|---|---|
| S01 Übersicht | mockups/S01-uebersicht.html | ✅ freigegeben | … |

## Gewählte Richtung
… (E-…)

## Abgeleitete Gestaltungsregeln für Phase 9 und den Handoff
- z. B. „Hauptaktion immer unten rechts erreichbar“, „Listen max. 2 Zeilen pro Eintrag“

## Gestaltungsprinzipien (vorläufig)
- …
```

## Definition of Done
- [ ] Wireframes für alle Haupt-Screens
- [ ] Mindestens ein Leer- und ein Fehlerzustand gezeigt
- [ ] Feedback eingearbeitet und vom Nutzer freigegeben

→ **Standard-Gate**
