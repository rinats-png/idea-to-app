# Datenschutzerklärung – Gerüst für <App-Name>

> **Wofür:** Ausgangspunkt für die Datenschutzerklärung (Informationspflichten nach Art. 13/14 DSGVO). **Wann:** in Phase 16, überarbeitet nach jeder Änderung an Datenfluss, Diensten oder Funktionen (Phase 13/15) und vor dem Launch (Phase 23). **Wer füllt aus:** die KI als Entwurf, der Betreiber ergänzt die echten Angaben, eine Fachperson prüft bei Risikostufe 3.

> ⚠️ **Das ist nur ein Gerüst, keine fertige Datenschutzerklärung und keine Rechtsberatung.** Jeder Abschnitt muss mit dem **tatsächlichen Datenfluss** abgeglichen werden (`projekte/<slug>/11-daten.md`, `13-…`, `15-…`, Verarbeitungsverzeichnis, Auftragsverarbeiter-Liste). Eine Datenschutzerklärung, die nicht zur Technik passt, ist ein eigener Verstoß. Abschnitte, die nicht zutreffen, **streichen**; fehlende Verarbeitungen **ergänzen**. Rechtsgrundlagen sind Vorschläge und mit **[PRÜFEN]** zu bestätigen. Einführung: `guides/recht-eu-ueberblick.md` (Abschnitt 3).

> *Schreibweise:* Kursiv in Klammern = Ausfüllhinweis (vor Veröffentlichung löschen). `<…>` = Platzhalter. Schreibe verständlich, kurz, ohne Fachchinesisch – die Erklärung richtet sich an normale Nutzer.

---

## Abgleich-Checkliste (vor dem Schreiben)

- [ ] Alle Daten aus Phase 11 sind in einem Abschnitt erwähnt
- [ ] Jeder externe Dienst aus Phase 13/15 steht im Abschnitt „Empfänger“ und in der Auftragsverarbeiter-Liste
- [ ] Jede Verarbeitung hat eine Zeile im Verarbeitungsverzeichnis (gleiche Zwecke, gleiche Rechtsgrundlagen)
- [ ] Speicherdauern stimmen mit dem Löschkonzept überein
- [ ] Alle Cookies/Speicher-Zugriffe sind aufgeführt (Einwilligungsbanner ↔ Erklärung)
- [ ] Kontaktweg für Betroffenenanfragen existiert wirklich und wird gelesen

---

## 1. Verantwortlicher und Kontakt

*Wer entscheidet über die Verarbeitung? Gleiche Angaben wie im Impressum.*

- **Verantwortlich für die Datenverarbeitung in <App-Name>:** `<Name / Firma>`, `<Anschrift>`
- **Kontakt:** `<E-Mail>`
- **Datenschutzbeauftragte(r)** *(nur falls benannt; sonst Zeile streichen)*: `<Name, Kontakt>`
- *(Bei Betreiber außerhalb der EU: Vertreter in der EU nach Art. 27 DSGVO nennen.)*

## 2. Überblick: Welche Daten wir verarbeiten und wozu

*Ein kurzer Überblick in Tabellenform hilft Nutzern. Eine Zeile pro Zweck, abgeleitet aus dem Verarbeitungsverzeichnis.*

| Zweck | Daten | Rechtsgrundlage *[PRÜFEN]* | Speicherdauer |
|---|---|---|---|
| Bereitstellung der App / Hosting | `<z. B. IP-Adresse, Zeitstempel, Gerätetyp>` | `<z. B. Art. 6 Abs. 1 Buchst. b oder f DSGVO>` | `<z. B. 7 Tage>` |
| Konto und Anmeldung | `<E-Mail, Passwort-Hash, Konto-ID>` | `<Art. 6 Abs. 1 Buchst. b>` | `<bis Kontolöschung>` |
| `<Funktion, z. B. Notizen>` | `<Inhalte der Nutzer>` | `<Art. 6 Abs. 1 Buchst. b>` | `<bis zur Löschung durch Nutzer>` |
| `…` | `…` | `…` | `…` |

## 3. Hosting und Server

*Wo läuft die App? Wer betreibt die Server?*

