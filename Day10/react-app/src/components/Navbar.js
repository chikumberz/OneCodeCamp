import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
       <div className="navHeader">
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
       </div>
    );
}

export default Navbar;

