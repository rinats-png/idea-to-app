# Löschkonzept: <App-Name>

> **Wofür:** legt fest, **welche Daten wie lange** gespeichert und **wann und wie** gelöscht werden (Art. 5 Abs. 1 Buchst. e „Speicherbegrenzung“, Art. 17 DSGVO „Recht auf Löschung“). **Wann:** Entwurf in Phase 16 (Fristen aus Phase 11), technische Umsetzung in Phase 19/21, Prüfung vor dem Launch (Phase 23), jährliche Kontrolle (Phase 24). **Wer füllt aus:** die KI als Entwurf, der Betreiber bestätigt die Fristen.

> ⚠️ Keine Rechtsberatung. Gesetzliche Aufbewahrungsfristen (z. B. Steuer-/Handelsrecht) sind **[PRÜFEN]** und nicht erfunden einzutragen. Hintergrund: `guides/recht-eu-ueberblick.md` (Abschnitt 3, Art. 17). Konkrete Zahlenwerte für Sitzungen/Tokens gehören nach `security/standardwerte.md`, nicht hierher.

*Einsteiger-Hinweis: „Löschen“ heißt wirklich löschen – in der Datenbank, in hochgeladenen Dateien, in Suchindexen, Caches und (nach einer Frist) in den Backups. „Nur ausblenden“ (Soft-Delete) reicht nicht, wenn die Daten dabei erhalten bleiben und weiter nutzbar wären.*

## 1. Grundsätze

- Wir speichern nur, was für den Zweck nötig ist (Phase 11: Datensparsamkeit).
- Für jede Datenart gibt es einen **Zweck**, eine **Frist** und einen **Löschauslöser**.
- Gesetzliche Aufbewahrungspflichten gehen vor: Daten werden dann **gesperrt** (nur noch für diesen Zweck zugänglich) und nach Fristablauf gelöscht.
- Löschungen werden **nachgewiesen** (Protokoll ohne den gelöschten Inhalt).
- Verantwortlich für das Löschkonzept: `<Name/Rolle>`; Kontrolle: `<Rhythmus>`.

## 2. Löschregeln pro Datenart

| Nr. | Datenart (Phase 11) | Zweck | Speicherdauer / Aufbewahrungsgrund | Löschauslöser | Löschweg (automatisch/manuell, Ort) | Backup-Umgang | Nachweis |
|---|---|---|---|---|---|---|---|
| L-01 | Konto-Stammdaten (`<E-Mail, Name>`) | Konto, Anmeldung | bis Kontolöschung `<+ Karenzzeit, z. B. n Tage für Wiederherstellung>` | Nutzer löscht Konto oder Inaktivität `<nach …>` | `<automatischer Job + sofort bei Kontolöschung>` | in Backups bis Ablauf der Backup-Aufbewahrung `<n Tage>` | `<Lösch-Log mit Konto-ID-Hash, Zeitpunkt>` |
| L-02 | Nutzerinhalte (`<Einträge, Notizen>`) | Kernfunktion | bis zur Löschung durch Nutzer | Nutzer löscht Eintrag / Konto | `<Datenbank + abhängige Daten>` | wie L-01 | `…` |
| L-03 | Hochgeladene Dateien (`<Fotos, PDFs>`) | Kernfunktion | wie L-02 | wie L-02 | `<Datei im Speicher löschen, nicht nur Datenbankeintrag>` | wie L-01; Versionierung im Speicher beachten | `…` |
| L-04 | Passwort-Hash, Sitzungen, Tokens | Anmeldung | Hash: bis Kontolöschung; Sitzungen/Tokens: Laufzeit laut `security/standardwerte.md` | Abmeldung, Ablauf, Kontolöschung | `…` | Hashes in Backups wie L-01 | `…` |
| L-05 | Server-Logs (IP, Zeitstempel) | Betrieb, Sicherheit | `<n Tage>` | Fristablauf | `<Log-Rotation>` | Logs nicht in Langzeit-Backups | `<Konfigurationsnachweis>` |
| L-06 | Sicherheits-/Audit-Log (keine Passwörter/Tokens/Inhalte) | Missbrauchserkennung, Nachvollziehbarkeit | `<n Monate>` | Fristablauf | `…` | `…` | `…` |
| L-07 | Zahlungs- und Rechnungsdaten | Abrechnung, Buchführung | gesetzliche Aufbewahrung `<Frist [PRÜFEN]>` | Fristablauf | `<Sperrung, dann Löschung>` | `…` | `…` |
| L-08 | Support-Anfragen | Support | `<n Monate nach Abschluss>` | Fristablauf, Löschwunsch | `…` | `…` | `…` |
| L-09 | Einwilligungsnachweise | Nachweis (Art. 7 Abs. 1) | solange Einwilligung wirkt + `<Verjährungs-/Nachweisfrist [PRÜFEN]>` | Fristablauf | `…` | `…` | `…` |
| L-10 | Absturzberichte / Analytics (falls vorhanden) | Fehlerbehebung | `<n Tage>` (Einstellung beim Dienstleister) | Fristablauf | `<Aufbewahrungseinstellung im Dienst>` | n. a. | `<Screenshot/Konfiguration>` |
| L-11 | Daten bei KI-Anbietern (Eingaben/Ausgaben) | Funktion `<…>` | laut Anbieter `<n Tage>` / „keine Speicherung“ `[PRÜFEN in AVV]` | Fristablauf, Kontolöschung | `<Löschanfrage über API/Support>` | n. a. | `<AVV-Zusage>` |
| L-12 | Gemeldete Inhalte / Moderationsentscheidungen | Rechtsdurchsetzung, Nachweis | `<n Monate>` | Fristablauf | `…` | `…` | `…` |
| L-… | | | | | | | |

