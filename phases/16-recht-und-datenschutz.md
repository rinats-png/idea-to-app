# Phase 16 – Recht & Datenschutz

> Kurz: Was muss rechtlich erledigt sein, bevor andere Menschen die App nutzen?

| | |
|---|---|
| **Ziel** | Rechtliche Pflichten erkennen, Unterlagen vorbereiten, Datenschutz in die App einbauen |
| **Ergebnis** | `projekte/<slug>/16-recht.md` |
| **Visual** | Checkliste + Verzeichnis der Datenverarbeitung (Tabelle) |
| **Dauer** | ca. 30 Minuten (mit KI-Funktionen, Nutzerinhalten oder Risikostufe 3 eher 45) |
| **Überspringen** | Lite-Modus: optional, aber **vor Veröffentlichung Pflicht**. „Nur für mich“: stark verkürzt |
| **Hilfen** | Überblick: `guides/recht-eu-ueberblick.md` · Vorlagen: `templates/datenschutzerklaerung-geruest.md`, `templates/verarbeitungsverzeichnis.md`, `templates/loeschkonzept.md`, `templates/auftragsverarbeiter-liste.md`, `templates/dsfa-vorlage.md` · Notfall: `templates/incident-plan.md` |

> ⚠️ **Hinweis für Nutzer und KI:** Diese Phase ersetzt **keine Rechtsberatung**. Sie zeigt die üblichen Pflichten (Stand: Deutschland/EU) und bereitet Unterlagen vor. Bei Risikostufe 3, bei Geschäftstätigkeit oder bei Unsicherheit: Fachanwalt oder Datenschutzberatung hinzuziehen. Die KI erfindet keine Paragraphen – im Zweifel: „Bitte prüfen lassen.“

## Für Einsteiger erklärt

Sobald andere Menschen deine App nutzen und du dabei Daten wie E-Mail-Adressen oder IP-Adressen verarbeitest, gilt die **DSGVO**. Dazu kommen je nach App Pflichten wie ein **Impressum**, eine **Datenschutzerklärung** und eine **Einwilligung** für Cookies oder Tracking. Das klingt nach viel, lässt sich aber gut vorbereiten – und vieles wird einfacher, wenn man von Anfang an wenig Daten sammelt.

Zwei Themen sind in den letzten Jahren dazugekommen und betreffen viele neue Apps:

- **KI-Funktionen:** Sobald deine App einen Chatbot oder KI-erzeugte Inhalte enthält, gilt die **EU-KI-Verordnung** (englisch „AI Act“). Sie verlangt vor allem **Transparenz**: Nutzer müssen erkennen können, dass sie mit KI zu tun haben. Für riskantere Einsatzgebiete (z. B. Bewerbungen, Kredit, Behörden) gelten deutlich strengere Regeln.
- **Nutzerinhalte:** Wenn Nutzer Beiträge, Fotos oder Kommentare einstellen, die andere sehen können, brauchst du einen **Meldeweg** für rechtswidrige Inhalte und klare Regeln. Das schreibt der **Digital Services Act** (DSA) vor – für kleine Anbieter in abgespeckter Form.

Der Überblick in `guides/recht-eu-ueberblick.md` erklärt beides in einfachen Worten, mit Entscheidungstabellen und aktuellen Fristen. Lies ihn, wenn dir die Fragen unten fremd vorkommen.

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

*Die folgenden Fragen ergänzen die Phase um KI-Funktionen, Nutzerinhalte und weitere Pflichten. Q7–Q10 entfallen, wenn Q6 mit a) beantwortet wurde. Q12–Q14 entfallen, wenn Q11 mit a) beantwortet wurde.*

