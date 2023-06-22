import errorCreator from 'http-errors';
//import { mockdataTodo } from '../mockdata.js';

let mockdataTodo = [
  { text: 'Einkaufen gehen', done: false, id: 1, farbe: 'schwarz' },
  { text: 'Eis essen', done: false, id: 2, farbe: 'schwarz' },
  { text: 'Spielen', done: false, id: 3, farbe: 'schwarz' },
  { text: 'Schlafen', done: false, id: 4, farbe: 'schwarz' },
  { text: 'Programmieren', done: true, id: 5, farbe: 'schwarz' },
  { text: 'Aufstehen', done: false, id: 6 },
];

export const getTodos = (req, res) => {
  res.json(mockdataTodo);
}

export const getTodo = (req, res, next) => {
  const todoId = req.params.id;
  const todo = mockdataTodo.find((todo) => todo.id === parseInt(todoId));
  if (todo) {
    res.json(todo);
  } else {
    const error = errorCreator(404, 'Todo not found');
    next(error);
  }
}

export const addTodo = (req, res) => {
  const newTodo = req.body;
  newTodo.id = mockdataTodo.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1;
  mockdataTodo.push(newTodo);
  res.send('Todo added successfully');
};

export const updateTodo = (req, res, next) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;
  const todoIndex = mockdataTodo.findIndex((todo) => todo.id === parseInt(todoId));
  if (todoIndex !== -1) {
    mockdataTodo[todoIndex] = { ...mockdataTodo[todoIndex], ...updatedTodo };
    res.json(mockdataTodo[todoIndex]);
  } else {
    const error = errorCreator(404, 'Todo not found');
    next(error);
  }
};

export const deleteTodo = (req, res, next) => {
  const todoId = req.params.id;
  const updatedTodos = mockdataTodo.filter((todo) => todo.id !== parseInt(todoId));
  if (updatedTodos.length !== mockdataTodo.length) {
    mockdataTodo = updatedTodos;
    res.json('Todo deleted successfully');
  } else {
    const error = errorCreator(404, 'Todo not found');
    next(error);
  }
};
