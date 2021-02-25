import React, { CSSProperties } from 'react'; 
import MainContent from './MainContent';
import NavBar from './NavBar';


function Layout() {
    return(
        <div style={rootStyle}>
            <NavBar/>
            <MainContent/>
        </div>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', 
    background: 'red'
}

export default Layout; 