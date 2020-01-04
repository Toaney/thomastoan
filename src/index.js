import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './scss/styles.scss'
// import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoList from "./code-snippets/todo-list.js";
import Home from "./pages/home.js";
import Snippets from "./pages/snippets.js";

ReactDOM.render(
    <Router>
        <App />
        <Route path="/snippets" component={ Snippets } />
        <Route path="/home" component={ Home } />
        <Route path="/todo-list" component={ TodoList } />
        <Route exact path="/" component={ Home } />
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
