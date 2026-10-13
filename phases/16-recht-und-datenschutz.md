# Phase 16 – Recht & Datenschutz

> Kurz: Was muss rechtlich erledigt sein, bevor andere Menschen die App nutzen?

| | |
|---|---|
| **Ziel** | Rechtliche Pflichten erkennen, Unterlagen vorbereiten, Datenschutz in die App einbauen |
| **Ergebnis** | `projekte/<slug>/16-recht.md` |
| **Visual** | Checkliste + Verzeichnis der Datenverarbeitung (Tabelle) |
| **Dauer** | ca. 20 Minuten |
| **Überspringen** | Lite-Modus: optional, aber **vor Veröffentlichung Pflicht**. „Nur für mich“: stark verkürzt |

> ⚠️ **Hinweis für Nutzer und KI:** Diese Phase ersetzt **keine Rechtsberatung**. Sie zeigt die üblichen Pflichten (Stand: Deutschland/EU) und bereitet Unterlagen vor. Bei Risikostufe 3, bei Geschäftstätigkeit oder bei Unsicherheit: Fachanwalt oder Datenschutzberatung hinzuziehen. Die KI erfindet keine Paragraphen – im Zweifel: „Bitte prüfen lassen.“

## Für Einsteiger erklärt

Sobald andere Menschen deine App nutzen und du dabei Daten wie E-Mail-Adressen oder IP-Adressen verarbeitest, gilt die **DSGVO**. Dazu kommen je nach App Pflichten wie ein **Impressum**, eine **Datenschutzerklärung** und eine **Einwilligung** für Cookies oder Tracking. Das klingt nach viel, lässt sich aber gut vorbereiten – und vieles wird einfacher, wenn man von Anfang an wenig Daten sammelt.

## Fragen

**Q1 – Wer betreibt die App?**
- a) Ich als Privatperson, nicht kommerziell
- b) Ich als Selbstständige(r) / Kleinunternehmen
- c) Ein Unternehmen / Verein / eine Organisation
- d) Im Auftrag eines Arbeitgebers oder einer Behörde

**Q2 – Ist die App kommerziell** (Verkauf, Abos, Werbung, Geschäftszweck) oder rein privat?

**Q3 – Willst du Analytics, Werbung oder Tracking einsetzen?**
- a) Nein **(am einfachsten)**
- b) Ja, datenschutzfreundlich ohne Cookies / ohne Einwilligungspflicht (Anbieter prüfen)
- c) Ja, z. B. Google Analytics, Meta-Pixel (→ Einwilligung zwingend)

**Q4 – Werden Daten in Länder außerhalb der EU übertragen?** (Aus Phase 13/15 ableiten und bestätigen.)

**Q5 – Nutzen Kinder unter 16 die App?** (Aus Phase 3.)

## Was die KI selbst ergänzen soll

Checkliste – nur zutreffende Punkte aufnehmen:

**Pflichtangaben & Texte**
- [ ] **Impressum** (Anbieterkennzeichnung nach § 5 DDG) bei geschäftsmäßigen Angeboten; in der App leicht erreichbar
- [ ] **Datenschutzerklärung**: wer, welche Daten, wozu, Rechtsgrundlage, Empfänger/Dienste, Drittlandtransfer, Speicherdauer, Rechte der Nutzer, Kontakt
- [ ] **AGB / Nutzungsbedingungen** bei kommerziellen Angeboten oder Nutzerinhalten
- [ ] **Widerrufsbelehrung** bei Verkäufen an Verbraucher
- [ ] **Barrierefreiheitserklärung** falls BFSG zutrifft (Phase 10)

**Einwilligungen**
- [ ] Cookie-/Tracking-Einwilligung nach § 25 TDDDG nur für **nicht notwendige** Speicherung/Zugriffe; „Ablehnen“ genauso leicht wie „Akzeptieren“
- [ ] Einwilligung für Newsletter / Marketing-E-Mails getrennt (Double-Opt-in)
- [ ] Bei Kindern unter 16: Einwilligung der Eltern, wo Einwilligung die Rechtsgrundlage ist
- [ ] Bei Gesundheits- und anderen Art.-9-Daten: in der Regel **ausdrückliche** Einwilligung, klar formuliert

