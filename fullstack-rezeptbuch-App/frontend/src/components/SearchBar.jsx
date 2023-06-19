import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Recipe from './Recipe';

const SearchBar = () => {
  const { searchRecipes, filteredRecipes } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes(searchTerm);
    setSearchTerm('');
  };

  return (
 <>
   <form className="search-bar" onSubmit={handleSubmit}>
     <input type="text" placeholder="Rezept suchen" value={searchTerm} onChange={handleChange} />
     <button type="submit">Suchen</button>
   </form>
   {filteredRecipes.length > 0 && (
     <div className='recipe-list'>
       <h3>SuchErgebnis</h3>
       {filteredRecipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
     </div>
   )}
 </>
 
  );
};

export default SearchBar;

