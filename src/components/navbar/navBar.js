import React from 'react'
import "./navBar.css"
import { Link } from "react-router-dom";


const NavBar = (props) =>{
    return(
        <nav>
            <ul className='links'>
                <li>{props.user}</li>
                {/* should link to user variable in app.js */}
                <li>
                    <Link to="/collectionPage">My Collection</Link>
                </li>
                <li>
                    <Link to="/profile">My Profile</Link>
                </li>
                
            </ul>

            <img id='logo' src="images/AlbumtureLogo.png" alt='logo'/>
            {/* logo image link to something? */}

            <button id='logout'>Log out</button>
        </nav>
    )
}

export default NavBar