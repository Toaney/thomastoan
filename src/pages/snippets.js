import React from 'react';

function Snippets() {
    const [displayLink, setDisplayLink] = React.useState("default");


    return(
        <React.Fragment>
            <h2>Code Snippets</h2>
            <div className="snippets-container">
                {/* //add sidebar component */}
                <div className="snippets-sidebar">
                    <button class="sidebar-link" onClick={event => setDisplayLink("button1")}>
                        button 1
                    </button> 
                </div>
                {/* //add content component */}
                <div className="snippets-content">
                    {displayLink? <div>true</div> : <div>false</div>}
                    <div class="link-1"></div>
                    {displayLink === "default"? <div>Default</div> : ""}
                    {displayLink === "button1"? <div>Button 1</div> : ""}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Snippets;