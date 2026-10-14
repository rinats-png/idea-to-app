# Notfall- und Datenpannen-Plan: <Name der App>

> Vorlage für Phase 20 (`phases/20-betrieb.md`). Kopieren nach `projekte/<slug>/20-incident-plan.md` und ausfüllen. **Ausdrucken oder offline speichern** – im Notfall ist vielleicht gerade das System nicht erreichbar, in dem dieser Plan liegt.
> Dieser Plan ist eine Arbeitshilfe, keine Rechtsberatung. Fristen und Meldepflichten stehen **nicht** hier, sondern im Überblick [Recht in der EU](../guides/recht-eu-ueberblick.md); bei Unsicherheit Fachperson hinzuziehen (Risikostufe 3: Pflicht, siehe `AGENTS.md` Abschnitt 5).
> Hintergrund: `guides/auslieferung.md` (Rollback, Geheimnisse), `guides/lieferkette.md` (kompromittierte Pakete), `templates/support-playbook.md` (Kommunikation mit Nutzern), `templates/release-checkliste.md`.

**Stand:** JJJJ-MM-TT · **Verantwortlich für diesen Plan:** … · **Nächste Übung:** JJJJ-MM-TT

## Für Einsteiger erklärt

Ein **Vorfall** (englisch *Incident*) ist alles, was die App unerwartet beeinträchtigt: Ausfall, Fehler, Angriff oder ein **Datenleck** (unbefugte Personen können Daten sehen, verändern oder haben sie kopiert). Eine **Datenpanne** im Sinne des Datenschutzes ist ein Vorfall, bei dem personenbezogene Daten betroffen sind. Im Ernstfall ist man gestresst und macht Fehler. Darum steht hier vorab, **wer was tut und in welcher Reihenfolge**. Wichtigste Grundsätze:

1. **Erst Eindämmen, dann aufräumen.** Den Schaden stoppen, bevor du die Ursache vollständig verstehst.
2. **Beweise sichern, bevor du etwas löschst.** Logs und Zustand dokumentieren.
3. **Nicht allein entscheiden, was gemeldet wird.** Die Entscheidung über Meldungen wird mit Zeitstempel dokumentiert (Abschnitt 8).
4. **Ehrlich kommunizieren.** Nichts beschönigen, nichts erfinden, nichts versprechen, was nicht geprüft ist.
5. **Schuldfrei nachbereiten.** Es geht um das System, nicht um die Person (Abschnitt 10).

---

## 1. Rollen

Bei einer einzelnen Person trägst du alle Rollen selbst – schreib trotzdem hin, **wer die Vertretung ist**, falls du krank oder erreichbar nicht bist.

| Rolle | Aufgabe | Name | Erreichbar über | Vertretung |
|---|---|---|---|---|
| **Einsatzleitung** | Trifft Entscheidungen, hält den Überblick, führt das Protokoll (Abschnitt 6) | … | … | … |
| **Technik** | Analysiert, dämmt ein, stellt wieder her | … | … | … |
| **Kommunikation** | Informiert Nutzer, Partner, ggf. Presse (Abschnitt 9) | … | … | … |
| **Datenschutz / Recht** | Bewertet die Meldepflicht (Abschnitt 8) | … (ggf. Datenschutzbeauftragte/r, Fachanwalt) | … | … |
| **Support** | Beantwortet Nutzeranfragen nach `templates/support-playbook.md` | … | … | … |

Für Stufe 3 (`AGENTS.md` Abschnitt 5) wird empfohlen, die Fachperson für Recht/Datenschutz **vorab** zu benennen und die Kontaktdaten in Abschnitt 11 einzutragen.

---

## 2. Schweregrade

Lege fest, wie schnell reagiert werden muss. Die Antwortzeiten sind **deine Entscheidung** (passend zu Phase 20, Fragen zur Reaktionszeit); trage sie ein – dieses Template erfindet keine Pflichtwerte.

