import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Recipe = ({ recipe }) => {
  const { deleteRecipe, setSelectedRecipe, backendUrl } = useContext(AppContext);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${backendUrl}/recipes/${recipe.id}`);
      deleteRecipe(recipe.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setSelectedRecipe(recipe);
    navigate('/form');
  };

  return (
    <div className="recipe">
      <h3>{recipe.name}</h3>
      {showDetails && (
        <div className="recipe-details">
          <p>Zutaten: {recipe.zutaten.join(', ')}</p>
          <p>Anleitung: {recipe.anleitung}</p>
        </div>
      )}
      <button onClick={toggleDetails}>{showDetails ? 'Details verbergen' : 'Details anzeigen'}</button>
      {showDetails && <button onClick={handleEdit}>Bearbeiten</button>}
      <button onClick={handleDelete}>Löschen</button>
    </div>
  );
};

export default Recipe;

