# Phase 0 – Start & Einstellungen

> Kurz: Wir legen fest, wie wir zusammenarbeiten und wie gründlich wir vorgehen müssen.

| | |
|---|---|
| **Ziel** | Einstieg, Erfahrung, Arbeitsweise, Umfang, Plattform und Risikostufe festlegen; Projektordner anlegen |
| **Ergebnis** | `projekte/<slug>/00-start.md`, `PROJECT_STATE.md`, `ENTSCHEIDUNGEN.md`, `QUELLEN.md` |
| **Visual** | keins |
| **Dauer** | ca. 5 Minuten |
| **Überspringen** | nie |

## Für Einsteiger erklärt

Bevor es um deine Idee oder App geht, klären wir ein paar Rahmenbedingungen. Davon hängt ab, wie viel ich erkläre, wie viele Schritte wir gehen und wie gründlich wir beim Thema Sicherheit sein müssen. Eine kleine App nur für dich braucht weniger Absicherung als eine App, in der fremde Menschen ihre Gesundheitsdaten speichern.

## Ablauf für die KI

1. Begrüße in 2–3 Sätzen: was jetzt passiert, dass alles gespeichert wird und man jederzeit pausieren kann.
2. Stelle **Q1 einzeln** (Einstieg), weil sie den weiteren Ablauf bestimmt.
3. Stelle danach die zutreffenden Fragen **Q2–Q6 gebündelt** als Auswahlfragen (max. 5).
   - Bei **bestehender App** entfallen Q4–Q6: Umfang, Plattform und Datenarten ergeben sich aus der Bestandsaufnahme.
4. Frage Q7 (Name) einzeln.
5. **Neue Idee:** Leite die vorläufige Risikostufe ab (Tabelle in `AGENTS.md` Abschnitt 5), nenne sie mit Begründung und frage, ob das passt.
   **Bestehende App:** Die Risikostufe wird in B1 aus dem Code abgeleitet; trage vorläufig „wird in B1 bestimmt“ ein.
6. Lege den Projektordner an: `projekte/<slug>/` mit Kopien von `templates/PROJECT_STATE.md`, `templates/ENTSCHEIDUNGEN.md` und `templates/QUELLEN.md`. Entferne in `PROJECT_STATE.md` die Zeilen, die nicht zutreffen (B-Zeilen bei neuer Idee; nicht gewählte Phasen im Lite-Modus als `übersprungen (Lite)`).
7. Erkläre kurz die Befehle aus `AGENTS.md` Abschnitt 8 (kompakte Liste).
8. Schreibe `00-start.md` und zeige das Gate.
   **Bestehende App:** Weiter geht es danach mit `modes/bestehende-app.md` (B0), nicht mit Phase 1.

## Fragen

**Q1 – Womit starten wir?**
- a) **Neue Idee** – es gibt noch keine App
- b) **Bestehende App** – es gibt schon Code, und ich möchte sie weiterentwickeln, absichern, prüfen oder verstehen

**Q2 – Wie viel Erfahrung hast du mit App-Entwicklung?**
- a) Keine – ich habe noch nie programmiert **(Standard)**
- b) Ein bisschen – ich habe schon mit KI-Tools kleine Dinge gebaut
- c) Entwickler – ich kenne mich aus

→ a/b = Einsteiger-Sprache, c = Entwickler-Sprache.

**Q3 – Wie sollen wir arbeiten?**
- a) **Geführt** – eine Frage nach der anderen, du gibst jede Phase frei **(Empfehlung für Einsteiger)**
- b) **Adaptiv** – ich fülle aus, was ich schon weiß, frage nur bei wichtigen Entscheidungen und du gibst größere Blöcke frei **(Empfehlung für Erfahrene)**

> Hinweis an Einsteiger, falls b gewählt wird: „Adaptiv geht schneller, dafür treffe ich mehr Annahmen. Die markiere ich alle, und du musst sie am Ende jedes Blocks ansehen.“

**Q4 (nur neue Idee) – Wie gründlich wollen wir vorgehen?**
- a) **Voll** – alle Schritte, für eine App, die andere Menschen nutzen sollen **(Empfehlung, wenn veröffentlicht werden soll)**
- b) **Lite** – 11 Kernschritte für einen schnellen Prototyp

**Q5 (nur neue Idee) – Wo soll die App laufen?**
- a) Im Browser (Web-App / PWA – funktioniert auf Handy und PC, kein App-Store nötig) **(Empfehlung für den Einstieg)**
- b) Als App im App Store / Google Play
- c) Beides
- d) Weiß ich nicht – erklär mir den Unterschied

**Q6 (nur neue Idee) – Welche Daten wird die App verarbeiten?** (Mehrfachauswahl)
- a) Keine persönlichen Daten, keine Anmeldung
- b) Nutzerkonten mit E-Mail / Name
- c) Inhalte, die Nutzer selbst erstellen (Notizen, Fotos, Einträge)
- d) Bezahlung über einen Zahlungsanbieter (z. B. Stripe, App-Store-Kauf)
- e) Standort – nur grob/einmalig (z. B. „in der Nähe“)
- f) Gesundheit, Finanzen (über reine Bezahlung hinaus), Ausweis/Biometrie, genauer oder dauerhafter Standort
- g) Daten von Kindern oder über andere Personen
- h) Weiß ich noch nicht

**Q7 – Wie heißt die App bzw. hat sie einen Arbeitstitel?** (Darf provisorisch sein.)

## Risikostufe ableiten (neue Idee)

- Nur a → **Stufe 1**
- b, c, d oder e (ohne f/g) → **Stufe 2**
- f oder g → **Stufe 3**
- h → vorläufig **Stufe 2**, in Phase 11 erneut prüfen

Formuliere es so: „Weil deine App <Grund>, ordne ich sie in Sicherheitsstufe <N> ein. Das heißt: <eine Zeile Folge>.“

## Missbrauchs- und Sicherheitscheck

- „Nur für mich“, aber Daten anderer Personen (Kontakte, Kinder, Kollegen)? → Stufe hochsetzen und erklären.
- Behörden-, Arbeitgeber- oder Dienstbezug erkennbar? → Hinweis, dass dienstliche Daten eigenen Regeln unterliegen und vor der Nutzung mit der zuständigen Stelle (z. B. Datenschutzbeauftragte) zu klären sind; Stufe 3.
- Geld verwahren oder überweisen (nicht nur bezahlen lassen)? → Stufe 3 und Hinweis auf Erlaubnispflicht (Fachberatung).

## Ergebnis-Dokument `00-start.md`

```markdown
# Projekt-Start: <Name>

| Punkt | Festlegung |
|---|---|
| Einstieg | Neue Idee / Bestehende App |
| Erfahrung | Einsteiger / Entwickler |
| Arbeitsweise | Geführt / Adaptiv |
| Umfang | Voll / Lite / (bestehende App: aus B2) |
| Plattform | … |
| Datenarten | … |
| Risikostufe | 1 / 2 / 3 – Begründung (bestehende App: wird in B1 bestimmt) |
| Sprache | Deutsch |
| Datum | JJJJ-MM-TT |

## Hinweise
- …
```

## Definition of Done
- [ ] Alle zutreffenden Einstellungen festgelegt
- [ ] Projektordner mit `PROJECT_STATE.md`, `ENTSCHEIDUNGEN.md`, `QUELLEN.md` angelegt
- [ ] Nutzer kennt die Befehle

→ **Gate** (siehe `AGENTS.md` Abschnitt 7). Bei bestehender App lautet Option 1: „Weiter zu B0 – Ziel & Zugang“.
