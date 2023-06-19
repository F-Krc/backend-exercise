import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Recipe from './Recipe';

const RecipeList = () => {
  const { recipes } = useContext(AppContext);

  return (
    <div className="recipe-list">
      <h2>Rezeptliste</h2>
      {recipes.length === 0 ? (
        <div>No recipes available.</div> 
      ) : (
        recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))
      )}
    </div>
  );
};


export default RecipeList;
