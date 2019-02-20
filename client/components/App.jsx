import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './global/Navbar.jsx';
import Home from './home/Home.jsx';
import DragDrop from './dragdrop/DragDrop.jsx';
import ApiDemo from './api-demo/ApiDemo.jsx';
import Footer from './global/Footer.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="layout">
                    <Navbar />
                    <Route exact path="/" component={Home}/>
                    <Route path="/drag-drop" component={DragDrop}/>
                    <Route path="/api" component={ApiDemo}/>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;