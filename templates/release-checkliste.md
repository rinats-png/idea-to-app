# Release-Checkliste: <Name der App> – Version <x.y.z>

> Vorlage für Phase 20 (`phases/20-betrieb.md`). Für **jedes** Release kopieren (z. B. nach `projekte/<slug>/releases/<version>.md` bzw. im App-Repository nach `docs/releases/`) und abhaken. Hintergrund und Begründungen: `guides/auslieferung.md`. Sicherheitsregeln: `security/regeln-fuer-ki.md`. Zahlenwerte (Backup, Aufbewahrung, Tests): `security/standardwerte.md`.
> Nicht zutreffende Punkte nicht löschen, sondern mit „entfällt – Grund“ markieren. Behaupte nie „erledigt“ ohne Nachweis (Regel 10.5): Trage bei jedem Punkt ein, **woran** man es sieht (Link, Testlauf, Screenshot).

**Version:** … · **Datum/Uhrzeit (UTC + lokal):** … · **Verantwortlich:** … · **Zweite Person erreichbar:** …
**Art:** ☐ normales Release ☐ Hotfix (Sicherheit/Fehler) ☐ enthält Datenbank-Migration ☐ enthält neue Abhängigkeiten ☐ enthält Änderungen an Rechten/Zugriff

## Für Einsteiger erklärt

Ein **Release** ist das Veröffentlichen einer neuen Version. Die meisten schlimmen Fehler passieren nicht beim Programmieren, sondern beim Veröffentlichen: vergessene Backups, falsche Reihenfolge, nicht geprüfte Einstellungen. Diese Liste zwingt dich, die gleichen Schritte jedes Mal in der gleichen Reihenfolge zu gehen. Du brauchst sie vor allem dann, wenn du gerade „nur schnell“ etwas veröffentlichen willst.

---

## A. Vorher (Vorbereitung)

**Inhalt und Qualität**
- [ ] Alle geplanten Änderungen sind in `CHANGELOG.md` beschrieben (für dich und für Nutzer verständlich)
- [ ] Alle zugehörigen Aufgaben (`TASK-…`) und Akzeptanzkriterien (`AK-…`) sind erfüllt; Nachweis: …
- [ ] Pipeline ist grün: Installation aus Lockfile, Typprüfung, Tests inkl. Zugriffstests „anderer Nutzer“ (Regeln 10.1, 10.2), Build – Link zum Lauf: …
- [ ] Abhängigkeitsprüfung: keine offenen hohen/kritischen Funde, oder begründet als Risiko akzeptiert (`E-…`) – Regel 9.2 · Nachweis: …
- [ ] Secret-Scan ohne Fund; keine Geheimnisse im Code, in Logs oder im Frontend (Regeln 1.1, 1.3) · Nachweis: …
- [ ] Neue Pakete: Name gegen offizielle Dokumentation geprüft, Begründung vorhanden, Lizenz geprüft (`guides/lieferkette.md`)
- [ ] Neue/geänderte Rechte oder Zugriffsregeln: Berechtigungstests laufen (Phase 19), Row Level Security / Security Rules aktiv (Regel 2.2)
- [ ] Neue Funktion mit Daten/Kosten: Sicherheitscheck aus Phase 14 durchlaufen; Rate-Limits und Budget-Grenzen gesetzt (Regeln 4.1, 4.5)
- [ ] Datenschutz: Neue personenbezogene Daten oder neue Dienste? → Datenschutzerklärung (`templates/datenschutzerklaerung-geruest.md`), Verarbeitungsverzeichnis (`templates/verarbeitungsverzeichnis.md`), Auftragsverarbeiter-Liste (`templates/auftragsverarbeiter-liste.md`) aktualisiert oder „unverändert“
- [ ] Texte, Übersetzungen, Barrierefreiheit der geänderten Screens kurz geprüft (Phase 10)

