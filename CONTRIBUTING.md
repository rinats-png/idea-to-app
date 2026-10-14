# Mitmachen

Verbesserungen sind willkommen – besonders aus echten Durchläufen.

## Wie

1. Issue eröffnen: Was war unklar, was fehlte, wo hat die KI sich falsch verhalten? Gern mit Auszug aus dem Dialog (ohne persönliche Daten).
2. Pull Request mit konkreter Änderung.

## Regeln für Änderungen

- **Sprache:** Deutsch, einfach und klar. Fachbegriffe beim ersten Auftreten erklären oder ins Glossar aufnehmen.
- **Phasen-Dateien** behalten ihre Struktur: Kopf-Tabelle, „Für Einsteiger erklärt“, Fragen, „Was die KI selbst ergänzen soll“, „Missbrauchs- und Sicherheitscheck“, Ergebnis-Dokument, Definition of Done, Gate.
- **Eine Frage = eine Sache.** Keine zusammengesetzten Fragen.
- **Sicherheitsregeln** in `security/regeln-fuer-ki.md` nur verschärfen oder präzisieren, nicht aufweichen – Ausnahmen mit Begründung und Quelle (z. B. OWASP).
- **Keine erfundenen Fakten:** Gesetze, Preise und Anbieterdetails nur mit Hinweis „prüfen“ bzw. Quelle.
- Neue Phase oder geänderte Reihenfolge → `AGENTS.md` (Übersicht, Abhängigkeiten, Lite-Modus) und `templates/PROJECT_STATE.md` mit anpassen.
- **Konkrete Zahlen** (Hash-Parameter, Längen, Laufzeiten, Limits) nur in `security/standardwerte.md`, nie in `regeln-fuer-ki.md` oder den Phasen. Regelnummern in `regeln-fuer-ki.md` nicht umnummerieren (das Prüfskript kontrolliert sie im Handoff).
- Neue Vorlagen-Formate (Tabellen mit IDs) mit `scripts/pruefe-projekt.mjs` abstimmen und einen Test in `scripts/pruefe-projekt.test.mjs` ergänzen.
- Vor dem Pull Request: `npm test` (prüft u. a. Pflichtabschnitte aller Phasen und alle relativen Links).
- **IDs nur in Tabellen:** Neue Vorlagen, in denen IDs ausgewertet werden, nutzen Tabellen. Das Prüfskript wertet Listen nicht aus (und meldet „NICHT GEPRÜFT“).
- **Quellen mit Prüfdatum:** Guides und Phasen mit rechtlichen, preislichen oder anbieterbezogenen Aussagen enden mit einer Quellentabelle (Aussage, URL, Art, Prüfdatum, neu prüfen bis). Nicht belegbar = `[PRÜFEN]`.
- **Regelwerk-Version:** Ändert sich eine Regel, eine Pflichtabschnitt-Struktur oder ein vom Prüfskript ausgewertetes Format, erhöhe die Version in `package.json` (Minor) und beschreibe im `CHANGELOG.md`, was bestehende Projekte prüfen müssen.
- Änderungen im `CHANGELOG.md` eintragen.