**Betroffenenrechte – als Funktionen in der App**
- [ ] Auskunft / **Datenexport** (maschinenlesbar, z. B. JSON/CSV)
- [ ] Berichtigung (Profil bearbeiten)
- [ ] **Löschung** (Konto + alle Daten, inkl. Dateien und Backups nach Frist)
- [ ] Widerruf von Einwilligungen jederzeit

**Dienstleister**
- [ ] **Auftragsverarbeitungsverträge (AVV)** mit allen Diensten, die personenbezogene Daten in deinem Auftrag verarbeiten (Hosting, Datenbank, E-Mail, Analytics, KI-API) – meist im Kundenbereich des Anbieters abschließbar
- [ ] Drittlandtransfer (z. B. USA): Grundlage prüfen (z. B. Zertifizierung des Anbieters unter dem EU-US Data Privacy Framework, Standardvertragsklauseln)
- [ ] Schriftarten, Icons, Skripte **lokal einbinden** statt von fremden Servern (vermeidet ungewollte IP-Übertragung)

**Dokumentation**
- [ ] **Verzeichnis von Verarbeitungstätigkeiten** (Tabelle unten)
- [ ] Löschkonzept (Fristen aus Phase 11)
- [ ] Stufe 3: Prüfen, ob eine **Datenschutz-Folgenabschätzung (DSFA)** nötig ist (bei umfangreicher Verarbeitung sensibler Daten wahrscheinlich)
- [ ] Ablauf bei Datenpanne: Meldung an die Aufsichtsbehörde grundsätzlich **innerhalb von 72 Stunden** (Phase 20)

**Dienst- und Arbeitskontext (falls Q1 = d)**
- [ ] Nutzung dienstlicher Daten nur nach Freigabe durch die zuständige Stelle (IT, Datenschutzbeauftragte, ggf. Personalvertretung)

**Inhalte**
- [ ] Nutzerinhalte (Uploads, Kommentare): Meldeweg für rechtswidrige Inhalte, Moderationskonzept
- [ ] Bilder, Texte, Schriften, Icons: Lizenzen geprüft
- [ ] Gesundheits-, Finanz- oder Rechtsthemen: Haftungshinweis; bei Diagnose-/Therapie-Funktionen prüfen, ob die App ein **Medizinprodukt** sein könnte (dann gelten strenge Regeln – Fachberatung)

Die KI erstellt **Entwürfe** bzw. Gliederungen für Datenschutzerklärung und Impressum mit `[PRÜFEN]`-Markierungen. Für fertige Texte: Hinweis auf seriöse Generatoren oder Fachberatung.

## Missbrauchs- und Sicherheitscheck

- Datenschutzerklärung muss zur **tatsächlichen** Technik passen – nach Änderungen in Phase 13/15 erneut prüfen.
- Löschfunktion muss **wirklich** löschen (inkl. Dateien im Speicher), sonst Verstoß und Datenrisiko.
- Datenexport nur für den angemeldeten Nutzer selbst und mit erneuter Anmeldung (sonst Datenleck über Export).

## Ergebnis-Dokument `16-recht.md`

```markdown
# Recht & Datenschutz (keine Rechtsberatung)

## Einordnung
- Betreiber: …
- Kommerziell: …
- Risikostufe: …

## Checkliste
…

## Verzeichnis der Verarbeitungstätigkeiten (Entwurf)
| Verarbeitung | Daten | Betroffene | Zweck | Rechtsgrundlage [PRÜFEN] | Empfänger | Drittland | Löschfrist |
|---|---|---|---|---|---|---|---|

## Dienstleister & AVV
| Dienst | AVV abgeschlossen? | Drittland-Grundlage |
|---|---|---|

## Offene Punkte für Fachberatung
- …
```

## Definition of Done
- [ ] Zutreffende Pflichten identifiziert
- [ ] Betroffenenrechte als Funktionen eingeplant (Export, Löschung)
- [ ] Verarbeitungsverzeichnis-Entwurf
- [ ] AVV-Liste
- [ ] Offene Punkte für Fachberatung benannt

→ **Standard-Gate**