| Grad | Bedeutung | Beispiele | Reaktion (von dir festzulegen) | Wer wird informiert |
|---|---|---|---|---|
| **S1 – kritisch** | Verdacht auf Datenleck, fremder Zugriff, Geheimnis veröffentlicht, Daten verloren oder falsch zugänglich, Geld/Zahlungen betroffen | Schlüssel im öffentlichen Repository; Nutzer sehen fremde Daten; Datenbank offen | sofort, auch nachts/Wochenende: … | Einsatzleitung, Technik, Datenschutz/Recht |
| **S2 – hoch** | App oder Kernfunktion für viele Nutzer nicht verfügbar; Sicherheitslücke bekannt, aber (noch) kein Missbrauch erkennbar | Totalausfall; Login geht nicht; kritische Schwachstelle in Abhängigkeit | zeitnah: … | Einsatzleitung, Technik |
| **S3 – mittel** | Teilfunktion gestört, Umgehung möglich; Kostenanstieg | Funktion fehlerhaft; Rate-Limits greifen ungewöhnlich oft | im regulären Betrieb: … | Technik |
| **S4 – niedrig** | Kleinere Fehler ohne Sicherheits- oder Datenbezug | Schönheitsfehler | nach Plan | Backlog |

**Hochstufen, wenn unklar:** Im Zweifel den höheren Grad annehmen (wie beim Risikostufen-Prinzip in `AGENTS.md`) und später herabstufen. Alles, was **personenbezogene Daten** oder **Zugangsdaten** betrifft, ist mindestens S1, bis das Gegenteil belegt ist.

---

## 3. Die ersten 60 Minuten – Checkliste

> Ablauf: **Erkennen → Einschätzen → Eindämmen → Beweise sichern → Kommunikation → Entscheiden**. Nummern nicht überspringen. Zeiten eintragen. Wenn du dich festfährst: Schritt 3 (Eindämmen) hat Vorrang.

**Minute 0–10 – Ruhe, Überblick, Uhr starten**
- [ ] Uhrzeit des ersten Hinweises und der Entdeckung notieren (Zeitzone angeben, am besten UTC): …
- [ ] Wer hat es gemeldet / wodurch aufgefallen (Alarm, Nutzer, Dritte, Presse)? …
- [ ] Protokoll anlegen (Abschnitt 6) – alles, was du tust, mit Uhrzeit festhalten
- [ ] Erste Einordnung: Schweregrad nach Abschnitt 2 (im Zweifel höher)
- [ ] Einsatzleitung festlegen; Vertretung informieren, falls nötig

**Minute 10–30 – Eindämmen (Schaden stoppen)**
- [ ] Betroffenes System bestimmen: Welche Komponente, welche Umgebung (nur Produktion?), welche Daten?
- [ ] Je nach Lage die passende Maßnahme aus Abschnitt 5 wählen (z. B. Zugänge sperren, Funktion per Kill-Switch abschalten, Wartungsseite, Dienst pausieren)
- [ ] **Keine Panik-Löschungen:** Nichts löschen, was als Beweis dienen könnte (Logs, Datenbankzustand, verdächtige Dateien)
- [ ] Kein „schnelles Fixen“ direkt in der Produktion ohne Dokumentation (vgl. Regel 10.4 in `security/regeln-fuer-ki.md`)

**Minute 30–45 – Beweise sichern**
- [ ] Beweise sichern nach Abschnitt 4, **bevor** Systeme zurückgesetzt oder neu aufgesetzt werden
- [ ] Zustand dokumentieren: Screenshots, Logauszüge, Zeiträume, betroffene Konten/Datensätze (nur Kennungen notieren, keine unnötigen Kopien von Nutzerdaten)

**Minute 45–60 – Schlüssel, Kommunikation, nächster Schritt**
- [ ] Verdacht auf Schlüsselkompromittierung? → Schlüssel nach Abschnitt 7 rotieren
- [ ] Erste interne Lageeinschätzung: Was wissen wir? Was wissen wir nicht? Was ist noch offen?
- [ ] Ist ein **Personenbezug** möglich (Nutzerdaten betroffen)? → Datenschutz/Recht jetzt einbinden (Abschnitt 8); **die Uhr für Fristen läuft ab Kenntnis** – die Fristen stehen im Überblick [Recht in der EU](../guides/recht-eu-ueberblick.md)
- [ ] Wird Nutzerkommunikation nötig (Störung sichtbar, Statusseite)? → Abschnitt 9, ersten Hinweis nur mit gesichertem Wissen
- [ ] Nächste Schritte und Zuständige festlegen; nächsten Lage-Termin vereinbaren

