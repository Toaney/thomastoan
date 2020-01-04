import React from 'react';
import Search from './search';
import TwitterFeed from './twitterFeed';
import './twitterFeed.scss'

const TwitterFeedFinder = () => {
    return (
        <div className="page">
            <div className="welcome-message">
                <h2>Welcome to the TwitterFeed Finder</h2>
                <p>Search for tweets by twitter handle in the search bar below.</p>
            </div>
            <Search/>
            <TwitterFeed/>
        </div>
    )
}

export default TwitterFeedFinder;