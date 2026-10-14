// Tests für scripts/pruefe-projekt.mjs
// Ausführen: node --test scripts/

import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pruefeProjekt, formatiere, nachweisPruefbar } from "./pruefe-projekt.mjs";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const REGELN = fs.readFileSync(path.join(REPO, "security", "regeln-fuer-ki.md"), "utf8");
const REGELN_AB_GRUNDSATZ = REGELN.slice(REGELN.indexOf("## Grundsatz"));

function schreibe(basis, dateien) {
  for (const [rel, inhalt] of Object.entries(dateien)) {
    const ziel = path.join(basis, rel);
    fs.mkdirSync(path.dirname(ziel), { recursive: true });
    fs.writeFileSync(ziel, inhalt, "utf8");
  }
}

/** Ein vollständiges, in sich stimmiges Beispielprojekt (Risikostufe 2, Lite-ähnlich). */
function beispielProjekt(aenderungen = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "idea-to-app-test-"));
  const dateien = {
    "PROJECT_STATE.md": `# Projektstatus: Testapp

| Feld | Wert |
|---|---|
| Einstieg | Neue Idee |
| Umfang | Lite |
| Risikostufe | 2 – Konten mit eigenen Notizen |

| Nr | Phase | Status | Datei |
|---|---|---|---|
| 0 | Start | fertig | 00-start.md |
| 5 | MVP-Umfang | fertig | 05-mvp.md |
| 14 | Sicherheit | fertig | 14-sicherheit.md |
| 19 | Tests | fertig | 19-tests.md |
| 21 | Roadmap | fertig | 21-roadmap.md |
| 22 | Build-Handoff | fertig | handoff/AGENTS.md |
| 23 | Launch | in Arbeit | 23-launch.md |

## Annahmen
| ID | Annahme | Phase | Bestätigt |
|---|---|---|---|
| A-001 | Nutzer sind volljährig | 3 | nein |
`,
    "ENTSCHEIDUNGEN.md": "# Entscheidungen\n\n| ID | Datum | Phase | Entscheidung |\n|---|---|---|---|\n| E-001 | 2026-10-13 | 0 | Stufe 2 |\n",
    "QUELLEN.md": "# Quellen\n\n| ID | Aussage | Quelle |\n|---|---|---|\n| Q-001 | Preis | https://example.org |\n",
    "00-start.md": "# Start\n\nAlles festgelegt. Zielgruppe volljährig [ANNAHME A-001].\n",
    "05-mvp.md": `# MVP

| ID | Funktion | Priorität | User Story |
|---|---|---|---|
| F-01 | Eintrag anlegen | Muss | Als Nutzer … |
| F-02 | Export | Muss | Als Nutzer … |
| F-03 | Teilen | Später | – |
`,
    "14-sicherheit.md": `# Sicherheit

| ID | Was | Wer | Wie | Folge | W | Maßnahme | Abschnitt | Test |
|---|---|---|---|---|---|---|---|---|
| BD-01 | Einträge | Nutzer | ID ändern | Leck | hoch | Besitzprüfung | C | T-SEC-01 |
| BD-02 | Konten | Bots | Brute Force | Übernahme | hoch | Rate Limit | E | T-SEC-05 |
`,
    "19-tests.md": `# Tests

| ID | Kriterium | Test |
|---|---|---|
| AK-F01-1 | Gegeben, wenn, dann | TEST-F01-1 |
| AK-F02-1 | Gegeben, wenn, dann | TEST-F02-1 |
`,
    "21-roadmap.md": `# Roadmap

| ID | Meilenstein | Titel | Bezug |
|---|---|---|---|
| TASK-001 | M1 | Besitzprüfung | F-01, T-SEC-01, T-SEC-05 |
| TASK-002 | M2 | Export | F-02 |
`,
    "23-launch.md": `# Launch

| ✓ | Prüfpunkt | Stufe | Nachweis |
|---|---|---|---|
| ☑ | Test: Nutzer A kann Daten von B weder lesen, ändern, löschen noch in Listen sehen | 2 | T-SEC-01..04 grün, CI-Lauf #12, 2026-11-02 |
| ☑ | Backup-Wiederherstellung getestet | 2 | Wiederherstellung am 2026-11-01 erfolgreich |
`,
    "pruefungen/zweitpruefung-14-2026-10-13.md": "# Bericht\n",
    "handoff/AGENTS.md": `# Testapp\n\n## 5. Regeln\n\n${REGELN_AB_GRUNDSATZ}\n\n## 6. Offene Annahmen\n\n| ID | Annahme |\n|---|---|\n| A-001 | volljährig |\n`,
    "handoff/CLAUDE.md": "@AGENTS.md\n",
    "handoff/START-PROMPT.md": "Start\n",
    "handoff/docs/produkt.md": "Produkt\n",
    "handoff/docs/daten-und-rechte.md": "Daten\n",
    "handoff/docs/architektur.md": "Architektur\n",
    "handoff/docs/sicherheit.md": "Zugriffs-Antwortstrategie: 404\n\nRate-Limits: …\n\nSchlüssel: SUPABASE_URL (öffentlich)\n",
    "handoff/docs/tests.md": "Tests\n",
    "handoff/docs/roadmap.md": "TASK-001 F-01\nTASK-002 F-02\n",
    "handoff/docs/entscheidungen.md": "E-001\n",
    "handoff/docs/aenderungen.md": "| Nr |\n|---|\n",
  };
  for (const [k, v] of Object.entries(aenderungen)) {
    if (v === null) delete dateien[k];
    else dateien[k] = v;
  }
  schreibe(dir, dateien);
  return dir;
}

