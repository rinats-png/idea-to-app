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

Bei **Apps in Stores** kommt etwas dazu, das viele Einsteiger übersehen: Stores verlangen für Entwicklerkonten Gebühren und behalten bei Verkäufen eine **Provision** (einen Prozentanteil vom Preis). Außerdem schreiben sie für **digitale Inhalte und Funktionen** (z. B. Premium-Zugang, Abos, Spielwährung) häufig vor, dass der Kauf über ihr eigenes Bezahlsystem laufen muss („In-App-Kauf“). Das beeinflusst Preis, Technik und Gewinn. Die Details mit Quellen stehen in `guides/appstore-veroeffentlichung.md` (Abschnitt 8); welche Plattform zu deiner Idee passt, in `guides/plattformen.md`.

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

**Q5 (nur falls Q1 = b/c und die App in einem Store, bei einer Spieleplattform oder als Erweiterung angeboten wird; siehe Phase 13, Q7) – Wo sollen Nutzer bezahlen?**
- a) Über den Kaufweg des Stores (In-App-Kauf) **(Empfehlung bei digitalen Inhalten in Handy-Apps, weil die Store-Regeln das meist verlangen `[PRÜFEN]`)**
- b) Über einen eigenen Zahlungsanbieter auf meiner Webseite (außerhalb der App)
- c) Beides (je nach Plattform)
- d) Weiß ich nicht – schlag du etwas vor

**Q6 (nur falls Q5 gestellt wurde) – Was genau wird verkauft?**
- a) Digitale Inhalte oder Funktionen, die in der App genutzt werden (Premium, Abo, Spielwährung)
- b) Physische Waren oder Dienstleistungen, die außerhalb der App erbracht werden
- c) Beides
- d) Weiß ich nicht – schlag du etwas vor

**Q7 (nur falls Q5 gestellt wurde) – Wer tritt als Anbieter auf?**
- a) Ich als Privatperson
- b) Ein Unternehmen, Verein oder eine andere Organisation
- c) Weiß ich nicht – schlag du etwas vor

> Hinweis zu Q7: Die Anbieterform beeinflusst Entwicklerkonto, Nachweise, Steuern und Haftung (Phase 16). Die KI sagt offen, dass das keine Rechts- oder Steuerberatung ist.

## Was die KI selbst ergänzen soll

