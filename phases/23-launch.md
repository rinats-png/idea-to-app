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

**Q3 – Wie sollen die ersten Nutzer von der App erfahren?** (Bekannte, Vereine, Social Media, Fachgruppen, Kollegen …)

**Q4 (beim Freigabeschritt) – Für jeden offenen Pflichtpunkt: nachholen, als Risiko akzeptieren (`E-…`) oder Launch verschieben?**

## Was die KI selbst ergänzen soll

**1. Checkliste anlegen** (Format unten, Spalte „Nachweis“ zunächst leer):
- **Sicherheit:** alle Punkte aus `security/checkliste.md`, deren Stufe ≤ der Risikostufe ist (die anderen mit `n/a – Stufe` oder weglassen).
- **Betrieb, Recht, Qualität, Stores, Web, Kommunikation:** die Punkte unten, soweit zutreffend.

**2. Beim Freigabeschritt:**
- Nachweise einsammeln bzw. vom Nutzer erfragen. Gültige Nachweise: Testname + Datum des grünen Laufs, Link zum CI-Lauf, Konfigurationsdatei/-zeile, Screenshot-Datei, Datum + Ergebnis eines manuellen Tests, Datum des Wiederherstellungstests, Dokument/Link.
- Ungültig: „erledigt“, „geprüft“, „ok“, „ja“, „laut KI“.
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
| ☐ | Notfallplan liegt bereit | 2 | |
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
| ☐ | Testkonten und Testdaten aus der Produktion entfernt, Debug-Modus aus | 1 | |
| ☐ | Feedback-Kanal eingerichtet | 1 | |

Store-Punkte nur bei Store-Apps; Web-Punkte nur bei Web-Apps (sonst `n/a – keine Store-App` usw.).

## Missbrauchs- und Sicherheitscheck

- Nach dem Launch steigt die Angriffsfläche schlagartig (Bots finden neue Seiten schnell) → Alarme in den ersten Tagen besonders beobachten.
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
- [ ] Prüfskript `--launch` ausgeführt (oder manuell geprüft)
- [ ] Freigabestatus und Entscheidung dokumentiert

→ **Gate**
