import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar">
            <h3 className="navbar-brand">React Brand</h3>
            <nav className="nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/api">API Demo</Link>
                <Link className="nav-link" to="/drag-drop">Drag-n-Drop</Link>
            </nav>
        </header>
    )
}

export default Navbar;