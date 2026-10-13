# Phase 12 – Rollen & Berechtigungen

> Kurz: Wer darf was sehen, anlegen, ändern und löschen?

| | |
|---|---|
| **Ziel** | Rollenliste und vollständige Berechtigungsmatrix |
| **Ergebnis** | `projekte/<slug>/12-berechtigungen.md` |
| **Visual** | Berechtigungsmatrix (Tabelle) |
| **Dauer** | ca. 15 Minuten |
| **Überspringen** | Ohne Nutzerkonten stark verkürzt (nur: Gibt es einen Admin-Bereich?). Lite-Modus: optional, aber **vor Veröffentlichung Pflicht** |

## Für Einsteiger erklärt

Hier verhindern wir einen der häufigsten Fehler in Apps: Jemand ändert in der Adresszeile eine Zahl – aus `/eintrag/123` wird `/eintrag/124` – und sieht plötzlich die Daten eines fremden Menschen. Fachbegriff: **IDOR** (Insecure Direct Object Reference) bzw. **BOLA**. Dagegen hilft nur eine klare Regel: **Der Server prüft bei jeder einzelnen Anfrage, ob die Daten dem angemeldeten Nutzer gehören oder er sie sehen darf.** Dafür legen wir hier fest, wer was darf.

## Fragen

**Q1 – Welche Rollen gibt es?** (Vorschlag aus Phase 3, z. B. Gast, Nutzer, Premium-Nutzer, Trainer, Admin.) Fehlt eine, ist eine überflüssig?

**Q2 – Können Nutzer Daten mit anderen teilen?**
- a) Nein, jeder sieht nur seine eigenen Daten **(am sichersten)**
- b) Ja, mit ausgewählten Personen (Einladung)
- c) Ja, per Link für jeden mit dem Link
- d) Ja, öffentlich

**Q3 – Gibt es Gruppen, Teams oder Organisationen?** (z. B. ein Verein, in dem Trainer die Daten ihrer Mitglieder sehen) – Wenn ja: Wer darf Mitglieder hinzufügen und entfernen?

**Q4 – Braucht es einen Admin-Bereich?** Was soll ein Admin können – und was ausdrücklich **nicht** (z. B. private Notizen lesen)?

**Q5 – Die KI zeigt die Berechtigungsmatrix. Passt jede Zelle?**

## Was die KI selbst ergänzen soll

- **Berechtigungsmatrix**: Zeilen = Datenobjekte × Aktion (lesen, anlegen, ändern, löschen, teilen), Spalten = Rollen. Jede Zelle: ✅ / ❌ / „nur eigene“ / „nur Gruppe“.
- Grundsätze ins Dokument schreiben:
  - **Deny by default**: Was nicht ausdrücklich erlaubt ist, ist verboten.
  - **Prüfung serverseitig**, bei jeder Anfrage – nie nur im Frontend.
  - **Rolle kommt vom Server** (aus der Sitzung / Datenbank), nie aus einem Feld, das der Client schickt.
  - **Besitz wird beim Anlegen vom Server gesetzt** (`owner_id = angemeldeter Nutzer`), nie aus dem Formular übernommen.
  - Kein Zugriff → **keine Daten** in der Antwort. Ob 404 („gibt es nicht“ – verrät nichts, Standard für private Daten) oder 403 („kein Zugriff“) zurückkommt, wird in Phase 14 als Zugriffs-Antwortstrategie festgelegt.
  - **Minimale Rechte**: Admins nur so viel wie nötig; Zugriff auf private Inhalte nur mit Begründung und Protokoll.
  - Admin-Aktionen werden **protokolliert** (Audit-Log).
- Bei Teilen-Links: zufällige, lange, nicht ratbare Tokens; widerrufbar; optional mit Ablaufdatum.
- Bei Gruppen: Was passiert, wenn jemand die Gruppe verlässt (verliert Zugriff sofort)?
- **Testfälle** formulieren, die in Phase 19 automatisiert werden (siehe `security/sicherheitstests.md`).

## Missbrauchs- und Sicherheitscheck

- Kann ein Nutzer sich **selbst zum Admin machen**, indem er ein Feld `role` mitschickt? → muss unmöglich sein (Mass Assignment).
- Kann ein Nutzer einen Datensatz **einem anderen Nutzer unterschieben** (`owner_id` ändern)? → muss unmöglich sein.
- Kann ein ehemaliges Gruppenmitglied noch zugreifen? → nein.
- Funktioniert der Zugriffsschutz auch bei **Dateien** (Bilder, PDFs)? → Dateien nur über kurzlebige, signierte Links.
- Werden in **Listen- und Such-Endpunkten** fremde Daten mitgeliefert? → Filter auf Besitz serverseitig.

## Ergebnis-Dokument `12-berechtigungen.md`

```markdown
# Rollen & Berechtigungen

## Rollen
| Rolle | Beschreibung | Wie bekommt man sie? |
|---|---|---|

## Berechtigungsmatrix
| Objekt / Aktion | Gast | Nutzer | Admin |
|---|---|---|---|
| Eintrag lesen | ❌ | nur eigene | ❌ (nur Metadaten) |
| Eintrag anlegen | ❌ | ✅ (owner = ich) | ❌ |
| Eintrag ändern | ❌ | nur eigene | ❌ |
| Eintrag löschen | ❌ | nur eigene | ✅ mit Audit-Log |
| Konto löschen | ❌ | nur eigenes | ✅ mit Audit-Log |

## Grundsätze
- Deny by default
- Serverseitige Prüfung bei jeder Anfrage
- …

## Teilen
…

## Pflicht-Testfälle (für Phase 19)
- T-SEC-01: Nutzer A ruft Eintrag von Nutzer B per ID auf → verweigert, keine Daten
- T-SEC-02: Nutzer A ändert/löscht Eintrag von B → verweigert, Daten unverändert
- T-SEC-03: Nutzer schickt `role: "admin"` beim Profil-Update bzw. legt Eintrag mit fremder `owner_id` an → wird ignoriert, Besitzer ist er selbst
- T-SEC-04: Liste/Suche liefert nie fremde Einträge
- T-SEC-10: Dateien von B sind für A nicht abrufbar (falls Dateien)
```

## Definition of Done
- [ ] Alle Rollen definiert
- [ ] Matrix vollständig (keine leeren Zellen)
- [ ] Grundsätze dokumentiert
- [ ] Pflicht-Testfälle formuliert

→ **Standard-Gate**
