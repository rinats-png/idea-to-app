// Konsistenztests für das Regelwerk selbst.
// Ausführen: npm test  (bzw. node --test scripts/*.test.mjs)

import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pruefeProjekt } from "./pruefe-projekt.mjs";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lies = (rel) => fs.readFileSync(path.join(REPO, rel), "utf8");

const phasen = fs.readdirSync(path.join(REPO, "phases")).filter((f) => f.endsWith(".md")).sort();

test("es gibt genau 25 Phasen-Dateien 00–24", () => {
  assert.equal(phasen.length, 25);
  phasen.forEach((f, i) => assert.ok(f.startsWith(String(i).padStart(2, "0") + "-"), f));
});

test("jede Phase hat Pflichtabschnitte", () => {
  for (const f of phasen) {
    const t = lies(`phases/${f}`);
    for (const abschnitt of ["## Für Einsteiger erklärt", "## Missbrauchs- und Sicherheitscheck", "## Definition of Done"]) {
      assert.ok(t.includes(abschnitt), `${f}: „${abschnitt}“ fehlt`);
    }
    assert.ok(/→ \*\*(Standard-)?Gate\*\*|Abschluss-Gate/.test(t), `${f}: Gate-Hinweis fehlt`);
  }
});

test("jede Phase ist in AGENTS.md und im Status-Template aufgeführt", () => {
  const agents = lies("AGENTS.md");
  const state = lies("templates/PROJECT_STATE.md");
  for (const f of phasen) {
    assert.ok(agents.includes(`phases/${f}`), `AGENTS.md verweist nicht auf ${f}`);
    const nr = parseInt(f.slice(0, 2), 10);
    assert.ok(new RegExp(`^\\| ${nr} \\|`, "m").test(state), `PROJECT_STATE-Vorlage: Zeile für Phase ${nr} fehlt`);
  }
});

test("Sicherheitsregeln: eindeutige Nummern, keine konkreten Zahlenwerte", () => {
  const regeln = lies("security/regeln-fuer-ki.md");
  const ids = [...regeln.matchAll(/^- (\d+\.\d+) /gm)].map((m) => m[1]);
  assert.ok(ids.length > 30, "zu wenige Regeln gefunden");
  assert.equal(new Set(ids).size, ids.length, "doppelte Regelnummern");
  // Zahlen wie „19 MiB“, „≥ 10“, „60 Min.“ gehören in standardwerte.md
  assert.ok(!/\d+\s*(MiB|Min\.|Minuten|Stunden|Zeichen)\b|≥\s*\d/.test(regeln), "Regeln enthalten konkrete Werte – nach standardwerte.md verschieben");
});

test("alle relativen Markdown-Links zeigen auf existierende Dateien", () => {
  const dateien = [];
  const sammle = (dir) => {
    for (const e of fs.readdirSync(path.join(REPO, dir), { withFileTypes: true })) {
      if (e.name === ".git" || e.name === "node_modules") continue;
      const rel = path.join(dir, e.name);
      if (e.isDirectory()) sammle(rel);
      else if (e.name.endsWith(".md")) dateien.push(rel);
    }
  };
  sammle(".");
  const kaputt = [];
  for (const d of dateien) {
    const t = lies(d);
    for (const m of t.matchAll(/\]\(([^)\s]+)\)/g)) {
      const ziel = m[1];
      if (/^(https?:|mailto:|#)/.test(ziel)) continue;
      const p = path.join(REPO, path.dirname(d), ziel.split("#")[0]);
      if (!fs.existsSync(p)) kaputt.push(`${d} → ${ziel}`);
    }
    for (const m of t.matchAll(/`((?:phases|security|templates|guides|modes|scripts)\/[^`\s*<]+\.(?:md|html|mjs))`/g)) {
      if (!fs.existsSync(path.join(REPO, m[1]))) kaputt.push(`${d} → ${m[1]}`);
    }
  }
  assert.deepEqual(kaputt, []);
});

test("Beispielprojekt schichtfit besteht die Handoff-Prüfung ohne FEHLER und ohne NICHT GEPRÜFT", () => {
  const { befunde, nichtGeprueft } = pruefeProjekt(path.join(REPO, "examples", "schichtfit"), { handoff: true });
  assert.deepEqual(befunde.filter((b) => b.stufe === "FEHLER"), []);
  assert.deepEqual(befunde.filter((b) => b.stufe === "WARNUNG"), []);
  assert.deepEqual(nichtGeprueft, []);
});
