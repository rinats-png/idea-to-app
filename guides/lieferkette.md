# Abhängigkeiten und Software-Lieferkette

> Kurz: Fast jede App besteht zum größten Teil aus fremdem Code. Dieser Leitfaden zeigt, wie du diesem fremden Code vertraust – und woran du merkst, wenn du es nicht mehr solltest.

Gehört zu Phase 13 (`phases/13-tech-stack-und-architektur.md`), Phase 14 (`phases/14-sicherheitsarchitektur.md`) und Phase 20 (`phases/20-betrieb.md`). Die verbindlichen Regeln stehen in `security/regeln-fuer-ki.md` (Abschnitt 9 „Abhängigkeiten & Fehler“, Regeln 9.1 und 9.2; außerdem 10.2 und 10.4). **Konkrete Zahlenwerte** (Fristen, Schwellen, Aufbewahrung) stehen ausschließlich in `security/standardwerte.md` – dieser Leitfaden nennt bewusst keine eigenen. Wo ein Wert nötig ist, legst du ihn in Phase 14 bzw. 20 fest und begründest ihn.

---

## 1. Warum das wichtig ist

Eine moderne Web-App verwendet oft Hunderte bis Tausende fremde Pakete – direkt oder als „Abhängigkeiten von Abhängigkeiten“. Man unterscheidet:

- **Direkte Abhängigkeiten:** Pakete, die du (oder dein KI-Tool) bewusst hinzufügst.
- **Transitive (indirekte) Abhängigkeiten:** Pakete, die deine Pakete ihrerseits benötigen. Du siehst sie selten, sie laufen aber mit denselben Rechten in deiner App.

Die **Software-Lieferkette** (Supply Chain) umfasst alles, was zwischen dem Code anderer Menschen und deiner laufenden App liegt: Paketquellen (z. B. npm), die Pakete selbst, deine Werkzeuge, die CI-Pipeline und das Hosting. Jedes Glied kann ein Einfallstor sein. Ein einziges bösartiges oder kompromittiertes Paket kann Passwörter abgreifen, Daten abfließen lassen oder Schadcode ausführen – mit allen Rechten deiner App.

Für Einsteiger mit KI-Coding-Tools kommt ein neuer Punkt hinzu: **Die KI schlägt gern Pakete vor – manchmal solche, die es gar nicht gibt** (Abschnitt 4).

---

## 2. Lockfiles – reproduzierbar statt „irgendeine Version“

