import RoomModel from '../models/Room.js';

export const getRooms = async (req, res) => {
  try {
    const rooms = await RoomModel.find();
    res.send(rooms);
  } catch (error) {
    res.send(`Rooms können nicht geladen werden: ${error.message}`);
  }
};

export const getRoom = async (req, res) => {
  const id = req.params.id;
  const room = await RoomModel.findById(id);

  if (room) {
    res.send(room);
  } else {
    res.status(404).send('Es gibt keinen Room mit dieser ID');
  }
};

export const addRoom = async (req, res) => {
  const room = req.body;

  try {
    const newRoom = await RoomModel.create(room);
    res.status(200).send(`Room erfolgreich hinzugefügt ${newRoom}`);
  } catch (error) {
    res.send(`Fehler beim Hinzufügen des Rooms: ${error.message}`);
  }
};

export const updateRoom = async (req, res) => {
  const id = req.params.id;
  const updatedRoom = req.body;

  try {
    const room = await RoomModel.findByIdAndUpdate(id, updatedRoom, { new: true });

    if (!room) {
      return res.status(404).send('Room nicht gefunden');
    }

    res.send('Room erfolgreich aktualisiert');
  } catch (error) {
    res.send(`Fehler beim Aktualisieren des Rooms: ${error.message}`);
  }
};

export const deleteRoom = async (req, res) => {
  const id = req.params.id;

  try {
    const reservation = await ReservationModel.deleteOne({room: id});
    const room = await RoomModel.findByIdAndDelete(id);

    if (!room) {
      return res.status(404).send('Room nicht gefunden');
    }

    res.send('Room erfolgreich gelöscht');
  } catch (error) {
    res.send(`Fehler beim Löschen des Room: ${error.message}`);
  }
};