**Typische Fehler, die du vermeidest:**
- Beweise durch voreiliges Neuaufsetzen zerstören
- Nur das Symptom beseitigen und den Zugang des Angreifers nicht sperren
- Geheimnisse nicht rotieren, weil „es ja nur kurz sichtbar war“
- Nutzern etwas Falsches mitteilen (z. B. „keine Daten betroffen“, ohne geprüft zu haben)
- Meldepflicht erst Tage später prüfen

---

## 4. Beweissicherung

Ziel: Später nachvollziehen können, **was wann wie passiert ist** – für die Ursachenklärung, für Behörden, Versicherungen und Nutzer.

- [ ] **Logs sichern** (Server, Hosting, Datenbank, Authentifizierung, Pipeline, Zugriffe) – als schreibgeschützte Kopie an einem getrennten, sicheren Ort. Bewahre sie nicht länger auf, als nötig (Datenschutz, vgl. Aufbewahrungsvorschläge in `security/standardwerte.md`, Abschnitt 9).
- [ ] **Zeitraum festhalten:** Beginn und Ende des Vorfalls, soweit bekannt; Zeitzone dazuschreiben.
- [ ] **Zustand einfrieren**, wo möglich: Snapshot/Backup der betroffenen Datenbank oder Maschine, bevor sie verändert wird (Hosting-Funktion; Verfügbarkeit je Anbieter prüfen `[PRÜFEN]`).
- [ ] **Git-Verlauf sichern:** Wer hat wann was geändert? Verdächtige Commits, geänderte Workflow-Dateien (`.github/workflows/`), neue Abhängigkeiten im Lockfile.
- [ ] **Zugriffsprotokolle der Konten** (GitHub, Hosting, Datenbank, E-Mail): ungewohnte Anmeldungen, neue Schlüssel, geänderte Rechte.
- [ ] **Screenshots und Notizen:** Fehlermeldungen, Hinweise von Nutzern, Absender und Zeitpunkt von Meldungen (z. B. Erpresser-Mails).
- [ ] **Keine Nutzerdaten in Chats posten.** Beim Austausch mit Technik/Helfern nur Kennungen oder minimale Ausschnitte. Auch KI-Werkzeuge bekommen keine Rohdaten mit personenbezogenen Daten ohne geprüfte Grundlage (Datenschutz, Phase 16).
- [ ] **Protokollieren, wer was gesichert hat** (Name, Uhrzeit, Ablageort). Wer sicher hat, ändert danach nichts mehr an der Kopie.
- [ ] Bei Verdacht auf Straftat: Anzeige bei der Polizei prüfen; Fachperson fragen, bevor Beweise an Dritte gegeben werden.

---

## 5. Eindämmung – Maßnahmen nach Lage

Wähle die kleinstmögliche Maßnahme, die den Schaden stoppt. Dokumentiere jede Maßnahme mit Uhrzeit im Protokoll.

