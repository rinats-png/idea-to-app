# Modus: Bestehende App

> Für Apps, die es schon gibt – selbst gebaut, mit KI gebaut oder übernommen. Ziel: verstehen, was da ist, Risiken finden und dann gezielt weiterentwickeln oder sanieren, **ohne** Funktionierendes unnötig neu zu bauen.

Ablauf: **Phase 0 → B0 Ziel & Zugang → B1 Ist-Analyse → B2 Soll & Lücken → ausgewählte Phasen → Handoff**

## Grundregeln in diesem Modus

1. **Erst lesen, dann reden.** In B0–B2 veränderst du **nichts** am Code. Keine Installationen im App-Repository, keine Migrationen, keine Befehle, die Daten verändern oder Dienste aufrufen. Erlaubt: Dateien lesen, suchen, Abhängigkeitslisten auswerten; `npm audit` o. ä. nur nach Rückfrage.
2. **Bestand respektieren.** Funktionierender Code wird nicht wegen Stil, Geschmack oder „modernerer“ Technik neu geschrieben. Jede vorgeschlagene Änderung braucht einen Grund: Fehler, Sicherheitsrisiko, rechtliche Pflicht, Ziel des Nutzers oder messbarer Wartungsgewinn.
3. **Kein Technologiewechsel ohne zwingenden Grund.** Ein Stack-Wechsel (z. B. Framework, Datenbank) nur mit Kosten-Nutzen-Abwägung als Entscheidung `E-…` und ausdrücklicher Zustimmung.
4. **Belege statt Vermutungen.** Jeder Befund nennt Fundstelle (`Datei:Zeile` oder Ordner) und wie sicher du bist (sicher / wahrscheinlich / zu prüfen). Was du nicht sehen konntest (z. B. Datenbankregeln, die nur im Dashboard des Anbieters liegen), kennzeichnest du als **nicht prüfbar** – nicht als „in Ordnung“.
5. **Geheimnisse nie ausschreiben.** Findest du Schlüssel oder Passwörter im Code, nennst du nur Fundort und Art und maskierst den Wert (`sk_live_…abcd` → `sk_live_****`). Ein gefundener geheimer Schlüssel ist immer ein **kritischer** Befund: Schlüssel widerrufen und neu erzeugen, nicht nur löschen.
6. **Sicherheit vor Funktionen.** Kritische und hohe Sicherheitsbefunde kommen in der Roadmap vor neue Funktionen.
7. **Vor Umbauten absichern.** Bevor bestehender Code geändert wird, sollen Tests das aktuelle Verhalten festhalten (Charakterisierungstests), damit nichts unbemerkt kaputtgeht.

---

## B0 – Ziel & Zugang

| | |
|---|---|
| **Ziel** | Klären, was erreicht werden soll und wie du an den Code kommst |
| **Ergebnis** | `projekte/<slug>/B0-ziel.md` |
| **Dauer** | ca. 5 Minuten |

### Fragen

**Q1 – Was möchtest du mit der App erreichen?**
- a) **Weiterentwickeln** – neue Funktionen oder größere Änderungen
- b) **Absichern / sanieren** – Fehler, Sicherheitslücken, Chaos im Code beseitigen
- c) **Nur prüfen** – ich möchte einen ehrlichen Bericht, wie gut / sicher die App ist
- d) **Verstehen / übernehmen** – ich muss mich in fremden Code einarbeiten
- e) Mehreres davon (Reihenfolge?)

**Q2 – Wie komme ich an den Code?**
- a) Er ist in diesem Tool bereits geöffnet bzw. freigegeben (Pfad?)
- b) GitHub-Repository (Link) – ich verbinde bzw. klone es, wenn mein Tool das kann
- c) ZIP-Datei zum Hochladen
- d) Nur einzelne Dateien / Screenshots (dann eingeschränkte Analyse – offen sagen)

