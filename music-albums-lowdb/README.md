# Musikalben verwalten

In dieser Aufgabe entwickelst du eine einfache Express-Anwendung bzw. REST API zur Verwaltung von Musikalben. Jedes Album sollte die folgenden Eigenschaften haben:

- id
- Titel (title)
- Künstler (artist)
- Erscheinungsjahr (year)

Beispiel für ein Album:
```
{ id: 1, title: 'Nevermind', artist: 'Nirvana', year: 1991 }
```

Deine Anwendung sollte die folgenden Endpunkte bereitstellen:

1. `GET /api/albums` - Dieser Endpunkt gibt alle Alben als JSON zurück.

2. `POST /api/albums` - Dieser Endpunkt erstellt ein neues Album. Das eingehende JSON-Objekt sollte die Eigenschaften `title`, `artist` und `year` haben. Füge das Album einfach zu einem Array in deiner Express-App hinzu und gib dann das erstellte Album als Antwort zurück. Für die ID kannst du etwa wie `uuid` verwenden oder die letzte id einfach incrementieren. Außerdem soll das gesamte "albums" Array in der Console ausgegeben werden.

Vergiss nicht den JSON-Parser (`app.use( express.json() );`) zu nutzen. Du wirst ihn benötigen, um JSON aus der eingehenden Anforderung zu lesen.

Denke daran, deine API-Endpunkte zu testen. Du kannst dafür den Thunder Client nutzen.

Lagere ausserdem deine Funktionen bzw. Controller in einer Datei (im Controller-Ordner).


## Tipp
Die Alben kannst du einfach in deiner App als Array "hard coden":

```javascript
import express from 'express';
...

let albums = [
  { id: 1, title: 'Nevermind', artist: 'Nirvana', year: 1991 },
  { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
  { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 },
  { id: 4, title: 'The White Album', artist: 'The Beatles', year: 1968 },
  { id: 5, title: 'London Calling', artist: 'The Clash', year: 1979 },
  { id: 6, title: 'Pet Sounds', artist: 'The Beach Boys', year: 1966 }
];
// in dieses Array wird in diesem Beispiel auch das neue Album hinzugefügt, das über `POST /api/albums` gesendet wird


...
```

# Bonus
- Verwende lowDb und speichere deine alben (also `albums`) in einer .json-Datei. Das heißt, es soll kein `albums` array mehr in deinem Code geben
  - du solltest `db.read()` in all deine Routen am Anfang aufrufen, damit du immer die aktuelle Version deiner `db.json`hast
- Erzeuge einen weiteren Endpunt bzw. Route: `GET /api/albums/:year`. Diese Route gibt alle Filme aus einem bestimmten Jahr zurück
- erzeuge eine `DELETE /album/:title` Route, die einen bestimmten Film löscht (Delete Routen hatten wir noch nicht. Versuch es gerne trotzdem. Tipp: `app.delete("/album/:title",...)`

# Superbonus
Wir nehmen an, dass das Album "Nevermind" von Nirvana in den USA verboten ist. Erweitere deine `GET /api/albums` Route so, dass das "Nevermind" Album nicht gesendet wird, wenn die Anfrage des Clients aus den USA kommt.

- Folgendes NPM Package kann dir dbei helfen: `geoip-lite`
- Außerdem hilft dir vielleicht dieser Stackoverflow-Beitrag: https://stackoverflow.com/questions/70321094/how-to-get-the-clients-country-in-express-js 

Viel Spaß beim Coden!
