import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// 1. Initialisieren LowDB und lege Pfad und Namen der Datei fest
const adapter = new JSONFile("./db.json");
const defaultData = [{}];
const db = new Low(adapter, defaultData);

// await db.read();


export default db;