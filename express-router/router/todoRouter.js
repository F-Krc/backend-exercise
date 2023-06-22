import express from 'express';
import { getTodos, getTodo, addTodo, updateTodo, deleteTodo } from "../controller/todoController.js";
import { todoValidate } from '../middleware/todoValidators.js';

const todoRouter = express.Router();

todoRouter.get('/', getTodos);

todoRouter.get('/:id', getTodo);

todoRouter.post('/', todoValidate, addTodo);

todoRouter.put('/:id', todoValidate, updateTodo);

todoRouter.delete('/:id', deleteTodo);


export default todoRouter;
