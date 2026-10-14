# Sicherheit melden

idea-to-app ist ein Regelwerk aus Textdateien und einem kleinen Prüfskript. Es enthält keine Server und keine Nutzerdaten. Trotzdem kann es Schwachstellen geben, die andere Projekte gefährden, weil sie sich auf dieses Regelwerk verlassen.

## Was hier als Sicherheitsproblem zählt

- Eine Regel in `security/regeln-fuer-ki.md`, `security/standardwerte.md` oder `security/checkliste.md` ist **falsch oder zu schwach** und führt bei Befolgung zu einer unsicheren App (z. B. veralteter Hash-Parameter, fehlender Schutz gegen eine häufige Angriffsart).
- Das **Prüfskript** (`scripts/pruefe-projekt.mjs`) lässt sich überlisten, sodass es „in Ordnung“ meldet, obwohl Pflichtpunkte fehlen, oder es liest bzw. schreibt Dateien außerhalb des Projektordners.
- Die **Geheimnis-Erkennung** im Handoff übersieht eine verbreitete Schlüsselform.
- Ein Beispiel oder eine Vorlage enthält ein **echtes Geheimnis** oder personenbezogene Daten.
- Eine Anleitung führt Einsteiger zu einer **unsicheren oder rechtlich falschen** Handlung.

Nicht dazu gehören Schwachstellen in Apps, die jemand mit diesem Regelwerk geplant hat – die melde bitte beim Betreiber dieser App.

## So meldest du

1. **Bevorzugt:** Im Reiter „Security“ des GitHub-Repositories „Report a vulnerability“ wählen (privater Meldeweg), falls dort angeboten.
2. **Sonst:** Ein Issue eröffnen und nur schreiben, **dass** du ein Sicherheitsproblem melden möchtest – ohne Einzelheiten. Es wird dann ein privater Weg vereinbart.
3. Gib an: betroffene Datei und Stelle, was passiert, was stattdessen passieren sollte, und wenn möglich einen Vorschlag.

Bitte schreibe **keine echten Schlüssel, Passwörter oder persönlichen Daten** in Meldungen.

## Was du erwarten kannst

- Eine Rückmeldung, sobald ein Mensch die Meldung gesehen hat. Dieses Repository wird von einer Einzelperson gepflegt; feste Antwortzeiten gibt es nicht.
- Korrekturen kommen in den `CHANGELOG.md`. Auf Wunsch wirst du als Melder genannt.

## Versionen

Gepflegt wird jeweils die **aktuelle Version** (siehe `package.json`). Für ältere Versionen gibt es keine Korrekturen; die Projektprüfung meldet, wenn ein Projekt mit einer älteren Regelwerk-Version begonnen wurde.
