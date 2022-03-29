import './profile.css';
// import { useState } from 'react';

const UserProfile = ({stored, startEditCallback}) => {
    return (
        <div className='userProfile'>
            <label>User Name: {stored.username} </label>           
            <label>Email: {stored.email}</label> 
            <label>Password: {stored.pass}</label> 
            {/* <button>Show Password</button>                */}
            <button onClick={startEditCallback}>Edit</button>
        </div>
    )
};

export default UserProfile