# be-express-router

## Aufgabe

## PUT, DELETE und Routing
Wie wir in den ersten Aufgaben gesehen haben, gibt es Anfragen wie `GET` und `POST`, die die Funktionalität der einzelnen Endpunkte definieren. Wir werden nun `PUT` und `DELETE` hinzufügen.
  
  - Mit `PUT` wird eine bereits vorhandene Ressource aktualisiert.
  - `DELETE` löscht eine bereits vorhandene Ressource.

Wenn wir die oben genannten Anfragen für eine To Do App einführen, wird unser Code lang und wir sollten auch **Routen** hinzufügen. 
Strukturiere den Code mit Routen!


**Geschichte**: 

In der To Do App, möchten wir die Möglichkeit haben, Aufgaben in einer Liste zu aktualisieren und zu löschen. 
Zusätzlich zu den ToDos möchten wir einen weiteren Datensatz für Benutzer haben. 
Die Einführung von Benutzern bedeutet, dass wir in der Lage sein werden, mehrere Benutzer in der App zu unterstützen, die jeweils eine To-Do-Liste haben.


**TODO**:



1. Bitte erstellen Sie zwei weitere Endpunkte (Routen) für die ToDos:

   - `todos/:id` -> ein `PUT`, der eine Aufgabe basierend auf der `id` aktualisiert
   - `todos/:id` -> ein `DELETE`, das eine Aufgabe auf der Basis der `id` löscht


2. Auslagerung der Routen mit einem Router:

    - Erstelle einen Ordner namens "router".
    - In diesem Ordner erstelle eine neue Datei und lade das express.Router()-Modul.
    - Lasse die vorhandenen Routen in dieser neuen Datei und organisiere sie entsprechend.
    - Exportiere den Router aus dieser Datei.
    - Importiere den Router in der server.js-Datei.
    - Verwende den importierten Router, um alle Routen zu einer einzigen Unterseite zu verbinden.

Durch die Auslagerung der Routen mit einem Router wird der Code strukturiert und übersichtlich gehalten. Es ermöglicht eine bessere Organisation und Wartbarkeit des Codes, insbesondere wenn das Projekt mit mehreren Endpunkten und Routen wächst.


3. Bitte erstellen Sie Endpunkte für die `users`. Ein Benutzer sollte einen Vornamen, einen Nachnamen, eine E-Mail, ein Passwort und ein id enthalten.
      Benutzer Modell
      - `users` -> `GET` Abrufen aller Benutzer
      - `users/:id` -> `GET` Abrufen eines bestimmten Benutzers basierend auf der `id`
      - `users` -> `POST` Hinzufügen eines neuen Benutzers
      - `users/:id` -> `PUT` Aktualisieren eines bestimmten Benutzers basierend auf der `id`
      - `users/:id` -> `DELETE` Löschen eines bestimmten Benutzers basierend auf der `id`

**Verwenden Sie die Mock-Daten und loggen Sie sie nach jeder Operation, um sicherzustellen, dass die Funktionen korrekt funktionieren!**

### Bonus
1. Sobald wir sicher sind, dass alle oben genannten Funktionen wie gewünscht funktionieren, erweitern Sie Fehlerbehandling, um die neuen möglichen Fehler zu berücksichtigen.  
2. Refaktorieren Sie Ihre Fehlerbehandlung mit Hilfe des Pakets [`http-errors`] (https://www.npmjs.com/package/http-errors). Sie können es mit npm installieren.



