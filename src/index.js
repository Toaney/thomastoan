import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './scss/styles.scss'
// import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoList from "./code-snippets/todo-list.js";
import Home from "./pages/home.js";
import Snippets from "./pages/snippets.js";
import rootReducer from "./reducers/rootReducer.js";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
            <Switch>
                <Route path="/snippets" component={ Snippets } />
                <Route path="/home" component={ Home } />
                <Route path="/todo-list" component={ TodoList } />
                <Route exact path="/" component={ Home } />
            </Switch>
        </Router>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