- **Kostentabelle** pro Dienst aus Phase 13/15 mit drei Szenarien. Jeder Preis mit `[Q-…]` (Anbieterseite, Prüfdatum) oder als Schätzung/Annahme gekennzeichnet. Keine erfundenen Preise – wenn unbekannt: „prüfen“.
- Feste Kosten nicht vergessen: Domain, Apple Developer Program (jährlich), Google Play (einmalig), ggf. Steuerberatung, Rechtstexte.
- **Store-Gebühren und Provisionen** (falls zutreffend; Übersicht und Quellen: `guides/appstore-veroeffentlichung.md`, Abschnitt 8). Trage jeden Betrag mit `[Q-…]` in `QUELLEN.md` ein oder markiere ihn mit `[PRÜFEN]`; Preise und Programme ändern sich:
  - **Entwicklerkonten:** Apple Developer Program 99 USD pro Mitgliedsjahr (Quelle: https://developer.apple.com/support/compare-memberships/, geprüft 2026-10-14); Google Play einmalig 25 USD, keine Prepaid-Karten (Quelle: https://support.google.com/googleplay/android-developer/answer/6112435, geprüft 2026-10-14); Microsoft Store laut aktuellem Anmeldeweg keine Registrierungsgebühr (Quelle: https://learn.microsoft.com/en-us/windows/apps/publish/partner-center/open-a-developer-account, geprüft 2026-10-14); Chrome Web Store einmalige Registrierungsgebühr, Betrag `[PRÜFEN]` (Quelle: https://developer.chrome.com/docs/webstore/register); Steam Gebühr pro Produkt (Quelle: https://partner.steamgames.com/doc/gettingstarted/onboarding, geprüft 2026-10-14).
  - **Provisionen (Anteil vom Preis):** Apple nannte bei Einführung seines Kleinunternehmer-Programms 30 % Standard und 15 % bei bis zu 1 Mio. USD Vorjahresumsatz (Quelle: https://www.businesswire.com/news/home/20201118005376/en/Apple-Announces-App-Store-Small-Business-Program, 2020, historisch) und bestätigt 15 % für bezahlte Apps und In-App-Käufe im Programm (Quelle: https://developer.apple.com/app-store/small-business-program/, geprüft 2026-10-14); aktuelle Sätze, regionale Abweichungen und Sonderprogramme `[PRÜFEN]`. Google Play: gestaffelte Servicegebühren je Region, teils zuzüglich Abrechnungsgebühr (Quelle: https://support.google.com/googleplay/android-developer/answer/112622, geprüft 2026-10-14); die Seite ist mehrdeutig, daher Satz für dein Land und dein Programm `[PRÜFEN]`. Microsoft und Steam: Satz `[PRÜFEN]`.
  - **Rechenregel für die Preisrechnung:** Nach der Provision bleibt vom Preis (netto, ohne Steuer) nur ein Teil; rechne konservativ mit dem Standard-Satz, bis du das Programm bestätigt hast.
- **In-App-Kauf-Pflichten** (Quellen: Apple App Review Guidelines 3.1.1, https://developer.apple.com/app-store/review/guidelines/, geprüft 2026-10-14; Google Play Gebührenseite, s. o.): Digitale Inhalte und Funktionen müssen bei Apple über den In-App-Kauf angeboten werden, eigene Mechanismen wie Lizenzschlüssel sind nicht erlaubt; Zufallskäufe müssen Chancen vorab offenlegen; gekaufte Guthaben dürfen nicht verfallen. Ausnahmen und regionale Sonderregeln (z. B. Links zu externen Kaufwegen) `[PRÜFEN]`. Folgen: Preis im Store festlegen, Server prüft den Beleg (Regel 8.1, 8.2 in `security/regeln-fuer-ki.md`), Wiederherstellungsfunktion für Käufe, Kauf-Prozess in Phase 15 abstimmen.
- **Alternative Wege ohne Store** (Web-App/PWA mit eigenem Zahlungsanbieter) sparen Store-Provisionen, dafür fehlen Auffindbarkeit und Store-Bezahlkomfort; stelle beide Wege nebeneinander (Tabelle im Ergebnis-Dokument).
- **Steuern:** Umsatzsteuer und Händlerpflichten sind in den Preisen nicht enthalten; Fachberatung `[PRÜFEN]` (Phase 16, `guides/recht-eu-ueberblick.md`).
- **Kosten für Auffindbarkeit und Start:** ggf. Werbebudget, Webseite, Pressekit (`guides/launch-und-auffindbarkeit.md`). Keine erfundenen Erfolgsraten; Rechne mit Szenarien statt Prognosen.
- **Pflegekosten nach dem Start:** Signierzertifikate, Jahresgebühren, Support-Zeit (`templates/support-playbook.md`, `phases/24-iteration-und-wartung.md`).
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
- **Käufe in Store-Apps:** Die Freischaltung erfolgt nur nach serverseitiger Prüfung des Kaufbelegs; der Client meldet nicht „gekauft“ (Regeln 8.1, 8.2). Preise und Produkte bestimmt der Server bzw. der Store, nie die App.
- **Gebühren- und Provisionsangaben ohne Beleg** sind eine Fehlerquelle für die Preisrechnung: Immer Quelle oder `[PRÜFEN]`.
- Gratis-Testphasen gegen Mehrfachnutzung absichern (z. B. an verifizierte E-Mail / Zahlungsmittel binden) – ohne unnötig Daten zu sammeln.

## Ergebnis-Dokument `17-kosten.md`

```markdown
# Monetarisierung & Kosten

## Modell
…

## Preise
…

## Verkaufsweg und Store-Gebühren (falls zutreffend)
| Plattform / Weg | Konto-Gebühr (mit [Q-…]/[PRÜFEN]) | Provision (mit [Q-…]/[PRÜFEN]) | In-App-Kauf-Pflicht? | Zahlungsanbieter-Gebühr | Nettoerlös pro Verkauf |
|---|---|---|---|---|---|

Verweis: `guides/appstore-veroeffentlichung.md`, Abschnitt 8

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
- [ ] Falls Store, Spieleplattform oder Erweiterung: Konto-Gebühren, Provisionen und In-App-Kauf-Pflichten mit Quelle (`[Q-…]`) oder `[PRÜFEN]` erfasst; Preise netto nach Provision gerechnet
- [ ] Verkaufsweg (Store-Kauf, eigener Zahlungsanbieter oder beides) entschieden und Folgen für Phase 15 vermerkt

→ **Standard-Gate**
