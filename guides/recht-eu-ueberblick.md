# Recht für App-Betreiber – EU- und deutscher Überblick

> **Stand: 2026-10-14.** Dieser Überblick ist eine **Orientierung, keine Rechtsberatung**. Recht ändert sich – besonders im Moment (KI-Verordnung, „Digital Omnibus“). Alles, was wir nicht an einer Primärquelle (Gesetzestext, Amtsblatt, Behördenseite) prüfen konnten, ist mit **[PRÜFEN]** gekennzeichnet. Bei **Risikostufe 3**, bei Geschäftstätigkeit oder wenn etwas unklar ist: **Fachanwalt bzw. Datenschutzberatung hinzuziehen**.
>
> Die Quellen stehen am Ende in der Tabelle „Quellen“. Verweise in eckigen Klammern wie `[G1]` beziehen sich auf diese Tabelle. Wenn du eine Aussage in dein Projekt übernimmst, trage sie dort mit einer eigenen `Q-…`-ID in `QUELLEN.md` ein (siehe `AGENTS.md` Abschnitt 12).

**So benutzt du diesen Guide:** Jedes Thema ist gleich aufgebaut:

1. **Was ist das?** – in einfachen Worten
2. **Gilt das für mich?** – eine Entscheidungstabelle
3. **Was muss ich praktisch tun?** – konkrete Schritte
4. **Welche Phase/Vorlage hilft?** – Verweis ins Regelwerk

## Inhalt

