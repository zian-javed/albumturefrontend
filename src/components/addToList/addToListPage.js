import React from 'react';
import NavBar from '../navbar/navBar.js';
import Spotify from '../spotifyAPI.js';


const AddToList = ({user, setUser}) => {
   
    return (
        <div className='list'>
            <NavBar user={user} setUser={setUser} />
            <h1> add album to your list </h1>
            <Spotify/>
        </div>
    );
};

export default AddToList;