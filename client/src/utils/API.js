import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Gets all books
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (savedBooks) {
    console.log(savedBooks);
    return axios.post("/api/books", savedBooks);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};
