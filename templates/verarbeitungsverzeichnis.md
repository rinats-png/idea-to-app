# Verzeichnis von Verarbeitungstätigkeiten: <App-Name>

> **Wofür:** schriftliche Übersicht aller Verarbeitungen personenbezogener Daten (Art. 30 DSGVO) – Nachweis gegenüber der Aufsichtsbehörde und Grundlage für Datenschutzerklärung, Löschkonzept und Auftragsverarbeiter-Liste. **Wann:** Entwurf in Phase 16, Abgleich vor dem Launch (Phase 23), Pflege bei jeder Änderung (Phase 24). **Wer füllt aus:** die KI als Entwurf aus Phase 11/13/15, der Betreiber (Verantwortlicher) prüft und bestätigt.

> ⚠️ Keine Rechtsberatung. Die Ausnahme für kleine Betriebe (Art. 30 Abs. 5) greift bei einer App mit Konten praktisch nie. Rechtsgrundlagen sind mit **[PRÜFEN]** zu bestätigen. Hintergrund: `guides/recht-eu-ueberblick.md` (Abschnitt 3).

*Ausfüllhinweis: Eine Verarbeitungstätigkeit = ein **Zweck** (nicht ein Feld). Beispiele: „Nutzerkonto verwalten“, „Zahlungen abwickeln“, „Absturzberichte auswerten“. Gleiche Daten für zwei Zwecke = zwei Zeilen.*

## 1. Stammdaten

| Angabe | Inhalt |
|---|---|
| Verantwortlicher (Name, Anschrift, Kontakt) | `<…>` |
| Gemeinsam Verantwortliche *(falls vorhanden)* | `<…>` |
| Vertreter in der EU *(falls Betreiber außerhalb der EU)* | `<…>` |
| Datenschutzbeauftragte(r) *(falls benannt)* | `<…>` |
| Stand / Version / nächste Prüfung | `<JJJJ-MM-TT / v1 / JJJJ-MM-TT>` |
| Risikostufe (Projekt) | `<1 / 2 / 3>` |

## 2. Verarbeitungstätigkeiten (als Verantwortlicher)

| Nr. | Verarbeitung / Zweck | Datenkategorien (inkl. Datenklasse aus Phase 11) | Betroffene | Rechtsgrundlage *[PRÜFEN]* | Empfänger / Auftragsverarbeiter | Drittland + Garantie | Löschfrist (→ Löschkonzept) | Technische und organisatorische Maßnahmen (Kurzverweis) |
|---|---|---|---|---|---|---|---|---|
| V-01 | `<Nutzerkonto verwalten>` | `<E-Mail, Passwort-Hash; personenbezogen>` | Nutzer | `<Art. 6 Abs. 1 Buchst. b>` | `<Hosting, E-Mail-Dienst>` | `<nein / ja: …>` | `<bis Kontolöschung>` | `<Phase 14: Hashing, Zugriffskontrolle>` |
| V-02 | `<Server-Logs / Betrieb>` | `<IP-Adresse, Zeitstempel>` | Nutzer | `<Art. 6 Abs. 1 Buchst. f>` | `<Hosting>` | `…` | `<7 Tage>` | `…` |
| V-03 | `<Inhalte der Nutzer speichern>` | `<Inhalte; ggf. besonders schützenswert>` | Nutzer | `<Art. 6 Abs. 1 Buchst. b; bei Art. 9: Buchst. a + Art. 9 Abs. 2 Buchst. a>` | `…` | `…` | `…` | `…` |
| V-04 | `<Zahlungen abwickeln>` | `<Zahlungsstatus, Kunden-ID; keine Kartendaten>` | Kunden | `<Art. 6 Abs. 1 Buchst. b, c>` | `<Zahlungsanbieter>` | `…` | `<gesetzliche Frist>` | `…` |
| V-05 | `<KI-Funktion nutzen>` | `<Eingabetexte>` | Nutzer | `…` | `<KI-Anbieter>` | `…` | `…` | `…` |
| V-06 | `<Support-Anfragen>` | `<E-Mail, Nachricht>` | Nutzer | `<Art. 6 Abs. 1 Buchst. b/f>` | `…` | `…` | `…` | `…` |
| V-07 | `<Einwilligungen nachweisen>` | `<Zeitpunkt, Version, Entscheidung>` | Nutzer | `<Art. 6 Abs. 1 Buchst. c, Art. 7 Abs. 1>` | `…` | `…` | `…` | `…` |
| V-08 | `<Moderation / Meldungen bearbeiten>` | `<gemeldeter Inhalt, Melder>` | Nutzer | `…` | `…` | `…` | `…` | `…` |
| V-… | | | | | | | | |

*Hinweise zu den Spalten:*
- **Datenkategorien:** konkret, nicht „diverse Daten“. Besondere Kategorien (Art. 9) deutlich markieren.
- **Rechtsgrundlage:** Art. 6 Abs. 1 Buchst. a (Einwilligung), b (Vertrag), c (rechtliche Pflicht), d (lebenswichtige Interessen), e (öffentliche Aufgabe), f (berechtigte Interessen). Bei f: kurze Interessenabwägung in `ENTSCHEIDUNGEN.md`.
- **Empfänger:** auch interne Rollen (z. B. Support) und Behörden nennen.
- **Drittland:** Land, Garantie (Angemessenheitsbeschluss, DPF-Zertifizierung mit Prüfdatum, Standardvertragsklauseln).
- **Löschfrist:** muss mit dem Löschkonzept (`templates/loeschkonzept.md`) übereinstimmen.

## 3. Verarbeitungen als Auftragsverarbeiter *(nur falls du für andere Daten verarbeitest)*

| Auftraggeber | Kategorien der Verarbeitung | Drittland | TOM-Verweis |
|---|---|---|---|
| `<…>` | `<…>` | `<…>` | `<…>` |

*(Entfällt bei den meisten Apps. Falls du im Auftrag eines Arbeitgebers/einer Behörde handelst: klären, wer Verantwortlicher ist.)*

## 4. Dienstleister (Auftragsverarbeiter)

Vollständige Liste: `templates/auftragsverarbeiter-liste.md`.

## 5. Allgemeine Beschreibung der technischen und organisatorischen Maßnahmen (Art. 32 DSGVO)

*Kurzbeschreibung mit Verweis auf Phase 14 und `security/regeln-fuer-ki.md`; keine konkreten Geheimnisse.*

- Zugriffskontrolle: `<…>`
- Verschlüsselung (Übertragung/Speicherung): `<…>`
- Protokollierung (ohne sensible Inhalte): `<…>`
- Backups und Wiederherstellung: `<…>`
- Prüfung/Tests: `<…>`

## 6. Änderungshistorie

| Datum | Änderung | Wer |
|---|---|---|
| `<JJJJ-MM-TT>` | Erstentwurf | KI / Betreiber |

---
*Abgleich:* Jede Zeile hier ↔ Abschnitt in der Datenschutzerklärung (`templates/datenschutzerklaerung-geruest.md`) ↔ Zeile im Löschkonzept (`templates/loeschkonzept.md`). Nicht übereinstimmende Zeilen sind Befunde.