- Unser Hosting-Anbieter ist `<Anbieter, Land/Region>`. Er verarbeitet Daten in unserem Auftrag (Auftragsverarbeitung, Art. 28 DSGVO).
- Beim Aufruf der App fallen technisch notwendige Verbindungsdaten an (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Browser/Gerätetyp) – gespeichert in Server-Logs für `<Dauer aus Löschkonzept>`, um den Betrieb zu sichern und Missbrauch abzuwehren.
- *Rechtsgrundlage:* `<z. B. berechtigtes Interesse an sicherem Betrieb, Art. 6 Abs. 1 Buchst. f — [PRÜFEN]>`
- *Serverstandort / Drittland:* `<EU-Region ja/nein; falls Drittland: Grundlage nach Art. 44 ff. DSGVO>`

## 4. Konto, Anmeldung und Sicherheit

*Nur falls es Nutzerkonten gibt. Login-Anbieter angeben, falls einer genutzt wird.*

- Zum Anlegen eines Kontos verarbeiten wir `<E-Mail-Adresse, ggf. Name, Passwort (nur als nicht umkehrbarer Hash gespeichert)>`.
- Login über `<Anbieter, z. B. Apple/Google, falls Social-Login>` — dabei erhält `<Anbieter>` `<Daten>`.
- Zur Absicherung (Missbrauchsschutz) verarbeiten wir `<IP-Adresse, Zeitpunkt fehlgeschlagener Anmeldungen>` für `<Dauer>`.
- *Rechtsgrundlage:* Vertragserfüllung (Konto), berechtigtes Interesse (Sicherheit) `[PRÜFEN]`.

## 5. Inhalte, die du in der App einträgst

*Beschreibe jede Funktion, bei der Nutzer Inhalte erzeugen. Bei Dateien/Fotos: Metadaten (Standort in Bildern!) erwähnen. Bei sichtbar-für-andere-Inhalten: wer kann sie sehen?*

- `<Funktion>`: gespeichert werden `<Daten>`. Sichtbar für `<nur dich / andere Nutzer / öffentlich>`.
- **Besondere Kategorien (Art. 9 DSGVO)** *(nur falls zutreffend, z. B. Gesundheit)*: Wir verarbeiten diese Daten **nur mit deiner ausdrücklichen Einwilligung** (Art. 9 Abs. 2 Buchst. a). Du kannst sie jederzeit widerrufen. `<Konsequenz des Widerrufs>`.

## 6. Zahlung

*Nur falls es Zahlungen gibt. Wichtig: Wir verarbeiten selbst keine Kartendaten, sondern der Zahlungsanbieter.*

- Zahlungen wickelt `<Zahlungsanbieter>` ab. Karten-/Kontodaten gelangen **nicht** zu uns. Wir erhalten `<Zahlungsstatus, Kunden-ID, Betrag, Zeitpunkt>`.
- *Rechtsgrundlage:* Vertragserfüllung; gesetzliche Aufbewahrungspflichten für Rechnungen (Art. 6 Abs. 1 Buchst. c) `[PRÜFEN]`.
- *Speicherdauer:* gesetzliche Aufbewahrungsfristen `[PRÜFEN: Dauer aus Steuer-/Handelsrecht]`.
- *Bei Käufen über App-Store:* Abrechnung über Apple/Google nach deren Bedingungen; wir erhalten `<Daten>`.

## 7. E-Mails und Benachrichtigungen

*Transaktionsmails (Bestätigung, Passwort-Zurücksetzen) und Marketing trennen.*

- **Service-E-Mails** (z. B. Bestätigung, Passwort zurücksetzen, Sicherheitswarnungen) versenden wir über `<E-Mail-Dienst, Land>`. Rechtsgrundlage: Vertragserfüllung/berechtigtes Interesse `[PRÜFEN]`.
- **Newsletter/Marketing** *(nur mit Einwilligung, Double-Opt-in)*: Wir senden sie nur, wenn du eingewilligt hast. Abmeldung jederzeit über `<Link in jeder Mail / Einstellungen>`. Wir speichern `<Zeitpunkt und Nachweis der Einwilligung>`.
- **Push-Benachrichtigungen** *(falls vorhanden)*: Versand über `<Apple/Google/anderer Dienst>`; dazu wird eine Geräte-Kennung verarbeitet. Aktivierung nur mit deiner Zustimmung auf dem Gerät.

## 8. Analytics, Reichweitenmessung und Absturzberichte

