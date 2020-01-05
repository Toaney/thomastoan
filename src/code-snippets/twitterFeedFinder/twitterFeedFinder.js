import React from 'react';
import Search from './search';
import TwitterFeed from './twitterFeed';
import './twitterFeed.scss'

const TwitterFeedFinder = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="profile">
                    <p>Displayed below is the UI for the Twitter Feed Finder and requires a server to fully function. This full project can be downloaded from this git repository and run locally. Refer to the README for full installation instructions. Note that this project requires the user to input Twitter Developer credentials to run properly.</p>
                </div>
            </div>
            <div className="page">
                <div className="welcome-message">
                    <h2>Welcome to the TwitterFeed Finder</h2>
                    <p>Search for tweets by twitter handle in the search bar below.</p>
                </div>
                <Search/>
                <TwitterFeed/>
            </div>
        </React.Fragment>
    )
}

export default TwitterFeedFinder;