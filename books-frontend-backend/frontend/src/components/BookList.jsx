import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Book from './Book';

function BookList() {
  const { books } = useContext(AppContext);

  return (
    <>
      <h2>Book Liste</h2>
      <ul>
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </ul>
    </>
  );
}

export default BookList;
