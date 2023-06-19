import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const backendUrl = 'http://localhost:3000';

  // Rezepte abrufen
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Rezepte abrufen
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`${backendUrl}/recipes`);
      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Rezept erstellen
  const createRecipe = async (recipeData) => {
    try {
      const response = await axios.post(`${backendUrl}/recipes`, recipeData);
      setRecipes((prevRecipes) => [...prevRecipes, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Rezept löschen
  const deleteRecipe = async (recipeId) => {
    try {
      await axios.delete(`${backendUrl}/recipes/${recipeId}`);
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== recipeId));
    } catch (error) {
      console.log(error);
    }
  };

  // Rezept Update
  const updateRecipe = async (recipeData) => {
    try {
      await axios.put(`${backendUrl}/recipes/${selectedRecipe.id}`, recipeData);
      setRecipes((prevRecipes) => {
        return prevRecipes.map((recipe) => {
          if (recipe.id === selectedRecipe.id) {
            return { ...recipe, ...recipeData };
          }
          return recipe;
        });
      });
      setSelectedRecipe(null);
    } catch (error) {
      console.log(error);
    }
  };

  // Rezept suchen
  const searchRecipes = async (searchTerm) => {
    try {
      if (searchTerm.trim() === '') {
        fetchRecipes();
      } else {
        const response = await axios.get(`${backendUrl}/recipes/${searchTerm}`);
        setRecipes(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRezeptlistClick = () => {
    fetchRecipes();
  };

  return (
    <AppContext.Provider
      value={{
        recipes,
        selectedRecipe,
        setSelectedRecipe,
        backendUrl,
        createRecipe,
        deleteRecipe,
        updateRecipe,
        searchRecipes,
        handleRezeptlistClick
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
