import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('db.json');
const defaultData = [{}];
const db = new Low(adapter, defaultData);

export default db;
