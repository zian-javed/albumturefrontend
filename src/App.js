import './App.css';
import React from 'react';
import Spotify from './components/spotifyAPI';
import MyForm from './components/login/login.js';

function App() {
  return (
    <div className="App">
      
      <MyForm />
      <Spotify/>
     
    </div>
  );
}

export default App;
