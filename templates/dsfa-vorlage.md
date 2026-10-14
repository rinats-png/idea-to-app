# Datenschutz-Folgenabschätzung (DSFA): <App-Name> / <Verarbeitung>

> **Wofür:** Teil A prüft in wenigen Minuten, ob eine **DSFA** nötig ist (Schwellwertprüfung, Art. 35 DSGVO). Teil B führt die DSFA durch, falls ja. **Wann:** Teil A in Phase 16 bei **Risikostufe 3** oder bei Daten wie Gesundheit, Kinder, Standortverläufe, Biometrie, Behörden-/Sicherheitsbezug; Teil B **vor Beginn der Verarbeitung**, also vor dem Launch (Phase 23), und bei wesentlichen Änderungen. **Wer füllt aus:** die KI bereitet vor, der Betreiber (Verantwortliche) entscheidet; Datenschutzbeauftragte(r) bzw. Fachperson beraten und prüfen.

> ⚠️ **Keine Rechtsberatung.** Die DSFA verantwortet der Betreiber. Ob eine Verarbeitung auf der **Muss-Liste** der zuständigen Datenschutzaufsicht steht, ist **[PRÜFEN]** (Listen der Aufsichtsbehörden nach Art. 35 Abs. 4 DSGVO; für nichtöffentliche Stellen in Deutschland die Liste der Datenschutzkonferenz bzw. der Landesbehörde). Bei Risikostufe 3: Fachperson hinzuziehen. Hintergrund: `guides/recht-eu-ueberblick.md` (Abschnitt 3, Art. 35).

*Einsteiger-Erklärung: Eine DSFA ist eine strukturierte „Gefahrenprüfung für Menschen“, nicht für die IT. Gefragt wird nicht „Wird meine App gehackt?“, sondern „Was kann den Menschen, deren Daten ich verarbeite, passieren – und wie verhindere ich das?“*

---

## Teil A – Schwellwertprüfung

### A1. Beschreibung in drei Sätzen

- Was wird verarbeitet? `<…>`
- Von wem / bei wem? `<Nutzergruppe, Anzahl ungefähr>`
- Wozu? `<…>`

### A2. Fälle, in denen eine DSFA laut Gesetz erforderlich ist (Art. 35 Abs. 3 DSGVO)

| Nr. | Fall | Trifft zu? (ja/nein/unklar) | Begründung |
|---|---|---|---|
| 1 | **Systematische und umfassende Bewertung persönlicher Aspekte** natürlicher Personen auf Grundlage automatisierter Verarbeitung (z. B. Profiling), auf der Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung beruhen | `<…>` | `<…>` |
| 2 | **Umfangreiche Verarbeitung besonderer Kategorien** (Art. 9, z. B. Gesundheit) oder strafrechtlicher Daten (Art. 10) | `<…>` | `<…>` |
| 3 | **Systematische umfangreiche Überwachung öffentlich zugänglicher Bereiche** | `<…>` | `<…>` |

### A3. Weitere Kriterien (Risikoindikatoren)

*Je mehr zutreffen, desto wahrscheinlicher ist eine DSFA nötig. Die europäischen Datenschutzaufsichtsbehörden nennen neun Kriterien und halten bei **zwei oder mehr** zutreffenden Kriterien eine DSFA in der Regel für erforderlich (Leitlinien WP 248 rev.01 `[PRÜFEN: Fassung/Quelle in QUELLEN.md eintragen]`).*

| Nr. | Kriterium | Trifft zu? | Anmerkung |
|---|---|---|---|
| 1 | Bewertung oder Scoring (inkl. Profiling und Vorhersage) | `<…>` | |
| 2 | Automatisierte Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung | `<…>` | |
| 3 | Systematische Überwachung | `<…>` | |
| 4 | Sensible Daten oder höchstpersönliche Daten (Gesundheit, Standort, Finanzen, Kommunikation) | `<…>` | |
| 5 | Datenverarbeitung in großem Umfang | `<…>` | |
| 6 | Abgleichen oder Zusammenführen von Datensätzen | `<…>` | |
| 7 | Daten zu **schutzbedürftigen Betroffenen** (Kinder, Beschäftigte, Patienten, Menschen in Abhängigkeitsverhältnissen) | `<…>` | |
| 8 | **Innovative Nutzung oder neue Technologien** (z. B. KI-Systeme) | `<…>` | |
| 9 | Verarbeitung hindert Betroffene an der Ausübung von Rechten oder der Nutzung einer Leistung | `<…>` | |

### A4. Weitere Prüfpunkte

- [ ] Steht die Verarbeitung auf der **Muss-Liste** der zuständigen Aufsichtsbehörde? `<ja/nein/geprüft am …>` `[PRÜFEN]`
- [ ] Gibt es eine DSFA des Anbieters oder der Branche, die genutzt werden kann (z. B. für den Dienst eines Dienstleisters)? `<…>`
- [ ] Gilt eine **Ausnahme** (die Verarbeitung ist auf der **Positivliste** der Aufsicht als DSFA-frei geführt)? `<…>`

### A5. Ergebnis der Schwellwertprüfung

| Ergebnis | Begründung (1–3 Sätze) | Entschieden von / am |
|---|---|---|
| ☐ DSFA **erforderlich** → weiter mit Teil B | `<…>` | `<Name, Datum>` |
| ☐ DSFA **nicht erforderlich** (Begründung schriftlich festhalten, Prüfung bei Änderungen wiederholen) | `<…>` | `<Name, Datum>` |
| ☐ **Unklar** → Fachperson / Aufsichtsbehörde fragen (vor Launch klären) | `<…>` | `<Name, Datum>` |

