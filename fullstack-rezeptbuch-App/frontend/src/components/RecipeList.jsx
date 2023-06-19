import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Recipe from './Recipe';

const RecipeList = () => {
  const { recipes, deleteRecipe, startEditing, backendUrl } = useContext(AppContext);

  return (
    <div className="recipe-list">
      <h2>Rezeptliste</h2>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          deleteRecipe={deleteRecipe}
          startEditing={startEditing}
          backendUrl={backendUrl}
        />
      ))}
    </div>
  );
};

export default RecipeList;
