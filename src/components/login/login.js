import { useState } from "react";
import { createUser, login } from "../../utils"; 
import { Navigate } from "react-router-dom";
import './login.css';
import Footer from '../footer/footer.js';

export const Login = ({user, setUser}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);
  const [name, setName] = useState("Let's Create An Account");
  
  const handleClick = (e) => {
    e.preventDefault();
    setName("Let's Get You Logged In.");
    setBool(!bool)
  }

  const submitHandler = (e) => {
    e.preventDefault();
   
    if (bool) {
      login(username, pass, setUser);
    } else {
    if( email && email.includes("@")) {
    createUser(username, email, pass, setBool);
   }
  }
};
  return (
    
    <div className="loginpage">
     

    <div className="welcome">
          <img src={bool ? "./images/photo4.png" : "./images/photo1.png"} alt="left menu" ></img>      
    </div>

    <div>

      <div className="logText"><h1> {name} </h1> </div>

      {user && <Navigate to="/collectionPage" />}

      <form className="formlog" onSubmit={submitHandler}>
        
        <input onChange={(event) => setUsername(event.target.value)}
          placeholder = "  username " />
        <br></br> 
        <br></br>
        <br></br>
        
        
        {!bool && 
          <>
          <input onChange={(event) => setEmail(event.target.value) } type="email"
          placeholder = "  email "/>
          <br></br>
          <br></br>
          <br></br>
        
          </>
          }
          
          <input onChange={(event) => setPass(event.target.value) } type="password"
          placeholder = "  password " />
          <br></br>
          {/* <label>password</label>  */}
          <br></br>
          <br></br>
          <br></br>
          <button className="logB" type="submit">{!bool ? " Press to Create Account " : "Login"} </button>
          <br></br>
          <br></br>
          <br></br>
        </form>

       

        <label className="label">{!bool ? " Already have an account? " : " Don't have an account?  " } </label>

        <button className="logV" onClick={handleClick}> Click here! </button>


      </div>
      <Footer/>
    </div>
  )
};
