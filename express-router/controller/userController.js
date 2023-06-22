import errorCreator from 'http-errors';
//import { mockdataUser } from '../mockdata.js';

let mockdataUser = [
  {
    firstname: 'Anna',
    lastname: 'Anka',
    email: 'post@email.com',
    password: '1234',
    id: 1,
  },
  {
    firstname: 'Berta',
    lastname: 'Brandt',
    email: 'post1@email.com',
    password: '2468',
    id: 2,
  },
];

export const getUsers = (req, res) => {
  res.json(mockdataUser);
};

export const getUser = (req, res, next) => {
  const userId = req.params.id;
  const user = mockdataUser.find((user) => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    const error = errorCreator(404, 'User not found');
    next(error);
  }
};

export const addUser = (req, res) => {
  const newUser = req.body;
  newUser.id = mockdataUser.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;
  mockdataUser.push(newUser);
  res.send('User added successfully');
};

export const updateUser = (req, res, next) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  const userIndex = mockdataUser.findIndex((user) => user.id === parseInt(userId));
  if (userIndex !== -1) {
    mockdataUser[userIndex] = { ...mockdataUser[userIndex], ...updatedUser };
    res.send(mockdataUser[userIndex]);
  } else {
    const error = errorCreator(404, 'User not found');
    next(error);
  }
};

export const deleteUser = (req, res, next) => {
  const userId = req.params.id;
  const updatedUsers = mockdataUser.filter((user) => user.id !== parseInt(userId));

  if (updatedUsers.length !== mockdataUser.length) {
    mockdataUser = updatedUsers; // Change 'const' to 'let' here
    res.json('User deleted successfully');
  } else {
    const error = errorCreator(404, 'User not found');
    next(error);
  }
};
