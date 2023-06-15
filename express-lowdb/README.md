# Aufgabe: Erste Express-App mit LowDB

Wir erstellen eine einfache Express-App, die LowDB verwendet, um Daten zu speichern und abzurufen. Die App wird eine einfache "Filmliste" sein.

# Aufgabenstellung:

1. **Projekt initialisieren**: Erstelle ein neues Node.js-Projekt und installiere die benötigten Pakete (Express und LowDB).
2. **Json-Datei hinzufügen**: Erstelle eine `db.json` Datei und füge den Inhalt hinzu (siehe ganz unten)
3. **Datenbank initialisieren**: Erstelle eine LowDB-Datenbank ähnlich wie in dem Beispiel, das wir durchgegangen sind. Benutze für die Default-Daten einfach ein leeres Array
4. **Express-App erstellen**: Erstelle eine einfache Express-App. Die App sollte mindestens drei Routen haben: 
	- Eine Route (Wurzel), um alle Filme aus der lowDb-Datenbank an den Client zu senden (`/`) 
	- Eine Route, um einen zufälligen Film aus der lowDb-Datenbank zu senden (`/random`) 
	- Eine Route, die einen Film mit einem bestimmten Titel sendet (`/:title`) 

## Weitere Hinweise
**alle Filme senden**: 
Wenn die Route zum Senden aller Filme aufgerufen wird, soll der Client sie als JSON (Array), String oder ähnliches erhalten.

**Zufälliger Film**
Hier kannst du die `Math-random()` Methode zur Hilfe nehmen. 

**Film nach Titel**
Der Einfachheit wegen, probiere diese Route (mittels Browser) nur mit einem Film aus, der aus einem Wort besteht.

Falls du unbedingt einen Film mit Leerzeichen (z.B. "Die Verurteilten") abrufen möchtest, müsstest du das Leerzeichen *im Client* encodieren. In JavaScript kann man das wie folgt machen:

```javascript
// Beispiel-Code für Client, nicht Backend!
// Nur notwendig, wenn nach Filmen mit Leerzeichen gesucht wird
const movieName = 'Die Verurteilten';
const encodedMovieName = encodeURIComponent(movieName);
const response = await axios.get(`/${encodedMovieName}`);
```


 **Testen**: Teste alle Routes im Client (also Browser)

# Tipps:
- Initialisiere in deiner `index.js` zunächst lowDb
- Anschließend implementierst du die express App
- denk an die `.gitignore` Datei mit `**/node_modules`

_index.js oder server.js_:
```
import express from "express";
//... und weitere Importe

// *** Datenbank initialisieren/einstellen *** 
const adapter = new JSONFile("./db.json"); 
//.. und weiterer Code für lowDb

// *** Express-App erstellen ***
const app = express();
const port = 3000;

//... und weiterer Express-Code (die Routen)


app.listen(...);
```




## db.json
Diesen Inhalt sollst du in deine db.json übernehmen
```
[
    { "name": "Die Verurteilten", "year": "1994", "costs": "25 Millionen USD" },
    { "name": "Der Pate", "year": "1972", "costs": "6 Millionen USD" },
    { "name": "Pulp Fiction", "year": "1994", "costs": "8 Millionen USD" },
    { "name": "Forrest Gump", "year": "1994", "costs": "55 Millionen USD" },
    { "name": "Fight Club", "year": "1999", "costs": "63 Millionen USD" },
    { "name": "Inception", "year": "2010", "costs": "160 Millionen USD" },
    { "name": "Der Herr der Ringe: Die Rückkehr des Königs", "year": "2003", "costs": "94 Millionen USD" },
    { "name": "Matrix", "year": "1999", "costs": "63 Millionen USD" },
    { "name": "Die dunkle Bedrohung", "year": "1999", "costs": "115 Millionen USD" },
    { "name": "Avatar – Aufbruch nach Pandora", "year": "2009", "costs": "237 Millionen USD" }
]
```