const fehler = (erg) => erg.befunde.filter((b) => b.stufe === "FEHLER");
const hat = (erg, stufe, teil) => erg.befunde.some((b) => b.stufe === stufe && b.text.includes(teil));

test("vollständiges Projekt: keine FEHLER im Handoff- und Launch-Modus", () => {
  const dir = beispielProjekt();
  const erg = pruefeProjekt(dir, { handoff: true, launch: true, repoRoot: REPO });
  assert.deepEqual(fehler(erg), [], JSON.stringify(fehler(erg), null, 2));
  assert.equal(erg.freigabe.status, "Freigabefähig");
});

test("fertige Phase ohne Datei ist ein FEHLER", () => {
  const dir = beispielProjekt({ "19-tests.md": null });
  const erg = pruefeProjekt(dir, { repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "19-tests.md fehlt"));
});

test("Annahme im Dokument, die nicht im Status steht, wird gemeldet", () => {
  const dir = beispielProjekt({ "00-start.md": "Text [ANNAHME A-009] und [ANNAHME]\n" });
  const erg = pruefeProjekt(dir, { repoRoot: REPO });
  assert.ok(hat(erg, "WARNUNG", "A-009 fehlt"));
  assert.ok(hat(erg, "WARNUNG", "ohne ID"));
});

test("Muss-Funktion ohne Aufgabe ist im Handoff-Modus ein FEHLER", () => {
  const dir = beispielProjekt({
    "21-roadmap.md": "| ID | M | Titel | Bezug |\n|---|---|---|---|\n| TASK-001 | M1 | x | F-01, T-SEC-01, T-SEC-05 |\n",
  });
  assert.ok(hat(pruefeProjekt(dir, { repoRoot: REPO }), "WARNUNG", "F-02 ist keiner Aufgabe"));
  assert.ok(hat(pruefeProjekt(dir, { handoff: true, repoRoot: REPO }), "FEHLER", "F-02 ist keiner Aufgabe"));
});

test("Muss-Funktion ohne Akzeptanzkriterium und Test wird erkannt", () => {
  const dir = beispielProjekt({ "19-tests.md": "| ID | K | T |\n|---|---|---|\n| AK-F01-1 | x | TEST-F01-1 |\n" });
  const erg = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "F-02 hat kein Akzeptanzkriterium"));
  assert.ok(hat(erg, "FEHLER", "F-02 hat keinen Test"));
});

test("Bedrohung ohne Test und ohne akzeptiertes Risiko ist im Handoff ein FEHLER", () => {
  const dir = beispielProjekt({
    "14-sicherheit.md": "| ID | Was | Maßnahme |\n|---|---|---|\n| BD-01 | Einträge | Besitzprüfung |\n",
  });
  const erg = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "BD-01 hat weder"));
});

