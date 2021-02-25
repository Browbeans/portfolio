import React, { CSSProperties } from 'react'; 

function NavBar() {
    return(
        <header style={rootStyle}>
            <h1>Hellow</h1>
        </header>
    )
}

const rootStyle: CSSProperties = {
    background: '#6e3b3b', 
    color: 'white',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    height: '4rem'
}

export default NavBar;