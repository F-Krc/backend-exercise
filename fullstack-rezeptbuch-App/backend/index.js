import express from 'express';
import cors from 'cors';
import { getRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe } from './controller/recipesController.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

// Get All Recipes
app.get('/recipes', getRecipes);

// Find Recipe
app.get('/recipes/:name', getRecipe);

// Add Recipes
app.post('/recipes', addRecipe);

// Update Recipe
app.put('/recipes/:id', updateRecipe);

// Delete Recipe
app.delete('/recipes/:id', deleteRecipe);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
