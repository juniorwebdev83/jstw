import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item"><a href="#home">Home</a></li>
                <li className="navbar-item"><a href="#about">About</a></li>
                <li className="navbar-item"><a href="#services">Services</a></li>
                <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
            <div className="flashlight"></div>
        </nav>
    );
}

export default Navbar;
