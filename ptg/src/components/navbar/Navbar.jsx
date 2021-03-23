import React from 'react';
import './Navbar.css';
import logo from '../../img/Peformance-Therapy-Group-Austin-TX.png';

function Navbar() {
    return (
        <div className="navbar">
            <a href="/"><img className="navbar__logo" src={logo} alt="PTG Logo"></img></a>
            Navbar here
        </div>
    )
}

export default Navbar
