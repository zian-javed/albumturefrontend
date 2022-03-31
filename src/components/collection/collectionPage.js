import React from 'react';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from '../navbar/navBar.js';
import './collectionPage.css';
import Footer from '../footer/footer.js';


const UserCollection = ({user, setUser}) => {
   
    return (
        <div className='collection'>
            {!user && <Navigate to="/" />}
            <NavBar user={user} setUser={setUser} />
            <h1> My Album Collection </h1>
            <div className='imageContainer'>
            <img className='images' src='./images/red.jpg' alt='album cover' />
            <img className='images' src='./images/6993.jpg' alt='album cover' />
            <img className='images' src='./images/crj.jpg' alt='album cover' />
            <img className='images' src='./images/cc.jpg' alt='album cover' />
            <img className='images' src='./images/bm.jpg' alt='album cover' />
            </div>
            <div className='imageContainer'>
            <img className='images' src='./images/Rick.png' alt='album cover' />
            <img className='images' src='./images/nd.jpg' alt='album cover' />
            <img className='images' src='./images/Behemoth.jpg' alt='album cover' />
            <img className='images' src='./images/pj.jpg' alt='album cover' />
            <img className='images' src='./images/will.jpg' alt='album cover' />
            </div>
            <br></br>
            <Link id='link1' to="/userPage">Back to your page</Link>
            <div>
           
            </div>
            <br></br>
            <br></br>
            <Footer/>
        </div>
    );
};

export default UserCollection;