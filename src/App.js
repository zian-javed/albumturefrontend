import { useState } from "react";
import NavBar from './components/navbar/navBar.js';
import './App.css';

const App = () => {
  // const [user, setUser] = useState();
  const user = "something"

  return (
    <div className="App">
      <NavBar user={user} /> 
      <h1> Final Project </h1>

    </div>
  );
}

export default App;
