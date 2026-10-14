# Phase 23 – Launch & Freigabe

> Kurz: Bevor die App öffentlich geht, wird mit **Nachweisen** geprüft, ob sie freigabefähig ist – nicht mit Behauptungen.

| | |
|---|---|
| **Ziel** | Launch-Checkliste mit Nachweisen, Freigabeentscheidung, Store-/Hosting-Vorbereitung, Feedback-Kanal |
| **Ergebnis** | `projekte/<slug>/23-launch.md` |
| **Visual** | Freigabebericht (Tabelle) |
| **Dauer** | Planung ca. 15 Minuten; Freigabeprüfung nach dem Bauen |
| **Überspringen** | Lite-Modus: optional, aber **vor Veröffentlichung Pflicht**; „nur für mich“ → nur Sicherheits- und Backup-Teil |
| **Prüfung** | Prüfskript `--launch` |

> Diese Phase läuft in zwei Schritten: **jetzt planen** (Checkliste anlegen, Strategie festlegen) und **nach dem Bauen freigeben** (Nachweise eintragen, Prüfskript, Entscheidung). Der Nutzer kehrt dafür mit `zurück zu Phase 23` zurück.

## Für Einsteiger erklärt

Der Launch ist der Moment, ab dem fremde Menschen deiner App ihre Daten anvertrauen. Deshalb gibt es vorher eine letzte, gründliche Prüfung. Wichtig: Ein Haken zählt nur, wenn man **zeigen** kann, dass es stimmt – zum Beispiel mit einem grünen Testlauf oder dem Datum, an dem das Backup erfolgreich zurückgespielt wurde. „Hat die KI gesagt“ ist kein Nachweis.

## Fragen

**Q1 – Wie willst du starten?**
- a) Leiser Start mit wenigen Testnutzern (Soft Launch) **(Empfehlung)**
- b) Direkt öffentlich

**Q2 – Wie sollen Nutzer Feedback oder Probleme melden?**
- a) E-Mail-Adresse
- b) Formular in der App
- c) Community (Discord, Forum …)

**Q3 – Wie sollen die ersten Nutzer von der App erfahren?** (Bekannte, Vereine, Social Media, Fachgruppen, Kollegen …) Ideen und ehrliche Erwartungen: [`guides/launch-und-auffindbarkeit.md`](../guides/launch-und-auffindbarkeit.md).

**Q4 (beim Freigabeschritt) – Für jeden offenen Pflichtpunkt: nachholen, als Risiko akzeptieren (`E-…`) oder Launch verschieben?**

## Was die KI selbst ergänzen soll

**1. Checkliste anlegen** (Format unten, Spalte „Nachweis“ zunächst leer):
- **Sicherheit:** alle Punkte aus `security/checkliste.md`, deren Stufe ≤ der Risikostufe ist (die anderen mit `n/a – Stufe` oder weglassen).
- **Betrieb, Recht, Qualität, Stores, Web, Kommunikation:** die Punkte unten, soweit zutreffend.

