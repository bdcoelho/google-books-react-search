import React, { useState, useEffect } from "react";
import API from "../src/utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/PageSearch";
import Saved from "./components/PageSaved";
import Invalid from "./components/Invalid";
import Nav from "./components/Header";
import AppContext from "../src/utils/AppContext";

function App() {
  // Setting our component's initial state
  const [bookState, setbookState] = useState({
    searchValue: "",
    books: [],
    savedBooks: []
  });

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setbookState({ 
          ...bookState,
          savedBooks: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  function searchBooks(query) {
    console.log(query)
    API.search(query)
      .then(res => {
        console.log(res.data.items);
        setbookState({ 
          ...bookState,
          books: res.data.items
        })
      })
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    event.preventDefault();
    // setSearchValue(event.target.value);
    setbookState({ 
      ...bookState,
      searchValue: event.target.value
    })
  };

  // When the form is submitted, search the Google Books API for `this.state.search`
  function handleFormSubmit(event) {
    event.preventDefault();
    searchBooks(bookState.searchValue);
  };

  function handleSavedButton(event) {
    event.preventDefault();
    console.log(bookState.books)
    bookState.books.forEach(book => {
      if (book.id === event.target.id) {
        console.log(book);
        API.saveBook({
          key: book.id,
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.smallThumbnail,
          link: book.volumeInfo.previewLink
        })
          .then(res => setbookState({ 
            ...bookState,
            savedBooks: res.data 
          }))
          .then( alert("Your book is saved") )
          .catch(err => console.log(err))
      }
    });
  }

  console.log(bookState.savedBooks);

  return (
    <AppContext.Provider
    value={{ bookState, handleInputChange, handleFormSubmit, handleSavedButton, deleteBook }}
    >
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path={["/saved"]}>
              <Saved />
            </Route>
            <Route>
              <Invalid />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
