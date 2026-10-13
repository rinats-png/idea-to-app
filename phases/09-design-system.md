# Phase 9 – Design-System

> Kurz: Farben, Schriften und Bausteine – damit die App überall gleich aussieht.

| | |
|---|---|
| **Ziel** | Farbpalette, Typografie, Abstände, Komponenten, Tonalität |
| **Ergebnis** | `projekte/<slug>/09-design.md` + `mockups/style-tile.html` |
| **Visual** | Style-Tile (Basis: `templates/style-tile.html`); 1–2 Mockups in Farbe |
| **Dauer** | ca. 15–20 Minuten |
| **Überspringen** | Lite-Modus (dann Standard-Design des gewählten UI-Frameworks) |

## Für Einsteiger erklärt

Ein **Design-System** ist ein kleines Regelwerk: Welche Farben, welche Schriften, wie sehen Buttons aus, wie redet die App mit dem Nutzer? Das sorgt dafür, dass die KI beim Bauen nicht auf jeder Seite etwas anderes erfindet. Ein **Style-Tile** ist eine Seite, auf der alles auf einen Blick zu sehen ist.

## Fragen

**Q1 – Gibt es bereits Farben, ein Logo oder eine Marke, an die wir uns halten müssen?**

**Q2 – Welche Grundstimmung?** (Aus Phase 8 übernehmen und bestätigen lassen.) Die KI schlägt **2 Paletten** vor (je Primär-, Akzent-, Hintergrund-, Text-, Erfolgs-, Warn-, Fehlerfarbe).

**Q3 – Hell, dunkel oder beides?**
- a) Nur hell
- b) Nur dunkel
- c) Beides, folgt der Systemeinstellung **(Empfehlung)**

**Q4 – Wie soll die App „sprechen“?**
- a) Du, locker
- b) Du, sachlich
- c) Sie, förmlich

## Was die KI selbst ergänzen soll

- **Kontrast prüfen**: Textfarbe auf Hintergrund mind. **4,5:1** (normaler Text), 3:1 für großen Text und Bedienelemente (WCAG AA). Nenne die Kontrastwerte. Wenn eine Wunschfarbe durchfällt: angepasste Variante vorschlagen.
- Farbe nie als **einzige** Information (z. B. Fehler zusätzlich mit Icon/Text).
- Typografie: max. 2 Schriftfamilien; Systemschrift oder frei lizenzierte Schrift (z. B. über Google Fonts lokal eingebunden – nicht vom Google-Server laden, siehe Phase 16).
- Abstandsraster (z. B. 4 / 8 px), Eckenradius, Schatten.
- Komponentenliste: Button (primär/sekundär/gefährlich), Eingabefeld, Karte, Liste, Dialog, Toast/Hinweis, Ladeanzeige, Leerzustand.
- **Design-Tokens** als Tabelle (Name → Wert), damit sie 1:1 in Code übertragbar sind.
- Tonalität mit 3 Beispielsätzen (Erfolg, Fehler, Leerzustand).

## Missbrauchs- und Sicherheitscheck

- **Gefährliche Aktionen** (Löschen, Bezahlen, Teilen) haben eine eigene, eindeutige Gestaltung und eine Bestätigung.
- Keine Gestaltung, die Nutzer zu Zustimmungen drängt („Dark Patterns“, z. B. versteckter „Ablehnen“-Button beim Cookie-Banner) – das ist auch rechtlich problematisch.

## Ergebnis-Dokument `09-design.md`

```markdown
# Design-System

## Design-Tokens
| Token | Hell | Dunkel | Verwendung |
|---|---|---|---|
| color-primary | #… | #… | Hauptaktionen |
| color-text | #… | #… | Fließtext |
| … |

## Kontrastprüfung
| Kombination | Verhältnis | WCAG AA |
|---|---|---|

## Typografie
…

## Abstände & Formen
…

## Komponenten
…

## Tonalität
- Ansprache: …
- Beispiele: …
```

## Definition of Done
- [ ] Palette gewählt, Kontraste geprüft
- [ ] Tokens als Tabelle
- [ ] Style-Tile erstellt und freigegeben
- [ ] Mindestens ein Haupt-Screen in Farbe gezeigt

→ **Standard-Gate**
