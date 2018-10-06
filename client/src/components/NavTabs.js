import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (

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
);

export default NavTabs;