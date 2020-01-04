import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './App.css';
// import './scss/styles.scss'
import TodoList from "./code-snippets/todo-list.js";
import Home from "./pages/home.js";
import Snippets from "./pages/snippets.js";
import Nav from "./components/nav.js";

function App() {
  return (
      <div className="header-container">
        <Link className="no-underline header" to="/">Thomas Toan</Link>
      </div>
  );
}

export default App;