test("fehlende Sicherheitsregel im Handoff ist ein FEHLER", () => {
  const ohne21 = REGELN_AB_GRUNDSATZ.replace(/^- 2\.1 .*$/m, "");
  const dir = beispielProjekt({
    "handoff/AGENTS.md": `# Testapp\n\n${ohne21}\n\n| A-001 |\n`,
  });
  const erg = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "Sicherheitsregeln fehlen: 2.1"));
});

test("offene Annahme fehlt im Handoff", () => {
  const dir = beispielProjekt({ "handoff/AGENTS.md": `# Testapp\n\n${REGELN_AB_GRUNDSATZ}\n` });
  const erg = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "Offene Annahme A-001"));
});

test("geheimer Schlüssel im Handoff ist ein FEHLER", () => {
  const dir = beispielProjekt({ "handoff/docs/architektur.md": "STRIPE_SECRET_KEY=sk_live_abcdefghijklmnop1234\n" });
  const erg = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "Stripe Secret Key"));
});

test("Launch: Haken ohne Nachweis macht die App nicht freigabefähig", () => {
  const dir = beispielProjekt({
    "23-launch.md": "| ✓ | Prüfpunkt | Stufe | Nachweis |\n|---|---|---|---|\n| ☑ | Backup-Wiederherstellung getestet | 2 | erledigt |\n| ☐ | Monitoring aktiv | 1 | |\n",
  });
  const erg = pruefeProjekt(dir, { launch: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "Abgehakt ohne überprüfbaren Nachweis"));
  assert.ok(hat(erg, "FEHLER", "Pflichtpunkt(e) offen"));
  assert.equal(erg.freigabe.status, "Nicht freigabefähig");
});

test("Launch: akzeptiertes Risiko und n/a mit Begründung", () => {
  const dir = beispielProjekt({
    "23-launch.md": "| ✓ | Prüfpunkt | Stufe | Nachweis |\n|---|---|---|---|\n| ☐ | Monitoring aktiv | 1 | akzeptiert als E-004 |\n| ☐ | App Stores: Screenshots | 1 | n/a – keine Store-App |\n| ☐ | Audit-Log | 3 | |\n",
  });
  const erg = pruefeProjekt(dir, { launch: true, repoRoot: REPO });
  assert.equal(erg.freigabe.status, "Freigabefähig mit akzeptierten Risiken");
  assert.equal(erg.freigabe.offen, 0); // Stufe-3-Punkt ist bei Risikostufe 2 keine Pflicht
});

test("Risikostufe 3 ohne Zweitprüfung ist ein FEHLER", () => {
  const dir = beispielProjekt({ "pruefungen/zweitpruefung-14-2026-10-13.md": null });
  const state = fs.readFileSync(path.join(dir, "PROJECT_STATE.md"), "utf8").replace("| Risikostufe | 2 –", "| Risikostufe | 3 –");
  fs.writeFileSync(path.join(dir, "PROJECT_STATE.md"), state);
  const erg = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "Zweitprüfung von Phase 14 fehlt"));
});

test("bestehende App: kritischer Befund ohne Aufgabe wird gemeldet", () => {
  const dir = beispielProjekt({
    "B1-ist-analyse.md": "| ID | Schweregrad | Bereich |\n|---|---|---|\n| BF-01 | kritisch | Sicherheit |\n| BF-02 | niedrig | Qualität |\n",
  });
  const state = fs.readFileSync(path.join(dir, "PROJECT_STATE.md"), "utf8").replace("| Einstieg | Neue Idee |", "| Einstieg | Bestehende App |");
  fs.writeFileSync(path.join(dir, "PROJECT_STATE.md"), state);
  const erg = pruefeProjekt(dir, { repoRoot: REPO });
  assert.ok(hat(erg, "WARNUNG", "BF-01 (kritisch) hat weder Aufgabe"));
  assert.ok(!erg.befunde.some((b) => b.text.includes("BF-02")));
});

test("Platzhalter in fertigem Dokument werden gemeldet", () => {
  const dir = beispielProjekt({ "00-start.md": "# Start: <Name>\n\n| Datum | JJJJ-MM-TT |\n" });
  const erg = pruefeProjekt(dir, { repoRoot: REPO });
  assert.ok(hat(erg, "WARNUNG", "Vorlagen-Platzhalter"));
});

