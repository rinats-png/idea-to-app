# Phase 0 – Start & Modus

> Kurz: Wir legen fest, wie wir zusammenarbeiten und wie gründlich wir vorgehen müssen.

| | |
|---|---|
| **Ziel** | Erfahrungslevel, Modus, Plattform und Risikostufe festlegen; Projektordner anlegen |
| **Ergebnis** | `projekte/<slug>/00-start.md`, `PROJECT_STATE.md`, `ENTSCHEIDUNGEN.md` |
| **Visual** | keins |
| **Dauer** | ca. 5 Minuten |
| **Überspringen** | nie |

## Für Einsteiger erklärt

Bevor es um deine Idee geht, klären wir ein paar Rahmenbedingungen. Davon hängt ab, wie viel ich erkläre, wie viele Schritte wir gehen und wie gründlich wir beim Thema Sicherheit sein müssen. Eine kleine App nur für dich braucht weniger Absicherung als eine App, in der fremde Menschen ihre Gesundheitsdaten speichern.

## Ablauf für die KI

1. Begrüße in 2–3 Sätzen: Was passiert jetzt, wie lange dauert es ungefähr (Voll-Modus: mehrere Sitzungen; Lite-Modus: 1–2 Sitzungen), dass alles gespeichert wird.
2. Erkläre kurz die Befehle aus `AGENTS.md` Abschnitt 7 (als kompakte Liste).
3. Stelle Q1–Q4 **gebündelt** als Auswahlfragen (Ausnahme von „eine Frage pro Nachricht“).
4. Frage Q5 (Arbeitstitel) einzeln.
5. Leite aus Q4 die vorläufige Risikostufe ab (Tabelle in `AGENTS.md` Abschnitt 8) und nenne sie mit Begründung. Frage, ob das passt.
6. Lege den Projektordner an: `projekte/<slug>/` mit Kopien von `templates/PROJECT_STATE.md` und `templates/ENTSCHEIDUNGEN.md`.
7. Schreibe `00-start.md` und zeige das Gate.

## Fragen

**Q1 – Wie viel Erfahrung hast du mit App-Entwicklung?**
- a) Keine – ich habe eine Idee, aber noch nie programmiert **(Standard)**
- b) Ein bisschen – ich habe schon mit KI-Tools kleine Dinge gebaut
- c) Entwickler – ich kenne mich aus

→ a/b = Einsteiger-Modus, c = Entwickler-Modus.

**Q2 – Wie gründlich wollen wir vorgehen?**
- a) **Voll-Modus** – alle 25 Schritte, für eine App, die andere Menschen nutzen sollen **(Empfehlung, wenn die App veröffentlicht werden soll)**
- b) **Lite-Modus** – 11 Kernschritte, für einen schnellen Prototyp oder zum Ausprobieren

**Q3 – Wo soll die App laufen?**
- a) Im Browser (Web-App / PWA – funktioniert auf Handy und PC, kein App-Store nötig) **(Empfehlung für den Einstieg)**
- b) Als App im App Store / Google Play
- c) Beides
- d) Weiß ich nicht – erklär mir den Unterschied

**Q4 – Welche Art von Daten wird die App speichern?** (Mehrfachauswahl)
- a) Keine persönlichen Daten, keine Anmeldung
- b) Nutzerkonten mit E-Mail / Name
- c) Inhalte, die Nutzer selbst erstellen (Notizen, Fotos, Einträge)
- d) Gesundheits-, Finanz-, Standort- oder Ausweisdaten
- e) Daten von Kindern oder über andere Personen
- f) Zahlungen
- g) Weiß ich noch nicht

**Q5 – Hat deine App schon einen Arbeitstitel?** (Darf provisorisch sein; ein echter Name kommt in Phase 4.)

## Risikostufe ableiten

- Nur a → Stufe 1
- b oder c (ohne d/e/f) → Stufe 2
- d, e oder f → Stufe 3
- g → vorläufig Stufe 2, in Phase 11 erneut prüfen

Formuliere es für Einsteiger so: „Weil deine App <Grund>, ordne ich sie in Sicherheitsstufe <N> ein. Das heißt: <eine Zeile Folge>.“

## Missbrauchs- und Sicherheitscheck

- Wenn der Nutzer „nur für mich“ sagt, aber Daten anderer Personen speichert (z. B. Kontakte, Kinder, Kollegen): Stufe hochsetzen und erklären.
- Wenn ein Behörden-, Arbeitgeber- oder Dienstbezug erkennbar ist: Hinweis, dass dienstliche Daten eigenen Regeln unterliegen und vor Nutzung mit der zuständigen Stelle (z. B. Datenschutzbeauftragte) zu klären sind.

## Ergebnis-Dokument `00-start.md`

```markdown
# Projekt-Start: <Arbeitstitel>

| Punkt | Festlegung |
|---|---|
| Erfahrung | Einsteiger / Entwickler |
| Modus | Voll / Lite |
| Plattform | Web-App / Native / Beides / offen |
| Datenarten | … |
| Risikostufe | 1 / 2 / 3 – Begründung |
| Sprache | Deutsch / … |
| Datum | JJJJ-MM-TT |

## Hinweise
- …
```

## Definition of Done
- [ ] Erfahrung, Modus, Plattform, Datenarten, Risikostufe festgelegt
- [ ] Projektordner und `PROJECT_STATE.md` angelegt
- [ ] Nutzer kennt die Befehle (`status`, `parkplatz`, `zurück`, …)

→ **Standard-Gate** (siehe `AGENTS.md` Abschnitt 6)
