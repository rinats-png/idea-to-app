# Changelog

## 1.1.0 – 2026-10-13

Überarbeitung nach externer Analyse.

**Neu**
- Modus **„Bestehende App“** (`modes/bestehende-app.md`): Ziel & Zugang (B0), nur-lesende Ist-Analyse mit Befunden, Schweregrad und Fundstellen (B1), Soll & Lücken mit Phasenauswahl je Ziel – weiterentwickeln, sanieren, prüfen, verstehen (B2); Handoff ins bestehende Repository ohne Überschreiben
- **Adaptiver Modus** (`modes/adaptiv.md`): KI füllt Bekanntes aus, fragt nur bei kritischen Entscheidungen, Freigabe in 5 Blöcken
- **Prüfskript** `scripts/pruefe-projekt.mjs` (ohne Abhängigkeiten) mit Modi `--handoff` und `--launch`, Bericht in `pruefungen/`; 14 Tests + Konsistenztests für das Regelwerk; GitHub-Actions-Workflow
- **IDs und Rückverfolgbarkeit** (F, FL, S, BD, AK, TEST, T-SEC, TASK, E, A, Q, BF) mit Pflicht-Ketten
- **Quellenregister** `QUELLEN.md` mit Art, Prüfdatum und Verlässlichkeit
- **Unabhängige Zweitprüfung** mit Prüfauftrag-Vorlage (Stufe 3 Pflicht)
- **Rückweg vom Code in den Plan** (`docs/aenderungen.md`, Abschnitt „Abweichungen vom Plan“ im Handoff)
- `security/standardwerte.md` als einzige Stelle für konkrete Sicherheitswerte
- Fortschrittsbalken und Pausen-Empfehlungen im Gate

**Geändert**
- Risikostufen verfeinert: Bezahlung über Anbieter und grober Standort → Stufe 2; regulierte Finanzfunktionen, genaue/dauerhafte Standortdaten → Stufe 3
- Antwort bei fehlender Berechtigung (404/403) ist jetzt eine Projektentscheidung; Tests prüfen konfigurierbar und vor allem „keine fremden Daten“
- Launch-Checkliste mit Nachweis-Spalte und Freigabestatus
- Phase 13 mit Bewertungsmatrix für 2–3 Architektur-Optionen; Phase 8 mit echten Gestaltungsrichtungen
- Sicherheitsregeln ohne Zahlen, verweisen auf `docs/sicherheit.md`

## 1.0.0 – 2026-10-13

Erste Version.

- 25 Phasen von der Idee bis zu Launch und Wartung, jeweils mit Fragen, KI-Ergänzungen, Missbrauchs- und Sicherheitscheck, Ergebnis-Vorlage, Visual und Definition of Done
- Gate nach jeder Phase (weiter / ergänzen / zurück / Pause)
- Voll- und Lite-Modus, Einsteiger- und Entwickler-Modus, Risikostufen 1–3 mit Überspring-Logik
- Sicherheitsreferenz: nicht verhandelbare Regeln für Coding-Tools, Bedrohungsmodell, Launch-Checkliste, automatisierte Sicherheitstests, Stack-Hinweise (Supabase, Firebase, Node.js, Hosting-Header)
- Vorlagen: Projektstatus, Entscheidungs-Log, Wireframe (HTML), Style-Tile (HTML), Handoff-AGENTS.md, Start-Prompt
- Anbindung an Claude Code (CLAUDE.md, Skill), Cursor, GitHub Copilot, Gemini CLI, Codex; Start-Text für Chat-KIs
- Einsteiger-Guide, Tool-Guide, Glossar, Beispiel-Ablauf
