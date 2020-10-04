import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Search for books
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  // Get all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Save book to the database
  saveBook: function (savedBooks) {
    return axios.post("/api/books", savedBooks);
  },
  // Delete book by ID
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};
