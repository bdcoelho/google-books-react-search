const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  key: { type: String },
  id: { type: String },
  image: { type: String, required: true },
  title: { type: String, required: true },
  authors: { type: [], required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
