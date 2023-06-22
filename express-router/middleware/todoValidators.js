import errorCreator from 'http-errors';

export const todoValidate = (req, res, next) => {
  const { text, done, farbe} = req.body;

  if (!text || !done || !farbe) {
    const error = errorCreator(400, 'Invalid todo');
    next(error);
  }

  next();
};
