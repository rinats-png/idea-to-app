# Veröffentlichung in den Stores: Apple App Store, Google Play, Microsoft Store, Chrome Web Store

> Für alle, die ihre App in einem Store anbieten wollen: Was ist vorher nötig, was kostet es, woran scheitern Einreichungen, wie testet man vorab, und wie läuft ein Update?
> Die KI nutzt diesen Leitfaden in **Phase 13** (Stack und Veröffentlichungsweg), **Phase 15** (Login und Käufe), **Phase 16** (Recht, Datenschutz-Angaben), **Phase 17** (Gebühren und Provisionen), **Phase 22/23** (Handoff und Launch) und **Phase 24** (Updates).

> **Wichtig:** Stores ändern Gebühren, Richtlinien und Fristen häufig. Alle Aussagen unten sind mit **Quelle und Prüfdatum 2026-10-14** im Abschnitt [Quellen](#quellen) belegt oder mit `[PRÜFEN]` markiert. Was mit `[PRÜFEN]` steht, konnte nicht eindeutig bestätigt werden: Vor der Entscheidung bitte auf der offiziellen Seite nachsehen. Das hier ist **keine Rechtsberatung**; bei Risikostufe 3 (z. B. Kinder, Gesundheit, Zahlungen) empfiehlt sich eine Fachperson.
> Welche App-Art überhaupt zu deiner Idee passt, klärt `guides/plattformen.md`. Zahlenwerte zur Sicherheit stehen ausschließlich in `security/standardwerte.md`.

---

## Inhalt

1. [Überblick: Die vier Stores im Vergleich](#1-überblick-die-vier-stores-im-vergleich)
2. [Gemeinsame Vorbereitung für alle Stores](#2-gemeinsame-vorbereitung-für-alle-stores)
3. [Apple App Store](#3-apple-app-store)
4. [Google Play](#4-google-play)
5. [Microsoft Store](#5-microsoft-store)
6. [Chrome Web Store](#6-chrome-web-store)
7. [Alternative Wege ohne Store](#7-alternative-wege-ohne-store)
8. [Provisionen, Gebühren und In-App-Käufe](#8-provisionen-gebühren-und-in-app-käufe)
9. [Datenschutz-Angaben (Privacy Labels, Data Safety)](#9-datenschutz-angaben-privacy-labels-data-safety)
10. [Typische Ablehnungsgründe und wie du sie vermeidest](#10-typische-ablehnungsgründe-und-wie-du-sie-vermeidest)
11. [Screenshots und Metadaten](#11-screenshots-und-metadaten)
12. [Signierung und Zertifikate](#12-signierung-und-zertifikate)
13. [Zeitplan: Wie früh musst du anfangen?](#13-zeitplan-wie-früh-musst-du-anfangen)
14. [Update-Ablauf](#14-update-ablauf)
15. [Checkliste vor der Einreichung](#15-checkliste-vor-der-einreichung)
16. [Quellen](#quellen)

---

## 1. Überblick: Die vier Stores im Vergleich

| | **Apple App Store** | **Google Play** | **Microsoft Store** | **Chrome Web Store** |
|---|---|---|---|---|
| Für | iPhone, iPad, Mac, Apple Watch u. a. | Android-Handys, Tablets, Wear OS, TV | Windows-Programme | Browser-Erweiterungen für Chrome |
| Entwicklerkonto | Apple Developer Program | Google Play Console | Microsoft Partner Center (Entwicklerkonto) | Chrome Developer Dashboard |
| Kosten Konto | 99 USD pro Jahr (Quelle S-1) | einmalig 25 USD (Quelle S-5) | Laut aktuellem Anmeldeweg keine Registrierungsgebühr für Einzelpersonen und Firmen (Quelle S-9) | einmalige Registrierungsgebühr, Betrag `[PRÜFEN]` (Quelle S-12) |
| Identität | Apple-Konto mit Zwei-Faktor-Anmeldung, Rechtsname; Organisation: Rechtsform, D-U-N-S-Nummer, Webseite (S-2) | Konto mit Zahlungsprofil; Identitäts-/Händlerangaben `[PRÜFEN]` | Ausweis und Selfie bei Einzelpersonen (S-9) | Entwicklerkonto; E-Mail-Adresse später nicht änderbar (S-12) |
| Test vor Veröffentlichung | TestFlight | Interne, geschlossene und offene Tests | Zugang über Paket/Flights `[PRÜFEN]` | Nicht-gelistete oder private Veröffentlichung `[PRÜFEN]` |
| Prüfdauer | Meist unter 24 bis 48 Stunden (Angabe von Apple, kein Versprechen) (S-4) | `[PRÜFEN]` | `[PRÜFEN]` | Meist wenige Tage, bis zu einigen Wochen (S-14) |
| Besonderheit | Strengste inhaltliche Prüfung (Mindestqualität, Konto-Löschung, Login-Optionen) | Test-Pflicht für neue persönliche Konten (S-6) | Kein Mobil-Store | Streng bei Berechtigungen und Datenschutz (S-13) |

**Faustregel für Einsteiger:** Beginne mit der **Web-App/PWA**, wenn du die Idee erst testen willst. Wähle Stores erst, wenn Systemfunktionen oder Auffindbarkeit wirklich wichtig sind. Jede Store-Veröffentlichung kostet Zeit (Prüfung, Pflege) und bringt Pflichten (Datenschutz-Angaben, Konto-Löschung, Updates).

---

## 2. Gemeinsame Vorbereitung für alle Stores

Diese Dinge brauchst du fast immer – **bevor** du eine App einreichst. Sie dauern oft länger als das Programmieren.

| Was | Warum | Wann beginnen |
|---|---|---|
| **Rechtsform klären** (privat oder Firma/Verein) | Das Konto läuft auf den rechtlichen Namen. Der Name erscheint als Anbieter im Store. Wer eine Firma angibt, braucht ggf. Nachweise (Apple: D-U-N-S-Nummer, Webseite; siehe Abschnitt 3). | mind. 2–3 Wochen vor Einreichung |
| **Impressum** und **Datenschutzerklärung** unter eigener Adresse | Alle Stores verlangen eine Datenschutz-URL, Apple zusätzlich einen funktionierenden Support-Link (S-4). Inhalte: `guides/recht-eu-ueberblick.md`, Phase 16. | vor Beginn der Store-Eingaben |
| **Support-Kontakt** (E-Mail, Formular) | Wird im Store angezeigt, wird von Prüfern getestet. | wie oben |
| **Händlerstatus (Trader)** nach EU-Recht | Wer in der EU entgeltlich oder gewerblich anbietet, muss Kontaktdaten öffentlich zeigen; Stores fragen das ab `[PRÜFEN]`. | beim Anlegen des Kontos |
| **Zwei-Faktor-Schutz** auf allen Konten (Store, E-Mail, Code-Repository) | Ein übernommenes Entwicklerkonto kann bösartige Updates an alle Nutzer senden (Regel 3.7 in `security/regeln-fuer-ki.md`). | sofort |
| **Testzugang für Prüfer** (Demo-Konto) | Apple erwartet ein aktives Demo-Konto oder einen voll ausgestatteten Demo-Modus, wenn die App ein Login hat, und dass dein Backend läuft (S-3). | vor Einreichung |
| **Altersfreigabe-Fragebogen** vorbereiten | Inhalte, Chat, nutzergenerierte Inhalte, Werbung, Zufallskäufe werden abgefragt (S-7). | vor Einreichung |
| **Konto-Löschfunktion** bauen | Siehe Abschnitt 10. | schon in Phase 12/15 einplanen |
| **Datenschutz-Angaben** vorbereiten | Inventar aller Daten und Dienste (inklusive Fremd-Bibliotheken). Siehe Abschnitt 9. | schon in Phase 11/16 |
| **Rechtliche Texte der App** (Nutzungsbedingungen, Widerrufsbelehrung bei Käufen) | Je nach Angebot Pflicht (`guides/recht-eu-ueberblick.md`). | vor Launch |
| **Marken- und Namensprüfung** | Name darf keine Rechte Dritter verletzen; Stores lehnen irreführende Namen ab. | früh (Phase 4) |

> Faustregel gegen Ablehnungen: **Reiche nur Fertiges ein.** Apple nennt als häufigsten Grund unvollständige Apps (Abstürze, Platzhalter, fehlende Infos; „über 40 % der ungelösten Probleme“ betreffen Richtlinie 2.1) (S-4).

---

## 3. Apple App Store

### 3.1 Entwicklerkonto

- **Voraussetzung:** Ein Apple-Konto mit eingeschalteter Zwei-Faktor-Anmeldung. Als Einzelperson musst du volljährig (Volljährigkeitsalter deiner Region) sein; dein **rechtlicher Name** wird geprüft und erscheint als Anbietername im Store (S-2).
- **Organisation (Firma, Verein o. Ä.):** Zusätzlich nötig sind
  - eine Rechtsform, die Verträge schließen kann (keine Handelsnamen/Zweigstellen),
  - eine **D-U-N-S-Nummer** (neunstellige Kennung von Dun & Bradstreet; Behörden ausgenommen),
  - eine öffentlich erreichbare, funktionierende Webseite, die zur Organisation gehört,
  - eine E-Mail-Adresse auf der Domain der Organisation,
  - die Befugnis, die Organisation rechtlich zu binden (S-2).
- Wer einen Spitznamen oder Firmennamen statt des echten Namens angibt, riskiert **Verzögerung** bei der Freischaltung (S-2).
- **Kosten:** 99 USD pro Mitgliedsjahr bzw. Gegenwert in Landeswährung. Gemeinnützige Organisationen, Bildungseinrichtungen und Behörden können eine **Gebührenbefreiung** beantragen (S-1, S-2).
- **Dauer der Freischaltung:** Apple nennt auf der Anmeldeseite keine feste Zeit (S-2). Plane bei Organisationen mit mehreren Wochen Puffer `[PRÜFEN]`.

### 3.2 Testverteilung mit TestFlight

- **TestFlight** ist Apples Testdienst. Intern können bis zu 100 Personen mit Zugang zu deinem App Store Connect-Konto testen; extern bis zu 10.000 Personen (S-8).
- Ein Test-Build ist **bis zu 90 Tage** nutzbar, danach nicht mehr verfügbar (S-8).
- Für externe Tester kann eine **Beta-Prüfung** durch Apple nötig sein; der erste Build einer Gruppe wird geprüft, spätere Builds nicht zwingend (S-8).
- Tipp: Beginne mit einem kleinen internen Kreis (Freunde, Team), dann externe Tester. Sammle Rückmeldungen systematisch (`guides/launch-und-auffindbarkeit.md`).

### 3.3 Richtlinien, die Einsteiger oft übersehen

| Thema | Was Apple verlangt (Kurzform) | Quelle |
|---|---|---|
| **Vollständigkeit (2.1)** | Endgültige Version mit vollständigen Metadaten und funktionierenden Links; Platzhalter, leere Webseiten und Abstürze führen zur Ablehnung. Bei Login: Demo-Konto bereitstellen und Backend einschalten. Käufe müssen für Prüfer sichtbar und funktionsfähig sein. | S-3 |
| **Mindestqualität / „zu wenig App“** | Apps, die nur eine Webseite einpacken, Link-Sammlungen sind oder nur wenig Funktionalität oder Inhalt bieten, können abgelehnt werden. | S-4 (Abschnitt „Web clippings…“, „Not enough lasting value“); Richtlinie 4.2 `[PRÜFEN]` |
| **Konto-Löschung (5.1.1(v))** | Wenn man in der App ein Konto anlegen kann, muss man es **in der App** löschen können. Funktionen ohne Konto-Bezug sollen ohne Login nutzbar sein. | S-3 |
| **Login-Optionen (4.8)** | Wer einen Drittanbieter-/Sozial-Login als Hauptlogin anbietet, muss eine gleichwertige Alternative bieten, die nur Name und E-Mail erhebt, die E-Mail verbergen kann und keine Interaktionen für Werbung sammelt. Ausnahmen u. a.: ausschließlich eigenes Kontosystem; Bildungs-/Firmen-Apps mit vorhandenem Konto. | S-3 |
| **In-App-Kauf (3.1.1)** | Digitale Funktionen und Inhalte (Abos, Spielwährung, Premium) müssen über den Apple-Kauf laufen; eigene Mechanismen wie Lizenzschlüssel sind nicht erlaubt. Zufallskäufe müssen Chancen vorab zeigen. Kostenlose Probezeiten (nicht Abo) nur über vorgegebenes Verfahren. Regional gibt es Ausnahmen für Links auf externe Kaufwege. | S-3; regionale Ausnahmen `[PRÜFEN]` |
| **Kinderkategorie (1.3) und Kinderdaten (5.1.4)** | Keine Links nach außen oder Käufe ohne Elternschranke; keine Weitergabe personenbezogener Daten an Dritte; keine Fremd-Analyse und -Werbung (enge Ausnahmen). Apps außerhalb der Kinderkategorie dürfen sich nicht wie Kinder-Apps bezeichnen. | S-3 |
| **Datenschutzerklärung und Einwilligung (5.1.1)** | Link in App Store Connect **und** in der App; Angaben zu Datenarten, Zwecken, Drittanbietern, Speicherdauer und Löschung; Einwilligung vor Erhebung von Nutzungsdaten; Datenminimierung. | S-3 |
| **Privatsphäre-Angaben („App Privacy“)** | Pflichtangaben im App Store Connect, auch zu Fremd-SDKs; müssen aktuell gehalten werden. Siehe Abschnitt 9. | S-10 |
| **Altersfreigabe** | Pflicht; Fragebogen, Apps ohne Einstufung sind nicht veröffentlichbar. | S-7 |
| **Händlerstatus in der EU** | Angabe, ob du als Händler (Trader) auftrittst, und Kontaktdaten `[PRÜFEN]` | – |

### 3.4 Ablauf der Einreichung (grob)

1. Konto freischalten (Abschnitt 3.1), Verträge und Bank-/Steuerangaben im App Store Connect ausfüllen, wenn du Geld verdienen willst `[PRÜFEN]`.
2. App-Eintrag anlegen (Name, Kategorie, Altersfreigabe, Datenschutz-Angaben).
3. Build hochladen (über die Entwicklungsumgebung von Apple oder andere unterstützte Wege) und testen (TestFlight).
4. Store-Seite füllen: Screenshots, Beschreibung, Stichwörter, Support- und Datenschutz-URL, Hinweise für den Prüfer, Demo-Zugang.
5. Zur Prüfung einreichen. Bei Ablehnung steht der Grund (Richtliniennummer) im Resolution Center; behebe ihn und reiche erneut ein, oder antworte sachlich mit Erklärung.
6. Veröffentlichungsart wählen (automatisch, manuell, zu einem Termin) `[PRÜFEN]`.

---

## 4. Google Play

### 4.1 Entwicklerkonto

- **Kosten:** einmalig **25 USD** Registrierungsgebühr; akzeptiert werden bestimmte Karten, **Prepaid-Karten nicht** (S-5).
- **Kontoarten:** Persönliche Konten und Organisationskonten haben unterschiedliche Pflichten. Identitäts- und Telefon-/Adressprüfungen sowie die Händler-Angaben nach EU-Recht werden verlangt `[PRÜFEN]`.
- Achtung: Google plant bzw. führt Prüfverfahren für Entwickler ein, auch für Apps außerhalb von Google Play `[PRÜFEN]`. Aktuellen Stand in der Play Console nachlesen.

### 4.2 Testpflicht für neue persönliche Konten

- Für **persönliche Entwicklerkonten, die nach dem 13. November 2023 angelegt wurden**, gilt: Vor dem Antrag auf Produktionszugang muss ein **geschlossener Test** laufen, mit **mindestens 12 Testern**, die **mindestens 14 Tage durchgehend** angemeldet bleiben. Wer abspringt und wiederkommt, startet die 14 Tage neu. Erst nach Erfüllung und Antrag in der Play Console werden Produktion und Vorregistrierung freigeschaltet (S-6).
- **Wichtig für die Planung:** Das sind mindestens zwei Wochen, nur um in die Produktion zu dürfen. Suche Tester **früh** (Bekannte, Vereine, Nutzergruppen; `guides/launch-und-auffindbarkeit.md`). Die Zahlen können sich ändern: vor Planung erneut auf der Seite prüfen (S-6).
- Organisationskonten sind von dieser Regel laut Seite nicht betroffen (die Seite nennt ausdrücklich persönliche Konten, S-6); den aktuellen Stand für dein Konto in der Play Console prüfen `[PRÜFEN]`.
- **Testspuren:** intern (schnell, kleiner Kreis, ohne Data-Safety-Pflicht, S-11), geschlossen (eingeladene Tester), offen (jeder kann beitreten), Produktion. Die Data-Safety-Angaben müssen für geschlossene/offene Tests und Produktion ausgefüllt sein (S-11).

### 4.3 Richtlinien, die Einsteiger oft übersehen

| Thema | Was Google verlangt (Kurzform) | Quelle |
|---|---|---|
| **Konto-Löschung** | Bei Apps mit Kontoerstellung: **In-App-Weg** zum Löschen von Konto und zugehörigen Daten **und** ein **Web-Link** (funktional, mit App-/Entwicklername), auf dem man die Löschung anfordern kann; die Angaben sind in der Data-Safety-Erklärung zu machen. Nicht-mobile-first-Apps (z. B. Wear OS, TV) brauchen einen leicht auffindbaren Weg außerhalb der App. Aufbewahrung einzelner Daten (Sicherheit, Betrugsschutz, Gesetz) ist zulässig, wenn transparent. | S-15 |
| **Datenschutz-Angaben (Data Safety)** | Für alle Apps Pflicht (außer rein interne Tests, System- und private Apps); muss mit dem tatsächlichen Verhalten übereinstimmen, auch bei Fremdbibliotheken; Datenschutzerklärung als Link zwingend, selbst wenn keine Daten erhoben werden. Verstöße können zu Blockierung von Updates oder Entfernung führen. | S-11 |
| **Ziel-Android-Version** | Ab 31.08.2026: neue Apps und Updates müssen Android 16 (API 36) oder höher als Ziel haben (Wear OS und Automotive: Android 15 / API 35; TV und XR: Android 14 / API 34); Verlängerung bis 01.11.2026 beantragbar; bestehende Apps müssen mindestens Android 15 (API 35) als Ziel haben, um für neue Nutzer auf neueren Geräten verfügbar zu bleiben. Ausnahme: dauerhaft private Apps. | S-16 |
| **Kinder / Familien** | Eigene Richtlinien für Apps, die sich an Kinder richten (Werbe-SDKs, Daten) `[PRÜFEN]` | – |
| **In-App-Kauf (Play Billing)** | Digitale Güter/Funktionen werden über Google Play Billing verkauft; Ausnahmen je Region `[PRÜFEN]` | Gebühren: S-17 |
| **Berechtigungen und Hintergrund-Standort** | Sensible Berechtigungen brauchen Begründung und teils Prüfung durch Google `[PRÜFEN]` | – |

### 4.4 Ablauf der Einreichung (grob)

1. Konto anlegen, Zahlungsprofil, Identität.
2. App in der Play Console anlegen, App-Inhalte ausfüllen (Datenschutz, Data Safety, Altersfreigabe-Fragebogen, Zielgruppe, Werbung, Konto-Löschung).
3. App-Paket hochladen (üblich: Android App Bundle) und **Play App Signing** nutzen (Google verwaltet den Signaturschlüssel, du hast einen Upload-Schlüssel) `[PRÜFEN]`.
4. Test durchführen (intern, geschlossen mit 12 Testern / 14 Tagen bei neuen persönlichen Konten).
5. Store-Eintrag: Screenshots, Grafik, Beschreibung, Kontakt, Datenschutz-URL.
6. Produktionszugang beantragen, Veröffentlichung freigeben. Stufenweise Einführung (z. B. nur ein Teil der Nutzer) ist möglich `[PRÜFEN]`.

---

## 5. Microsoft Store

### 5.1 Entwicklerkonto

- Anmeldung über die **offizielle Einstiegsseite für Entwickler** (storedeveloper.microsoft.com). Nach der aktuellen Beschreibung entstehen im neuen Anmeldeweg **keine Registrierungsgebühren** – weder für Einzelpersonen noch für Firmen; die Seite erklärt, dass andere Einstiegspfade den alten Weg zeigen, dessen Kosten dort nicht genannt sind (S-9).
- **Einzelpersonen:** Identitätsprüfung mit amtlichem Ausweis und Selfie (mobil aufnehmen, gutes Licht, Originaldokumente) (S-9).
- **Kontoart ist nicht änderbar:** Von „Einzelperson“ zu „Firma“ kann im Partner Center nicht gewechselt werden. Entscheide also vorher (S-9).
- Firmenkonten: eigener Anmeldeablauf mit Nachweisen `[PRÜFEN]`.

### 5.2 Zeitplan, Prüfung, Pakete

- Prüfdauer und Testmöglichkeiten (Pakete, Test-Gruppen/Flights) `[PRÜFEN]`.
- Richtlinien: *Microsoft Store Policies* und *Developer Code of Conduct* (S-18).
- Packen als MSIX oder klassische Installer; Zertifikats- und Signierungsfragen siehe Abschnitt 12 `[PRÜFEN]`.
- Provision: Aktuelle Prozentsätze für Apps und Spiele und Sonderregeln für eigene Kaufsysteme `[PRÜFEN]` – die offiziellen Seiten ließen sich nicht verifizieren.

---

## 6. Chrome Web Store

### 6.1 Entwicklerkonto

- Registrierung im Chrome Developer Dashboard mit **einmaliger Registrierungsgebühr**; Betrag steht auf der Seite nicht – im Dashboard ablesen `[PRÜFEN]` (S-12).
- Die **E-Mail-Adresse des Kontos ist später nicht änderbar** – wähle sie bewusst (S-12).
- **Neue Entwickler** dürfen anfangs nur eine begrenzte Anzahl Erweiterungen veröffentlichen (Themes ausgenommen); Zahl der Seite entnehmen (S-19).

### 6.2 Einreichung

1. Erweiterung als ZIP-Paket hochladen (maximale Paketgröße laut Seite beachten) (S-19).
2. Reiter ausfüllen: Paket, Store-Eintrag, **Datenschutz** (Zweck, Datenumgang), Verbreitung (kostenpflichtig, Länder, Sichtbarkeit), Testanweisungen (Zugangsdaten falls nötig) (S-19).
3. Zur Prüfung einreichen. **Verzögerte Veröffentlichung** möglich: nach Freigabe bleiben laut Seite bis zu 30 Tage zum manuellen Veröffentlichen (S-19).
4. Prüfdauer: meist wenige Tage, kann bis zu einigen Wochen dauern; länger bei neuen Entwicklern/Erweiterungen, gefährlichen oder breiten Berechtigungen und größeren Code-Änderungen. Wenn eine Einreichung mehr als drei Wochen offen ist, wird der Entwickler-Support empfohlen (S-14).

### 6.3 Richtlinien-Kern

- **Ein Zweck**, **engste Berechtigungen**, Offenlegung **vor** der Installation, Einwilligung, moderne Verschlüsselung bei Übertragung, **Datenschutzerklärung**, wenn Nutzerdaten verarbeitet werden, **kein nachgeladener Programmcode** (Manifest V3), kein Manipulieren von Bewertungen oder Installationszahlen, keine Mehrfach-Erweiterungen mit gleicher Funktion (S-13).
- Erweiterungen dürfen Nutzerdaten nicht verkaufen oder für personalisierte Werbung nutzen (S-13).

---

## 7. Alternative Wege ohne Store

| Weg | Wofür | Vorteile | Nachteile / Achtung |
|---|---|---|---|
| **Web-App / PWA** | Fast alles, was nicht tiefe Systemfunktionen braucht | Kein Store, keine Provision, Updates sofort; Link genügt | Weniger Auffindbarkeit; Funktionsumfang je Gerät `[PRÜFEN]` |
| **Zugang nur per Einladung** (Test-Links, Firmen-Verteilung) | Betatests, Vereine, interne Tools | Keine öffentliche Prüfung | Für Firmen-/Behörden-Verteilung gelten eigene Programme und Regeln `[PRÜFEN]` |
| **Direkter Download** (Desktop-Programme, Android-Installationsdatei) | Desktop-Apps, Entwickler-Tools | Volle Kontrolle | Du musst Signierung, Vertrauen, Updates selbst lösen; auf Smartphones bewusst eingeschränkt `[PRÜFEN]` |
| **Alternative Stores / Regionale Sonderwege** | Nischen | Andere Konditionen | Regeln und Reichweite je Anbieter und Region prüfen `[PRÜFEN]` |
| **PC-Spieleplattformen** (z. B. Steam) | Spiele | Große Spielerschaft | Gebühr pro Spiel, Bank-/Steuerangaben, Prüfung und Wartezeiten bei den ersten Titeln (S-20) |

---

## 8. Provisionen, Gebühren und In-App-Käufe

> Diese Angaben gehören in **Phase 17** (Kostenplanung). Rechne konservativ mit dem Standard-Satz und prüfe vor dem Launch die aktuelle Lage in deinem Land. **Steuern (z. B. Umsatzsteuer)** sind darin nicht enthalten – Fachberatung `[PRÜFEN]`.

| Store | Was belegt ist | Was du prüfen musst |
|---|---|---|
| **Apple** | Entwicklerprogramm: 99 USD/Jahr (S-1). Provision: Apple nannte bei Einführung des Kleinunternehmer-Programms einen **Standardsatz von 30 %** und einen **verringerten Satz von 15 %** für Entwickler mit bis zu 1 Mio. USD Umsatz im Vorjahr; Satz 15 % für bezahlte Apps und In-App-Käufe (S-21, S-22). Für Entwickler in der EU unter alternativen Bedingungen und für Abos nach dem ersten Jahr nennt Apple weiter reduzierte 10 % (S-22). | Aktuelle Sätze und Voraussetzungen im Entwicklerkonto; Land- und regionsspezifische Abweichungen, Regeln für externe Kauflinks (S-3 nennt Ausnahmen) `[PRÜFEN]` |
| **Google Play** | Konto: einmalig 25 USD (S-5). Servicegebühren: Die Hilfeseite nennt zum Prüfdatum für **Australien, EWR, Japan, Großbritannien und USA** (Einführungstermine 30.06.2026 bzw. 30.09.2026) für **Abos 10 % + 5 % Abrechnungsgebühr** und für andere Käufe **20 % + 5 %** bei neuen Installationen bzw. **25 % + 5 %** bei bestehenden Installationen (mit Ermäßigungsstufen für bestimmte Programme); für **alle anderen Märkte** gilt bis zur Umstellung **15 % auf die ersten 1 Mio. USD** Jahresumsatz und darüber 30 %, Abos 15 % (S-17). | **Seite verändert sich; die Tabelle ist mehrdeutig und ersetzt keine Prüfung.** Prüfe, welche Stufe für dein Land und dein Kontoprogramm gilt, wie die 1-Mio.-Stufe jetzt definiert ist und ob die Abrechnungsgebühr zusätzlich anfällt `[PRÜFEN]` |
| **Microsoft** | Keine Registrierungsgebühr im neuen Anmeldeweg (S-9). | Provisionssätze für Apps und Spiele und Regeln für eigene Kaufsysteme `[PRÜFEN]` |
| **Chrome Web Store** | Einmalige Registrierungsgebühr (S-12). | Betrag `[PRÜFEN]`; ob und wie der Store selbst Bezahlmodelle für Erweiterungen unterstützt oder du einen eigenen Zahlungsanbieter brauchst `[PRÜFEN]` |
| **Steam** (PC-Spiele) | Gebühr pro Produkt (S-20, Betrag im Dokument). | Provisionssatz und Bedingungen laut Steamworks-Vertrag `[PRÜFEN]` |

### In-App-Käufe: Wann müssen sie sein?

- **Apple:** Digitale Inhalte und Funktionen (Premium, Abos, Spielwährung, Level) müssen mit Apples In-App-Kauf angeboten werden; eigene Verfahren wie Lizenzschlüssel sind nicht zulässig. Ausnahmen und regionale Sonderregeln gibt es (S-3) `[PRÜFEN]`.
- **Google:** Digitale Güter laufen grundsätzlich über Google Play Billing; in einigen Regionen sind alternative Abrechnungen unter Bedingungen erlaubt (S-17, EWR/Südkorea/Indien erwähnt) `[PRÜFEN]`.
- **Waren und Dienstleistungen außerhalb der App** (physische Produkte, Dienste, die außerhalb genutzt werden) unterliegen meist anderen Regeln. Abgrenzung im Zweifel in den Richtlinien nachlesen `[PRÜFEN]`.
- **Server prüft den Kauf:** Freischaltung erst nach verifiziertem Beleg über Server-API/Webhook (Regeln 8.1, 8.2 in `security/regeln-fuer-ki.md`).
- **Preisgestaltung:** Plane die Provision in die Preise ein (Phase 17). Beispiel (nur Rechenweg, kein Rat): Bei einem Preis P und Provisionssatz s bleiben P × (1 − s) vor Steuern.

---

## 9. Datenschutz-Angaben (Privacy Labels, Data Safety)

Beide großen Stores verlangen, dass du **offenlegst, welche Daten die App erhebt und wofür**. Die Angaben sind verbindlich und werden von Nutzern gelesen.

| | **Apple „App Privacy“** | **Google „Data safety“** |
|---|---|---|
| Wer muss? | Alle, die neue Apps/Updates einreichen (S-10) | Alle Apps mit Spuren außer rein internen Tests; auch Apps ohne Datenerhebung müssen das Formular ausfüllen und eine Datenschutzerklärung verlinken (S-11) |
| Was zählt? | Daten, die **du oder Dritt-Anbieter** (Analyse, Werbung, SDKs) erheben; „Erheben“ heißt: vom Gerät übertragen und länger als zur Bearbeitung der Anfrage nötig zugreifbar; nur auf dem Gerät verarbeitete Daten gelten nicht als erhoben (S-10) | Auch Daten, die Fremd-Bibliotheken und SDKs senden (S-11) |
| Aktuell halten? | Ja, jederzeit änderbar, kein Update nötig (S-10) | Ja, muss jederzeit korrekt sein (S-11) |
| Folgen bei Fehlern | Ablehnung/Rückfragen `[PRÜFEN]` | Mögliche Durchsetzung bis zu blockierten Updates oder Entfernung (S-11) |

**So gehst du vor:**

1. Erstelle ein **Datenverzeichnis**: Was wird erhoben (Name, E-Mail, Standort, Nutzungsdaten, Absturzdaten …), wo gespeichert, an wen weitergegeben.
2. Liste **alle Fremd-Bausteine** (SDKs, Analytics, Zahlungs- und Werbebibliotheken) mit ihren Datenflüssen (`guides/lieferkette.md`). Nutze die Dokumentation der Anbieter; viele stellen Hilfen für die Store-Angaben bereit `[PRÜFEN]`.
3. Fülle die Formulare **aus diesem Verzeichnis**, nicht aus dem Gedächtnis.
4. Halte die **Datenschutzerklärung** (Phase 16) mit den Store-Angaben konsistent.
5. Bei jeder Änderung (neues SDK, neue Funktion) die Angaben erneut prüfen.

Regel 7.2 in `security/regeln-fuer-ki.md` (keine sensiblen Daten in Logs, Analytics, Push-Texten) gilt unabhängig davon.

---

## 10. Typische Ablehnungsgründe und wie du sie vermeidest

| Ablehnungsgrund | Store | Was dahintersteckt | So vermeidest du ihn |
|---|---|---|---|
| **App unvollständig / Absturz / Platzhalter** | Apple | Häufigster Grund laut Apple (S-4) | Auf echten Geräten testen, Platzhaltertexte und tote Links entfernen, Demo-Konto bereitstellen, Backend eingeschaltet lassen |
| **Kein Demo-Zugang** | Apple | Prüfer kommt nicht hinein (S-3, S-4) | Funktionierendes Demo-Konto oder Demo-Modus in den Prüfhinweisen angeben |
| **Zu wenig Funktion / nur Webseite** | Apple (und andere) | Web-Ausschnitte und Link-Sammlungen gelten nicht als vollwertige App (S-4) | Nutzen der App über die Webseite hinaus zeigen (Systemfunktionen, Offline, eigene Oberfläche) oder Web-App/PWA wählen |
| **Konto-Löschung fehlt** | Apple, Google | Pflicht bei Kontoerstellung (S-3, S-15) | Löschfunktion in der App, bei Google zusätzlich Web-Link; Daten tatsächlich löschen (Regel 7.3) |
| **Fehlende Login-Alternative** | Apple | Drittanbieter-Login ohne gleichwertige Option (4.8) (S-3) | Eigenes Kontosystem anbieten oder gleichwertige Alternative |
| **Kauf umgangen** | Apple, Google | Eigene Bezahlwege für digitale Inhalte (S-3, S-17) | In-App-Kauf des Stores verwenden bzw. regionale Ausnahmen prüfen |
| **Datenschutz-Angaben falsch** | Apple, Google | Angaben passen nicht zum tatsächlichen Verhalten, Fremd-SDKs vergessen (S-10, S-11) | Datenverzeichnis führen, bei Änderung aktualisieren |
| **Fehlende/ungeeignete Datenschutzerklärung** | Apple, Google, Chrome | Muss Datenarten, Zwecke, Speicherdauer, Löschung enthalten (S-3, S-13) | Phase 16; Link im Store **und** in der App |
| **Berechtigungen ohne Erklärung** | Apple, Google, Chrome | Zu viele oder unbegründete Rechte (S-3, S-13) | Nur nötige Berechtigungen; Zweck-Texte formulieren; Abfrage im richtigen Moment |
| **Irreführung / falsche Screenshots** | Apple | App muss tun, was sie verspricht; Screenshots müssen Funktion zeigen (S-4) | Echte Bildschirmfotos, ehrliche Beschreibung |
| **Kopie / Mehrfach-Einreichung ähnlicher Apps** | Apple, Chrome | Wiederholungen oder Nachahmungen (S-4, S-13) | Eine eigenständige App mit klarem Nutzen |
| **Kinderthemen falsch gelöst** | Apple, Google | Werbung/Analyse, Links, Käufe ohne Elternschranke (S-3) | Kinder-Richtlinien lesen; Stufe 3 und Fachperson (Phase 16) |
| **Zielversion zu alt** | Google | Seit 31.08.2026 Pflicht für neue Apps/Updates (S-16) | Ziel-API aktuell halten |
| **Zu breite Berechtigungen / Remote-Code** | Chrome | Gegen Richtlinie (S-13) | Engste Rechte, Code im Paket |
| **Name/Marke** | alle | Verwechslung mit bekannten Marken oder Inhalten Dritter | Namensrecherche (Phase 4) |

**Wenn es abgelehnt wird:** Lies die Begründung genau, behebe die genannte Ursache, antworte sachlich im Prüfkanal, reiche erneut ein. Eine Ablehnung ist normal und kein Beweis für ein Scheitern.

---

## 11. Screenshots und Metadaten

Alle Stores verlangen einen Store-Eintrag. Er ist zugleich dein Schaufenster (Tipps zur Auffindbarkeit: `guides/launch-und-auffindbarkeit.md`).

| Element | Hinweise |
|---|---|
| **Name / Titel** | Kurz, eindeutig, keine Markenrechte verletzen, nicht irreführend (Stores prüfen). Apps außerhalb der Kinderkategorie dürfen sich nicht als Kinder-Apps bezeichnen (S-3). |
| **Untertitel / Kurzbeschreibung** | Ein Satz mit dem Nutzen. |
| **Beschreibung** | Ehrlich, ohne Versprechen, die die App nicht hält (Apple: Irreführung = Ablehnungsgrund, S-4). Keine Einblendung von Preisen oder Bewertungen, die nicht stimmen. |
| **Screenshots** | Müssen die tatsächliche Funktion zeigen (S-4). **Erforderliche Größen, Anzahl und Formate** ändern sich je Gerät und Store: aktuelle Vorgaben im Store-Konto ablesen `[PRÜFEN]`. Schutz: keine echten Kundendaten, keine Testkonten mit Personenbezug zeigen. |
| **Symbol (Icon)** | Gut lesbar in klein; keine fremden Marken. |
| **Support-URL, Datenschutz-URL** | Funktionierend und erreichbar (Apple verlangt Support- und Datenschutz-Link, S-4). |
| **Altersfreigabe** | Aus Fragebogen (S-7). |
| **Kategorien, Stichwörter** | Passend wählen; Keyword-Stuffing vermeiden (Chrome nennt es ausdrücklich als Verstoß, S-13). |
| **Hinweise für Prüfer** | Demo-Zugang, besondere Hardware, Erklärung versteckter Funktionen; bei Hardware-Abhängigkeit Demo-Video bereithalten (S-4). |
| **Übersetzungen** | Mindestens deutsch und englisch, falls Zielmarkt es verlangt (Phase 10). |
| **Datenschutz-Angaben** | Abschnitt 9. |

---

## 12. Signierung und Zertifikate

Eine App muss **digital signiert** sein, damit Systeme und Stores prüfen können, von wem sie stammt und dass sie nicht verändert wurde.

| Plattform | Grundprinzip | Wichtig |
|---|---|---|
| **iOS / macOS** | Zertifikate und Bereitstellungsprofile über das Apple-Konto; macOS-Programme außerhalb des Stores brauchen zusätzlich Developer-ID-Signierung und Notarisierung `[PRÜFEN]` | Apple nennt Notarisierung und Developer ID als Teil des Programms (S-1). Zugang zu den Zertifikaten schützen. |
| **Android** | App-Bundle wird mit einem Schlüssel signiert. Üblich: **Play App Signing** (Google verwahrt den Signaturschlüssel, du nutzt einen Upload-Schlüssel) `[PRÜFEN]` | **Der Schlüssel darf nie verloren gehen oder in fremde Hände geraten.** Nicht im Repository speichern (Regel 1.3/1.4), sondern in einem Geheimnisspeicher der Build-Pipeline. |
| **Windows** | Store-Pakete werden vom Store signiert; Installer außerhalb brauchen ein Code-Signing-Zertifikat, sonst Warnungen `[PRÜFEN]` | Zertifikate kosten Geld und laufen ab: Verlängerung einplanen. |
| **Desktop-Update-Systeme** (z. B. Tauri) | Eigene Update-Signaturen mit Schlüsselpaar (privat/öffentlich) | Beim Tauri-Updater ist die Signatur Pflicht, der private Schlüssel muss geheim bleiben, und ein Verlust verhindert weitere Updates für bestehende Installationen (S-23). |
| **Chrome-Erweiterungen** | Signierung übernimmt der Store beim Hochladen und Veröffentlichen `[PRÜFEN]` | Zugriff auf das Entwicklerkonto schützen (Zwei-Faktor). |

**Allgemeine Regeln:** Signierschlüssel getrennt von Code speichern; Zugriff nur für wenige Personen; Sicherung des Schlüssels an einem sicheren Ort (offline); Wiederherstellungsplan im Notfall (`templates/incident-plan.md`); Ablaufdaten in `PROJECT_STATE.md` oder im Kalender vermerken.

---

## 13. Zeitplan: Wie früh musst du anfangen?

> Die Dauern sind **Richtwerte** und hängen stark vom Einzelfall ab. Nur Angaben mit Quelle sind belegt; der Rest ist Planungspuffer.

| Schritt | Dauer / Hinweis | Belegt? |
|---|---|---|
| Entwicklerkonto Apple (Einzelperson) | keine feste Zeit genannt; Namens-Unstimmigkeiten verzögern | S-2; Dauer `[PRÜFEN]` |
| Entwicklerkonto Apple (Organisation) | D-U-N-S-Nummer, Webseite, Prüfung; mehrere Wochen Puffer einplanen | Anforderungen S-2; Dauer `[PRÜFEN]` |
| Google Play Konto + Prüfungen | `[PRÜFEN]` | – |
| **Google Play Testpflicht (neue persönliche Konten)** | mind. 14 aufeinanderfolgende Tage mit mind. 12 Testern, danach Antrag auf Produktionszugang | S-6 |
| Apple Prüfung pro Einreichung | laut Apple mindestens die Hälfte unter 24 Stunden, 90 % unter 48 Stunden; bei unvollständigen Einreichungen länger | S-4 |
| Chrome-Erweiterung | wenige Tage bis einige Wochen; länger bei neuen Entwicklern und breiten Berechtigungen | S-14 |
| Steam (PC-Spiel, erste Titel) | Prüfung laut Seite 1–5 Tage; zusätzlich mindestens 21 Tage zwischen Gebühr und Release und mindestens zwei Wochen sichtbare „Demnächst“-Seite | S-20 |
| Datenschutz-Angaben, Altersfreigabe, Screenshots | Mehrere Tage, wenn sauber vorbereitet | Erfahrungswert |
| Puffer für eine Ablehnung und erneute Einreichung | mind. 1–2 Wochen einplanen | Erfahrungswert |

**Faustregel:** Starte Konto, rechtliche Texte und Testergruppen **Wochen vor dem geplanten Launch**. Der Programmierstand ist selten der Engpass.

---

## 14. Update-Ablauf

1. **Neue Version bauen** (Versionsnummer erhöhen, Änderungsprotokoll schreiben).
2. **Tests** durchführen: automatische Tests (CI), manuelle Release-Checkliste (`templates/release-checkliste.md`), auf echten Geräten.
3. **Datenschutz-Angaben prüfen:** Neue Funktionen oder SDKs erfordern aktualisierte Store-Angaben (Abschnitt 9). Apple erlaubt Änderungen der Datenschutz-Angaben jederzeit ohne App-Update (S-10).
4. **Test-Verteilung:** Apple TestFlight (Builds laufen nach 90 Tagen ab, S-8); Google Testspuren; Chrome ggf. nicht gelistete Veröffentlichung `[PRÜFEN]`.
5. **Einreichen zur Prüfung.** Für dringende Fehlerbehebung bietet Apple eine **beschleunigte Prüfung** an, ohne Garantie; gib dazu die Schritte zur Reproduktion an (S-4).
6. **Veröffentlichungsart wählen** (sofort, manuell, zu einem Termin, stufenweise) `[PRÜFEN]`.
7. **Beobachten:** Absturzberichte, Bewertungen, Support-Postfach, Kosten-Alarme (Phase 20, `templates/support-playbook.md`).
8. **Notfall:** Bei kritischem Fehler oder Sicherheitslücke: Zurückziehen/Hotfix, Nutzer informieren, Vorfall dokumentieren (`templates/incident-plan.md`).
9. **Alte App-Versionen** bleiben im Umlauf; dein Server muss sie bedienen oder ein Zwangs-Update ermöglichen (`guides/auslieferung.md`).
10. **Jährliche/regelmäßige Pflichten:** Entwicklerprogramm verlängern (Apple jährlich, S-1), Zertifikate erneuern, Ziel-API-Version anheben (Google, S-16), Richtlinien-Änderungen lesen.

---

## 15. Checkliste vor der Einreichung

Diese Liste ergänzt die Launch-Checkliste in `phases/23-launch.md`.

- [ ] Entwicklerkonto angelegt, Zwei-Faktor aktiv, Rechtsname/Firma richtig
- [ ] Datenschutzerklärung, Impressum, Support-Kontakt online erreichbar
- [ ] Konto-Löschung in der App getestet (und bei Google: Web-Link eingetragen)
- [ ] Login-Optionen entsprechen den Store-Regeln
- [ ] Käufe laufen über den Store-Kauf (bzw. Ausnahme dokumentiert), Server prüft Belege
- [ ] Datenverzeichnis erstellt, Privacy Label / Data Safety stimmen mit dem echten Verhalten überein
- [ ] Altersfreigabe-Fragebogen ausgefüllt; Kinderthemen geprüft
- [ ] Demo-Zugang und Prüferhinweise hinterlegt
- [ ] Screenshots zeigen die echte App; Texte ehrlich
- [ ] Signierschlüssel sicher gespeichert (und gesichert)
- [ ] Ziel-Version (Android) aktuell, Abhängigkeiten ohne bekannte kritische Lücken
- [ ] Test auf echten Geräten; Google: geschlossener Test mit genügend Testern gelaufen (falls Pflicht)
- [ ] Preise, Provisionen, Gebühren in `QUELLEN.md` neu geprüft (`phases/17-monetarisierung-und-kosten.md`)
- [ ] Notfallplan und Support bereit (`templates/incident-plan.md`, `templates/support-playbook.md`)

---

## Quellen

Geprüft am **2026-10-14**. Store-Seiten ändern sich; Gebühren, Zahlen und Fristen vor der Einreichung neu prüfen. Alle `[PRÜFEN]`-Punkte im Text sind **nicht** belegt.

| ID | Aussage | URL | Art | Prüfdatum | neu prüfen bis |
|---|---|---|---|---|---|
| S-1 | Apple Developer Program: 99 USD pro Mitgliedsjahr (oder Gegenwert); Befreiung für gemeinnützige Organisationen, Bildungseinrichtungen, Behörden möglich; Programm umfasst u. a. App Store Connect, Verteilung, Notarisierung und Developer ID für Mac | https://developer.apple.com/support/compare-memberships/ | Primärquelle | 2026-10-14 | vor Konto-Anlage, spätestens 2027-01-31 |
| S-2 | Apple-Anmeldung: Zwei-Faktor, Rechtsname, Volljährigkeit; Organisation: Rechtsform, D-U-N-S, Webseite, Befugnis; falsche Namen verzögern; 99 USD pro Jahr | https://developer.apple.com/programs/enroll/ | Primärquelle | 2026-10-14 | vor Konto-Anlage, spätestens 2027-01-31 |
| S-3 | Apple App Review Guidelines: 2.1 Vollständigkeit/Demo-Konto, 1.3 Kinderkategorie, 5.1.4 Kinder, 5.1.1 Datenschutz/Einwilligung/Datenminimierung/Konto-Löschung, 4.8 Login-Dienste, 3.1.1 In-App-Kauf, 4.7 Mini-Apps/Plug-ins | https://developer.apple.com/app-store/review/guidelines/ | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-4 | Apple App Review: mind. 50 % unter 24 h, 90 % unter 48 h; über 40 % der ungelösten Probleme betreffen 2.1; häufige Ablehnungsgründe; beschleunigte Prüfung | https://developer.apple.com/distribute/app-review/ | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-5 | Google Play Console: einmalige Registrierungsgebühr 25 USD; Prepaid-Karten werden nicht akzeptiert | https://support.google.com/googleplay/android-developer/answer/6112435 | Primärquelle | 2026-10-14 | vor Konto-Anlage, spätestens 2027-01-31 |
| S-6 | Google Play Testpflicht für persönliche Konten, die nach 13.11.2023 erstellt wurden: geschlossener Test, mind. 12 Tester, 14 aufeinanderfolgende Tage, danach Antrag auf Produktionszugang | https://support.google.com/googleplay/android-developer/answer/14151465 | Primärquelle | 2026-10-14 | vor Planung, spätestens 2027-01-31 |
| S-7 | Apple App Store Connect: Altersfreigabe ist Pflicht, Fragebogen; Apps ohne Einstufung nicht veröffentlichbar | https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-8 | TestFlight: bis 100 interne, bis 10.000 externe Tester; Builds bis zu 90 Tage; Beta-Prüfung für ersten externen Build möglich | https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview | Primärquelle | 2026-10-14 | vor Planung, spätestens 2027-01-31 |
| S-9 | Microsoft-Store-Entwicklerkonto: im neuen Anmeldeweg keine Registrierungsgebühren; Ausweis und Selfie bei Einzelpersonen; Kontoart (Einzelperson/Firma) nicht wechselbar | https://learn.microsoft.com/en-us/windows/apps/publish/partner-center/open-a-developer-account | Primärquelle | 2026-10-14 | vor Konto-Anlage, spätestens 2027-01-31 |
| S-10 | Apple App Privacy: Pflichtangaben auch zu Dritt-SDKs, Definition „Erheben“, jederzeit änderbar ohne App-Update | https://developer.apple.com/app-store/app-privacy-details/ | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-11 | Google Play Data safety: Pflicht für alle außer rein interne Tests/System-/private Apps; Angaben müssen stimmen und aktuell bleiben, auch bei Fremd-SDKs; Datenschutzerklärung als Link auch ohne Datenerhebung; Durchsetzung möglich | https://support.google.com/googleplay/android-developer/answer/10787469 | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-12 | Chrome Web Store Registrierung: einmalige Registrierungsgebühr (Betrag nicht genannt); E-Mail-Adresse später nicht änderbar | https://developer.chrome.com/docs/webstore/register | Primärquelle | 2026-10-14 | vor Konto-Anlage, spätestens 2027-01-31 |
| S-13 | Chrome Web Store Programmrichtlinien: Ein Zweck, engste Berechtigungen, Datenschutz, kein Remote-Code, Datenschutzerklärung, Spam | https://developer.chrome.com/docs/webstore/program-policies/policies | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-14 | Chrome Web Store Prüfung: meist wenige Tage, bis einige Wochen; länger bei neuen Entwicklern, gefährlichen/breiten Berechtigungen | https://developer.chrome.com/docs/webstore/review-process | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-15 | Google Play Konto-Löschung: In-App-Weg und Web-Link; Ausnahmen für nicht mobile-first Apps; Aufbewahrung transparent | https://support.google.com/googleplay/android-developer/answer/13327111 | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-16 | Google Play Ziel-API: ab 2026-08-31 Android 16 (API 36) für neue Apps/Updates; Wear OS/Automotive API 35; TV/XR API 34; Verlängerung bis 2026-11-01; bestehende Apps API 35 | https://developer.android.com/google/play/requirements/target-sdk | Primärquelle | 2026-10-14 | vor jedem Release |
| S-17 | Google Play Servicegebühren (siehe Abschnitt 8): Stufen für AU/EWR/JP/UK/US mit Einführung 2026-06-30 bzw. 2026-09-30; „alle anderen Märkte“: 15 % auf die ersten 1 Mio. USD, danach 30 %, Abos 15 %; Alternative Abrechnung in EWR sowie Südkorea/Indien erwähnt | https://support.google.com/googleplay/android-developer/answer/112622 | Primärquelle | 2026-10-14 | vor Preisplanung, spätestens 2026-12-31 |
| S-18 | Microsoft Store Policies und Developer Code of Conduct (Verweisseite) | https://learn.microsoft.com/en-us/windows/apps/publish/store-policies-and-code-of-conduct | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-19 | Chrome Web Store Veröffentlichung: ZIP-Upload, Reiter (Paket, Eintrag, Datenschutz, Verbreitung, Testanweisungen), verzögerte Veröffentlichung bis zu 30 Tage, neue Entwickler mit begrenzter Anzahl Erweiterungen | https://developer.chrome.com/docs/webstore/publish | Primärquelle | 2026-10-14 | vor Einreichung, spätestens 2027-01-31 |
| S-20 | Steam Onboarding: Gebühr pro Produkt, Verträge, Bank-/Steuerangaben, Prüfung 1–5 Tage, 21 Tage Wartezeit und mind. zwei Wochen „Coming soon“ bei den ersten Titeln | https://partner.steamgames.com/doc/gettingstarted/onboarding | Primärquelle | 2026-10-14 | vor Launch, spätestens 2027-01-31 |
| S-21 | Apple Small Business Program (Pressemitteilung 2020): Standardprovision 30 %, verringert 15 % bis 1 Mio. USD Vorjahresumsatz; historisch, aktuelle Bedingungen prüfen | https://www.businesswire.com/news/home/20201118005376/en/Apple-Announces-App-Store-Small-Business-Program | Primärquelle (Pressemitteilung, 2020-11-18) | 2026-10-14 | vor Preisplanung, spätestens 2026-12-31 |
| S-22 | Apple Small Business Program (Entwicklerseite): 15 % für bezahlte Apps und In-App-Käufe; Voraussetzung bis 1 Mio. USD Vorjahresumsatz; für EU-Entwickler unter alternativen Bedingungen und Abos nach dem ersten Jahr 10 % | https://developer.apple.com/app-store/small-business-program/ | Primärquelle | 2026-10-14 | vor Preisplanung, spätestens 2026-12-31 |
| S-23 | Tauri-Updater: Signatur Pflicht, privater Schlüssel geheim, Verlust verhindert weitere Updates | https://v2.tauri.app/plugin/updater/ | Primärquelle | 2026-10-14 | 2027-01-31 |
| – | Alle Aussagen mit `[PRÜFEN]` (u. a. Prüfdauern Google/Microsoft, Provisionen Microsoft, Betrag Chrome-Gebühr, Händlerstatus, Notarisierung, Play App Signing, Screenshot-Größen) | – | Annahme | 2026-10-14 | vor der jeweiligen Entscheidung |