**2. Beim Freigabeschritt:**
- Nachweise einsammeln bzw. vom Nutzer erfragen. **Ein Nachweis ist nur gültig, wenn man ihn nachprüfen könnte:** Er enthält ein Datum, einen Link, einen Dateipfad, eine ID (Test, Aufgabe, Entscheidung) oder eine Commit-/Lauf-Nummer. Beispiele: Testname + Datum des grünen Laufs, Link zum CI-Lauf, Konfigurationsdatei/-zeile, Screenshot-Datei, Datum + Ergebnis eines manuellen Tests, Datum des Wiederherstellungstests, Dokument/Link.
- Ungültig: „erledigt“, „geprüft“, „ok“, „ja“, „laut KI“, „habe ich gemacht“, „siehe oben“ – und alles andere ohne Datum, Link, Pfad, ID oder Commit. Das Prüfskript lehnt solche Haken ab.
- **Risikostufe 3:** Eine externe Fachprüfung (Bericht unter `pruefungen/externe-pruefung-….md` oder Nachweis in der Launch-Liste) **oder** ein vom Nutzer bewusst akzeptiertes Risiko (`E-…` in `ENTSCHEIDUNGEN.md`, Stichwort „extern“) ist Voraussetzung für „freigabefähig“. Eine zweite KI ersetzt das nicht. Sage das dem Nutzer, auch wenn er drängt.
- **Regelwerk-Version prüfen:** Steht in `PROJECT_STATE.md` eine ältere Version als im Repository, lies `CHANGELOG.md` und prüfe, ob sich etwas geändert hat, das die Freigabe betrifft.
- Prüfskript ausführen: `node scripts/pruefe-projekt.mjs projekte/<slug> --launch` (ohne Befehlsausführung: manuell nach denselben Regeln).
- **Freigabestatus** bestimmen:
  - **Freigabefähig:** alle Pflichtpunkte ☑ mit Nachweis oder `n/a` mit Begründung.
  - **Freigabefähig mit akzeptierten Risiken:** verbleibende Pflichtpunkte sind als `E-…` vom Nutzer bewusst akzeptiert.
  - **Nicht freigabefähig:** sonst. Das sagst du klar – auch wenn der Nutzer drängt.

### Weitere Prüfpunkte (zusätzlich zur Sicherheits-Checkliste)

| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☐ | Backup-Wiederherstellung getestet | 2 | |
| ☐ | Monitoring, Uptime- und Kosten-Alarme aktiv | 1 | |
| ☐ | 2FA auf allen Betreiber-Zugängen | 1 | |
| ☐ | Incident-Plan liegt bereit, Datenpannen-Meldeweg geklärt (Fristen in `guides/recht-eu-ueberblick.md` neu prüfen) | 2 | |
| ☐ | Release-Checkliste (`templates/release-checkliste.md`) für den ersten Release durchgegangen | 1 | |
| ☐ | Verarbeitungsverzeichnis und Löschkonzept liegen vor und passen zur echten Verarbeitung | 2 | |
| ☐ | Auftragsverarbeiter-Liste vollständig, Drittland-Übermittlungen geprüft | 2 | |
| ☐ | Datenschutz-Folgenabschätzung durchgeführt oder Schwellwertprüfung dokumentiert (`templates/dsfa-vorlage.md`) | 3 | |
| ☐ | KI-Funktionen: Fristen und Pflichten der EU-KI-Verordnung zum Launch-Zeitpunkt neu geprüft (Stand ändert sich) | 1 | |
| ☐ | Nutzerinhalte: Melde- und Entfernungsverfahren erreichbar und getestet (falls Nutzer Inhalte veröffentlichen) | 2 | |
| ☐ | Zeit und Formate: Pflicht-Testfälle aus `guides/zeit-und-formate.md` bestanden (falls Zeitbezug) | 1 | |
| ☐ | Impressum, Datenschutzerklärung (und ggf. AGB) erreichbar | 2 | |
| ☐ | Einwilligungen funktionieren („Ablehnen“ wirkt wirklich) | 2 | |
| ☐ | Datenexport und Konto-Löschung funktionieren | 2 | |
| ☐ | AVV mit allen Dienstleistern abgeschlossen | 2 | |
| ☐ | Preise und Richtlinien in `QUELLEN.md` neu geprüft | 1 | |
| ☐ | Manuelle Release-Checkliste aus Phase 19 durchgeführt | 1 | |
| ☐ | Barrierefreiheits-Check (automatisch + Tastatur) | 1 | |
| ☐ | Auf echten Geräten getestet (inkl. älterem Smartphone) | 1 | |
| ☐ | App Stores: Datenschutzangaben passend zur echten Verarbeitung (Apple „App Privacy“, Google „Data safety“) | 1 | |
| ☐ | App Stores: Konto-Löschung in der App (Apple verlangt das, wenn Konten in der App angelegt werden; Google zusätzlich einen Lösch-Weg außerhalb der App) – aktuelle Richtlinien prüfen | 2 | |
| ☐ | App Stores: Screenshots, Beschreibung, Altersfreigabe, Support- und Datenschutz-URL, Test-Zugang für Prüfer | 1 | |
| ☐ | Web: eigene Domain mit HTTPS, Weiterleitung http → https, Fehlerseiten 404/500 | 1 | |
| ☐ | Web: Seitentitel, Beschreibung und Link-Vorschau gesetzt, Sitemap und `robots.txt` bewusst gewählt (`guides/launch-und-auffindbarkeit.md`) | 1 | |
| ☐ | Browser-Erweiterung: angeforderte Berechtigungen minimal und im Store-Eintrag begründet (`guides/plattformen.md`) | 1 | |
| ☐ | Desktop-App: Installationspaket signiert, Update-Weg getestet (`guides/plattformen.md`) | 2 | |
| ☐ | Spiel: Altersfreigabe, In-App-Käufe und Zufallsmechaniken gemäß Store-Vorgaben geprüft (`guides/appstore-veroeffentlichung.md`) | 2 | |
| ☐ | Testkonten und Testdaten aus der Produktion entfernt, Debug-Modus aus | 1 | |
| ☐ | Feedback-Kanal eingerichtet | 1 | |

