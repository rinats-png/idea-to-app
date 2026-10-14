# Phase 14 – Sicherheitsarchitektur

> Kurz: Wir legen fest, wie die App gegen die häufigsten Angriffe geschützt wird – bevor eine Zeile Code entsteht.

| | |
|---|---|
| **Ziel** | Verbindliches Sicherheitskonzept passend zur Risikostufe, mit projektspezifischen Werten |
| **Ergebnis** | `projekte/<slug>/14-sicherheit.md` |
| **Visual** | Bedrohungsmodell-Tabelle + Datenfluss mit Vertrauensgrenzen |
| **Dauer** | ca. 20–40 Minuten |
| **Überspringen** | **nie** (Umfang richtet sich nach der Risikostufe) |
| **Referenz** | `security/README.md`, `security/regeln-fuer-ki.md`, **`security/standardwerte.md`**, `security/bedrohungsmodell.md` |
| **Zweitprüfung** | Stufe 3 Pflicht, Stufe 2 empfohlen (`AGENTS.md` Abschnitt 14) |

## Für Einsteiger erklärt

Die meisten Sicherheitsprobleme in Apps sind keine raffinierten Hacks, sondern **vergessene Grundregeln**: ein geheimer Schlüssel im Code, eine fehlende Berechtigungsprüfung, unbegrenzte Login-Versuche. KI-Coding-Tools vergessen diese Regeln besonders gern, wenn man sie nicht ausdrücklich verlangt. In dieser Phase legen wir sie fest – und in Phase 22 werden sie dem Coding-Tool als **nicht verhandelbare Regeln** mitgegeben.

**Du musst dafür kein Sicherheitsexperte sein.** Ich schlage für alles sinnvolle Standards vor und erkläre sie. Du entscheidest nur dort, wo es echte Wahlmöglichkeiten gibt.

## Ablauf für die KI

1. Lies `security/README.md`, `security/regeln-fuer-ki.md`, `security/standardwerte.md` und `security/bedrohungsmodell.md`.
2. Bestimme die Abschnitte nach Risikostufe und Überspring-Logik (Tabelle unten).
3. Erstelle zuerst gemeinsam das **Bedrohungsmodell** (Q1–Q3) mit IDs `BD-01 …`.
4. Gehe die Abschnitte A–K durch. **Übernimm die Werte aus `security/standardwerte.md`** in `14-sicherheit.md` und passe sie nur mit Begründung an. Stelle nur die markierten Fragen; erkläre jeden Standard in einem Satz („Warum?“). **Schreibe keine Zahlen aus `standardwerte.md` in diese Phasen-Datei oder andere Dokumente außer `14-sicherheit.md`.**
5. Schreibe das Sicherheitskonzept und die Testfälle (`T-SEC-…`, je mit Bezug zu `BD-…`).
6. **Zweitprüfung** nach `AGENTS.md` Abschnitt 14 (Stufe 3 Pflicht). Befunde einarbeiten, dann Gate.
7. **Nur Stufe 3:** Sage dem Nutzer jetzt offen, dass eine zweite KI keine unabhängige Fachprüfung ersetzt und dass für den Launch eine **externe Fachprüfung oder ein bewusst akzeptiertes Risiko** (`E-…`) nötig ist (Abschnitt K). Frage nach Budget, Zeitpunkt und möglichen Prüfern, damit das kein Überraschungsfund kurz vor dem Start wird.

