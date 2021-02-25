import React, { CSSProperties } from 'react'; 
import Background from '../assets/pics/wallpaper.png'

function MainContent() {
    return(
        <main style={rootStyle}> 
            <img style={imgStyle} src={Background} alt=""/>
        </main>
    )
}


const rootStyle: CSSProperties = {
    width: '100%', 
    height: '100%', 
    overflow: 'hidden', 
    display: 'flex', 
    justifyContent: 'center'
}

const imgStyle: CSSProperties = {
    flex: 1
}

export default MainContent; 
