# Phase 17 – Monetarisierung & Betriebskosten

> Kurz: Was kostet der Betrieb – und wie (oder ob) verdient die App Geld?

| | |
|---|---|
| **Ziel** | Preismodell (falls gewünscht), realistische laufende Kosten, harte Kostenlimits |
| **Ergebnis** | `projekte/<slug>/17-kosten.md` |
| **Visual** | Kostentabelle in drei Szenarien (10 / 1.000 / 10.000 Nutzer) |
| **Dauer** | ca. 15 Minuten |
| **Überspringen** | Lite-Modus; keine Zahlung → nur Kostenteil; „nur für mich“ → nur Q4 |

## Für Einsteiger erklärt

Auch eine kostenlose App kostet Geld: Server, Datenbank, E-Mail-Versand, Domain, ggf. KI-Abfragen und App-Store-Gebühren. Viele Dienste sind anfangs gratis – bis eine Grenze erreicht ist. Gefährlich sind **nutzungsabhängige Kosten** (KI, SMS, Karten): Ein Bot oder ein Programmierfehler kann über Nacht eine hohe Rechnung erzeugen. Deshalb planen wir Kosten **und** Obergrenzen.

## Fragen

**Q1 – Soll die App Geld verdienen?**
- a) Nein, kostenlos (Hobby, Lernen, Gemeinwohl)
- b) Ja, Kosten decken reicht
- c) Ja, Gewinn ist ein Ziel

**Q2 (falls b/c) – Welches Modell passt?**
- a) **Freemium**: Grundfunktionen gratis, Premium kostet **(häufigste Wahl)**
- b) Abo für alles (mit Testphase)
- c) Einmalkauf
- d) B2B: Organisationen zahlen (z. B. pro Team / Verein)
- e) Werbung (Achtung: Datenschutz, Nutzererlebnis, geringe Erlöse bei kleinen Nutzerzahlen)

**Q3 (falls b/c) – Was dürfte es kosten?** (Vergleich mit Phase 4; die KI fragt nach der Zahlungsbereitschaft aus Phase 2.)

**Q4 – Wie viel darf der Betrieb dich maximal pro Monat kosten?** (Harte Obergrenze.)

## Was die KI selbst ergänzen soll

- **Kostentabelle** pro Dienst aus Phase 13/15 mit drei Szenarien. Werte als **grobe Schätzung** kennzeichnen und dem Nutzer sagen, dass aktuelle Preise auf den Anbieterseiten zu prüfen sind. Keine erfundenen Preise – wenn unbekannt: „prüfen“.
- Feste Kosten nicht vergessen: Domain, Apple Developer Program (jährlich), Google Play (einmalig), ggf. Steuerberatung, Rechtstexte.
- **Schwellen** markieren, an denen ein Gratis-Kontingent endet.
- **Kostenlimits** festlegen:
  - Budget-Alarme beim Hosting-/Cloud-Anbieter (z. B. bei 50 % / 80 % / 100 %)
  - Harte Ausgabengrenzen bei KI-/SMS-APIs, wo der Anbieter das erlaubt
  - Limits pro Nutzer im Backend (Phase 14 E)
- Bei Freemium: Welche Funktionen sind Premium? Grenze so ziehen, dass Gratis-Nutzer echten Nutzen haben.
- Gebühren der Zahlungswege grob nennen (Prozentsatz prüfen) und in die Preisrechnung einbeziehen.
- Ehrliche Einschätzung, ob das Modell trägt (z. B. „Bei 2 € / Monat und geschätzten 3 % zahlenden Nutzern brauchst du X Nutzer, um die Kosten zu decken.“ – Rechnung offenlegen).

## Missbrauchs- und Sicherheitscheck

- **Denial of Wallet**: Kann ein Angreifer durch massenhafte Anfragen hohe Kosten erzeugen? → Limits + Budget-Alarm Pflicht.
- Premium-Status nur serverseitig prüfen (Phase 15).
- Gratis-Testphasen gegen Mehrfachnutzung absichern (z. B. an verifizierte E-Mail / Zahlungsmittel binden) – ohne unnötig Daten zu sammeln.

## Ergebnis-Dokument `17-kosten.md`

```markdown
# Monetarisierung & Kosten

## Modell
…

## Preise
…

## Laufende Kosten (Schätzung, Preise prüfen)
| Posten | 10 Nutzer | 1.000 Nutzer | 10.000 Nutzer | Gratis-Grenze |
|---|---|---|---|---|

## Feste Kosten
…

## Kostenlimits & Alarme
| Dienst | Alarm bei | Harte Grenze | Limit pro Nutzer |
|---|---|---|---|

## Wirtschaftlichkeit (Rechnung)
…
```

## Definition of Done
- [ ] Laufende Kosten in drei Szenarien geschätzt
- [ ] Monatliche Obergrenze festgelegt, Alarme geplant
- [ ] Preismodell entschieden (oder bewusst kostenlos)

→ **Standard-Gate**
