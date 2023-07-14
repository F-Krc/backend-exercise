import { Router } from 'express';

import { getReservations, getReservation, addReservation, updateReservation, deleteReservation } from '../controller/reservationController.js';

const reservationRouter = Router();

reservationRouter
  .get('/reservations', getReservations) // Get All Reservations
  .get('/reservations/:id', getReservation) // Find Reservation
  .post('/reservations', addReservation) // Add Reservation
  .put('/reservations/:id', updateReservation) // Update Reservation
  .delete('/reservations/:id', deleteReservation); // Delete Reservation

export default reservationRouter;
