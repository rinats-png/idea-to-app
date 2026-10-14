# Support-Playbook: <Name der App>

> Vorlage für Phase 20 (`phases/20-betrieb.md`) und Phase 24 (`phases/24-iteration-und-wartung.md`). Kopieren nach `projekte/<slug>/20-support-playbook.md` und ausfüllen.
> Zusammenspiel: `templates/incident-plan.md` (Notfälle und Datenpannen), `templates/release-checkliste.md` (Support vor Releases informieren), `templates/datenschutzerklaerung-geruest.md` (Hinweise auf Kontaktwege), `templates/loeschkonzept.md` (Löschung), `guides/recht-eu-ueberblick.md` (Fristen und Rechte der Betroffenen).
> **Alle Zeiten in dieser Vorlage sind Entscheidungen von dir**, keine Pflichtwerte. Rechtliche Fristen (z. B. bei Auskunftsanfragen) stehen im [Überblick Recht in der EU](../guides/recht-eu-ueberblick.md) – nicht hier.

## Für Einsteiger erklärt

**Support** ist alles, womit du Nutzern hilfst, wenn etwas nicht klappt: E-Mails beantworten, Fehler aufnehmen, Fragen klären. Ein klarer Ablauf spart dir Zeit, macht die App vertrauenswürdig und schützt vor einem der häufigsten Sicherheitsprobleme: **Betrüger nutzen den Support**, um fremde Konten zu übernehmen oder Daten zu erschleichen (sogenannte „Social Engineering“-Angriffe – sie täuschen Menschen statt Technik). Darum steht in diesem Playbook auch, was du **nie** tust.

---

## 1. Die Grundregeln (immer)

1. **Niemals nach Passwörtern, Wiederherstellungs- oder 2FA-Codes fragen** – weder per E-Mail noch am Telefon noch im Chat. Auch nicht „zur Prüfung“. Das gilt für dich und für jeden, der in deinem Namen schreibt. Nutzer sollen das wissen (Hinweis auf der Hilfeseite).
2. **Identität prüfen, bevor du Kontodaten preisgibst oder änderst.** Siehe Abschnitt 5.
3. **Nur das Nötigste verlangen und speichern.** Bitte nicht um Ausweiskopien oder weitere Daten, wenn es auch ohne geht (Datensparsamkeit, Regel 7.1).
4. **Keine sensiblen Daten in Tickets und E-Mails weitergeben.** Wenn Nutzer sie von sich aus schicken (Passwörter, Gesundheitsdaten, Kartennummern): Nicht weiterverarbeiten, Nachricht aus dem Posteingang entfernen bzw. schwärzen und den Nutzer freundlich bitten, so etwas nicht per E-Mail zu senden (Regeln 7.2, 8.3).
5. **Keine Zugänge zu Nutzerkonten „zum Nachschauen“**, außer es ist dokumentiert nötig, begrenzt und protokolliert (Admin-Aktionen werden protokolliert, Regel 2.10). Bei besonders sensiblen Apps (Stufe 3): Support sieht nur, was er für den Fall braucht.
6. **Ehrlich antworten.** Nichts versprechen, was die App nicht kann; Fehler zugeben; keine Schuldzuweisung an Nutzer.
7. **Eskalieren statt raten**, wenn es um Sicherheit, Datenschutz oder Geld geht (Abschnitt 7).

---

## 2. Support-Kanal

Wähle bewusst wenige Kanäle, die du wirklich bedienen kannst. Je mehr Kanäle, desto mehr Pflege.

**Welcher Kanal passt?** (Entscheidung eintragen)

| Kanal | Vorteile | Nachteile | Nutzen wir? |
|---|---|---|---|
| **E-Mail an eine eigene Support-Adresse** (z. B. `hilfe@…`, nicht deine private Adresse) | einfach, nachvollziehbar, kein weiterer Dienst nötig | Spam; Betrugsversuche per E-Mail | ☐ ja ☐ nein |
| **Kontaktformular in der App** | strukturierte Angaben (Version, Gerät) möglich | Missbrauch/Spam → Rate-Limit nötig (Regel 4.1), Eingabeprüfung (Regel 5.1) | ☐ ja ☐ nein |
| **Hilfe-Seite / FAQ** | entlastet dich, rund um die Uhr | muss gepflegt werden | ☐ ja ☐ nein |
| **Ticket-System / Helpdesk-Dienst** | Übersicht, Vorlagen, Teamarbeit | Kosten; Datenschutz: Auftragsverarbeitung (`templates/auftragsverarbeiter-liste.md`) | ☐ ja ☐ nein |
| **Chat / Community / soziale Medien** | schnell, öffentlich | schwer zu schützen; Nutzer posten Sensibles öffentlich; Moderationsaufwand | ☐ ja ☐ nein |
| **Telefon** | persönlich | Aufwand, Betrugsrisiko (Anrufer gibt sich als Nutzer aus) | ☐ ja ☐ nein |
| **App-Store-Bewertungen** | – | Nicht als Support-Kanal geeignet, aber lesen und freundlich auf den Support-Kanal verweisen | beobachten |

