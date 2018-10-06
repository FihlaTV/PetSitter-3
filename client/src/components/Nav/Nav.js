import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                >
                    Sign-In
            </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/signup"
                    className={
                        window.location.pathname === "/signup" ? "nav-link active" : "nav-link"
                    }
                >
                    Sign-Up
            </Link>
            </li>
        </ul>
    </nav>
);

export default Nav;