Store-Punkte nur bei Store-Apps (Einzelheiten: [`guides/appstore-veroeffentlichung.md`](../guides/appstore-veroeffentlichung.md)); Web-Punkte nur bei Web-Apps; Erweiterungs-, Desktop- und Spiel-Punkte nur bei dieser App-Art (sonst `n/a – keine Store-App` usw.). Plattformabhängige Besonderheiten: [`guides/plattformen.md`](../guides/plattformen.md).

## Missbrauchs- und Sicherheitscheck

- Nach dem Launch steigt die Angriffsfläche schlagartig (Bots finden neue Seiten schnell) → Alarme in den ersten Tagen besonders beobachten.
- Das Prüfskript prüft Nachweise auf **Nachprüfbarkeit**, nicht auf **Wahrheit**. Ein Datum im Nachweis beweist nicht, dass der Test lief. Stichproben sind deshalb Pflicht: Frage bei Sicherheitspunkten nach dem Testprotokoll und öffne mindestens einen verlinkten Lauf.
- Ein „Nicht freigabefähig“ wird nicht weichgezeichnet. Akzeptiert der Nutzer Risiken, dokumentierst du sie mit Datum in `ENTSCHEIDUNGEN.md`.

## Ergebnis-Dokument `23-launch.md`

```markdown
# Launch & Freigabe

## Strategie
- Start: Soft Launch / öffentlich
- Feedback-Kanal: …
- Erste Nutzer: …
- Plan für die ersten 2 Wochen: …

## Checkliste
### Sicherheit (aus security/checkliste.md, Stufe ≤ <N>)
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☑ | Test: Nutzer A kann Daten von B nicht lesen … | 2 | T-SEC-01..04 grün, CI-Lauf #128, 2026-11-02 |

### Betrieb, Recht, Qualität, Stores, Web
| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|

## Freigabebericht
| Bereich | Pflichtpunkte | mit Nachweis | n/a | offen | akzeptiert (E-…) |
|---|---|---|---|---|---|

Prüfskript: pruefungen/launch-JJJJ-MM-TT.txt
**Freigabestatus:** Freigabefähig / Freigabefähig mit akzeptierten Risiken / Nicht freigabefähig
**Entscheidung des Projektinhabers:** … (Datum)
```

## Definition of Done
- [ ] Checkliste mit Nachweis-Spalte angelegt (Planung)
- [ ] Beim Freigabeschritt: jeder Pflichtpunkt ☑ mit Nachweis, `n/a` mit Begründung oder als `E-…` akzeptiert
- [ ] Prüfskript `--launch` ausgeführt (oder manuell geprüft); „NICHT GEPRÜFT“-Meldungen behoben oder offen benannt
- [ ] Bei Risikostufe 3: externe Fachprüfung belegt oder Risiko bewusst akzeptiert (`E-…`)
- [ ] Stichprobe: mindestens ein Nachweis inhaltlich nachgeprüft (Protokoll geöffnet, nicht nur Datum gelesen)
- [ ] Freigabestatus und Entscheidung dokumentiert

→ **Gate**
