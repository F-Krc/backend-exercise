# Rezeptbuch

## Beschreibung
Diese Anwendung ermöglicht es dir, deine Lieblingsrezepte zu speichern, abzurufen, zu aktualisieren und zu löschen. Die Rezepte werden in einer Datenbank (mit `lowdb`) gespeichert und du interagierst mit der Anwendung über ein Frontend, das mit React erstellt wurde.

## Backend

1. **Setup:** Beginne mit dem Einrichten eines Express-Servers, der auf einen bestimmten Port hört. Richte eine Mock-Datenbank mit `lowdb` ein, in der du die Rezepte speicherst.

2. **Rezept erstellen:** Erstelle einen POST-Endpunkt `/recipes`, der ein JSON-Objekt mit den Rezeptdetails (z.B. Name, Zutaten, Anleitung usw.) annimmt. Der Server sollte dieses Rezept in der `lowdb` Datenbank speichern.

3. **Rezepte abrufen:** Richte einen GET-Endpunkt `/recipes` ein, der alle in der Datenbank gespeicherten Rezepte abruft.

4. **Rezept aktualisieren (BONUS):** Erstelle einen PUT-Endpunkt `/recipes/:id`, der ein spezifisches Rezept aktualisiert. Der Server sollte ein JSON-Objekt mit den aktualisierten Details des Rezepts akzeptieren und das entsprechende Rezept in der `lowdb` Datenbank ändern.

5. **Rezept löschen:** Richte einen DELETE-Endpunkt `/recipes/:id` ein, der ein spezifisches Rezept aus der Datenbank entfernt.

6. **Fehlerbehandlung:** Vergiss nicht, Fehler angemessen zu behandeln. Wenn eine Anfrage fehlschlägt, sollte der Server mit einer hilfreichen Fehlermeldung und einem entsprechenden Statuscode antworten.

## Frontend

Baue eine React-Anwendung, die die Rezepte anzeigt und Formulare für das Erstellen und Aktualisieren von Rezepten bietet. Es sollte auch Optionen zum Löschen vorhandener Rezepte geben. Bevor du Anfängst zu implementieren, mach dir einen Plan wie das Frontend aussehen soll und welche Komponente du dafür brauchst. 

1. **Rezepte erstellen:** Implementiere eine Funktion zum Erstellen eines neuen Rezepts. Verwende ein Formular, um die Details des Rezepts zu erfassen, und poste die Details an den Endpunkt `/recipes`, wenn das Formular abgesendet wird.

2. **Rezepte anzeigen:** Rufe die Liste der Rezepte vom Endpunkt `/recipes` ab und zeige sie in deiner Anwendung an. Du könntest dich dafür entscheiden, die vollständigen Details jedes Rezepts oder nur eine Zusammenfassung mit der Möglichkeit anzuzeigen, weitere Details einzusehen.

3. **Rezepte löschen:** Implementiere einen "Löschen"-Button für jedes Rezept. Wenn diese Schaltfläche geklickt wird, sollte sie eine DELETE-Anfrage an den Endpunkt `/recipes/:id` senden, um das Rezept aus der Datenbank zu löschen. 

4. **Bonus: Rezepte aktualisieren:** Biete eine Möglichkeit für Benutzer, die Details eines Rezepts zu aktualisieren. Dies könnte z.B. mit einer extra Komponente erfolgen, die ein Formular öffnet, das mit den aktuellen Details des Rezepts gefüllt ist. Wenn das Formular abgesendet wird, verwende den Endpunkt `/recipes/:id`, um das Rezept in der Datenbank zu aktualisieren.


