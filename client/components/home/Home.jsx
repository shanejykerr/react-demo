import React from 'react';

const Home = () => {
    return(
        <main className="home">
            <h1>Welcome to my React Demo!</h1>
            <section>
                <summary className="demo-summary">
                    By clicking on the links in the navbar, you will be looking through various demos of my
                    capabilities with React and Redux, along with various other libraries and plugins. As time
                    goes on, I will be adding more and more functionality to this demo and older components 
                    will be updated as better practices become developed.
                </summary>
                <details className="update-summary" open>
                    <summary className="update-tab">
                        <h3 className="update-header">Functionality in Development</h3>
                    </summary>
                    In the API Demo Table, I will be adding a "favorites" table, in which you can save specific 
                    items upon making any kind of Ajax call. I will also be adding functionality that allows 
                    users to choose amongst a selection of potential APIs, which will be shown on an aside to 
                    the table's left. Lastly, I will be adding search functionality, so you can search for any 
                    specific results that come to mind, instead of scrolling through the table manually.
                </details>
            </section>
        </main>
    )
}

export default Home;