// import { useState } from "react";
// import './profile.css';

// const Profile = (props) =>{
//     return(
//         <div className="profile">
//             <div>
//                 <h1>My Profile</h1>

//                 <button>Edit</button>
//             </div>

//             <form>
//                 <label>username</label> 
//                 <input/>

//                 <label>email</label>
//                 <input type="email"/>

//                 <label>password</label> 
//                 <input type="password" />
//                 <button>Show Password</button>

//                 <button>Save Changes</button>
//             </form>

//             <button>Delete Account</button>

//         </div>
//     )
// };

// export default Profile

import './profile.css';
import { useState } from 'react';
import EditableUserProfile from '../profile/EditableUserProfile';
import UserProfile from "../profile/UserProfile";
import NavBar from '../navbar/navBar.js';

const Profile = ({user ,setUser}) => {
    const [editMode, setEditMode] = useState(false);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const stored = {username, email, pass};

    function handleEditComplete(result) {
        if (result != null) {
            setUsername(result.username);
            setEmail(result.email);
            setPass(result.pass);
        }        
        setEditMode(false);
    }

    return (
        <div className="profileContainer">
            <NavBar user={user} setUser={setUser} />
            { editMode ? 
                <>
                    <h1>Edit Profile</h1>
                    <EditableUserProfile
                        stored={stored}
                        editCompleteCallback={handleEditComplete}
                    />
                </>
                : <>
                    <h1>My Profile</h1>
                    <UserProfile
                        stored={stored}
                        startEditCallback={() => setEditMode(true)}
                    />
                </>
            }            
        </div>
    );
}

export default Profile