import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar">
            <h3>Logo</h3>

            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/register">
                    <li>Register</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;