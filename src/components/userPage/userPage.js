import React from 'react';
import NavBar from '../navbar/navBar.js';
import { Link } from "react-router-dom";

import './userPage.css';

const UserContent = ({user, setUser}) => {
   
    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <div className='userContent'>
                <div className='leftCol'>
                <p> Welcome, friend! {user} </p>
                </div>
                <div className='rightCol'>
                <Link id='link1' to="/addToListPage">Search for Albums</Link>
                </div>
                
            
                
            </div>
            

            <div className='suggestion'>
                <h3>Suggested Albums</h3>
                <div className="containerAlbum">
                    <img src='./images/Adele.jpeg' alt="Adele" />
                    <img src='./images/deathM.png' alt="Death Metal" />
                    <img src='./images/Kate.jpg' alt="Kate" />
                    <img src='./images/Weird.jpeg' alt="Weird" />
                    <img src='./images/Skrillex.jpeg' alt="Skrillex" />
                    <img src='./images/Smurfs.jpeg' alt="Smurfs" />
                </div>
            </div>




        </div>
    );
};

export default UserContent;