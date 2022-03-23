import { useState } from "react";
import './login.css';


const MyForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
   
  }

  return (
    <div className="loginpage">


    <div className="welcome">
          
          <img src= "images/Menuleft.png" alt="left menu" ></img>
    </div>
    <div>
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name}
         
          // onChange={(e) => setName(e.target.value)}
        />
       <br></br>
       <label>username</label> 
       <br></br>
    

        <input 
        type="text" 
        value={name}
        
        // onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>email</label> 
        <br></br>


        <input 
        type="text" 
        value={name}
       
        // onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>password</label> 
        <br></br>

        <button>Sign Up</button>
        <button>Login</button>


</form>

</div>
</div>
  )
}


export default MyForm;
