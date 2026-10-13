# Phase 3 – Zielgruppe & Personas

> Kurz: Für wen genau bauen wir – und in welcher Situation benutzt diese Person die App?

| | |
|---|---|
| **Ziel** | 1–3 konkrete Personas mit Zielen, Situation und Einschränkungen |
| **Ergebnis** | `projekte/<slug>/03-zielgruppe.md` |
| **Visual** | Persona-Karten (Markdown-Tabelle; optional HTML) |
| **Dauer** | ca. 10–15 Minuten |
| **Überspringen** | nie (bei „nur für mich“: eine Persona = du selbst, 3 Fragen) |

## Für Einsteiger erklärt

Eine **Persona** ist eine erfundene, aber realistische Beispielperson aus deiner Zielgruppe. Sie hilft bei jeder späteren Entscheidung: „Würde Sandra, 42, Schichtdienst, das nachts um 3 Uhr mit einer Hand bedienen können?“ Je genauer die Persona, desto bessere Entscheidungen.

## Fragen

**Q1 – Wer ist die wichtigste Nutzergruppe?** Beschreibe sie so konkret wie möglich (Alter, Beruf, Lebenssituation).

**Q2 – In welcher Situation öffnet diese Person die App?** (Wo ist sie, was macht sie gerade, wie viel Zeit hat sie, welches Gerät?)
> Hilfe: „Unterwegs auf dem Handy mit einer Hand“ ist etwas völlig anderes als „abends am Laptop mit Ruhe“.

**Q3 – Was will die Person erreichen?** (Das eigentliche Ziel – „Job to be done“ – nicht die Funktion. Beispiel: nicht „Kalender öffnen“, sondern „wissen, ob ich am Wochenende frei habe“.)

**Q4 – Was könnte die Nutzung erschweren?**
- a) Wenig technische Erfahrung
- b) Wenig Zeit / Stress
- c) Seh-, Hör- oder motorische Einschränkungen
- d) Schlechtes Netz / offline
- e) Sprache (nicht Muttersprache Deutsch)
- f) Nichts Besonderes

**Q5 – Gibt es eine zweite oder dritte Gruppe?** (z. B. Admins, Trainer, Eltern, Kunden, Betreiber) – Nur wenn sie wirklich andere Bedürfnisse oder Rechte haben.

**Q6 – Wer bezahlt, falls es kostet – der Nutzer selbst oder jemand anderes** (Arbeitgeber, Eltern, Verein)?

## Was die KI selbst ergänzen soll

- Erstelle aus den Antworten **Persona-Karten** mit Name, Kurzbeschreibung, Ziel, Situation, Frust, Einschränkungen, Zitat.
- Schlage, falls sinnvoll, eine **Anti-Persona** vor: Für wen ist die App bewusst **nicht** gedacht? (Hilft, den Umfang klein zu halten.)
- Leite 2–4 **Design-Konsequenzen** ab (z. B. „große Buttons, einhändig bedienbar“, „funktioniert offline“).

## Missbrauchs- und Sicherheitscheck

- Gibt es Nutzer mit **unterschiedlichen Rechten** (Admin, Trainer, Eltern)? → Notieren für Phase 12.
- Sind **Minderjährige** Teil der Zielgruppe? → Risikostufe 3, Hinweis auf Einwilligung der Eltern und Jugendschutz (Phase 16).
- Könnte jemand die App nutzen, um **eine andere Person zu kontrollieren** (Partner, Mitarbeiter)? → für Phase 14 notieren.

## Ergebnis-Dokument `03-zielgruppe.md`

```markdown
# Zielgruppe

## Persona 1: <Name>
| | |
|---|---|
| Kurzbeschreibung | … |
| Ziel (Job to be done) | … |
| Nutzungssituation | Gerät, Ort, Zeit, Stimmung |
| Frust heute | … |
| Einschränkungen | … |
| Zitat | „…“ |

## Persona 2 / 3 (falls vorhanden)

## Anti-Persona
…

## Design-Konsequenzen
- …
```

## Definition of Done
- [ ] Mindestens eine Persona mit Ziel und Nutzungssituation
- [ ] Unterschiedliche Rollen erkannt (für Phase 12)
- [ ] Design-Konsequenzen abgeleitet

→ **Standard-Gate**
