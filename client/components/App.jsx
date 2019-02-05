import React from 'react';
import Navbar from './common/Navbar.jsx';
import Grid from './grid/Grid.jsx';
import Footer from './common/Footer.jsx';

class App extends React.Component {
    render() {
        return (
            <main>
                <Navbar />
                <Grid />
                <Footer />
            </main>
        );
    }
}

export default App;