import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import TodoList from "./code-snippets/todo-list.js";
import Home from "./pages/home.js";

function App() {
  return (
    <Router>
    <div className="header-container">
      <Link className="no-underline header" to="/">Thomas Toan</Link>
    </div>
    <Route exact path="/" component={ Home } />
    <Route path="/todo-list" component={ TodoList } />
    </Router>
  );
}

export default App;