*Am einfachsten: keine Analytics. Dann diesen Abschnitt auf einen Satz kürzen.*

- **Variante A – keine Analytics:** „Wir setzen keine Analyse- oder Tracking-Werkzeuge ein.“
- **Variante B – ohne Einwilligungspflicht** *(nur wenn nachweislich kein Speichern/Auslesen auf dem Gerät und keine Weitergabe an Dritte)*: `<Anbieter, Zweck, welche Daten, Rechtsgrundlage Art. 6 Abs. 1 Buchst. f [PRÜFEN], Speicherdauer>`.
- **Variante C – mit Einwilligung:** `<Anbieter, Zwecke, Daten, Drittland>`. Einwilligung (§ 25 TDDDG, Art. 6 Abs. 1 Buchst. a DSGVO) über den Einwilligungsbanner; Widerruf jederzeit unter `<Einstellungen>`.
- **Absturzberichte/Fehler-Tracking** *(z. B. Sentry)*: `<Anbieter, Region, welche Daten (keine Passwörter/Tokens/Inhalte), Speicherdauer>`.

## 9. Cookies, lokaler Speicher und ähnliche Technologien

*Alle Speicherzugriffe auf dem Gerät auflisten (siehe `guides/recht-eu-ueberblick.md` Abschnitt 4).*

| Name / Zweck | Art (Cookie, Local Storage, SDK) | Erforderlich? | Dauer | Anbieter |
|---|---|---|---|---|
| `<Sitzung / Login>` | `<Cookie>` | ja (ohne Einwilligung) | `<Sitzungsende>` | wir |
| `<Cookie-Entscheidung>` | `<Local Storage>` | ja | `<6 Monate>` | wir |
| `<Analytics>` | `<Cookie>` | nein – nur mit Einwilligung | `<…>` | `<…>` |

Du kannst deine Auswahl jederzeit unter `<Link „Cookie-Einstellungen“>` ändern.

## 10. KI-Funktionen

*Nur falls die App KI nutzt. Hier zusammen mit dem Hinweis nach der KI-Verordnung (Art. 50).*

- In `<Funktion>` nutzen wir KI von `<Anbieter, Land/Region>`. Du wirst in der App ausdrücklich darauf hingewiesen, dass du mit einer KI interagierst bzw. dass Inhalte KI-erzeugt sind.
- An den KI-Anbieter übermitteln wir `<welche Daten, z. B. Eingabetext>`. Wir übermitteln **nicht** `<Daten, die ausgeschlossen sind>`.
- Der Anbieter `<nutzt / nutzt nicht>` die Daten zum Training seiner Modelle `[PRÜFEN in Anbieterbedingungen]`.
- Es erfolgen `<keine / folgende>` automatisierten Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung (Art. 22 DSGVO). `<Falls ja: Logik, Bedeutung, Folgen, Möglichkeit zur menschlichen Überprüfung>`
- *Rechtsgrundlage:* `<Vertragserfüllung / Einwilligung / berechtigtes Interesse — [PRÜFEN]>`

## 11. Empfänger und Auftragsverarbeiter

*Alle Dienstleister aus `templates/auftragsverarbeiter-liste.md` (Name, Zweck, Standort). Eine Zeile je Dienst.*

| Empfänger | Zweck | Sitz / Verarbeitungsort | Auftragsverarbeitung (AVV)? |
|---|---|---|---|
| `<Hosting-Anbieter>` | Server, Datenbank | `<Land>` | ja |
| `<E-Mail-Dienst>` | Versand | `<Land>` | ja |
| `<KI-Anbieter>` | Funktion `<…>` | `<Land>` | ja |
| `<Behörden / Steuerberater>` | gesetzliche Pflichten | `<Land>` | eigenständig verantwortlich |

Wir geben Daten nur weiter, wenn dies für die genannten Zwecke nötig ist, du eingewilligt hast oder wir gesetzlich dazu verpflichtet sind.

## 12. Übermittlung in Länder außerhalb der EU/des EWR

*Nur falls zutreffend. Pro Anbieter die Grundlage nennen. Aktuellen Stand prüfen.*