**Umgebung und Konfiguration**
- [ ] Vorschau-Umgebung zeigt genau diesen Stand und wurde von Hand durchgeklickt: Anmeldung, Kernfunktion, die geänderte Funktion
- [ ] Alle benötigten Umgebungsvariablen/Geheimnisse sind in **Produktion** gesetzt (nicht nur in der Vorschau); keine unsicheren Standardwerte
- [ ] Konfiguration für Produktion geprüft: HTTPS, Security-Header, CORS nur eigene Domains (Regeln 6.1 bis 6.3; Werte in `security/standardwerte.md`, Abschnitt 8)
- [ ] Zeitzonen-/Locale-Einstellungen von Server und Datenbank geprüft (`guides/auslieferung.md`, Abschnitt 9)
- [ ] Test- und Live-Modus externer Dienste verwechselt? (Zahlung, E-Mail, SMS, KI) – Live-Schlüssel nur in Produktion
- [ ] Feature-Flags: Standardwert für neue Funktionen sicher („aus“, wenn Daten geschrieben werden oder Kosten entstehen); Besitzer und Ablaufdatum für Release-Flags eingetragen
- [ ] Kill-Switch für kostenverursachende oder riskante Funktionen vorhanden und getestet

**Backup und Migration**
- [ ] Enthält das Release eine Datenbank-Migration? ☐ nein ☐ ja → weiter
- [ ] **Frisches Backup der Produktionsdatenbank** erstellt, Zeitpunkt: … (Häufigkeit/Aufbewahrung: `security/standardwerte.md`, Abschnitt 10)
- [ ] Letzter erfolgreicher **Wiederherstellungstest** liegt vor: Datum …
- [ ] Migration wurde zuerst lokal, dann in der Vorschau mit realistischen Testdaten ausgeführt
- [ ] Migration ist **rückwärtskompatibel** (Schritt „expand“): Alter und neuer Code funktionieren mit der neuen Datenbank
- [ ] **Zerstörende Schritte** (löschen, umbenennen, Typ ändern) sind **nicht** in diesem Release, sondern als eigener späterer Release geplant (`TASK-…`)
- [ ] Neue Tabellen sind mit aktivierter Zugriffskontrolle angelegt (Regel 2.2)
- [ ] **Keine manuellen Änderungen** an der Produktionsdatenbank geplant (Regel: nur über Migrationen)

**Rollback und Zeitpunkt**
- [ ] Rollback-Weg ist festgelegt und bekannt (`guides/auslieferung.md`, Abschnitt 7): …
- [ ] **Rollback-Kriterium** (von dir festgelegt, vorab): Wir rollen zurück, wenn …
  - Smoke-Test schlägt fehl, oder
  - Sicherheitsproblem erkennbar (z. B. Nutzer sehen fremde Daten), oder
  - Daten werden falsch geschrieben / gehen verloren, oder
  - Fehlerrate, Kosten oder Ausfälle nach dem Release deutlich über dem Üblichen (Schwelle: …)
- [ ] **Entscheidet über den Rollback:** … (Name; Vertretung: …)
- [ ] Zeitpunkt gewählt, an dem jemand erreichbar ist und möglichst wenige Nutzer aktiv sind; kein Release kurz vor Abwesenheit
- [ ] Nutzerinformation nötig (Wartungsfenster, geänderte Bedienung)? ☐ nein ☐ ja → vorbereitet
- [ ] Support ist informiert, was sich ändert und wohin Meldungen gehen (`templates/support-playbook.md`)
- [ ] Bei Mobile Apps: Store-Prüfung/Review-Zeit eingeplant, Rücknahme nur durch neue Version bedacht (`guides/appstore-veroeffentlichung.md`)

---

## B. Während des Releases (Durchführung)

Uhrzeiten eintragen – das hilft bei Fehlersuche und Nachbereitung.

| Schritt | Uhrzeit | Erledigt von | Nachweis |
|---|---|---|---|
| 1. Wartungsmodus/Hinweis aktivieren (falls nötig) | | | |
| 2. Backup der Produktion bestätigt | | | |
| 3. Migration „expand“ ausgeführt (falls vorhanden) und Ergebnis geprüft | | | |
| 4. Deployment in Produktion (**dieselbe** gebaute Version wie in der Vorschau, nur Produktions-Konfiguration) | | | |
| 5. Smoke-Test (Abschnitt C) | | | |
| 6. Entscheidung: bleiben oder Rollback | | | |
| 7. Wartungsmodus/Hinweis beenden | | | |

Während des Releases gilt:
- [ ] Nichts „nebenbei“ in Produktion ändern (Regel 10.4: keine Sicherheitsregel vorübergehend abschalten)
- [ ] Bei Unsicherheit anhalten statt weiter machen
- [ ] Auffälligkeiten sofort im Protokoll notieren

---

## C. Smoke-Test (direkt nach dem Deployment, in Produktion)

