import React from 'react';
import {Link} from 'react-router-dom'

import './style.css'

function Header(){
    let logo = '<R/G>'
    return(
        <header className="navbar navbar-expand-lg navbar-dark header">
            <Link to="/" className="navbar-brand text-info mb-0 h1">{logo}</Link>
            <button className="navbar-toggler bg-info" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="float-right nav-link text-info">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Resume" className="float-right nav-link text-info">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="float-right nav-link text-info">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header