**Q6 – Hat die App KI-Funktionen?** (Chat-Assistent, Textgenerierung, Bild-/Audio-Erzeugung, Empfehlungen, automatische Auswertung von Nutzerdaten – auch über eine fremde KI-Schnittstelle wie eine API. Aus Phase 5/13/15 ableiten und bestätigen.)
- a) Nein **(am einfachsten; kein Pflichtprogramm aus der KI-Verordnung)**
- b) Ja – ein Chatbot oder Assistent, mit dem Nutzer sprechen oder schreiben
- c) Ja – die App erzeugt Texte, Bilder, Audio oder Video
- d) Ja – die KI bewertet, sortiert oder entscheidet etwas über Menschen
- e) Weiß ich nicht – schlag du etwas vor

**Q7 – Wie sollen Nutzer erfahren, dass sie mit KI zu tun haben?**
- a) Deutlicher Hinweis direkt im Chat bzw. an jedem KI-erzeugten Inhalt, zusätzlich in der Datenschutzerklärung **(Empfehlung – das verlangt die KI-Verordnung ab 2. August 2026 im Kern, Art. 50)**
- b) Nur in den Nutzungsbedingungen oder der Datenschutzerklärung (reicht in der Regel nicht)
- c) Gar nicht, weil es offensichtlich ist (nur zulässig, wenn es wirklich offensichtlich ist)
- d) Weiß ich nicht – schlag du etwas vor

**Q8 – Berührt die KI-Funktion eines dieser sensiblen Einsatzgebiete?** (Bildung und Prüfungen, Personalauswahl, Kreditwürdigkeit oder Zugang zu wichtigen Leistungen, Behörden und Strafverfolgung, Justiz, Migration, kritische Infrastruktur, medizinische Zwecke, biometrische Erkennung, Emotionserkennung)
- a) Nein, keines davon **(sicherste Variante)**
- b) Ja, eines davon – welches?
- c) Weiß ich nicht – schlag du etwas vor

*Bei b) oder c): Die KI markiert das als mögliches **Hochrisiko-System** (`[PRÜFEN]`), erklärt dem Nutzer ehrlich, dass dafür strenge Pflichten gelten, und empfiehlt eine Fachperson, bevor weitergebaut wird. Bei Behörden-, Sicherheits- oder Strafverfolgungsbezug ist das ohnehin Risikostufe 3.*

**Q9 – Welche Daten gehen an den KI-Anbieter?**
- a) Nur das Nötigste, ohne personenbezogene Daten (Eingaben werden vorher bereinigt) **(Empfehlung)**
- b) Personenbezogene Daten der Nutzer – welche?
- c) Besonders schützenswerte Daten (z. B. Gesundheit) – welche?
- d) Weiß ich nicht – schlag du etwas vor

**Q10 – Darf der KI-Anbieter die Daten zum Training seiner Modelle verwenden?**
- a) Nein, ausgeschlossen (vertraglich bzw. per Einstellung) **(Empfehlung)**
- b) Ja, mit ausdrücklicher Einwilligung der Nutzer
- c) Weiß ich nicht – schlag du etwas vor (die KI prüft die Anbieterbedingungen und markiert sie `[PRÜFEN]`)

**Q11 – Können Nutzer Inhalte einstellen, die andere sehen?** (Kommentare, Beiträge, Fotos, Profile, Bewertungen, Gruppen, Chats mit anderen)
- a) Nein, jeder sieht nur die eigenen Inhalte **(am einfachsten)**
- b) Ja, aber nur in kleinen, geschlossenen Gruppen
- c) Ja, öffentlich oder für alle Nutzer sichtbar
- d) Weiß ich nicht – schlag du etwas vor

**Q12 – Wer prüft gemeldete Inhalte und moderiert?**
- a) Ich selbst
- b) Ein kleines Team (wer?)
- c) Ein Dienstleister
- d) Weiß ich nicht – schlag du etwas vor

**Q13 – Wie sollen Nutzer rechtswidrige Inhalte melden?**
- a) Ein „Melden“-Knopf an jedem Inhalt, mit Begründungsfeld, plus E-Mail-Kontakt **(Empfehlung)**
- b) Nur per E-Mail an eine Kontaktadresse
- c) Weiß ich nicht – schlag du etwas vor

