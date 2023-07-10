#  Restaurant-Management-System

Stell dir vor, du hast die Aufgabe, die Backend-Logik für ein Restaurant zu erstellen. Hier sind einige Anforderungen:

## Aufgaben

### Schritt 1: Erstellen des Bestellschemas

1. Definiere ein Mongoose-Schema namens `OrderSchema`. Jede Bestellung sollte die folgenden Felder haben:
    - `tableNumber`: Die Tischnummer, an der die Bestellung aufgegeben wurde. Dies sollte ein Pflichtfeld (`required`) sein.
    - `foodItems`: Ein Array von Objekten, die die bestellten Gerichte und ihre Preise darstellen. Dies sollte auch ein Pflichtfeld sein.
    - `orderTime`: Das Datum und die Uhrzeit, zu der die Bestellung aufgegeben wurde. Dies sollte automatisch auf die aktuelle Zeit/das aktuelle Datum gesetzt werden, wenn die Bestellung erstellt wird (verwende die `default`-Option).

### Schritt 2: Speichern von Bestellungen

2. Implementiere eine Funktion, die eine neue Bestellung erstellt und in der Datenbank speichert. Stelle sicher, dass alle erforderlichen Felder ausgefüllt sind.

### Schritt 3: Abrufen von Bestellungen

3. Schreibe eine Funktion, die alle Bestellungen aus der Datenbank abruft. Verwende hier `model.find({})`.

### Schritt 4: Bestellungen aktualisieren

4. Implementiere eine Funktion, die eine bestehende Bestellung aktualisiert. Hier solltest du `findByIdAndUpdate` verwenden. Stelle sicher, dass du die Option `new` setzt, um das aktualisierte Dokument zurückzugeben.

### Schritt 5: Bestellungen löschen

5. Füge eine Funktion hinzu, die eine Bestellung aus der Datenbank entfernt. Verwende hier `findByIdAndRemove`.

### Schritt 6: Fehlerbehandlung

6. Stelle sicher, dass alle Funktionen ordnungsgemäß Fehler behandeln. Verwende dazu `try-catch`-Blöcke.

### Bonus: Gesamtpreisberechnung
7. Füge ein virtuelles Feld `totalPrice` zu deinem Schema hinzu, das den Gesamtpreis für eine Bestellung berechnet, indem es die Preise aller `foodItems` in einer Bestellung addiert. 
Tipp: https://mongoosejs.com/docs/tutorials/virtuals.html
