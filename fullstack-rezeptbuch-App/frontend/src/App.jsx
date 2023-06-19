import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import SearchBar from './components/SearchBar';
import { AppContext } from './context/AppContext';
import './App.css';

const App = () => {
  const { filteredRecipes, handleRezeptlistClick } = useContext(AppContext);

  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => handleRezeptlistClick()}>
                Rezeptliste
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/form" className="nav-link">
                Rezept Hinzufügen
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SearchBar />
                {filteredRecipes.length === 0 && <RecipeList />}
              </div>
            }
          />
          <Route path="/form" element={<RecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