**Q14 – Wie soll mit einer Meldung umgegangen werden?**
- a) Eingang bestätigen, in angemessener Zeit prüfen, Entscheidung begründen und dem betroffenen Nutzer mitteilen, Vorgang protokollieren **(Empfehlung)**
- b) Nur prüfen und bei Bedarf löschen, ohne Rückmeldung (rechtlich riskant)
- c) Weiß ich nicht – schlag du etwas vor

**Q15 – Wie sollen Nutzer Datenschutzanfragen stellen** (Auskunft, Löschung, Export, Widerruf)?
- a) Als Funktionen in der App (Export, Konto löschen) **plus** E-Mail-Kontakt für alles andere **(Empfehlung)**
- b) Nur per E-Mail
- c) Weiß ich nicht – schlag du etwas vor

**Q16 – Verkaufst du etwas an Verbraucher** (Privatpersonen, z. B. Abo, einmaliger Kauf, digitale Inhalte)?
- a) Nein, keine Zahlungen
- b) Ja, an Verbraucher (B2C)
- c) Nur an Unternehmen (B2B)
- d) Weiß ich nicht – schlag du etwas vor

*Bei b) markiert die KI die Verbraucherrechte (Widerruf, Preisangaben, Kündigung) als Hinweis im Ergebnis-Dokument und verweist auf `guides/recht-eu-ueberblick.md` (Abschnitt 9) und Phase 15/17.*

**Q17 – (Nur bei Risikostufe 3 oder sensiblen Daten) Sollen wir die Schwellwertprüfung für eine Datenschutz-Folgenabschätzung (DSFA) jetzt gleich durchgehen?**
- a) Ja, jetzt, mit der Vorlage `templates/dsfa-vorlage.md` **(Empfehlung)**
- b) Später, vor dem Launch (Phase 23) – dann trage ich es als offenen Punkt ein
- c) Weiß ich nicht – schlag du etwas vor

## Was die KI selbst ergänzen soll

Checkliste – nur zutreffende Punkte aufnehmen:

**Pflichtangaben & Texte**
- [ ] **Impressum** (Anbieterkennzeichnung nach § 5 DDG) bei geschäftsmäßigen Angeboten; in der App leicht erreichbar
- [ ] **Datenschutzerklärung**: wer, welche Daten, wozu, Rechtsgrundlage, Empfänger/Dienste, Drittlandtransfer, Speicherdauer, Rechte der Nutzer, Kontakt – Ausgangspunkt: `templates/datenschutzerklaerung-geruest.md`
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
- [ ] Ablauf für Anfragen, die nicht über die App kommen (E-Mail): Identität prüfen, Antwort innerhalb der gesetzlichen Frist (derzeit ein Monat, Art. 12 Abs. 3 DSGVO, `[PRÜFEN]`), Vorgang dokumentieren

**Dienstleister**
- [ ] **Auftragsverarbeitungsverträge (AVV)** mit allen Diensten, die personenbezogene Daten in deinem Auftrag verarbeiten (Hosting, Datenbank, E-Mail, Analytics, KI-API) – meist im Kundenbereich des Anbieters abschließbar
- [ ] Drittlandtransfer (z. B. USA): Grundlage prüfen (z. B. Zertifizierung des Anbieters unter dem EU-US Data Privacy Framework, Standardvertragsklauseln)
- [ ] Schriftarten, Icons, Skripte **lokal einbinden** statt von fremden Servern (vermeidet ungewollte IP-Übertragung)
- [ ] Alle Dienstleister in `templates/auftragsverarbeiter-liste.md` erfassen (Anbieter, Zweck, Datenkategorien, Standort/Drittland, AVV-Datum, Prüfdatum, Alternative)

