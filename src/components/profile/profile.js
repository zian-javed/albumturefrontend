import React from 'react'
import './profile.css';
import { useState } from 'react';
import NavBar from '../navbar/navBar.js';
import { updatePass, deleteUser } from "../../utils";

const Profile = ({user , email, pass, setUser}) => {
    const [editMode, setEditMode] = useState(false);
    const [passUpdate, setPass] = useState();

    const submitHandler = (e) =>{
        e.preventDefault();
        updatePass(user, passUpdate)
        setEditMode(false)
    };

    return (
        <div className="profileContainer">
            <NavBar user={user} setUser={setUser} />
            { editMode ? 
                <>
                    <form onSubmit={submitHandler}>
                        <input type="password"  placeholder="Enter New Password"  onChange={(e) => setPass(e.target.value)}/>
                        <button type="submit" >Update Password</button>
                    </form>
                </>
                : <>
                    <h1>My Profile</h1>
                    <div className='userProfile'>
                        <label>User Name: {user} </label>           
                        <label>Email: {email}</label> 
                        <button onClick={() => setEditMode(true)}>Edit Password</button>
                        <button onClick={() => deleteUser(user.id)}>Delete Account</button>
                    </div>
                </>
            }            
        </div>
    );
}

export default Profile