**Datenschutz-Check für den Kanal:**
- [ ] Der Kanal und jeder Dienst dahinter steht im Verarbeitungsverzeichnis und in der Datenschutzerklärung (`templates/verarbeitungsverzeichnis.md`, `templates/datenschutzerklaerung-geruest.md`)
- [ ] Bei externem Dienst: Auftragsverarbeitungsvertrag liegt vor, Speicherort geklärt
- [ ] Aufbewahrungsdauer für Support-Korrespondenz festgelegt und im Löschkonzept eingetragen (`templates/loeschkonzept.md`): …
- [ ] Support-Postfach ist mit 2FA geschützt; Zugriff nur für die dafür vorgesehenen Personen
- [ ] Impressum/Kontaktangaben in der App stimmen mit dem Kanal überein (Pflichten siehe [Überblick Recht in der EU](../guides/recht-eu-ueberblick.md))

**Support-Adresse:** … · **Zuständig:** … · **Vertretung:** …

---

## 3. Antwortzeiten – deine Entscheidung

Hier steht, was **du** zusagen kannst. Sage nur zu, was du hältst – ein ehrliches „Wir antworten in der Regel innerhalb von …“ ist besser als ein gebrochenes Versprechen. Rechtlich vorgeschriebene Fristen (z. B. für Auskunftsanfragen nach DSGVO) liegen davon unabhängig; sie stehen im [Überblick Recht in der EU](../guides/recht-eu-ueberblick.md).

| Art der Anfrage | Erste Antwort bis (deine Zusage) | Lösung angestrebt bis | Wer |
|---|---|---|---|
| Allgemeine Frage | … | … | … |
| Fehler / „App geht nicht“ | … | … | … |
| Zahlungsproblem | … | … | … |
| Missbrauchsmeldung (Betrug, Belästigung, verbotene Inhalte) | … (kurz halten, siehe Abschnitt 6) | … | … |
| Verdacht auf Sicherheitslücke / Datenleck | **sofort an Einsatzleitung** laut `templates/incident-plan.md` | … | … |
| Datenschutzanfrage (Auskunft, Löschung, Berichtigung, Export) | … (gesetzliche Fristen beachten, nachschlagen) | … | … |
| Feedback / Funktionswunsch | … | – | … |

**Erreichbarkeit:** Support-Zeiten: … (z. B. Werktage) · Abwesenheitsnotiz mit Hinweis auf Hilfe-Seite und – bei Sicherheitsfragen – wohin man sich wenden kann.

---

## 4. Standardantworten

Textbausteine sparen Zeit und verhindern Fehler. Immer persönlich anpassen, nie Daten anderer Personen einfügen. Platzhalter in `<…>`. Die Texte sind Vorschläge – Details (Fristen, Wege) an deine App und an die Rechtsvorgaben anpassen.

### 4.1 Konto gelöscht / Löschwunsch

*Wenn der Nutzer sein Konto löschen will:*
> Hallo <Name>,
> du kannst dein Konto in der App unter <Menüpfad> selbst löschen. Dabei werden deine personenbezogenen Daten gelöscht <Hinweis auf Löschkonzept: z. B. „Sicherungskopien werden innerhalb der Backup-Frist von <Frist laut Löschkonzept> ebenfalls entfernt“>. Das lässt sich nicht rückgängig machen. Wenn du vorher eine Kopie deiner Daten möchtest, kannst du sie unter <Menüpfad> exportieren. Falls du es nicht selbst erledigen kannst, schreibe uns bitte von der E-Mail-Adresse, mit der du dich angemeldet hast, kurz zurück – wir prüfen dann deine Identität (siehe unten) und löschen das Konto für dich.