Ein **Lockfile** (z. B. `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `poetry.lock`) hält fest, **welche exakte Version** jedes Pakets (inklusive der transitiven) verwendet wird. Ohne Lockfile kann die App morgen mit anderen Versionen gebaut werden als heute – ohne dass du etwas geändert hast.

Regeln:

1. **Lockfile einchecken** (Regel 9.1) und in jeder Änderung mitprüfen. Eine Änderung am Lockfile, die niemand erklären kann, ist verdächtig.
2. **In der CI und beim Deployment aus dem Lockfile installieren**, nicht „frisch auflösen“. Bei npm macht das `npm ci`: Es verlangt ein Lockfile, bricht bei Abweichung von `package.json` ab, löscht ein vorhandenes `node_modules` und verändert weder `package.json` noch das Lockfile `[Q-L01]`. Bei anderen Paketverwaltern gibt es Entsprechungen (Bezeichnung in deren Dokumentation prüfen `[PRÜFEN]`).
3. **Nur eine Paketverwaltung pro Projekt** (nicht gleichzeitig npm und yarn mit zwei Lockfiles).
4. **Updates nur bewusst:** Versionen ändern sich durch einen eigenen, nachvollziehbaren Schritt (Abschnitt 7), nicht nebenbei.
5. **Lockfile-Änderungen in Pull Requests ansehen:** Neue, unbekannte Pakete oder plötzlich geänderte Adressen/Quellen sind ein Warnzeichen.

---

## 3. Auswahlkriterien: Welches Paket darf rein?

Regel 9.1 verlangt: Neue Abhängigkeiten nur mit Begründung; verbreitete, gepflegte Pakete bevorzugen. Praktisch heißt das: Bevor ein Paket hinzugefügt wird, beantwortest du (oder die KI) diese Fragen und hältst die Antworten kurz in `ENTSCHEIDUNGEN.md` oder im Pull Request fest.

| Frage | Worauf du achtest |
|---|---|
| **Brauche ich es wirklich?** | Kann ich das mit wenigen Zeilen eigenem Code oder der Standardbibliothek lösen? Winzige Pakete für Trivialitäten sind ein typisches Risiko. Gleichzeitig gilt: **keine eigene Kryptografie** und keine selbstgebauten Login-Systeme (Regel 3.1) – dafür bewährte Bibliotheken/Anbieter |
| **Gibt es das Paket wirklich – und ist es das richtige?** | Name **exakt** mit der offiziellen Dokumentation des Projekts abgleichen, nicht mit dem Vorschlag der KI (Abschnitt 4) |
| **Wie verbreitet ist es?** | Wird es von vielen Projekten genutzt? Bekannte Projekte, Organisationen oder Stiftungen dahinter? Verbreitung ist kein Beweis, aber ein Indiz |
| **Wird es gepflegt?** | Letzte Veröffentlichung, offene sicherheitsrelevante Meldungen, reagieren die Betreuer? Ein seit Jahren unberührtes Paket ist ein Risiko, wenn es mit Eingaben oder Netzwerk zu tun hat |
| **Wie viele eigene Abhängigkeiten bringt es mit?** | Viele transitive Pakete = große Angriffsfläche. Lieber das schlankere Paket |
| **Welche Lizenz hat es?** | Passt sie zu deinem Vorhaben (Abschnitt 6)? |
| **Welche Rechte nimmt es sich?** | Greift es beim Installieren auf das Netzwerk/Dateisystem zu (Installationsskripte)? Braucht es Zugriff, den es fachlich nicht braucht? |
| **Wer veröffentlicht es?** | Passt Name der Betreuer, Repository und Paket zusammen? Hat sich die Betreuung kürzlich geändert? |
| **Kann ich es wieder loswerden?** | Wie schwer wäre ein Austausch (Lock-in, vgl. Bewertungsmatrix in Phase 13)? |

**Für KI-Tools:** Das Coding-Tool soll beim Hinzufügen neuer Pakete **anhalten und begründen** (Regel 9.1) – und nie ein Paket installieren, nur weil es in einem Codebeispiel auftaucht. Diese Vorgabe gehört in die `AGENTS.md` des App-Repositories (Phase 22 übernimmt die Regeln wörtlich).

---

## 4. Typosquatting, Slopsquatting und von KI erfundene Paketnamen

### Typosquatting
Angreifer veröffentlichen Pakete mit Namen, die einem beliebten Paket zum Verwechseln ähneln (Tippfehler, vertauschte Buchstaben, zusätzliche Bindestriche). Wer sich vertippt oder dem falschen Link folgt, installiert Schadcode.

### Von KI erfundene Paketnamen
Sprachmodelle, die Code schreiben, **erfinden manchmal Paketnamen**, die es nicht gibt (sogenannte Paket-Halluzinationen). Eine Untersuchung mit 16 Modellen und rund 576.000 erzeugten Codebeispielen fand erfundene Paketnamen bei kommerziellen Modellen im Durchschnitt in mindestens 5,2 % und bei Open-Source-Modellen im Durchschnitt in 21,7 % der Fälle; insgesamt entstanden über 200.000 verschiedene erfundene Namen. Die Autoren sehen darin eine Form des Paketverwechslungsangriffs und eine Bedrohung für die Lieferkette `[Q-L02]`. Diese Zahlen beschreiben die damals untersuchten Modelle und Aufgaben – sie sind ein Warnsignal, keine Vorhersage für dein Tool.

Das Gefährliche: Ein Angreifer kann einen **häufig erfundenen Namen selbst registrieren** und Schadcode hineinlegen. Der nächste Entwickler, dem dasselbe Modell denselben Namen vorschlägt, installiert die Falle. Für dieses Vorgehen ist der Begriff **Slopsquatting** gebräuchlich (in der zitierten Studie selbst kommt dieser Begriff nicht vor – dort heißt es Paketverwechslungsangriff `[Q-L02]`).

### Gegenmaßnahmen

1. **Jeden neuen Paketnamen prüfen, bevor er installiert wird:** Existiert er in der Paketquelle? Seit wann? Wer betreut ihn? Passt er zur Projektseite des Herstellers? Ein Paket, das es erst seit Kurzem gibt, kaum Nutzung hat und perfekt zu einer KI-Antwort passt, ist ein Alarmzeichen.
2. **Name aus der offiziellen Dokumentation übernehmen**, nicht aus dem Chat.
3. **Das KI-Tool nach der Quelle fragen:** „Wo steht in der offiziellen Dokumentation, dass dieses Paket so heißt?“ Fehlt der Beleg, nicht installieren.
4. **Installation neuer Pakete ist ein bewusster Schritt** (Pull Request mit sichtbarer Änderung am Lockfile), nicht ein Nebeneffekt.
5. **Installationsskripte kritisch sehen:** Manche Paketverwaltungen führen beim Installieren Skripte der Pakete aus. Wo möglich, nur für notwendige Pakete erlauben (Einstellungen der jeweiligen Paketverwaltung prüfen `[PRÜFEN]`).
6. **Ähnliche Namen vergleichen:** Bei Verdacht den Namen mit dem bekannten Original Zeichen für Zeichen abgleichen.
7. **Interne Paketnamen schützen:** Wenn du eigene, private Pakete nutzt, reserviere die Namen auch in der öffentlichen Quelle oder nutze einen eindeutigen Namensraum (Scope), damit niemand einen öffentlichen Doppelgänger unterschiebt.

---

## 5. Schwachstellen-Scans

Eine **Schwachstelle** ist ein bekannter Fehler in einem Paket, der ausgenutzt werden kann. Sie werden öffentlich in Datenbanken gesammelt; Werkzeuge gleichen deine Abhängigkeiten damit ab.

- **Beim Bauen (CI):** Bei npm fragt `npm audit` bekannte Schwachstellen deiner Abhängigkeiten ab und braucht dafür standardmäßig ein Lockfile. Mit `--audit-level` legst du fest, ab welchem Schweregrad der Befehl fehlschlägt; die Option filtert den Bericht nicht, sie ändert nur die Fehlschlag-Schwelle `[Q-L03]`.
- **Dauerhaft im Repository:** GitHub Dependabot unterscheidet **Version Updates** (halten Pakete aktuell, auch ohne Sicherheitslücke) und **Security Updates** (Pull Requests für Pakete mit bekannten Schwachstellen). Die Version Updates steuerst du mit einer Datei `dependabot.yml` im Repository `[Q-L04]`. Andere Dienste leisten Ähnliches (Funktionsumfang prüfen `[PRÜFEN]`).
- **Regel 9.2:** Bekannte Schwachstellen mit Schweregrad hoch/kritisch müssen vor einem Release behoben oder dokumentiert werden. „Dokumentiert“ heißt: begründetes, befristetes akzeptiertes Risiko in `ENTSCHEIDUNGEN.md` (`E-…`) mit Datum zur Wiedervorlage.

**Grenzen von Scans (ehrlich gesagt):**

- Ein Scan findet nur **bekannte** Schwachstellen. Ein frisch eingeschleustes Schadpaket oder eine unveröffentlichte Lücke findet er nicht.
- Nicht jede Meldung betrifft dich: Eine Lücke in einer Funktion, die du nie aufrufst, ist weniger dringend – aber das beurteilst du begründet, nicht aus Bequemlichkeit.
- Manche Funde lassen sich nicht automatisch beheben und brauchen Handarbeit `[Q-L03]`.
- **Automatische Updates sind kein Freifahrtschein:** Ein Update-Vorschlag kommt als Pull Request, läuft durch die Tests (Regel 10.2) und wird gelesen, nicht blind gemerged.
- Dependabot wartet bei Version Updates standardmäßig eine Zeit nach der Veröffentlichung einer neuen Version ab (Abkühlzeit, „cooldown“); für Security Updates gilt sie nicht `[Q-L04]`. Das schützt ein Stück weit vor frisch veröffentlichten, kompromittierten Versionen – ersetzt aber keine Prüfung. Den aktuellen Standardwert prüfst du in der Dokumentation `[PRÜFEN]`.

Weitere Prüfarten (nach Bedarf): Scanner für Code-Muster (statische Analyse), Scanner für Container-Images (falls du Container nutzt), Secret-Scanner (siehe `guides/auslieferung.md`, Pipeline-Stufe 5).

---

## 6. Lizenzprüfung

Jedes Paket hat eine **Lizenz**: Sie legt fest, was du damit tun darfst. Das ist Recht, keine Technik – und gehört in Phase 16 (`phases/16-recht-und-datenschutz.md`). Dieser Leitfaden gibt dir die Praxis, keine Rechtsberatung. Bei unklaren Fällen oder kommerziellem Vertrieb: Fachperson fragen.

Vorgehen:

1. **Liste der Lizenzen erstellen** (die meisten Paketverwaltungen und SBOM-Werkzeuge können das auslesen).
2. **Grob einteilen:**
   - *Freizügige Lizenzen* (häufig: MIT, BSD, Apache 2.0) – meist unkompliziert; Pflicht ist typischerweise, den Lizenztext/Urhebervermerk beizulegen.
   - *Copyleft-Lizenzen* (z. B. GPL-Familie): Können verlangen, dass dein eigener Code unter ähnlichen Bedingungen offengelegt wird, wenn du die Software weitergibst. Ob und wie das bei einer reinen Web-App greift, ist **Auslegungssache** – hier Fachperson fragen.
   - *Eingeschränkte oder nicht-kommerzielle Lizenzen:* Sperren oft die kommerzielle Nutzung.
   - *Keine Lizenz angegeben:* bedeutet in der Regel **keine** Erlaubnis zur Nutzung – nicht verwenden, bis es geklärt ist.
3. **Lizenzvermerke erfüllen:** Viele Lizenzen verlangen, dass in der App (z. B. unter „Über / Lizenzen“) die Vermerke genannt werden.
4. **Neue Pakete: Lizenz gehört in die Auswahlkriterien** (Abschnitt 3).
5. **Auch bei Schriften, Icons, Bildern, Vorlagen und KI-generierten Inhalten** auf Lizenzen achten, nicht nur bei Code.
6. **Lizenzen bei Updates erneut ansehen:** Projekte ändern ihre Lizenz gelegentlich.

Die Ergebnisse trägst du als Liste in die Rechts-Dokumentation ein (Phase 16). Eine Begriffsübersicht zum EU-Rahmen: [Rechtlicher Überblick](recht-eu-ueberblick.md).

---

## 7. Update-Routine

Wer nie aktualisiert, sammelt bekannte Sicherheitslücken. Wer blind aktualisiert, baut sich neue Fehler ein. Die Routine liegt dazwischen:

| Rhythmus | Aufgabe |
|---|---|
| **Laufend** | Sicherheitsmeldungen (Dependabot, `npm audit`, Hersteller-Hinweise) sichten; kritische Sicherheitsupdates sofort einspielen |
| **Regelmäßig (Takt legst du in Phase 20 fest)** | Aktualisierungs-Pull-Requests bündeln, lesen, testen, mergen |
| **Vor jedem Release** | Schwachstellen-Scan grün oder Risiken dokumentiert (Regel 9.2) |
| **Seltener, aber fest eingeplant** | Große Versionssprünge (Hauptversionen von Frameworks, Laufzeitumgebung) als eigenes kleines Projekt mit Changelog-Lektüre und Tests |
| **Regelmäßig** | Nicht mehr genutzte Pakete entfernen; Pakete ohne Pflege durch Alternativen ersetzen |

**Ablauf bei einem Update:**

1. Update-Branch anlegen (nicht auf `main`).
2. **Änderungsliste („Changelog“) des Pakets lesen**, besonders bei Hauptversionen.
3. Lockfile-Änderung ansehen: Welche Pakete haben sich geändert, kamen neue transitive Pakete hinzu?
4. Alle Tests und Sicherheitstests laufen lassen (Regel 10.2).
5. In der Vorschau kurz prüfen (Anmeldung, Kernfunktion).
6. Release nach `templates/release-checkliste.md`.
7. Eintrag in `CHANGELOG.md`.

**Wenn ein Paket kompromittiert gemeldet wird** (Schadcode in einer Version): Version identifizieren, prüfen, ob du sie je installiert hast (Lockfile-Verlauf, CI-Logs), Geheimnisse, die in diesem Zeitraum für Pipeline oder Server erreichbar waren, als **kompromittiert behandeln** und erneuern, Befund im Ablauf von `templates/incident-plan.md` dokumentieren.

---

## 8. SBOM – Stückliste deiner Software

Eine **SBOM** (Software Bill of Materials, „Software-Stückliste“) ist eine verschachtelte Bestandsliste aller Komponenten, aus denen deine Software besteht. Die US-Behörde CISA beschreibt sie als wichtigen Baustein für Softwaresicherheit und das Management von Risiken in der Lieferkette `[Q-L05]`. Gängige Austauschformate sind **CycloneDX** und **SPDX** (Details und aktuelle Versionen in den jeweiligen Projekten prüfen `[PRÜFEN]`).

**Wofür sie nützlich ist:**

- Wird eine Schwachstelle bekannt, siehst du in Minuten, ob du das betroffene Paket verwendest und in welcher Version.
- Du hast eine Lizenzübersicht (Abschnitt 6).
- Kunden, Auftraggeber oder Behörden fragen gelegentlich danach.

**Wann sie sich lohnt (Empfehlung):**

| Situation | SBOM |
|---|---|
| Privates Projekt, Stufe 1, nur für dich | Nicht nötig; das Lockfile genügt als „Mini-Stückliste“ |
| Öffentliche App, Stufe 2 | Optional, aber hilfreich: einmal pro Release automatisch erzeugen lassen |
| Stufe 3, Behörden-/Sicherheitsbezug, Auftraggeber oder Ausschreibungen, die sie fordern | **Empfohlen**; mit jedem Release erzeugen und aufbewahren |
| Verkauf an Unternehmen / Weitergabe der Software | Sinnvoll; Anforderungen im Vertrag oder der Ausschreibung klären |

Wichtig: Ob und wann für dein Produkt gesetzliche Pflichten rund um Software-Stücklisten oder Sicherheit von Produkten gelten, hängt vom Einzelfall ab. Das prüfst du im Rechts-Überblick und bei Bedarf mit Fachperson, siehe [Rechtlicher Überblick](recht-eu-ueberblick.md). Dieser Leitfaden behauptet dazu nichts.

Eine SBOM ist **kein Sicherheitsbeweis**. Sie sagt, *was* drin ist, nicht, ob es *sicher* ist. Sie wird erst nützlich, wenn sie mit einer Schwachstellen-Datenbank abgeglichen wird (Abschnitt 5).

---

## 9. GitHub Actions und CI absichern

Deine Pipeline (`.github/workflows/…`, vgl. `guides/auslieferung.md`) besitzt Schlüssel zum Hosting und Zugriff auf deinen Code – sie ist ein Hauptziel für Angreifer. Wichtig sind diese Punkte; sie folgen dem Sicherheitsleitfaden von GitHub `[Q-L06]`:

1. **Aktionen fest an eine Version binden.** Fremde Actions (wiederverwendbare Bausteine) am besten an einen **vollständigen Commit-Hash** binden. Das schützt vor nachträglich eingeschleusten Änderungen; Tags können verschoben oder gelöscht werden. Den Hash aus dem Original-Repository der Action nehmen, nicht aus einem Fork `[Q-L06]`.
2. **Nur Actions von vertrauenswürdigen Betreibern.** Wie bei Paketen: Herkunft, Pflege, Verbreitung prüfen (Abschnitt 3). Actions können Geheimnisse lesen, wenn du sie ihnen gibst.
3. **Minimale Rechte für das Zugriffstoken (`GITHUB_TOKEN`).** Standardmäßig nur Lesezugriff auf Inhalte; Rechte nur pro Job erhöhen, wo wirklich nötig `[Q-L06]`.
4. **Geheimnisse sparsam und einzeln.** Nie im Klartext in Workflow-Dateien; keine zusammengepackten JSON/YAML-Blöcke als ein Secret; abgeleitete Werte ebenfalls als Secret führen; für Produktions-Geheimnisse „Environments“ mit Freigabe durch benannte Personen nutzen; regelmäßig rotieren `[Q-L06]`.
5. **Vorsicht bei Pull Requests von Fremden.** Der Auslöser `pull_request_target` meiden, wenn er nicht zwingend nötig ist; mit solchen Auslösern **niemals** Code aus fremden Pull Requests auschecken und ausführen, das kann zur Übernahme des Repositories führen `[Q-L06]`. Für getrennte Rechte ist `workflow_run` die bessere Wahl `[Q-L06]`.
6. **Nutzereingaben in Workflows sind unvertraut.** Titel, Branchnamen und Kommentare von Pull Requests nicht ungeprüft in Befehle einsetzen (Befehlseinschleusung).
7. **Zugang zum Repository absichern:** 2FA für alle Mitwirkenden, `main` geschützt, nur nötige Schreibrechte (Phase 20, Zugänge).
8. **Pipeline-Änderungen wie Code prüfen:** Eine Änderung an `.github/workflows/` ist eine sicherheitsrelevante Änderung und gehört in den Review.
9. **Secret-Scanning einschalten** (Push Protection blockiert Pushes mit erkannten Geheimnissen; Verfügbarkeit je nach Plan und Repository-Art prüfen) `[Q-L07]` `[PRÜFEN]`.
10. **Protokolle prüfen:** Taucht ein Geheimnis ungeschwärzt in einem Log auf, Log löschen und Geheimnis erneuern `[Q-L06]`.

Diese Schutzmaßnahmen sind kein Ersatz für die Regeln 1.1 bis 1.4 (Geheimnisse) und 10.4 (keine Regel „vorübergehend“ abschalten), sondern deren Umsetzung in der Pipeline.

---

## 10. Was du in Phase 14 und 20 festhalten solltest

- Wie Pakete ausgewählt werden (Kriterien aus Abschnitt 3) und wer neue Pakete freigibt.
- Lockfile-Pflicht und Installationsweise in der CI.
- Welche Schwachstellen-Scans laufen, ab welchem Schweregrad ein Release gestoppt wird (Wert festlegen, Ausgangspunkt `security/standardwerte.md`; Regel 9.2).
- Update-Takt und wer ihn durchführt (`phases/24-iteration-und-wartung.md`, Wartungsroutine).
- Ob eine SBOM erzeugt wird und wo sie liegt.
- Lizenzliste und Ablageort (Phase 16).
- Absicherung der Pipeline nach Abschnitt 9.

---

## Quellen

Alle Belege wurden am 2026-10-14 abgerufen. `Q-L…` sind Verweise in diesem Leitfaden; für ein Projekt übernimmst du genutzte Belege in `QUELLEN.md`.

| ID | Aussage | URL | Art | Prüfdatum |
|---|---|---|---|---|
| Q-L01 | `npm ci` verlangt Lockfile, bricht bei Abweichung ab, löscht `node_modules`, schreibt weder `package.json` noch Lockfile | https://docs.npmjs.com/cli/v10/commands/npm-ci | Primärquelle (Herstellerdoku) | 2026-10-14 |
| Q-L02 | Studie „We Have a Package for You!“ (Spracklen u. a.): erfundene Paketnamen durch Code-Modelle, Mittelwerte mindestens 5,2 % (kommerziell) bzw. 21,7 % (Open Source), 205.474 verschiedene erfundene Namen bei 576.000 Codebeispielen und 16 Modellen; Einordnung als Paketverwechslungsangriff und Lieferkettenbedrohung; Begriff „Slopsquatting“ kommt in der Studie nicht vor | https://arxiv.org/abs/2406.10279 | Studie (Vorabdruck, arXiv) | 2026-10-14 |
| Q-L03 | `npm audit` meldet bekannte Schwachstellen; `--audit-level` setzt nur die Fehlschlag-Schwelle; manche Funde nicht automatisch behebbar; Lockfile standardmäßig nötig | https://docs.npmjs.com/cli/v10/commands/npm-audit | Primärquelle | 2026-10-14 |
| Q-L04 | Dependabot: Version Updates vs. Security Updates, Steuerung per `dependabot.yml`, Standard-Abkühlzeit für Version Updates, gilt nicht für Security Updates | https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates | Primärquelle | 2026-10-14 |
| Q-L05 | SBOM ist eine verschachtelte Bestandsliste der Bestandteile von Software und gilt als Baustein für Softwaresicherheit und Lieferketten-Risikomanagement | https://www.cisa.gov/sbom | Primärquelle (Behörde, USA) | 2026-10-14 |
| Q-L06 | GitHub-Sicherheitsleitfaden für Actions: Pinning auf Commit-SHA, Least Privilege für Token und Secrets, einzelne Secrets, Rotation, Required Reviewers, `pull_request_target` meiden, kein Checkout fremden PR-Codes damit, `workflow_run` zur Rechtetrennung | https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions | Primärquelle | 2026-10-14 |
| Q-L07 | Secret-Scanning „Push Protection“ blockiert Pushes mit erkannten Geheimnissen; Repository-Variante setzt GitHub Secret Protection voraus, standardmäßig aus | https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection | Primärquelle | 2026-10-14 |

Offene Prüfpunkte `[PRÜFEN]`: Entsprechungen von `npm ci` in anderen Paketverwaltungen; Einstellung zum Sperren von Installationsskripten je Paketverwaltung; aktueller Standardwert der Dependabot-Abkühlzeit; aktuelle SBOM-Formatversionen (CycloneDX, SPDX); Verfügbarkeit von Secret Scanning je GitHub-Plan.
