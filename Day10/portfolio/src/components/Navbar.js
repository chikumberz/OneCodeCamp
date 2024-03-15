import React from 'react'
import Logo from './Logo'
import '../assests/css/Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar flex">
            <div className="logo-container flex-1"><Logo /></div>

            <ul className="navigation flex">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-me">About ME</NavLink></li>
                <li><NavLink to="/photography">Photography</NavLink></li>
                <li><NavLink to="/contact-me">Contact Me</NavLink></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar