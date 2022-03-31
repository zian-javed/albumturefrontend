import React from 'react';
import Spotify from '../spotifyAPI.js';
import { Link } from "react-router-dom";
import Footer from '../footer/footer.js';
import "./AddToListPage.css"



const AddToList = () => {
   
    return (
        <>
        <div className='list'>
           
        <h3 className='heroText'> 
 			<span className="heroText-word heroText-word-1">Searching </span> 
			<span className="heroText-word heroText-word-2">for your favourite </span> 					<span className="heroText-word heroText-word-3">album, </span> 
			<span className="heroText-word heroText-word-4">made easy.</span>
            
	</h3>
    
            <Spotify/>
            <p>
             <Link id='goBack' to="/userPage">Go Back to User Page</Link>
         </p>
        </div>
            <Footer />
       </>
    );
};

export default AddToList;