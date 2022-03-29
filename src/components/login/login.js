import { useState } from "react";
import { createUser, login } from "../../utils"; 
import { Navigate } from "react-router-dom";
import './login.css';

export const Login = ({user, setUser}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);
  const [name, setName] = useState('Create an account.');

  const handleClick = (e) => {
    e.preventDefault();
    setName("Let's get you logged in.");
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
       {/* <NavBar user={user} /> */}

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

        {/* <label>username</label>  */}

        <br></br>
        
        {!bool && 
          <>
          <input onChange={(event) => setEmail(event.target.value) } type="email"
          placeholder = "  email "/>
          <br></br>
          {/* <label>email</label> */}
          <br></br>
          </>
          }
          
          <input onChange={(event) => setPass(event.target.value) } type="password"
          placeholder = "  password " />
          <br></br>
          {/* <label>password</label>  */}
          <br></br>
          <button type="submit">{!bool ? " Press to create account " : "Login"} </button>
          <br></br>
          <br></br>
        </form>

       

        <label className="label">{!bool ? " Already have an account? " : " Don't have an account?  " } </label>

        <button onClick={handleClick}> Click here! </button>


      </div>
    </div>
  )
};

