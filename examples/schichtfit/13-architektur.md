# Tech-Stack & Architektur

| Bereich | Technologie | Grund |
|---|---|---|
| Frontend | Vite, TypeScript, PWA | Läuft auf dem Handy ohne App-Store |
| Backend / Datenbank | Supabase (Postgres mit Row Level Security) | Fertige Konten und Zugriffsregeln |
| Auth | Login-Anbieter von Supabase (E-Mail-Link) | E-003 |
| Hosting | Statisches Hosting für das Frontend | Einfach, günstig |
| Tests | Vitest für Logik, Playwright für Abläufe | Verbreitet |

**Machbarkeit:** Die Ampel aus Phase 5 ist abgearbeitet: F-03 (🟡) wird als reine, gut testbare Funktion umgesetzt; F-04 (🟡) ist wegen der Einschränkungen von Push auf iPhones nach hinten gestellt (E-004).

Lieferkette: Abhängigkeiten sparsam, Paketnamen prüfen (Regel 9.5), Sperrdatei einchecken.
