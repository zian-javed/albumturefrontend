import { useState } from "react";
import './profile.css';

const Profile = (props) =>{
    return(
        <div className="profile">
            <div>
                <h1>My Profile</h1>

                <button>Edit</button>
            </div>

            <form>
                <label>username</label> 
                <input/>

                <label>email</label>
                <input type="email"/>

                <label>password</label> 
                <input type="password" />

                <button>Save Changes</button>
            </form>

            <button>Delete Account</button>

        </div>
    )
};

export default Profile