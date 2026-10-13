# Nicht verhandelbare Sicherheitsregeln

> Diese Regeln werden in Phase 22 **wörtlich** in die `AGENTS.md` des App-Repositories übernommen. Sie gelten für jede Aufgabe. „MUSS“ heißt: keine Ausnahme ohne ausdrückliche, dokumentierte Entscheidung des Projektinhabers in `docs/sicherheit.md` → „Bewusst akzeptierte Risiken“.
>
> Konkrete Werte (Parameter, Längen, Laufzeiten, Limits) stehen **nicht** hier, sondern projektspezifisch in `docs/sicherheit.md` (Ausgangswerte: `security/standardwerte.md` im idea-to-app-Repository). Die Regel-Nummern sind fest und werden vom Prüfskript kontrolliert – nicht umnummerieren.

## Grundsatz

Der Client (Browser, App) ist **nicht vertrauenswürdig**. Alles, was von dort kommt – IDs, Rollen, Preise, Formularfelder, Header – kann manipuliert sein. Sicherheit wird **auf dem Server** und in der **Datenbank** durchgesetzt.

## 1. Geheimnisse

- 1.1 Geheime Schlüssel (Service-Role/Secret Keys, API-Keys für KI/SMS/E-Mail, Datenbank-Passwörter, Webhook-Secrets) MÜSSEN ausschließlich serverseitig verwendet werden. Sie DÜRFEN NIE im Frontend-Code, in Umgebungsvariablen mit Client-Präfix (z. B. `VITE_`, `NEXT_PUBLIC_`, `EXPO_PUBLIC_`), im App-Paket oder im Repository stehen.
- 1.2 Öffentliche Schlüssel (z. B. Supabase Publishable/Anon Key) DÜRFEN im Frontend stehen, aber NUR wenn die zugehörigen Zugriffsregeln (Row Level Security / Security Rules) aktiv sind.
- 1.3 `.env*` MUSS in `.gitignore` stehen. Eine `.env.example` mit Platzhaltern MUSS existieren.
- 1.4 Wird ein Geheimnis versehentlich committet, MUSS es sofort widerrufen und neu erzeugt werden. Nur aus der Git-Historie löschen reicht nicht.

## 2. Zugriffskontrolle

- 2.1 Jeder Endpunkt bzw. jede Datenbankabfrage, die nutzerbezogene Daten liest, ändert oder löscht, MUSS serverseitig prüfen, ob der angemeldete Nutzer dazu berechtigt ist (Besitz, Gruppenmitgliedschaft, Rolle) – gemäß `docs/daten-und-rechte.md`.
- 2.2 Standard ist **verweigern** (deny by default). Neue Tabellen MÜSSEN mit aktivierter Row Level Security bzw. gesperrten Security Rules angelegt werden.
- 2.3 Eine ID aus URL, Query, Body oder Header ist KEIN Berechtigungsnachweis.
- 2.4 Fehlt die Berechtigung, MUSS die Antwort der in `docs/sicherheit.md` festgelegten Zugriffs-Antwortstrategie folgen (Standard: 404 wie bei „nicht vorhanden“). In keinem Fall dürfen Inhalte, Metadaten oder Hinweise auf den fremden Datensatz zurückgegeben werden.
- 2.5 Listen- und Suchendpunkte MÜSSEN serverseitig auf erlaubte Datensätze filtern.
- 2.6 Felder wie `id`, `owner_id`, `user_id`, `role`, `is_admin`, `plan`, `status`, `price`, `created_at` DÜRFEN NICHT aus Client-Eingaben übernommen werden. Eingaben werden über eine Allowlist erlaubter Felder verarbeitet (kein Mass Assignment).
- 2.7 Rollen und Berechtigungen MÜSSEN aus der serverseitigen Sitzung bzw. Datenbank kommen, nie aus dem Client.
- 2.8 Dateien MÜSSEN privat gespeichert und nur über kurzlebige, signierte URLs nach Berechtigungsprüfung ausgeliefert werden.
- 2.9 Das Verstecken von Buttons oder Menüpunkten ist KEINE Zugriffskontrolle.
- 2.10 Admin-Aktionen MÜSSEN protokolliert werden (wer, was, wann).

## 3. Authentisierung & Sitzungen

- 3.1 Es MUSS der in `docs/sicherheit.md` festgelegte Login-Anbieter bzw. die festgelegte Bibliothek verwendet werden. Keine selbst geschriebene Krypto.
- 3.2 Falls Passwörter selbst gespeichert werden: nur mit einem Passwort-Hashing-Verfahren (Argon2id bevorzugt; sonst scrypt oder bcrypt) mit den Parametern aus `docs/sicherheit.md`. Niemals Klartext, Verschlüsselung statt Hashing, MD5 oder einfache SHA-Hashes.
- 3.3 Passwortregeln gemäß `docs/sicherheit.md`: Mindest- und Maximallänge, alle Zeichen erlaubt, Einfügen erlaubt (Passwort-Manager), Prüfung gegen bekannte geleakte Passwörter, keine Pflicht-Sonderzeichen.
- 3.4 Login, Registrierung und Passwort-Reset MÜSSEN identisch antworten, unabhängig davon, ob ein Konto existiert (keine Nutzer-Enumeration).
- 3.5 Reset-, Bestätigungs- und Einladungs-Tokens: kryptografisch zufällig, gehasht gespeichert, einmalig, mit Ablaufzeit gemäß `docs/sicherheit.md`. Nach Passwortänderung alle Sitzungen beenden.
- 3.6 Sitzungs-Cookies: `HttpOnly`, `Secure`, `SameSite=Lax` oder strenger. Neue Sitzungs-ID nach Login. Logout beendet die Sitzung serverseitig. Laufzeiten und erneute Anmeldung für sensible Aktionen gemäß `docs/sicherheit.md`.
- 3.7 Admins MÜSSEN Zwei-Faktor-Authentisierung nutzen; für normale Nutzer gilt die Festlegung in `docs/sicherheit.md`.

