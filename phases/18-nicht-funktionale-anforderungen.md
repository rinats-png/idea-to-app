# Phase 18 – Performance, Offline & Benachrichtigungen

> Kurz: Wie schnell, zuverlässig und sparsam muss die App sein?

| | |
|---|---|
| **Ziel** | Messbare Qualitätsziele für Geschwindigkeit, Offline, Benachrichtigungen, Geräte |
| **Ergebnis** | `projekte/<slug>/18-qualitaetsziele.md` |
| **Visual** | Tabelle mit Zielwerten |
| **Dauer** | ca. 10 Minuten |
| **Überspringen** | Lite-Modus (dann Standardwerte im Handoff) |

## Für Einsteiger erklärt

Neben dem, **was** die App kann (Funktionen), gibt es Anforderungen daran, **wie gut** sie es kann: Wie schnell lädt sie? Funktioniert sie im Funkloch? Leert sie den Akku? Schickt sie Benachrichtigungen? Solche Punkte heißen „nicht-funktionale Anforderungen“. Wenn man sie nicht festlegt, werden sie beim Bauen vergessen.

## Fragen

**Q1 – Auf welchen Geräten muss die App gut laufen?**
- a) Aktuelle Smartphones
- b) Auch ältere / günstige Smartphones **(Empfehlung, wenn Zielgruppe breit ist)**
- c) Vor allem Desktop / Laptop
- d) Tablets

**Q2 – Offline-Verhalten** (aus Phase 11 bestätigen): Was genau muss ohne Internet gehen?

**Q3 – Soll die App Benachrichtigungen schicken?**
- a) Nein
- b) Ja, Push-Benachrichtigungen (Erinnerungen, Neuigkeiten)
- c) Ja, per E-Mail
- d) Beides
→ Wenn ja: Wofür genau, wie oft maximal, kann der Nutzer sie einzeln abschalten?

**Q4 – Wie viele Nutzer erwartest du im ersten Jahr ungefähr?** (Beeinflusst, ob Skalierung jetzt ein Thema ist – meist nicht.)

## Was die KI selbst ergänzen soll

Standard-Zielwerte (anpassbar):

| Ziel | Standardwert |
|---|---|
| Erste Anzeige (Web, mobiles Netz) | sichtbarer Inhalt < 2,5 s (Largest Contentful Paint) |
| Reaktion auf Eingaben | < 200 ms (Interaction to Next Paint) |
| Layout springt nicht | Cumulative Layout Shift < 0,1 |
| Typische API-Antwort | < 500 ms |
| Lighthouse-Score (Web) | Performance und Accessibility ≥ 90 |
| App-/Bundle-Größe | so klein wie möglich; Bilder komprimiert, Lazy Loading |
| Verfügbarkeit | Best Effort beim MVP; Ausfall < 1 h tolerierbar `[ANNAHME]` |

- **Offline-Konzept**: was gecacht wird, wie Konflikte gelöst werden (z. B. „letzte Änderung gewinnt“ oder Nachfrage beim Nutzer), wie der Nutzer sieht, ob alles synchronisiert ist.
- **Benachrichtigungen**: Nur nach Zustimmung, sparsam, einzeln abschaltbar, mit Ruhezeiten.
- **Skalierung**: Ehrlich sagen, wenn sie für den MVP kein Thema ist („Für 500 Nutzer reicht die Gratis-Stufe; wir optimieren, wenn Zahlen es erfordern.“).

## Missbrauchs- und Sicherheitscheck

- **Push- und E-Mail-Texte** enthalten keine sensiblen Inhalte (Sperrbildschirm!). Beispiel: nicht „Dein Blutdruckwert ist hoch“, sondern „Du hast eine neue Erinnerung“.
- Offline gespeicherte Daten sind auf dem Gerät für andere Apps oder Personen mit Gerätezugriff ggf. lesbar → Phase 14 H.
- Push-Tokens sind personenbezogen → Datenschutz (Phase 16).
- E-Mail-Versand: SPF, DKIM, DMARC beim Absender einrichten (sonst Spam-Ordner und Fälschungsgefahr).

## Ergebnis-Dokument `18-qualitaetsziele.md`

```markdown
# Qualitätsziele

## Geräte & Plattformen
…

## Performance-Ziele
| Ziel | Wert | Messung |
|---|---|---|

## Offline
…

## Benachrichtigungen
| Anlass | Kanal | Häufigkeit | Abschaltbar | Text-Beispiel |
|---|---|---|---|---|

## Skalierung
…
```

## Definition of Done
- [ ] Zielgeräte und Performance-Ziele festgelegt
- [ ] Offline-Konzept (falls nötig)
- [ ] Benachrichtigungen mit Opt-in und neutralen Texten

→ **Standard-Gate**
