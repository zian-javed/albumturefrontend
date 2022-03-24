import { useState } from "react";
import { createUser, login } from "../../utils"; 
import './login.css';

export const Login = ({setUser}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({username: username, email: email, pass: pass});
    if (bool) {
      login(username, pass, setUser);
    } else {
    if( email && email.includes("@")) {
    createUser(username, email, pass, setUser);
   }
  }
};


 

  return (
    <div className="loginpage">


    <div className="welcome">
          
          <img src= "images/Menuleft.png" alt="left menu" ></img>
    </div>

    <div>
    <form onSubmit={submitHandler}>

        <input 
         onChange={(event) => setUsername(event.target.value)}
        />
      
       <br></br>
       
       <label>username</label> 

       <br></br>
      
    
      {!bool &&
        <input 
        onChange={(event) => setEmail(event.target.value) }
        type="email"/>}
        
        <br></br>

        <label>email</label>
        
        <br></br>


        <input 

        onChange={(event) => setPass(event.target.value) } 
        type="password" />
       
        <br></br>

        <label>password</label> 

        <br></br>

        <button 
        onClick={() => setBool(!bool)}
        type="submit">Press to create account
        </button>

        <label>Already have an account?</label>

         <button 
        onClick={() => setBool(!bool)}>Log in 
        </button>


    

        </form>
<<<<<<< HEAD

      

=======
       
>>>>>>> 542b5f77dfc6d05bea8a1287f8fc62cbdcdb17b3
      </div>
    </div>
  )
};

