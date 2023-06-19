import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppProvider from './context/AppContext';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="container">
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
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
                  <RecipeList />
                </div>
              }
            />
            <Route path="/form" element={<RecipeForm />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
