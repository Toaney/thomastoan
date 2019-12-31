import React from 'react';

function Snippets() {
    const [displayLink1, setDisplayLink1] = React.useState(false);

    return(
        <div className="snippets-container">
            <h2>Code Snippets</h2>
            {/* //add sidebar component */}
            <div className="snippets-sidebar">
                <button class="sidebar-link">
                    button
                </button>
            </div>
            {/* //add content component */}
            <div className="snippets-content">
                {displayLink1? <div>true</div> : <div>false</div>}
                <div class="link-1"></div>
            </div>
        </div>
    )
}

export default Snippets;