// ---------------------------------------------------------------------------
// Version 1.2: Härtung gegen stilles „grün“
// ---------------------------------------------------------------------------

const STATE_MIT_VERSION = (version, risiko = "2 – Konten mit eigenen Notizen") =>
  `# Projektstatus: Testapp

| Feld | Wert |
|---|---|
| Einstieg | Neue Idee |
| Umfang | Lite |
| Risikostufe | ${risiko} |
| Regelwerk-Version | ${version} |

| Nr | Phase | Status | Datei |
|---|---|---|---|
| 0 | Start | fertig | 00-start.md |
| 5 | MVP-Umfang | fertig | 05-mvp.md |
| 14 | Sicherheit | fertig | 14-sicherheit.md |
| 19 | Tests | fertig | 19-tests.md |
| 21 | Roadmap | fertig | 21-roadmap.md |
| 22 | Build-Handoff | fertig | handoff/AGENTS.md |
| 23 | Launch | in Arbeit | 23-launch.md |

## Annahmen
| ID | Annahme | Phase | Bestätigt |
|---|---|---|---|
| A-001 | Nutzer sind volljährig | 3 | nein |
`;

test("Funktionen als Liste statt Tabelle: im Handoff FEHLER, sonst WARNUNG – und ausdrücklich „nicht geprüft“", () => {
  const dir = beispielProjekt({ "05-mvp.md": "# MVP\n\n- F-01 Eintrag anlegen (Muss)\n- F-02 Export (Muss)\n" });
  const lax = pruefeProjekt(dir, { repoRoot: REPO });
  assert.ok(hat(lax, "WARNUNG", "Liste oder Text statt in der Tabelle"));
  assert.ok(lax.nichtGeprueft.length > 0);
  const streng = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(streng, "FEHLER", "NICHT geprüft"));
  const text = formatiere(streng, { projektOrdner: dir, modus: "handoff" });
  assert.ok(text.includes("NICHT GEPRÜFT"));
  assert.ok(text.includes("ersetzt keine inhaltliche Kontrolle"));
});

test("ohne FEHLER, aber mit nicht prüfbaren Teilen steht „KEIN Grün“ im Bericht", () => {
  const dir = beispielProjekt({ "05-mvp.md": "# MVP\n\n- F-01 Eintrag anlegen (Muss)\n" });
  const erg = pruefeProjekt(dir, { repoRoot: REPO }); // allgemeiner Modus: nur WARNUNG
  assert.deepEqual(fehler(erg), []);
  assert.ok(formatiere(erg, { projektOrdner: dir, modus: "allgemein" }).includes("KEIN Grün"));
});

test("fehlendes MVP-Dokument ist im Handoff ein FEHLER", () => {
  const dir = beispielProjekt({ "05-mvp.md": null });
  const erg = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "MVP-Dokument fehlt"));
});

test("Akzeptanzkriterien nur außerhalb einer Tabelle zählen nicht", () => {
  const dir = beispielProjekt({ "19-tests.md": "# Tests\n\n- AK-F01-1 / TEST-F01-1\n- AK-F02-1 / TEST-F02-1\n" });
  const erg = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "F-01 hat kein Akzeptanzkriterium"));
  assert.ok(hat(erg, "FEHLER", "steht nur außerhalb einer Tabelle"));
});

test("Aufgaben und Bedrohungen als Liste werden als nicht prüfbar gemeldet", () => {
  const dir = beispielProjekt({
    "21-roadmap.md": "# Roadmap\n\n- TASK-001 F-01 F-02\n",
    "14-sicherheit.md": "# Sicherheit\n\n- BD-01 Fremde Daten, Test T-SEC-01\n",
  });
  const erg = pruefeProjekt(dir, { handoff: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "Aufgaben TASK-… stehen als Liste"));
  assert.ok(hat(erg, "FEHLER", "Bedrohungen BD-… stehen als Liste"));
  assert.ok(erg.nichtGeprueft.length >= 2);
});

test("Nachweise: Positivtest statt Wortliste", () => {
  for (const schlecht of ["habe ich gemacht", "siehe oben", "implementiert", "erstellt", "CI/CD läuft", "alles in Ordnung", "ok", ""]) {
    assert.equal(nachweisPruefbar(schlecht), false, schlecht);
  }
  for (const gut of ["2026-11-02", "02.11.2026", "https://example.org/run/1", "docs/sicherheit.md", "T-SEC-01..04 grün", "Commit a1b2c3d4", "CI-Lauf #12", "E-004"]) {
    assert.equal(nachweisPruefbar(gut), true, gut);
  }
});

