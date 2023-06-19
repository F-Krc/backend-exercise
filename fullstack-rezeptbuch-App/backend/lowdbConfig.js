import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";


const adapter = new JSONFile("./data/db.json");
const defaultData = [{}];
const db = new Low(adapter, defaultData);

// await db.read()

export default db;