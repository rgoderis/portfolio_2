import React from 'react';

import './style.css'

function Header(){
    let logo = '<R/G>'
    return(
        <header className="navbar navbar-expand-lg navbar-dark header">
            <span className="navbar-brand text-info mb-0 h1">{logo}</span>
        </header>
    )
}

export default Header