1. [EU-KI-Verordnung](#1-eu-ki-verordnung-ki-vo--ai-act)
2. [Digital Services Act (Nutzerinhalte)](#2-digital-services-act-dsa--nutzerinhalte-meldeverfahren-moderation)
3. [DSGVO-Kernpflichten](#3-dsgvo-kernpflichten)
4. [Cookies und Endgeräte-Zugriff (TDDDG)](#4-cookies-und-endgeräte-zugriff-tdddg)
5. [Impressumspflicht (DDG)](#5-impressumspflicht-ddg)
6. [Barrierefreiheit (BFSG)](#6-barrierefreiheit-bfsg)
7. [Urheberrecht, Open-Source-Lizenzen, Nutzerinhalte-Lizenz](#7-urheberrecht-open-source-lizenzen-und-lizenzen-für-nutzerinhalte)
8. [Jugendschutz](#8-jugendschutz)
9. [Zahlungen: Verbraucherrechte](#9-zahlungen-verbraucherrechte-nur-hinweis)
10. [Weitere Regelwerke im Blick](#10-weitere-regelwerke-im-blick)
11. [Quellen](#quellen)

---

## Vorab: Welche Rolle hast du?

Fast alle Pflichten hängen an deiner **Rolle**. Die Begriffe tauchen unten immer wieder auf:

| Begriff | Einfach erklärt | Beispiel |
|---|---|---|
| **Verantwortlicher** (DSGVO) | Wer entscheidet, **warum und wie** personenbezogene Daten verarbeitet werden | Du als App-Betreiber |
| **Auftragsverarbeiter** (DSGVO) | Wer Daten **in deinem Auftrag** verarbeitet und keine eigenen Zwecke verfolgt | Hosting, E-Mail-Versand, Datenbank-Dienst |
| **Betroffene** | Die Menschen, deren Daten verarbeitet werden | Deine Nutzer |
| **Anbieter** (KI-VO) | Wer ein KI-System entwickelt bzw. unter eigenem Namen in Verkehr bringt | Du, wenn du eine App mit eingebauter KI-Funktion veröffentlichst |
| **Betreiber** (KI-VO, englisch „deployer“) | Wer ein fremdes KI-System beruflich einsetzt | Ein Unternehmen, das ein KI-Tool für Mitarbeiter nutzt |
| **Vermittlungsdienst / Hostingdienst** (DSA) | Dienst, der Inhalte anderer speichert und zugänglich macht | Deine App, wenn Nutzer Beiträge, Fotos oder Kommentare einstellen |

**Wichtig:** Ein und dieselbe Person kann mehrere Rollen haben. Wenn du eine App baust, die ein KI-Modell eines Anbieters (z. B. per API) nutzt, bist du für **deine App** in der Regel **Anbieter eines KI-Systems** im Sinne der KI-VO – der Modell-Lieferant ist Anbieter des zugrunde liegenden Modells. Die Einordnung im Einzelfall ist **[PRÜFEN]**.

---

## 1. EU-KI-Verordnung (KI-VO / AI Act)

### Was ist das?

Die **Verordnung (EU) 2024/1689** ist das erste umfassende KI-Gesetz der Welt. Sie gilt direkt in allen EU-Staaten und sortiert KI-Systeme nach **Risiko** [G1]. Je höher das Risiko, desto strenger die Regeln.

| Risikoklasse | Bedeutung | Beispiele |
|---|---|---|
| **Unannehmbares Risiko – verboten** (Art. 5) | Praktiken, die grundsätzlich nicht erlaubt sind | Manipulative KI, die Menschen unterschwellig zu schädlichem Verhalten bringt; Ausnutzen von Schwächen (z. B. Alter, Behinderung); „Social Scoring“; ungezieltes Auslesen von Gesichtsbildern aus dem Internet; Emotionserkennung am Arbeitsplatz und in Bildungseinrichtungen (Ausnahmen für Medizin/Sicherheit); biometrische Kategorisierung nach sensiblen Merkmalen. Vollständige Liste: Art. 5 **[PRÜFEN im Wortlaut]** |
| **Hohes Risiko** (Art. 6 + Anhang III bzw. Anhang I) | Erlaubt, aber mit umfangreichen Pflichten (Risikomanagement, Daten-Governance, Dokumentation, menschliche Aufsicht, Konformitätsbewertung) | KI in Bildung/Prüfungen, Personalauswahl, Kreditwürdigkeit, wichtige öffentliche Leistungen, Strafverfolgung, Migration, Justiz, kritische Infrastruktur, Medizinprodukte |
| **Begrenztes Risiko – Transparenzpflichten** (Art. 50) | Menschen müssen erkennen können, dass sie es mit KI zu tun haben | Chatbots; KI-erzeugte Bilder, Audio, Video, Texte; Deepfakes |
| **Minimales Risiko** | Keine besonderen Pflichten aus der KI-VO | Spamfilter, einfache Empfehlungen, KI-gestützte Rechtschreibhilfe |

Zusätzlich gibt es eigene Regeln für **KI-Modelle mit allgemeinem Verwendungszweck** („General-Purpose AI“, GPAI – also die großen Sprachmodelle). Diese Pflichten treffen die **Modellanbieter**, nicht dich als App-Bauer, der ein Modell per API einbindet [G1][G3].

### Zeitplan und Fristen (Stand 2026-10-14)

Das ist der Bereich, der sich am meisten bewegt. Der Ablauf nach heutigem Stand:

| Datum | Was gilt | Status |
|---|---|---|
| 1. August 2024 | KI-VO tritt in Kraft | belegt [G1] |
| 2. Februar 2025 | Verbote (Art. 5) und KI-Kompetenz (Art. 4) gelten | belegt [G1] **[PRÜFEN: Art. 4 wurde 2026 abgeschwächt, siehe unten]** |
| 2. August 2025 | Pflichten für GPAI-Modellanbieter; Governance; Sanktionsregeln | belegt [G3] |
| 2. August 2026 | **Allgemeine Anwendung**, darunter die **Transparenzpflichten nach Art. 50**. Die Art.-50-Pflichten wurden durch das Omnibus-Paket **nicht** verschoben [G2][G4] | Sekundärquellen, ein Amtsblatt-Metadatum belegt [G2][G4] |
| 27. Juli 2026 | **Digital Omnibus on AI** (Verordnung (EU) 2026/1744) in Kraft: Beschlossen/unterzeichnet 8. Juli 2026; EUR-Lex bestätigt Titel, Datum und Inkrafttreten [G2] | Primärquelle (nur Metadaten abgerufen) |
| 2. Dezember 2026 | Für **Art. 50 Abs. 2** (maschinenlesbare Kennzeichnung KI-erzeugter Inhalte) gilt eine Übergangsfrist **nur** für Systeme, die **vor dem 2. August 2026** in Verkehr waren. Neue Systeme ab 2. August 2026 haben **keine** Übergangsfrist [G4][G5]. Ebenfalls ab 2. Dezember 2026: neue Verbote für KI-Systeme zur Erzeugung nicht einvernehmlicher intimer Darstellungen und von Missbrauchsdarstellungen Minderjähriger [G4][G5] | Sekundärquellen **[PRÜFEN im Amtsblatt-Wortlaut]** |
| 2. Dezember 2027 | Hochrisiko-Pflichten für **eigenständige Hochrisiko-Systeme (Anhang III)** – verschoben von 2. August 2026 [G4][G5][G6] | Sekundärquellen, mehrere übereinstimmend |
| 2. August 2028 | Hochrisiko-Pflichten für KI in **regulierten Produkten (Anhang I)** – verschoben von 2. August 2027 [G4][G5][G6] | Sekundärquellen, mehrere übereinstimmend |

Weitere Änderungen laut Sekundärquellen, die **[PRÜFEN]** sind: Die KI-Kompetenz-Pflicht (Art. 4) wurde so umformuliert, dass Anbieter und Betreiber Maßnahmen zur **Förderung** von KI-Kompetenz ergreifen müssen (statt ein bestimmtes Niveau zu „sicherzustellen“) [G5]; Erleichterungen für KMU wurden auf „kleine Mid-Caps“ ausgeweitet [G5].

> **Merksatz:** Die Hochrisiko-Fristen sind verschoben, die **Transparenzpflichten für Chatbots und KI-erzeugte Inhalte gelten bereits seit 2. August 2026**. Wer heute eine App mit Chat- oder Generierungsfunktion veröffentlicht, muss Art. 50 beachten.

### Gilt das für mich? (Entscheidungstabelle)

| Wenn deine App … | dann gilt wahrscheinlich … | Aufwand |
|---|---|---|
| keine KI-Funktion hat (auch keine KI-API) | Nichts aus der KI-VO für dich. Hinweis: Entwicklungs-Tools mit KI sind kein KI-System **deiner App** | keiner |
| KI nur intern zur Entwicklung nutzt (z. B. Coding-Assistent) | Keine Pflicht für die App; Datenschutz-Frage: Gehen Nutzerdaten an den Assistenten? | gering |
| einen **Chatbot oder Assistenten** enthält, mit dem Nutzer sprechen/schreiben | **Art. 50 Abs. 1**: Nutzer müssen informiert werden, dass sie mit KI interagieren (außer es ist offensichtlich) | gering |
| **Bilder, Audio, Video oder Text erzeugt** und ausgibt | **Art. 50 Abs. 2**: Ausgaben maschinenlesbar als KI-erzeugt kennzeichnen (technisch möglich, soweit realisierbar) – oft über die Funktionen des Modell-Anbieters **[PRÜFEN im Wortlaut]** | mittel |
| **Deepfakes** (täuschend echte KI-Bilder/-Videos/-Audio realer Personen/Orte) veröffentlicht | **Art. 50 Abs. 4**: Offenlegung, dass der Inhalt künstlich erzeugt oder manipuliert wurde | mittel |
| **Emotionen erkennt** oder Menschen biometrisch kategorisiert | **Art. 50 Abs. 3** (Information der Betroffenen) – und Verbote prüfen (Art. 5: Arbeitsplatz/Bildung) | hoch |
| in **Bildung, Personalauswahl, Kreditvergabe, Behörden/Strafverfolgung, Justiz, Migration, kritischer Infrastruktur** Entscheidungen über Menschen vorbereitet | Wahrscheinlich **Hochrisiko** (Anhang III); Pflichten gelten nach heutigem Stand ab 2. Dezember 2027 – **Fachprüfung sofort** | sehr hoch |
| ein **Medizinprodukt** mit KI ist | Hochrisiko über Anhang I (ab 2. August 2028) **und** Medizinprodukte-Recht | sehr hoch |
| Menschen **unterschwellig manipuliert**, Schwächen ausnutzt, Personen „bewertet“ (Social Scoring) | **Verboten** (Art. 5) | nicht bauen |
| ein **eigenes KI-Modell** trainiert und zur allgemeinen Nutzung bereitstellt | GPAI-Anbieterpflichten (Art. 51 ff.) | sehr hoch, Fachperson |

### Was muss ich praktisch tun?

1. **KI-Inventur:** Liste alle Stellen, an denen die App KI nutzt (Funktion, Anbieter, Modell, welche Daten gehen hin, was kommt zurück). In Phase 13/15 und der Auftragsverarbeiter-Liste festhalten.
2. **Rolle klären:** Bist du Anbieter, Betreiber oder beides? Wer ist Modellanbieter? (Siehe oben, im Zweifel **[PRÜFEN]**.)
3. **Risikoklasse einordnen** anhand der Tabelle. Bei Hochrisiko-Verdacht: Fachperson, bevor du weiterbaust.
4. **Kennzeichnung einbauen:**
   - Chatbot: gut sichtbarer Hinweis „Du sprichst mit einer KI“ im Chat selbst, nicht nur in den AGB.
   - Erzeugte Inhalte: sichtbare Kennzeichnung („KI-generiert“) dort, wo Verwechslung droht, plus – soweit möglich – maschinenlesbare Markierung (z. B. in Metadaten oder durch Funktionen des Modell-Anbieters).
   - Deepfakes: ausdrücklicher Hinweis.
5. **Menschliche Kontrolle** bei Entscheidungen mit Wirkung auf Menschen (DSGVO Art. 22 beachten, siehe Abschnitt 3).
6. **KI-Kompetenz:** Wer die App betreibt oder pflegt, sollte die Möglichkeiten und Grenzen der eingesetzten KI verstehen; dokumentiere kurz, wie du dich informierst (Art. 4, Abschwächung **[PRÜFEN]**).
7. **Keine verbotenen Praktiken:** Prüfe die Liste in Art. 5 gegen jede KI-Funktion. Prompts und Schutzmaßnahmen dokumentieren.
8. **Daten schützen:** Sende nur die Daten an KI-Anbieter, die nötig sind; AVV und Drittlandtransfer prüfen (Abschnitt 3); Training mit Nutzerdaten ausschließen, wenn der Anbieter das anbietet.
9. **Bußgelder kennen:** Verstöße gegen Verbote können bis zu 35 Mio. € oder 7 % des weltweiten Jahresumsatzes kosten, andere Verstöße bis 15 Mio. € oder 3 % (Art. 99) [G1] **[PRÜFEN: für KMU gelten Sonderregeln und die Omnibus-Änderungen zu Art. 99]**.

### Welche Phase/Vorlage hilft?

- `phases/16-recht-und-datenschutz.md` – Fragen zu KI-Funktionen und Einordnung
- `phases/14-sicherheitsarchitektur.md` – Abschnitt KI-Funktionen (Prompt-Injection, Kostenlimits)
- `phases/15-auth-zahlung-integrationen.md` – KI-Anbieter als Integration
- `templates/auftragsverarbeiter-liste.md` – KI-Anbieter eintragen
- `templates/datenschutzerklaerung-geruest.md` – Abschnitt „KI-Funktionen“

---

## 2. Digital Services Act (DSA) – Nutzerinhalte, Meldeverfahren, Moderation

### Was ist das?

Der **Digital Services Act** (Verordnung (EU) 2022/2065) regelt, wie Online-Dienste mit **Inhalten anderer** umgehen müssen [G7]. In Deutschland ergänzt ihn das **Digitale-Dienste-Gesetz (DDG)**, das auch die zuständige Behörde (Bundesnetzagentur als „Koordinator für digitale Dienste“) benennt **[PRÜFEN]**.

Der Kern: Wer Nutzerinhalte speichert und öffentlich zugänglich macht, haftet **nicht sofort** für rechtswidrige Inhalte, **muss aber reagieren**, sobald er davon erfährt (Haftungsprivileg für Hostingdienste, Art. 6) **[PRÜFEN im Wortlaut]**. Dafür gibt es Pflichten, die nach Größe gestaffelt sind.

### Gilt das für mich? (Entscheidungstabelle)

| Wenn deine App … | dann gilt … |
|---|---|
| **keine** Nutzerinhalte speichert oder zeigt (nur eigene Inhalte, nur private Daten, die nur der Nutzer selbst sieht) | Praktisch nichts aus dem DSA. Trotzdem Kontaktmöglichkeit (Impressum) |
| Nutzern erlaubt, **nur für sich selbst** Inhalte zu speichern (privates Notizbuch, private Cloud-Ablage) | Kaum Pflichten; bei geteilten Inhalten Meldeweg prüfen |
| Nutzer Inhalte **für andere sichtbar** macht (Kommentare, Profile, Fotos, Gruppen, Bewertungen) | **Hostingdienst**: Kontaktstelle, verständliche Nutzungsbedingungen mit Moderationsregeln, **Meldeverfahren** (Art. 16), Begründung bei Löschentscheidungen (Art. 17) **[PRÜFEN: genaue Pflichten je Artikel]** |
| zusätzlich **öffentlich verbreitet** (eine „Online-Plattform“) und du bist **Kleinst- oder Kleinunternehmen** (unter 50 Beschäftigte und höchstens 10 Mio. € Umsatz/Bilanz) | Die zusätzlichen Plattform-Pflichten (Abschnitt 3 des DSA, Art. 19 ff.) gelten für dich **nicht** (Art. 19) [G7][G8] – die Hosting-Pflichten aber weiterhin |
| zusätzlich öffentlich verbreitet und du bist **größer** | Beschwerdemanagement, Transparenzberichte, Schutz Minderjähriger usw. – **Fachperson** |
| nur **private Nachrichten zwischen einzelnen Personen** (reiner Messenger) | Je nach Ausgestaltung kein „öffentliches Verbreiten“; Einordnung **[PRÜFEN]** |

(Die Schwelle für Kleinunternehmen folgt der EU-Empfehlung 2003/361/EG [G7]; Details **[PRÜFEN]**. Nach Verlust des Status gilt die Ausnahme noch 12 Monate weiter, laut Erwägungsgrund 57 [G7].)

### Was muss ich praktisch tun?

Wenn Nutzer Inhalte für andere sichtbar machen können, plane mindestens:

1. **Kontaktstelle:** Eine E-Mail-Adresse oder ein Formular, über das Behörden und Nutzer dich direkt erreichen (ergänzt das Impressum).
2. **Nutzungsbedingungen mit Inhaltsregeln:** Was ist erlaubt, was nicht, wie wird moderiert (inkl. automatischer Werkzeuge und menschlicher Prüfung), wie können Nutzer Entscheidungen angreifen.
3. **Meldeverfahren (Notice & Action):** Ein leicht auffindbarer „Inhalt melden“-Knopf; die Meldung muss begründet und mit Angabe des Inhalts möglich sein; Eingangsbestätigung; Entscheidung ohne unnötige Verzögerung. Meldungen und Entscheidungen dokumentieren.
4. **Begründung bei Eingriffen:** Wenn du einen Inhalt entfernst oder ein Konto sperrst, teile dem betroffenen Nutzer Grund und Rechtsmittel mit.
5. **Rollen und Werkzeuge:** Wer prüft Meldungen (Rolle in Phase 12)? Gibt es Sperr- und Löschfunktionen für Moderatoren? Alles im Audit-Log festhalten.
6. **Notfall-Fälle:** Bei Hinweisen auf Straftaten mit Gefahr für Leib und Leben gibt es besondere Meldepflichten an Behörden (Art. 18) **[PRÜFEN]**.
7. **Illegale Inhalte erkennen:** Gerade bei Bild-/Video-Uploads Missbrauch einplanen (Phase 14: Upload-Prüfung, Größenlimits).

### Welche Phase/Vorlage hilft?

- `phases/16-recht-und-datenschutz.md` – Fragen zu Nutzerinhalten, Moderation, Meldeverfahren
- `phases/12-rollen-und-berechtigungen.md` – Moderationsrolle
- `phases/14-sicherheitsarchitektur.md` – Upload-Sicherheit, Missbrauchsschutz
- `templates/support-playbook.md` – Umgang mit Meldungen und Beschwerden
- `templates/incident-plan.md` – wenn gemeldete Inhalte ein Sicherheitsvorfall sind

---

## 3. DSGVO-Kernpflichten

### Was ist das?

Die **Datenschutz-Grundverordnung** (Verordnung (EU) 2016/679) gilt, sobald du **personenbezogene Daten** verarbeitest – also alles, was sich auf eine identifizierbare Person bezieht: Name, E-Mail, Konto-ID, IP-Adresse, Gerätekennung, Fotos, Nutzerinhalte [G9]. In Deutschland ergänzt das **Bundesdatenschutzgesetz (BDSG)** [G10]. Sie gilt auch für kleine Apps und kostenlose Angebote. **Nicht** gilt sie für rein persönliche oder familiäre Tätigkeiten (Art. 2 Abs. 2 Buchst. c) – das ist bei einer App für andere Nutzer in der Regel **nicht** der Fall.

### Gilt das für mich? (Entscheidungstabelle)

| Situation | DSGVO? |
|---|---|
| App läuft nur lokal auf deinem eigenen Gerät, nur für dich | Nein (persönliche Tätigkeit) |
| App wird von anderen genutzt, alle Daten bleiben ausschließlich lokal auf deren Gerät und du siehst sie nie | Meist wenig, aber **[PRÜFEN]**: SDKs, Absturzberichte, App-Store-Daten |
| Konto, E-Mail-Login, Server, Hosting, Analytics, KI-API | **Ja – volle Pflichten** |
| Daten von Kindern, Gesundheit, Standortverläufe, Behörden-/Sicherheitsbezug | **Ja – verschärft** (Art. 8, Art. 9, ggf. Art. 35) |
| Du handelst im Auftrag eines Arbeitgebers/einer Behörde | Dann ist meist **der Arbeitgeber/die Behörde** Verantwortlicher – Freigabe und Datenschutzbeauftragte einbinden |

### Die wichtigsten Pflichten im Überblick

| Artikel | Thema | Kurz erklärt | Praktisch |
|---|---|---|---|
| **Art. 5, 6** | Grundsätze und Rechtsgrundlage | Daten nur rechtmäßig, zweckgebunden, sparsam, richtig, begrenzt gespeichert. Für jede Verarbeitung braucht es eine **Rechtsgrundlage** (z. B. Vertrag, Einwilligung, berechtigtes Interesse, rechtliche Pflicht) | Pro Verarbeitung eine Rechtsgrundlage im Verarbeitungsverzeichnis eintragen |
| **Art. 7, 8** | Einwilligung, Kinder | Einwilligung: freiwillig, informiert, eindeutig, **jederzeit widerrufbar**, nachweisbar. Bei Diensten für Kinder: Einwilligung der Eltern unter 16 Jahren (Deutschland hat keine niedrigere Altersgrenze gewählt) **[PRÜFEN]** | Einwilligungen mit Zeitpunkt und Textversion speichern |
| **Art. 9** | Besondere Datenkategorien | Gesundheit, Religion, Biometrie, sexuelle Orientierung usw.: grundsätzlich verboten, außer mit Ausnahme, meist **ausdrückliche Einwilligung** | Stufe 3 (`AGENTS.md` Abschnitt 5) |
| **Art. 12–14** | **Informationspflichten** | Du musst Nutzer **bei der Datenerhebung** informieren (Art. 13): wer du bist, Zwecke, Rechtsgrundlagen, Empfänger, Drittlandtransfer, Speicherdauer, Rechte, Beschwerderecht. Bekommst du Daten **nicht direkt** vom Betroffenen (Art. 14), gilt eine Informationspflicht spätestens nach einem Monat | `templates/datenschutzerklaerung-geruest.md` |
| **Art. 15–22** | **Betroffenenrechte** | Auskunft (15), Berichtigung (16), Löschung (17), Einschränkung (18), Mitteilung an Empfänger (19), Datenübertragbarkeit (20), Widerspruch (21), keine automatisierte Einzelentscheidung mit Rechtswirkung (22). Antwortfrist: **ein Monat**, verlängerbar um bis zu zwei weitere Monate bei Komplexität (Art. 12 Abs. 3) **[PRÜFEN im Wortlaut]** | Export- und Löschfunktion in der App, Prozess für Anfragen |
| **Art. 17** | **Recht auf Löschung** | Daten sind zu löschen, wenn der Zweck entfällt, die Einwilligung widerrufen wird oder die Verarbeitung unrechtmäßig war – außer gesetzliche Aufbewahrungspflichten greifen | `templates/loeschkonzept.md` |
| **Art. 24, 25** | Verantwortung, **Datenschutz durch Technikgestaltung** | Datensparsamkeit und datenschutzfreundliche Voreinstellungen von Anfang an | Phase 11 (nur nötige Felder) |
| **Art. 28** | **Auftragsverarbeitung** | Mit jedem Dienstleister, der in deinem Auftrag Daten verarbeitet, brauchst du einen **Vertrag (AVV)** mit Pflichtinhalten | `templates/auftragsverarbeiter-liste.md` |
| **Art. 30** | **Verzeichnis von Verarbeitungstätigkeiten** | Schriftliche Übersicht aller Verarbeitungen. Die Ausnahme für Betriebe unter 250 Beschäftigten greift nicht, wenn die Verarbeitung nicht nur gelegentlich erfolgt, ein Risiko birgt oder besondere Kategorien betrifft (Art. 30 Abs. 5) – bei einer App mit Konten also praktisch **nie** | `templates/verarbeitungsverzeichnis.md` |
| **Art. 32** | **Sicherheit der Verarbeitung** | Angemessene technische und organisatorische Maßnahmen (Verschlüsselung, Zugriffskontrolle, Wiederherstellbarkeit, regelmäßige Überprüfung) | Phase 14, `security/regeln-fuer-ki.md` |
| **Art. 33** | **Meldung von Datenpannen an die Aufsichtsbehörde** | **Unverzüglich und möglichst binnen 72 Stunden, nachdem dir die Verletzung bekannt wurde** – außer sie führt voraussichtlich nicht zu einem Risiko für die Betroffenen. Jede Panne ist **intern zu dokumentieren** (Art. 33 Abs. 5). Ein Auftragsverarbeiter meldet **dir** unverzüglich (Art. 33 Abs. 2) | `templates/incident-plan.md` |
| **Art. 34** | **Benachrichtigung der Betroffenen** | Bei **voraussichtlich hohem Risiko** musst du die Betroffenen **unverzüglich** informieren – klar und verständlich, mit Folgen und Gegenmaßnahmen | `templates/incident-plan.md` |
| **Art. 35** | **Datenschutz-Folgenabschätzung (DSFA)** | Pflicht bei voraussichtlich **hohem Risiko**, insbesondere bei umfangreicher Verarbeitung besonderer Kategorien, systematischer Überwachung oder Profiling mit Rechtswirkung. Die Aufsichtsbehörden führen **Muss-Listen** | `templates/dsfa-vorlage.md` |
| **Art. 37** | Datenschutzbeauftragter | In Deutschland: ab in der Regel **20 Personen**, die ständig mit automatisierter Datenverarbeitung beschäftigt sind, **oder** wenn eine DSFA nötig ist (§ 38 BDSG) [G10] | Prüfen, ob benennungspflichtig |
| **Art. 44–49** | **Drittlandübertragung** | Daten dürfen nur in Länder außerhalb der EU/des EWR, wenn eine Grundlage besteht: Angemessenheitsbeschluss, Standardvertragsklauseln, … | Spalte „Standort“ in der AV-Liste |
| **Art. 83** | Bußgelder | Bis zu 20 Mio. € oder 4 % des weltweiten Jahresumsatzes **[PRÜFEN im Wortlaut]** | – |

#### Drittlandtransfer und USA – Stand

Für Anbieter in den USA gibt es seit 2023 den **EU-US Data Privacy Framework (DPF)** als Angemessenheitsbeschluss: Daten dürfen an **zertifizierte** US-Unternehmen fließen. Das EU-Gericht hat eine Klage gegen den DPF im September 2025 abgewiesen; dagegen wurde Berufung zum Europäischen Gerichtshof eingelegt [G11]. **Stand der Berufung: [PRÜFEN]**. Praxisregel: Zertifizierung des Anbieters im DPF-Verzeichnis prüfen **und** eine Alternative (EU-Region, Standardvertragsklauseln) im Hinterkopf behalten – deshalb hat die AV-Liste eine Spalte „Alternative“.

#### Fristen auf einen Blick

| Ereignis | Frist | Quelle |
|---|---|---|
| Datenpanne mit Risiko → Meldung an Aufsichtsbehörde | unverzüglich, möglichst **72 Stunden** ab Kenntnis | Art. 33 [G9] |
| Datenpanne mit hohem Risiko → Info an Betroffene | **unverzüglich** | Art. 34 [G9] |
| Antwort auf Betroffenenanfrage | **1 Monat** (verlängerbar) | Art. 12 Abs. 3 [G9] |
| Informationspflicht bei indirekt erhobenen Daten | spätestens **1 Monat** | Art. 14 [G9] |

> **Hinweis zu Reformvorschlägen:** Der EU-„Digital Omnibus“ (Entwurf COM(2025) 837 vom November 2025) schlägt vor, die Meldepflicht auf Pannen mit hohem Risiko zu beschränken und die Frist von 72 auf 96 Stunden zu verlängern. Nach Stand 12. Oktober 2026 ist das **nicht beschlossen** – es wird noch im Rat und im Parlament verhandelt [G12]. **Plane weiter mit 72 Stunden.**

### Was muss ich praktisch tun?

1. **Datenfluss aufschreiben** (aus Phase 11/13/15): Welche Daten gehen wohin?
2. **Verarbeitungsverzeichnis** anlegen (Vorlage) – eine Zeile pro Zweck.
3. **Rechtsgrundlage** je Zweck festlegen, Einwilligungen technisch speichern.
4. **Datenschutzerklärung** auf Basis des Gerüsts schreiben und mit dem tatsächlichen Datenfluss abgleichen.
5. **AVV** mit allen Dienstleistern abschließen, Liste pflegen.
6. **Löschkonzept** erstellen und Löschfunktionen bauen.
7. **Betroffenenrechte** als Funktionen umsetzen (Export, Löschung, Berichtigung, Widerruf) und einen Weg für Anfragen per E-Mail bereithalten.
8. **Datenpannen-Plan** vorbereiten (wer meldet was bis wann).
9. **DSFA-Schwellwertprüfung** durchführen, wenn Risikostufe 3 oder Daten wie Gesundheit, Kinder, Standortverläufe, Behörden-/Sicherheitsbezug vorkommen.
10. **Datenschutzbeauftragten**-Pflicht prüfen.

### Welche Phase/Vorlage hilft?

- `phases/16-recht-und-datenschutz.md`, `phases/11-daten-und-inhalte.md`, `phases/15-auth-zahlung-integrationen.md`, `phases/20-betrieb.md`
- `templates/datenschutzerklaerung-geruest.md`, `templates/verarbeitungsverzeichnis.md`, `templates/loeschkonzept.md`, `templates/dsfa-vorlage.md`, `templates/auftragsverarbeiter-liste.md`, `templates/incident-plan.md`

---

## 4. Cookies und Endgeräte-Zugriff (TDDDG)

### Was ist das?

Das **Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG)** regelt in **§ 25**, wann du Informationen **auf dem Gerät des Nutzers speichern oder dort auslesen** darfst – egal ob Cookie, Local Storage, Gerätekennung oder SDK-Zugriff [G13]. Grundregel: **Einwilligung nötig**, außer der Zugriff ist **unbedingt erforderlich**, damit du einen vom Nutzer ausdrücklich gewünschten Dienst bereitstellen kannst (typisch: Login-Sitzung, Warenkorb, Sicherheit, gespeicherte Einwilligungsentscheidung). Die Einwilligung selbst richtet sich nach den DSGVO-Regeln (Art. 4 Nr. 11, Art. 7). Wortlaut im Einzelnen **[PRÜFEN]** – die Seite des Gesetzes konnte für diesen Überblick nicht abgerufen werden.

**Wichtig für Apps:** § 25 gilt nicht nur für Websites, sondern auch für **Apps** (z. B. Werbe-ID, Analytics-SDKs, die Daten auf dem Gerät ablegen oder auslesen).

### Gilt das für mich? (Entscheidungstabelle)

| Was deine App/Website auf dem Gerät speichert oder ausliest | Einwilligung nötig? |
|---|---|
| Sitzungs-Cookie / Token für den Login | Nein (unbedingt erforderlich) |
| Speicherung der Cookie-Entscheidung selbst | Nein |
| Spracheinstellung, Dark Mode (vom Nutzer gewählt) | Meist nein; **[PRÜFEN]** |
| Sicherheitsfunktionen (z. B. Betrugsschutz, CSRF-Token) | Nein |
| Reichweitenmessung / Analytics mit Gerätekennung oder Cookie | **Ja**, außer der Anbieter arbeitet ohne Speicherung/Auslesen auf dem Gerät **[PRÜFEN im Einzelfall]** |
| Werbung, Retargeting, Social-Media-Pixel | **Ja** |
| Einbindung von Fremdinhalten (YouTube, Karten, Schriften von fremden Servern), die selbst Daten erheben | **Ja** bzw. lokal einbinden / Zwei-Klick-Lösung |
| Absturzberichte mit Gerätekennung | **[PRÜFEN]**, je nach Umfang |

### Grundsätze für Einwilligungsbanner

1. **Vorher fragen:** Nicht notwendige Skripte laden **erst nach** der Einwilligung.
2. **Aktive Handlung:** Keine vorangekreuzten Kästchen, kein „Weitersurfen = Zustimmung“.
3. **Gleichwertige Ablehnung:** „Ablehnen“ so leicht und so sichtbar wie „Akzeptieren“ (gleiche Ebene, vergleichbare Gestaltung). Die Position der Aufsichtsbehörden ist hier streng.
4. **Informiert und spezifisch:** Zwecke und Anbieter benennen; granular wählbar.
5. **Widerruf jederzeit:** Ein Link/Knopf „Cookie-Einstellungen“ dauerhaft erreichbar; Widerruf so einfach wie Erteilung.
6. **Nachweisbar:** Zeitpunkt, Version des Textes, Entscheidung speichern.
7. **Nichts tracken, wenn nicht nötig:** Das beste Banner ist keins – wer auf Tracking verzichtet, braucht oft gar keines.

### Was muss ich praktisch tun?

1. Liste aller Speicher-/Auslese-Vorgänge erstellen (auch SDKs und Fremd-Einbindungen).
2. Je Eintrag: unbedingt erforderlich ja/nein.
3. Wenn möglich: **verzichten** (Phase 16 Q3 – Analytics „Nein“ ist am einfachsten).
4. Sonst: Einwilligungsverwaltung bauen oder einen geprüften Anbieter nutzen (mit AVV).
5. Schriften, Icons und Skripte **lokal einbinden**.
6. In der Datenschutzerklärung die Vorgänge und die Widerrufsmöglichkeit nennen.

> **Reformvorschlag:** Der Digital Omnibus will die Cookie-Regeln teilweise neu fassen (inkl. Ausnahmen und längere Wartezeit nach Ablehnung). Der Rat hat laut Berichten im September 2026 zur ePrivacy-Richtlinie zurückgeschwenkt; **nichts davon ist beschlossen** [G12]. Es gilt bis auf Weiteres § 25 TDDDG.

### Welche Phase/Vorlage hilft?

`phases/16-recht-und-datenschutz.md` (Q3), `phases/14-sicherheitsarchitektur.md`, `templates/datenschutzerklaerung-geruest.md` (Abschnitt Analytics/Cookies), `guides/lieferkette.md` (Fremd-SDKs prüfen).

---

## 5. Impressumspflicht (DDG)

### Was ist das?

Wer ein **geschäftsmäßiges digitales Angebot** („in der Regel gegen Entgelt“) betreibt, muss nach **§ 5 Digitale-Dienste-Gesetz (DDG)** leicht erkennbare, unmittelbar erreichbare und ständig verfügbare Angaben zur eigenen Person machen [G14]. Der Begriff „geschäftsmäßig“ wird weit ausgelegt: Schon Werbeeinnahmen, ein Nebengewerbe, ein Abo oder ein Auftritt als Marke reichen oft aus. Rein private, nicht-geschäftsmäßige Angebote sind ausgenommen **[PRÜFEN im Einzelfall]**.

**Typische Pflichtangaben** (Wortlaut in § 5 DDG **[PRÜFEN]**):

- Name und ladungsfähige Anschrift (bei Unternehmen: Rechtsform, Vertretungsberechtigte)
- Kontakt, der **schnelle elektronische Kontaktaufnahme und unmittelbare Kommunikation** ermöglicht (E-Mail plus ein zweiter Weg, z. B. Kontaktformular)
- falls vorhanden: Handelsregister und Registernummer, Umsatzsteuer-Identifikationsnummer, Aufsichtsbehörde, Kammer/Berufsbezeichnung bei reglementierten Berufen
- bei journalistisch-redaktionellen Angeboten zusätzlich eine verantwortliche Person (Medienstaatsvertrag, **[PRÜFEN]**)

### Gilt das für mich? (Entscheidungstabelle)

| Situation | Impressum? |
|---|---|
| Rein private App nur für dich/Familie, keine Einnahmen | Nein |
| Kostenlos, aber mit Werbung, Spenden-Funktion, Marke oder Nebengewerbe | **Ja** (geschäftsmäßig) |
| Abo, In-App-Käufe, Verkauf | **Ja** |
| Verein, Unternehmen, Organisation | **Ja** |
| Im Auftrag eines Arbeitgebers/einer Behörde | Meist trägt die Organisation das Impressum – klären |
| Unsicher | Impressum bereitstellen (geringe Kosten, Abmahnrisiko vermeiden) |

### Was muss ich praktisch tun?

1. Pflichtangaben sammeln (Privatadresse erscheint bei Einzelpersonen im Impressum – ggf. Geschäftsanschrift/Postfachlösung **[PRÜFEN]**, ein Postfach genügt in der Regel nicht).
2. Impressum in der App und auf der Website **von jeder Seite mit höchstens zwei Klicks** erreichbar machen (z. B. Menüpunkt „Impressum“, Footer).
3. In den App-Stores die Kontakt- und Datenschutz-Angaben passend hinterlegen (`guides/appstore-veroeffentlichung.md`).
4. Bei Änderungen (Umzug, neue Rechtsform) aktualisieren.

### Welche Phase/Vorlage hilft?

`phases/16-recht-und-datenschutz.md`, `phases/07-screens-und-navigation.md` (Platz in der Navigation), `templates/datenschutzerklaerung-geruest.md` (Verantwortlicher), `guides/appstore-veroeffentlichung.md`.

---

## 6. Barrierefreiheit (BFSG)

### Was ist das?

Das **Barrierefreiheitsstärkungsgesetz (BFSG)** verpflichtet seit dem **28. Juni 2025** bestimmte digitale Produkte und Dienstleistungen zur Barrierefreiheit [G15]. Betroffen sind u. a. **Online-Shops und andere Dienste im elektronischen Geschäftsverkehr für Verbraucher**, Bankdienste, Personenverkehrs-Apps und E-Books. **Kleinstunternehmen** (weniger als 10 Beschäftigte **und** höchstens 2 Mio. € Jahresumsatz bzw. Bilanzsumme) sind für **Dienstleistungen** ausgenommen – für Produkte nicht [G15].

### Gilt das für mich? (Kurz)

| Situation | BFSG? |
|---|---|
| Kostenlose App ohne Verkauf an Verbraucher, kein Vertragsabschluss | Meist nein **[PRÜFEN]** |
| Verkauf/Abo an Verbraucher über die App/Website | **Ja**, außer Kleinstunternehmen-Ausnahme |
| Nur B2B | Meist nicht erfasst **[PRÜFEN]** |
| Privates Projekt | Nein |

### Was muss ich praktisch tun? Welche Phase hilft?

Die Einzelheiten stehen in **`phases/10-barrierefreiheit-und-sprachen.md`** (Anforderungen, Prüfpunkte, Barrierefreiheitserklärung). In Phase 16 wird nur festgehalten, **ob** das BFSG zutrifft und wer die Erklärung pflegt. Barrierefreiheit ist auch ohne Pflicht gute Praxis und erweitert die Zielgruppe.

---

## 7. Urheberrecht, Open-Source-Lizenzen und Lizenzen für Nutzerinhalte

### Was ist das?

Alles, was du in deine App einbaust, gehört jemandem: Code-Bibliotheken, Schriften, Icons, Bilder, Texte, Musik. Du darfst es nur nutzen, **wenn eine Lizenz es erlaubt** – und musst deren Bedingungen einhalten. Zusätzlich brauchst du von deinen Nutzern das Recht, ihre Inhalte zu speichern und anzuzeigen.

| Bereich | Worauf achten |
|---|---|
| **Open-Source-Bibliotheken** | **Permissive** Lizenzen (MIT, BSD, Apache-2.0): meist nur Lizenztext und Urheberhinweis beilegen. **Copyleft** (GPL, AGPL, LGPL): kann verlangen, dass dein eigener Code ebenfalls offengelegt wird – besonders bei **AGPL**, wenn die Software als Netzdienst läuft. **Keine Lizenz** = alle Rechte vorbehalten, also **nicht nutzbar** |
| **Schriften, Icons, Bilder, Musik** | Lizenz prüfen (kommerziell erlaubt? Namensnennung? Einbettung in Apps erlaubt?). „Kostenlos“ heißt nicht „für jeden Zweck frei“ |
| **KI-generierte Inhalte** | Urheberrechtlicher Schutz und mögliche Rechte Dritter sind rechtlich im Fluss **[PRÜFEN]**; Nutzungsbedingungen des KI-Anbieters lesen |
| **Nutzerinhalte** | In den Nutzungsbedingungen ein **einfaches, nicht exklusives Nutzungsrecht** einholen, nur so weit für den Betrieb nötig (speichern, anzeigen, technisch bearbeiten); Nutzer versichern, dass sie die Rechte haben; Meldeweg für Rechtsverletzungen (siehe Abschnitt 2) |
| **Marken und Namen** | Vor dem Namens-Launch Marken-/Domainrecherche (Phase 4), keine fremden Logos |
| **Eigene Inhalte** | Quellenangaben bei Zitaten; für eigene Texte/Bilder Rechte dokumentieren |

### Gilt das für mich?

**Ja, fast immer.** Jede App hat Abhängigkeiten. Relevant wird es besonders, wenn du die App **verbreitest** (App-Store, Download) oder gewerblich anbietest.

### Was muss ich praktisch tun?

1. **Abhängigkeitsliste mit Lizenzen** erzeugen (Werkzeuge aus `guides/lieferkette.md`).
2. Lizenzen mit **Copyleft** oder ohne Lizenz markieren und bewusst entscheiden: ersetzen, trennen oder Pflichten erfüllen (`ENTSCHEIDUNGEN.md`).
3. **Lizenzhinweise** in der App sichtbar machen (z. B. „Open-Source-Lizenzen“ in den Einstellungen), wenn die Lizenz es verlangt.
4. Schriften, Icons und Bilder mit Lizenznachweis im Projekt ablegen.
5. In den **Nutzungsbedingungen** die Rechteeinräumung für Nutzerinhalte regeln.

### Welche Phase/Vorlage hilft?

`phases/16-recht-und-datenschutz.md` (Checkliste „Inhalte“), `phases/09-design-system.md` (Schriften/Icons), `guides/lieferkette.md`.

---

## 8. Jugendschutz

### Was ist das? / Gilt das für mich?

Zwei Themen werden oft verwechselt:

| Thema | Frage | Folge |
|---|---|---|
| **Datenschutz von Kindern** | Nutzen Kinder unter 16 die App? | Einwilligung der Eltern, wo Einwilligung die Rechtsgrundlage ist (DSGVO Art. 8); verständliche Datenschutzinformation; bei Kinderdaten **Risikostufe 3** (`AGENTS.md` Abschnitt 5) |
| **Jugendmedienschutz** | Enthält die App Inhalte oder Kontaktfunktionen, die Kinder und Jugendliche beeinträchtigen können (Gewalt, Erotik, Glücksspiel-Elemente, Chats mit Fremden)? | Das **Jugendschutzgesetz (JuSchG)** und der **Jugendmedienschutz-Staatsvertrag (JMStV)** können Altersangaben, Zugangsbeschränkungen oder Schutzmaßnahmen (z. B. Meldewege, Voreinstellungen für Minderjährige) verlangen. Für Dienste mit Nutzerinteraktion gibt es Vorsorgepflichten. Einzelheiten und Schwellen **[PRÜFEN]** – nicht verifiziert |

### Was muss ich praktisch tun?

1. Zielgruppe in Phase 3 festlegen: Ab welchem Alter ist die App gedacht? Wird das technisch durchgesetzt?
2. Keine Chat-/Kontaktfunktion für Minderjährige ohne Schutzkonzept.
3. Altersangaben im App-Store korrekt ausfüllen (`guides/appstore-veroeffentlichung.md`).
4. Bei Kindern als Hauptzielgruppe: Fachperson einbinden.

### Welche Phase/Vorlage hilft?

`phases/03-zielgruppe.md`, `phases/16-recht-und-datenschutz.md` (Q5), `guides/appstore-veroeffentlichung.md`.

---

## 9. Zahlungen: Verbraucherrechte (nur Hinweis)

### Was ist das?

Wenn du Verbrauchern etwas **online verkaufst** (Produkte, Abos, digitale Inhalte), kommen zusätzlich zum Datenschutz **Verbraucherschutzregeln** dazu. Dieser Abschnitt ist nur ein **Hinweis**, welche Themen du mit Fachberatung klären solltest.

| Thema | Kurz | Quelle/Status |
|---|---|---|
| **Widerrufsrecht** | Verbraucher haben bei Fernabsatzverträgen grundsätzlich 14 Tage Widerrufsrecht; für digitale Inhalte und Dienste gibt es Sonderregeln für das Erlöschen **[PRÜFEN]** | §§ 312g, 355 BGB [G16] |
| **Widerrufsfunktion („Widerrufsbutton“)** | Seit **19. Juni 2026** muss bei online abgeschlossenen Verträgen eine deutlich beschriftete Widerrufsfunktion (z. B. „Vertrag widerrufen“) bereitstehen, die während der Widerrufsfrist von jeder Seite erreichbar ist; mehrstufig mit Bestätigung und unverzüglicher Eingangsbestätigung auf einem dauerhaften Datenträger | § 356a BGB, laut IHK-Hinweis [G16] **[PRÜFEN im Gesetzestext]** |
| **Bestellbutton** | Der Bestellknopf muss eindeutig „zahlungspflichtig bestellen“ o. ä. lauten (Button-Lösung) | § 312j BGB **[PRÜFEN]** |
| **Kündigungsbutton** | Bei Online-Verträgen über Dauerschuldverhältnisse (Abos) muss eine leicht zugängliche Kündigungsmöglichkeit bestehen | § 312k BGB **[PRÜFEN]** |
| **Preisangaben** | Gesamtpreise inkl. Umsatzsteuer und Pflichtbestandteilen, klare Laufzeit-/Verlängerungsangaben | Preisangabenverordnung **[PRÜFEN]** |
| **Zahlungsabwicklung** | Karten- und Kontodaten über einen Zahlungsanbieter abwickeln; die App selbst verarbeitet keine Kartendaten (`security/regeln-fuer-ki.md`) | Phase 15 |
| **Steuern/Gewerbe** | Gewerbeanmeldung, Umsatzsteuer, ggf. Plattform-Gebühren der Stores | Fachberatung (Steuer) |

### Gilt das für mich?

| Situation | Hinweis |
|---|---|
| Keine Zahlungen | Nichts davon |
| Abo/Kauf an Verbraucher (B2C) | Alles oben prüfen |
| Nur B2B | Widerrufsrecht entfällt meist; Preisangaben/Vertragsrecht trotzdem prüfen |
| Käufe über App-Store-Abrechnung | Der Store übernimmt Abrechnung; deine Pflichten (Informationen, Widerruf, Kündigung) bleiben teilweise **[PRÜFEN]** |

### Welche Phase/Vorlage hilft?

`phases/15-auth-zahlung-integrationen.md`, `phases/17-monetarisierung-und-kosten.md`, `phases/16-recht-und-datenschutz.md` (Checkliste: Widerruf, AGB), `templates/support-playbook.md` (Rückerstattung, Widerruf).

---

## 10. Weitere Regelwerke im Blick

Diese Punkte sind **nicht** Kern des Regelwerks, können aber je nach App wichtig sein. Nur Hinweise, jeweils **[PRÜFEN]**:

| Regelwerk | Wann relevant | Hinweis |
|---|---|---|
| **EU-Cyber-Resilience-Act (CRA)** | Du bringst gewerblich Software heraus, die auf dem Gerät des Nutzers läuft (z. B. installierte App) | Meldepflichten für aktiv ausgenutzte Schwachstellen und schwere Sicherheitsvorfälle gelten **ab 11. September 2026**; vollständige Anwendung **ab 11. Dezember 2027**. Reine Web-/SaaS-Anwendungen sind in der Regel nicht selbst erfasst [G17]. Prozess: `templates/incident-plan.md`, `guides/lieferkette.md` |
| **Medizinprodukte-Recht** | Die App stellt Diagnosen, empfiehlt Therapien oder wertet Gesundheitsdaten zu medizinischen Zwecken aus | Kann als Medizinprodukt gelten – strenge Regeln, Fachberatung (Phase 16 Checkliste „Inhalte“) |
| **EU-Datenverordnung (Data Act)** | Vernetzte Produkte/Dienste, Datenzugang für Nutzer | Eher bei IoT; für typische Apps selten relevant |
| **Finanzaufsicht** | Geld verwahren oder überweisen | In der Regel Erlaubnis nötig – `AGENTS.md` Abschnitt 5 |
| **Arbeits- und Dienstkontext** | App für Mitarbeiter oder Behörden | Personalvertretung, Datenschutzbeauftragte, Freigabe |

---

## Quellen

> Prüfdatum für alle Einträge: **2026-10-14**. „Art“ folgt `AGENTS.md` Abschnitt 12. **Abgerufen** heißt: die Seite wurde geöffnet; teils lieferte sie nur Metadaten oder Inhaltsverzeichnis. Einträge mit „nicht abgerufen“ sind Normverweise, deren Wortlaut vor der Nutzung geprüft werden muss **[PRÜFEN]**.

| ID | Aussage | URL | Art | Prüfdatum | Neu prüfen bis |
|---|---|---|---|---|---|
| G1 | Verordnung (EU) 2024/1689 (KI-VO): Risikoklassen, Verbote (Art. 5), KI-Kompetenz (Art. 4), Transparenz (Art. 50), Bußgelder (Art. 99); Inkrafttreten 1. August 2024, Verbote und KI-Kompetenz seit 2. Februar 2025. Wortlaut nicht abgerufen, Angaben aus Fachwissen **[PRÜFEN]** | https://eur-lex.europa.eu/eli/reg/2024/1689/oj | Primärquelle (nicht abgerufen) | 2026-10-14 | 2026-12-02 |
| G2 | Verordnung (EU) 2026/1744 („Digital Omnibus on AI“) ändert Verordnungen (EU) 2024/1689, (EU) 2018/1139 und (EU) 2023/1230; Datum des Rechtsakts 8. Juli 2026; Inkrafttreten 27. Juli 2026 (Metadaten der EUR-Lex-Seite; Artikeltext nicht abrufbar) | https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng | Primärquelle (nur Metadaten) | 2026-10-14 | 2026-12-02 |
| G3 | GPAI-Pflichten gelten seit 2. August 2025 und sind vom Omnibus nicht verschoben (Sekundärquelle) | https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/ | Bericht | 2026-10-14 | 2026-12-02 |
| G4 | Art. 50 wird vom Omnibus nicht geändert und gilt ab 2. August 2026; Übergang bis 2. Dezember 2026 nur für vor dem 2. August 2026 in Verkehr gebrachte Systeme (Art. 50 Abs. 2); Hochrisiko Anhang III am 2. Dezember 2027; Anhang I am 2. August 2028 | https://www.iubenda.com/en/blog/ai-omnibus-adopted-august-2-obligations-july-2026/ | Bericht (Datenschutz-Dienstleister) | 2026-10-14 | 2026-12-02 |
| G5 | Zusammenfassung der Omnibus-Änderungen: neue Verbote ab 2. Dezember 2026 (nicht einvernehmliche intime Darstellungen, Missbrauchsdarstellungen), Abschwächung Art. 4, KMU-Erleichterungen, Veröffentlichung im Amtsblatt 24. Juli 2026 laut dieser Quelle | https://www.haqq.ai/blog/eu-ai-act-amendments-2026.html | Bericht | 2026-10-14 | 2026-12-02 |
| G6 | Hochrisiko-Fristen (2. Dezember 2027 / 2. August 2028) auch laut Kanzlei-Analyse bestätigt (zum Zeitpunkt der vorläufigen Einigung) | https://www.addleshawgoddard.com/en/insights/insights-briefings/2026/technology/ai-omnibus-provisional-agreement-changes-eu-ai-act-delayed-deadlines/ | Bericht (Kanzlei) | 2026-10-14 | 2026-12-02 |
| G7 | Verordnung (EU) 2022/2065 (DSA): Erwägungsgründe zu Kleinst- und Kleinunternehmen (Erwägungsgrund 57, Ausnahme Art. 19) | https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2065 | Primärquelle (nur Erwägungsgründe gelesen) | 2026-10-14 | 2027-04-14 |
| G8 | Artikelüberschriften des DSA: Art. 14 Allgemeine Geschäftsbedingungen, Art. 16 Melde- und Abhilfeverfahren, Art. 19 Ausnahme für Kleinst- und Kleinunternehmen (Inhaltsverzeichnis); Artikelinhalte aus Fachwissen **[PRÜFEN]** | https://dsa.kemitchell.com/contents | Bericht (Inhaltsverzeichnis einer Textwiedergabe) | 2026-10-14 | 2027-04-14 |
| G9 | DSGVO Verordnung (EU) 2016/679: Art. 12–22 (Informationspflichten, Betroffenenrechte), Art. 28, 30, 32, 33 (72 Stunden), 34, 35, 37, 44 ff., 83. Wortlaut nicht abgerufen, Angaben aus Fachwissen **[PRÜFEN]** | https://eur-lex.europa.eu/eli/reg/2016/679/oj | Primärquelle (nicht abgerufen) | 2026-10-14 | 2027-04-14 |
| G10 | § 38 BDSG: Datenschutzbeauftragter ab mindestens 20 Personen, die ständig mit automatisierter Verarbeitung beschäftigt sind, oder bei DSFA-pflichtiger Verarbeitung (Wiedergabe des Gesetzestextes auf Drittseite) | https://lxgesetze.de/bdsg/38 | Bericht (Gesetzestext-Spiegel; Primärquelle: gesetze-im-internet.de, dort Abruf gesperrt) | 2026-10-14 | 2027-04-14 |
| G11 | Klage gegen den EU-US Data Privacy Framework im September 2025 vom EU-Gericht abgewiesen; Berufung zum Europäischen Gerichtshof anhängig; aktueller Stand **[PRÜFEN]** | https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20251201-european-court-of-justice-to-review-challenge-to-eu-us-data-privacy-framework | Bericht (Kanzlei) | 2026-10-14 | 2027-01-14 |
| G12 | Digital Omnibus (Daten/DSGVO/ePrivacy, COM(2025) 837): Stand 12. Oktober 2026 nicht beschlossen; Vorschläge: Meldefrist 96 Stunden, nur Hochrisiko-Pannen, Cookie-Regeln | https://ppc.land/digital-omnibus/ | Bericht (Fachmedium) | 2026-10-14 | 2027-01-14 |
| G13 | § 25 TDDDG (Schutz der Privatsphäre bei Endeinrichtungen). Wortlaut nicht abgerufen (Abruf der Gesetzesseite gesperrt) **[PRÜFEN]** | https://www.gesetze-im-internet.de/ttdsg/__25.html | Primärquelle (nicht abgerufen) | 2026-10-14 | 2027-04-14 |
| G14 | § 5 DDG (allgemeine Informationspflichten / Impressum). Wortlaut nicht abgerufen **[PRÜFEN]** | https://www.gesetze-im-internet.de/ddg/__5.html | Primärquelle (nicht abgerufen) | 2026-10-14 | 2027-04-14 |
| G15 | BFSG gilt ab 28. Juni 2025; Kleinstunternehmen-Ausnahme nur für Dienstleistungen (weniger als 10 Beschäftigte und höchstens 2 Mio. € Umsatz/Bilanz); Online-Shops erfasst | https://www.ihk.de/berlin/service-und-beratung/recht-und-steuern/informationsseite-bfsg-6451846 | Bericht (IHK) | 2026-10-14 | 2027-04-14 |
| G16 | Widerrufsfunktion nach § 356a BGB ab 19. Juni 2026; Widerrufsrecht §§ 312g, 355 BGB bleibt | https://www.ihk.de/darmstadt/servicemarken/news/service/neue-widerrufs-funktion-im-online-handel-ab-juni-2026-6968218 | Bericht (IHK) | 2026-10-14 | 2027-01-14 |
| G17 | CRA: Meldepflichten (Art. 14) ab 11. September 2026, volle Anwendung 11. Dezember 2027; Hersteller inkl. reiner Softwareanbieter; installierte Apps erfasst, reine Web-/SaaS-Anwendungen meist nicht | https://www.heuking.de/en/news-events/newsletter-articles/detail/cyber-resilience-act-diese-neuen-meldepflichten-kommen-auf-betroffene-unternehmen-ab-september-zu.html | Bericht (Kanzlei) | 2026-10-14 | 2027-01-14 |

> **Offene [PRÜFEN]-Punkte dieses Guides** (für die nächste Überarbeitung): Wortlaut Art. 4/5/50/99 KI-VO nach Omnibus; Art. 16–19 DSA im Detail; § 25 TDDDG, § 5 DDG, §§ 312j/312k/356a BGB im Gesetzestext; JuSchG/JMStV-Schwellen; Stand der DPF-Berufung; Beschluss-Stand des Digital Omnibus (Daten).
