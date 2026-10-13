#!/usr/bin/env node
// idea-to-app – Projektprüfung
// Prüft einen Projektordner unter projekte/<slug>/ auf Vollständigkeit, Konsistenz,
// Rückverfolgbarkeit, Handoff-Vollständigkeit und Launch-Nachweise.
// Keine Abhängigkeiten, Node.js >= 18.
//
// Aufruf:
//   node scripts/pruefe-projekt.mjs projekte/<slug> [--handoff] [--launch] [--bericht] [--json]
//
// Exit-Code: 0 = keine FEHLER, 1 = mindestens ein FEHLER, 2 = Aufruf falsch.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// ---------------------------------------------------------------------------
// Hilfsfunktionen
// ---------------------------------------------------------------------------

function lies(datei) {
  try {
    return fs.readFileSync(datei, "utf8");
  } catch {
    return null;
  }
}

function existiert(datei) {
  try {
    fs.accessSync(datei);
    return true;
  } catch {
    return false;
  }
}

function alleDateien(ordner, filter = () => true) {
  const ergebnis = [];
  if (!existiert(ordner)) return ergebnis;
  for (const eintrag of fs.readdirSync(ordner, { withFileTypes: true })) {
    const voll = path.join(ordner, eintrag.name);
    if (eintrag.isDirectory()) ergebnis.push(...alleDateien(voll, filter));
    else if (filter(voll)) ergebnis.push(voll);
  }
  return ergebnis;
}

