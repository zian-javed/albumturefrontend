import React from 'react';
import NavBar from '../navbar/navBar.js';
import { Link } from "react-router-dom";
import Footer from '../footer/footer.js';

import './userPage.css';

const UserContent = ({user, setUser}) => {
   
    return (
        <div>
             
            <div>
            <NavBar user={user} setUser={setUser} />
            </div>
           
            <div className='userContent'>

                <div className='leftCol'>
                <img src='./images/13f.png' alt="Adele" />
                {/* <p> Welcome, friend! {user} </p> */}
                </div>
                <div className='rightCol'>
                <div className="container01">
                <p className="title">
                    <span className="title-word title-word-1">Welcome </span>
                    <span className="title-word title-word-2"> to</span>
                    <span className="title-word title-word-3"> Albumture</span>
                    <br></br>
                    <span className="title-word title-word-4">{user}</span>
                </p>
                {/* <p className='texta'> Welcome, friend! {user} </p> */}
                <p className="textb">Click below to search for new music</p>
                <Link id='link1' to="/addToListPage">Search for Albums</Link>
             
                {/* <img src='./images/6a.png' alt="cool" /> */}

                </div>
                
            </div>
            <div>
               
                </div>
            </div>
          

                    
                    <div className='suggestion'>
                
                    <div className="containerAlbum">
                    <img src='./images/Adele.jpeg' alt="Adele" />
                    <img src='./images/deathM.png' alt="Death Metal" />
                    <img src='./images/Kate.jpg' alt="Kate" />
                    <img src='./images/Weird.jpeg' alt="Weird" />
                    <img src='./images/Skrillex.jpeg' alt="Skrillex" />
                    <img src='./images/yusuf.png' alt="yusuf" />
                    </div>
                     {/* <div className="sugtext"><p>Suggested Albums</p></div> */}
                </div>
                <Footer />
    </div>




       
    );
};

export default UserContent;