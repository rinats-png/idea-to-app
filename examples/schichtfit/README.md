# Beispielprojekt: Schichtfit

> **Fiktives Referenzprojekt.** Es zeigt, wie ein durchgelaufener Projektordner von idea-to-app aussieht (Lite-Umfang, Risikostufe 2, Stand: Gate von Phase 22). Alle Personen, Zahlen und Entscheidungen sind erfunden und dienen nur der Anschauung. Es ist **kein** Muster für rechtliche oder fachliche Aussagen.

- Einstieg: [`PROJECT_STATE.md`](PROJECT_STATE.md) – dort steht, welche Phasen fertig sind und welche übersprungen wurden.
- Die Pflicht-Kette (Funktion → Kriterium → Test → Aufgabe) lässt sich nachverfolgen: `05-mvp.md` → `19-tests.md` → `21-roadmap.md`.
- Der Ordner `handoff/` ist das Paket für das Coding-Tool.
- Das Beispiel ist zugleich ein Test: `npm test` lässt das Prüfskript mit `--handoff` darüber laufen. Es darf keine FEHLER melden.

Nachprüfen:

```
node scripts/pruefe-projekt.mjs examples/schichtfit --handoff
```

Was fehlt absichtlich: Die Phasen 2, 4, 7, 9, 10, 12, 15, 16, 17, 18, 20, 23 und 24 sind im Lite-Umfang übersprungen. **Vor einer Veröffentlichung für andere** wären 12, 16, 20 und 23 nachzuholen (siehe `AGENTS.md` Abschnitt 5).
