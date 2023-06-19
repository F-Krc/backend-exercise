import db from '../lowdbConfig.js';
import pkg from 'geoip-lite';
const { lookup } = pkg;

await db.read();

let albens = db.data;
//console.log(albens);

export const getAlbens = (req, res) => {
  const ip = '206.71.50.230'; // Example ip von USA

  // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //console.log(req);

  console.log(ip);
  const geo = lookup(ip);
  console.log(geo);

  if (geo && geo.country === 'US') {
    res.send(albens.filter((a) => a.title !== 'Nevermind'));
  } else {
    res.send(albens);
  }
};

export const getAlben = (req, res) => {
  const year = parseInt(req.params.year);

  const alben = albens.filter((a) => a.year === year);

  if (alben) {
    res.json(alben);
  } else {
    res.status(404).send('Es gibt keinen Alben mit diesem Namen');
  }
};

export const addAlben = async (req, res) => {
  const alben = req.body;
  const newAlbenId = albens.reduce((maxId, alben) => Math.max(maxId, alben.id), 0) + 1;
  const newAlben = { id: newAlbenId, ...alben };
  albens.push(newAlben);
  await db.write();
  res.send('Alben erfolgreich hinzugefügt');
};

export const updateAlben = async (req, res) => {
  const title = req.params.title.trim();
  const updatedAlben = req.body;

  const index = albens.findIndex((a) => a.title === title);

  if (index === -1) {
    return res.status(404).send('Alben nicht gefunden');
  }

  albens[index] = { ...albens[index], ...updatedAlben };
  await db.write();
  res.send('Alben erfolgreich aktualisiert');
};

export const deleteAlben = async (req, res) => {
  const title = req.params.title.trim();
  const filteredAlbens = albens.filter((a) => a.title !== title);

  if (filteredAlbens.length === albens.length) {
    return res.status(404).send('Alben nicht gefunden');
  }

  albens = filteredAlbens;

  db.data = albens;
  await db.write();
  res.send('Alben erfolgreich gelöscht');
};
