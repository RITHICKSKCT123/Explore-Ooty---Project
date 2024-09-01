import React, { useState } from "react";
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
    
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
  
    
       await axios.post(`http://localhost:8080/login/${username}/${password}`, data).then((response)=>
      {if (response.data === true) {
        navigate('/home');
      } else {
        alert("Enter a valid username/password");
      }
    }
      )
   
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
      
        <h2 style={{ color: 'aqua' }}>Login</h2>
        <div className="inputBox">
          <input
            value={username}
            onChange={handleUsernameChange}
            type="text"
            required
          />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            required
          />
          <span>Password</span>
          <i></i>
        </div>
        <button className="submit" type="submit">Login</button>
        <Link className="submit" to="/signup">SignUp</Link>
      </form>
    </div>
  );
};

export default Login;
