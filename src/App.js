import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import TodoList from "./code-snippets/todo-list.js";
import Home from "./pages/home.js";
import Snippets from "./pages/snippets.js";

function App() {
  return (
    <Router>
      <div className="header-container">
        <Link className="no-underline header" to="/">Thomas Toan</Link>
      </div>
      <Route path="/snippets" component={ Snippets } />
      <Route path="/home" component={ Home } />
      <Route path="/todo-list" component={ TodoList } />
      <Route exact path="/" component={ Home } />
    </Router>
  );
}

export default App;
