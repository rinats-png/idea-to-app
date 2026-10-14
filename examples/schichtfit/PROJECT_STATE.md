# Projektstatus: Schichtfit

> Gedächtnis des Projekts (fiktives Beispiel).

| Feld | Wert |
|---|---|
| Slug | `schichtfit` |
| Erstellt | 2026-10-01 |
| Zuletzt aktualisiert | 2026-10-14 |
| Einstieg | Neue Idee |
| Erfahrung | Einsteiger |
| Arbeitsweise | Geführt |
| Umfang | Lite |
| Plattform | Web-App (PWA), Handy zuerst |
| Risikostufe | 2 – Grund: Nutzerkonten und Dienstpläne (Hinweis, wann jemand nicht zu Hause ist); keine Gesundheitsdaten, keine Zahlung |
| Sprache | Deutsch |
| Regelwerk-Version | 1.2.0 |

## Aktueller Stand
- **Aktuelle Phase:** 22 – Build-Handoff (Gate)
- **Nächster Schritt:** Offene Annahme A-003 klären, dann Bau mit dem Coding-Tool starten
- **Fortschritt:** ▓▓▓▓▓▓▓▓▓▓ 12 von 12 Lite-Phasen (Phase 19 freiwillig vorgezogen)

## Fortschritt

Status: `offen` · `in Arbeit` · `fertig` · `übersprungen (<Grund>)` · `⚠️ prüfen` · `pausiert (<Bedingung>)` · `gestoppt (<Grund>)`

| Nr | Phase | Status | Datei |
|---|---|---|---|
| 0 | Start & Einstellungen | fertig | 00-start.md |
| 1 | Idee & Problem | fertig | 01-idee.md |
| 2 | Idee validieren | übersprungen (Lite) | 02-validierung.md |
| 3 | Zielgruppe | fertig | 03-zielgruppe.md |
| 4 | Markt & Wettbewerb | übersprungen (Lite) | 04-markt.md |
| 5 | MVP-Umfang | fertig | 05-mvp.md |
| 6 | User-Flows | fertig | 06-flows.md |
| 7 | Screens & Navigation | übersprungen (Lite) | 07-screens.md |
| 8 | Mockups | fertig | 08-mockups.md |
| 9 | Design-System | übersprungen (Lite) | 09-design.md |
| 10 | Barrierefreiheit & Sprachen | übersprungen (Lite) | 10-barrierefreiheit.md |
| 11 | Daten & Inhalte | fertig | 11-daten.md |
| 12 | Rollen & Berechtigungen | übersprungen (Lite, vor Launch nachholen) | 12-berechtigungen.md |
| 13 | Tech-Stack & Architektur | fertig | 13-architektur.md |
| 14 | Sicherheitsarchitektur | fertig | 14-sicherheit.md |
| 15 | Login, Zahlung, Integrationen | übersprungen (Lite) | 15-integrationen.md |
| 16 | Recht & Datenschutz | übersprungen (Lite, vor Launch nachholen) | 16-recht.md |
| 17 | Monetarisierung & Kosten | übersprungen (Lite) | 17-kosten.md |
| 18 | Performance, Offline, Benachrichtigungen | übersprungen (Lite) | 18-qualitaetsziele.md |
| 19 | Qualität & Tests | fertig | 19-tests.md |
| 20 | Betrieb | übersprungen (Lite, vor Launch nachholen) | 20-betrieb.md |
| 21 | Roadmap & Aufgaben | fertig | 21-roadmap.md |
| 22 | Build-Handoff | fertig | handoff/AGENTS.md |
| 23 | Launch & Freigabe | offen | 23-launch.md |
| 24 | Iteration & Wartung | übersprungen (Lite) | 24-iteration.md |

## Kernentscheidungen (Kurzfassung – Details in ENTSCHEIDUNGEN.md)
- E-001: Schichten werden als lokale Uhrzeit mit Zeitzone gespeichert, nicht als UTC.
- E-002: Eine Schicht über Mitternacht zählt zum Starttag.
- E-003: Fertiger Login-Anbieter statt eigener Passwortverwaltung.
- E-004: Kein Export und keine Erinnerungen im ersten Wurf (Soll/Kann).

## Annahmen

> Jede `[ANNAHME A-…]` aus den Dokumenten steht hier. Bestätigt: `nein` / `ja` / `verworfen`.

| ID | Annahme | Phase | Bestätigt |
|---|---|---|---|
| A-001 | Nutzer arbeiten überwiegend in Deutschland (eine Zeitzone: Europe/Berlin) | 3 | ja |
| A-002 | Pro Nutzer höchstens eine Schicht pro Tag im ersten Wurf | 5 | ja |
| A-003 | Die Trainingsvorschläge sind allgemeine Fitness-Anregungen und keine medizinische Beratung; ein Hinweis dazu erscheint in der App | 5 | nein |

## Offene Fragen
- A-003 mit dem Projektinhaber klären (Wortlaut des Hinweises).

## Parkplatz (Ideen für später)
- Kalender-Import aus dem Dienstplan-Programm des Arbeitgebers
- Wochenrückblick per E-Mail