## 4. Missbrauchsschutz

- 4.1 Login, Registrierung, Passwort-Reset, E-Mail-/SMS-Versand und alle kostenverursachenden Endpunkte MÜSSEN serverseitig rate-limitiert sein – pro Konto **und** pro IP – gemäß der Tabelle in `docs/sicherheit.md`.
- 4.2 Bei wiederholten Fehlanmeldungen: steigende Wartezeit und vorübergehende Sperre, ggf. CAPTCHA. KEINE dauerhafte automatische Kontosperre.
- 4.3 Überschreitung → HTTP 429 mit `Retry-After`.
- 4.4 Anfragegröße, Upload-Größe und Seitengröße von Listen MÜSSEN gemäß `docs/sicherheit.md` begrenzt sein.
- 4.5 Nutzungsabhängige Dienste (KI, SMS, Karten) MÜSSEN ein Limit pro Nutzer und eine Budget-Grenze haben.

## 5. Eingaben & Ausgaben

- 5.1 Alle Eingaben MÜSSEN serverseitig mit einem Schema validiert werden (Typ, Länge, Format, erlaubte Werte).
- 5.2 Datenbankzugriffe NUR parametrisiert bzw. über ORM/Query-Builder. Keine String-Verkettung mit Eingaben.
- 5.3 Nutzerinhalte MÜSSEN beim Ausgeben escaped werden. Kein `innerHTML`/`dangerouslySetInnerHTML`/`v-html` mit ungefilterten Nutzerdaten; wenn HTML nötig ist, mit einer Sanitizer-Bibliothek bereinigen.
- 5.4 Bei cookie-basierten Sitzungen MUSS CSRF-Schutz aktiv sein.
- 5.5 Uploads: Typ anhand des Inhalts prüfen, Größenlimit, zufälliger Dateiname, privat speichern, nie ausführen.
- 5.6 Serverseitige Abrufe fremder URLs NUR über Allowlist; interne Adressen sperren (SSRF).
- 5.7 Weiterleitungen NUR auf eigene, bekannte Ziele.

## 6. Transport & Browser

- 6.1 Nur HTTPS; HSTS aktiv.
- 6.2 Security-Header gemäß `docs/sicherheit.md` MÜSSEN gesetzt sein: mindestens `Content-Security-Policy` (inkl. `frame-ancestors`), `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- 6.3 CORS NUR für eigene Domains. Kein `*` bei Endpunkten mit Anmeldung.

## 7. Daten & Datenschutz

- 7.1 Nur die in `docs/daten-und-rechte.md` definierten Daten speichern (Datensparsamkeit).
- 7.2 Keine Passwörter, Tokens, Gesundheits- oder andere sensible Daten in Logs, URLs, Fehlermeldungen, Analytics oder Push-Texten.
- 7.3 „Konto löschen“ MUSS alle personenbezogenen Daten inkl. Dateien tatsächlich löschen (bzw. nach der dokumentierten Backup-Frist).
- 7.4 Datenexport NUR für den angemeldeten Nutzer selbst.
- 7.5 Schriften, Icons und Skripte möglichst lokal ausliefern statt von Drittservern.

## 8. Zahlungen, Webhooks, KI

- 8.1 Preise, Produkte und Freischaltungen bestimmt ausschließlich der Server. Freischaltung NUR nach verifizierter Zahlungsbestätigung (Webhook/Server-API), nie über Client-Parameter.
- 8.2 Webhooks: Signatur prüfen, Zeitstempel prüfen, idempotent verarbeiten.
- 8.3 Keine Kartendaten selbst speichern.
- 8.4 KI-Funktionen: Ausgaben eines Sprachmodells sind nicht vertrauenswürdig – nie ungeprüft als Code, SQL, HTML oder Berechtigungsentscheidung verwenden. Dem Modell nur Daten geben, die der aktuelle Nutzer sehen darf.

## 9. Abhängigkeiten & Fehler

- 9.1 Neue Abhängigkeiten nur mit Begründung; verbreitete, gepflegte Pakete bevorzugen; Lockfile einchecken.
- 9.2 Bekannte Schwachstellen (z. B. `npm audit` hoch/kritisch) MÜSSEN vor einem Release behoben oder dokumentiert werden.
- 9.3 Nutzer sehen allgemeine Fehlermeldungen; technische Details nur im Server-Log.
- 9.4 Sicherheitsereignisse (Logins, Fehlversuche, verweigerte Zugriffe, Admin-Aktionen, Rate-Limit-Treffer) werden protokolliert.

## 10. Arbeitsweise

- 10.1 Für jede Funktion, die nutzerbezogene Daten liest oder schreibt, MUSS ein automatisierter Test existieren, der den Zugriff eines **anderen** Nutzers prüft (erwartet: verweigert).
- 10.2 Sicherheitstests aus `docs/tests.md` MÜSSEN in der CI laufen und grün sein, bevor eine Aufgabe als erledigt gilt.
- 10.3 Wenn eine Anforderung mit diesen Regeln kollidiert: NICHT eigenmächtig abweichen, sondern den Projektinhaber fragen und die Entscheidung dokumentieren.
- 10.4 Keine Sicherheitsregel „vorübergehend“ abschalten, um etwas zum Laufen zu bringen (z. B. RLS deaktivieren, CORS auf `*`, Validierung auskommentieren).
- 10.5 Behaupte nie, eine Sicherheitsanforderung sei erfüllt, ohne Nachweis (Testergebnis, Konfiguration, Fundstelle).
