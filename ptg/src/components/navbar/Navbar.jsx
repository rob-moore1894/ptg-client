import React from 'react';
import './Navbar.css';
import logo from '../../img/Peformance-Therapy-Group-Austin-TX.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><img className="navbar__logo" src={logo} alt="PTG Logo"></img></Link>
            <div className="navbar__links">
                <div className="navbar__schedule">
                    Call to Schedule <a href="tel:5123309965">(512) 330-9965</a>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Schedule</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