**Dokumentation**
- [ ] **Verzeichnis von Verarbeitungstätigkeiten** (Tabelle unten; ausführliche Vorlage: `templates/verarbeitungsverzeichnis.md`)
- [ ] Löschkonzept (Fristen aus Phase 11; Vorlage: `templates/loeschkonzept.md`) mit Kontolöschung, Backup-Umgang und Nachweis
- [ ] Stufe 3: Prüfen, ob eine **Datenschutz-Folgenabschätzung (DSFA)** nötig ist (bei umfangreicher Verarbeitung sensibler Daten wahrscheinlich) – **Schwellwertprüfung** nach `templates/dsfa-vorlage.md` (Teil A); bei „erforderlich“ Teil B bis vor dem Launch
- [ ] Ablauf bei Datenpanne: Meldung an die Aufsichtsbehörde grundsätzlich **innerhalb von 72 Stunden** (Phase 20); Benachrichtigung der Betroffenen bei hohem Risiko unverzüglich; jede Panne intern dokumentieren – Ablauf in `templates/incident-plan.md`
- [ ] Pflicht zur Benennung einer/eines **Datenschutzbeauftragten** prüfen (§ 38 BDSG, `[PRÜFEN]`)

**Dienst- und Arbeitskontext (falls Q1 = d)**
- [ ] Nutzung dienstlicher Daten nur nach Freigabe durch die zuständige Stelle (IT, Datenschutzbeauftragte, ggf. Personalvertretung)

**Inhalte**
- [ ] Nutzerinhalte (Uploads, Kommentare): Meldeweg für rechtswidrige Inhalte, Moderationskonzept
- [ ] Bilder, Texte, Schriften, Icons: Lizenzen geprüft
- [ ] Gesundheits-, Finanz- oder Rechtsthemen: Haftungshinweis; bei Diagnose-/Therapie-Funktionen prüfen, ob die App ein **Medizinprodukt** sein könnte (dann gelten strenge Regeln – Fachberatung)

**KI-Funktionen und EU-KI-Verordnung (nur falls Q6 ≠ a)**
- [ ] **KI-Inventur:** Jede KI-Funktion mit Anbieter, Modell, gesendeten Daten und Rolle (Anbieter oder Betreiber im Sinne der KI-Verordnung, `[PRÜFEN]`) in das Ergebnis-Dokument
- [ ] **Risikoklasse** einordnen (verboten / hohes Risiko / Transparenzpflicht / minimal) anhand von Q8 und `guides/recht-eu-ueberblick.md` (Abschnitt 1). Bei verbotenen Praktiken: Funktion streichen. Bei Verdacht auf Hochrisiko: Fachperson, bevor weitergebaut wird
- [ ] **Transparenz (Art. 50):** Hinweis „Du sprichst mit einer KI“ im Chat; Kennzeichnung KI-erzeugter Inhalte (sichtbar und, soweit möglich, maschinenlesbar); Hinweis bei Deepfakes. Q7 in die Screens (Phase 7/8) zurückgeben
- [ ] **Aktuelle Fristen prüfen und belegen:** Der Zeitplan der KI-Verordnung hat sich durch das „Digital Omnibus“-Paket verschoben (Stand 2026-10-14: Hochrisiko-Pflichten nach Anhang III ab 2. Dezember 2027, Anhang I ab 2. August 2028; Transparenzpflichten nach Art. 50 seit 2. August 2026, Übergangsfrist für die Kennzeichnung von Altsystemen bis 2. Dezember 2026). Die KI übernimmt die Angaben aus dem Guide **nur mit Q-ID** und trägt ein „Neu prüfen bis“ vor dem Launch ein
- [ ] **Menschliche Kontrolle** bei Entscheidungen mit Wirkung auf Menschen; Rechte nach Art. 22 DSGVO (keine ausschließlich automatisierte Entscheidung mit erheblicher Wirkung ohne Ausnahme) beachten
- [ ] **KI-Kompetenz:** Wer die App betreibt, versteht Möglichkeiten und Grenzen der KI (Art. 4 KI-VO, aktueller Wortlaut `[PRÜFEN]`); kurz im Ergebnis-Dokument festhalten
- [ ] **Datenfluss zum KI-Anbieter** (Q9, Q10): nur nötige Daten, AVV, Drittlandgrundlage, Training ausgeschlossen oder bewusst entschieden; Abschnitt „KI-Funktionen“ im Gerüst der Datenschutzerklärung
- [ ] Verweis auf Sicherheitsmaßnahmen für KI-Funktionen in Phase 14 (z. B. Schutz vor Prompt-Injection, Kostenlimits)