| Lage | Sofortmaßnahme | Danach |
|---|---|---|
| **App nicht erreichbar** | Status prüfen (Hosting, Datenbank, Domain, Zertifikat, Kostenlimit erreicht?); Wartungsseite; letzten stabilen Stand wiederherstellen (Rollback laut `guides/auslieferung.md`, Abschnitt 7) | Ursache klären; Statusseite aktualisieren |
| **Kaputtes Update** | Rollback auf vorherige Version; Feature-Flag aus | Fehler in Vorschau nachstellen; Release-Checkliste ergänzen |
| **Verdacht auf fremden Zugriff / Datenleck** | Betroffene Zugänge sperren, Sitzungen beenden, Zugriff auf Datenbank einschränken, verdächtige Konten sperren; Funktion abschalten; **Schlüssel rotieren (Abschnitt 7)** | Beweise sichern (Abschnitt 4), Umfang bestimmen, Meldepflicht prüfen (Abschnitt 8) |
| **Falsche Daten für falsche Nutzer sichtbar** (Zugriffsfehler) | Betroffene Funktion/Endpunkt sofort abschalten, bis die Prüfung serverseitig gefixt und getestet ist (vgl. Regeln 2.1 bis 2.6) | Welche Datensätze waren zugänglich? Wer hat zugegriffen? Logs auswerten |
| **Geheimnis veröffentlicht** (Repository, Log, Screenshot, Chat) | Sofort widerrufen und neu erzeugen; Löschen aus Git-Historie reicht **nicht** (Regel 1.4) | Nutzung des alten Schlüssels in Logs des Dienstes prüfen; Kosten/Zugriffe prüfen |
| **Kompromittiertes Paket** | Betroffene Version identifizieren (Lockfile-Historie), auf sichere Version wechseln, Pipeline- und Server-Geheimnisse des betroffenen Zeitraums rotieren (`guides/lieferkette.md`) | Ablauf wie bei Datenleck prüfen |
| **Kostenexplosion / Missbrauch teurer Dienste** | Dienst pausieren, Kill-Switch, Limits und Budget-Grenze prüfen (Regeln 4.1, 4.5); IP-/Konto-Sperren | Rate-Limits nachschärfen (Werte: `security/standardwerte.md`, Abschnitt 6) |
| **Erpressung / Lösegeldforderung** | Nicht zahlen und nicht antworten ohne Beratung; Beweise sichern; Fachperson und Polizei einbinden | Zugänge sperren, Wiederherstellung aus Backup prüfen |
| **Nutzerkonto übernommen** | Sitzungen beenden, Passwort-Reset erzwingen, 2FA prüfen, Ursache suchen (Credential-Stuffing? Phishing?) | Nutzer informieren (Abschnitt 9) |
| **Datenverlust** | Schreibzugriff stoppen, **Backup-Wiederherstellung** laut Backup-Konzept (`security/standardwerte.md`, Abschnitt 10) | Verlust zwischen Backup und Vorfall bestimmen und kommunizieren |

---

## 6. Vorfall-Protokoll (laufend führen)

Ein Protokoll schützt vor Erinnerungslücken und ist Grundlage für die Meldung und die Nachbereitung. Halte nur Tatsachen fest, keine Schuldzuweisungen.

| Zeit (UTC) | Wer | Was wurde beobachtet / getan / entschieden | Beleg (Datei, Link) |
|---|---|---|---|
| | | | |

Mindestens festhalten: Zeitpunkt der **Kenntnisnahme** (relevant für Fristen), Einordnung, ergriffene Maßnahmen, Entscheidungen zur Meldung und ihre Begründung, wer informiert wurde und wann.

---

## 7. Schlüssel und Zugänge rotieren

**Rotieren** heißt: alten Schlüssel ungültig machen, neuen erzeugen und überall austauschen, wo er gebraucht wird. Bei Verdacht gilt: **lieber einmal zu viel erneuern.**

Reihenfolge:

1. **Umfang bestimmen:** Welche Geheimnisse konnte der Betroffene oder Angreifer sehen? (Alle, die in der betroffenen Umgebung, im Repository, im Log oder auf dem Rechner lagen.)
2. **Widerrufen** (alten Schlüssel sperren) – das Neuerzeugen zuerst, wenn Dienste sonst ausfallen würden; aber den alten Schlüssel zeitnah sperren.
3. **Neu erzeugen** und im Tresor ablegen (Hosting-Secrets, Pipeline-Secrets; nie im Code, nie im Chat) – Regel 1.1 und `guides/auslieferung.md`, Abschnitt 5.
4. **Austauschen und neu ausliefern.** Prüfen, ob Dienste mit dem neuen Schlüssel wieder funktionieren (Smoke-Test).
5. **Alte Sitzungen und Tokens beenden:** Nutzersitzungen bei Verdacht auf Kompromittierung der Sitzungsverwaltung; Reset-/Einladungs-Tokens ungültig machen (Regel 3.5).
6. **Nutzung des alten Schlüssels prüfen:** Bei den Anbietern nachsehen, ob und von wo er verwendet wurde (Zugriffsprotokolle).
7. **Dokumentieren:** welches Geheimnis, wann erneuert, von wem; Übersichtstabelle in `20-betrieb.md` aktualisieren.

Checkliste je Geheimnis:

