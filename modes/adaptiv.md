# Modus: Adaptiv

> Für Nutzer, die schneller vorankommen wollen. Die KI füllt aus, was sie aus dem Gespräch und früheren Phasen ableiten kann, und fragt nur bei Entscheidungen, die wirklich beim Menschen liegen. Freigegeben wird in **Blöcken** statt nach jeder Phase.

## Wann sinnvoll

- Erfahrene Nutzer oder Entwickler
- Der Nutzer hat schon viel Material (Briefing, Notizen, frühere Konzepte) mitgebracht
- Bestehende App, deren Ist-Zustand in B1 schon erfasst ist

Für Einsteiger ist **Geführt** der Standard. Wählt ein Einsteiger trotzdem „adaptiv“, sag ehrlich: Es geht schneller, dafür entstehen mehr Annahmen, die er am Blockende prüfen muss.

## Blöcke

| Block | Phasen | Inhalt |
|---|---|---|
| **A Produkt** | 1–5 | Idee, Validierung, Zielgruppe, Markt, MVP |
| **B Erlebnis** | 6–10 | Flows, Screens, Mockups, Design, Barrierefreiheit |
| **C Technik & Sicherheit** | 11–15 | Daten, Rollen, Stack, Sicherheit, Integrationen |
| **D Betrieb & Recht** | 16–20 | Recht, Kosten, Qualitätsziele, Tests, Betrieb |
| **E Umsetzung** | 21–24 | Roadmap, Handoff, Launch, Wartung |

Im Lite-Modus oder bei bestehender App enthält ein Block nur die gewählten Phasen. Ein Block ohne Phasen entfällt.

## Ablauf je Block

1. **Vorab-Fragen bündeln:** Stelle zu Beginn des Blocks die **kritischen Fragen** (siehe unten) dieses Blocks, die du nicht sicher beantworten kannst – höchstens 5 pro Nachricht, als kurze Auswahlfragen mit Empfehlung. Nicht-kritische Fragen beantwortest du selbst als `[ANNAHME A-…]`.
2. **Phasen-Dokumente erstellen:** Arbeite alle Phasen des Blocks nach ihren Vorlagen ab – inkl. Visuals, Missbrauchs- und Sicherheitscheck, Definition of Done. Halte den Nutzer mit **einer Zeile pro fertiger Phase** auf dem Laufenden.
3. **Unterbrechen, wenn nötig:** Stößt du mitten im Block auf eine kritische Entscheidung, die du nicht vorhersehen konntest, frag sofort – arbeite nicht auf einer Vermutung weiter.
4. **Block-Gate** zeigen.

## Kritische Entscheidungen – immer fragen, nie selbst annehmen

| Block | Kritische Entscheidungen |
|---|---|
| A | Kernproblem und Zielgruppe · Muss-Funktionen des MVP (Liste bestätigen lassen) · Geld verdienen ja/nein |
| B | Gewählte Gestaltungsrichtung (Phase 8) · Navigationstyp |
| C | Risikostufe nach Datenklassifizierung · Teilen/Sichtbarkeit von Daten · Rollen mit Zugriff auf fremde Daten (Admin, Trainer …) · Tech-Stack · Login-Methode und 2FA · **jedes akzeptierte Sicherheitsrisiko** |
| D | Betreiber (privat/geschäftlich/dienstlich) · Tracking/Analytics · Daten außerhalb der EU · Preis und monatliche Kostenobergrenze · Reaktionszeit und akzeptabler Datenverlust (Phase 20) |
| E | Reihenfolge der Meilensteine · Launch-Strategie · jede Launch-Freigabe ohne vollständige Nachweise |

Alles, was Geld kostet, rechtliche Folgen hat, Daten anderer Menschen betrifft oder schwer rückgängig zu machen ist, gilt als kritisch – auch wenn es nicht in der Tabelle steht.

## Block-Gate

```
──────────────────────────────
✅ Block <X> – <Name>: Entwurf fertig (Phasen <n–m>)
📄 Ergebnisse: <Dateien>
🖼️ Visuals: <Dateien>
🔑 Von dir entschieden: <Liste kurz>
💡 Meine Annahmen (bitte prüfen): <A-IDs + Stichwort>
❓ Noch offen: <kurz>
📊 Fortschritt: ▓▓▓▓░░░░░░ <erledigt> von <gesamt> Phasen

Wie möchtest du weitermachen?
1️⃣ Annahmen passen – weiter zu Block <Y>
2️⃣ Einzelne Annahmen oder Inhalte ändern
3️⃣ Eine Phase dieses Blocks geführt durchgehen
4️⃣ Pause – alles ist gespeichert
──────────────────────────────
```

- Option 1 bestätigt **alle** gelisteten Annahmen des Blocks (in `PROJECT_STATE.md` auf `ja` setzen, Markierungen in den Dokumenten entfernen).
- Sind es mehr als 10 Annahmen, liste die 5 folgenreichsten zuerst und verweise auf `status` für den Rest.
- Zweitprüfung und Prüfskript gelten unverändert (`AGENTS.md` Abschnitte 14 und 15).

## Wechsel

Der Nutzer kann jederzeit `geführt` oder `adaptiv` sagen. Der Wechsel gilt ab der nächsten Phase bzw. dem nächsten Block; notiere ihn in `PROJECT_STATE.md`.
