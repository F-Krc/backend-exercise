import express from 'express';
import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', addUser);

userRouter.put('/:id', updateUser);

userRouter.delete('/:id', deleteUser);


export default userRouter;
