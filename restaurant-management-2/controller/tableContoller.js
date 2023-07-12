import TableModel from '../models/Table.js';

export const getTables = async (req, res) => {
  try {
    const tables = await TableModel.find();
    res.send(tables);
  } catch (error) {
    res.send(`Tables können nicht geladen werden: ${error.messsage}`);
  }
};

export const getTable = async (req, res) => {
  const id = req.params.id;
  const table = await TableModel.findById(id);
  const tablePopulate = await TableModel.findById(id).populate('orders');
  if (table) {
    //res.send(table);
    res.send(tablePopulate);
  } else {
    res.status(404).send('Es gibt keinen Table mit dieser ID');
  }
};

export const addTable = async (req, res) => {
  const table = req.body;

  try {
    const newTable = await TableModel.create(table);
    res.status(200).send(`Table erfolgreich hinzugefügt ${newTable}`);
  } catch (error) {
    res.send(`Fehler beim Hinzufügen des Tables: ${error.message}`);
  }
};

export const updateTable = async (req, res) => {
  const id = req.params.id;
  const updatedTable = req.body;

  try {
    const table = await TableModel.findByIdAndUpdate(id, updatedTable, { new: true });

    if (!table) {
      return res.status(404).send('Table nicht gefunden');
    }

    res.send('Table erfolgreich aktualisiert');
  } catch (error) {
    res.send(`Fehler beim Aktualisieren des Tables: ${error.message}`);
  }
};

export const deleteTable = async (req, res) => {
  const id = req.params.id;

  try {
    const table = await TableModel.findByIdAndDelete(id);

    if (!table) {
      return res.status(404).send('Table nicht gefunden');
    }

    res.send('Table erfolgreich gelöscht');
  } catch (error) {
    res.send(`Fehler beim Löschen des Table: ${error.message}`);
  }
};
