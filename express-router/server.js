import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import errorCreator from 'http-errors';
import todoRouter from './router/todoRouter.js';
import userRouter from './router/userRouter.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/todos', todoRouter);
app.use('/users', userRouter);

app.use('*', (req, res, next) => {
  next(errorCreator(404, `${req.originalUrl} does not exist!`));
});

app.use((err, req, res, next) => {
  console.log('Error middleware:', err);
  res.status(err.status || err.statusCode || 500);
  res.send({
    error: {
      status: err.status || err.statusCode,
      message: err.message || 'Internal Server Error',
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