| Abschnitt | Stufe 1 | Stufe 2 | Stufe 3 |
|---|---|---|---|
| Bedrohungsmodell | kurz (≥ 3 BD) | normal (≥ 5 BD) | ausführlich (≥ 8 BD) |
| A Passwörter & Login | – (keine Konten) | ✅ | ✅ + 2FA laut `standardwerte.md` |
| B Sitzungen | – | ✅ | ✅ kürzere Laufzeiten |
| C Zugriffskontrolle | Admin-Bereich | ✅ | ✅ + Audit-Log |
| D Secrets & Schlüssel | ✅ | ✅ | ✅ + Rotationsplan |
| E Missbrauchsschutz | ✅ | ✅ | ✅ + Alarmierung |
| F Eingaben & Ausgaben | ✅ | ✅ | ✅ |
| G Transport & Browser | ✅ | ✅ | ✅ strenge CSP |
| H Daten | Basis | ✅ | ✅ + Feldverschlüsselung prüfen |
| I Zahlung, Webhooks, Mobile, KI | wenn zutreffend | wenn zutreffend | wenn zutreffend |
| J Lieferkette, Logging, Fehler | ✅ | ✅ | ✅ |
| K Verifikation | Checkliste | ASVS Level 1 | ASVS Level 2 + externe Prüfung |

## Fragen

**Q1 – Was ist in deiner App am wertvollsten oder am peinlichsten, wenn es in falsche Hände gerät?** (Vorschläge aus Phase 11: z. B. „Gesundheitsnotizen“, „E-Mail-Liste“, „Zahlungen“, „Admin-Zugang“.)

**Q2 – Wer könnte ein Interesse haben, die App anzugreifen oder zu missbrauchen?** (Vorschläge: automatisierte Bots, neugierige Nutzer, Ex-Partner/Bekannte eines Nutzers, Spammer, Konkurrenz, Insider mit Admin-Rechten.)

**Q3 – Was wäre das Schlimmste, das passieren könnte?** (Datenleck, Kontoübernahme, hohe Rechnung durch Missbrauch teurer Dienste, App wird für Spam genutzt, Ausfall.)

**Q4 (Stufe 2–3) – Login-Methode:**
- a) **Erprobter Login-Anbieter** (z. B. Supabase Auth, Firebase Auth, Auth.js, Clerk) **(Empfehlung – eigene Login-Systeme sind die häufigste Fehlerquelle)**
- b) Zusätzlich / nur „Login mit Google / Apple“
- c) Magic Link (Login per E-Mail-Link, kein Passwort)
- d) Eigenes Passwort-System (nur mit Begründung; dann gelten alle Regeln aus A ausdrücklich)

**Q5 (Stufe 2–3) – Zwei-Faktor-Anmeldung (2FA) für normale Nutzer?**
- a) Optional anbieten **(Empfehlung Stufe 2)**
- b) Pflicht **(Empfehlung Stufe 3)**
- c) Nicht im MVP (wird als Risiko `E-…` dokumentiert; für Admins trotzdem Pflicht)

**Q6 – Was soll passieren, wenn jemand sehr oft falsche Passwörter eingibt?** Erkläre die Optionen und empfiehl **steigende Wartezeit + vorübergehende Sperre + CAPTCHA** statt dauerhafter Kontosperre (Begründung in E).

**Q7 (Stufe 2–3) – Was soll die App antworten, wenn jemand auf fremde Daten zugreifen will?**
- a) **So tun, als gäbe es sie nicht (404)** – verrät nicht, dass es den Datensatz gibt **(Empfehlung für private Nutzerdaten)**
- b) **„Kein Zugriff“ (403)** – sinnvoll, wo der Nutzer ohnehin weiß, dass es die Seite gibt (z. B. Admin-Bereich, entzogene Freigabe)
- c) Je nach Bereich (KI schlägt eine Zuordnung vor)

> Für Einsteiger erklären: Beides ist sicher, solange **keine Daten** mitgeschickt werden. 404 verrät zusätzlich nicht, ob etwas existiert.

Alle weiteren Punkte setzt die KI als Standard und fragt nur bei echten Zielkonflikten nach.

---

## A. Passwörter & Login (bei Nutzerkonten)