**Nutzerinhalte, Moderation und Meldeverfahren (nur falls Q11 ≠ a)**
- [ ] **Einordnung nach DSA** (`guides/recht-eu-ueberblick.md`, Abschnitt 2): Hostingdienst; zusätzliche Plattformpflichten gelten für Kleinst- und Kleinunternehmen nicht (`[PRÜFEN]`)
- [ ] **Kontaktstelle** für Nutzer und Behörden (zusätzlich zum Impressum)
- [ ] **Nutzungsbedingungen mit Inhaltsregeln:** Was ist erlaubt, wie wird moderiert, wie können Nutzer Entscheidungen anfechten; Rechteeinräumung für Nutzerinhalte
- [ ] **Meldeverfahren** (Q13): leicht auffindbar, begründbare Meldung, Eingangsbestätigung, begründete Entscheidung (Q14), Protokoll
- [ ] **Moderationsrolle** und Werkzeuge (Q12): wer darf Inhalte ausblenden, löschen, Konten sperren? Aufnahme in Phase 12; Aktionen im Audit-Log
- [ ] Meldungen und Moderationsentscheidungen als eigene Verarbeitung im Verarbeitungsverzeichnis und im Löschkonzept
- [ ] Sonderfall: Hinweise auf schwere Straftaten mit Gefahr für Leib oder Leben haben besondere Meldepflichten (`[PRÜFEN]`) – im Notfallplan (Phase 20) berücksichtigen

**Verbraucher- und Jugendschutz (nur falls zutreffend)**
- [ ] Bei Verkauf an Verbraucher (Q16 = b): Widerrufsrecht, Widerrufsfunktion („Widerrufsbutton“, nach Berichten seit 19. Juni 2026), Bestell- und Kündigungsbutton, Preisangaben – nur als **Hinweis** mit Fachberatung (`guides/recht-eu-ueberblick.md`, Abschnitt 9)
- [ ] Bei Kindern oder Jugendlichen (Q5): Jugendmedienschutz prüfen (Abschnitt 8 des Guides), Altersangaben im Store (`guides/appstore-veroeffentlichung.md`)
- [ ] Bei installierbaren Apps im gewerblichen Kontext: Pflichten zu Sicherheitsvorfällen und Schwachstellen prüfen lassen (Cyber Resilience Act, `guides/recht-eu-ueberblick.md` Abschnitt 10, `[PRÜFEN]`)

Die KI erstellt **Entwürfe** bzw. Gliederungen für Datenschutzerklärung und Impressum mit `[PRÜFEN]`-Markierungen – ausgehend von `templates/datenschutzerklaerung-geruest.md`, **abgeglichen mit dem tatsächlichen Datenfluss** aus Phase 11, 13 und 15. Für fertige Texte: Hinweis auf seriöse Generatoren oder Fachberatung.

Rechtliche Aussagen (Paragraphen, Fristen, Pflichten) kommen mit Quelle in `QUELLEN.md` (Art: Primärquelle = Gesetzestext bzw. Behördenseite) oder ausdrücklich als „[PRÜFEN] – nicht verifiziert“. Jede Aussage im Ergebnis-Dokument trägt einen Verweis `[Q-…]` (Vorlage `templates/QUELLEN.md`, Regeln: `AGENTS.md` Abschnitt 12). Schnell veränderliche Angaben (Fristen der KI-Verordnung, Reformen von DSGVO und Cookie-Recht, Stand des EU-US-Datenschutzrahmens) bekommen ein kurzes „Neu prüfen bis“ – spätestens zum Launch (Phase 23). Die Quellenliste des Guides `guides/recht-eu-ueberblick.md` ist ein Startpunkt, **ersetzt aber nicht** die Prüfung zum jetzigen Zeitpunkt: Kann die KI Websuche nutzen, prüft sie die Angaben neu; sonst gelten sie als **Annahme** und der Nutzer erhält die Liste dessen, was er prüfen soll.

