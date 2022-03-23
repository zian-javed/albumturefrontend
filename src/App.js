import './App.css';
import React from 'react';
import Spotify from './components/spotifyAPI';
import MyForm from './components/login/login.js';
import NavBar from './components/navbar/navBar.js';

function App() {
  const user = "Desk4"
  return (
    <div className="App">
      
      <NavBar user={user} /> 
      <MyForm />
      <Spotify/>
    
    </div>
  );
}

export default App;