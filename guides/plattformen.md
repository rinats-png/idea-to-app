# Plattformen: Welche Art von App passt zu meiner Idee?

> Für alle, die noch nicht wissen, ob ihre Idee eine Web-App, eine Handy-App, ein Programm für den PC, eine Browser-Erweiterung, ein Spiel oder etwas ganz anderes werden soll – und was sich dadurch im Ablauf von idea-to-app ändert.
> Die KI nutzt diesen Leitfaden vor allem in **Phase 0** (Plattform festlegen), **Phase 5** (MVP-Umfang), **Phase 13** (Tech-Stack), **Phase 14** (Sicherheit), **Phase 16** (Recht), **Phase 17** (Kosten) und **Phase 23** (Launch).

> **Wichtig vorab:** Produkt-Details von Stores, Gebühren und Richtlinien ändern sich häufig. Alles, was hier mit `[PRÜFEN]` markiert ist, konnte nicht eindeutig belegt werden und muss vor einer Entscheidung auf der offiziellen Seite nachgesehen werden. Belegte Aussagen stehen im Abschnitt [Quellen](#quellen) am Ende. Konkrete Sicherheitswerte (Längen, Laufzeiten, Limits) stehen ausschließlich in `security/standardwerte.md`; die verbindlichen Sicherheitsregeln in `security/regeln-fuer-ki.md`.

---

## Inhalt

1. [Entscheidungstabelle: Was passt zu meiner Idee?](#1-entscheidungstabelle-was-passt-zu-meiner-idee)
2. [Was für alle Plattformen gleich gilt](#2-was-für-alle-plattformen-gleich-gilt)
3. [Web-App und PWA](#3-web-app-und-pwa)
4. [Native App für iOS und Android](#4-native-app-für-ios-und-android)
5. [Cross-Platform-App (ein Code für mehrere Systeme)](#5-cross-platform-app-ein-code-für-mehrere-systeme)
6. [Desktop-App (Windows, macOS, Linux)](#6-desktop-app-windows-macos-linux)
7. [Browser-Erweiterung](#7-browser-erweiterung)
8. [Spiele](#8-spiele)
9. [Wearables und Smartwatch](#9-wearables-und-smartwatch)
10. [Bots und Chat-Integrationen](#10-bots-und-chat-integrationen)
11. [Reine API oder Backend-Dienst](#11-reine-api-oder-backend-dienst)
12. [Übersicht: Was ändert sich in welcher Phase?](#12-übersicht-was-ändert-sich-in-welcher-phase)
13. [So hältst du die Plattform-Entscheidung fest](#13-so-hältst-du-die-plattform-entscheidung-fest)
14. [Quellen](#quellen)

---

## 1. Entscheidungstabelle: Was passt zu meiner Idee?

Lies die linke Spalte und suche die Zeile, die am besten zu dem passt, was deine Idee können muss. Wenn mehrere Zeilen passen, nimm die **einfachste**. Du kannst später immer noch eine zweite Plattform ergänzen; der umgekehrte Weg (von kompliziert zu einfach) kostet meist mehr.

| Meine Idee braucht … | Passt am besten | Warum | Gegenargument / Achtung | Abschnitt |
|---|---|---|---|---|
| Nur Texte, Formulare, Listen, Rechner, Dashboards; Nutzer sollen sie sofort öffnen können, ohne etwas zu installieren | **Web-App** | Ein Link genügt, keine Store-Prüfung, Updates sofort live | Zugriff auf Gerätefunktionen ist begrenzt | [3](#3-web-app-und-pwa) |
| Wie oben, aber soll sich wie eine App anfühlen (Icon auf dem Startbildschirm, teilweise offline) | **PWA** (Web-App, die sich installieren lässt) **(Empfehlung für den Einstieg)** | Ein Code, kein Store nötig, günstig | Manche Funktionen (z. B. bestimmte Hintergrund-Funktionen, Benachrichtigungen) unterscheiden sich je nach Gerät und System `[PRÜFEN]` | [3](#3-web-app-und-pwa) |
| Tiefe Handy-Funktionen (Bluetooth-Geräte, Hintergrund-Standort, Health-Daten, NFC, Widgets, Siri/Assistent), sehr flüssige Bedienung | **Native App** (je System eigener Code) | Voller Zugriff auf alle Systemfunktionen | Doppelter Aufwand für iOS und Android, Store-Prüfung, Gebühren | [4](#4-native-app-für-ios-und-android) |
| Handy-App für iOS **und** Android mit einem Team von einer Person | **Cross-Platform-App** | Ein Code für beide Systeme | Zusätzliche Abhängigkeiten; Systemfunktionen brauchen Zusatzpakete | [5](#5-cross-platform-app-ein-code-für-mehrere-systeme) |
| Zugriff auf Dateien auf dem Rechner, Drucker, USB-Geräte, läuft ohne Internet, soll als Programm installiert werden | **Desktop-App** | Zugriff auf das Dateisystem und lokale Geräte | Du lieferst Updates und Signierung selbst; lokaler Code kann untersucht werden | [6](#6-desktop-app-windows-macos-linux) |
| Soll auf anderen Webseiten etwas verändern oder ergänzen (z. B. Notizen zu einer Seite, Preisvergleich, Übersetzer) | **Browser-Erweiterung** | Sitzt direkt dort, wo die Nutzer arbeiten | Berechtigungen werden streng geprüft; viele Nutzer = viel Verantwortung | [7](#7-browser-erweiterung) |
| Spielmechanik, Grafik, Punkte, Level, Mehrspieler | **Spiel** | – | Eigene Regeln für Altersfreigabe, Käufe, Betrugsschutz | [8](#8-spiele) |
| Kurze Informationen am Handgelenk (Puls, Timer, Erinnerung, Schnellaktion) | **Wearable-App** (als Ergänzung zu einer Handy-App) | Direkter Zugriff auf Sensoren | Sehr kleiner Bildschirm, wenig Akku, meist nur als Zusatz sinnvoll | [9](#9-wearables-und-smartwatch) |
| Nutzer sollen in Slack, Discord, Telegram, Teams o. Ä. etwas auslösen oder Benachrichtigungen bekommen | **Bot / Chat-Integration** | Nutzer müssen nichts Neues installieren | Du bist abhängig von der Plattform und ihren Regeln | [10](#10-bots-und-chat-integrationen) |
| Andere Programme (nicht Menschen) sollen Daten abrufen oder Funktionen nutzen; keine eigene Oberfläche | **API / Backend-Dienst** | Reine Schnittstelle, gut automatisierbar | Alles hängt an Zugriffsschutz, Missbrauchsschutz und Dokumentation | [11](#11-reine-api-oder-backend-dienst) |
| Ich weiß es nicht | **Web-App / PWA** zuerst | Schnellster, günstigster Test der Idee | – | [3](#3-web-app-und-pwa) |

### Drei Hilfsfragen, wenn die Tabelle nicht reicht

1. **Muss die App etwas können, was ein Browser nicht erlaubt?** (z. B. dauerhaft im Hintergrund den Standort verfolgen, Bluetooth-Geräte dauerhaft koppeln, beliebige Dateien auf dem Rechner lesen). Wenn **nein**: Web-App/PWA. Wenn **ja**: native oder Desktop-App.
2. **Müssen Nutzer die App im App Store oder bei Google Play finden?** Wenn ja, brauchst du eine Store-App (siehe `guides/appstore-veroeffentlichung.md`). Wenn deine Nutzer ohnehin einen Link von dir bekommen (Verein, Team, Kunden), reicht oft eine Web-App.
3. **Wie viel Zeit und Geld kannst du für Pflege einplanen?** Jede zusätzliche Plattform bedeutet zusätzliche Tests, Updates und Support (siehe auch `phases/24-iteration-und-wartung.md`).

### Wichtige Ehrlichkeit

- „Ich will eine App im App Store“ ist **kein Ziel**, sondern ein Weg. Die KI fragt in Phase 0 und Phase 13 zuerst, **was Nutzer damit tun sollen**, und schlägt erst dann die Plattform vor.
- Eine Store-App ist **nicht automatisch sicherer oder seriöser** als eine Web-App. Die Store-Prüfung ersetzt kein eigenes Sicherheitskonzept.
- Eine PWA kann je nach System und Funktion Einschränkungen haben, die du früh testen solltest (echte Geräte!). Details und aktuelle Unterstützung: `[PRÜFEN]` bei den Dokumentationen der Browser- bzw. Systemhersteller.

---

## 2. Was für alle Plattformen gleich gilt

Egal, welche Art von App du baust, diese Grundsätze aus `security/regeln-fuer-ki.md` gelten **immer**:

| Grundsatz | Regel | Was das für dich heißt |
|---|---|---|
| Der Client ist nicht vertrauenswürdig | Grundsatz, 2.3, 2.6, 2.7 | Alles, was von Browser, Handy, Programm auf dem PC, Erweiterung, Bot-Nachricht oder Spiel-Client kommt, kann gefälscht sein. Prüfen und entscheiden darf nur der Server. |
| Keine geheimen Schlüssel im ausgelieferten Paket | 1.1 | Was du in eine App, ein Programm, eine Erweiterung oder ein Spiel einpackst, kann jeder auspacken und lesen – auch „versteckt“ oder „verschleiert“. Geheimes gehört auf deinen Server. |
| Zugriff immer serverseitig prüfen | 2.1, 2.2, 2.5 | Das Verstecken eines Buttons ist kein Schutz (2.9). |
| Missbrauch begrenzen | 4.1, 4.5 | Jede Schnittstelle, die Kosten verursachen kann, bekommt Limits pro Nutzer und ein Budget. |
| Abhängigkeiten sparsam und gepflegt | 9.1, 9.2 | Jede Bibliothek, jedes Plugin, jede Engine bringt fremden Code mit. Mehr dazu in `guides/lieferkette.md`. |
| Keine sensiblen Daten in Logs, Push-Texten, Analytics | 7.2 | Gilt auch für Absturzberichte von Apps und Spielen. |
| Konto löschen heißt wirklich löschen | 7.3 | Stores verlangen diese Funktion teilweise ausdrücklich (siehe `guides/appstore-veroeffentlichung.md`). |

**Zusätzlich je Plattform** kommen eigene Fallen dazu. Sie stehen in den folgenden Abschnitten jeweils unter „Typische Sicherheitsfallen“.

**Recht über alle Plattformen hinweg** (Datenschutz, Impressum, Verbraucherrecht, Kinderschutz) behandelt `guides/recht-eu-ueberblick.md` und Phase 16. Hier stehen nur die plattformspezifischen Besonderheiten.

**Wie du ausliefern und betreiben kannst:** `guides/auslieferung.md`.

---

## 3. Web-App und PWA

### Was ist das?

Eine **Web-App** läuft im Browser und wird über eine Internetadresse geöffnet. Eine **PWA** (Progressive Web App) ist eine Web-App, die sich zusätzlich auf dem Startbildschirm oder im Programmmenü „installieren“ lässt und teilweise offline funktioniert. Technisch bleibt es eine Webseite.

### Besonderheiten

- **Kein Store, keine Wartezeit:** Eine neue Version ist sofort für alle Nutzer da.
- **Kostengünstig:** Meist nur Hosting und Domain.
- **Gerätezugriff begrenzt:** Kamera, Standort, Mikrofon u. Ä. funktionieren nur nach Nutzer-Zustimmung und je nach Browser unterschiedlich. Sehr tiefe Systemfunktionen gibt es nicht oder nur eingeschränkt `[PRÜFEN]`.
- **Offline:** Möglich über Zwischenspeicher im Browser; der Speicher kann vom System geleert werden. Wichtige Daten gehören deshalb **auch** auf einen Server oder müssen exportierbar sein (Phase 11, Phase 18).
- **Benachrichtigungen (Push):** Unterstützung hängt von Browser und Betriebssystem ab `[PRÜFEN]`. Plane ein E-Mail-Fallback ein, wenn Erinnerungen wichtig sind.
- **Aktualisierung:** Ein Cache-Fehler kann dazu führen, dass Nutzer eine alte Version sehen. Plane Update-Hinweise ein.

### Typische Sicherheitsfallen

| Falle | Regel | Hinweis |
|---|---|---|
| Datenbank-Zugriff direkt aus dem Browser ohne Zugriffsregeln | 1.2, 2.2 | Bei Diensten mit öffentlichem Schlüssel (z. B. Supabase, Firebase) sind Zugriffsregeln Pflicht; siehe `security/stack-hinweise.md`. |
| Geheime Schlüssel mit Client-Präfix in Umgebungsvariablen | 1.1 | Alles mit `VITE_`, `NEXT_PUBLIC_` o. Ä. landet im Browser. |
| Nutzerinhalte ungefiltert ausgeben (Cross-Site-Scripting) | 5.3 | Auch Markdown, Kommentare, Profilnamen. |
| Fehlende Browser-Schutzeinstellungen (Security-Header) | 6.2 | Gilt auch für statische Hosting-Seiten. |
| Zu offene Cross-Origin-Freigaben (CORS) | 6.3 | |
| Sitzungs-Cookies unsicher | 3.6 | |
| Daten nur im Browser gespeichert und für „sicher“ gehalten | 7.1, 7.2 | Der Nutzer (oder ein Schadprogramm) kann sie lesen und ändern. |
| Service Worker liefert veraltete oder manipulierte Dateien aus | 9.1 | Versionierung und Aktualisierung bewusst planen. |
| Drittanbieter-Skripte (Analytics, Chat-Widgets) | 7.5, 9.1 | Jedes eingebundene Skript läuft mit allen Rechten deiner Seite. |

### Veröffentlichungsweg

1. Hosting wählen (Beispiele und Hinweise: `guides/auslieferung.md`, Phase 13, Phase 20).
2. Eigene Domain mit HTTPS (Pflicht, Regel 6.1).
3. Impressum und Datenschutzerklärung erreichbar machen (Phase 16).
4. Optional: PWA-Manifest und Symbole, damit sich die App installieren lässt.
5. **Alternative**: Eine PWA kann je nach Plattform auch in Stores angeboten werden (verpackt). Das ist ein Sonderweg; Voraussetzungen und Regeln vorher prüfen `[PRÜFEN]`, siehe `guides/appstore-veroeffentlichung.md`.

### Rechtliche Besonderheiten

- **Impressum und Datenschutzerklärung** sind für öffentlich erreichbare Seiten typischerweise nötig (Details und Einordnung: `guides/recht-eu-ueberblick.md`).
- **Cookies und Tracking:** Einwilligung kann nötig sein; setze, wenn möglich, auf Messung ohne Cookies (`phases/24-iteration-und-wartung.md`).
- **Barrierefreiheit:** Für manche Angebote bestehen gesetzliche Pflichten `[PRÜFEN]`; in jedem Fall ist sie gute Praxis (Phase 10).

### Welche Phasen ändern sich?

- Phase 13: Hosting- und Domain-Frage steht im Mittelpunkt.
- Phase 15: Login und Zahlung ohne Store-Bezug (z. B. Zahlungsanbieter).
- Phase 17: **keine Store-Provisionen**, aber Zahlungsanbieter-Gebühren.
- Phase 23: Store-Punkte der Launch-Checkliste entfallen (`n/a – keine Store-App`), Web-Punkte gelten.

### Passt, wenn … / Passt nicht, wenn …

- **Passt:** Du willst schnell testen, ob die Idee ankommt; Nutzer sollen ohne Installation starten; Budget und Zeit sind knapp.
- **Passt nicht:** Du brauchst dauerhaften Hintergrund-Zugriff auf Sensoren, Bluetooth-Geräte oder tiefe Systemfunktionen; Nutzer erwarten Auffindbarkeit im Store.

---

## 4. Native App für iOS und Android

### Was ist das?

Eine **native App** wird speziell für ein System geschrieben (iOS von Apple, Android von Google) und über den App Store bzw. Google Play verteilt. Programmiersprachen und Werkzeuge unterscheiden sich je System. Beispiele: Swift/SwiftUI für iOS, Kotlin für Android (nur als Beispiele; aktuelle Empfehlungen der Hersteller prüfen `[PRÜFEN]`).

### Besonderheiten

- **Voller Zugriff** auf Systemfunktionen (Sensoren, Gesundheitsdaten, Hintergrund-Aufgaben, Widgets, Assistenten).
- **Doppelter Aufwand**, wenn du beide Systeme bedienen willst.
- **Store-Prüfung und Regeln** gehören zum Zeitplan (siehe `guides/appstore-veroeffentlichung.md`).
- **Mindest-Zielversion:** Google verlangt für neue Apps und Updates eine aktuelle Android-Ziel-Version; die Anforderungen steigen regelmäßig (aktueller Stand mit Quelle im Store-Leitfaden).
- **Updates** laufen über den Store; Nutzer aktualisieren nicht sofort. Ältere App-Versionen sind deshalb noch Wochen oder Monate in Gebrauch. Dein Server muss mit alten App-Versionen umgehen können (Versionierung der Schnittstelle, Zwangs-Update-Mechanismus für gefährliche Fehler).

### Typische Sicherheitsfallen

| Falle | Regel | Hinweis |
|---|---|---|
| API-Schlüssel (KI, Karten, E-Mail) im App-Paket | 1.1 | App-Pakete lassen sich entpacken. Teure Dienste nur über deinen Server aufrufen. |
| Tokens und Sitzungsdaten im unsicheren Speicher | 3.6, 7.2 | Verwende den sicheren Schlüsselspeicher des Systems (Beispiele: `security/stack-hinweise.md`). |
| Berechtigungen (Kamera, Standort, Kontakte) zu früh oder zu viel abgefragt | 7.1 | Nur bei Bedarf und mit klarer Erklärung. Stores prüfen das. |
| Deep Links und App-Links werden ungeprüft verarbeitet | 5.1, 5.7 | Eingaben aus Links wie jede andere Eingabe validieren. |
| Premium-Status nur in der App geprüft | 8.1 | Freischaltung nach Kauf gehört auf den Server (Belegprüfung). |
| Zu viele Daten in Absturzberichten | 7.2 | Berichte und Analyse-Dienste auf Datenschutz prüfen. |
| Eingebettete Webansichten laden fremde Inhalte | 5.3, 5.7 | Erlaubte Adressen beschränken. |
| Unverschlüsselte lokale Datenbank mit sensiblen Daten | 7.1 | Bei Stufe 3 zusätzliche Anforderungen (Phase 14). |

Orientierung für mobile Sicherheit: OWASP MASVS (siehe `security/stack-hinweise.md`).

### Veröffentlichungsweg

1. Entwicklerkonto beim jeweiligen Store anlegen (Kosten, Dauer und Anforderungen im Store-Leitfaden).
2. App signieren und für Tests verteilen (TestFlight bei Apple; Testspuren bei Google Play).
3. Datenschutz-Angaben im Store ausfüllen (müssen zur tatsächlichen Verarbeitung passen).
4. Store-Eintrag: Screenshots, Beschreibung, Altersfreigabe, Support-URL, Datenschutz-URL.
5. Prüfung durch den Store, Veröffentlichung, später Updates.

Details, Kosten (mit Quelle), Ablehnungsgründe und Zeitplan: `guides/appstore-veroeffentlichung.md`.

### Rechtliche Besonderheiten

- **Store-Bedingungen** sind zusätzliche Verträge, die du akzeptierst. Sie enthalten Regeln zu Zahlungen, Datenschutz und Inhalten.
- **In-App-Käufe:** Für digitale Inhalte und Funktionen gelten Store-eigene Bezahlpflichten und Provisionen (Phase 17, Store-Leitfaden).
- **Konto-Löschung in der App** ist nach Store-Regeln bei Apps mit Konto Pflicht (Quellen im Store-Leitfaden).
- **Kinder:** Apps für Kinder haben strengere Regeln (Apple Kinderkategorie; Google ähnliche Programme `[PRÜFEN]`).
- **Anbieterkennzeichnung (Impressum)** und Händler-Status nach EU-Recht: `guides/recht-eu-ueberblick.md`; Stores verlangen für EU-Händler teilweise zusätzliche Angaben `[PRÜFEN]`.

### Welche Phasen ändern sich?

- Phase 7/8: Bedienkonzepte der Systeme beachten (Navigation, Gesten, Größen).
- Phase 10: Barrierefreiheit der Systeme (Screenreader, Schriftgröße) testen.
- Phase 13: Stack-Wahl (nativ vs. cross-platform), Backend nötig für Premium-Prüfung und geheime Schlüssel.
- Phase 15: Kauf-Belegprüfung, Login-Optionen nach Store-Regeln.
- Phase 17: Store-Gebühren, Provisionen.
- Phase 19: Test auf echten Geräten, auch älteren.
- Phase 23: Store-Punkte der Checkliste gelten.

### Passt, wenn … / Passt nicht, wenn …

- **Passt:** Systemfunktionen sind der Kern; du willst im Store gefunden werden; Budget und Zeit für Pflege sind vorhanden.
- **Passt nicht:** Du willst nur eine Idee testen; Budget ist sehr knapp; die Funktionen gehen auch im Browser.

---

## 5. Cross-Platform-App (ein Code für mehrere Systeme)

### Was ist das?

Mit einem **Cross-Platform-Werkzeug** schreibst du den Code einmal und baust daraus Apps für iOS und Android (und manchmal auch Web und Desktop). Bekannte Beispiele (keine Empfehlung, nur zur Orientierung): React Native (oft mit Expo), Flutter. Aktuelle Möglichkeiten, Reife und Lizenzbedingungen immer bei den Anbietern prüfen `[PRÜFEN]`.

### Besonderheiten

- **Weniger Doppelarbeit**, ein Team kann beide Systeme bedienen.
- **Zusatzpakete für Systemfunktionen:** Für Kamera, Bluetooth, Gesundheitsdaten usw. werden Erweiterungen genutzt. Jedes ist eine Abhängigkeit.
- **Aussehen und Verhalten:** Nutzer merken Unterschiede zu „echten“ Apps, wenn sie sich nicht an Systemgewohnheiten halten.
- **Update-Verfahren:** Manche Werkzeuge erlauben das Nachladen von Programmteilen am Store vorbei. Das ist nur innerhalb der Store-Regeln erlaubt `[PRÜFEN]` und ein Sicherheitsthema (Herkunft und Signierung der Updates).
- **Abhängigkeit vom Werkzeug-Anbieter:** Wenn ein Werkzeug nicht mehr gepflegt wird, sitzt du fest (Lock-in; in der Bewertungsmatrix von Phase 13 berücksichtigen).

### Typische Sicherheitsfallen

Alle Fallen der nativen Apps (Abschnitt 4) gelten weiter, außerdem:

| Falle | Regel | Hinweis |
|---|---|---|
| Geheimnisse in Umgebungsvariablen mit Client-Präfix (z. B. `EXPO_PUBLIC_…`) | 1.1 | Landen im App-Paket. |
| Viele kleine Zusatzpakete für Systemfunktionen | 9.1, 9.2 | Nur verbreitete, gepflegte Pakete; Lockfile; Prüfung auf bekannte Schwachstellen (`guides/lieferkette.md`). |
| Tokens im einfachen Speicher statt im sicheren Schlüsselspeicher | 3.6 | Beispiele: `security/stack-hinweise.md`. |
| Debug-Funktionen oder Entwickler-Menüs in der Release-Version | 10.4 | Vor Release prüfen. |
| Nachladen von Programmcode ohne Prüfung der Herkunft | 9.1 | Nur signierte, eigene Updates. |

### Veröffentlichungsweg

Wie bei nativen Apps (Abschnitt 4) über die Stores; zusätzlich oft als Web-App ausspielbar. Die Store-Regeln gelten unabhängig vom Werkzeug. Siehe `guides/appstore-veroeffentlichung.md`.

### Rechtliche Besonderheiten

Wie bei nativen Apps. Zusätzlich: **Lizenzen** der Werkzeuge und Pakete prüfen (Open-Source-Lizenzen, Hinweispflichten; `guides/lieferkette.md`).

### Welche Phasen ändern sich?

Wie Abschnitt 4. Zusätzlich Phase 13: Bewertungsmatrix mit Kriterium „Reife der Systemfunktionen, die du brauchst“; Phase 19: Tests auf beiden Systemen.

### Passt, wenn … / Passt nicht, wenn …

- **Passt:** Du brauchst eine Handy-App für beide Systeme, hast aber nur ein kleines Team.
- **Passt nicht:** Du brauchst sehr spezielle Systemfunktionen am Tag 1 oder maximale Leistung (z. B. aufwendige 3D-Grafik).

---

## 6. Desktop-App (Windows, macOS, Linux)

### Was ist das?

Ein Programm, das der Nutzer auf dem Rechner installiert. Viele moderne Desktop-Apps sind im Kern Web-Anwendungen in einem eigenen Fenster. Bekannte Werkzeuge dafür (nur als Beispiele): **Electron** und **Tauri**. Daneben gibt es klassische, systemeigene Programme.

### Besonderheiten

- **Dateizugriff:** Die App kann Dateien lesen und schreiben, Drucker und lokale Geräte nutzen. Gerade deshalb ist der lokale Code eine Angriffsfläche: Wer das Programm hat, kann es auspacken und untersuchen.
- **Auto-Update:** Du musst Updates selbst ausliefern oder einen Update-Dienst anbinden. Updates sind ein **Hauptangriffspunkt** (ein manipuliertes Update erreicht alle Nutzer). Updates müssen deshalb kryptografisch signiert sein. Beispiel: Tauri verlangt für seinen Updater zwingend eine Signatur, die sich nicht abschalten lässt; der private Schlüssel darf nie weitergegeben werden und sein Verlust verhindert weitere Updates für bereits installierte Apps (siehe Quellen).
- **Signierung und Vertrauen des Betriebssystems:** Systeme zeigen bei unsignierten Programmen Warnungen oder blockieren sie. Anforderungen (Zertifikate, Notarisierung bei Apple, Zertifikate für Windows) ändern sich `[PRÜFEN]`. Plane Kosten und Zeit dafür ein.
- **Mehrere Betriebssysteme:** Jedes System hat eigene Installationsformate, Pfade und Besonderheiten. Tests auf jedem Zielsystem sind Pflicht.
- **Betrieb ohne Internet** ist möglich und oft gewollt – damit liegen Daten lokal. Das hilft dem Datenschutz, aber Sicherung und Verschlüsselung sind dann deine Aufgabe (Phase 11, Phase 20).

### Typische Sicherheitsfallen

| Falle | Regel | Hinweis |
|---|---|---|
| Web-Oberfläche hat zu viel Zugriff auf das System | 2.1, 10.4 | Bei Electron: Node-Integration in Fenstern mit fremdem Inhalt ausschalten; Kontext-Isolierung und Sandbox aktiv lassen; Nachrichten zwischen Oberfläche und Hauptprozess (IPC) auf den Absender prüfen; fremde Adressen nicht ungeprüft per `shell.openExternal` öffnen (siehe Quellen). |
| Fremde Webseiten im Programmfenster laden | 5.7, 6.2 | Navigation und neue Fenster beschränken, strenge Inhalts-Sicherheitsrichtlinie (CSP). |
| Geheimnisse im Programm | 1.1 | Das Programm ist auf dem Rechner des Nutzers. Auch verschleiert nicht sicher. |
| Updates über unsichere Wege oder ohne Signatur | 9.1 | Nur HTTPS (6.1) und signierte Updates; Signierschlüssel in der Build-Pipeline schützen, nicht im Repository (1.4). |
| Lokale Daten unverschlüsselt, obwohl sensibel | 7.1 | Sensible Daten gehören nicht ungeschützt auf die Festplatte. Betriebssystem-Schlüsselspeicher nutzen. |
| Lokaler Mini-Server auf dem Rechner ohne Schutz | 2.1, 6.3 | Andere Programme oder Webseiten im Browser könnten ihn ansprechen. Nur lokale Verbindungen, Authentifizierung, keine offene Cross-Origin-Freigabe. |
| Datei-Dialoge ohne Prüfung (Pfad-Tricks) | 5.1, 5.5 | Pfade und Dateinamen validieren, nie ausführen. |
| Installer läuft mit Administratorrechten ohne Notwendigkeit | 10.3 | Minimale Rechte. |
| Abhängigkeiten sind veraltet (Browser-Engine ist in Electron enthalten!) | 9.2 | Bei Electron bringst du eine Browser-Engine mit – Updates der Engine sind deine Aufgabe. |

### Veröffentlichungsweg

- **Eigene Webseite** mit Download (du bist für Signierung, Updates und Vertrauen verantwortlich).
- **Microsoft Store** (Windows) und **Mac App Store** (macOS) mit jeweils eigenen Regeln `[PRÜFEN]`; Microsoft-Store-Details im Store-Leitfaden.
- **Paketmanager** (z. B. winget, Homebrew, Linux-Pakete) `[PRÜFEN]`.
- **Intern verteilen** (Firmen- oder Behördenumfeld): Verteilung über die IT, Freigaben nach internen Regeln.

### Rechtliche Besonderheiten

- **Lizenz-Hinweise** (Open Source in der Software; `guides/lieferkette.md`).
- **Endbenutzer-Lizenzvertrag (EULA) / Nutzungsbedingungen** für Software, die man herunterlädt.
- **Datenschutz:** Auch eine Offline-App kann personenbezogene Daten verarbeiten (z. B. Absturzberichte, Update-Anfragen). Das gehört in die Datenschutzerklärung.
- **Dienstliche/behördliche Nutzung:** Meist interne Freigaben, Datenschutzbeauftragte, Prüfpflichten (siehe Hinweis in Phase 0).
- **Exportkontrolle / Kryptografie:** Bei Verschlüsselung in der Software können Auflagen bestehen `[PRÜFEN]`.

### Welche Phasen ändern sich?

- Phase 11: Wo liegen lokale Daten, wie werden sie gesichert/verschlüsselt?
- Phase 12: Oft keine Konten (Einzelplatz); Rollen entfallen häufig.
- Phase 13: Entscheidung Electron/Tauri/nativ; Update-Mechanismus und Signierung als eigener Punkt.
- Phase 14: Bedrohungsmodell um „lokaler Angreifer“, „manipuliertes Update“, „bösartige Datei“ erweitern (`security/bedrohungsmodell.md`).
- Phase 18: Offline-Verhalten, Installation, Deinstallation.
- Phase 20: Kein Server-Betrieb für die App selbst, aber Update-Server und Absturzberichte.
- Phase 23: Store-Punkte nur falls Store; sonst eigene Punkte „Signierung geprüft, Update-Test durchgeführt“.

### Passt, wenn … / Passt nicht, wenn …

- **Passt:** Dateien/Geräte lokal nutzen, Offline-Betrieb, Arbeitswerkzeug für den Rechner.
- **Passt nicht:** Du willst maximale Reichweite mit minimalem Aufwand (dann Web-App); du hast keine Kapazität für Updates und Signierung.

---

## 7. Browser-Erweiterung

### Was ist das?

Eine **Erweiterung** (Extension, Add-on) erweitert den Browser: Sie kann Webseiten verändern, Schaltflächen in der Leiste anbieten, Tabs verwalten usw. Sie wird in einem **Store des Browser-Herstellers** angeboten (z. B. Chrome Web Store). Für Chrome-Erweiterungen gilt heute der Standard **Manifest V3** (die Beschreibungsdatei `manifest.json` legt fest, was die Erweiterung darf).

### Besonderheiten

- **Berechtigungen (Permissions):** Jede Fähigkeit (z. B. Zugriff auf alle Webseiten, auf Tabs, auf Downloads) muss im Manifest angegeben werden. Je mehr, desto strenger die Prüfung und desto misstrauischer die Nutzer. Laut Richtlinie sollst du die **engsten nötigen Berechtigungen** anfordern und keine Berechtigungen für Funktionen, die es noch nicht gibt.
- **Ein Zweck:** Eine Erweiterung soll einen klar umrissenen Zweck haben.
- **Verbot von nachgeladenem Programmcode:** Die Funktion muss im eingereichten Paket erkennbar sein; Logik von fremden Servern nachladen ist verboten.
- **Hohe Verantwortung:** Eine Erweiterung läuft im Browser der Nutzer und kann bei Fehlern oder Manipulation viele Daten sehen (Browserverlauf, Passwörter in Formularen, Cookies).
- **Review:** Dauer wird mit „meist wenige Tage, kann bis zu einigen Wochen dauern“ angegeben; neue Entwickler, neue Erweiterungen, gefährliche Berechtigungen und breite Host-Berechtigungen können die Prüfung verlängern (siehe Quellen).
- **Plattformunterschiede:** Andere Browser (Firefox, Safari, Edge) haben eigene Stores und teils abweichende Regeln. Wiederverwendbarkeit des Codes ist möglich, aber nicht garantiert `[PRÜFEN]`.

### Typische Sicherheitsfallen

| Falle | Regel | Hinweis |
|---|---|---|
| Zu breite Berechtigungen („alle Webseiten“) | 7.1 | Nur die Seiten, die wirklich nötig sind; sonst Berechtigung erst zur Laufzeit erfragen, wenn die Plattform das erlaubt. |
| Geheime Schlüssel im Erweiterungspaket | 1.1 | Das Paket ist für jeden lesbar. Teure Dienste über deinen Server mit Nutzer-Limit (4.5). |
| Daten der besuchten Seiten an eigene Server senden | 7.1, 7.2 | Nur, was im Zweck genannt und eingewilligt ist. Browser-Aktivität zu sammeln ist nach der Richtlinie stark eingeschränkt. |
| Nachrichten zwischen Seiteninhalt und Erweiterung ungeprüft vertrauen | 2.3, 5.1 | Alles, was eine Webseite der Erweiterung schickt, ist fremde Eingabe. |
| Ausgabe von Seiteninhalten ohne Escaping | 5.3 | Cross-Site-Scripting auch in Pop-ups und Seitenleisten. |
| Remote-Skripte oder `eval` | 9.1 | Verstoß gegen die Richtlinie und Sicherheitsrisiko. |
| Übernahme des Entwicklerkontos (Phishing) | 3.7 | Zwei-Faktor-Schutz auf dem Entwicklerkonto; ein gekaperter Account kann ein bösartiges Update an alle Nutzer schicken. |
| Verkauf der Erweiterung an Dritte | – | Neue Eigentümer können Schadcode ergänzen; Transparenz gegenüber Nutzern, Datenschutzerklärung anpassen. |

### Veröffentlichungsweg

1. Entwicklerkonto im Store (einmalige Registrierungsgebühr; Betrag im Store-Leitfaden `[PRÜFEN]`).
2. Paket als ZIP hochladen, Store-Eintrag, **Datenschutz-Angaben** (Zweck, Umgang mit Nutzerdaten), Hinweise für Tester falls nötig.
3. Zur Prüfung einreichen; optional verzögert veröffentlichen.
4. Updates laufen wieder über den Store.

Details: `guides/appstore-veroeffentlichung.md`.

### Rechtliche Besonderheiten

- **Datenschutzerklärung:** Verlangt der Store, sobald Nutzerdaten verarbeitet werden. Sie muss genau beschreiben, welche Daten erhoben, wofür genutzt und an wen weitergegeben werden.
- **Einwilligung vor der Installation:** Offenlegung muss sichtbar sein, bevor Nutzer die Erweiterung installieren.
- **Verbotene Datennutzungen** (z. B. Verkauf von Nutzerdaten, personalisierte Werbung mit solchen Daten) laut Store-Richtlinie.
- **Marken- und Urheberrecht:** Name und Symbol nicht an bekannte Marken anlehnen; Webseiten, die du veränderst, haben eigene Nutzungsbedingungen.

### Welche Phasen ändern sich?

- Phase 5: Zweck eng fassen („Ein Zweck“).
- Phase 7/8: Oberfläche = Pop-up, Seitenleiste, Einstellungen, Einblendungen in fremden Seiten.
- Phase 11/12: Meist wenig oder keine eigenen Konten; Datenarten durch Seiteninhalte beachten.
- Phase 13/14: Berechtigungs-Konzept als eigener Abschnitt; Bedrohungsmodell um „bösartige Webseite“.
- Phase 16: Datenschutzerklärung und Store-Angaben besonders sorgfältig.
- Phase 17: Meist keine Store-Provisionen für kostenlose Erweiterungen; Zahlung über eigenen Anbieter `[PRÜFEN]`.
- Phase 23: Store-Punkte (Chrome Web Store o. Ä.) statt App-Store-Punkte.

### Passt, wenn … / Passt nicht, wenn …

- **Passt:** Die Idee lebt davon, auf fremden Webseiten zu wirken.
- **Passt nicht:** Du brauchst eigene Oberflächen mit vielen Seiten, Konten und Daten (dann Web-App, ggf. mit Erweiterung als Ergänzung).

---

## 8. Spiele

### Was ist das?

Alles von Browser-Spielchen über Handy-Spiele bis zu PC- und Konsolen-Spielen. Viele Spiele nutzen eine **Engine** (Grundgerüst für Grafik, Physik, Eingaben). Beispiele (keine Empfehlung): Unity, Godot, Unreal Engine; für Browser-Spiele auch reine Web-Technik. Lizenzbedingungen und Gebühren der Engines ändern sich und müssen vor der Entscheidung geprüft werden `[PRÜFEN]`.

### Besonderheiten

- **Engine-Wahl** hängt von 2D/3D, Zielplattformen, Erfahrung und Lizenzkosten ab. Für Einsteiger: lieber eine verbreitete Engine mit viel Lernmaterial und KI-Unterstützung als eine exotische.
- **Store-Regeln für Spiele:**
  - Digitale Käufe (Währung, Level, Vollversion) laufen in den mobilen Stores über deren eigenes Kaufsystem; eigene Mechanismen wie Lizenzschlüssel sind nicht erlaubt (Apple 3.1.1, siehe Quellen).
  - Zufallsbasierte Käufe (Beutekisten, „Loot Boxes“) müssen die Gewinnchancen **vor dem Kauf** offenlegen (Apple 3.1.1).
  - Käufe, die nicht ablaufen dürfen (gekaufte Guthaben), und eine „Wiederherstellen“-Funktion für Käufe sind vorgeschrieben (Apple 3.1.1).
- **Altersfreigabe:** Die Stores fragen die Inhalte in einem Fragebogen ab (Gewalt, Glücksspiel-Elemente, Chat, nutzergenerierte Inhalte, Werbung …) und leiten daraus die Alterseinstufung ab. Apple lässt Apps ohne Einstufung nicht zu (siehe Quellen). In Deutschland gibt es zusätzlich Regeln des Jugendmedienschutzes und Kennzeichnungen (USK/IARC u. a.) `[PRÜFEN]`.
- **Mehrspieler:** Sobald Spieler gegeneinander oder miteinander spielen, entstehen Chat, Meldungen, Moderation, Sperren, Sicherheit der Verbindung.
- **Steam und andere PC-Stores:** Eigene Onboarding-Schritte und Gebühren (z. B. Gebühr pro Spiel bei Steam, Steuer- und Bankangaben, Prüfzeit, Wartezeiten bei den ersten Titeln – siehe Quellen).
- **Plattformübergreifende Konten:** Wer Käufe und Fortschritt konto-basiert speichert, braucht Datenschutz, Login und Löschfunktion (Phase 12, 15, 16).

### Typische Sicherheitsfallen

| Falle | Regel | Hinweis |
|---|---|---|
| Spiel-Client entscheidet über Punkte, Geld, Siege | 2.3, 2.6, 8.1 | **Server-Autorität:** Der Server berechnet das Ergebnis oder prüft es auf Plausibilität. Was der Client meldet, kann gefälscht sein (Cheat-Programme, Speicher-Editoren, manipulierte Pakete). |
| Anti-Cheat „nur im Client“ | 2.7 | Ein reiner Client-Schutz lässt sich umgehen. Rechne mit Betrug und begrenze den Schaden (Limits, Plausibilitätsprüfung, Sperrmechanismen, Meldefunktion, Auswertung auffälliger Konten). |
| Käufe werden lokal freigeschaltet | 8.1, 8.2 | Server prüft Kaufbeleg beim Store bzw. Webhook, bevor Inhalte oder Währung freigeschaltet werden. |
| Spielstände lokal ohne Schutz | 7.1 | Wenn Fortschritt Geld wert ist, speichere ihn auf dem Server. |
| Mehrspieler-Verbindungen ohne Authentisierung | 3.1, 4.1 | Jede Verbindung gehört einem geprüften Konto; Limits pro Verbindung gegen Überlastung. |
| Chat und Nutzerinhalte ohne Moderation | 5.3, 5.5 | Bei Kindern besonders kritisch (Jugendschutz). Meldewege und Filter einplanen. |
| Schlüssel für Server-Dienste (Bestenlisten, Cloud) im Spiel-Paket | 1.1 | Auch in Spielen auslesbar. |
| Drittanbieter-SDKs für Werbung/Analytics | 7.2, 9.1 | Sammeln oft Daten; Stores verlangen Offenlegung (Privacy Labels / Data Safety). |
| Währung/Items über Zahlen-Eingaben manipulierbar | 5.1, 2.6 | Alle Mengen und Preise serverseitig bestimmen. |
| Denial of Wallet durch Bots | 4.1, 4.5 | Kostenpflichtige Server-Funktionen (Matchmaking, Cloud-Speicher) mit Nutzerlimit und Budgetgrenze. |

### Veröffentlichungsweg

- **Mobile:** App Store / Google Play (siehe Store-Leitfaden), Testverteilung wie bei Apps.
- **PC:** Steam und andere Plattformen; eigene Onboarding-Schritte und Gebühren.
- **Web:** Als Web-App/PWA – kein Store, aber alle Regeln für Datenschutz und Jugendschutz gelten weiter.
- **Konsolen:** Eigene Entwicklerprogramme der Hersteller mit Zugangsvoraussetzungen `[PRÜFEN]`.

### Rechtliche Besonderheiten

- **Jugendschutz und Altersfreigaben** (USK/IARC/PEGI u. a.) `[PRÜFEN]`.
- **Glücksspiel-Elemente:** Zufallsbasierte Käufe, Casino-Mechaniken, „simuliertes Glücksspiel“ sind rechtlich und store-seitig heikel. In Phase 16 gezielt klären (Fachperson bei Zweifel).
- **Virtuelle Währung und Verbraucherrecht:** Preisangaben, Widerruf, Gutscheine, Abos – siehe `guides/recht-eu-ueberblick.md`.
- **Kinder und Jugendliche als Zielgruppe:** Stufe 3 nach `AGENTS.md` Abschnitt 5 (Daten von Kindern), strengere Store-Regeln (Apple Kinderkategorie), Einwilligung der Eltern.
- **Urheber- und Markenrecht:** Grafiken, Musik, Namen, Schriften – Herkunft und Lizenz dokumentieren (`guides/lieferkette.md`).
- **Steuer:** Einnahmen aus Käufen, Umsatzsteuer in verschiedenen Ländern – Fachberatung `[PRÜFEN]`.

### Welche Phasen ändern sich?

- Phase 3: Zielgruppe und **Alter** früh klären (Kinder? Jugendliche?).
- Phase 5: Kernspielschleife in den MVP; Mehrspieler oder Käufe oft erst in die zweite Version.
- Phase 6/7/8: Spiel-Zustände, Menüs, Pause, Einstellungen, Tutorial.
- Phase 11/12: Konten nur, wenn nötig; Spielstände, Käufe, Bestenlisten; Moderationsrollen.
- Phase 13: Engine-Wahl (Bewertungsmatrix: Kosten/Lizenz, Zielplattformen, Lernkurve, Leistung).
- Phase 14: Bedrohungsmodell um „Betrug/Manipulation“, „Bots“, „Missbrauch durch Chat“.
- Phase 17: Store-Provisionen, Plattform-Gebühren, Server-Kosten für Mehrspieler.
- Phase 18: Leistung (Bilder pro Sekunde), Akku, Speicherbedarf, Offline-Spielbarkeit.
- Phase 23: Altersfreigabe, Store-Angaben, Testverteilung.

### Passt, wenn … / Passt nicht, wenn …

- **Passt:** Die Idee ist ein Spiel oder spielerisch; du kannst Zeit in Gestaltung, Balance und Tests stecken.
- **Passt nicht:** Du willst nur eine „Gamification“ (Punkte/Abzeichen) in einer normalen App – das ist eine Funktion, kein Spiel.

---

## 9. Wearables und Smartwatch

### Was ist das?

Apps für Geräte am Körper: Smartwatches (z. B. Apple Watch mit watchOS, Wear OS-Uhren), Fitnessarmbänder u. Ä. Meist ist die Uhren-App eine **Ergänzung** zu einer Handy-App.

### Besonderheiten

- **Sehr kleiner Bildschirm, wenig Akku:** Nur wenige, wichtige Funktionen (Anzeige, Schnellaktion, Erinnerung, Sensorwerte).
- **Gesundheits- und Sensordaten:** Herzfrequenz, Bewegung, Schlaf, Standort. Diese Daten sind besonders sensibel (Gesundheitsdaten: Stufe 3 nach `AGENTS.md` Abschnitt 5).
- **Zielvorgaben des Systems:** Für Wear OS gelten eigene Mindest-Zielversionen für Updates im Play Store (siehe Quellen).
- **Konto-Löschung:** Bei Apps, die nicht „mobile-first“ sind (z. B. Wear OS), reicht laut Google ein leicht auffindbarer Weg **außerhalb** der App; er muss im Play Console eingetragen sein (siehe Quellen).
- **Kopplung:** Die Uhr tauscht Daten mit dem Handy aus (Bluetooth/WLAN). Das ist ein Übertragungsweg, den du absichern musst.
- **Synchronisierung:** Konflikte zwischen Handy- und Uhrdaten, Offline-Zeiten.

### Typische Sicherheitsfallen

| Falle | Regel | Hinweis |
|---|---|---|
| Gesundheitsdaten unverschlüsselt oder in Benachrichtigungen | 7.2 | Texte von Mitteilungen und Anzeigen am Handgelenk sind auch für Umstehende sichtbar. |
| Daten werden an Dritte oder Analyse-Dienste weitergegeben | 7.1, 7.2 | Gesundheitsdaten brauchen besonderen Schutz und ausdrückliche Einwilligung (Phase 16). |
| Schlüssel auf der Uhr gespeichert | 1.1 | Uhren sind leichter zu verlieren oder zu manipulieren. |
| Kopplung zwischen Uhr und Handy ohne Authentisierung | 3.1 | Nur zugelassene Verbindungen; Systemfunktionen der Hersteller nutzen. |
| Berechtigungen zu breit | 7.1 | Sensoren nur bei Bedarf. |
| Notfall-/Medizin-Versprechen | 2.1 | Aussagen wie „erkennt Herzprobleme“ können regulatorisch relevant sein (Medizinprodukt) `[PRÜFEN]`, Fachberatung. |

### Veröffentlichungsweg

Meist über denselben Store-Eintrag wie die Handy-App oder als eigenes Wear OS-Paket. Details je System: `[PRÜFEN]` bei den Entwicklerseiten von Apple und Google, plus `guides/appstore-veroeffentlichung.md`.

### Rechtliche Besonderheiten

- **Gesundheitsdaten (Art. 9 DSGVO)** – Einordnung in `guides/recht-eu-ueberblick.md` und Phase 16; Datenschutz-Folgenabschätzung prüfen.
- **Medizinprodukte-Recht:** Wenn die App medizinische Zwecke verspricht (Diagnose, Therapie), kann sie als Medizinprodukt gelten `[PRÜFEN]`. Sprich in der Beschreibung ehrlich über das, was die App kann und was nicht.
- **Store-Datenschutzangaben** zu Gesundheits- und Sensordaten genau ausfüllen.

### Welche Phasen ändern sich?

- Phase 0/11: Risikostufe fast immer 3, sobald Gesundheits- oder Standortverlaufsdaten.
- Phase 5: Die Uhr nicht in den ersten MVP packen, wenn die Handy-App noch nicht trägt.
- Phase 7/8: Winzige Bildschirme, Bedienung mit einer Hand, Kurzinfos.
- Phase 14/16: Gesundheits- und Sensordaten-Schutz, Einwilligungen.
- Phase 18: Akku, Hintergrundlaufzeiten.
- Phase 19: Tests auf echten Uhren.

### Passt, wenn … / Passt nicht, wenn …

- **Passt:** Es geht um kurze, sensornahe Interaktion; die Handy-App existiert bereits.
- **Passt nicht:** Du willst lange Eingaben, Texte oder komplexe Verwaltung auf der Uhr.

---

## 10. Bots und Chat-Integrationen

### Was ist das?

Ein **Bot** ist ein Programm, das in einem Chat-Dienst (Slack, Discord, Telegram, Teams u. a.) Nachrichten liest, Befehle versteht und antwortet. Eine **Integration** verbindet deinen Dienst mit einem solchen Chat (z. B. Benachrichtigungen, Slash-Befehle).

### Besonderheiten

- **Kein eigenes Frontend nötig:** Die Oberfläche ist der Chat.
- **Du bist Gast bei einer Plattform:** Regeln, Schnittstellen und Gebühren der Plattform können sich ändern. Plane einen Ausstieg ein.
- **Zwei typische Verbindungsarten:** (1) Die Plattform ruft **deinen Webhook** auf (eine Internetadresse bei dir), (2) dein Bot hält eine **dauerhafte Verbindung** zur Plattform. Webhooks sind öffentlich erreichbar – jeder könnte sie aufrufen, also musst du prüfen, dass der Aufruf wirklich von der Plattform stammt.
- **Zugangsdaten:** Jeder Bot hat ein **Token** (geheimer Schlüssel). Wer das Token hat, kann als Bot handeln.
- **Rechte (Scopes):** Du forderst bei der Installation Berechtigungen an (Nachrichten lesen, schreiben, Kanäle verwalten …). Jede zusätzliche Berechtigung vergrößert den Schaden bei einem Missbrauch.
- **Installation in fremden Arbeitsbereichen:** Nutzer müssen dem Bot vertrauen; Datenschutzerklärung und klare Beschreibung sind nötig.
- **Rate Limits der Plattform:** Plattformen begrenzen Anfragen pro Zeit. Dein Bot muss damit umgehen (Wiederholung mit Wartezeit).

### Typische Sicherheitsfallen

| Falle | Regel | Hinweis |
|---|---|---|
| Bot-Token im Quellcode, in Logs oder im Repository | 1.1, 1.3, 1.4 | Token nur serverseitig in geschützten Umgebungsvariablen; bei Verdacht sofort erneuern. |
| Webhook prüft nicht, wer anruft | 8.2 | **Signatur prüfen:** Slack signiert Anfragen (Signing Secret, Zeitstempel; unverarbeiteten Rohtext prüfen, Zeitfenster gegen Wiederholung); Discord verlangt Signaturprüfung (Ed25519, ungültige Signatur → Fehlerantwort) und testet Endpunkte mit absichtlich falschen Signaturen; Telegram erlaubt ein geheimes Token im Header jedes Webhook-Aufrufs (siehe Quellen). Konkrete Zeitfenster stammen aus der Plattform-Doku bzw. `security/standardwerte.md`. |
| Wiederholte Zustellung doppelt verarbeitet | 8.2 | Verarbeitung **idempotent** machen (mehrfach gleiche Wirkung wie einmal). |
| Bot führt Befehle für jeden aus, der ihn schreibt | 2.1, 2.7 | Jede Aktion prüft: Wer ist der Nutzer, hat er das Recht, in diesem Kanal/Arbeitsbereich? Rollen nie aus dem Nachrichtentext übernehmen. |
| Bot hat mehr Rechte, als er braucht | 7.1 | Minimale Scopes; Rechte regelmäßig prüfen. |
| Nutzer-Nachrichten gehen ungeprüft in Datenbank, Befehle oder KI-Prompt | 5.1, 5.2, 8.4 | Prompt-Injektion: Ein Bot mit KI-Anbindung darf auf Anweisung in Nachrichten nicht mehr tun, als der schreibende Nutzer selbst dürfte. |
| Daten aus einem Arbeitsbereich tauchen in einem anderen auf | 2.1 | Mandantentrennung: Jede Abfrage ist an den Arbeitsbereich gebunden. |
| Kostenverursachende Funktionen ohne Limit (KI, SMS, Zusatzdienste) | 4.1, 4.5 | Limit pro Nutzer und pro Arbeitsbereich plus Budgetgrenze. |
| Links in Nachrichten werden serverseitig abgerufen | 5.6 | SSRF-Schutz: nur erlaubte Ziele, keine internen Adressen. |
| Sensible Daten in Bot-Antworten oder Logs | 7.2 | Nachrichten können in Kanälen von vielen gelesen werden. |

### Veröffentlichungsweg

- **Nur intern:** Eigene Installation im eigenen Arbeitsbereich, keine Prüfung durch die Plattform (Phase 23 verkürzt).
- **Öffentlich:** Eintrag in einem App-Verzeichnis der Plattform (z. B. Slack App Directory) mit Prüfung; Anforderungen und Fristen prüfen `[PRÜFEN]`.
- **Telegram:** Bots sind sofort nutzbar, es gibt keinen klassischen Store-Prozess `[PRÜFEN]`.
- **Discord:** Für große Bots können Prüfungen (z. B. bei vielen Servern) und Einschränkungen gelten `[PRÜFEN]`.

### Rechtliche Besonderheiten

- **Datenschutz:** Du verarbeitest Nachrichten fremder Personen. Datenschutzerklärung, Auftragsverarbeitung (wenn für Organisationen), Speicherdauer und Löschung klären (Phase 16).
- **Plattform-Bedingungen** der Anbieter (Entwickler-Richtlinien) gelten zusätzlich; Verstöße führen zur Sperre des Bots.
- **Nutzung in Organisationen:** Betriebsrat, Datenschutzbeauftragte und IT-Sicherheit der Kunden haben oft Mitsprache.
- **Kinder:** Chat-Plattformen haben Altersgrenzen; Bots, die sich an Minderjährige richten, brauchen besondere Sorgfalt (Stufe 3).

### Welche Phasen ändern sich?

- Phase 5: Welche Befehle/Ereignisse unterstützt der Bot im MVP?
- Phase 7/8: „Screens“ sind Nachrichten, Buttons, Formulare im Chat. Wireframes als Gesprächsabläufe.
- Phase 9/10: Design-System entfällt weitgehend; Barrierefreiheit durch klare, kurze Texte.
- Phase 12: Rollen leiten sich aus der Plattform ab (Arbeitsbereich, Administrator); trotzdem serverseitig prüfen.
- Phase 13/14/15: Webhook-Sicherheit, Token-Verwaltung, Plattform-Anmeldung (OAuth).
- Phase 20: Betrieb rund um die Uhr; Webhooks müssen erreichbar sein; Monitoring und Wiederholungen.

### Passt, wenn … / Passt nicht, wenn …

- **Passt:** Die Zielgruppe nutzt schon täglich den Chat-Dienst; die Funktionen sind kurz und gesprächsartig.
- **Passt nicht:** Du brauchst komplexe Oberflächen oder bist nicht bereit, dich an die Plattformregeln zu binden.

---

## 11. Reine API oder Backend-Dienst

### Was ist das?

Ein Dienst ohne eigene Oberfläche: Andere Programme (oder Entwickler) rufen ihn über eine **Schnittstelle (API)** auf. Beispiele: Preis-Rechner-Dienst, Datenabruf, Automatisierungs-Endpunkt, Webhook-Empfänger.

### Besonderheiten

- **Kein Mensch, sondern Software ist der Nutzer:** Dokumentation, stabile Schnittstelle und klare Fehlermeldungen sind das „Design“.
- **Versionierung:** Änderungen dürfen bestehende Nutzer nicht brechen. Plane Versionen und Übergangsfristen ein.
- **Authentisierung für Maschinen:** API-Schlüssel oder Tokens je Kunde, mit Rechten und Widerruf.
- **Missbrauchsschutz hat Priorität:** Anfragen kommen automatisiert und in großer Zahl.
- **Betrieb:** Verfügbarkeit, Überwachung, Fehlerberichte, Kostenkontrolle sind zentral (Phase 20).
- **Abrechnung:** Oft nutzungsabhängig – dafür braucht es genaue Zähler (Phase 17).

### Typische Sicherheitsfallen

| Falle | Regel | Hinweis |
|---|---|---|
| Endpunkte ohne Zugriffsprüfung pro Datensatz | 2.1, 2.3, 2.5 | Besonders „Objekt-ID erraten“-Angriffe. |
| API-Schlüssel ohne Rechte-Eingrenzung oder Widerrufsmöglichkeit | 3.1, 2.7 | Je Schlüssel minimale Rechte, rotierbar, protokolliert (9.4). |
| Kein Rate Limiting pro Schlüssel **und** IP | 4.1, 4.3 | Mit eindeutiger Fehlerantwort. |
| Fehlende Größenbegrenzungen | 4.4 | Anfragen, Antworten, Listen. |
| Eingaben nicht validiert | 5.1, 5.2 | Schema-Prüfung auf dem Server. |
| Zu freizügige Cross-Origin-Einstellungen | 6.3 | Auch für reine APIs relevant, falls Browser sie aufrufen. |
| Fehlermeldungen verraten interne Details | 9.3 | |
| Webhooks, die du **sendest**: Ziel-URL vom Kunden frei wählbar | 5.6 | SSRF: Adressen prüfen, interne Ziele sperren. |
| Webhooks, die du **empfängst**: ohne Signaturprüfung | 8.2 | |
| Kein Schutz vor Kostenexplosion | 4.5 | Budget-Alarm, Limits pro Kunde. |
| Dokumentation zeigt echte Schlüssel oder Beispieldaten mit Personenbezug | 1.1, 7.2 | |

### Veröffentlichungsweg

- Hosting mit HTTPS und Domain, Zugangsverwaltung, Dokumentation (z. B. eine API-Beschreibung), Status-Seite, Support-Weg.
- Optional: Verzeichnisse oder Marktplätze für APIs `[PRÜFEN]`.
- Wenn Kunden Software von dir einbinden: Versions- und Änderungsprozess (`templates/release-checkliste.md`).

### Rechtliche Besonderheiten

- **Nutzungsbedingungen / Vertragsbedingungen** für Entwickler/Kunden (Haftung, Verfügbarkeit, Fair Use).
- **Datenschutz:** Wenn du für Kunden personenbezogene Daten verarbeitest, bist du oft „Auftragsverarbeiter“ – Auftragsverarbeitungsvertrag (AVV) nötig (`guides/recht-eu-ueberblick.md`).
- **Verfügbarkeits-Zusagen (SLA):** Nur versprechen, was du betreiben kannst.
- **Urheber- und Lizenzfragen** bei Daten, die du ausliefern darfst.

### Welche Phasen ändern sich?

- Phase 6/7/8/9: Entfallen oder werden zu „Ablaufbeschreibung der Aufrufe“ (Beispielaufrufe statt Mockups); Visuals als Sequenzdiagramme (Mermaid) statt HTML-Wireframes.
- Phase 10: Barrierefreiheit der Dokumentation und Fehlermeldungen.
- Phase 12: Rollen = Schlüssel-Rechte.
- Phase 13/14/15: API-Design, Authentisierung für Maschinen, Rate Limits.
- Phase 18: Antwortzeiten, Verfügbarkeit, Versionierung.
- Phase 20: Betrieb, Monitoring und Incident-Plan (`templates/incident-plan.md`, `templates/support-playbook.md`) sind besonders wichtig.
- Phase 23: Store-Punkte `n/a`; Betriebs- und Dokumentationspunkte wichtiger.

### Passt, wenn … / Passt nicht, wenn …

- **Passt:** Deine Nutzer sind Entwickler oder Programme; die Funktion lässt sich als klare Anfrage/Antwort beschreiben.
- **Passt nicht:** Endnutzer sollen direkt etwas bedienen – dann braucht es zusätzlich eine Oberfläche.

---

## 12. Übersicht: Was ändert sich in welcher Phase?

Legende: **●** wichtig, **○** nebensächlich, **–** entfällt oder stark verkürzt. Die Tabelle ist eine Orientierung; endgültig entscheidet die KI mit dir in Phase 0 und 13 und trägt Abweichungen in `PROJECT_STATE.md` ein.

| Phase | Web/PWA | Native/Cross | Desktop | Erweiterung | Spiel | Wearable | Bot | API |
|---|---|---|---|---|---|---|---|---|
| 5 MVP-Scope | ○ | ○ | ○ | ● (ein Zweck) | ● (Kernschleife) | ● (nur Wichtiges) | ● (Befehle) | ● (Endpunkte) |
| 6–8 Flows, Screens, Mockups | ● | ● | ● | ● (Pop-up/Seitenleiste) | ● (Menüs/Spielzustände) | ● (Mini-Screens) | ○ (Dialoge) | – (Beispielaufrufe) |
| 9 Design-System | ● | ● | ● | ○ | ● | ○ | – | – |
| 10 Barrierefreiheit | ● | ● | ● | ● | ● | ○ | ○ | ○ (Dokumentation) |
| 11 Daten | ● | ● | ● (lokal) | ● (Seiteninhalte) | ● | ● (Sensoren) | ● (Nachrichten) | ● |
| 12 Rollen | ● | ● | ○ | ○ | ● (Moderation) | ○ | ○ (Plattform-Rollen) | ● (Schlüssel) |
| 13 Tech-Stack | ● | ● (Store-Weg) | ● (Update/Signierung) | ● (Manifest) | ● (Engine) | ● | ● (Webhook/Token) | ● |
| 14 Sicherheit | ● | ● | ● (lokaler Code) | ● (Berechtigungen) | ● (Server-Autorität) | ● | ● (Signaturen) | ● |
| 15 Login/Zahlung | ● | ● (Store-Käufe) | ● | ○ | ● (Store-Käufe) | ○ | ● (OAuth) | ● (Schlüssel) |
| 16 Recht | ● | ● | ● | ● | ● (Jugendschutz) | ● (Gesundheit) | ● | ● |
| 17 Kosten | ○ | ● (Store-Provision) | ● (Signierung) | ○ | ● (Provision) | ○ | ○ | ● (Nutzung) |
| 18 Nicht-funktionale | ● | ● | ● | ○ | ● (Leistung) | ● (Akku) | ○ | ● |
| 19 Tests | ● | ● (Geräte) | ● (Systeme) | ● (Browser) | ● (Geräte, Betrug) | ● | ● | ● |
| 20 Betrieb | ● | ○ | ○ (Update-Server) | ○ | ● (Server) | ○ | ● | ● |
| 23 Launch | ● (Web) | ● (Stores) | ● (Signierung) | ● (Store) | ● (Store, Alter) | ● | ○ | ● (Doku, Betrieb) |

---

## 13. So hältst du die Plattform-Entscheidung fest

Die KI trägt die Entscheidung an **drei Stellen** ein:

1. **`00-start.md`** (Phase 0): Plattform-Zeile (z. B. „Web-App/PWA“, „Native iOS + Android“, „Desktop (Windows, macOS)“, „Browser-Erweiterung (Chrome)“, „Spiel (Handy)“, „Bot (Slack)“, „API“).
2. **`13-architektur.md`** (Phase 13): Abschnitt „Plattform“ mit Begründung und verworfenen Alternativen; Entscheidung in `ENTSCHEIDUNGEN.md` als `E-…`.
3. **`PROJECT_STATE.md`**: Phasen, die laut Abschnitt 12 entfallen oder verkürzt werden, mit Grund (`übersprungen (<Grund>)`).

Ändert sich die Plattform später, gilt `AGENTS.md` Abschnitt 10 (Zurückspringen): Phasen 5, 6, 7, 8, 13, 14, 15, 17 und 23 sind dann als `⚠️ prüfen` zu markieren.

---

## Quellen

Geprüft am 2026-10-14. Stores und Hersteller ändern ihre Regeln; vor dem Launch und spätestens zum Datum in der letzten Spalte neu prüfen.

| Aussage | URL | Art | Prüfdatum | neu prüfen bis |
|---|---|---|---|---|
| Apple: Digitale Funktionen und Inhalte müssen über In-App-Kauf angeboten werden (keine eigenen Mechanismen wie Lizenzschlüssel); Zufallskäufe müssen Gewinnchancen vor dem Kauf offenlegen; erworbene Guthaben dürfen nicht verfallen; Wiederherstellung von Käufen (Richtlinie 3.1.1) | https://developer.apple.com/app-store/review/guidelines/ | Primärquelle | 2026-10-14 | vor Launch, spätestens 2027-01-31 |
| Apple: Kinderkategorie (1.3) und Kinderdaten (5.1.4): keine Fremd-Analyse/Werbung (enge Ausnahmen), Elternschranke für Links und Käufe | https://developer.apple.com/app-store/review/guidelines/ | Primärquelle | 2026-10-14 | vor Launch, spätestens 2027-01-31 |
| Apple: Konto-Löschung in der App ist Pflicht, wenn die App Kontoerstellung anbietet (5.1.1(v)) | https://developer.apple.com/app-store/review/guidelines/ | Primärquelle | 2026-10-14 | vor Launch, spätestens 2027-01-31 |
| Apple: App Store Connect verlangt eine Altersfreigabe (Fragebogen); Apps ohne Einstufung können nicht im App Store veröffentlicht werden | https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions | Primärquelle | 2026-10-14 | vor Launch, spätestens 2027-01-31 |
| Google Play: Für Apps mit Kontoerstellung sind In-App-Lösch-Weg und Web-Link nötig; nicht mobile-first Apps (z. B. Wear OS, Android TV) brauchen einen leicht auffindbaren Weg außerhalb der App | https://support.google.com/googleplay/android-developer/answer/13327111 | Primärquelle | 2026-10-14 | vor Launch, spätestens 2027-01-31 |
| Google Play: Ab 2026-08-31 müssen neue Apps und Updates Android 16 (API 36) als Ziel haben; Wear OS und Android Automotive mindestens Android 15 (API 35), Android TV und XR mindestens Android 14 (API 34); Verlängerung bis 2026-11-01 beantragbar | https://developer.android.com/google/play/requirements/target-sdk | Primärquelle | 2026-10-14 | vor jedem Release (jährliche Anhebung) |
| Chrome Web Store: Ein Zweck, engste Berechtigungen, Datenschutz-Offenlegung, Verbot von Remote-Code, Datenschutzerklärung bei Nutzerdaten | https://developer.chrome.com/docs/webstore/program-policies/policies | Primärquelle | 2026-10-14 | vor Launch, spätestens 2027-01-31 |
| Chrome Web Store: Review „meist wenige Tage, bis zu einigen Wochen“; verlängert bei neuen Entwicklern/Erweiterungen, gefährlichen und breiten Host-Berechtigungen | https://developer.chrome.com/docs/webstore/review-process | Primärquelle | 2026-10-14 | vor Launch, spätestens 2027-01-31 |
| Chrome: Manifest V3 entfernt gehosteten Programmcode; Erweiterungen führen nur mitgelieferten Code aus | https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3 | Primärquelle | 2026-10-14 | 2027-01-31 |
| Electron: Sicherheits-Empfehlungen (Kontext-Isolierung, Node-Integration aus bei fremdem Inhalt, Sandbox, Berechtigungs-Handler, CSP, IPC-Absender prüfen, `shell.openExternal` nicht mit unvertrauten Daten) | https://www.electronjs.org/docs/latest/tutorial/security | Primärquelle | 2026-10-14 | 2027-01-31 |
| Tauri: Signatur für Updater ist Pflicht und nicht abschaltbar; privater Schlüssel geheim halten, bei Verlust keine neuen Updates für bestehende Installationen | https://v2.tauri.app/plugin/updater/ | Primärquelle | 2026-10-14 | 2027-01-31 |
| Slack: Anfragen werden mit Signing Secret signiert; Rohtext prüfen; Zeitstempel gegen Wiederholung prüfen | https://docs.slack.dev/authentication/verifying-requests-from-slack/ | Primärquelle | 2026-10-14 | 2027-01-31 |
| Discord: Interaktions-Endpunkte müssen Signatur (Ed25519) prüfen; bei ungültiger Signatur Fehlerantwort; Discord testet mit ungültigen Signaturen | https://docs.discord.com/developers/interactions/overview | Primärquelle | 2026-10-14 | 2027-01-31 |
| Telegram: `secret_token` bei `setWebhook` wird in jedem Webhook-Aufruf im Header mitgesendet; Webhook-URL muss HTTPS sein | https://core.telegram.org/bots/api#setwebhook | Primärquelle | 2026-10-14 | 2027-01-31 |
| Steam: Gebühr pro Produkt, Onboarding mit Verträgen, Bank-/Steuerangaben und Identitätsprüfung, Review; für die ersten Titel Wartezeiten | https://partner.steamgames.com/doc/gettingstarted/onboarding | Primärquelle | 2026-10-14 | vor Launch, spätestens 2027-01-31 |
| Alle Aussagen mit `[PRÜFEN]` (PWA-Funktionsumfang je System, Engine-Lizenzen, Jugendmedienschutz/USK/IARC, Konsolen-Programme, Medizinprodukte-Einstufung, Plattformprüfungen für Bots, Notarisierung/Zertifikate) | – | Annahme | 2026-10-14 | vor der jeweiligen Entscheidung |