/** Zeilen außerhalb von Code-Blöcken, mit Zeilennummer. */
function zeilenOhneCode(text) {
  const out = [];
  let imCode = false;
  text.split(/\r?\n/).forEach((zeile, i) => {
    if (/^\s*(```|~~~)/.test(zeile)) {
      imCode = !imCode;
      return;
    }
    if (!imCode) out.push({ nr: i + 1, text: zeile });
  });
  return out;
}

/** Markdown-Tabellenzeilen als Zellen-Arrays (ohne Trennzeilen), außerhalb von Code-Blöcken. */
function tabellenzeilen(text) {
  if (!text) return [];
  return zeilenOhneCode(text)
    .filter((z) => /^\s*\|/.test(z.text))
    .filter((z) => !/^\s*\|(\s*:?-{2,}:?\s*\|)+\s*$/.test(z.text))
    .map((z) => {
      const roh = z.text.trim().replace(/^\|/, "").replace(/\|$/, "");
      return { nr: z.nr, zellen: roh.split("|").map((c) => c.trim()) };
    });
}

function normF(nummer) {
  return `F-${String(parseInt(nummer, 10)).padStart(2, "0")}`;
}

function relativ(projekt, datei) {
  return path.relative(projekt, datei) || path.basename(datei);
}

const SCHWACHE_NACHWEISE = new Set(["", "ok", "ja", "erledigt", "geprüft", "gemacht", "fertig", "done", "x", "✓", "✔", "laut ki", "-", "–", "…"]);

const SECRET_MUSTER = [
  { name: "Stripe Secret Key", re: /sk_(live|test)_[0-9a-zA-Z]{10,}/ },
  { name: "Supabase Secret Key", re: /sb_secret_[0-9a-zA-Z_-]{10,}/ },
  { name: "Anthropic API Key", re: /sk-ant-[0-9a-zA-Z_-]{10,}/ },
  { name: "OpenAI-ähnlicher Key", re: /sk-(proj-)?[0-9a-zA-Z_-]{20,}/ },
  { name: "AWS Access Key", re: /AKIA[0-9A-Z]{16}/ },
  { name: "Privater Schlüssel", re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: "GitHub Token", re: /gh[pousr]_[0-9A-Za-z]{30,}/ },
  // JWTs können öffentliche Schlüssel sein (z. B. Supabase Anon Key) – im Handoff trotzdem nichts verloren.
  { name: "JWT (evtl. Service-Role-Schlüssel)", re: /eyJ[0-9A-Za-z_-]{10,}\.eyJ[0-9A-Za-z_-]{10,}\.[0-9A-Za-z_-]{10,}/, stufe: "WARNUNG" },
];

// ---------------------------------------------------------------------------
// Hauptprüfung
// ---------------------------------------------------------------------------

export function pruefeProjekt(projektOrdner, optionen = {}) {
  const { handoff = false, launch = false, repoRoot = REPO_ROOT } = optionen;
  const projekt = path.resolve(projektOrdner);
  const befunde = [];
  const melde = (stufe, bereich, datei, text) => befunde.push({ stufe, bereich, datei, text });
  // Im Handoff-/Launch-Modus werden Lücken in der Rückverfolgung zu FEHLERN.
  const streng = handoff || launch ? "FEHLER" : "WARNUNG";

  if (!existiert(projekt)) {
    melde("FEHLER", "Struktur", projektOrdner, "Projektordner existiert nicht.");
    return { befunde, freigabe: null };
  }

  // --- Struktur -------------------------------------------------------------
  for (const pflicht of ["PROJECT_STATE.md", "ENTSCHEIDUNGEN.md"]) {
    if (!existiert(path.join(projekt, pflicht))) melde("FEHLER", "Struktur", pflicht, "Pflichtdatei fehlt.");
  }
  if (!existiert(path.join(projekt, "QUELLEN.md"))) melde("WARNUNG", "Struktur", "QUELLEN.md", "Quellenregister fehlt (Vorlage: templates/QUELLEN.md).");

  const state = lies(path.join(projekt, "PROJECT_STATE.md")) ?? "";
  const stateZeilen = tabellenzeilen(state);

  // Felder
  const feld = (name) => {
    const z = stateZeilen.find((r) => r.zellen.length === 2 && r.zellen[0].toLowerCase() === name.toLowerCase());
    return z ? z.zellen[1] : "";
  };
  const risikoText = feld("Risikostufe");
  // Unausgefüllte Vorlage („1 / 2 / 3“) oder „wird in B1 bestimmt“ zählt als nicht festgelegt.
  const risikoMatch = /\d\s*\/\s*\d/.test(risikoText) || /wird in B1/i.test(risikoText) ? null : risikoText.match(/\b([123])\b/);
  const risiko = risikoMatch ? parseInt(risikoMatch[1], 10) : null;
  const bestehend = /^bestehende/i.test(feld("Einstieg").trim());
  if (state && risiko === null) {
    melde(handoff || launch ? "FEHLER" : "HINWEIS", "Struktur", "PROJECT_STATE.md", "Risikostufe ist noch nicht festgelegt.");
  }

  // Fortschritt
  const phasen = stateZeilen
    .filter((r) => r.zellen.length >= 4 && /^(B[0-2]|\d{1,2})$/.test(r.zellen[0]))
    .map((r) => ({ nr: r.zellen[0], name: r.zellen[1], status: r.zellen[2], datei: r.zellen[3].replace(/`/g, "") }));
  const phase = (nr) => phasen.find((p) => p.nr === String(nr));
  const fertig = (nr) => /^fertig/i.test(phase(nr)?.status ?? "");
  const fertigeDateien = new Set();

  for (const p of phasen) {
    const ziel = path.join(projekt, p.datei);
    if (/^fertig/i.test(p.status)) {
      if (!existiert(ziel)) melde("FEHLER", "Fortschritt", "PROJECT_STATE.md", `Phase ${p.nr} ist „fertig“, aber ${p.datei} fehlt.`);
      else fertigeDateien.add(path.resolve(ziel));
    }
    if (/prüfen/i.test(p.status)) {
      melde(handoff || launch ? "FEHLER" : "WARNUNG", "Fortschritt", "PROJECT_STATE.md", `Phase ${p.nr} (${p.name}) ist als „⚠️ prüfen“ markiert.`);
    }
    if (handoff && /in Arbeit/i.test(p.status) && /^\d+$/.test(p.nr) && parseInt(p.nr, 10) < 22) {
      melde("WARNUNG", "Fortschritt", "PROJECT_STATE.md", `Phase ${p.nr} (${p.name}) ist noch „in Arbeit“.`);
    }
  }

  // Annahmen
  const annahmen = new Map();
  for (const r of stateZeilen) {
    if (/^A-\d+$/.test(r.zellen[0])) annahmen.set(r.zellen[0], (r.zellen[r.zellen.length - 1] || "").toLowerCase());
  }
  const offeneAnnahmen = [...annahmen].filter(([, s]) => !/^(ja|verworfen)/.test(s)).map(([id]) => id);

  // Quellen
  const quellen = new Set(tabellenzeilen(lies(path.join(projekt, "QUELLEN.md"))).map((r) => r.zellen[0]).filter((id) => /^Q-\d+$/.test(id)));

  // --- Dokumente durchsuchen ----------------------------------------------
  const projektDocs = alleDateien(projekt, (f) => f.endsWith(".md")).filter(
    (f) => !f.includes(`${path.sep}handoff${path.sep}`) && !f.includes(`${path.sep}pruefungen${path.sep}`)
  );

  for (const datei of projektDocs) {
    const rel = relativ(projekt, datei);
    const text = lies(datei) ?? "";
    const zeilen = zeilenOhneCode(text);
    const istState = path.basename(datei) === "PROJECT_STATE.md";
    let platzhalter = 0;
    let ersterPlatzhalter = 0;

    for (const { nr, text: z } of zeilen) {
      for (const m of z.matchAll(/\[ANNAHME(?:\s+(A-\d+))?\]/g)) {
        if (!m[1]) melde("WARNUNG", "Annahmen", `${rel}:${nr}`, "Annahme ohne ID – Format [ANNAHME A-…] verwenden.");
        else if (!annahmen.has(m[1])) melde("WARNUNG", "Annahmen", `${rel}:${nr}`, `${m[1]} fehlt in der Annahmen-Tabelle von PROJECT_STATE.md.`);
        else if (/^ja/.test(annahmen.get(m[1]))) melde("HINWEIS", "Annahmen", `${rel}:${nr}`, `${m[1]} ist bestätigt – Markierung im Dokument entfernen.`);
      }
      if (!istState && path.basename(datei) !== "QUELLEN.md") {
        for (const m of z.matchAll(/\[(Q-\d+)\]/g)) {
          if (!quellen.has(m[1])) melde("WARNUNG", "Quellen", `${rel}:${nr}`, `${m[1]} wird zitiert, steht aber nicht in QUELLEN.md.`);
        }
      }
      if (fertigeDateien.has(path.resolve(datei))) {
        const istPlatzhalter =
          /<(Name|Arbeitstitel|projekt-slug|App-Name|Funktion|Persona|Zielgruppe)>/.test(z) ||
          /JJJJ-MM-TT/.test(z) ||
          /^\s*(-\s*)?…\s*$/.test(z) ||
          /\|\s*…\s*\|/.test(z);
        if (istPlatzhalter) {
          platzhalter++;
          if (!ersterPlatzhalter) ersterPlatzhalter = nr;
        }
      }
    }
    if (platzhalter > 0) {
      melde("WARNUNG", "Platzhalter", `${rel}:${ersterPlatzhalter}`, `${platzhalter} Vorlagen-Platzhalter in einem als „fertig“ markierten Dokument.`);
    }
    const pruefen = (text.match(/\[PRÜFEN\]/g) || []).length;
    if (pruefen > 0) melde("HINWEIS", "Recht/Fakten", rel, `${pruefen}× [PRÜFEN] – vor dem Launch klären.`);
  }

  // --- Rückverfolgbarkeit ---------------------------------------------------
  const mvp = lies(path.join(projekt, "05-mvp.md"));
  const tests = lies(path.join(projekt, "19-tests.md"));
  const roadmap = lies(path.join(projekt, "21-roadmap.md"));
  const sicherheit = lies(path.join(projekt, "14-sicherheit.md"));
  const ist = lies(path.join(projekt, "B1-ist-analyse.md"));
  const entscheidungen = lies(path.join(projekt, "ENTSCHEIDUNGEN.md")) ?? "";

  const mussFunktionen = [];
  for (const r of tabellenzeilen(mvp)) {
    const m = r.zellen[0].match(/^F-?(\d+)$/);
    if (!m) continue;
    if (r.zellen.some((c) => /gestrichen/i.test(c))) continue;
    if (r.zellen.some((c) => /^muss$/i.test(c))) mussFunktionen.push(normF(m[1]));
  }

  if (mvp && mussFunktionen.length === 0 && fertig(5)) {
    melde("WARNUNG", "Rückverfolgung", "05-mvp.md", "Keine Muss-Funktion mit ID F-… gefunden.");
  }

  if (tests && mussFunktionen.length) {
    const akF = new Set([...tests.matchAll(/AK-F(\d+)-\d+/g)].map((m) => normF(m[1])));
    const testF = new Set([...tests.matchAll(/TEST-F(\d+)-\d+/g)].map((m) => normF(m[1])));
    for (const f of mussFunktionen) {
      if (!akF.has(f)) melde(streng, "Rückverfolgung", "19-tests.md", `Muss-Funktion ${f} hat kein Akzeptanzkriterium (AK-${f.replace("-", "")}-…).`);
      if (!testF.has(f)) melde(streng, "Rückverfolgung", "19-tests.md", `Muss-Funktion ${f} hat keinen Test (TEST-${f.replace("-", "")}-…).`);
    }
  } else if (handoff && mussFunktionen.length && !tests) {
    melde("WARNUNG", "Rückverfolgung", "19-tests.md", "Kein Testdokument – Akzeptanzkriterien und Tests fehlen (Lite-Modus: vor Veröffentlichung Pflicht).");
  }

  const taskZeilen = tabellenzeilen(roadmap).filter((r) => /^TASK-\d+$/.test(r.zellen[0]));
  if (roadmap) {
    const fInTasks = new Set();
    for (const r of taskZeilen) for (const m of r.zellen.join(" ").matchAll(/\bF-?(\d+)\b/g)) fInTasks.add(normF(m[1]));
    for (const f of mussFunktionen) {
      if (!fInTasks.has(f)) melde(streng, "Rückverfolgung", "21-roadmap.md", `Muss-Funktion ${f} ist keiner Aufgabe (TASK-…) zugeordnet.`);
    }
    if (taskZeilen.length === 0 && fertig(21)) melde(streng, "Rückverfolgung", "21-roadmap.md", "Keine Aufgaben mit ID TASK-… gefunden.");
  }

  // Bedrohungen
  if (sicherheit) {
    for (const r of tabellenzeilen(sicherheit)) {
      if (!/^BD-\d+$/.test(r.zellen[0])) continue;
      const zeile = r.zellen.join(" ");
      if (!/T-SEC-\d+/.test(zeile) && !/\bE-\d+/.test(zeile)) {
        melde(streng, "Sicherheit", `14-sicherheit.md:${r.nr}`, `${r.zellen[0]} hat weder Sicherheitstest (T-SEC-…) noch akzeptiertes Risiko (E-…).`);
      }
    }
    if (roadmap) {
      const tsecIn14 = new Set([...sicherheit.matchAll(/T-SEC-\d+/g)].map((m) => m[0]));
      for (const t of tsecIn14) {
        if (!roadmap.includes(t)) melde("WARNUNG", "Rückverfolgung", "21-roadmap.md", `${t} ist keiner Aufgabe zugeordnet.`);
      }
    }
  } else if (handoff || launch) {
    melde("FEHLER", "Sicherheit", "14-sicherheit.md", "Sicherheitskonzept fehlt (Phase 14 wird nie übersprungen).");
  }

  // Befunde bestehender App
  if (bestehend) {
    if (!ist) melde(fertig("B1") ? "FEHLER" : "HINWEIS", "Bestehende App", "B1-ist-analyse.md", "Ist-Analyse fehlt.");
    else if (roadmap || handoff) {
      for (const r of tabellenzeilen(ist)) {
        if (!/^BF-\d+$/.test(r.zellen[0])) continue;
        if (!/^(kritisch|hoch)$/i.test(r.zellen[1] || "")) continue;
        const id = r.zellen[0];
        const inRoadmap = roadmap ? new RegExp(`\\b${id}\\b`).test(roadmap) : false;
        const akzeptiert = new RegExp(`\\b${id}\\b`).test(entscheidungen);
        if (!inRoadmap && !akzeptiert) melde(streng, "Bestehende App", "B1-ist-analyse.md", `${id} (${r.zellen[1]}) hat weder Aufgabe noch akzeptiertes Risiko.`);
      }
    }
  }

  // Zweitprüfung
  const pruefDateien = alleDateien(path.join(projekt, "pruefungen")).map((f) => path.basename(f));
  if ((handoff || launch) && risiko !== null) {
    const hat14 = pruefDateien.some((f) => /^zweitpruefung-14/.test(f));
    const hatB1 = pruefDateien.some((f) => /^zweitpruefung-b1/i.test(f));
    if (risiko === 3 && sicherheit && !hat14) melde("FEHLER", "Zweitprüfung", "pruefungen/", "Risikostufe 3: Zweitprüfung von Phase 14 fehlt (zweitpruefung-14-….md).");
    if (risiko === 2 && sicherheit && !hat14) melde("HINWEIS", "Zweitprüfung", "pruefungen/", "Risikostufe 2: Zweitprüfung von Phase 14 empfohlen.");
    if (bestehend && risiko === 3 && ist && !hatB1) melde("FEHLER", "Zweitprüfung", "pruefungen/", "Risikostufe 3: Zweitprüfung der Ist-Analyse fehlt (zweitpruefung-b1-….md).");
  }

  // --- Handoff --------------------------------------------------------------
  if (handoff) pruefeHandoff({ projekt, repoRoot, melde, offeneAnnahmen, mussFunktionen, phase, fertig, risiko });

  // --- Launch ---------------------------------------------------------------
  let freigabe = null;
  if (launch) freigabe = pruefeLaunch({ projekt, repoRoot, melde, risiko });

  return { befunde, freigabe };
}

