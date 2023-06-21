import * as emailValidator from 'email-validator';

export const userValidate = (req, res, next) => {
  const { firstName, lastName, age, fbw, email } = req.body;

  if (!firstName || !lastName || !age || !fbw || !email) {
    const error = new Error('invalid user.');
    error.status = 400;
    next(error);
  }

  next();
};

export const ageValidate = (req, res, next) => {
  const { age } = req.body;

  if (parseInt(age) < 18) {
    const error = new Error('We can not validate your user. They are below 18 years of age');
    error.status = 400;
    next(error);
  }

  next();
};

export const emailValidate = (req, res, next) =>{
  const { email } = req.body;

  if (!emailValidator.validate(email)) {
    const error = new Error('Invalid email')
    error.status=400
    next(error);
  }

  next();
}
