import { useState } from "react";
import { createUser, login } from "../../utils"; 
// import { NavBar } from "../navbar/navBar.js";
//  navBar doesnt load here 
import './login.css';


export const Login = ({setUser}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);
  const [name, setName] = useState('Create an account');
 

  const handleClick = (e) => {
    e.preventDefault();
    setName("let's get you logged in");
    setBool(!bool)

  }

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({username: username, email: email, pass: pass});
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

    {/* {user && <Navigate to="/collectionPage" />} */}


    <div className="welcome">

          <img src={bool ? "./images/photo3.png" : "./images/photo1.png"} alt="left menu" ></img> 
       
         
          
    </div>

    <div>

      <h1> {name} </h1>

       <form onSubmit={submitHandler}>

    
        <input 
         onChange={(event) => setUsername(event.target.value)}
        />
      
       <br></br>
       
       <label>username</label> 

       <br></br>
      
    
      {!bool && 
        <>
        <input 
        onChange={(event) => setEmail(event.target.value) }
        type="email"/>
        <br></br>

        <label>email</label>
        
        <br></br>
        </>
        }
        
       

        <input 

        onChange={(event) => setPass(event.target.value) } 
        type="password" />
       
        <br></br>

        <label>password</label> 

        <br></br>

        <button 
        type="submit">{!bool ? "Press to create account" : "Login"}
        </button>

    

        </form>
        <label>{!bool ? "Already have an account?" : "Don't have an account" }</label>
        <button 
        onClick={handleClick}>Click here! 
        </button>

      </div>
    </div>
  )
};

