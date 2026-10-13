# Phase 10 – Barrierefreiheit & Sprachen

> Kurz: Die App soll für möglichst viele Menschen nutzbar sein – und ggf. mehrsprachig.

| | |
|---|---|
| **Ziel** | Barrierefreiheits-Anforderungen und Sprachkonzept festlegen |
| **Ergebnis** | `projekte/<slug>/10-barrierefreiheit.md` |
| **Visual** | Checkliste |
| **Dauer** | ca. 10 Minuten |
| **Überspringen** | Lite-Modus; „nur für mich“ → nur Q3 |

## Für Einsteiger erklärt

**Barrierefreiheit** heißt: Auch Menschen mit Seh-, Hör-, motorischen oder kognitiven Einschränkungen können die App bedienen – z. B. mit einem Screenreader (Vorlese-Programm) oder nur mit der Tastatur. Davon profitieren alle: größere Schrift im Sonnenlicht, Bedienung mit einer Hand. In Deutschland gilt seit dem 28.06.2025 das **Barrierefreiheitsstärkungsgesetz (BFSG)** für bestimmte digitale Produkte und Dienstleistungen (u. a. Online-Shops, Bankdienste, E-Books, Personenbeförderung). Ob es für deine App gilt, hängt vom Angebot und von der Unternehmensgröße ab – das klären wir grob, ersetzt aber keine Rechtsberatung.

## Fragen

**Q1 – Bietest du mit der App eine Dienstleistung für Verbraucher an** (z. B. Verkauf, Buchung, Bezahlung, Bankfunktionen)?
- a) Ja
- b) Nein, kostenlos / privat / nur für Unternehmen
- c) Weiß nicht

**Q2 – Wie groß ist das Unternehmen dahinter?**
- a) Privatperson / kein Unternehmen
- b) Kleinstunternehmen (weniger als 10 Beschäftigte **und** höchstens 2 Mio. € Jahresumsatz oder Bilanzsumme)
- c) Größer

> Hinweis für die KI: Kleinstunternehmen, die **Dienstleistungen** erbringen, sind vom BFSG ausgenommen. Bei Unsicherheit: Hinweis auf Prüfung durch Fachperson; Barrierefreiheit trotzdem empfehlen.

**Q3 – In welchen Sprachen soll die App verfügbar sein?**
- a) Nur Deutsch
- b) Deutsch + Englisch
- c) Weitere: …
- d) Jetzt nur Deutsch, aber später erweiterbar **(Empfehlung – kostet jetzt kaum Aufwand, spart später viel)**

**Q4 – Gibt es in deiner Zielgruppe Menschen mit besonderen Bedürfnissen** (aus Phase 3 übernehmen und bestätigen)?

## Was die KI selbst ergänzen soll

Eine **Basis-Checkliste** (orientiert an WCAG 2.2 Stufe AA), die immer gilt:
- [ ] Kontraste geprüft (Phase 9)
- [ ] Alle Bedienelemente per Tastatur erreichbar, sichtbarer Fokus
- [ ] Bilder und Icons mit Textalternative
- [ ] Formularfelder mit sichtbaren Beschriftungen (nicht nur Platzhalter)
- [ ] Fehlermeldungen als Text, nicht nur farbig
- [ ] Tippflächen mind. 44×44 px
- [ ] Schrift auf 200 % vergrößerbar ohne Funktionsverlust
- [ ] Keine Zeitlimits ohne Verlängerungsmöglichkeit
- [ ] Bewegungen/Animationen respektieren „Bewegung reduzieren“
- [ ] Sinnvolle Überschriften-Hierarchie, Seitentitel, Sprache im HTML gesetzt
- [ ] Einfache Sprache bei wichtigen Hinweisen

Sprachkonzept:
- Texte von Anfang an in **Sprachdateien** statt fest im Code (i18n), auch wenn es zunächst nur Deutsch gibt.
- Datums-, Zahlen- und Währungsformate über die Spracheinstellung.

Bei BFSG-Pflicht zusätzlich: Barrierefreiheitserklärung einplanen (Phase 16/23).

## Missbrauchs- und Sicherheitscheck

- CAPTCHAs (Phase 14) müssen eine **barrierefreie Alternative** haben – rein visuelle Bilderrätsel schließen Menschen aus.
- Sprachdateien dürfen keine Nutzereingaben ungefiltert als HTML einsetzen (XSS-Gefahr, Phase 14).

## Ergebnis-Dokument `10-barrierefreiheit.md`

```markdown
# Barrierefreiheit & Sprachen

## Rechtliche Einordnung (keine Rechtsberatung)
- BFSG relevant: ja / nein / prüfen – Begründung: …

## Ziel-Standard
WCAG 2.2 AA (Basis)

## Checkliste
…

## Sprachen
- Start: …
- Später: …
- i18n von Anfang an: ja
```

## Definition of Done
- [ ] BFSG-Relevanz grob eingeordnet
- [ ] Basis-Checkliste übernommen
- [ ] Sprachkonzept festgelegt

→ **Standard-Gate**
