# Restaurant Management System: Fortsetzung
## Übersicht

Jetzt wirst du das System erweitern, um Beziehungen zwischen den Tischen und den Bestellungen zu erstellen.

In der Realität ist eine Bestellung immer mit einem bestimmten Tisch verbunden. In dieser Übung wird diese Beziehung in unserem Datenmodell und in unseren Controllern dargestellt.

## Aufgabe

1. Erstelle eine neue Datei `table.js` in deinem `models` Verzeichnis. Definiere in dieser Datei ein neues Mongoose-Schema und -Modell für Tische. Jeder Tisch sollte eine eindeutige `tableNumber` und eine Liste von Bestellungs-IDs `orders` haben, die auf das `Order`-Modell verweisen.

```javascript
const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true, unique: true },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});
```

2. Aktualisiere dein `Order`-Schema und -Modell, um eine `table`-Eigenschaft hinzuzufügen, die auf das `Table`-Modell verweist.

```javascript
const orderSchema = new mongoose.Schema({
  items: [itemSchema],
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' }
});
```

3. Aktualisiere die `createOrder` Funktion in deinem `orderController`, um eine Tisch-ID beim Erstellen einer Bestellung anzugeben. Füge diese Tisch-ID der Bestellung hinzu und füge die Bestellungs-ID der Liste von Bestellungen in der entsprechenden Tisch-Dokument hinzu.

```javascript
const createOrder = async (req, res) => {
  // ...
  const orderData = req.body;
  const table = await Table.findById(orderData.table);
  table.orders.push(order._id);
  await table.save();
  // ...
};
```

4. Teste dein aktualisiertes System, indem du einige Tische und Bestellungen erstellst. Überprüfe, ob die Beziehungen korrekt in deiner Datenbank gespeichert werden.

## Bonus

Erstelle eine Funktion, um alle Bestellungen für einen bestimmten Tisch abzurufen. Verwende die `populate`-Funktion von Mongoose, um die Details der Bestellungen in der Antwort einzuschließen.

```javascript
const getOrdersForTable = async (req, res) => {
  const { tableId } = req.params;
  const table = await Table.findById(tableId).populate('orders');
  // ...
};
```

Viel Spaß beim Coden! 👨‍💻👩‍💻
