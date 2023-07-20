# Aufgabe: Blogpost validieren

Wir haben bereits gesehen, wie wir eine Validierung für eine Benutzerregistrierung einrichten können.

Jetzt dürft ihr ein ähnliches Schema für einen Blogpost erstellen. 

1. Das Schema soll `blogPost-schema` genannt werden und folgende Eingaben überprüfen:
    - `title`: Der Titel des Blogposts. Er soll mindestens 5 und höchstens 100 Zeichen lang sein.
    - `content`: Der Inhalt des Blogposts. Er soll mindestens 10 Zeichen lang sein. Sonderzeichen wie `<` und `>` sollen maskiert werden.
    - `authorId`: Die ID des Autors. Sie soll eine Zahl sein und genau 8 Zeichen lang sein.
    - `publishDate`: Das Datum, an dem der Blogpost veröffentlicht wurde. Es soll ein valides Datum sein.
    - `isVisible`: Ein Boolean-Wert, der angibt, ob der Blogpost öffentlich sichtbar ist oder nicht. Es soll geprüft werden, ob es sich um einen Boolean-Wert handelt.
    -  `tags`: Ein Array, das die Tags des Blogposts enthält. Es soll geprüft werden, ob es sich tatsächlich um ein Array handelt. BONUS: Überprüfe zusätzlich, ob jedes Element im Array ein String ist.
    - `comments`: Ein Array, das die Kommentare zum Blogpost enthält.  BONUS: Jeder Kommentar soll mindestens 1 und höchstens 500 Zeichen lang sein. Außerdem soll jeder Kommentar die ID des Benutzers enthalten, der ihn verfasst hat. Diese ID soll eine Zahl sein und genau 8 Zeichen lang.

**Infos**
- Für die Bonusaufgaben braucht ihr wahrscheinlich eine `custom` Funktion, ähnlich wie bei mongoose. Mehr Infos findest du dazu hier: https://express-validator.github.io/docs/guides/customizing/
- benutzt auch `trim()` an Stellen, an denen es Sinn macht

2. Nachdem ihr das Schema erstellt habt, erstellt einen neuen Endpoint: `app.post("/blogpost", ...)`. Dort sollen die Eingaben entsprechend eurem Schema validiert werden.

Vergeßt nicht, hilfreiche Fehlermeldungen hinzuzufügen, falls die Validierung fehlschlägt!

**Hilfe:**
- https://express-validator.github.io/docs 
	- allgemeine Infos zur Verwendung von `express-validator`
- [https://github.com/validatorjs/validator.js](https://github.com/validatorjs/validator.js)
	- Übersicht über Funktionen, die auch im `express-validator` verwendet werden können
- unser vorheriger Code


**Mögliche Vorgehensweise**

- kopiert den zuvor erstellen code in dieses Repository
- neue Datei im `schema` Ordner erstellen und dort das express-validator schema erstellen
- in `server.js` neue Route registrieren und in diese folgendes hinzufügen: 
	- euere `blogPost-schema` middleware, 
	- die `handleRequest` middleware und 
	- die middleware, die letztlich die Antwort an den Client schickt
- ausprobieren mit thunder client oder Ähnlichem
