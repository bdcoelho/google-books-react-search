import React from "react";

const AppContext = React.createContext({
  books: [],
  results: []
});

export default AppContext;