## Missbrauchs- und Sicherheitscheck

- Datenschutzerklärung muss zur **tatsächlichen** Technik passen – nach Änderungen in Phase 13/15 erneut prüfen.
- Löschfunktion muss **wirklich** löschen (inkl. Dateien im Speicher), sonst Verstoß und Datenrisiko.
- Datenexport nur für den angemeldeten Nutzer selbst und mit erneuter Anmeldung (sonst Datenleck über Export).
- **KI-Funktionen:** Gehen durch die KI-Schnittstelle mehr Daten hinaus als nötig (z. B. ganze Datensätze statt der einen Frage)? Können Nutzer die KI durch Eingaben zu Aussagen oder Datenabfluss bewegen (Prompt-Injection, Phase 14)? Verursachen automatisierte Aufrufe unbegrenzt Kosten (Kostenlimits, `security/standardwerte.md`)? Kann die KI-Ausgabe schädliche Inhalte erzeugen, die du dann als Betreiber auslieferst?
- **Melde- und Moderationsfunktionen sind selbst ein Angriffsziel:** Massenhaft falsche Meldungen zum Mundtotmachen anderer Nutzer? Wer darf Inhalte sperren oder löschen (Rollen, Audit-Log, Phase 12)? Sieht der Melder oder der Moderator mehr Daten als nötig (z. B. Kontaktdaten des Gemeldeten)?
- Meldungen und Moderationsprotokolle enthalten selbst personenbezogene Daten – Zugriff begrenzen, Löschfristen festlegen (Löschkonzept).
- Auskunfts-, Export- und Löschanfragen per E-Mail können **Identitätsdiebstahl** sein: Identität prüfen, bevor Daten herausgegeben oder gelöscht werden.
- Auftragsverarbeiter-Liste und Datenschutzerklärung dürfen keine Zugangsdaten oder Schlüssel enthalten; Zugänge der Dienstleister mit 2FA absichern (Phase 20).
- Nicht belegte rechtliche Aussagen bleiben als `[PRÜFEN]` sichtbar – sie dürfen nicht stillschweigend zu „geprüft“ werden (`AGENTS.md` Abschnitt 2).

## Ergebnis-Dokument `16-recht.md`

