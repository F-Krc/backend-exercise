import express from 'express';
import { getTodos, getTodo, addTodo, updateTodo, deleteTodo } from "../controller/todoController.js";

const todoRouter = express.Router();

todoRouter.get('/', getTodos);

todoRouter.get('/:id', getTodo);

todoRouter.post('/', addTodo);

todoRouter.put('/:id', updateTodo);

todoRouter.delete('/:id', deleteTodo);


export default todoRouter;
