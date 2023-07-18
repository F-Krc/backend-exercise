import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Book({ book }) {
  const { deleteBook, setSelectedBook } = useContext(AppContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteBook(book._id);
  };

  const handleEdit = () => {
   setSelectedBook(book);
    navigate('/new');
  };

  return (
    <div>
      <li key={book._id}>
        {`${book.title} by ${book.author}`}
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
}

export default Book;
