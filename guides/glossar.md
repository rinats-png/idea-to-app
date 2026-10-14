# Glossar – Fachbegriffe einfach erklärt

| Begriff | Einfach erklärt |
|---|---|
| **2FA / Zwei-Faktor-Authentisierung** | Anmeldung mit Passwort **plus** etwas Zweitem, z. B. einem Code aus einer App auf dem Handy. |
| **Admin** | Nutzer mit besonderen Rechten zur Verwaltung der App. |
| **Akzeptanzkriterium** | Eine prüfbare Bedingung, wann eine Funktion „fertig“ ist. |
| **API** | Schnittstelle, über die Programme miteinander reden – z. B. die App mit dem Server. |
| **API-Schlüssel (API-Key)** | Eine Art Passwort, mit dem sich ein Programm bei einem Dienst anmeldet. Geheime Schlüssel gehören nie in die App selbst. |
| **Argon2id / bcrypt** | Verfahren, um Passwörter so zu speichern, dass man sie nicht zurückrechnen kann („Hashing“). |
| **ASO (App-Store-Optimierung)** | Die Auffindbarkeit deiner App in den Stores verbessern: Name, Schlagwörter, Beschreibung, Screenshots. |
| **Audit-Log** | Protokoll, das festhält, wer wann welche wichtige Aktion ausgeführt hat. |
| **AVV** | Auftragsverarbeitungsvertrag – Vertrag mit Dienstleistern, die personenbezogene Daten für dich verarbeiten. |
| **Backend** | Der Teil der App, der auf dem Server läuft und den Nutzer nicht sieht. |
| **BFSG** | Barrierefreiheitsstärkungsgesetz – verpflichtet bestimmte digitale Angebote zur Barrierefreiheit. |
| **BOLA / IDOR** | Sicherheitslücke: Jemand ändert eine ID (z. B. in der Adresszeile) und sieht fremde Daten, weil der Server nicht prüft, wem sie gehören. |
| **Brute Force** | Angriff durch massenhaftes Durchprobieren, z. B. von Passwörtern. |
| **CAPTCHA** | Test, der Menschen von Bots unterscheiden soll. |
| **CI / CI-Pipeline** | Automatik, die bei jeder Code-Änderung Tests ausführt. |
| **Core Web Vitals** | Messwerte, mit denen Google bewertet, wie schnell, reaktionsfähig und stabil eine Webseite beim Laden wirkt. |
| **CORS** | Browser-Regel, welche fremden Webseiten auf deine Schnittstelle zugreifen dürfen. |
| **CSP (Content-Security-Policy)** | Regel an den Browser, aus welchen Quellen er Skripte, Bilder usw. laden darf. Schützt vor eingeschleustem Code. |
| **CSRF** | Angriff, bei dem eine fremde Webseite im Namen eines angemeldeten Nutzers Aktionen auslöst. |
| **Datenklassifizierung** | Einteilung von Daten nach Schutzbedarf (öffentlich, intern, personenbezogen, besonders schützenswert). |
| **Deny by default** | Grundregel: Alles ist verboten, was nicht ausdrücklich erlaubt ist. |
| **Deployment** | Das Veröffentlichen einer neuen Version auf dem Server. |
| **Design-Token** | Benannter Gestaltungswert, z. B. `color-primary = #2f5d8a`. |
| **DSFA** | Datenschutz-Folgenabschätzung – Pflichtprüfung bei besonders riskanter Datenverarbeitung. |
| **DSGVO** | Datenschutz-Grundverordnung der EU. |
| **Edge Function** | Kleines Programm auf dem Server eines Anbieters, z. B. um geheime Schlüssel sicher zu nutzen. |
| **expand/contract** | Zwei-Schritt-Methode für Datenbankänderungen: erst Neues hinzufügen und beide Wege gleichzeitig unterstützen, später das Alte entfernen. So kann nichts mitten im Betrieb kaputtgehen. |
| **Feature-Flag** | Schalter, mit dem eine Funktion ein- oder ausgeschaltet wird, ohne die App neu zu veröffentlichen. Praktisch für vorsichtige Einführung – und ein Risiko, wenn alte Schalter liegen bleiben. |
| **Frontend** | Der Teil der App, den der Nutzer sieht und bedient (läuft auf seinem Gerät). |
| **Gate** | In idea-to-app: der Halt am Ende jeder Phase mit der Frage „weiter oder ergänzen?“. |
| **Handoff** | Übergabepaket mit allen Plänen an das Coding-Tool. |
| **Hashing** | Einweg-Umwandlung: Aus dem Passwort wird ein Wert, aus dem sich das Passwort nicht zurückgewinnen lässt. |
| **HTTPS / HSTS** | Verschlüsselte Verbindung / Regel, dass ein Browser nur verschlüsselt verbinden darf. |
| **i18n** | Internationalisierung – App so bauen, dass Texte leicht übersetzt werden können. |
| **Incident / Vorfall** | Eine Störung oder ein Sicherheitsvorfall, der schnelles, geordnetes Handeln braucht, z. B. ein ausgespähter Schlüssel oder ein Datenleck. Der Incident-Plan sagt vorher, wer was tut. |
| **Kalendertag** | Ein Datum ohne Uhrzeit (z. B. Geburtstag). Wird ohne Zeit gespeichert, damit es beim Umrechnen der Zeitzone nicht auf den Nachbartag rutscht. |
| **KI-Verordnung (EU AI Act)** | EU-Gesetz zur Regulierung von KI-Systemen. Für Apps mit KI-Funktionen kommen vor allem Transparenzpflichten in Frage. Stand und Fristen ändern sich – siehe `guides/recht-eu-ueberblick.md`. |
| **Lieferkette (Software)** | Alles, was in deine App einfließt, ohne dass du es selbst geschrieben hast: Pakete, Bibliotheken, Build-Werkzeuge. Ein Fehler oder Angriff dort landet in deiner App. |
| **Lockfile** | Datei, die genau festhält, welche Versionen von Fremdbibliotheken genutzt werden. |
| **Mass Assignment** | Lücke: Der Server übernimmt blind alle Felder aus einer Anfrage – auch solche wie „role: admin“. |
| **Mermaid** | Einfache Textsprache für Diagramme, die viele Tools direkt als Grafik anzeigen. |
| **Migration (Datenbank)** | Eine versionierte, nachvollziehbare Änderung am Aufbau der Datenbank. Wird vorab getestet und nie von Hand in Produktion gemacht. |
| **Mockup / Wireframe** | Skizze eines Bildschirms. Wireframe = schlicht und grau, Mockup = näher am fertigen Aussehen. |
| **MVP** | Minimum Viable Product – die kleinste Version, die das Kernproblem löst. |
| **Nachweis** | Etwas, womit man nachprüfen kann, dass ein Punkt erfüllt ist: Datum, Link, Dateipfad, ID oder Commit-Nummer. „Erledigt“ ist kein Nachweis. |
| **NICHT GEPRÜFT** | Meldung des Prüfskripts: Es konnte einen Teil nicht auswerten, meist weil IDs nicht in Tabellen stehen. Das ist kein „alles in Ordnung“. |
| **OWASP / ASVS** | Gemeinnützige Organisation für Anwendungssicherheit / deren prüfbarer Sicherheitsstandard in Stufen. |
| **Persona** | Erfundene, realistische Beispielperson aus der Zielgruppe. |
| **Postmortem** | Nachbesprechung nach einem Vorfall: Was ist passiert, warum, was ändern wir? Ohne Schuldzuweisung, damit man ehrlich sein kann. |
| **Prompt-Injection** | Angriff auf KI-Funktionen: Versteckte Anweisungen in Texten bringen die KI dazu, etwas Unerwünschtes zu tun. |
| **PWA** | Progressive Web App – Webseite, die sich wie eine App installieren lässt und teils offline läuft. |
| **Rate Limiting** | Begrenzung, wie oft jemand eine Aktion in einer bestimmten Zeit ausführen darf. |
| **Regelwerk-Version** | Die Versionsnummer von idea-to-app, mit der ein Projekt begonnen wurde. Hilft zu erkennen, ob sich seitdem Regeln geändert haben. |
| **Repository (Repo)** | Projektordner mit Versionsgeschichte, meist auf GitHub. |
| **RLS (Row Level Security)** | Regeln direkt in der Datenbank, welche Zeilen ein Nutzer sehen oder ändern darf. |
| **Rollback** | Zurück zur letzten funktionierenden Version, wenn ein neues Release Probleme macht. |
| **SBOM** | Software-Stückliste: Liste aller Bestandteile und Versionen einer App. Hilft, bei einer bekannt gewordenen Schwachstelle schnell zu sehen, ob man betroffen ist. |
| **Secret** | Geheimer Wert wie Passwort oder geheimer API-Schlüssel. |
| **SEO** | Suchmaschinen-Optimierung: dafür sorgen, dass eine Webseite in Suchergebnissen gefunden und gut dargestellt wird. |
| **Session / Sitzung** | Die „Anmeldung“ zwischen Login und Logout. |
| **Signierung** | Digitale Unterschrift unter einer App oder einem Installationspaket. Zeigt, von wem sie stammt und dass sie nicht verändert wurde. Stores und Betriebssysteme verlangen sie oft. |
| **SSRF** | Angriff, bei dem der Server dazu gebracht wird, interne Adressen abzurufen. |
| **Tech-Stack** | Die Kombination an Technologien, aus denen eine App gebaut ist. |
| **Typosquatting / Slopsquatting** | Angriff über ähnlich klingende oder von KI erfundene Paketnamen: Jemand registriert den Namen und schmuggelt Schadcode ein, sobald ihn ein Entwickler (oder eine KI) installiert. |
| **User-Flow** | Abfolge der Schritte, die ein Nutzer für ein Ziel durchläuft. |
| **User Story** | Kurze Beschreibung einer Funktion aus Nutzersicht: „Als … möchte ich …, damit …“. |
| **UTC** | Weltzeit ohne Sommerzeit. Zeitpunkte, die wirklich passiert sind, speichert man in UTC und rechnet sie erst bei der Anzeige in die Ortszeit um. |
| **UUID** | Lange, zufällige Kennung, z. B. `3f2b…`, statt fortlaufender Nummern. |
| **Wandzeit** | Eine Uhrzeit an einem Ort („Schicht beginnt um 22:00 in Frankfurt“). Wird mit dem Namen der Zeitzone gespeichert, damit sie nach der Zeitumstellung gleich bleibt. |
| **Webhook** | Automatische Nachricht eines Dienstes an deinen Server, z. B. „Zahlung eingegangen“. |
| **XSS** | Angriff, bei dem fremder Code über Nutzereingaben in die Seite gelangt. |
| **Zeitzone (IANA)** | Standardisierte Namen wie `Europe/Berlin`, mit denen Programme die richtigen Regeln für Sommerzeit und Umstellungen finden. Nie selbst nachrechnen. |
