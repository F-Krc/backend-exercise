import express from 'express';
import {getAlbens, getAlben, addAlben, updateAlben, deleteAlben} from './controller/albenController.js'



const app = express();
app.use(express.json());
const port = 3000;

// Get All Albens
app.get('/api/albums', getAlbens);

// Find Alben
app.get('/api/albums/:year', getAlben);

// Add Albens
app.post('/api/albums', addAlben);

// Update Alben
app.patch('/api/albums/:title', updateAlben);

// Delete Alben
app.delete('/albums/:title', deleteAlben);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});