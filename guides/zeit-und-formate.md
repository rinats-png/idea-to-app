# Zeit, Zeitzonen und Formate

> Kurz: Zeit ist die häufigste unterschätzte Fehlerquelle in Apps. Dieser Guide sagt, wie Zeiten gespeichert, angezeigt und getestet werden – damit Termine nicht plötzlich eine Stunde verrutschen.

Wird gebraucht in: Phase 10 (Sprachen & Formate), Phase 11 (Daten), Phase 18 (Qualitätsziele), Phase 19 (Tests).

## Für Einsteiger erklärt

Ein Zeitpunkt ist nicht dasselbe wie eine Uhrzeit an der Wand. „Montag 22:00 Uhr“ kann in Frankfurt etwas anderes bedeuten als in London, und zweimal im Jahr wird die Uhr umgestellt: Dann gibt es eine Stunde, die es nie gab, und eine, die doppelt vorkommt. Apps, die das ignorieren, zeigen Dienstpläne, Erinnerungen und Abrechnungen falsch an – meist erst, wenn jemand es bemerkt.

## Die zwei Arten von Zeit

| Art | Beispiel | So speichern | Warum |
|---|---|---|---|
| **Zeitpunkt** (ein Moment, der für alle gleich ist) | „Eintrag wurde erstellt“, „Zahlung ging ein“ | In **UTC** (Weltzeit) mit Zeitzonen-Angabe, in der Datenbank als Zeitstempel mit Zeitzone | Eindeutig, sortierbar, unabhängig vom Standort |
| **Wandzeit** (eine Uhrzeit an einem Ort) | „Schicht beginnt 22:00 in Frankfurt“, „Erinnerung jeden Morgen um 7:00“ | **Lokale Uhrzeit + Name der Zeitzone** (z. B. `Europe/Berlin`), nicht nur UTC | Die Uhrzeit soll auch nach einer Zeitumstellung 22:00 bleiben |
| **Kalendertag** (ein Datum ohne Uhrzeit) | „Geburtstag“, „Dienstplan für den 3. März“ | Als **Datum ohne Zeit** speichern | Sonst rutscht der Tag beim Umrechnen in eine andere Zeitzone |

Faustregel: Was **passiert ist**, kommt in UTC. Was **geplant ist und an einer Uhrzeit hängt**, kommt als lokale Zeit mit Zeitzone. Die Anzeige rechnet immer in die Zeitzone des Nutzers um.

## Typische Fallen

1. **Zeitumstellung.** In der Nacht der Umstellung dauert eine „8-Stunden-Schicht“ real 7 oder 9 Stunden. Dauern daher nie als „Ende minus Beginn in Stunden“ aus Wandzeiten rechnen, sondern aus Zeitpunkten.
2. **Mitternacht.** Eine Schicht von 22:00 bis 06:00 gehört zu **dem Tag, an dem sie beginnt**. Lege vorher fest, wie Auswertungen („Stunden pro Tag“, „Nachtarbeit“) solche Schichten zuordnen, und schreibe es als Entscheidung `E-…` auf.
3. **Eigene Zeitzonen-Regeln.** Rechne nie selbst mit „+1 Stunde im Sommer“. Die Regeln ändern sich und unterscheiden sich je Land. Nutze die Zeitzonen-Datenbank der Plattform (IANA-Namen wie `Europe/Berlin`) und die eingebauten Datums-Funktionen der Sprache bzw. eine gepflegte Bibliothek.
4. **Gerätezeit ist kein Beweis.** Die Uhr des Geräts kann falsch gehen oder manipuliert sein. Für alles, was zählt (Fristen, Abrechnung, Sicherheit, Ablauf von Tokens), gilt die **Serverzeit**.
5. **Wochenanfang.** In Deutschland beginnt die Woche üblicherweise am Montag, in anderen Ländern am Sonntag. Lege fest, was in deiner App gilt, und mache es einstellbar, wenn die Zielgruppe international ist. Für Kalenderwochen gibt es die Norm ISO 8601.
6. **Reisen und Umziehen.** Zieht ein Nutzer in eine andere Zeitzone: Gilt der Plan weiter „zur lokalen Zeit“ oder „zur alten Zeit“? Auch das ist eine Produktentscheidung.
7. **Zeitbezogene Sicherheit.** Ablaufzeiten von Tokens, Einmalcodes und Sitzungen werden in UTC auf dem Server gerechnet; die konkreten Laufzeiten stehen in `security/standardwerte.md`.

