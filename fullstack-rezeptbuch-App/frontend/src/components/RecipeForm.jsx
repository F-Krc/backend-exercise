import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const initialForm = { name: '', zutaten: '', anleitung: '' };

const RecipeForm = () => {
  const { createRecipe, updateRecipe, selectedRecipe } = useContext(AppContext);
  const [recipeData, setRecipeData] = useState(initialForm);
  const [showMessage, setShowMessage] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (selectedRecipe) {
      setRecipeData(selectedRecipe);
    } else {
      setRecipeData(initialForm);
    }
  }, [selectedRecipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(recipeData).some((value) => value.trim() === '')) {
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 3000);
      return; 
    }

    if (selectedRecipe) {
      updateRecipe(recipeData);
    } else {
      createRecipe(recipeData);
    }

    setRecipeData(initialForm);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className="recipe-form">
      <h2>Rezept {selectedRecipe ? 'bearbeiten' : 'erstellen'}</h2>
      {hasError && <p className="error-message">Bitte füllen Sie alle Felder aus.</p>}
      {showMessage && <p className="message">Rezept hinzugefügt.</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={recipeData.name} onChange={handleChange} />

        <br />
        <label>Zutaten (durch Komma getrennt):</label>
        <input type="text" name="zutaten" value={recipeData.zutaten} onChange={handleChange} />

        <br />
        <label>Anleitung:</label>
        <textarea name="anleitung" value={recipeData.anleitung} onChange={handleChange}></textarea>

        <br />
        <button type="submit">{selectedRecipe ? 'Aktualisieren' : 'Erstellen'}</button>
      </form>
    </div>
  );
};

export default RecipeForm;