```markdown
# Recht & Datenschutz (keine Rechtsberatung)

## Einordnung
- Betreiber: …
- Kommerziell: …
- Risikostufe: …
- Zielgruppe / Kinder: …
- Verbraucherverkauf (B2C): …

## Checkliste
…

## Verzeichnis der Verarbeitungstätigkeiten (Entwurf)
| Verarbeitung | Daten | Betroffene | Zweck | Rechtsgrundlage [PRÜFEN] | Empfänger | Drittland | Löschfrist |
|---|---|---|---|---|---|---|---|

(Ausführliche Fassung: Datei `verarbeitungsverzeichnis.md` im Projektordner, Vorlage `templates/verarbeitungsverzeichnis.md`.)

## Dienstleister & AVV
| Dienst | AVV abgeschlossen? | Drittland-Grundlage |
|---|---|---|

(Ausführliche Fassung: `auftragsverarbeiter-liste.md` im Projektordner mit Anbieter, Zweck, Datenkategorien, Standort, AVV-Datum, Prüfdatum und Alternative. Vorlage `templates/auftragsverarbeiter-liste.md`.)

## Löschkonzept (Kurzfassung)
| Datenart | Speicherdauer | Löschauslöser | Backup-Umgang |
|---|---|---|---|

(Ausführliche Fassung: `loeschkonzept.md` im Projektordner, Vorlage `templates/loeschkonzept.md`. Enthält die Kontolöschung und den Nachweis.)

## Datenschutzerklärung & Impressum (Entwurf)
- Datei(en): `datenschutzerklaerung.md`, `impressum.md` (aus Vorlage `templates/datenschutzerklaerung-geruest.md`)
- Abgleich mit Datenfluss durchgeführt am: … (Abweichungen: …)

## KI-Funktionen (nur falls vorhanden)
| KI-Funktion | Anbieter / Modell | Gesendete Daten | Rolle (Anbieter/Betreiber) [PRÜFEN] | Risikoklasse [PRÜFEN] | Kennzeichnung (Art. 50) | Training ausgeschlossen? |
|---|---|---|---|---|---|---|

- Zeitplan und Fristen der KI-Verordnung (mit [Q-…], neu prüfen bis …): …
- Menschliche Kontrolle / Art. 22 DSGVO: …
- KI-Kompetenz (Art. 4): …

## Nutzerinhalte, Moderation & Meldeverfahren (nur falls vorhanden)
- Einordnung (DSA): …
- Kontaktstelle: …
- Meldeweg (Ablauf, Reaktionszeit, Begründung, Protokoll): …
- Moderationsrolle und Werkzeuge (→ Phase 12): …
- Nutzungsbedingungen / Rechteeinräumung für Nutzerinhalte: …

## Datenschutzbeauftragte(r) & Betroffenenanfragen
- Benennungspflicht geprüft (§ 38 BDSG [PRÜFEN]): …
- Weg für Anfragen (App-Funktionen + E-Mail), Antwortfrist: …
- Ablauf bei Datenpanne (72 Stunden → Phase 20, templates/incident-plan.md): …

## DSFA-Schwellwertprüfung (bei Risikostufe 3 oder sensiblen Daten)
- Ergebnis (erforderlich / nicht erforderlich / unklar), Begründung, Datum: …
- Falls erforderlich: Datei `dsfa.md` im Projektordner (Vorlage `templates/dsfa-vorlage.md`); Freigabe vor dem Launch: …

## Quellen
(Jede rechtliche Aussage mit [Q-…] → QUELLEN.md; fragliche Aussagen als [PRÜFEN])

## Offene Punkte für Fachberatung
- …
```

## Definition of Done
- [ ] Zutreffende Pflichten identifiziert
- [ ] Betroffenenrechte als Funktionen eingeplant (Export, Löschung)
- [ ] Verarbeitungsverzeichnis-Entwurf (Vorlage genutzt, jede Zeile mit Zweck, Rechtsgrundlage `[PRÜFEN]` und Löschfrist)
- [ ] Löschkonzept-Entwurf (pro Datenart Zweck, Frist, Auslöser, Backup-Umgang; Kontolöschung beschrieben)
- [ ] AVV-Liste (Auftragsverarbeiter-Liste mit Standort, AVV-Datum, Prüfdatum und Alternative)
- [ ] Datenschutzerklärung-Entwurf mit dem tatsächlichen Datenfluss abgeglichen
- [ ] KI-Funktionen eingeordnet (Risikoklasse, Kennzeichnung, Fristen mit Quelle) – oder „keine KI-Funktionen“ festgehalten
- [ ] Nutzerinhalte: Meldeweg und Moderationsrolle beschrieben – oder „keine Nutzerinhalte“ festgehalten
- [ ] Stufe 3: DSFA-Schwellwertprüfung durchgeführt und begründet entschieden; bei „erforderlich“ Durchführung geplant (Termin vor Launch)
- [ ] Rechtliche Aussagen mit `[Q-…]` belegt oder als `[PRÜFEN]` markiert; schnell veränderliche Angaben mit „Neu prüfen bis“
- [ ] Offene Punkte für Fachberatung benannt

→ **Standard-Gate**
