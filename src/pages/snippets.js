import React from 'react';
import TodoList from '../code-snippets/todo-list'

function Snippets() {
    const [displayLink, setDisplayLink] = React.useState("default");

    return(
        <React.Fragment>
            <div className="snippets-header">
                <h2>Code Snippets</h2>
            </div>
            <div className="snippets-container">
                {/* //add sidebar component */}
                <div className="snippets-sidebar">
                    <button class="sidebar-link" onClick={event => setDisplayLink("todo-list")}>
                        Todo List
                    </button>
                    <button class="sidebar-link" onClick={event => setDisplayLink("twitter-feed-finder")}>
                        Twitter Feed
                    </button> 
                    <button class="sidebar-link" onClick={event => setDisplayLink("movie-finder")}>
                        Movie Finder
                    </button> 
                    <button class="sidebar-link" onClick={event => setDisplayLink("nasa-event-finder")}>
                        Nasa Events
                    </button> 
                </div>
                {/* //add content component */}
                <div className="snippets-content">
                    <div class="link-1"></div>
                    {displayLink === "default"? <div>Click the links to the left to explore different code snippets and components.</div> : ""}
                    {displayLink === "todo-list"? <TodoList /> : ""}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Snippets;