*Wenn der Nutzer sagt, sein Konto sei weg/gelöscht:*
> Hallo <Name>,
> wir haben dein Konto <nicht gefunden / als gelöscht gekennzeichnet>. <Sachlicher Grund, falls bekannt: z. B. Löschung durch dich am <Datum>.> Wenn du das nicht veranlasst hast, melde dich bitte umgehend; wir prüfen dann, ob jemand anderes Zugriff hatte. Wir können gelöschte Daten nur wiederherstellen, wenn <ehrliche Aussage laut Backup-Konzept>.

*Wichtig:* Nur auf Anfrage der **berechtigten Person** löschen (Identität prüfen). Löschung dokumentieren (wer, wann, welcher Weg). Auch Dateien, Daten bei Dienstleistern und – nach Ablauf der Backup-Frist – Backups (Regel 7.3).

### 4.2 Datenauskunft / Datenexport

> Hallo <Name>,
> du hast um Auskunft zu deinen bei uns gespeicherten Daten gebeten. Die wichtigsten Daten kannst du in der App unter <Menüpfad> selbst exportieren. Für eine vollständige Auskunft prüfen wir zunächst deine Identität: Bitte beantworte <Prüffrage laut Abschnitt 5> bzw. bestätige die Anfrage über den Link, den wir an deine hinterlegte E-Mail-Adresse senden. Danach erhältst du die Auskunft innerhalb der gesetzlichen Frist <Frist aus dem Rechts-Überblick eintragen> <über einen sicheren Weg, z. B. Download-Link, der nach <Zeit> abläuft>.

*Wichtig:* Datenexport nur für den angemeldeten Nutzer selbst (Regel 7.4), nie als unverschlüsselter Anhang an unbestätigte Adressen. Frist, Umfang, Form und Ausnahmen im [Überblick Recht in der EU](../guides/recht-eu-ueberblick.md) nachlesen; im Zweifel Datenschutz-Fachperson. Anfragen mit Eingangsdatum dokumentieren.

### 4.3 Fehlermeldung / „Die App funktioniert nicht“

> Hallo <Name>,
> danke für deine Meldung und dass du dir die Zeit genommen hast. Das tut uns leid. Damit wir den Fehler finden, helfen uns diese Angaben:
> 1. Was wolltest du tun, und was ist stattdessen passiert? (Ein Screenshot hilft – bitte ohne persönliche Inhalte.)
> 2. Wann ist es passiert (Datum, Uhrzeit, Zeitzone)?
> 3. Welches Gerät und welche App-/Browser-Version nutzt du?
> Bitte schicke uns **keine Passwörter oder Codes**. Bis wir den Fehler behoben haben, kannst du es mit <Umgehung> versuchen. Wir melden uns, sobald wir mehr wissen.

*Intern:* Meldung im Ticket mit Version und Zeitpunkt festhalten; gleiche Meldungen bündeln; Häufung = möglicher Vorfall (Abschnitt 7). Fehlerdaten im Fehler-Tracking ohne personenbezogene Inhalte (Regel 7.2).

### 4.4 Zahlungsproblem

> Hallo <Name>,
> danke für deine Nachricht. Wir können Zahlungen nur über <Zahlungsanbieter> abwickeln und sehen **keine Kartendaten** (Regel 8.3). Bitte prüfe zuerst, ob <typische Ursachen: Zahlung abgelehnt, Bank-Freigabe, abgelaufene Karte>. Nenne uns bitte das Datum, den Betrag und die Bestellnummer/Belegnummer – **nicht** die Kartennummer. Wir prüfen die Zahlung bei <Zahlungsanbieter> und melden uns. Freischaltungen erfolgen erst nach bestätigter Zahlung durch den Anbieter (Regel 8.1); falls du bezahlt hast, aber nichts freigeschaltet ist, kann das kurz dauern. <Hinweis auf Erstattung/Kündigung laut AGB und Widerrufsrecht – Details nach Rechtsüberblick, nicht erfinden.>

*Intern:* Zahlungsstatus nur beim Zahlungsanbieter prüfen; nie manuell freischalten ohne bestätigte Zahlung (Regel 8.1) – Ausnahmen dokumentieren (`E-…`). Doppelabbuchung → Erstattung über den Anbieter. Auffällige Häufung → Vorfall prüfen.

### 4.5 Missbrauchsmeldung (Betrug, Belästigung, rechtswidrige Inhalte, gekapertes Konto)