| Geheimnis | Widerrufen | Neu erzeugt | Ausgeliefert/getestet | Alte Nutzung geprüft | Erledigt von / am |
|---|---|---|---|---|---|
| Datenbank-Passwort | ☐ | ☐ | ☐ | ☐ | |
| Geheimer API-Schlüssel (Zahlung/E-Mail/KI/SMS) | ☐ | ☐ | ☐ | ☐ | |
| Webhook-Secrets | ☐ | ☐ | ☐ | ☐ | |
| Pipeline-/Hosting-Token | ☐ | ☐ | ☐ | ☐ | |
| Session-/Signier-Schlüssel (Beendet alle Sitzungen!) | ☐ | ☐ | ☐ | ☐ | |
| Konten-Passwörter und 2FA der Betreiber | ☐ | ☐ | ☐ | ☐ | |
| App-Store-/Domain-Konten | ☐ | ☐ | ☐ | ☐ | |

Wiederherstellungscodes für 2FA nach einem Vorfall ebenfalls neu erzeugen, wenn sie betroffen sein könnten.

---

## 8. Meldepflicht – Entscheidung treffen und dokumentieren

**Dieser Abschnitt nennt absichtlich keine Fristen.** Sie stehen (mit Quelle und Prüfdatum) im Überblick [Recht in der EU](../guides/recht-eu-ueberblick.md). Wichtig ist: Die Frist kann ab dem Moment laufen, in dem du von dem Vorfall **Kenntnis** hast – also nicht erst, wenn alles geklärt ist.

**Entscheidungsfragen** (mit Datum und Begründung ins Protokoll):

1. Sind **personenbezogene Daten** betroffen (Name, E-Mail, Inhalte, Gesundheitsdaten, Standort …)? Welche Kategorien? Wie viele Personen ungefähr? Sind Kinder oder besondere Kategorien (Art. 9 DSGVO) betroffen? → Antworten stehen im Verarbeitungsverzeichnis (`templates/verarbeitungsverzeichnis.md`).
2. Handelt es sich um eine **Verletzung** der Vertraulichkeit, Integrität oder Verfügbarkeit (unbefugter Zugriff, Verlust, Veränderung, dauerhafter Ausfall)?
3. Welches **Risiko** besteht für die Betroffenen (Identitätsdiebstahl, Rufschädigung, finanzieller Schaden, Gefahr für Leib und Leben)? Ist es gering, oder hoch?
4. Wer ist **Verantwortlicher**, wer **Auftragsverarbeiter**? Liegt der Fehler bei einem Dienstleister? Dann dessen Pflichten und Fristen mit ihm klären (`templates/auftragsverarbeiter-liste.md`).
5. **Meldung an die Datenschutz-Aufsichtsbehörde** erforderlich? Ergebnis, Begründung, Datum.
6. **Information der Betroffenen** erforderlich? Ergebnis, Begründung, Datum.
7. Gibt es **weitere Meldewege** (Vertragspartner, Auftraggeber, Behörden bei Behörden-/Sicherheitsbezug, Zahlungsanbieter, Versicherung, Polizei)? Je nach Branche und Auftrag unterschiedlich – im Überblick prüfen, im Zweifel Fachperson.
8. Auch **ohne Meldung** wird die Verletzung intern dokumentiert (Was, Wirkungen, Gegenmaßnahmen). Das ergibt sich aus dem Datenschutzrecht; Details im Überblick prüfen.

**Entscheidungsprotokoll:**

| Datum/Uhrzeit | Frage | Entscheidung | Begründung | Entschieden von |
|---|---|---|---|---|
| | Meldung an Aufsichtsbehörde? | ☐ ja ☐ nein ☐ noch offen | | |
| | Information der Betroffenen? | ☐ ja ☐ nein ☐ noch offen | | |
| | Weitere Meldungen? | | | |

Zuständige Aufsichtsbehörde und Meldeweg: … (eintragen, **vorab** recherchieren, nicht erst im Notfall).

---

## 9. Kommunikation an Nutzer und andere

Grundsätze:

