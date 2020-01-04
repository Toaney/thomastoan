import React from 'react';
import ListMovies from './listMovies';
import Search from './search';

const MovieFinder = () => {

    return(
        <div className="page">
            <div className="welcome-message">
                <h2>Welcome to the Movie Finder</h2>
                <p>Browse popular movies or search for movies by keyword in the searchbar below.</p>
            </div>
            <Search />
            <ListMovies />
        </div>
    )
}

export default MovieFinder;