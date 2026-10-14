# Architektur

Frontend: Vite, TypeScript, PWA. Backend und Datenbank: Supabase mit Row Level Security. Auth: Supabase Auth per E-Mail-Link (E-003). Hosting: statisch. Tests: Vitest und Playwright.

Die Vorschlagslogik (F-03) ist eine reine Funktion ohne Datenbankzugriff, damit sie mit festen Eingaben und mehreren Zeitzonen testbar ist. Zeiten: siehe E-001 und E-002; Rechnen mit Zeitzonen nur über die Zeitzonen-Datenbank der Plattform, nie von Hand.
