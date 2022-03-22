import React from 'react'
import "./navBar.css"

const NavBar = () =>{
    return(
        <nav>
            <div className='links'>
                <h2>Profile Name Here</h2>
                {/* should link to user profile */}
                <h2>My Collection</h2>
                {/* should link to user collection */}
            </div>

            <img id='logo' src="images/AlbumtureLogo.png" alt='logo'/>
            {/* logo image link to something? */}

            <button id='logout'>Log out</button>
        </nav>
    )
}

export default NavBar