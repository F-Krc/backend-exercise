import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoose } from './util/connectMongoose.js';
import orderRouter from './routes/orderRoutes.js';


const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(orderRouter)

if (await connectMongoose()) {
  app.listen(PORT, () => {
    console.log(`Verbunden an Port ${PORT}`);
  });
} else {
  console.error('Verbindung zu mongodb nicht möglich.');
}