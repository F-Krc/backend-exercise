import { Router } from 'express';

import { getTables, getTable, addTable, updateTable, deleteTable } from '../controller/tableContoller.js';

const tableRouter = Router();

tableRouter
  .get('/tables', getTables) // Get All Tables
  .get('/tables/:id', getTable) // Find Table
  .post('/tables', addTable) // Add Table
  .put('/tables/:id', updateTable) // Update Table
  .delete('/tables/:id', deleteTable); // Delete Table

export default tableRouter;
