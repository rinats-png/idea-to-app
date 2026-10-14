# Auftragsverarbeiter-Liste: <App-Name>

> **Wofür:** Übersicht aller Dienstleister, die in deinem Auftrag personenbezogene Daten verarbeiten (Art. 28 DSGVO), samt Vertrag (AVV), Standort und Drittlandgrundlage. **Wann:** Entwurf in Phase 16 (aus Phase 11/13/15), Abgleich vor dem Launch (Phase 23), Prüfung mindestens jährlich und bei jedem Anbieterwechsel (Phase 24). **Wer füllt aus:** die KI als Entwurf, der Betreiber schließt die Verträge ab und trägt Datum und Nachweis ein.

> ⚠️ Keine Rechtsberatung. Ob ein Dienst Auftragsverarbeiter ist (oder eigenständig Verantwortlicher), ist im Einzelfall **[PRÜFEN]**. Hintergrund: `guides/recht-eu-ueberblick.md` (Abschnitt 3: Art. 28, Art. 44 ff.).

*Einsteiger-Erklärung: Ein **Auftragsverarbeiter** verarbeitet Daten nur nach deinen Weisungen und für deine Zwecke (Hosting, Datenbank, E-Mail-Versand, Support-Tool, KI-API, Analytics). Mit ihm brauchst du einen **Auftragsverarbeitungsvertrag (AVV)**; die meisten Anbieter bieten ihn im Kundenbereich zum Abschluss oder als Download an. Wer Daten für **eigene** Zwecke nutzt (z. B. ein Zahlungsanbieter für Betrugsprävention, eine Behörde), ist meist ein eigener Verantwortlicher – trotzdem hier aufführen und kennzeichnen.*

## 1. Liste

| Nr. | Anbieter (Firma, Sitz) | Zweck / Funktion in der App | Datenkategorien (Datenklassen aus Phase 11) | Betroffene | Verarbeitungsort / Rechenzentrum (Region) | Drittlandübertragung + Grundlage | AVV vorhanden? (Datum, Fundstelle) | Unterauftragsverarbeiter bekannt / Änderungen? | Prüfdatum (letzte Prüfung) | Alternative (Anbieter, EU) | Notizen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AV-01 | `<Hosting/Backend-Anbieter>` | Server, Datenbank | `<personenbezogen, ggf. besonders schützenswert>` | Nutzer | `<EU-Region xyz>` | `<nein / ja: Angemessenheitsbeschluss, DPF (zertifiziert? geprüft am …), Standardvertragsklauseln>` | `<ja, JJJJ-MM-TT, Kundenbereich>` | `<Liste: URL>` | `<JJJJ-MM-TT>` | `<…>` | |
| AV-02 | `<E-Mail-Versanddienst>` | Transaktions-E-Mails | `<E-Mail, Name>` | Nutzer | `…` | `…` | `…` | `…` | `…` | `…` | |
| AV-03 | `<KI-Anbieter>` | `<Funktion mit KI>` | `<Eingabetexte>` | Nutzer | `…` | `…` | `…` | `…` | `…` | `<…>` | Training mit Kundendaten ausgeschlossen? `[PRÜFEN]` |
| AV-04 | `<Fehler-Tracking, z. B. Absturzberichte>` | Qualität | `<technische Daten; keine Inhalte>` | Nutzer | `…` | `…` | `…` | `…` | `…` | `…` | |
| AV-05 | `<Analytics (falls eingesetzt)>` | Reichweitenmessung | `…` | Nutzer | `…` | `…` | `…` | `…` | `…` | `…` | Einwilligung nötig? (TDDDG § 25) |
| AV-06 | `<Zahlungsanbieter>` | Zahlungsabwicklung | `<Zahlungsstatus, Kunden-ID>` | Kunden | `…` | `…` | `<eigenständiger Verantwortlicher? / AVV>` | `…` | `…` | `…` | Keine Kartendaten bei uns |
| AV-07 | `<Support-/Ticket-Tool>` | Kundenservice | `…` | Nutzer | `…` | `…` | `…` | `…` | `…` | `…` | |
| AV-08 | `<Domain/DNS/CDN>` | Auslieferung, Sicherheit | `<IP-Adressen, Verbindungsdaten>` | Nutzer | `…` | `…` | `…` | `…` | `…` | `…` | |
| AV-09 | `<Push-Dienste Apple/Google>` | Benachrichtigungen | `<Geräte-Kennung>` | Nutzer | `…` | `…` | `<nach Bedingungen des Dienstes>` | `…` | `…` | `…` | |
| AV-… | | | | | | | | | | | |

