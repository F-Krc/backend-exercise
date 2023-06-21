import db from '../lowdbConfig.js';

export const validateUser = (req, res) => {
  const user = req.body;
  res.send('{"message" : "This user is valid!"}');
};

export const sanitizeUser = async (req, res) => {
  await db.read()
  const user = req.body;
  db.data.push(user);
  db.write()
  res.send(db.data);
};

export const getUserData = async (req, res) => {
  await db.read()
  res.send(db.data);
};
