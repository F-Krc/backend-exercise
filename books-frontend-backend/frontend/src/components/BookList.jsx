import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Book from './Book';
import { Link } from 'react-router-dom';

function BookList() {
  const { books } = useContext(AppContext);

  return (
    <>
      <h2 className="book-list-title">Book Liste</h2>
      <ul className="book-list">
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </ul>
      <button className="add-book-button">
        <Link to={'/new'}>Add Book</Link>
      </button>
    </>
  );
}

export default BookList;
