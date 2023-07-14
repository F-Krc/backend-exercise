import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  guestName: {
    type: String,
    required: true,
  },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  checkInDate: {
    type: Date,
    default: () => Date.now(),
  },
  checkOutDate: {
    type: Date,
    default: () => Date.now(),
  },
});

const ReservationModel = new mongoose.model('Reservation', reservationSchema);

export default ReservationModel;
