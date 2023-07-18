import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Book({ book }) {
  const { deleteBook, setSelectedBook } = useContext(AppContext);

  const handleDelete = () => {
    deleteBook(book._id);
  };

  const handleEdit = () => {
   setSelectedBook(book);
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
