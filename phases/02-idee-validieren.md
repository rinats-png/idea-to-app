# Phase 2 – Idee validieren

> Kurz: Bevor wir Wochen investieren, testen wir mit wenig Aufwand, ob die Idee trägt.

| | |
|---|---|
| **Ziel** | Kritische Annahmen finden und einen günstigen Test planen |
| **Ergebnis** | `projekte/<slug>/02-validierung.md` |
| **Visual** | Annahmen-Tabelle (Risiko × Unsicherheit) |
| **Dauer** | ca. 10 Minuten (der Test selbst läuft danach) |
| **Überspringen** | Lite-Modus; „nur für mich“ → stark verkürzt (nur Q1) |

## Für Einsteiger erklärt

Jede Idee steht auf Annahmen: „Leute haben dieses Problem“, „sie würden dafür eine App installieren“, „sie würden dafür zahlen“. Wenn eine davon falsch ist, nützt die beste Umsetzung nichts. Wir suchen die **riskanteste** Annahme und überlegen, wie man sie in ein paar Tagen und fast ohne Geld prüfen kann – **bevor** gebaut wird.

## Fragen

**Q1 – Welche dieser Annahmen ist für deine Idee am unsichersten?** (Die KI schlägt 4–6 konkrete Annahmen aus Phase 1 vor; der Nutzer wählt bzw. ergänzt.)

Typische Annahmen:
- Das Problem ist häufig und schmerzhaft genug.
- Die Zielgruppe würde eine App dafür nutzen (statt Zettel / Excel / nichts).
- Die Zielgruppe ist erreichbar (man kann sie ansprechen).
- Sie würden dafür zahlen (falls geplant).
- Es ist technisch / rechtlich machbar.

**Q2 – Mit wie vielen Menschen aus der Zielgruppe könntest du in den nächsten zwei Wochen sprechen?**
- a) Keine
- b) 1–5
- c) 5–20
- d) Mehr als 20

**Q3 – Welche Art von Test passt zu dir?**
- a) **Gespräche** mit 5–10 Betroffenen (Fragen nach Vergangenheit, nicht nach Meinung) **(Empfehlung als Einstieg)**
- b) **Klick-Mockup** zeigen (kommt in Phase 8) und Reaktion beobachten
- c) **Landingpage** mit „Interesse? E-Mail eintragen“
- d) **Manueller Test**: Die „App“ wird erst per Hand / Excel / WhatsApp gespielt
- e) Ich möchte direkt bauen (dann: Risiko dokumentieren)

**Q4 – Ab welchem Ergebnis würdest du die Idee ändern oder aufgeben?** (Abbruchkriterium, z. B. „Wenn von 10 Befragten weniger als 3 das Problem regelmäßig haben“.)

## Was die KI selbst ergänzen soll

- **Annahmen-Tabelle** mit Einschätzung: Wie schlimm, wenn falsch? Wie unsicher?
- Gibt es externe Zahlen oder Studien zum Problem (falls Websuche verfügbar): mit Beleg in `QUELLEN.md` und Verweis `[Q-…]`. Ohne Beleg bleibt es eine Annahme.
- Für den gewählten Test: konkreter Plan (bei Gesprächen: 5–7 Interviewfragen, die nach **echtem Verhalten in der Vergangenheit** fragen, nicht „Würdest du …?“).
- Ehrlicher Hinweis, wenn Q3 = e: „Das ist möglich, aber du baust auf einer ungeprüften Annahme. Ich notiere das als Risiko.“

### Wenn das Abbruchkriterium zutrifft: der Ausstiegspfad

Aufhören ist eine legitime, gute Entscheidung – besser nach einer Woche Test als nach drei Monaten Bau. Wenn das Ergebnis des Tests das Kriterium aus Q4 erfüllt, geht die KI so vor und schreibt das Ergebnis in `02-validierung.md`:

1. **Ehrlich benennen**, was der Test gezeigt hat – ohne Schönfärberei und ohne Schuldzuweisung an den Nutzer.
2. **Drei Wege anbieten**, jeder mit einem Satz Begründung:
   - **Ändern (Pivot):** Welche Annahme war falsch, und welche kleinere oder andere Idee folgt daraus? Weiter mit `zurück zu Phase 1`.
   - **Pausieren:** Die Idee wartet auf eine Bedingung (z. B. ein Kontakt, ein Budget, ein Datensatz). Bedingung und Prüftermin notieren.
   - **Stoppen:** Das Projekt wird sauber abgeschlossen.
3. **Beim Stoppen** (oder Pausieren) mitnehmen, was bleibt:
   - Ein Abschnitt „Was wir gelernt haben“ (3–5 Sätze) in `02-validierung.md`
   - Ideen für andere Projekte im Parkplatz von `PROJECT_STATE.md`
   - Status der Phasen: `gestoppt (Validierung: <Grund>)` bzw. `pausiert (<Bedingung>)`; Eintrag in `ENTSCHEIDUNGEN.md` mit Datum
   - Persönliche Daten aus Interviews und Umfragen löschen, sobald sie nicht mehr gebraucht werden
4. **Keine Hintertür:** Wer trotz erfülltem Abbruchkriterium weitermachen will, darf das – als bewusst akzeptiertes Risiko (`E-…`) mit Begründung, nicht stillschweigend.

Beispiel für gute vs. schlechte Interviewfragen:
| Schlecht (Meinung) | Gut (Verhalten) |
|---|---|
| Würdest du so eine App nutzen? | Wann hattest du das Problem zuletzt? Was hast du dann gemacht? |
| Fändest du das praktisch? | Was hast du schon ausprobiert, um es zu lösen? |
| Würdest du dafür zahlen? | Gibst du heute Geld oder Zeit dafür aus? Wie viel? |

## Missbrauchs- und Sicherheitscheck

- Bei Landingpages / Umfragen werden **E-Mail-Adressen** gesammelt → Datenschutzhinweis und Einwilligung nötig (Phase 16 vorziehen, falls der Test vor dem Bau läuft).
- Keine echten sensiblen Daten in manuellen Tests sammeln, wenn es sich vermeiden lässt.

## Ergebnis-Dokument `02-validierung.md`

```markdown
# Validierung

## Annahmen
| # | Annahme | Schaden wenn falsch (h/m/n) | Unsicherheit (h/m/n) | Prüfen? |
|---|---|---|---|---|

## Riskanteste Annahme
…

## Testplan
- Methode: …
- Wer / wie viele: …
- Zeitraum: …
- Fragen / Ablauf: …

## Abbruch- bzw. Änderungskriterium
…

## Ergebnis (nach dem Test ausfüllen)
…

## Entscheidung nach dem Test
Weiter / Ändern (Pivot) / Pausieren / Stoppen – Begründung, Datum, `E-…`

## Was wir gelernt haben (besonders bei Stopp oder Pause)
…
```

## Definition of Done
- [ ] Riskanteste Annahme benannt
- [ ] Konkreter Testplan oder bewusste Entscheidung „ohne Test“ mit dokumentiertem Risiko
- [ ] Abbruchkriterium festgelegt
- [ ] Ausstiegspfad (Ändern / Pausieren / Stoppen) ist dem Nutzer erklärt; Aufhören ist ausdrücklich als legitime Option genannt

→ **Standard-Gate** (zusätzlicher Hinweis: Der Nutzer kann den Test durchführen und danach mit `zurück zu Phase 2` das Ergebnis eintragen.)