> Tool-Hinweise: In Claude Code den App-Ordner zusätzlich freigeben (z. B. mit `/add-dir <pfad>`) oder Claude Code im App-Ordner starten und auf `idea-to-app` verweisen; in Cursor/VS Code beide Ordner in einem Arbeitsbereich öffnen; in Chat-Tools das Repository über eine GitHub-Verbindung oder als ZIP bereitstellen. Details: `guides/tools.md`.

**Q3 – Läuft die App schon irgendwo live, und nutzen echte Menschen sie?**
- a) Nein, nur lokal / in Entwicklung
- b) Ja, ein paar Testnutzer
- c) Ja, öffentlich mit echten Nutzerdaten
→ Bei c: Sicherheitsbefunde sind dringender; vor Änderungen Backup klären.

**Q4 – Was weißt du schon über Probleme?** (Bekannte Fehler, Beschwerden, Stellen, vor denen du Angst hast.) Freitext oder „nichts Konkretes“.

**Q5 – Gibt es etwas, das sich auf keinen Fall ändern darf?** (z. B. Datenbank-Anbieter, Design, bestimmte Funktionen, Budget.)

### Ergebnis-Dokument `B0-ziel.md`

```markdown
# Ziel & Zugang

| Punkt | Festlegung |
|---|---|
| Ziel | Weiterentwickeln / Absichern / Prüfen / Verstehen |
| Zugang | Pfad / Repo / ZIP / Einzeldateien |
| Live mit echten Nutzern | nein / Test / ja |
| Bekannte Probleme | … |
| Unveränderlich | … |
```

→ **Gate** (Option 1: „Weiter zu B1 – Ist-Analyse“)

---

## B1 – Ist-Analyse

| | |
|---|---|
| **Ziel** | Ein ehrliches Bild der App: Aufbau, Funktionen, Daten, Sicherheit, Qualität |
| **Ergebnis** | `projekte/<slug>/B1-ist-analyse.md` (Vorlage `templates/ist-analyse.md`) |
| **Visual** | Architektur-Diagramm (Ist), ER-Diagramm (Ist), Screen-Map (Ist) als Mermaid |
| **Dauer** | je nach Größe 15–60 Minuten Analyse durch die KI |
| **Zweitprüfung** | Stufe 3 Pflicht, Stufe 2 empfohlen (`AGENTS.md` Abschnitt 14) |

### Ablauf für die KI

Diese Phase machst **du** – der Nutzer muss hier kaum etwas beantworten. Arbeite die Prüfpunkte der Reihe nach ab, notiere Fundstellen und halte den Nutzer mit 1–2 Zeilen pro Abschnitt auf dem Laufenden. Bei großen Repositories: erst Struktur und Einstiegspunkte, dann gezielt suchen statt alles zu lesen.

**1. Überblick**
- Ordnerstruktur, Sprache(n), Frameworks und Versionen (`package.json`, `pubspec.yaml`, `requirements.txt` …)
- Wie wird gestartet, gebaut, getestet, veröffentlicht? (Skripte, README, CI-Konfiguration)
- Hosting / Deployment (Konfigurationsdateien wie `vercel.json`, `netlify.toml`, `Dockerfile`, Workflows)

**2. Funktionen und Oberfläche (rekonstruiert)**
- Liste der vorhandenen Funktionen → IDs `F-01 …` mit Status (fertig / halb fertig / kaputt / unklar)
- Routen / Screens → `S01 …` und Ist-Screen-Map
- Zustände: Gibt es Lade-, Leer-, Fehlerzustände?

**3. Daten**
- Datenmodell aus Migrationen, Schema-Dateien, ORM-Modellen → Ist-ER-Diagramm
- Datenklassifizierung wie in Phase 11 → **Risikostufe bestimmen** und in `PROJECT_STATE.md` eintragen
- Wo liegen Dateien (Uploads), wie werden sie ausgeliefert?
- Externe Dienste und welche Daten an sie gehen

