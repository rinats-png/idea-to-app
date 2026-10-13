# Sicherheit in idea-to-app

Dieser Ordner ist das Sicherheits-Nachschlagewerk des Repositories. Die KI nutzt ihn in Phase 14, 19, 22 und 23 – und in jeder Phase beim „Missbrauchs- und Sicherheitscheck“.

| Datei | Inhalt | Für wen |
|---|---|---|
| [`regeln-fuer-ki.md`](regeln-fuer-ki.md) | Nicht verhandelbare Regeln (ohne Zahlen), die wörtlich in den Build-Handoff übernommen werden | Coding-Tool |
| [`standardwerte.md`](standardwerte.md) | **Einzige Stelle für konkrete Werte**: Hash-Parameter, Passwortlängen, Token-Laufzeiten, Sitzungen, Rate-Limits, Größenlimits, Header, Zugriffs-Antwortstrategie | KI in Phase 14 |
| [`bedrohungsmodell.md`](bedrohungsmodell.md) | Einfache Anleitung für ein Bedrohungsmodell | Nutzer + KI |
| [`checkliste.md`](checkliste.md) | Prüfliste vor dem Launch, nach Risikostufe, mit Nachweis-Pflicht | Nutzer + KI |
| [`sicherheitstests.md`](sicherheitstests.md) | Konkrete automatisierte Testfälle mit Beispielcode | Coding-Tool |
| [`stack-hinweise.md`](stack-hinweise.md) | Konkrete Umsetzung für verbreitete Stacks (Supabase, Firebase, eigenes Backend) | Coding-Tool |

## Warum so viel Aufwand?

Die häufigsten Sicherheitsprobleme in neuen Apps sind keine raffinierten Angriffe, sondern **vergessene Grundregeln**:

1. **Fremde Daten über geänderte IDs abrufbar** (IDOR/BOLA) – die Anwendung prüft nicht, wem ein Datensatz gehört.
2. **Geheime Schlüssel im Frontend** – jeder kann sie im Browser oder im App-Paket auslesen.
3. **Datenbank ohne Zugriffsregeln** – z. B. Supabase ohne Row Level Security oder Firebase im Testmodus.
4. **Unbegrenzte Anfragen** – Passwörter durchprobieren, Spam, hohe Rechnungen durch teure APIs.
5. **Ungeprüfte Eingaben** – XSS, SQL-Injection, gefährliche Uploads.
6. **Selbstgebaute Logins** mit schwachem Passwort-Hashing oder unsicherem Passwort-Reset.

KI-Coding-Tools machen genau diese Fehler häufig, wenn man die Regeln nicht ausdrücklich vorgibt und testet. Deshalb steht Sicherheit hier an drei Stellen:

```
früh  ─► Datenklassifizierung (Phase 11) + Rollenmatrix (Phase 12) + Konzept (Phase 14)
beim Bauen ─► verbindliche Regeln im Handoff (Phase 22)
am Ende ─► automatisierte Tests (Phase 19) + Checkliste (Phase 23)
```

## Risikostufen

| Stufe | Beispiel | Mindeststandard |
|---|---|---|
| 1 | Rechner, Info-App ohne Konten | Basisregeln, Checkliste Teil „Alle“ |
| 2 | App mit Konten und eigenen Inhalten | + OWASP ASVS Level 1 |
| 3 | Gesundheit, Finanzen, Kinder, Standort, Zahlungen | + OWASP ASVS Level 2, externe Prüfung empfohlen |

## Grundlagen und Quellen

Die Regeln orientieren sich an etablierten, frei verfügbaren Standards. Bei Detailfragen sind diese die Referenz (jeweils aktuelle Version verwenden):

- **OWASP Top 10** – die häufigsten Risiken in Webanwendungen
- **OWASP API Security Top 10** – speziell für Schnittstellen (u. a. BOLA)
- **OWASP ASVS** (Application Security Verification Standard) – prüfbare Anforderungen in Stufen
- **OWASP Cheat Sheet Series** – u. a. „Password Storage“, „Authentication“, „Session Management“, „Authorization“, „Forgot Password“
- **OWASP MASVS** – für native Mobile-Apps
- **NIST SP 800-63B** – Richtlinie für Passwörter und Authentisierung
- **BSI IT-Grundschutz** – deutsche Grundlagen

## Ehrlicher Hinweis

Dieses Material macht keine App automatisch sicher. Es sorgt dafür, dass die wichtigsten Regeln **festgelegt, umgesetzt und geprüft** werden. Für Apps mit sensiblen Daten (Stufe 3) ersetzt es keine Prüfung durch Fachleute.
