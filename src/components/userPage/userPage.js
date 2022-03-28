import React from 'react';
import NavBar from '../navbar/navBar.js';
import { Link } from "react-router-dom";
import Spotify from '../spotifyAPI.js';

const UserContent = ({user}) => {
   
    return (
        <div className='userContent'>
            <NavBar user={user} />
            <h1> this is the user page </h1>
            <Spotify/>
            <Link to="/addToListPage">Let's add more</Link>
        </div>
    );
};

export default UserContent;