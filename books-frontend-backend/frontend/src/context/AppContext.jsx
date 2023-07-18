import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:4000/books');
    const data = response.data;
    console.log(data);
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (formData) => {
    try {
      const response = await axios.post(`http://localhost:4000/books`, formData);
      console.log('axios', response.data);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:4000/book/${id}`);
    await fetchBooks();
  };

  const updateBook = async (formData) => {
    console.log('selected', selectedBook);
    try {
      const response = await axios.patch(`http://localhost:4000/book/${selectedBook._id}`, formData);
      
      console.log('reponse', response.data);
      await fetchBooks();
      setSelectedBook(null);
    } catch (error) {
      if (error.response) {
        console.log('Server error:', error.response.data);
      } else if (error.request) {
        console.log('Request error:', error.request);
      } else {
        console.log('Error:', error.message);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        books,
        deleteBook,
        setSelectedBook,
        updateBook,
        addBook,
        selectedBook,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
