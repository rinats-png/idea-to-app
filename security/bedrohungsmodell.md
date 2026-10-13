# Bedrohungsmodell – einfach erklärt

Ein Bedrohungsmodell beantwortet vier Fragen:

1. **Was bauen wir?** (Datenfluss: Wer schickt welche Daten wohin?)
2. **Was kann schiefgehen?**
3. **Was tun wir dagegen?**
4. **Haben wir gut genug gearbeitet?** (Tests, Checkliste)

Man muss dafür kein Experte sein. Es reicht, die App aus Sicht verschiedener „Angreifer“ zu betrachten.

## Schritt 1 – Was ist wertvoll?

Aus der Datenklassifizierung (Phase 11): Welche Daten oder Funktionen würden Schaden anrichten, wenn sie in falsche Hände geraten oder missbraucht werden?

Beispiele: Nutzerkonten, private Notizen, Gesundheitswerte, Fotos, E-Mail-Liste, Admin-Zugang, Zahlungsfunktion, teure KI-Schnittstelle.

## Schritt 2 – Wer könnte angreifen?

| Angreifer | Typisches Vorgehen |
|---|---|
| **Automatisierte Bots** | Passwörter durchprobieren, Spam-Registrierungen, bekannte Lücken scannen |
| **Neugieriger Nutzer** | IDs in der URL ändern, Anfragen im Browser verändern, versteckte Funktionen suchen |
| **Bekannte Person eines Nutzers** (Ex-Partner, Kollege) | Kennt E-Mail, rät Passwort, nutzt Passwort-Reset, hat kurz Zugriff aufs Handy |
| **Spammer / Betrüger** | Nutzt Formulare, Einladungen oder E-Mail-Versand der App für eigene Zwecke |
| **Kostentreiber** | Ruft teure Funktionen massenhaft auf (Denial of Wallet) |
| **Insider** | Admin oder Helfer mit zu vielen Rechten |

## Schritt 3 – Was kann schiefgehen? (STRIDE, vereinfacht)

| Buchstabe | Bedeutung | Frage für deine App |
|---|---|---|
| **S**poofing | Sich als jemand anderes ausgeben | Kann jemand ein fremdes Konto übernehmen? |
| **T**ampering | Daten manipulieren | Kann jemand fremde Daten oder Preise ändern? |
| **R**epudiation | Abstreiten | Können wir nachvollziehen, wer eine kritische Aktion ausgeführt hat? |
| **I**nformation Disclosure | Daten preisgeben | Kann jemand fremde Daten sehen (IDs, Listen, Dateien, Fehlermeldungen, Logs)? |
| **D**enial of Service | Lahmlegen | Kann jemand die App überlasten oder Konten sperren oder hohe Kosten erzeugen? |
| **E**levation of Privilege | Mehr Rechte erlangen | Kann ein Nutzer Admin-Funktionen nutzen? |

## Schritt 4 – Tabelle ausfüllen

| # | Was ist wertvoll? | Wer? | Wie? (STRIDE) | Folge | Wahrscheinlichkeit (h/m/n) | Gegenmaßnahme | Test |
|---|---|---|---|---|---|---|---|
| 1 | Private Einträge | Neugieriger Nutzer | ID in URL ändern (I) | Datenleck | h | Besitzprüfung + RLS | T-SEC-01 |
| 2 | Konten | Bots | Passwörter durchprobieren (S) | Kontoübernahme | h | Rate Limit, geleakte Passwörter sperren, 2FA | T-SEC-05 |
| 3 | KI-Funktion | Kostentreiber | Massenaufrufe (D) | hohe Rechnung | m | Limit pro Nutzer + Budget-Grenze | T-SEC-07 |
| 4 | Admin-Rechte | Nutzer | `role: admin` mitschicken (E) | Vollzugriff | m | Allowlist, Rolle nur serverseitig | T-SEC-03 |
| 5 | Konten | Bekannte Person | Passwort-Reset-Link abfangen/raten (S) | Kontoübernahme | m | Einmal-Token, kurze Laufzeit, Benachrichtigung | T-SEC-06 |

## Schritt 5 – Prüfen

Jede Zeile braucht eine Gegenmaßnahme **und** möglichst einen Test (Phase 19). Zeilen ohne Gegenmaßnahme kommen in „Bewusst akzeptierte Risiken“ mit Begründung.