**4. Sicherheit** (Prüfpunkte aus `security/checkliste.md` und `security/regeln-fuer-ki.md`)
- **Secrets:** Schlüssel im Code oder in der Git-Historie? Geheime Werte in Variablen mit Client-Präfix (`VITE_`, `NEXT_PUBLIC_`, `EXPO_PUBLIC_`)? `.env` im Repository? `.gitignore` vorhanden?
- **Zugriffskontrolle:** Wird bei jedem Datenzugriff der Besitz geprüft? Suche Endpunkte bzw. Datenbankabfragen, die eine ID aus Anfrage/URL ohne Besitzfilter verwenden. Bei Supabase: Ist RLS für jede Tabelle aktiviert (Migrationen prüfen; Dashboard-Einstellungen = nicht prüfbar, Nutzer fragen)? Bei Firebase: Security Rules vorhanden und nicht „alles erlaubt“?
- **Mass Assignment:** Werden Request-Bodies ungefiltert gespeichert? Können `role`, `owner_id` o. ä. vom Client gesetzt werden?
- **Login:** Eigenbau oder Anbieter? Passwort-Hashing? Reset-Ablauf? Nutzer-Enumeration?
- **Rate Limiting:** Vorhanden für Login, Registrierung, Reset, teure Endpunkte?
- **Eingaben/Ausgaben:** Schema-Validierung? Rohes SQL mit Eingaben? `innerHTML`/`dangerouslySetInnerHTML`/`v-html`?
- **Header / CORS / HTTPS:** Konfiguration vorhanden? CORS `*`?
- **Abhängigkeiten:** Lockfile? Offensichtlich veraltete oder ungepflegte Pakete? (`npm audit` o. ä. nur nach Rückfrage ausführen.)
- **Logging:** Werden sensible Daten geloggt?

**5. Qualität und Betrieb**
- Tests: vorhanden? Welche Art? Laufen sie in CI?
- Fehlerbehandlung, Monitoring, Backups (soweit erkennbar)
- Lesbarkeit und Struktur: nur dort bewerten, wo es die Weiterentwicklung **konkret** behindert (z. B. 2000-Zeilen-Datei, die jede Änderung riskant macht) – keine Stilkritik

**6. Recht (soweit im Code erkennbar)**
- Impressum, Datenschutzerklärung, Einwilligung für Tracking, Konto-Löschung, Datenexport vorhanden?

### Befunde

Jeder Befund bekommt eine ID `BF-01 …`:

| Feld | Inhalt |
|---|---|
| Schweregrad | **kritisch** (aktiv ausnutzbar / Datenleck / Schlüssel offen) · **hoch** (wahrscheinlich ausnutzbar oder Pflicht verletzt) · **mittel** · **niedrig** |
| Bereich | Sicherheit / Daten / Recht / Qualität / Betrieb / UX |
| Fundstelle | `Datei:Zeile` |
| Beschreibung | Was ist das Problem – in einfacher Sprache |
| Sicherheit der Aussage | sicher / wahrscheinlich / zu prüfen / nicht prüfbar |
| Empfehlung | Was tun – kleinstmögliche wirksame Änderung |

**Kritische Befunde sofort melden**, nicht erst am Ende der Analyse – besonders offene Schlüssel bei einer live laufenden App (Q3 = c).

### Fragen an den Nutzer (nur falls nötig)
- Einstellungen, die nicht im Code stehen (z. B. RLS im Supabase-Dashboard, Auth-Einstellungen, Hosting-Header)
- Unklare Funktionen („Wofür ist der Bereich X?“)

### Definition of Done
- [ ] Alle sechs Bereiche bearbeitet oder als „nicht prüfbar“ gekennzeichnet
- [ ] Funktionen `F-…` und Screens `S…` rekonstruiert
- [ ] Risikostufe bestimmt
- [ ] Befunde mit Schweregrad, Fundstelle und Empfehlung
- [ ] Zweitprüfung durchgeführt (wenn Pflicht/empfohlen)

→ **Gate** – im Gate zusätzlich die Zahl der Befunde je Schweregrad nennen.

---

## B2 – Soll & Lücken

