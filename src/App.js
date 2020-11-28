import React from "react";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MenuProvider } from "./state";

import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navbar from "./components/navbar";
import Cursor from "./components/Cursor";

const GlobalStyle = createGlobalStyle`
  ${reset};

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  html ,body {
    font-family: 'Open Sans', sans-serif;box-sizing: border-box;
    background-color: var(--bg);
    color: var(--text);
  }

  * {
    margin: 0;
    padding: 0;
    cursor: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }

  ::-moz-selection {
    color: #fff;
    background: #FF4136;
  }
  ::selection {
    color: #fff;
    background: #FF4136;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,1);
  }
  ::-webkit-scrollbar-thumb {
    background: #FF4136;
    border-radius: 10%;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #CA0011;
  }
`;

const App = () => {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Cursor />
        <MenuProvider>
          <Navbar />
        </MenuProvider>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />
      </>
    </Router>
  );
};

export default App;