*Ausfüllhinweise:*
- **Standort:** konkrete Region des Rechenzentrums angeben, nicht nur „EU“. Auch **Support-Zugriffe** aus Drittländern beachten.
- **Drittlandübertragung:** Grundlage nach Art. 44 ff. DSGVO: Angemessenheitsbeschluss (bei USA: Zertifizierung im EU-US Data Privacy Framework prüfen; Stand der Rechtslage **[PRÜFEN]**, siehe Guide), Standardvertragsklauseln der EU-Kommission oder andere Garantien.
- **AVV:** Datum des Abschlusses und **wo der Nachweis liegt** (PDF im Projektordner oder Link im Kundenbereich). Kein AVV = Dienst nicht mit echten Nutzerdaten in Betrieb nehmen.
- **Prüfdatum:** Wann wurde zuletzt geprüft, ob AVV, Standort, Unterauftragsverarbeiter und Zertifizierung noch stimmen? Preise/Bedingungen/Zertifizierungen ändern sich.
- **Alternative:** realistische Ausweichlösung (bevorzugt EU-Anbieter), damit ein Wegfall der Rechtsgrundlage (z. B. für Drittlandtransfer) nicht zum Notfall wird.
- **Eintrag in `QUELLEN.md`:** Aussagen über Anbieter (Standort, Zertifizierung, Aufbewahrung) mit Quelle und Prüfdatum belegen.

## 2. Mindestinhalt eines AVV (Prüfliste, Art. 28 Abs. 3 DSGVO) `[PRÜFEN im Wortlaut]`

- [ ] Gegenstand, Dauer, Art und Zweck der Verarbeitung; Art der Daten und Kategorien Betroffener
- [ ] Verarbeitung **nur auf dokumentierte Weisung** des Verantwortlichen
- [ ] Vertraulichkeitsverpflichtung der beteiligten Personen
- [ ] Technische und organisatorische Maßnahmen (Art. 32)
- [ ] Regeln zu **Unterauftragsverarbeitern** (Genehmigung, Information über Änderungen)
- [ ] Unterstützung bei **Betroffenenrechten** und bei Pflichten (Sicherheit, Meldung von Datenpannen, DSFA)
- [ ] **Löschung oder Rückgabe** der Daten nach Vertragsende
- [ ] Nachweise und **Überprüfungen** (Audit-Rechte)
- [ ] Meldung von Datenpannen an dich **unverzüglich** (Art. 33 Abs. 2)

## 3. Jährliche Prüfung (Checkliste)

- [ ] Alle in der App genutzten Dienste stehen in der Liste (Abgleich mit Phase 13/15, Abhängigkeiten, SDKs)
- [ ] AVV aktuell, Datum und Nachweis eingetragen
- [ ] Standort und Drittlandgrundlage unverändert (DPF-Zertifizierung, Standardvertragsklauseln)
- [ ] Unterauftragsverarbeiter geprüft, Änderungen akzeptiert oder widersprochen
- [ ] Datenschutzerklärung nennt alle Empfänger (`templates/datenschutzerklaerung-geruest.md`)
- [ ] Verarbeitungsverzeichnis verweist auf die Dienste (`templates/verarbeitungsverzeichnis.md`)
- [ ] Löschung bei Vertragsende bzw. Kontolöschung geklärt (`templates/loeschkonzept.md`)
- [ ] 2FA für alle Anbieter-Zugänge aktiv (`phases/20-betrieb.md`)
- [ ] Lieferkettenrisiko bewertet (`guides/lieferkette.md`)

## 4. Änderungshistorie

| Datum | Änderung (neuer Anbieter, Wechsel, AVV aktualisiert) | Wer |
|---|---|---|
| `<JJJJ-MM-TT>` | Erstentwurf | KI / Betreiber |