| | |
|---|---|
| **Ziel** | Festlegen, was sich ändern soll, und welche Phasen dafür nötig sind |
| **Ergebnis** | `projekte/<slug>/B2-soll-und-luecken.md` |
| **Visual** | Tabelle Ist → Soll |
| **Dauer** | ca. 10–15 Minuten |

### Fragen

**Q1 – Die KI zeigt die Befunde, sortiert nach Schweregrad. Welche sollen behoben werden?** Empfehlung: alle kritischen und hohen. Nicht behobene kritische/hohe Befunde werden als Risiko `E-…` dokumentiert.

**Q2 (bei Ziel „Weiterentwickeln“) – Was genau soll neu dazukommen oder sich ändern?** → wird in Phase 5 als neue Funktionen `F-…` (fortlaufend nach den rekonstruierten) aufgenommen.

**Q3 – Die KI schlägt vor, welche Phasen jetzt durchlaufen werden (Tabelle unten). Passt das?**

### Welche Phasen laufen?

| Ziel | Phasen | Hinweise |
|---|---|---|
| **Nur prüfen** | keine weiteren – B1-Bericht ist das Ergebnis; optional Phase 23-Checkliste als Freigabeprüfung | Bericht kann direkt geteilt werden |
| **Absichern / sanieren** | 11 (Ist bestätigen), 12, 14, 16 (verkürzt), 19, 20, 21, 22 | Roadmap beginnt mit kritischen Befunden; vor Umbauten Charakterisierungstests |
| **Weiterentwickeln** | 1 (nur für die neue Funktion: Problem), 5, 6, 8, 11, 12, 14, 19, 21, 22 – plus 7/9/13/15, wenn die Änderung sie berührt | Bestehende Teile aus B1 übernehmen statt neu erfragen; kritische Befunde trotzdem zuerst |
| **Verstehen / übernehmen** | B1 ausführlich + 13 (Ist-Architektur dokumentieren) + 21 (Einarbeitungsplan) | Ergebnis ist eine verständliche Projektdoku |

In allen Fällen gilt: Phasen, die laufen, **übernehmen den Ist-Zustand aus B1** und fragen nur nach dem, was sich ändern soll. Nicht laufende Phasen bekommen den Status `übersprungen (B2)`.

### Ergebnis-Dokument `B2-soll-und-luecken.md`

```markdown
# Soll & Lücken

## Ziel
…

## Ist → Soll
| Bereich | Ist (B1) | Soll | Bezug |
|---|---|---|---|
| Zugriffskontrolle | Einträge ohne Besitzprüfung | Besitzprüfung + RLS + Tests | BF-02 |

## Befunde: Entscheidung
| Befund | Schweregrad | Entscheidung | Bezug |
|---|---|---|---|
| BF-01 | kritisch | beheben | – |
| BF-07 | mittel | später | Parkplatz |
| BF-09 | hoch | akzeptiert | E-004 |

## Ablauf
Phasen: …
Begründung: …
```

### Definition of Done
- [ ] Jeder kritische/hohe Befund: beheben oder akzeptiert (`E-…`)
- [ ] Phasenauswahl bestätigt und in `PROJECT_STATE.md` eingetragen
- [ ] Unveränderliches aus B0 berücksichtigt

→ **Gate** (Option 1: „Weiter zu Phase <erste gewählte Phase>“)

---

## Handoff bei bestehender App (Phase 22)

- Das Übergabepaket kommt **in das bestehende Repository** unter `docs/idea-to-app/` – nicht ins Wurzelverzeichnis, damit nichts überschrieben wird.
- Gibt es schon eine `AGENTS.md` / `CLAUDE.md` / Cursor-Regeln: **nicht ersetzen**, sondern einen Abschnitt „idea-to-app“ ergänzen, der auf `docs/idea-to-app/AGENTS.md` verweist. Widersprüche zu bestehenden Regeln dem Nutzer nennen.
- Die Roadmap beginnt mit den zu behebenden kritischen/hohen Befunden (`TASK` → `BF`), danach Charakterisierungstests für Bereiche, die umgebaut werden, dann neue Funktionen.