> Hallo <Name>,
> danke, dass du uns das meldest. Wir nehmen das ernst und prüfen es. Damit wir schnell handeln können, brauchen wir: den Ort bzw. Link des Inhalts, Datum/Uhrzeit und kurz, worum es geht. Bitte schicke uns keine Passwörter. <Bei Gefahr für Leib und Leben: Bitte wende dich sofort an Polizei/Notruf.> Wir informieren dich, sobald wir eine Entscheidung getroffen haben. Aus Datenschutzgründen können wir dir nicht immer mitteilen, welche Maßnahmen wir gegenüber anderen Nutzern ergriffen haben.

*Intern:* Zuerst sichern (Screenshot, Link, Zeitpunkt), dann Inhalt/Konto vorläufig sperren, wenn offensichtlich nötig; dokumentieren (wer, wann, warum). Rechtswidrige Inhalte: besondere Pflichten je nach Art der App – im [Überblick Recht in der EU](../guides/recht-eu-ueberblick.md) nachsehen, im Zweifel Fachperson. Bei **gekapertem Konto**: Sitzungen beenden, Passwort-Reset erzwingen, 2FA prüfen (siehe `templates/incident-plan.md`, Abschnitt 5).

### 4.6 Passwort vergessen / Anmeldung nicht möglich

> Hallo <Name>,
> bitte nutze in der App „Passwort vergessen“. Du bekommst dann eine E-Mail mit einem Link, der nur kurz gültig ist. Wir können dein Passwort nicht einsehen und werden **nie** danach fragen. Kommt keine E-Mail, prüfe den Spam-Ordner und die eingegebene Adresse. Wenn es weiterhin nicht klappt, schreibe uns von deiner angemeldeten Adresse – wir prüfen dann deine Identität.

*Intern:* Kein manuelles Setzen eines Passworts per Support; kein Versenden von Passwörtern. Antworten dürfen nicht verraten, ob ein Konto existiert (keine Nutzer-Enumeration, Regel 3.4) – gilt auch für die Support-Antwort auf Anfragen von Fremden.

### 4.7 Allgemeine Eingangsbestätigung

> Hallo <Name>,
> danke für deine Nachricht. Sie ist bei uns angekommen. Wir antworten in der Regel innerhalb von <deine Zusage aus Abschnitt 3>. Bitte schicke uns keine Passwörter oder Zahlungsdaten. Bei dringenden Sicherheitsfragen: <Hinweis>.

### 4.8 Nicht umsetzbarer Wunsch

> Hallo <Name>,
> danke für deinen Vorschlag. <Funktion> setzen wir im Moment nicht um, weil <ehrliche, kurze Begründung>. Wir halten ihn trotzdem fest und prüfen ihn bei der nächsten Planung. <Alternative, falls vorhanden>.

---

## 5. Identität prüfen

Wer Kontodaten erhalten, ändern oder löschen will, muss belegen, dass er der Kontoinhaber ist. Je sensibler die Aktion, desto stärker die Prüfung (vgl. Stufen in `AGENTS.md` Abschnitt 5).

**Grundsatz: Der Nutzer authentisiert sich in der App oder über die hinterlegte E-Mail-Adresse – nicht dadurch, dass er Details nennt, die ein Betrüger auch kennen könnte.**

| Aktion | Mindestprüfung |
|---|---|
| Allgemeine Frage ohne Kontobezug | keine |
| Auskunft über das Konto (ohne Inhalte) | Anfrage von der hinterlegten E-Mail-Adresse |
| Änderung der E-Mail-Adresse, Konto löschen, Datenauskunft/-export, Zahlungsänderungen | Bestätigung über die **App** (erneute Anmeldung) oder einen **Bestätigungslink an die hinterlegte Adresse**; nicht allein anhand einer Anfrage von einer anderen Adresse |
| Konto übernommen / Zugang verloren (keine hinterlegte Adresse mehr erreichbar) | Wiederherstellungsweg laut Konzept (Phase 15); ggf. mehrere unabhängige Nachweise; **kein** Ausweis per E-Mail ohne Notwendigkeit; im Zweifel ablehnen und erklären warum |
| Anfrage eines Dritten „im Auftrag“ (Angehörige, Anwälte, Behörden) | Vollmacht bzw. gesetzliche Grundlage schriftlich prüfen; Fachperson fragen |

**Warnzeichen für Betrugsversuche:** große Eile und Druck („sofort, sonst …“), andere Absenderadresse als hinterlegt, Bitte um Umgehung der normalen Wege, ungewöhnliche Wünsche (E-Mail-Adresse ändern + Passwort zurücksetzen), Berufung auf Autorität. Bei Warnzeichen: nicht handeln, Rückfrage über den **bekannten** Weg, im Zweifel eskalieren (Abschnitt 7).

