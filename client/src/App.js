import React, { useState, useEffect } from "react";
import API from "../src/utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import DataAreaContext from "../src/utils/DataAreaContext";

function App() {
  // Setting our component's initial state
  const [developerState, setDeveloperState] = useState({
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
        setDeveloperState({ 
          ...developerState,
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
        setDeveloperState({ 
          ...developerState,
          books: res.data.items
        })
      })
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    event.preventDefault();
    // setSearchValue(event.target.value);
    setDeveloperState({ 
      ...developerState,
      searchValue: event.target.value
    })
  };

  // When the form is submitted, search the Google Books API for `this.state.search`
  function handleFormSubmit(event) {
    event.preventDefault();
    searchBooks(developerState.searchValue);
  };

  function handleSavedButton(event) {
    event.preventDefault();
    console.log(developerState.books)
    developerState.books.forEach(book => {
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
          .then(res => setDeveloperState({ 
            ...developerState,
            savedBooks: res.data 
          }))
          .then( alert("Your book is saved") )
          .catch(err => console.log(err))
      }
    });
  }

  console.log(developerState.savedBooks);

  return (
    <DataAreaContext.Provider
    value={{ developerState, handleInputChange, handleFormSubmit, handleSavedButton, deleteBook }}
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
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </DataAreaContext.Provider>
  );
}

export default App;
