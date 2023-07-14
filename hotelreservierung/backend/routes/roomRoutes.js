import { Router } from 'express';

import { getRooms, getRoom, addRoom, updateRoom, deleteRoom } from '../controller/roomController.js';

const roomRouter = Router();

roomRouter
  .get('/rooms', getRooms) // Get All Rooms
  .get('/rooms/:id', getRoom) // Find Room
  .post('/rooms', addRoom) // Add Room
  .put('/rooms/:id', updateRoom) // Update Room
  .delete('/rooms/:id', deleteRoom); // Delete Room

export default roomRouter;
