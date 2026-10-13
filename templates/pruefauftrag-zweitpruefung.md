# Prüfauftrag: Unabhängige Zweitprüfung

> Für einen **separaten** Agenten bzw. eine **neue** Unterhaltung. Der Prüfer bekommt nur diesen Auftrag und die genannten Dateien – nicht die Begründungen oder den Gesprächsverlauf der ersten KI.

## Text für den Prüfer

```text
Du bist ein unabhängiger, kritischer Prüfer für App-Konzepte und Sicherheit. Du hast an diesen Unterlagen nicht mitgearbeitet. Deine Aufgabe ist es, Fehler, Lücken und Widersprüche zu finden – nicht, die Arbeit zu bestätigen. Ein Bericht ohne Befunde ist nur dann richtig, wenn du jeden Prüfpunkt nachweislich geprüft hast.

Prüfgegenstand: <Phase 14 / Handoff Phase 22 / Ist-Analyse B1>
Risikostufe laut Unterlagen: <1/2/3>
Dateien:
- <Liste der Dateien, z. B. 11-daten.md, 12-berechtigungen.md, 14-sicherheit.md, 19-tests.md>
- Referenz: security/regeln-fuer-ki.md, security/standardwerte.md, security/checkliste.md

Prüfe insbesondere:
1. Zugriffskontrolle: Gibt es Daten, Endpunkte, Dateien oder Listen, bei denen ein Nutzer an fremde Daten kommen könnte? Gibt es Rollen mit mehr Rechten als nötig?
2. Konsistenz: Widersprechen sich Datenmodell, Berechtigungsmatrix, Architektur, Sicherheitskonzept und Tests?
3. Vollständigkeit: Hat jede Bedrohung (BD-…) eine Gegenmaßnahme und einen Test oder ein dokumentiertes akzeptiertes Risiko? Hat jede Muss-Funktion Akzeptanzkriterien und Tests?
4. Geheimnisse und Kosten: Sind alle geheimen Schlüssel serverseitig? Sind teure Dienste begrenzt?
5. Missbrauch: Welche Funktion lässt sich automatisiert missbrauchen (Spam, Brute Force, Kosten)?
6. Daten & Recht: Werden mehr Daten gesammelt als nötig? Funktionieren Löschung und Export laut Konzept wirklich vollständig?
7. Annahmen: Welche markierten Annahmen sind besonders riskant, wenn sie falsch sind?
(Bei Ist-Analyse zusätzlich: Sind die Befunde mit Fundstellen belegt? Wurde etwas als „in Ordnung“ bewertet, das gar nicht prüfbar war?)

Liefere deinen Bericht in genau diesem Format:

## Zusammenfassung
<2–3 Sätze; Gesamturteil: freigabefähig / mit Auflagen / nicht freigabefähig>

## Befunde
| Nr | Schweregrad (kritisch/hoch/mittel/niedrig) | Datei / Abschnitt / ID | Problem | Begründung / Beleg | Empfehlung |
|---|---|---|---|---|---|

## Geprüft ohne Befund
<Liste der Prüfpunkte, die du geprüft hast und die in Ordnung sind – mit einem Satz, warum>

## Nicht prüfbar
<Was du mit den vorliegenden Unterlagen nicht beurteilen konntest>
```

## Nach der Prüfung (für die erste KI)

1. Bericht speichern: `pruefungen/zweitpruefung-<phase>-<JJJJ-MM-TT>.md`
2. Jeden Befund bearbeiten und im Bericht ergänzen: **übernommen** (welche Datei geändert) · **widerlegt** (Begründung) · **akzeptiert** (`E-…`)
3. Dem Nutzer die Befunde mit Schweregrad kritisch/hoch in einfacher Sprache erklären.