**Verboten:** Passwörter erfragen oder nennen, Codes (2FA, Wiederherstellung) erfragen, Konten ohne Nachweis übergeben, Zugangsdaten per E-Mail senden.

**Prüfen dokumentieren:** Wie wurde geprüft, wer hat entschieden, wann – ohne das Ergebnis der Prüfung selbst (z. B. keine Ausweisdaten) dauerhaft zu speichern, falls nicht nötig.

---

## 6. Eskalation – wann an wen

| Situation | Sofort an | Dokument |
|---|---|---|
| Nutzer berichtet, **fremde Daten** gesehen zu haben, oder Verdacht auf Hack/Datenleck | Einsatzleitung, Technik (**S1**) | `templates/incident-plan.md` |
| Mehrere gleichartige Fehlermeldungen innerhalb kurzer Zeit | Technik (mögliche Störung, S2/S3) | `templates/incident-plan.md` |
| Anfrage nach Auskunft/Löschung/Berichtigung/Widerspruch | Datenschutzverantwortliche/n (Frist läuft ab Eingang) | `guides/recht-eu-ueberblick.md` |
| Beschwerde über Datenschutz, Drohung mit Behörde/Anwalt | Datenschutz/Recht | – |
| Verdacht auf Straftat, Gewaltandrohung, Selbstgefährdung | Hinweis auf Polizei/Notruf; Einsatzleitung | – |
| Medien- oder Behördenanfrage | Einsatzleitung/Kommunikation | – |
| Meldung einer Sicherheitslücke von Außenstehenden | Technik, Einsatzleitung; Bestätigung senden, **nichts leugnen**; keine Drohungen | `templates/incident-plan.md` |
| Erstattung, Kulanz, Vertragsfragen über festgelegten Rahmen | Inhaber | – |

**Eskalationsstufen im Support:**

1. **Stufe 1:** Standardfälle (Abschnitt 4) – selbst beantworten.
2. **Stufe 2:** Technische Analyse nötig – an Technik mit Ticket (Version, Zeitpunkt, Schritte, ohne personenbezogene Inhalte).
3. **Stufe 3:** Sicherheit/Datenschutz/Recht – an Einsatzleitung bzw. Datenschutz/Recht.

**Meldung einer Sicherheitslücke:** Richte eine auffindbare Kontaktmöglichkeit für Sicherheitsmeldungen ein (z. B. eigene Adresse oder `security.txt`-Datei auf der Domain – Format und Pflichtfelder vor Einsatz prüfen `[PRÜFEN]`) und lege fest, wie du Melder behandelst: bestätigen, ernst nehmen, nicht verklagen oder einschüchtern. Einzelheiten zu Rechtsfragen bei Sicherheitsforschung: Fachperson.

---

## 7. Statusseite und Kommunikation bei Störungen

Eine **Statusseite** zeigt Nutzern öffentlich, ob die App funktioniert und was bei Störungen los ist. Sie entlastet den Support, weil Nutzer nicht einzeln nachfragen. Für kleine Projekte genügt oft eine einfache Seite oder ein Hinweis auf der Startseite.

**Entscheidungen:**
- Statusseite eigener Dienst / selbst gebaut / nur Hinweis in der App? … (Datenschutz und Kosten prüfen; Auftragsverarbeitung bei externen Anbietern)
- Adresse: … (getrennt von der App hosten, damit sie auch bei Ausfall der App erreichbar bleibt)
- Wer aktualisiert? … (Rolle Kommunikation im Incident-Plan)
- Abonnement für Nutzer (E-Mail/RSS)? ☐ ja ☐ nein – Datenschutz beachten (Einwilligung, Abmeldung)

**Wie du bei Störungen kommunizierst:**

1. **Zügig bestätigen**, dass du das Problem kennst – auch wenn die Ursache unklar ist.
2. **Klar beschreiben**, was nicht funktioniert und was noch geht.
3. **Keine Spekulation über Ursachen**, keine Schuldzuweisung.
4. **Nächstes Update ankündigen** („Wir melden uns spätestens um …“) und halten.
5. **Auflösung bestätigen** und kurz erklären, was passiert ist (Nachbereitung siehe `templates/incident-plan.md`).
6. **Datenschutz/Sicherheit im Zweifel**: Bei möglichem Datenbezug zuerst Einsatzleitung und Datenschutz einbinden (Fristen beachten), dann kommunizieren.