function pruefeHandoff({ projekt, repoRoot, melde, offeneAnnahmen, mussFunktionen, fertig, risiko }) {
  const ho = path.join(projekt, "handoff");
  if (!existiert(ho)) {
    melde("FEHLER", "Handoff", "handoff/", "Handoff-Ordner fehlt.");
    return;
  }
  const pflicht = ["AGENTS.md", "CLAUDE.md", "START-PROMPT.md", "docs/produkt.md", "docs/daten-und-rechte.md", "docs/architektur.md", "docs/sicherheit.md", "docs/roadmap.md", "docs/entscheidungen.md", "docs/aenderungen.md"];
  for (const d of pflicht) if (!existiert(path.join(ho, d))) melde("FEHLER", "Handoff", `handoff/${d}`, "Pflichtdatei fehlt.");
  const bedingt = [
    ["docs/flows-und-screens.md", [6, 7]],
    ["docs/design.md", [9, 10]],
    ["docs/tests.md", [19]],
    ["docs/recht.md", [16]],
    ["docs/betrieb.md", [20]],
  ];
  for (const [d, quellPhasen] of bedingt) {
    if (quellPhasen.some((n) => fertig(n)) && !existiert(path.join(ho, d))) {
      melde("FEHLER", "Handoff", `handoff/${d}`, `Fehlt, obwohl Phase ${quellPhasen.join("/")} fertig ist.`);
    }
  }

  const agents = lies(path.join(ho, "AGENTS.md")) ?? "";
  // Sicherheitsregeln vollständig?
  const regeln = lies(path.join(repoRoot, "security", "regeln-fuer-ki.md")) ?? "";
  const regelIds = [...regeln.matchAll(/^- (\d+\.\d+) /gm)].map((m) => m[1]);
  if (regelIds.length === 0) melde("WARNUNG", "Handoff", "security/regeln-fuer-ki.md", "Regelliste nicht gefunden – Vollständigkeit nicht prüfbar.");
  const fehlendeRegeln = regelIds.filter((id) => !new RegExp(`^- ${id.replace(".", "\\.")} `, "m").test(agents));
  if (agents && fehlendeRegeln.length) {
    melde("FEHLER", "Handoff", "handoff/AGENTS.md", `Sicherheitsregeln fehlen: ${fehlendeRegeln.join(", ")}.`);
  }
  if (/<!--/.test(agents)) melde("WARNUNG", "Handoff", "handoff/AGENTS.md", "Enthält noch Vorlagen-Kommentare (<!-- … -->).");

  // Offene Annahmen
  for (const id of offeneAnnahmen) {
    if (agents && !new RegExp(`\\b${id}\\b`).test(agents)) melde("FEHLER", "Handoff", "handoff/AGENTS.md", `Offene Annahme ${id} fehlt im Abschnitt „Offene Annahmen“.`);
  }

  // Muss-Funktionen in der Roadmap
  const hoRoadmap = lies(path.join(ho, "docs", "roadmap.md"));
  if (hoRoadmap) {
    for (const f of mussFunktionen) {
      const re = new RegExp(`\\bF-?${parseInt(f.slice(2), 10).toString().padStart(2, "0")}\\b`);
      if (!re.test(hoRoadmap)) melde("FEHLER", "Handoff", "handoff/docs/roadmap.md", `Muss-Funktion ${f} fehlt in der Roadmap.`);
    }
  }

  // Projektwerte in docs/sicherheit.md
  const hoSicherheit = lies(path.join(ho, "docs", "sicherheit.md"));
  if (hoSicherheit) {
    if (!/Zugriffs-Antwortstrategie/i.test(hoSicherheit)) melde("FEHLER", "Handoff", "handoff/docs/sicherheit.md", "Zugriffs-Antwortstrategie fehlt (Regel 2.4 verweist darauf).");
    if (risiko !== null && risiko >= 2 && !/rate/i.test(hoSicherheit)) melde("FEHLER", "Handoff", "handoff/docs/sicherheit.md", "Rate-Limits fehlen (Regel 4.1 verweist darauf).");
    if (!/schlüssel|secret|umgebungsvariable/i.test(hoSicherheit)) melde("WARNUNG", "Handoff", "handoff/docs/sicherheit.md", "Keine Schlüsselliste gefunden.");
  }

  // Keine Geheimnisse im Paket
  for (const datei of alleDateien(ho)) {
    const text = lies(datei);
    if (text === null) continue;
    for (const { name, re, stufe = "FEHLER" } of SECRET_MUSTER) {
      if (re.test(text)) melde(stufe, "Handoff", relativ(projekt, datei), `Möglicher geheimer Wert gefunden (${name}). Entfernen; falls echt: Schlüssel widerrufen und neu erzeugen.`);
    }
  }
}

