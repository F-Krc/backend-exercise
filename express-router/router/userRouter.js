import express from 'express';
import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controller/userController.js';
import { sanitizeName } from '../middleware/userSanitisator.js';
import { userValidate,  emailValidate, passwordValidate } from '../middleware/userValidators.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', sanitizeName, userValidate, emailValidate, passwordValidate, addUser);

userRouter.put('/:id', sanitizeName, userValidate, emailValidate, passwordValidate, updateUser);

userRouter.delete('/:id', deleteUser);


export default userRouter;
