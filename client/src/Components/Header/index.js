import React from 'react';

function Header(){
    let logo = '<RG/>'
    return(
        <header className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <h1 className="text-white container">{logo}</h1>
        </header>
    )
}

export default Header