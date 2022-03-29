import React from 'react'
import "./navBar.css"
import { Link , Navigate } from "react-router-dom";



const NavBar = (props) =>{

    const logOutHandler = () => {
        props.setUser();
        localStorage.removeItem("myToken");
     };
  

    return(
    
        <nav className=' navbar'>

            <div id='leftCol'>
            <ul >
                <li className='link1'> <Link id='link2' to="/userPage">{props.user}</Link> </li>
                {/* should link to user variable in app.js */}
                <li className='link1'>
                    <Link id='link2' to="/collectionPage">My Collection</Link>
                </li>

                <li className='link1'>
                    <Link id='link2' to="/profile" >My Profile</Link>
                </li>
                
            </ul>
            </div>

            <div id='middleCol'>
            <img id='logo' src="images/AlbumtureLogo.png" alt='logo'/>
            {/* logo image link to something? */} {!props.user && <Navigate to="/" />}
            </div>

            <div id='lastCol'>
            <button id='logoutButton' onClick={logOutHandler}>Log out</button> 
            </div>


        </nav>
    )
}

export default NavBar