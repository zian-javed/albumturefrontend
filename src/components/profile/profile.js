import React from 'react'
import './profile.css';
import { useState } from 'react';
import NavBar from '../navbar/navBar.js';
import { updatePass } from "../../utils";
import { Navigate } from "react-router-dom";
import Footer from '../footer/footer.js';

const Profile = ({user, setUser}) => {
    const [editMode, setEditMode] = useState(false);
    const [passUpdate, setPass] = useState();

    const submitHandler = (e) =>{
        e.preventDefault();
        updatePass(user, passUpdate)
        setEditMode(false)
    };

    return (
        <div className='profilepage'>
            {!user && <Navigate to="/" />}
            <NavBar user={user} setUser={setUser} />
            <div className="profileContainer">
                <div className='profileImage'>
                    <img src="./images/profile-image.png" alt="profile of the collaborators" ></img>
                </div>
                <div className='profileInfo'>   
                    { editMode ? 
                        <>
                            <form onSubmit={submitHandler}>
                                <input type="password"  placeholder="Enter New Password"  onChange={(e) => setPass(e.target.value)}/> 
                                <button className='btn' type="submit" >Update Password</button>
                            </form>
                        </>
                        : <>
                            <h1>My Profile</h1>
                            <div className='userProfile'>
                                <label className='userDetail'><span id='bold'>User Name:&nbsp;</span>  {user} </label>  
           
                                <label className='userDetail'><span id='bold'>Password:&nbsp;</span>    ****** </label>     
  
                                <label className='userDetail'><span id='bold'>Bio:&nbsp;</span>  Tobey Maguire is the better Spider-Man. #changemymind</label>     
                     
                                <label className='userDetail'><span id='bold'>Favourite Album:&nbsp;</span>Spice World - Space Girls</label>     
     
                                <button className='btn' onClick={() => setEditMode(true)}>Change Password</button>
                            </div>
                        </>
                    } 
                </div>
               
            </div>
         <Footer/>         
        </div>
    );
}

export default Profile