import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const SearchBar = () => {
  const { searchRecipes } = useContext(AppContext);
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
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="text" placeholder="Rezept suchen" value={searchTerm} onChange={handleChange} />
      <button type="submit">Suchen</button>
    </form>
  );
};

export default SearchBar;
