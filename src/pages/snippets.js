import React from 'react';
import TodoList from '../code-snippets/todo-list'

function Snippets() {
    const [displayLink, setDisplayLink] = React.useState("default");

    return(
        <React.Fragment>
            <h2>Code Snippets</h2>
            <div className="snippets-container">
                {/* //add sidebar component */}
                <div className="snippets-sidebar">
                    <button class="sidebar-link" onClick={event => setDisplayLink("todo-list")}>
                        Todo List
                    </button> 
                </div>
                {/* //add content component */}
                <div className="snippets-content">
                    {displayLink? <div>true</div> : <div>false</div>}
                    <div class="link-1"></div>
                    {displayLink === "default"? <div>Default</div> : ""}
                    {displayLink === "todo-list"? <TodoList /> : ""}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Snippets;