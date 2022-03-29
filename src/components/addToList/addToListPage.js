import React from 'react';
import Spotify from '../spotifyAPI.js';
import { Link } from "react-router-dom";



const AddToList = () => {
   
    return (
        <>
        <div className='list'>
           
            <h1> add album to your list </h1>
        
            <Spotify/>
        </div>
        <div>
         <ul className='links'>
        
        <li>
             <Link to="/userPage">back to you main page</Link>
         </li>

         </ul>
       </div>
       </>
    );
};

export default AddToList;