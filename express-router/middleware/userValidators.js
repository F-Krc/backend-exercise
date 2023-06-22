import * as emailValidator from 'email-validator';
import errorCreator from 'http-errors';

export const userValidate = (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    const error = errorCreator(400, 'Invalid user');
    next(error);
  }

  next();
};

export const emailValidate = (req, res, next) => {
  const { email } = req.body;

  if (!emailValidator.validate(email)) {
    const error = errorCreator(400, 'Invalid email address');
    next(error);
  }
  next();
};

export const passwordValidate = (req,res, next) => {
  const {password} = req.body;

  if(password.length < 3){
    const error = errorCreator(400, 'Passwor must be at least 3 characters')
    next(error);
  }
  next();
}