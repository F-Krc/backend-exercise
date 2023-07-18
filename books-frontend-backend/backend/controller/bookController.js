import BookModel from "../models/bookModel.js"

export const getBooks = async (req, res) => {
   try {
      const books = await BookModel.find();
      res.send(books);
   } catch (error) {
      res.send("books could not be found. " + error.message);
   }
}

export const getBook = async (req, res) => {
     try {
       const book = await BookModel.findById(req.params.id);
       res.send(book);
     } catch (error) {
       res.send('book could not be found. ' + error.message);
     }
}

export const postBooks = async (req, res) => {
   try {
      const newBook = new BookModel(req.body);
      await newBook.save(); 
      res.send("Buch gespeichert.");
   } catch (error) {
      res.send("book could not be saved. " + error.message);
   }
}

export const updateBook = async (req, res) => {
   const bookId = req.params.id; 
   const newBook = req.body;

   try {
      // new: true sagt das const updatedBook sich auf das neue Buch bezieht
      const updatedBook = await BookModel.findByIdAndUpdate(bookId, newBook, { new: true}); 
      res.send(`book updated:  ${updatedBook}`)
   } catch (error) {
      res.send("book could not be patched. " + error.message);
   }
}

export const deleteBook = async(req, res) => {
   const bookId = req.params.id;
   try {
      // new: true sagt das const updatedBook sich auf das neue Buch bezieht
      const deletedBook = await BookModel.findByIdAndDelete(bookId);
      res.send(`book deleted!`)
   } catch (error) {
      res.send("book could not be deleted. " + error.message);
   }

}