import React from 'react';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from '../navbar/navBar.js';


const UserCollection = ({user}) => {
   
    return (
        <div className='collection'>
            {!user && <Navigate to="/" />}
            <NavBar user={user} />
            <h1> collection page content </h1>
            <Link to="/userPage">Add album</Link>
        </div>
    );
};

export default UserCollection;