function pruefeLaunch({ projekt, repoRoot, melde, risiko }) {
  const datei = path.join(projekt, "23-launch.md");
  const text = lies(datei);
  if (!text) {
    melde("FEHLER", "Launch", "23-launch.md", "Launch-Dokument fehlt.");
    return { status: "Nicht freigabefähig", pflicht: 0, nachweis: 0, na: 0, offen: 0, akzeptiert: 0 };
  }
  const stufeRisiko = risiko ?? 3;
  const zaehler = { pflicht: 0, nachweis: 0, na: 0, offen: 0, akzeptiert: 0 };
  const offenListe = [];

  for (const r of tabellenzeilen(text)) {
    const [box, punkt, stufe, nachweisRoh = ""] = r.zellen;
    if (!/^(☐|☑|✅|\[ \]|\[x\])$/i.test(box || "")) continue;
    const pflicht = /^alle$/i.test(stufe) || (/^\d$/.test(stufe) && parseInt(stufe, 10) <= stufeRisiko);
    const haken = /^(☑|✅|\[x\])$/i.test(box);
    const nachweis = nachweisRoh.trim();
    const schwach = SCHWACHE_NACHWEISE.has(nachweis.toLowerCase()) || nachweis.length < 4;
    const na = /^n\/a\b/i.test(nachweis);

    if (haken && schwach && !na) {
      melde("FEHLER", "Launch", `23-launch.md:${r.nr}`, `Abgehakt ohne überprüfbaren Nachweis: „${punkt}“.`);
      if (pflicht) {
        zaehler.pflicht++;
        zaehler.offen++;
        offenListe.push(punkt);
      }
      continue;
    }
    if (!pflicht) continue;
    zaehler.pflicht++;
    if (na) {
      if (nachweis.replace(/^n\/a\s*[-–:]?\s*/i, "").length < 3) melde("WARNUNG", "Launch", `23-launch.md:${r.nr}`, `„n/a“ ohne Begründung: „${punkt}“.`);
      zaehler.na++;
    } else if (haken) {
      zaehler.nachweis++;
    } else if (/\bE-\d+/.test(nachweis)) {
      zaehler.akzeptiert++;
    } else {
      zaehler.offen++;
      offenListe.push(punkt);
    }
  }

  if (zaehler.pflicht === 0) melde("FEHLER", "Launch", "23-launch.md", "Keine Checklisten-Zeilen im Format | ☐/☑ | Prüfpunkt | Stufe | Nachweis | gefunden.");
  if (zaehler.offen > 0) {
    const beispiele = offenListe.slice(0, 5).map((p) => `„${p}“`).join(", ");
    melde("FEHLER", "Launch", "23-launch.md", `${zaehler.offen} Pflichtpunkt(e) offen: ${beispiele}${offenListe.length > 5 ? " …" : ""}`);
  }

  // Deckt die Liste die Sicherheits-Checkliste ab?
  const checkliste = lies(path.join(repoRoot, "security", "checkliste.md"));
  if (checkliste) {
    const norm = (s) => s.toLowerCase().replace(/[`*_]/g, "").replace(/\s+/g, " ").trim();
    const launchNorm = norm(text);
    for (const r of tabellenzeilen(checkliste)) {
      const [box, punkt, stufe] = r.zellen;
      if (box !== "☐" || !/^\d$/.test(stufe) || parseInt(stufe, 10) > stufeRisiko) continue;
      const kern = norm(punkt).slice(0, 30);
      if (!launchNorm.includes(kern)) melde("WARNUNG", "Launch", "23-launch.md", `Sicherheits-Prüfpunkt fehlt in der Launch-Liste: „${punkt}“.`);
    }
  }

  const status = zaehler.offen > 0 ? "Nicht freigabefähig" : zaehler.akzeptiert > 0 ? "Freigabefähig mit akzeptierten Risiken" : "Freigabefähig";
  return { status, ...zaehler };
}

// ---------------------------------------------------------------------------
// Ausgabe
// ---------------------------------------------------------------------------

export function formatiere(ergebnis, { projektOrdner, modus }) {
  const reihenfolge = { FEHLER: 0, WARNUNG: 1, HINWEIS: 2 };
  const liste = [...ergebnis.befunde].sort((a, b) => reihenfolge[a.stufe] - reihenfolge[b.stufe] || a.bereich.localeCompare(b.bereich));
  const anzahl = (s) => liste.filter((b) => b.stufe === s).length;
  const zeilen = [];
  zeilen.push(`idea-to-app · Projektprüfung (${modus}) · ${projektOrdner} · ${new Date().toISOString().slice(0, 10)}`);
  zeilen.push("".padEnd(72, "─"));
  if (liste.length === 0) zeilen.push("Keine Befunde.");
  for (const b of liste) {
    const symbol = b.stufe === "FEHLER" ? "✖" : b.stufe === "WARNUNG" ? "▲" : "•";
    zeilen.push(`${symbol} ${b.stufe.padEnd(7)} [${b.bereich}] ${b.datei}`);
    zeilen.push(`    ${b.text}`);
  }
  zeilen.push("".padEnd(72, "─"));
  zeilen.push(`FEHLER: ${anzahl("FEHLER")} · WARNUNGEN: ${anzahl("WARNUNG")} · HINWEISE: ${anzahl("HINWEIS")}`);
  if (ergebnis.freigabe) {
    const f = ergebnis.freigabe;
    zeilen.push(`Launch-Pflichtpunkte: ${f.pflicht} · mit Nachweis: ${f.nachweis} · n/a: ${f.na} · akzeptiert: ${f.akzeptiert} · offen: ${f.offen}`);
    zeilen.push(`Freigabestatus: ${f.status}`);
  }
  if (anzahl("FEHLER") > 0 && modus.includes("handoff")) zeilen.push("→ Gate von Phase 22 erst öffnen, wenn alle FEHLER behoben oder als Risiko (E-…) akzeptiert sind.");
  return zeilen.join("\n");
}

function hauptprogramm(argv) {
  const args = argv.slice(2);
  const ordner = args.find((a) => !a.startsWith("--"));
  if (!ordner || args.includes("--hilfe") || args.includes("--help")) {
    console.log("Aufruf: node scripts/pruefe-projekt.mjs projekte/<slug> [--handoff] [--launch] [--bericht] [--json]");
    return ordner ? 0 : 2;
  }
  const handoff = args.includes("--handoff");
  const launch = args.includes("--launch");
  const ergebnis = pruefeProjekt(ordner, { handoff, launch });
  const modus = [handoff && "handoff", launch && "launch"].filter(Boolean).join("+") || "allgemein";

  if (args.includes("--json")) {
    console.log(JSON.stringify({ modus, ...ergebnis }, null, 2));
  } else {
    const text = formatiere(ergebnis, { projektOrdner: ordner, modus });
    console.log(text);
    if (args.includes("--bericht")) {
      const ziel = path.join(path.resolve(ordner), "pruefungen");
      fs.mkdirSync(ziel, { recursive: true });
      const datei = path.join(ziel, `pruefung-${modus}-${new Date().toISOString().slice(0, 10)}.txt`);
      fs.writeFileSync(datei, text + "\n", "utf8");
      console.log(`Bericht gespeichert: ${datei}`);
    }
  }
  return ergebnis.befunde.some((b) => b.stufe === "FEHLER") ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  process.exitCode = hauptprogramm(process.argv);
}
