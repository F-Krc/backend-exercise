import ReservationModel from '../models/Reservation.js';
import RoomModel from '../models/Room.js';

export const getReservations = async (req, res) => {
  try {
    const reservations = await ReservationModel.find();
    res.send(reservations);
  } catch (error) {
    res.send(`Reservations können nicht geladen werden: ${error.message}`);
  }
};

export const getReservation = async (req, res) => {
  const id = req.params.id;
  const reservation = await ReservationModel.findById(id).populate('room');
  if (reservation) {
    res.send(reservation);
  } else {
    res.status(404).send('Es gibt keinen Reservation mit dieser ID');
  }
};

export const addReservation = async (req, res) => {
  const reservation = req.body;


  try {

    const newReservation = new ReservationModel(reservation);

    await newReservation.save();

    res.status(200).send(`Reservation erfolgreich hinzugefügt ${newReservation}`);
  } catch (error) {
    res.status(500).send(`Fehler beim Hinzufügen des Reservations: ${error.message}`);
  }
};

export const updateReservation = async (req, res) => {
  const id = req.params.id;
  const updatedReservation = req.body;

  try {
    const reservation = await ReservationModel.findByIdAndUpdate(id, updatedReservation, { new: true });

    if (!reservation) {
      return res.status(404).send('Reservation nicht gefunden');
    }

    res.send('Reservation erfolgreich aktualisiert');
  } catch (error) {
    res.send(`Fehler beim Aktualisieren des Reservations: ${error.message}`);
  }
};

export const deleteReservation = async (req, res) => {
  const id = req.params.id;

  try {
    const reservation = await ReservationModel.findByIdAndDelete(id);

    if (!reservation) {
      return res.status(404).send('Reservation hat nicht gefunden');
    }

    res.send('Reservation hat erfolgreich gelöscht');
  } catch (error) {
    res.send(`Reservation hat nicht deleted: ${error.message}`);
  }
};