*Ausfüllhinweise:*
- **Frist** immer mit Begründung; „solange nötig“ ist keine Frist.
- **Löschauslöser:** Nutzeraktion, Zeitablauf, Zweckwegfall, Widerruf der Einwilligung, Widerspruch, gesetzliche Pflicht.
- **Löschweg:** Wo liegt die Datenart überall? (Datenbank, Dateispeicher, Cache, Suchindex, E-Mail-Dienst, Analytics, KI-Anbieter, Exporte, Logs.)
- **Backup-Umgang:** Daten in Backups werden nicht einzeln gelöscht, sondern verschwinden mit dem Ablauf der Backup-Aufbewahrung. Wichtig: nach einer **Wiederherstellung** müssen bereits erfolgte Löschungen **erneut ausgeführt** werden (Löschprotokoll abspielen).

## 3. Kontolöschung (Ablauf)

| Schritt | Beschreibung | Wer/Was |
|---|---|---|
| 1 | Nutzer fordert Löschung in der App an; **erneute Anmeldung/Bestätigung** (Schutz gegen Fremdlöschung) | App |
| 2 | Hinweis, was gelöscht wird, was aus gesetzlichen Gründen bleibt, ggf. Export anbieten | App |
| 3 | Karenzzeit `<n Tage>` *(optional; Löschung zurücknehmbar)*; Konto sofort gesperrt | Job |
| 4 | Endgültige Löschung in Datenbank, Dateispeicher, Caches, Suchindex | Job |
| 5 | Löschauftrag an Dienstleister (E-Mail-Dienst, Analytics, KI-Anbieter, Zahlungsanbieter soweit zulässig) | Job/manuell |
| 6 | Bestätigung an Nutzer (E-Mail), Eintrag im Lösch-Log | Job |
| 7 | Daten in Backups verschwinden spätestens nach `<Frist>`; bei Wiederherstellung Löschprotokoll erneut anwenden | Betrieb |
| 8 | Gesetzlich aufbewahrte Daten werden gesperrt und nach Fristablauf gelöscht | Job/manuell |

*Sonderfälle bedenken:* Inhalte, die andere Nutzer betreffen (Kommentare, geteilte Räume) – löschen oder anonymisieren? Entscheidung in `ENTSCHEIDUNGEN.md`. Inaktive Konten: Erinnerung vor automatischer Löschung.

## 4. Betroffenenanfragen (Löschverlangen ohne App-Funktion)

- Eingang über `<E-Mail/Formular>`; Identität prüfen; Antwort innerhalb der Frist nach Art. 12 Abs. 3 DSGVO (ein Monat, verlängerbar) `[PRÜFEN]`.
- Löschung nach Abschnitt 3; Ablehnungsgründe (gesetzliche Pflicht, Rechtsansprüche) schriftlich begründen.
- Dokumentation: Datum der Anfrage, Entscheidung, Datum der Ausführung.

## 5. Nachweis und Kontrolle

| Prüfung | Rhythmus | Verantwortlich | Ergebnis |
|---|---|---|---|
| Automatische Löschjobs laufen (Log-Stichprobe) | `<monatlich>` | `<…>` | `<…>` |
| Stichprobe: Gelöschtes Konto ist wirklich überall weg (Datenbank, Dateien, Dienstleister) | `<vor Launch + jährlich>` | `<…>` | `<…>` |
| Testfall `TEST-…`/`T-SEC-…`: Löschfunktion, Export nur für eigenes Konto | Phase 19 | `<…>` | `<…>` |
| Backups: Aufbewahrungsfrist wie festgelegt | `<vierteljährlich>` | `<…>` | `<…>` |

## 6. Verknüpfungen

- Verarbeitungsverzeichnis: `templates/verarbeitungsverzeichnis.md` (Löschfristen identisch halten)
- Datenschutzerklärung: `templates/datenschutzerklaerung-geruest.md` (Abschnitt Speicherdauer)
- Auftragsverarbeiter: `templates/auftragsverarbeiter-liste.md` (Löschung bei Vertragsende)
- Backups und Notfall: `phases/20-betrieb.md`
- Datenmodell und Fristen: `phases/11-daten-und-inhalte.md`
