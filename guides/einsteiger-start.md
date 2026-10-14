# Einstieg ohne Vorwissen

Du hast eine App-Idee, aber noch nie programmiert? Oder du hast schon eine App (vielleicht mit KI gebaut) und weißt nicht, ob sie sicher ist? Genau dafür ist idea-to-app gemacht. Diese Seite erklärt dir in fünf Minuten, was auf dich zukommt.

## Was passiert hier eigentlich?

Stell dir vor, du baust ein Haus. Bevor jemand einen Stein setzt, gibt es Gespräche mit einem Architekten: Wie viele Zimmer? Wer wohnt dort? Wie viel darf es kosten? Danach gibt es Skizzen, Pläne und eine Liste, was in welcher Reihenfolge gebaut wird.

idea-to-app macht die KI zu diesem Architekten für deine App:

1. Die KI **stellt dir Fragen** – immer nur eine auf einmal.
2. Wenn du etwas nicht weißt, **schlägt sie etwas vor** und erklärt warum.
3. Sie **schreibt alles auf** und **zeichnet Skizzen** deiner App.
4. Nach jedem Schritt fragt sie: **Weiter oder noch etwas ändern?**
5. Am Ende hast du einen **kompletten Bauplan**, den eine Coding-KI umsetzen kann – vorher wird automatisch geprüft, dass nichts fehlt.

Hast du schon eine App, liest die KI zuerst deinen Code (ohne etwas zu verändern), sagt dir ehrlich, was gut ist und wo es Probleme gibt, und plant dann mit dir die nächsten Schritte.

## Was brauche ich?

- Eine Idee (darf noch vage sein)
- Ein KI-Tool – zum Start reicht ein Chat wie Claude.ai oder ChatGPT (siehe [`tools.md`](tools.md))
- Zeit: Im **Lite-Modus** 1–2 Sitzungen, im **Voll-Modus** mehrere Sitzungen. Du kannst jederzeit pausieren. Eine ehrliche Einschätzung zu Zeit und Kosten der KI-Nutzung findest du in [`zeit-und-kosten.md`](zeit-und-kosten.md).

Du brauchst **kein** Programmierwissen, **kein** Git und **keine** Fachbegriffe. Wenn ein Begriff fällt, den du nicht kennst, schreib einfach **„erklär das“** – oder schau ins [Glossar](glossar.md).

## Die vier Befehle, die du am Anfang brauchst

| Du schreibst | Die KI … |
|---|---|
| `weiter` | geht zum nächsten Schritt |
| `erklär das` | erklärt die letzte Frage einfacher |
| `status` | zeigt, wo du gerade stehst |
| `pause` | speichert und hört auf |

Mit `hilfe` zeigt dir die KI alle weiteren Befehle, zum Beispiel:

| Du schreibst | Die KI … |
|---|---|
| `entscheide du` | trifft eine begründete Wahl für dich |
| `parkplatz: …` | merkt sich eine Idee für später |
| `zurück zu Phase 5` | springt zu einem früheren Schritt |
| `überspringen` | lässt die aktuelle Frage oder Phase aus und nennt die Folgen |
| `zusammenfassung` | fasst dein Projekt auf einer Seite zusammen |
| `prüfen` | prüft, ob im Projekt etwas fehlt oder nicht zusammenpasst |
| `zweitprüfung` | lässt das Ergebnis von einer zweiten, unabhängigen KI prüfen |
| `adaptiv` / `geführt` | schneller (weniger Fragen) bzw. wieder Schritt für Schritt |

## Wie du dich nicht blind durchklickst

Nach jeder Phase steht im Gate die Zeile **🧭 „Das hast du festgelegt“**. Lies sie, bevor du „weiter“ schreibst: Sie nennt die wichtigsten Entscheidungen der Phase. Stimmt eine nicht, sag es jetzt – später wird jede Änderung teurer. Und wenn die KI etwas tut, das sich falsch anfühlt (mehrere Fragen auf einmal, Weitermachen ohne dein „weiter“, erfundene Zahlen), hilft [`fehlersuche.md`](fehlersuche.md).

## Was ist mit Sicherheit?

Das ist der Teil, den viele unterschätzen – und genau der, bei dem KI-Tools beim Bauen die meisten Fehler machen. idea-to-app sorgt dafür, dass von Anfang an feste Regeln gelten (z. B. dass niemand die Daten anderer Nutzer sehen kann, nur weil er eine Zahl in der Adresszeile ändert). Du musst dafür kein Experte sein: Die KI schlägt sinnvolle Standards vor und erklärt sie.

**Aber ehrlich:** Ein guter Plan macht eine App nicht automatisch sicher. Er sorgt dafür, dass die richtigen Regeln gelten und geprüft werden. Wenn deine App sehr sensible Daten verarbeitet (Gesundheit, Geld, Kinder), lass sie vor dem Start von einer Fachperson prüfen.

## Und was ist mit Recht?

Die KI weist dich auf die üblichen Pflichten hin (Impressum, Datenschutzerklärung, Einwilligungen …) und bereitet Entwürfe vor. Sie ist aber **kein Anwalt**. Bei Geschäftsideen oder sensiblen Daten lohnt sich eine kurze Rechtsberatung.

## Los geht's

Wenn der Bauplan fertig ist, erklärt [`nach-der-uebergabe.md`](nach-der-uebergabe.md), wie es mit dem Coding-Tool weitergeht.

→ Wähle dein Tool in [`tools.md`](tools.md) und starte mit dem Text aus [`START.md`](../START.md) – oder in Claude Code einfach mit „Ich habe eine App-Idee“.
