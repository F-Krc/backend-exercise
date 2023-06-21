# be-server-middleware


Eine Übung, um das Schreiben benutzerdefinierter Middleware innerhalb eines Express.js-Servers zu üben

## Was Sie tun werden

Sie werden einen Server mit zwei Endpunkten erstellen, die beide **POST**-Anfragen annehmen.

Diese beiden Endpunkte erwarten ein JSON-Objekt mit Benutzerdaten, das mit Thunder-client übergeben werden muss.

### Beispiel für die Eingabe in Thunder-client um diese Daten zu prüfen

```json
{
  "firstName" : "steve",
  "lastName" : "stevenson",
  "age": "129",
  "fbw": "36",
  "profession" : "Musician",
  "favoriteBands" : ["Radiohead", "Nirvana", "Kings of Leon", "Tash Sultana"],
  "email" : "steve@metallica.com"
}
```

Die Endpunkte werden dann diese Daten lesen und verarbeiten.

## Aufgaben

### Aufgabe 1 - Vorbereiten

1. Initialisiere npm in deinem Projekt mit `npm init -y`
2. Installiere express.js npm package `npm i express`
3. Erstelle eine Datei `server.js`

### Aufgabe 2 - Einrichten Ihres Servers

Erstellen Sie **express.js** server in der `server.js` (das Grundgerüst mit import, app.listen usw)

### Aufgabe 3 - Erstellen des Endpunkts validateUser

Erstellen Sie einen Endpunkt, der:

1. mit **POST**-Anforderungsmethoden zum Pfad `/validateUser` reagiert



### Aufgabe 4 - erstelle eine middleware

1. Erstelle einen neuen Ordner: `middleware`
2. Erstelle eine **middleware function** die prüft, ob das Objekt **values** für die Schlüssel enthält `firstName`, `lastName`, `age`, `fbw` und `email`
3. Erstelle eine **middleware function** die prüft, ob der Nutzer über **18** Jahre alt ist
4. Wenn eine der middlewares fehlschlägt, sollten Sie eine Antwort mit einer **Fehlermeldung** senden, die angibt, warum der Benutzer nicht gültig ist

    #### Beispiel einer Fehlerreaktion
    ```json
    {
      "message": "We can not validate your user. They are below 18 years of age"
    }
    ```

### Aufgabe 5 - Anwendung der middleware

1. Wenden Sie die gesamte Middleware, die Sie in **Aufgabe 4** erstellt haben, auf den Endpunkt **validateUser** in der `server.js` an

2. Erstelle einen Ordner `controllers` und schreibe eine `userControllers.js` mit der Erfolgsmeldung
3. Wenn die Anfrage die Middleware erfolgreich durchläuft, sollte **validateUser** eine Antwort mit einer **Erfolgsmeldung** im Thunder-clien senden

   #### Beispiel für eine erfolgreiche Antwort
    ```json
    {
      "message" : "This user is valid!"
    }
    ```

### Aufgabe 6 - Erstellen des Endpunkts sanitizeUser

Erstellen Sie einen Endpunkt, der:

1. Reagiert mit **POST**-Anforderungsmethoden auf den Pfad `/sanitizeUser`


### Aufgabe 7 - Erstelle eine middleware

1. Erstelle eine **middleware function** die `firstName` und `lastName` mit einem Großbuchstaben beginnen lässt
2. Erstelle eine **middleware function** die das `favoriteBands` array alphabetisch sortiert
3. Erstelle eine **middleware function** die `age` und `fbw` zu Zahlen umwandelt

### Aufgabe 8 - Anwendung der middleware funktion

1. Wenden Sie die gesamte Middleware, die Sie in **Aufgabe 7** erstellt haben, auf den Endpunkt **sanitizeUser** in `server.js` an

2. Wenn die Anfrage die Middleware erfolgreich durchläuft, sollte **sanitizeUser** eine Antwort mit den aktualisierten **POST**-Daten senden

    #### Beispiel response
    
    ```json
    {
      "firstName" : "Steve",
      "lastName" : "Stevenson",
      "age": 129,
      "fbw": 36,
      "profession" : "Musician",
      "favoriteBands" : ["Radiohead", "Nirvana", "Kings of Leon", "Tash Sultana"],
      "email" : "steve@steve.com"
    }
    ```
