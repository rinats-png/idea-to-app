# Beispiel: So fühlt sich ein Durchlauf an

> Gekürzter Beispiel-Dialog (Einsteiger-Modus) für eine erfundene App-Idee. Er zeigt den Stil: eine Frage pro Nachricht, Vorschläge mit Empfehlung, ehrliche Einschätzung, Gate am Phasenende.

---

**KI:** Hallo! Ich begleite dich Schritt für Schritt von deiner Idee bis zu einem fertigen Bauplan. Alles wird gespeichert, du kannst jederzeit pausieren.

Womit starten wir?
a) **Neue Idee** – es gibt noch keine App
b) **Bestehende App** – es gibt schon Code

**Nutzer:** a

**KI:** Fünf kurze Fragen:
1. Wie viel Erfahrung hast du? a) keine b) ein bisschen c) Entwickler
2. Wie sollen wir arbeiten? a) **Geführt** – eine Frage nach der anderen **(Empfehlung für Einsteiger)** b) **Adaptiv** – ich fülle Bekanntes selbst aus und frage nur bei wichtigen Entscheidungen
3. Wie gründlich? a) Voll – für eine App, die andere nutzen **(Empfehlung, wenn du veröffentlichen willst)** b) Lite – schneller Prototyp
4. Wo soll die App laufen? a) im Browser/als Web-App **(Empfehlung für den Einstieg)** b) App Store / Google Play c) beides d) erklär mir den Unterschied
5. Welche Daten? a) keine b) Konten mit E-Mail c) eigene Inhalte d) Bezahlung über einen Anbieter e) Standort grob f) Gesundheit/Finanzen/genauer Standort g) Kinder/Dritte h) weiß nicht

**Nutzer:** 1a, 2a, 3a, 4a, 5 b und c

**KI:** Danke! Weil deine App Nutzerkonten mit eigenen Inhalten hat, ordne ich sie in **Sicherheitsstufe 2** ein. Das heißt: Wir planen Login, Zugriffsschutz und Schutz gegen Passwort-Durchprobieren von Anfang an ein. Passt das?

**Nutzer:** ja

**KI:** Hat deine App schon einen Arbeitstitel? Er darf provisorisch sein.

**Nutzer:** „Schichtfit“

**KI:** *(legt `projekte/schichtfit/` an, schreibt `00-start.md`)*

```
──────────────────────────────
✅ Phase 0 – Start & Einstellungen: Entwurf fertig
📄 Ergebnis: projekte/schichtfit/00-start.md
🖼️ Visual: keins
💡 Meine Annahmen: keine
❓ Noch offen: nichts
📊 Fortschritt: ░░░░░░░░░░ 1 von 25 Phasen

Wie möchtest du weitermachen?
1️⃣ Weiter zu Phase 1 – Idee & Problem
2️⃣ Etwas ergänzen oder ändern
3️⃣ Zurück zu einer früheren Phase
4️⃣ Pause – alles ist gespeichert
──────────────────────────────
```

**Nutzer:** 1

**KI:** In Phase 1 trennen wir sauber zwischen dem **Problem** und deiner **Lösung** – das ist die Grundlage für alles Weitere.
Erzähl mir deine Idee so, wie du sie einem Freund erzählen würdest.

**Nutzer:** Eine App, die Schichtarbeitern sagt, wann sie trainieren sollen, je nach Dienstplan.

**KI:** Verstanden. Welches Problem löst das? Was machen Schichtarbeiter heute stattdessen – und was ist daran schlecht?

**Nutzer:** Die meisten trainieren gar nicht regelmäßig, weil jeder Trainingsplan von festen Tagen ausgeht.

*(… weitere Fragen …)*

**KI:** Hier meine ehrliche Einschätzung:
- **Stärke:** klare Nische, die große Fitness-Apps kaum bedienen.
- **Größte Schwachstelle:** Der Dienstplan muss eingegeben werden. Wenn das umständlich ist, hören Nutzer nach einer Woche auf. Das sollten wir in Phase 2 zuerst prüfen.
- **Missbrauchspotenzial:** gering; Dienstpläne können aber Rückschlüsse auf Abwesenheit von zu Hause zulassen – das behandeln wir als personenbezogene Daten.

`parkplatz` wäre übrigens ein guter Ort für Ideen wie „Import aus Dienstplan-Apps“ – die kommen später.

*(… Gate Phase 1 …)*

---

## Typischer Ablauf später

- **Phase 8:** Die KI legt drei Richtungen an (`mockups/S01-uebersicht-a.html` kompakt, `-b` minimal, `-c` Karten) und fragt, welche es werden soll.
- **Phase 12:** Die KI zeigt eine Matrix und fragt: „Dürfen Trainer die Pläne ihrer Sportler sehen?“
- **Phase 14:** Die KI erklärt: „Ich schlage vor, dass nach 5 falschen Passwörtern eine Wartezeit greift, statt das Konto zu sperren – sonst könnte jemand absichtlich fremde Konten blockieren.“
- **Phase 19:** Jede Muss-Funktion bekommt Kriterien und Tests (`F-01` → `AK-F01-1` → `TEST-F01-1`).
- **Phase 22:** Die KI erzeugt `handoff/`, lässt das Prüfskript laufen und meldet z. B.: „1 FEHLER: Muss-Funktion F-04 ist keiner Aufgabe zugeordnet – soll ich das in der Roadmap ergänzen?“
- **Phase 23:** Ein Haken ohne Nachweis zählt nicht: „Backup-Wiederherstellung ist abgehakt, aber ohne Datum – damit ist die App noch nicht freigabefähig.“
