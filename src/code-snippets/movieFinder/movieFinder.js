import React from 'react';
import ListMovies from './listMovies';
import Search from './search';

const MovieFinder = () => {

    return(
        <React.Fragment>
            <div className="row">
                <div className="profile">
                    <p>Displayed below is the UI for Movie Finder. A link to the full project can be found in this <a href="https://github.com/toaney/movie-finder" alt="movie finder repository" target="_blank">Git Repository</a>. Refer to the project's README for full installation instructions.</p>
                </div>
            </div>
            <div className="page">
                <div className="welcome-message">
                    <h2>Welcome to the Movie Finder</h2>
                    <p>Browse popular movies or search for movies by keyword in the searchbar below.</p>
                </div>
                <Search />
                <ListMovies />
            </div>
        </React.Fragment>
    )
}

export default MovieFinder;