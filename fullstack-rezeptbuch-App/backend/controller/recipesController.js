import db from '../lowdbConfig.js';

await db.read();

let recipes = db.data;

export const getRecipes = (req, res) => {
  res.send(recipes);
};

export const getRecipe = (req, res) => {
  const name = req.params.name.trim().toLowerCase();

  const recipe = recipes.filter((a) => a.name.trim().toLowerCase() === name);

  if (recipe.length > 0) {
    res.json(recipe);
  } else {
    res.status(404).send('Es gibt keinen Recipe mit diesem Namen');
  }
};

export const addRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipeId = recipes.reduce((maxId, recipe) => Math.max(maxId, recipe.id), 0) + 1;
  const newRecipe = { id: newRecipeId, ...recipe };
  recipes.push(newRecipe);
  await db.write();
  res.send('Recipe erfolgreich hinzugefügt');
};

export const updateRecipe = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedRecipe = req.body;

  const index = recipes.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).send('Recipe nicht gefunden');
  }

  recipes[index] = { ...recipes[index], ...updatedRecipe };
  await db.write();
  res.send('Recipe erfolgreich aktualisiert');
};

export const deleteRecipe = async (req, res) => {
  const id = parseInt(req.params.id);
  const filteredRecipes = recipes.filter((r) => r.id !== id);

  if (filteredRecipes.length === recipes.length) {
    return res.status(404).send('Recipe nicht gefunden');
  }

  recipes = filteredRecipes;

  db.data = recipes;
  await db.write();
  res.send('Recipe erfolgreich gelöscht');
};