- **Schnell, ehrlich, verständlich.** Kein Fachjargon, keine Schuldzuweisung an Dritte, keine Beschönigung.
- **Nur sagen, was belegt ist.** Unsicheres als unsicher kennzeichnen („Stand jetzt wissen wir …, wir prüfen noch …“). Nie „es sind keine Daten betroffen“ ohne Prüfung.
- **Was Nutzer tun sollen:** konkret und machbar (Passwort ändern, Sitzungen beenden, verdächtige Mails melden).
- **Niemals nach Passwörtern fragen** und keine Links zum Einloggen in Rundmails (Phishing-Verwechslung vermeiden). Offizielle Absender nutzen und in der Mail auf die Hilfeseite der App verweisen.
- **Kein Sensibles in Mails:** Sperrbildschirm- und Vorschau-Texte neutral halten.
- **Konsistent sein:** Eine Sprecherrolle (Kommunikation), alle Texte mit der Einsatzleitung abgestimmt.
- **Aktualisierungen versprechen und einhalten** („Nächstes Update bis …“ nur, wenn du es hältst).
- Statusseite und Standardantworten: `templates/support-playbook.md`.

**Textbausteine** (anpassen, nur Tatsachen einsetzen):

*Störung (ohne Datenbezug):*
> Betreff: Störung bei <App> – wir arbeiten daran
> Seit <Uhrzeit> ist <Funktion> eingeschränkt. Deine Daten sind davon nicht betroffen. <Nur falls geprüft!> Wir arbeiten an der Behebung und informieren dich unter <Statusseite>, sobald alles wieder funktioniert.

*Sicherheitsvorfall mit möglicher Betroffenheit:*
> Betreff: Wichtiger Sicherheitshinweis zu <App>
> Am <Datum> haben wir festgestellt, dass <kurze, sachliche Beschreibung>. Betroffen sein können <Datenarten>. Wir haben <getroffene Maßnahmen> ergriffen. Wir empfehlen dir, <konkrete Schritte>. Wir fragen dich nie per E-Mail nach deinem Passwort. Rückfragen: <Kontakt>. Wir informieren dich weiter, sobald wir mehr wissen.

*Nachträgliche Entwarnung:*
> Betreff: Update zum Vorfall vom <Datum>
> Unsere Prüfung ergab, dass <Ergebnis>. Es gibt <keine / folgende> Hinweise darauf, dass <…>. Wir haben <Maßnahmen> getroffen, damit das nicht wieder vorkommt.

Wenn eine Information der Betroffenen rechtlich erforderlich ist, hat diese bestimmte Mindestinhalte – siehe Überblick [Recht in der EU](../guides/recht-eu-ueberblick.md) und lasse den Text von Datenschutz/Recht prüfen.

---

## 10. Nachbereitung – schuldfreies Postmortem

Nach jedem Vorfall ab S2 (und nach jedem S1) schreibst du in angemessener Zeit ein **Postmortem** („Nachbetrachtung“). Gemeint ist die schuldfreie Variante: Sie untersucht beitragende Ursachen und Verbesserungen, ohne Einzelnen die Schuld zuzuweisen. Der Gedanke dahinter: Menschen lassen sich nicht „reparieren“, Systeme und Abläufe schon; wer bestraft wird, meldet Probleme nicht mehr `[Q-I01]`.

Vorlage:

```markdown
# Postmortem: <Titel> – JJJJ-MM-TT
- Schweregrad: S?
- Dauer: von … bis … (UTC)
- Beteiligte Rollen: …
- Betroffene: Nutzerzahl/Datenarten (nur Größenordnung)

## Zusammenfassung (3–5 Sätze)

## Auswirkung
Was haben Nutzer erlebt? Welche Daten waren betroffen? Welche Meldungen wurden gemacht?

## Zeitverlauf
(aus dem Vorfall-Protokoll)

## Ursachen (beitragende Faktoren)
Was hat es möglich gemacht? Warum wurde es nicht früher erkannt? (Systeme, Prozesse, Prüfungen – keine Namen)

## Was lief gut / was hatten wir Glück
…

## Maßnahmen
| Maßnahme | Typ (verhindern / früher erkennen / schneller beheben) | Verantwortlich | Frist | TASK-ID |
|---|---|---|---|---|

## Lehren für Regelwerk und Doku
Müssen Annahmen (A-…), Entscheidungen (E-…), Tests (T-SEC-…) oder die Bedrohungsliste (BD-…) angepasst werden?
```

