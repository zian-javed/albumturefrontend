import './App.css';
import { useState, useEffect } from "react";
import React from 'react';
import Spotify from './components/spotifyAPI';
import NavBar from './components/navbar/navBar.js';
import { Login } from "./components/login/login.js";
import { tokenLogin } from "./utils";


const App = () => {
  const [user, setUser] = useState();

useEffect( () => { tokenLogin (setUser); }, [] );

 
  return (
    <div className="App">
    
      
      <NavBar user={user} /> 

      {!user ? <Login setUser = {setUser} /> : <Login />}

      <Spotify/>
    
    </div>
  );
}

export default App;