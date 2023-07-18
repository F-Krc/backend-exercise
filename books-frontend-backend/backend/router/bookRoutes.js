import { Router } from "express";
import { deleteBook, getBooks, getBook, postBooks, updateBook } from "../controller/bookController.js";

// Wir müssen den Router initialisieren.
const bookRouter = Router(); 

bookRouter
    .get("/books", getBooks)
    .get("/books/:id", getBook)
    .post("/books", postBooks)
    .patch("/book/:id", updateBook)
    .delete("/book/:id", deleteBook);

export default bookRouter;