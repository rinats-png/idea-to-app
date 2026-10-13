# Glossar – Fachbegriffe einfach erklärt

| Begriff | Einfach erklärt |
|---|---|
| **2FA / Zwei-Faktor-Authentisierung** | Anmeldung mit Passwort **plus** etwas Zweitem, z. B. einem Code aus einer App auf dem Handy. |
| **Admin** | Nutzer mit besonderen Rechten zur Verwaltung der App. |
| **Akzeptanzkriterium** | Eine prüfbare Bedingung, wann eine Funktion „fertig“ ist. |
| **API** | Schnittstelle, über die Programme miteinander reden – z. B. die App mit dem Server. |
| **API-Schlüssel (API-Key)** | Eine Art Passwort, mit dem sich ein Programm bei einem Dienst anmeldet. Geheime Schlüssel gehören nie in die App selbst. |
| **Argon2id / bcrypt** | Verfahren, um Passwörter so zu speichern, dass man sie nicht zurückrechnen kann („Hashing“). |
| **Audit-Log** | Protokoll, das festhält, wer wann welche wichtige Aktion ausgeführt hat. |
| **AVV** | Auftragsverarbeitungsvertrag – Vertrag mit Dienstleistern, die personenbezogene Daten für dich verarbeiten. |
| **Backend** | Der Teil der App, der auf dem Server läuft und den Nutzer nicht sieht. |
| **BFSG** | Barrierefreiheitsstärkungsgesetz – verpflichtet bestimmte digitale Angebote zur Barrierefreiheit. |
| **BOLA / IDOR** | Sicherheitslücke: Jemand ändert eine ID (z. B. in der Adresszeile) und sieht fremde Daten, weil der Server nicht prüft, wem sie gehören. |
| **Brute Force** | Angriff durch massenhaftes Durchprobieren, z. B. von Passwörtern. |
| **CAPTCHA** | Test, der Menschen von Bots unterscheiden soll. |
| **CI / CI-Pipeline** | Automatik, die bei jeder Code-Änderung Tests ausführt. |
| **CORS** | Browser-Regel, welche fremden Webseiten auf deine Schnittstelle zugreifen dürfen. |
| **CSP (Content-Security-Policy)** | Regel an den Browser, aus welchen Quellen er Skripte, Bilder usw. laden darf. Schützt vor eingeschleustem Code. |
| **CSRF** | Angriff, bei dem eine fremde Webseite im Namen eines angemeldeten Nutzers Aktionen auslöst. |
| **Datenklassifizierung** | Einteilung von Daten nach Schutzbedarf (öffentlich, intern, personenbezogen, besonders schützenswert). |
| **Deny by default** | Grundregel: Alles ist verboten, was nicht ausdrücklich erlaubt ist. |
| **Deployment** | Das Veröffentlichen einer neuen Version auf dem Server. |
| **Design-Token** | Benannter Gestaltungswert, z. B. `color-primary = #2f5d8a`. |
| **DSGVO** | Datenschutz-Grundverordnung der EU. |
| **DSFA** | Datenschutz-Folgenabschätzung – Pflichtprüfung bei besonders riskanter Datenverarbeitung. |
| **Edge Function** | Kleines Programm auf dem Server eines Anbieters, z. B. um geheime Schlüssel sicher zu nutzen. |
| **Frontend** | Der Teil der App, den der Nutzer sieht und bedient (läuft auf seinem Gerät). |
| **Gate** | In idea-to-app: der Halt am Ende jeder Phase mit der Frage „weiter oder ergänzen?“. |
| **Handoff** | Übergabepaket mit allen Plänen an das Coding-Tool. |
| **Hashing** | Einweg-Umwandlung: Aus dem Passwort wird ein Wert, aus dem sich das Passwort nicht zurückgewinnen lässt. |
| **HTTPS / HSTS** | Verschlüsselte Verbindung / Regel, dass ein Browser nur verschlüsselt verbinden darf. |
| **i18n** | Internationalisierung – App so bauen, dass Texte leicht übersetzt werden können. |
| **Lockfile** | Datei, die genau festhält, welche Versionen von Fremdbibliotheken genutzt werden. |
| **Mass Assignment** | Lücke: Der Server übernimmt blind alle Felder aus einer Anfrage – auch solche wie „role: admin“. |
| **Mermaid** | Einfache Textsprache für Diagramme, die viele Tools direkt als Grafik anzeigen. |
| **Mockup / Wireframe** | Skizze eines Bildschirms. Wireframe = schlicht und grau, Mockup = näher am fertigen Aussehen. |
| **MVP** | Minimum Viable Product – die kleinste Version, die das Kernproblem löst. |
| **OWASP / ASVS** | Gemeinnützige Organisation für Anwendungssicherheit / deren prüfbarer Sicherheitsstandard in Stufen. |
| **Persona** | Erfundene, realistische Beispielperson aus der Zielgruppe. |
| **Prompt-Injection** | Angriff auf KI-Funktionen: Versteckte Anweisungen in Texten bringen die KI dazu, etwas Unerwünschtes zu tun. |
| **PWA** | Progressive Web App – Webseite, die sich wie eine App installieren lässt und teils offline läuft. |
| **Rate Limiting** | Begrenzung, wie oft jemand eine Aktion in einer bestimmten Zeit ausführen darf. |
| **Repository (Repo)** | Projektordner mit Versionsgeschichte, meist auf GitHub. |
| **RLS (Row Level Security)** | Regeln direkt in der Datenbank, welche Zeilen ein Nutzer sehen oder ändern darf. |
| **Secret** | Geheimer Wert wie Passwort oder geheimer API-Schlüssel. |
| **Session / Sitzung** | Die „Anmeldung“ zwischen Login und Logout. |
| **SSRF** | Angriff, bei dem der Server dazu gebracht wird, interne Adressen abzurufen. |
| **Tech-Stack** | Die Kombination an Technologien, aus denen eine App gebaut ist. |
| **UUID** | Lange, zufällige Kennung, z. B. `3f2b…`, statt fortlaufender Nummern. |
| **User-Flow** | Abfolge der Schritte, die ein Nutzer für ein Ziel durchläuft. |
| **User Story** | Kurze Beschreibung einer Funktion aus Nutzersicht: „Als … möchte ich …, damit …“. |
| **Webhook** | Automatische Nachricht eines Dienstes an deinen Server, z. B. „Zahlung eingegangen“. |
| **XSS** | Angriff, bei dem fremder Code über Nutzereingaben in die Seite gelangt. |
