import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return(
        <div className="nav-container">
            <Link className="nav-link" to="/">home</Link>
            <Link className="nav-link" to="/snippets">snippets</Link>
        </div>
    )
}

export default React;