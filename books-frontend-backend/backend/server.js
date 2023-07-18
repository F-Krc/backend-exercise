import express from "express";
import { connectMongoose } from "./util/connectMongoose.js";
import bookRouter from "./router/bookRoutes.js";
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;
const app = express();

// Der Server soll mit JSON arbeiten können
app.use(express.json());
app.use(cors());
app.use(bookRouter)
const connected = await connectMongoose()

if(connected) {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    })
} else {
    console.error("Datenbankverbindung hat nicht geklappt.");
}
