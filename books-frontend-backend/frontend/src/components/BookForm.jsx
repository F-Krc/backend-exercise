import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const initialForm = {
  title: '',
  author: '',
  ISBN: '',
  isGoodBook: '',
};
function BookForm() {
  const [formData, setFormData] = useState(initialForm);
  const { addBook, selectedBook, updateBook } = useContext(AppContext);

  useEffect(() => {
    if (selectedBook) {
      setFormData(selectedBook);
    } else {
      setFormData(initialForm);
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value, isGoodBook: checked}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
   addBook(formData);
    if(selectedBook){
      updateBook(formData)
      console.log('1',formData);
    }
    
   setFormData(initialForm);
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        <br />
        <label>Author</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
        <br />
        <label>ISBN:</label>
        <input type="text" name="ISBN" value={formData.ISBN} onChange={handleChange} />
        <br />
        <label> Is Good Book?</label>
        <input type="checkbox" checked={formData.isGoodBook} onChange={handleChange} />
        <button type="submit">{selectedBook ? 'Aktualisieren' : 'Erstellen'}</button>
      </form>
      <button><Link to={'/'}>Book Liste</Link></button>
    </div>
  );
}

export default BookForm;
