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
    height: '4rem', 
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

export default NavBar;