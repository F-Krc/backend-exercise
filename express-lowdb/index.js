import express from 'express';
import db from './lowdbConfig.js';

await db.read();

let movies = db.data;
console.log(movies);
const length = movies.length;
//console.log(length);

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.json(movies);
});

app.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * length);

  const randomMovie = movies[randomIndex];
  res.json(randomMovie);
});

app.get('/:name', (req, res) => {
  const name = req.params.name.trim();
  const decodedMovieName = decodeURIComponent(name);
  console.log(decodedMovieName);

  const movie = db.data.find((m) => {
    return m.name.toLowerCase() === decodedMovieName.toLowerCase();
  });
  //const movie = movies.find((m) => {
  //  return m.name.toLowerCase() === name.toLowerCase();
  // });

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send('Es gibt keinen Film mit diesem Namen');
  }
});

app.post('/add', async (req, res) => {
  const movie = { ...req.body.movie };
  movies.push(movie);
  await db.write();
  res.send('Film erfolgreich hinzugefügt');
});

app.delete('/delete/:name', async (req, res) => {
  const name = req.params.name.trim();
  const filteredMovies = movies.filter((m) =>  m.name !== name);

  if (filteredMovies.length === movies.length) {
   return res.status(404).send('Film nicht gefunden');
  }

  //console.log('Movies before deletion:', movies);
  movies = filteredMovies;
  //console.log('Movies after deletion:', movies);

  db.data = movies;
  await db.write();
  res.send('Film erfolgreich gelöscht');
});

app.patch('/update/:name', async (req, res) => {
  const name = req.params.name;
  const updatedMovie = { ...req.body.movie };

  const movieIndex = movies.findIndex((m) =>m.name === name);

  if (movieIndex === -1) {
    return res.status(404).send('Film nicht gefunden');
  }

  movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };
  await db.write();
  res.send('Film erfolgreich aktualisiert');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
