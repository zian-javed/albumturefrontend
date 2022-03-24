import React from 'react'
import "./navBar.css"

const NavBar = (props) =>{
    return(
        <nav>
            <ul className='links'>
                <li>{props.user}</li>
                {/* should link to user variable in app.js */}
                <li>My Collection</li>
                {/* should link to user collection */}
            </ul>

            <img id='logo' src="images/AlbumtureLogo.png" alt='logo'/>
            {/* logo image link to something? */}

            <button id='logout'>Log out</button>
        </nav>
    )
}

export default NavBar