*Eintrag in `ENTSCHEIDUNGEN.md` (E-…). Auch eine „Nein“-Entscheidung wird begründet und datiert.*

---

## Teil B – Durchführung der DSFA

*Nur ausfüllen, wenn Teil A „erforderlich“ ergibt. Die Mindestinhalte folgen Art. 35 Abs. 7 DSGVO.*

### B1. Systematische Beschreibung der Verarbeitung

| Frage | Antwort |
|---|---|
| Zwecke | `<…>` |
| Art, Umfang, Umstände der Verarbeitung | `<Daten, Anzahl Betroffener, Dauer, Häufigkeit>` |
| Datenarten und Datenklassen (Phase 11) | `<…>` |
| Betroffene Personengruppen (auch schutzbedürftige) | `<…>` |
| Datenfluss | `<Mermaid-Diagramm oder Tabelle: Quelle → Verarbeitung → Speicherort → Empfänger>` |
| Beteiligte (Auftragsverarbeiter, Drittländer) | `<Verweis auf templates/auftragsverarbeiter-liste.md>` |
| Eingesetzte Technik (inkl. KI) | `<Verweis Phase 13/15>` |
| Berechtigte Interessen des Verantwortlichen (falls Rechtsgrundlage) | `<…>` |

### B2. Notwendigkeit und Verhältnismäßigkeit

| Frage | Antwort |
|---|---|
| Rechtsgrundlage je Zweck (Art. 6, ggf. Art. 9) | `<…>` |
| Ist jede Datenart nötig? Was wurde weggelassen? (Datensparsamkeit) | `<…>` |
| Gäbe es eine mildere Alternative (lokal statt Server, anonymisieren, weniger Daten)? Warum nicht gewählt? | `<…>` |
| Speicherbegrenzung | `<Verweis templates/loeschkonzept.md>` |
| Information der Betroffenen | `<Verweis templates/datenschutzerklaerung-geruest.md>` |
| Wahrnehmung der Betroffenenrechte (Auskunft, Löschung, Export, Widerspruch) | `<…>` |
| Auftragsverarbeiter und Drittlandübertragungen | `<…>` |

### B3. Risikobewertung für die Rechte und Freiheiten der Betroffenen

*Perspektive der Betroffenen. Bewertung: Eintrittswahrscheinlichkeit (gering/mittel/hoch) × Schwere (gering/mittel/hoch) → Risiko. Quelle der Gefahr nennen (Hack, Fehlbedienung, Missbrauch durch Mitarbeiter, Fehler der KI, Datenpanne beim Dienstleister, Behördenzugriff).*

| Nr. | Risiko für Betroffene (z. B. Diskriminierung, Identitätsdiebstahl, Rufschaden, finanzieller Schaden, Verlust der Vertraulichkeit, Kontrollverlust, falsche Entscheidung) | Quelle/Ursache | Wahrscheinlichkeit | Schwere | Risiko vorher | Maßnahmen (B4) | Restrisiko |
|---|---|---|---|---|---|---|---|
| R-01 | `<…>` | `<…>` | `<…>` | `<…>` | `<…>` | `<M-01, M-02>` | `<…>` |
| R-02 | | | | | | | |

*Verknüpfung: Jede Bedrohung aus dem Bedrohungsmodell (Phase 14, `BD-…`) mit Wirkung auf Betroffene taucht hier als Risiko auf.*

### B4. Geplante Abhilfemaßnahmen

| Nr. | Maßnahme (technisch / organisatorisch / rechtlich) | Mindert Risiko | Zuständig | Frist | Umgesetzt? (Nachweis) |
|---|---|---|---|---|---|
| M-01 | `<z. B. Verschlüsselung, Zugriffskontrolle, Pseudonymisierung, Protokollierung, Schulung, Löschfristen, menschliche Prüfung bei KI-Entscheidungen>` | R-01 | `<…>` | `<…>` | `<Task-ID / Test-ID>` |
| M-02 | | | | | |

*Verknüpfung mit den Pflicht-Ketten (`AGENTS.md` Abschnitt 11): Jede Maßnahme sollte eine `TASK-…` und, wo möglich, einen Test (`TEST-…`/`T-SEC-…`) haben.*

### B5. Restrisiko und Entscheidung

| Frage | Antwort |
|---|---|
| Restrisiko insgesamt | ☐ gering ☐ mittel ☐ hoch |
| Bleibt ein **hohes Restrisiko**, das nicht durch Maßnahmen gesenkt werden kann? | ☐ nein ☐ ja → **vor Beginn der Verarbeitung die Aufsichtsbehörde konsultieren** (Art. 36 DSGVO) `[PRÜFEN]`, oder Verarbeitung ändern/streichen |
| Stellungnahme der/des Datenschutzbeauftragten (falls benannt) | `<…>` |
| Standpunkt der Betroffenen oder ihrer Vertreter eingeholt (falls angemessen) | `<…>` |
| Entscheidung des Verantwortlichen | ☐ Verarbeitung freigegeben ☐ mit Auflagen ☐ nicht freigegeben — `<Name, Datum>` |

### B6. Überprüfung

- Nächste Überprüfung: `<Datum>` (spätestens bei Änderung von Zweck, Datenarten, Dienstleistern, KI-Funktionen oder nach einer Datenpanne).
- Änderungshistorie:

| Datum | Änderung | Wer |
|---|---|---|
| `<JJJJ-MM-TT>` | Erstfassung | `<…>` |

---
*Quellen für rechtliche Aussagen in dieser DSFA gehören in `QUELLEN.md`. Nicht belegte Aussagen bleiben mit `[PRÜFEN]` markiert.*
