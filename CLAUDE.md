# Lernregal

Statische Website auf GitHub Pages: https://arshayan-g1g.github.io/Lernregal./
`index.html` ist das Regal (Module nach Fach sortiert), die Module liegen als eigene HTML-Dateien in `module/`.
Kein Build, kein Framework. Änderungen direkt auf `main` committen und pushen (keine Pull Requests), GitHub Pages ist nach 1–2 Minuten aktualisiert.

## Neues Modul hinzufügen

1. Das Modul als vollständige HTML-Datei in `module/` speichern.
   - Dateiname klein, ohne Leerzeichen und Umlaute, z.B. `chemie-atombau.html`.
   - Die Datei muss mit `<!doctype html>` und einem `<head>` mit `<meta charset="utf-8">` und Viewport-Meta beginnen. Wurde das Modul als Claude-Artifact geschrieben (Datei beginnt direkt mit `<title>`), dieses Gerüst ergänzen.
   - Die Seite muss ohne `window.claude`-Capabilities funktionieren (Fortschritt höchstens in `localStorage`).
2. In `index.html` im Array `MODULE` eine Zeile ergänzen:
   ```js
   {fach:"Chemie",titel:"Atombau",text:"Ein Satz, was drin ist.",tags:["Zusammenfassung","Übungsprüfung"],datum:"YYYY-MM-DD",datei:"module/chemie-atombau.html"},
   ```
   `fach` muss genau einem Namen aus `FAECHER` entsprechen: Biologie, Chemie, Geschichte, Französisch, Englisch, Deutsch, Mathematik, Informatik, Geografie.
3. Committen (z.B. `Modul: Atombau (Chemie)`) und auf `main` pushen.

## Modul aktualisieren

Datei in `module/` ersetzen und `datum` in `index.html` auf heute setzen.

## Modul entfernen

Zeile aus `MODULE` löschen und die Datei aus `module/` entfernen. Nur wenn der User das ausdrücklich will.

## Modul-Anfragen

Besucher können über das Formular «Modul anfragen» in `index.html` Themen wünschen. Die Anfragen gehen per Web3Forms als E-Mail an den Betreiber.
Der Schlüssel steht in `const ANFRAGE_KEY` (kein Geheimnis, darf öffentlich sein). Ist er leer, ist das Formular ausgeblendet.

## Unterstützen (Ko-fi)

`const KOFI_NAME` in `index.html` ist der Ko-fi-Benutzername (aus `ko-fi.com/NAME`). Ist er leer, sind die «Unterstützen»-Buttons ausgeblendet.
