import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  pricePerNight: {
    type: Number,
    default: 50,
  },
});

const RoomModel = new mongoose.model('Room', roomSchema);

export default RoomModel;
