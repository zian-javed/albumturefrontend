import React from 'react'
import "./navBar.css"
import { Link , Navigate } from "react-router-dom";



const NavBar = (props) =>{

    const logOutHandler = () => {
        props.setUser();
        localStorage.removeItem("myToken");
     };
  

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
            
             {!props.user && <Navigate to="/" />}

            <button onClick={logOutHandler}>Log out</button> 
        </nav>
    )
}

export default NavBar