Ein **Smoke-Test** ist ein kurzer Schnelltest der wichtigsten Dinge: „Brennt es irgendwo?“ Er ersetzt keine Tests, bestätigt aber, dass die Produktion lebt. Mit Test-Konten arbeiten, keine echten Nutzerdaten ansehen.

- [ ] Startseite/App lädt über HTTPS, richtiges Zertifikat, keine Fehlerseite
- [ ] Version/Build ist die erwartete (Versionsanzeige oder Hosting-Übersicht)
- [ ] Registrierung/Anmeldung mit Test-Konto funktioniert; Abmeldung funktioniert
- [ ] **Kernfunktion** der App funktioniert (der Hauptnutzen aus Phase 1): …
- [ ] Die **geänderte Funktion** funktioniert wie beschrieben
- [ ] Zugriffsprobe: Test-Konto A kann Daten von Test-Konto B **nicht** sehen (Regeln 2.1, 2.3)
- [ ] Datenbank: Migration erfolgreich (Stichprobe), keine Fehler im Datenbank-Log
- [ ] E-Mail-Versand (z. B. Bestätigungsmail an Test-Adresse) kommt an – falls betroffen
- [ ] Zahlung im vorgesehenen Test-Verfahren (z. B. kleinster Betrag, Erstattung) – falls betroffen, nach Vorgaben des Zahlungsanbieters
- [ ] Fehler-Tracking und Uptime-Überwachung zeigen keine neuen Fehler und sind aktiv (Phase 20)
- [ ] Logs enthalten keine Passwörter, Tokens oder sensible Inhalte (Regel 7.2)
- [ ] Security-Header sind gesetzt (Stichprobe im Browser)
- [ ] Kosten/Nutzungs-Alarme der externen Dienste sind aktiv

**Ergebnis:** ☐ bestanden ☐ nicht bestanden → Rollback-Kriterium prüfen

---

## D. Nachher (Beobachtung und Abschluss)

**Direkt nach dem Release (erste Stunden)**
- [ ] Fehlerrate, Antwortzeiten, Kosten, Rate-Limit-Treffer und Sicherheitsereignisse beobachtet (Phase 14, Abschnitt Protokollierung; Phase 20)
- [ ] Support-Eingänge gesichtet; auffällige Häufung gleicher Meldungen = mögliches Problem
- [ ] Bei Auffälligkeit: Rollback-Kriterium prüfen und entscheiden – Entscheidung mit Uhrzeit im Protokoll festhalten

**Abschluss**
- [ ] Release als abgeschlossen markiert (Git-Tag / Versionsnummer / Eintrag im `CHANGELOG.md`)
- [ ] Release-Notizen für Nutzer veröffentlicht (falls vorgesehen)
- [ ] **Aufräumaufgaben eingeplant:** „contract“-Migration (`TASK-…`), Feature-Flag entfernen (Ablaufdatum), alte Variablen/Schlüssel entfernen
- [ ] Wissen festgehalten: Was lief gut, was nicht? Release-Checkliste ggf. verbessern
- [ ] Bei einem Zwischenfall: Ablauf nach `templates/incident-plan.md` und anschließend schuldfreie Nachbetrachtung

**Erledigt am:** … · **Ergebnis:** ☐ erfolgreich ☐ mit Abweichungen (welche?) ☐ zurückgerollt (warum?)

---

## E. Zusatz: Hotfix (dringende Sicherheits- oder Fehlerkorrektur)

Auch ein Hotfix durchläuft Pipeline und Smoke-Test – nur mit kleinstmöglicher Änderung. Folgendes zusätzlich:

- [ ] Änderung ist so klein wie möglich und löst genau ein Problem
- [ ] Pipeline-Prüfungen nicht übersprungen, keine Regel abgeschaltet (Regel 10.4)
- [ ] Bei Sicherheitslücke: Prüfen, ob bereits ausgenutzt (Logs) und ob ein Vorfall nach `templates/incident-plan.md` vorliegt (Meldepflichten!)
- [ ] Nachträglich: Test ergänzt, der den Fehler künftig verhindert (`T-SEC-…` / `TEST-…`)
- [ ] Nachträglich: Änderung auch in alle offenen Branches übernommen

---

## F. Unterschrift/Freigabe

| Rolle | Name | Datum | Bemerkung |
|---|---|---|---|
| Verantwortlich für das Release | | | |
| Zweite Person / Prüfung (falls vorhanden) | | | |