Textbaustein Statusmeldung:
> <Datum, Uhrzeit, Zeitzone> – **Untersuchung:** Wir haben ein Problem mit <Funktion> festgestellt und arbeiten daran. Betroffen: <wer/was>. Umgehung: <falls vorhanden>. Nächstes Update bis: <Zeit>.
> <Uhrzeit> – **Behoben:** <Funktion> funktioniert wieder. Ursache: <kurz, sachlich>. Wir entschuldigen uns für die Unannehmlichkeiten.

**Geplante Wartung:** vorher ankündigen (Zeit, Dauer, Auswirkung), außerhalb der Hauptnutzungszeit, im Release-Plan vermerken (`templates/release-checkliste.md`).

---

## 8. Datenschutz im Support – Kurzliste

- [ ] Support-Mitarbeitende (auch Helfer, Freunde, Dienstleister) sind zur Vertraulichkeit verpflichtet und kennen dieses Playbook
- [ ] Support-Zugänge mit 2FA; keine geteilten Konten
- [ ] Zugriff auf Nutzerdaten nur bei Bedarf, protokolliert (Regel 2.10 für Admin-Aktionen)
- [ ] Keine Nutzerdaten in öffentlichen Kanälen (Foren, Social Media, Issue-Tracker); keine Rohdaten in KI-Werkzeuge ohne geprüfte Grundlage
- [ ] Screenshots von Nutzern enthalten oft persönliche Daten → nach Bearbeitung löschen, nicht in Tickets sammeln, nicht an Dritte weiterleiten
- [ ] Löschfristen für Support-Korrespondenz sind im Löschkonzept eingetragen und werden eingehalten
- [ ] Support-Texte sind neutral, wenn sie automatische Benachrichtigungen enthalten (keine sensiblen Inhalte in Betreffzeilen oder Push-Texten, Regel 7.2)
- [ ] Datenschutzanfragen werden mit Eingangsdatum erfasst und fristgerecht bearbeitet (Frist im [Überblick Recht in der EU](../guides/recht-eu-ueberblick.md) nachsehen)
- [ ] Hinweis auf der Hilfe-Seite: „Wir fragen niemals nach Passwörtern oder Codes.“

---

## 9. Lernen aus dem Support (Feedback-Schleife)

Support ist die wichtigste Informationsquelle für die Weiterentwicklung (Phase 24).

- [ ] Alle Anfragen werden mit einer **Kategorie** erfasst (Fehler, Bedienung unklar, Funktionswunsch, Zahlung, Datenschutz, Missbrauch, Sicherheit)
- [ ] Regelmäßige Auswertung (Takt in Phase 24 festlegen): Welche Kategorien häufen sich? Was zeigt, dass eine Funktion unklar oder fehlerhaft ist?
- [ ] Häufige Fragen wandern in die Hilfe-Seite/FAQ
- [ ] Wiederkehrende Fehler → `TASK-…` und Test ergänzen
- [ ] Bedienprobleme → Rückfluss in Mockups/User-Flows (Phasen 6 bis 8)
- [ ] Sicherheits- und Datenschutzthemen → Bedrohungsmodell bzw. Datenschutzdokumentation anpassen
- [ ] Zahlen aus dem Support nur aggregiert für die Erfolgsmessung verwenden (keine personenbezogene Auswertung ohne Grundlage)

| Kategorie | Anzahl im Zeitraum | Auffälligkeit | Maßnahme (TASK-…) |
|---|---|---|---|
| | | | |

---

## 10. Pflege des Playbooks

**Stand:** JJJJ-MM-TT · **Nächste Überprüfung:** JJJJ-MM-TT (zusammen mit der Wartungsroutine aus Phase 24)
- [ ] Standardantworten gelesen: stimmen Menüpfade, Fristen und Anbieter noch?
- [ ] Kontaktwege und Zuständigkeiten aktuell?
- [ ] Neue Funktionen seit dem letzten Mal → neue Standardantworten nötig?
- [ ] Rechts-Überblick auf Änderungen geprüft (`guides/recht-eu-ueberblick.md`)

---

## Quellen

Dieses Playbook enthält bewusst keine externen Tatsachenbehauptungen über Fristen oder Rechtslagen; sie stehen mit Belegen im [Überblick Recht in der EU](../guides/recht-eu-ueberblick.md).

| Aussage | URL | Art | Prüfdatum |
|---|---|---|---|
| Format und Pflichtfelder einer `security.txt`-Datei vor dem Einsatz prüfen `[PRÜFEN]` | – (noch nicht verifiziert) | Annahme | 2026-10-14 |
