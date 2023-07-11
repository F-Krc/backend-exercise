import { Router } from 'express';

import { getOrders, getOrder, addOrder, updateOrder, deleteOrder } from '../controller/orderController.js';

const orderRouter = Router();

orderRouter
  .get('/orders', getOrders) // Get All Orders
  .get('/orders/:id', getOrder) // Find Order
  .post('/orders/:id', addOrder) // Add Order
  .put('/orders/:id', updateOrder) // Update Order
  .delete('/orders/:id', deleteOrder); // Delete Order

export default orderRouter