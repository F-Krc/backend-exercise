import './App.css';
import BookForm from './BookForm';
import BookList from './BookList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/new" element={<BookForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