| Regel | Warum |
|---|---|
| Erprobten Login-Anbieter nutzen; falls eigenes Passwortsystem: Passwort-Hashing-Verfahren mit Parametern aus `standardwerte.md` §2 | Gestohlene Hashes lassen sich dann kaum zurückrechnen; Eigenbau ist fehleranfällig |
| Keine eigene Kryptografie | Selbstgebautes ist fast immer fehlerhaft |
| Passwortregeln nach `standardwerte.md` §2: Länge statt Sonderzeichen-Pflicht, Prüfung gegen geleakte Passwörter, kein Zwangswechsel | Länge schützt mehr als Komplexität; Pflichtregeln führen zu „Passwort1!“ |
| Passwort-Manager unterstützen (Einfügen erlaubt, `autocomplete`-Attribute) | Fördert starke Passwörter |
| E-Mail-Bestätigung vor sensiblen Aktionen | Verhindert Konten auf fremde Adressen |
| Passwort-Reset mit Einmal-Token, Laufzeit nach `standardwerte.md` §3, danach alle Sitzungen beenden | Reset-Links sind ein beliebter Angriffsweg |
| **Keine Nutzer-Enumeration:** Login, Registrierung und Reset antworten gleich, egal ob die E-Mail existiert | Sonst lässt sich prüfen, wer Kunde ist |
| 2FA nach `standardwerte.md` §5 (Admins immer) | Schützt bei gestohlenem Passwort |
| E-Mail-/Passwortänderung erfordert erneute Anmeldung; Benachrichtigung an die alte E-Mail | Erschwert Kontoübernahme |

## B. Sitzungen

- Cookies `HttpOnly`, `Secure`, `SameSite`; neue Sitzungs-ID nach dem Login (gegen Session Fixation).
- Abmelden beendet die Sitzung **serverseitig**; „Überall abmelden“ anbieten.
- Laufzeiten und erneute Anmeldung für sensible Aktionen nach `standardwerte.md` §4.
- Tokens nicht im `localStorage` ablegen, wenn eine Cookie-Lösung möglich ist. Sieht der Login-Anbieter es anders vor: dessen Empfehlung folgen und XSS-Schutz (F, G) besonders ernst nehmen.

## C. Zugriffskontrolle (gegen „ID in der URL ändern“)

Aus Phase 12 übernehmen und technisch festschreiben:
- **Jede** Anfrage auf Daten prüft **serverseitig**, ob der angemeldete Nutzer sie lesen/ändern darf. Die ID aus URL oder Formular ist nur ein Wunsch.
- **Deny by default.**
- Abfragen immer mit Besitzfilter, z. B. `WHERE id = :id AND owner_id = :aktueller_nutzer`.
- **Zweite Schutzebene in der Datenbank**: Row Level Security bzw. Security Rules (Beispiele: `security/stack-hinweise.md`).
- **Mass Assignment verhindern**: Nur erlaubte Felder aus der Anfrage übernehmen. `id`, `owner_id`, `role`, `is_admin`, `plan`, `price`, `created_at` setzt nur der Server.
- Kein Zugriff → Antwort gemäß **Zugriffs-Antwortstrategie** (Q7, `standardwerte.md` §1) – nie mit Daten.
- UUIDs statt fortlaufender IDs (zusätzlich – kein Ersatz für die Prüfung).
- Dateien nur über **kurzlebige, signierte URLs** nach Berechtigungsprüfung.
- Admin-Aktionen mit **Audit-Log** (Stufe 3 Pflicht).

## D. Secrets & API-Schlüssel

- **Geheime Schlüssel niemals im Frontend, in der App oder im Repository.** Apps und Webseiten lassen sich auslesen.
- Unterscheiden:
  - **Öffentliche Schlüssel** (dafür gebaut, im Browser zu stehen: z. B. Supabase Publishable/Anon Key, Stripe Publishable Key, Karten-Schlüssel mit Domain-Beschränkung) → erlaubt, **aber nur sicher, wenn die Absicherung serverseitig steht** (RLS, Domain-Beschränkung, Limits).
  - **Geheime Schlüssel** (Supabase Service-Role/Secret Key, Stripe Secret Key, KI-API-Schlüssel, SMTP-Passwörter, Datenbank-Passwörter) → nur auf dem Server bzw. in Edge Functions.
