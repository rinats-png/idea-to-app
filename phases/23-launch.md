# Phase 23 – Launch

> Kurz: Was muss erledigt sein, bevor die App öffentlich geht – und wie erfahren Menschen davon?

| | |
|---|---|
| **Ziel** | Launch-Checkliste, Store-/Hosting-Vorbereitung, Feedback-Kanal, erste Bekanntmachung |
| **Ergebnis** | `projekte/<slug>/23-launch.md` |
| **Visual** | Launch-Checkliste |
| **Dauer** | ca. 15 Minuten (Durchführung später) |
| **Überspringen** | Lite-Modus: optional, aber **vor Veröffentlichung Pflicht**; „nur für mich“ → nur Sicherheits- und Backup-Teil |

> Diese Phase wird typischerweise **nach dem Bauen** durchgeführt. Der Nutzer kann sie jetzt planen und später mit `zurück zu Phase 23` abhaken.

## Für Einsteiger erklärt

Der Launch ist der Moment, ab dem fremde Menschen deiner App ihre Daten anvertrauen. Deshalb gibt es vorher eine letzte, gründliche Prüfung. Bei Apps für App Store und Google Play kommt eine Prüfung durch Apple bzw. Google hinzu, die einige Tage dauern und Nachbesserungen verlangen kann.

## Fragen

**Q1 – Wie willst du starten?**
- a) Leiser Start mit wenigen Testnutzern (Soft Launch) **(Empfehlung)**
- b) Direkt öffentlich

**Q2 – Wie sollen Nutzer Feedback oder Probleme melden?**
- a) E-Mail-Adresse
- b) Formular in der App
- c) Community (Discord, Forum …)

**Q3 – Wie sollen die ersten Nutzer von der App erfahren?** (Bekannte, Vereine, Social Media, Fachgruppen, Kollegen …)

## Was die KI selbst ergänzen soll

**Launch-Checkliste** (nur Zutreffendes):

Sicherheit
- [ ] `security/checkliste.md` vollständig durchgegangen
- [ ] Alle Pflicht-Sicherheitstests grün
- [ ] Keine geheimen Schlüssel im Frontend (Build durchsucht)
- [ ] Produktions-Schlüssel getrennt von Test-Schlüsseln
- [ ] Datenbankregeln (RLS / Security Rules) aktiv und getestet
- [ ] Stufe 3: externe Prüfung erfolgt oder bewusst verschoben (dokumentiert)

Betrieb
- [ ] Backup-Wiederherstellung getestet
- [ ] Monitoring, Uptime- und Kosten-Alarme aktiv
- [ ] 2FA auf allen Zugängen
- [ ] Notfallplan liegt bereit

Recht
- [ ] Impressum, Datenschutzerklärung (und ggf. AGB) erreichbar
- [ ] Einwilligungen funktionieren („Ablehnen“ wirkt wirklich)
- [ ] Datenexport und Konto-Löschung funktionieren
- [ ] AVV mit allen Dienstleistern abgeschlossen

Qualität
- [ ] Manuelle Release-Checkliste aus Phase 19 durchgeführt
- [ ] Barrierefreiheits-Check
- [ ] Auf echten Geräten getestet (inkl. älterem Smartphone)

App Stores (falls zutreffend; aktuelle Richtlinien prüfen)
- [ ] Entwicklerkonten (Apple Developer Program, Google Play Console)
- [ ] Datenschutzangaben im Store (Apple „App Privacy“, Google „Data safety“) passend zur echten Datenverarbeitung
- [ ] **Konto-Löschung in der App** möglich (Apple verlangt das, wenn man in der App ein Konto anlegen kann; Google verlangt zusätzlich einen Lösch-Weg außerhalb der App, z. B. Webseite)
- [ ] Screenshots, Beschreibung, Altersfreigabe, Support-URL, Datenschutz-URL
- [ ] Test-Zugang für die Prüfer, falls Login nötig

Web
- [ ] Eigene Domain mit HTTPS, Weiterleitung von http → https
- [ ] Security-Header geprüft (z. B. mit einem Header-Check-Tool)
- [ ] Fehlerseiten (404/500) vorhanden

Kommunikation
- [ ] Feedback-Kanal eingerichtet
- [ ] Kurze Ankündigung / Landingpage
- [ ] Plan für die ersten 2 Wochen: Feedback sammeln, Fehler priorisieren

## Missbrauchs- und Sicherheitscheck

- Nach dem Launch steigt die Angriffsfläche schlagartig (Bots finden neue Seiten schnell) → Alarme in den ersten Tagen besonders beobachten.
- Testkonten und Testdaten aus der Produktion entfernen; Debug-Modus aus.

## Ergebnis-Dokument `23-launch.md`

```markdown
# Launch

## Strategie
…

## Checkliste
…

## Feedback-Kanal
…

## Erste Nutzer gewinnen
…

## Erste 2 Wochen
…
```

## Definition of Done
- [ ] Launch-Checkliste erstellt (und vor dem echten Launch abgehakt)
- [ ] Feedback-Kanal festgelegt
- [ ] Plan für die ersten Nutzer

→ **Standard-Gate**