test("Launch: Haken mit schwammigem Nachweis („habe ich gemacht“) zählt nicht", () => {
  const dir = beispielProjekt({
    "23-launch.md": "| ✓ | Prüfpunkt | Stufe | Nachweis |\n|---|---|---|---|\n| ☑ | Backup-Wiederherstellung getestet | 2 | habe ich gemacht, funktioniert |\n",
  });
  const erg = pruefeProjekt(dir, { launch: true, repoRoot: REPO });
  assert.ok(hat(erg, "FEHLER", "Abgehakt ohne überprüfbaren Nachweis"));
  assert.equal(erg.freigabe.status, "Nicht freigabefähig");
});

test("Regelwerk-Version: fehlend = HINWEIS, abweichend = WARNUNG, passend = nichts", () => {
  const aktuell = JSON.parse(fs.readFileSync(path.join(REPO, "package.json"), "utf8")).version;
  const ohne = pruefeProjekt(beispielProjekt(), { repoRoot: REPO });
  assert.ok(hat(ohne, "HINWEIS", "Regelwerk-Version“ fehlt"));
  const alt = pruefeProjekt(beispielProjekt({ "PROJECT_STATE.md": STATE_MIT_VERSION("0.9.0") }), { repoRoot: REPO });
  assert.ok(hat(alt, "WARNUNG", "Projekt wurde mit Regelwerk 0.9.0 begonnen"));
  const passt = pruefeProjekt(beispielProjekt({ "PROJECT_STATE.md": STATE_MIT_VERSION(aktuell) }), { repoRoot: REPO });
  assert.ok(!passt.befunde.some((b) => b.bereich === "Version" && b.datei === "PROJECT_STATE.md"));
});

test("Handoff ohne Regelwerk-Version in handoff/AGENTS.md wird gewarnt", () => {
  const erg = pruefeProjekt(beispielProjekt(), { handoff: true, repoRoot: REPO });
  assert.ok(erg.befunde.some((b) => b.bereich === "Version" && b.datei === "handoff/AGENTS.md"));
});

test("Stufe 3: ohne externe Prüfung nicht freigabefähig; mit akzeptiertem Risiko oder Bericht schon", () => {
  const stufe3 = (extra = {}) => beispielProjekt({ "PROJECT_STATE.md": STATE_MIT_VERSION(JSON.parse(fs.readFileSync(path.join(REPO, "package.json"), "utf8")).version, "3 – Gesundheitsdaten"), ...extra });
  const ohne = pruefeProjekt(stufe3(), { launch: true, repoRoot: REPO });
  assert.ok(hat(ohne, "FEHLER", "externe Fachprüfung"));
  assert.equal(ohne.freigabe.status, "Nicht freigabefähig");

  const akzeptiert = pruefeProjekt(
    stufe3({ "ENTSCHEIDUNGEN.md": "# E\n\n| ID | Datum | Phase | Entscheidung |\n|---|---|---|---|\n| E-009 | 2026-11-03 | 23 | Externe Prüfung bewusst nicht beauftragt – Risiko akzeptiert (nur Freundeskreis) |\n" }),
    { launch: true, repoRoot: REPO }
  );
  assert.ok(!hat(akzeptiert, "FEHLER", "externe Fachprüfung"));
  assert.equal(akzeptiert.freigabe.status, "Freigabefähig mit akzeptierten Risiken");

  const bericht = pruefeProjekt(stufe3({ "pruefungen/externe-pruefung-2026-11-05.md": "# Bericht Fachperson\n" }), { launch: true, repoRoot: REPO });
  assert.ok(!hat(bericht, "FEHLER", "externe Fachprüfung"));
  assert.equal(bericht.freigabe.status, "Freigabefähig");
});

test("Stufe 2 braucht keine externe Prüfung", () => {
  const erg = pruefeProjekt(beispielProjekt(), { launch: true, repoRoot: REPO });
  assert.ok(!hat(erg, "FEHLER", "externe Fachprüfung"));
});