- Aufrufe kostenpflichtiger APIs (KI, SMS, E-Mail) **über das eigene Backend** – mit Login-Prüfung und Limits.
- `.env` in `.gitignore`; `.env.example` ohne echte Werte ins Repository.
- Secret-Scanning (GitHub Secret Scanning / Push Protection oder `gitleaks`).
- Eigene Schlüssel pro Umgebung; Plan für den Leak-Fall (widerrufen und neu erzeugen).

## E. Missbrauchsschutz (Brute Force, Bots, Kosten)

- Rate Limits **pro Konto und pro IP** für Login, Registrierung, Reset, E-Mail-Versand, teure Endpunkte und die allgemeine API – Ausgangswerte: `standardwerte.md` §6. In `14-sicherheit.md` als Tabelle pro Endpunkt festhalten.
- **Teure Endpunkte** (KI, SMS, Export): Tageslimit pro Nutzer aus der Kostenrechnung (Phase 17) **und** Budget-Obergrenze beim Anbieter.
- Größenlimits für Anfragen, Uploads, Listen: `standardwerte.md` §7.
- Benachrichtigung bei Login von neuem Gerät / nach vielen Fehlversuchen.

**Warum keine dauerhafte Kontosperre?** Wird ein Konto nach X Fehlversuchen dauerhaft gesperrt, kann ein Angreifer gezielt fremde Konten lahmlegen, indem er absichtlich falsche Passwörter eingibt. Steigende Wartezeiten und vorübergehende Sperren bremsen Angreifer genauso, ohne echte Nutzer auszusperren.

Umsetzung: Eingebaute Limits des Login-Anbieters prüfen und dokumentieren; zusätzlich Limits im eigenen Backend bzw. über die Hosting-Plattform (Firewall/WAF). Zähler serverseitig, nie im Browser.

## F. Eingaben & Ausgaben

- **Validierung immer serverseitig** mit Schema (z. B. `zod`); Frontend-Validierung nur für Komfort.
- Datenbankzugriffe nur **parametrisiert** bzw. über ORM/Query-Builder (gegen SQL-Injection).
- **Ausgaben escapen** (gegen XSS). Kein `innerHTML` / `dangerouslySetInnerHTML` mit Nutzerinhalten; falls Rich-Text nötig: mit `DOMPurify` o. ä. bereinigen.
- **CSRF-Schutz** bei cookie-basierten Sitzungen.
- **Datei-Uploads**: Typ anhand des Inhalts prüfen, Größenlimit, zufälliger Dateiname, privat speichern, nie ausführbar; Bilder neu kodieren (entfernt Metadaten wie GPS).
- **SSRF**: Ruft die App fremde URLs ab → Allowlist, keine internen Adressen.
- **Weiterleitungen** nur auf eigene Ziele.

## G. Transport & Browser

- Nur **HTTPS**, HSTS, Security-Header und CORS nach `standardwerte.md` §8 – CSP an die tatsächlich genutzten Dienste anpassen.

## H. Daten

- Verschlüsselung bei Übertragung (HTTPS) und Speicherung (beim Anbieter aktiv – prüfen).
- Stufe 3: prüfen, ob besonders sensible Felder zusätzlich verschlüsselt werden müssen.
- **Datensparsamkeit** (Phase 11).
- Keine sensiblen Daten in **URLs, Logs, Fehlermeldungen, Analytics, Push-Texten**.
- Backups verschlüsselt, Wiederherstellung getestet (Phase 20, `standardwerte.md` §10).
- Lokale Daten auf dem Gerät: Native → Keychain/Keystore für Tokens; Web → keine sensiblen Daten unverschlüsselt im `localStorage`.

