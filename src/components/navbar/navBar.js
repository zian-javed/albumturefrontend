import React from 'react'
import "./navBar.css"

const NavBar = () =>{
    return(
        <nav>
            <ul className='links'>
                <li>Profile Name Here</li>
                {/* should link to user profile */}
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