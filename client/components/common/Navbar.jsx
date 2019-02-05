import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>
            <header className="grid-navbar">
                <h3 className="navbar-brand">Article Grid Brand</h3>
                <nav className="grid-nav">
                    <Link className="nav-link" to="#">NavLink 1</Link>
                    <Link className="nav-link" to="#">NavLink 2</Link>
                    <Link className="nav-link" to="#">NavLink 3</Link>
                </nav>
            </header>
        </Router>
    )
}

export default Navbar;