## I. Zahlung, Webhooks, Mobile, KI-Funktionen (wenn zutreffend)

- **Zahlung**: Preis, Produkt und Freischaltung bestimmt **der Server**. Freischaltung erst nach bestätigtem Zahlungseingang (Webhook / serverseitige Kaufbestätigung). Keine Kartendaten selbst speichern.
- **Webhooks**: Signatur und Zeitstempel prüfen, idempotent verarbeiten.
- **Mobile Apps**: keine Geheimnisse im App-Paket; Tokens im Keychain/Keystore; Deep Links validieren; nur nötige Berechtigungen anfragen.
- **KI-Funktionen in der App**:
  - Mit **Prompt-Injection** rechnen: Nutzereingaben und eingelesene Dokumente können Anweisungen enthalten.
  - KI-Ausgaben nie ungeprüft als Befehl, SQL, HTML oder Berechtigungsentscheidung verwenden.
  - Der KI nur Daten geben, die der aktuelle Nutzer sehen darf.
  - Kosten- und Anfragelimits pro Nutzer (E).
  - Nutzer informieren, welche Daten an welchen KI-Anbieter gehen (Phase 16).
  - Rechtliche Einordnung der KI-Funktion (EU-KI-Verordnung, Kennzeichnung KI-erzeugter Inhalte) in Phase 16 klären; Überblick in [`guides/recht-eu-ueberblick.md`](../guides/recht-eu-ueberblick.md).

## J. Lieferkette, Logging, Fehlerbehandlung

- Lockfile einchecken; automatische Prüfung (Dependabot, `npm audit`); nur verbreitete, gepflegte Pakete.
- **Paketnamen prüfen** (Regel 9.5): Sprachmodelle erfinden Paketnamen, Angreifer registrieren sie. Neue Pakete nur mit Prüfung von Name, Herausgeber und Pflegestand.
- **CI-Absicherung** (Regel 9.6): Aktionen mit festgelegter Version, minimale Rechte, keine Geheimnisse in Protokollen.
- **Migrationen** (Regel 9.7): Datenbankänderungen nur versioniert und mit Backup; nie von Hand in Produktion.
- Lizenzen der Abhängigkeiten prüfen; bei Stufe 3 eine Software-Stückliste (SBOM) erzeugen. Alles Weitere in [`guides/lieferkette.md`](../guides/lieferkette.md) und [`guides/auslieferung.md`](../guides/auslieferung.md).
- Sicherheitsereignisse protokollieren und Aufbewahrung festlegen (`standardwerte.md` §9) – **ohne** Passwörter, Tokens oder sensible Inhalte.
- Alarm bei Auffälligkeiten (Stufe 3 Pflicht, Stufe 2 empfohlen).
- Fehlermeldungen für Nutzer allgemein; Details nur im Server-Log.

## K. Verifikation

- Abschluss-Prüfung vor dem Launch mit `security/checkliste.md` (mit Nachweisen).
- Stufe 2: Orientierung an **OWASP ASVS Level 1**; Stufe 3: **Level 2**.
- Automatisierte Sicherheitstests (Phase 19, Vorlagen in `security/sicherheitstests.md`).
- Zweitprüfung (siehe Kopf dieser Phase).
- **Stufe 3: externe Fachprüfung (Penetrationstest oder Code-Review durch eine Fachperson) vor dem Launch für andere Nutzer – oder ein vom Nutzer bewusst akzeptiertes, begründetes Risiko (`E-…`, Stichwort „extern“).** Eine zweite KI ist keine unabhängige Prüfung im vollen Sinn: Sie teilt typische blinde Flecken mit der ersten. Das Prüfskript (`--launch`) meldet Stufe-3-Projekte ohne eines von beidem als „Nicht freigabefähig“.
- Ehrlicher Hinweis: **Dieses Konzept macht die App nicht automatisch sicher.** Es sorgt dafür, dass die richtigen Regeln gelten und geprüft werden.

---

