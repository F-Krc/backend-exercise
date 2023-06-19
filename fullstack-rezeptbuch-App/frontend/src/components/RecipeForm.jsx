import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const initialForm = { name: '', zutaten: '', anleitung: '' };

const RecipeForm = () => {
  const { createRecipe, updateRecipe, selectedRecipe } = useContext(AppContext);
  const [recipeData, setRecipeData] = useState(initialForm);
  const [showMessage, setShowMessage] = useState(false);

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
