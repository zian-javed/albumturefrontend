
import './App.css';
import React from 'react';


import NavBar from './components/navbar/navBar.js';
const App = () => {
  const user = "Desk4"

  
  
  return (
    <>

      <NavBar user={user} /> 
    </>
  )
}
export default App;