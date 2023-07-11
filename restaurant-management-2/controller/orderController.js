import OrderModel from '../models/Order.js';
import TableModel from "../models/Table.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.send(orders);
  } catch (error) {
    res.send(`Orders können nicht geladen werden: ${error.messsage}`);
  }
};

export const getOrder = async (req, res) => {
  const id = req.params.id;
  const order = await OrderModel.findById(id);
  if (order) {
    res.send(order);
    console.log('total price get: ', order.totalPrice);
  } else {
    res.status(404).send('Es gibt keinen Order mit diesem Namen');
  }
};

export const addOrder = async (req, res) => {
  const order = req.body;
  const tableId = req.params.id;

  try {
    const table = await TableModel.findById(tableId);
    if (!table) {
      return res.status(404).send(`Table hat nicht gefunden. ID: ${tableId}`);
    }

    const newOrder = new OrderModel(order);
    table.orders.push(newOrder._id);

    await newOrder.save();
    await table.save();

    console.log('total price post: ', newOrder.totalPrice);
    res.status(200).send(`Order erfolgreich hinzugefügt ${newOrder}`);
  } catch (error) {
    res.status(500).send(`Fehler beim Hinzufügen des Orders: ${error.message}`);
  }
};


export const updateOrder = async (req, res) => {
  const id = req.params.id;
  const updatedOrder = req.body;

  try {
    const order = await OrderModel.findByIdAndUpdate(id, updatedOrder, { new: true });

    if (!order) {
      return res.status(404).send('Order nicht gefunden');
    }

    res.send('Order erfolgreich aktualisiert');
  } catch (error) {
    res.send(`Fehler beim Aktualisieren des Orders: ${error.message}`);
  }
};

export const deleteOrder = async (req, res) => {
  const id = req.params.id;

  try {
    const order = await OrderModel.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).send('Order nicht gefunden');
    }

    res.send('Order erfolgreich gelöscht');
  } catch (error) {
    res.send(`Fehler beim Löschen des Order: ${error.message}`);
  }
};
