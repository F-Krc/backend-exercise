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
    <li key={book._id} className="book-item">
      {`${book.title} by ${book.author}`}
      <button className="edit-button" onClick={handleEdit}>
        Edit
      </button>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Book;