- Soweit Daten in ein Land außerhalb der EU/des EWR übermittelt werden (`<Land>`), geschieht das auf Grundlage `<Angemessenheitsbeschluss / EU-US Data Privacy Framework (Zertifizierung des Anbieters geprüft am <Datum>) / Standardvertragsklauseln der EU-Kommission>` (Art. 44 ff. DSGVO) `[PRÜFEN]`.
- Eine Kopie der Garantien erhältst du auf Anfrage unter `<Kontakt>`.

## 13. Speicherdauer

*Kurz, aber konkret. Verweis auf Löschkonzept. Keine Floskel „solange nötig“ ohne Kriterium.*

- Kontodaten und deine Inhalte speichern wir, bis du dein Konto löschst; danach werden sie innerhalb von `<Frist>` gelöscht.
- Server-Logs: `<Dauer>`. Backups: gelöschte Daten verschwinden dort spätestens nach `<Backup-Aufbewahrungsfrist>`.
- Daten, die wir aus gesetzlichen Gründen aufbewahren müssen (z. B. Rechnungen), speichern wir bis zum Ablauf der Frist (`<Dauer>`).

## 14. Deine Rechte

*Alle Rechte nennen, mit Kontaktweg. Antwortfrist nennen.*

Du hast gegenüber uns das Recht auf:

- **Auskunft** über deine gespeicherten Daten (Art. 15 DSGVO)
- **Berichtigung** unrichtiger Daten (Art. 16)
- **Löschung** (Art. 17)
- **Einschränkung** der Verarbeitung (Art. 18)
- **Datenübertragbarkeit** – du erhältst deine Daten in einem gängigen, maschinenlesbaren Format (Art. 20); `<in der App unter „Daten exportieren“>`
- **Widerspruch** gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21)
- **Widerruf** erteilter Einwilligungen jederzeit mit Wirkung für die Zukunft (Art. 7 Abs. 3)

So übst du sie aus: `<in der App unter … / per E-Mail an …>`. Wir antworten in der Regel innerhalb **eines Monats** (Art. 12 Abs. 3 DSGVO) `[PRÜFEN]`. Wir können einen Identitätsnachweis verlangen.

**Beschwerderecht:** Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO), z. B. bei der Behörde deines Wohnorts oder an unserem Sitz: `<Name und Kontakt der zuständigen Aufsichtsbehörde>`.

## 15. Verpflichtung zur Bereitstellung und automatisierte Entscheidungen

*Muss der Nutzer Daten angeben? Was passiert, wenn er es nicht tut?*

- Für `<Funktion>` sind `<Angaben>` erforderlich. Ohne sie können wir `<Konsequenz>`.
- Eine ausschließlich automatisierte Entscheidung mit Rechtswirkung findet `<nicht statt / wie in Abschnitt 10 beschrieben>`.

## 16. Kinder und Jugendliche

*Nur falls relevant (Phase 3, Phase 16 Q5).*

- Unser Angebot richtet sich `<nicht an Kinder unter 16 Jahren / an …>`. `<Falls an Kinder: Einwilligung der Eltern, kindgerechte Erklärung>`.

## 17. Sicherheit

*Kurz und ehrlich, ohne Versprechen wie „absolut sicher“. Keine sicherheitsrelevanten Details, die Angreifern helfen.*

- Wir schützen deine Daten durch angemessene technische und organisatorische Maßnahmen, z. B. verschlüsselte Übertragung, Zugriffsbeschränkungen und regelmäßige Aktualisierungen (Art. 32 DSGVO).

## 18. Änderungen dieser Erklärung

- Stand: `<Datum>`, Version `<Nr.>`. Bei wesentlichen Änderungen informieren wir dich `<in der App / per E-Mail>`.

---

## Hinweise für die KI (nicht in die fertige Erklärung übernehmen)

1. Keine Sätze erfinden, die nicht zur Technik passen. Lieber `[PRÜFEN]` als falsch.
2. Rechtliche Aussagen (Artikel, Fristen) mit Quelle in `QUELLEN.md` oder `[PRÜFEN]`.
3. Nach jeder Änderung in Phase 13/15 diese Erklärung als `⚠️ prüfen` markieren (`AGENTS.md` Abschnitt 10).
4. Kein Copy-Paste aus Generatoren ohne Abgleich – Generatoren kennen deinen Datenfluss nicht.
5. Verlinke die Erklärung in der App (leicht erreichbar) und in den App-Store-Einträgen (`guides/appstore-veroeffentlichung.md`).
