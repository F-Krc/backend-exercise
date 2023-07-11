import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoose } from './util/connectMongoose.js';
import orderRouter from './routes/orderRoutes.js';
import tableRouter from './routes/tableRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(orderRouter);
app.use(tableRouter);

if (await connectMongoose()) {
  app.listen(PORT, () => {
    console.log(`Verbunden an Port ${PORT}`);
  });
} else {
  console.error('Verbindung zu mongodb nicht möglich.');
}
