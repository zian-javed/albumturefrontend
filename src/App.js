import './App.css';
import { useState, useEffect } from "react";
import React from 'react';
import Spotify from './components/spotifyAPI';
import NavBar from './components/navbar/navBar.js';
import { Login } from "./components/login/login.js";
import { tokenLogin } from "./utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/landing/landingPage";
import { NewUser } from './components/newUser/newUserPage';
import { ExistingUser } from './components/existingUser/existingUserPage';
import { UserProfile } from './components/userProfile/userProfilePage';
import { UserCollection } from './components/collection/collectionPage';



const App = () => {
  const [user, setUser] = useState();

useEffect( () => { tokenLogin (setUser); }, [] );

 
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar user={user} /> 

      {/* {!user ? <Login setUser = {setUser} /> : <Login />} */}

      {/* <Spotify/> */}

      <Routes>
        <Route path='/' element={!user ? <Login setUser = {setUser} /> : <Login />} />
        <Route path="/landingPage" element={<Landing />} />
        <Route path="/newUserPage" element={<NewUser />} />
        <Route path="/existingUserPage" element={<ExistingUser />} />
        <Route path="/UserProfilePage" element={<UserProfile />} />
        <Route path="/collectionPage" element={<UserCollection />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;