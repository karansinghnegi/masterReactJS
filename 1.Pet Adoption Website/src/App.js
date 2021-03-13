import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Router } from '@reach/router';
import SearchParams from './SearchParams';
import Details from "./Details";
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('darkblue');
  console.log(themeHook)
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
         <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <Details path="/details/:id" />
          <SearchParams path="/" />
        </Router>
       </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));