## Formate

- **Datum, Zahl und Währung** nie von Hand zusammensetzen. Nutze die Formatierungs-Funktionen der Plattform für die Sprache und Region des Nutzers (in Browsern z. B. die eingebauten Internationalisierungs-Funktionen). So werden „1.234,56“ und „1,234.56“ automatisch richtig.
- **Geld** nie als Kommazahl speichern. Speichere den Betrag in der kleinsten Einheit als ganze Zahl (Cent) plus Währungscode; Rundungsregeln legst du einmal fest.
- **Namen und Texte** immer als Unicode (UTF-8) behandeln. Umlaute, Akzente und Schriftzeichen anderer Sprachen müssen ohne Fehler gespeichert, sortiert und gesucht werden können.
- **Sortierung** je Sprache: „Ä“ sortiert im Deutschen bei „A“, nicht hinter „Z“. Nutze sprachabhängiges Sortieren.
- **Einheiten** (km/Meilen, kg/lb, °C/°F) sind eine Einstellung des Nutzers, die Speicherung erfolgt in einer festen Einheit.

## Was die KI in den Phasen daraus macht

| Phase | Ergebnis |
|---|---|
| 10 | Liste der unterstützten Sprachen und Regionen; Datums-, Zahlen- und Währungsformat; Wochenanfang als Entscheidung |
| 11 | Pro Datenfeld mit Zeitbezug: Zeitpunkt, Wandzeit oder Kalendertag; Zeitzone des Nutzers als gespeichertes Feld |
| 18 | Zeitbezogene Qualitätsziele (z. B. Erinnerungen zur richtigen lokalen Zeit, auch nach Umstellung) |
| 19 | Pflicht-Testfälle (siehe unten) |

## Pflicht-Testfälle für Apps mit Zeitbezug

1. Ein Eintrag um 23:30 am Monatsletzten wird dem richtigen Monat zugeordnet (Nutzer und Server in verschiedenen Zeitzonen).
2. Eine wiederkehrende Erinnerung „täglich 07:00“ kommt am Tag der Umstellung auf Sommerzeit **und** am Tag der Umstellung auf Winterzeit genau einmal und um 07:00 Ortszeit.
3. Eine Schicht über Mitternacht wird dem Starttag zugeordnet; ihre Dauer in der Nacht der Umstellung stimmt.
4. Ein Termin in der Stunde, die bei der Umstellung nicht existiert, wird nicht stillschweigend verschluckt, sondern nach einer festgelegten Regel verschoben.
5. Ein Nutzer ändert seine Zeitzone: bereits gespeicherte Zeitpunkte bleiben unverändert, die Anzeige passt sich an.
6. Zahlen und Währungen erscheinen in den Formaten jeder unterstützten Sprache korrekt.
7. Ein Server mit abweichender Systemzeitzone liefert dieselben Ergebnisse wie ein Server in UTC.

## Missbrauchs- und Sicherheitscheck

- Verlässt sich eine Fristprüfung (Probezeit, Gutschein, Einmalcode) auf die Gerätezeit? → Serverzeit verwenden.
- Können Nutzer durch Umstellen der Gerätezeit etwas freischalten oder Fristen verlängern? → serverseitig prüfen.
- Stehen genaue Zeitstempel in öffentlichen Antworten, aus denen man Gewohnheiten ableiten kann (z. B. wann jemand schläft oder zu Hause ist)? → Genauigkeit reduzieren, wenn es nicht gebraucht wird.

## Weiterführend

Diese Verweise sind Orientierung, kein Beleg für Tatsachenbehauptungen im Projekt. Wenn du daraus etwas übernimmst, trage die Quelle mit Prüfdatum in `QUELLEN.md` ein.

- IANA Time Zone Database (Quelle der Zeitzonennamen): https://www.iana.org/time-zones
- ISO 8601 (Datums- und Zeitformat, Kalenderwochen): Normtext bei der ISO, https://www.iso.org/iso-8601-date-and-time-format.html
- MDN Web Docs zur Internationalisierung in JavaScript (`Intl`): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