## Missbrauchs- und Sicherheitscheck

Diese Phase ist selbst der Sicherheitscheck. Zusätzlich prüfst du am Ende:
- Ist jede Funktion mit 🔒-Markierung aus Phase 5 (teilt, lädt hoch, versendet, kostet) im Bedrohungsmodell als `BD-…` berücksichtigt?
- Ist jeder Missbrauchsfall aus den Flows (Phase 6) einer Gegenmaßnahme zugeordnet?
- Hat jede Rolle mit Zugriff auf fremde Daten (Phase 12) eine Begründung und – ab Stufe 3 – ein Audit-Log?

## Ergebnis-Dokument `14-sicherheit.md`

```markdown
# Sicherheitskonzept

Risikostufe: … | Zielstandard: Checkliste / ASVS L1 / ASVS L2

## Bedrohungsmodell
| ID | Was ist wertvoll? | Wer greift an? | Wie? (STRIDE) | Folge | Wahrscheinlichkeit | Gegenmaßnahme | Abschnitt | Test / akzeptiert |
|---|---|---|---|---|---|---|---|---|
| BD-01 | Private Einträge | Neugieriger Nutzer | ID in URL ändern (I) | Datenleck | hoch | Besitzprüfung + RLS | C | T-SEC-01, T-SEC-02 |

## Projektwerte (aus security/standardwerte.md übernommen bzw. angepasst)
| Punkt | Wert | Abweichung vom Standard? Begründung |
|---|---|---|
| Zugriffs-Antwortstrategie | 404 für Nutzerdaten, 403 für Admin-Bereich | – |
| Login | Anbieter: … | – |
| Passwort-Hashing / Mindestlänge | … | – |
| Reset-Link-Laufzeit | … | – |
| Sitzungen | … | – |
| 2FA | … | – |

## Rate Limits
| Endpunkt | Pro Konto | Pro IP | Reaktion |
|---|---|---|---|

## Schlüssel
| Name der Umgebungsvariable | Öffentlich / geheim | Wo gespeichert | Wer nutzt ihn |
|---|---|---|---|

## Festlegungen A–K
…

## Bewusst akzeptierte Risiken
| ID | Bezug | Risiko | Warum akzeptiert | Neu bewerten bis |
|---|---|---|---|---|

## Pflicht-Sicherheitstests (für Phase 19)
| Test | Sichert ab | Erwartung |
|---|---|---|
| T-SEC-01 | BD-01 | Zugriff verweigert gemäß Strategie, keine Daten |

## Zweitprüfung
Bericht: pruefungen/zweitpruefung-14-JJJJ-MM-TT.md · Status der Befunde: …

## Externe Fachprüfung (nur Stufe 3)
Geplant: Prüfer / Zeitpunkt / Umfang … · Bericht: pruefungen/externe-pruefung-JJJJ-MM-TT.md
Oder bewusst akzeptiert: E-… (Begründung, Datum)
```

## Definition of Done
- [ ] Bedrohungsmodell mit IDs; Mindestanzahl je Stufe erreicht
- [ ] Jede `BD` hat Gegenmaßnahme **und** `T-SEC` oder akzeptiertes Risiko `E-…`
- [ ] Projektwerte aus `standardwerte.md` übernommen (Abweichungen begründet)
- [ ] Zugriffs-Antwortstrategie festgelegt
- [ ] Liste aller Schlüssel mit Einstufung öffentlich/geheim
- [ ] Rate-Limits pro sensiblem Endpunkt
- [ ] Akzeptierte Risiken dokumentiert (inkl. abgelehnter Empfehlungen)
- [ ] Zweitprüfung durchgeführt und Befunde bearbeitet (wenn Pflicht/empfohlen)
- [ ] Stufe 3: Nutzer weiß, dass für den Launch externe Fachprüfung oder akzeptiertes Risiko nötig ist; Plan dafür steht im Ergebnis-Dokument

→ **Gate**
