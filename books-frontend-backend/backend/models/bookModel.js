import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    isGoodBook: Boolean
});

const BookModel = mongoose.model("Book", bookSchema);
export default BookModel;