Danach:

- [ ] Maßnahmen als `TASK-…` in die Aufgabenliste (Phase 21 bzw. Wartung, Phase 24)
- [ ] Bedrohungsmodell und Sicherheitstests ergänzen (`security/bedrohungsmodell.md`, `security/sicherheitstests.md`)
- [ ] Entscheidungen und akzeptierte Risiken in `ENTSCHEIDUNGEN.md`
- [ ] Datenschutzdokumentation anpassen, falls Daten/Prozesse betroffen waren
- [ ] Diesen Plan verbessern (Was hat gefehlt? Welche Nummer war falsch?)
- [ ] Bei Meldungen: Abschluss- bzw. Folgeinformationen an die Behörde/Betroffenen prüfen

---

## 11. Kontaktliste

Nur Kontaktwege, **keine Passwörter oder Codes**. Papierkopie bzw. offline verfügbare Kopie an einem sicheren Ort.

| Wer / Wofür | Name | Telefon / Kanal | Erreichbar | Hinweis |
|---|---|---|---|---|
| Einsatzleitung / Betreiber | | | | |
| Vertretung | | | | |
| Technik / Entwickler / Dienstleister | | | | |
| Datenschutzbeauftragte/r bzw. Datenschutz-Beratung | | | | |
| Fachanwalt/Rechtsberatung | | | | |
| Zuständige Datenschutz-Aufsichtsbehörde (Meldeweg) | | | | Vorab recherchieren |
| Hosting-Support (Notfallkontakt) | | | | Kundennummer, Supportlevel |
| Datenbank-/Backend-Anbieter-Support | | | | |
| Zahlungsanbieter-Support | | | | |
| Domain-/DNS-Anbieter | | | | |
| App-Store-Konten (Apple / Google) | | | | |
| Versicherung (Cyber), falls vorhanden | | | | Meldefristen der Police beachten |
| Polizei / Zentrale Ansprechstelle Cybercrime | | | | |
| Kommunikation / Sprecher | | | | |
| Auftraggeber / Vertragspartner mit Meldepflicht | | | | |

---

## 12. Übung

Ein Plan, den niemand geübt hat, funktioniert im Ernstfall nur halb. Plane regelmäßig eine **Übung** (Tischübung: Szenario durchsprechen, ohne echte Systeme anzufassen).

- **Rhythmus:** legst du in Phase 20 fest (Empfehlung: mindestens einmal vor dem Launch und danach in einem festen Wartungstakt, vgl. `phases/24-iteration-und-wartung.md`).
- **Szenarien zum Üben (jeweils eins):** Geheimnis im öffentlichen Repository entdeckt · Nutzer meldet, fremde Daten zu sehen · Datenbank nicht erreichbar · kompromittiertes Paket · Zahlungsanbieter meldet auffällige Zugriffe · Backup-Wiederherstellung unter Zeitdruck.
- **Ablauf:** Szenario vorlesen → die ersten 60 Minuten Schritt für Schritt durchgehen (Abschnitt 3) → Lücken notieren → Plan verbessern.
- **Auch üben:** Backup einspielen und Rollback ausführen (in der Vorschau-Umgebung).

| Datum | Szenario | Teilnehmende | Ergebnis / Lücken | Maßnahmen (TASK-…) |
|---|---|---|---|---|
| | | | | |

**Nächste Übung geplant für:** JJJJ-MM-TT

---

## Quellen

| ID | Aussage | URL | Art | Prüfdatum |
|---|---|---|---|---|
| Q-I01 | Schuldfreie Postmortems untersuchen beitragende Ursachen ohne Einzelnen die Schuld zuzuweisen; Systeme und Abläufe lassen sich verbessern; Schuldzuweisung führt dazu, dass Probleme verschwiegen werden (Google SRE-Buch, Kapitel „Postmortem Culture“) | https://sre.google/sre-book/postmortem-culture/ | Bericht/Fachbuch | 2026-10-14 |

Fristen, Meldeumfang und Rechtsgrundlagen sind **nicht** in dieser Vorlage belegt, sondern im Überblick [Recht in der EU](../guides/recht-eu-ueberblick.md) – dort nachsehen und das Prüfdatum beachten.
