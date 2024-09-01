import React, { useState } from "react";
import './signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

const Create = () => {
 const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformpassword, setConformpassword] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConformpasswordChange = (event) => {
    setConformpassword(event.target.value);
  };

  const handleMobilenumberChange = (event) => {
    setMobilenumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username:username,
      email: email,
      password: password,
      conformpassword: conformpassword,
      mobilenumber: mobilenumber
    };
    axios.post('http://localhost:8080/postSignUp', data);
    navigate("/")
      // .then((response) => {
      // //  navigate("/");
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };

  
  return (
      
    <div className="login-box">
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
       
        <div className="user-box">
          <input value={username}  onChange={handleUsernameChange} type="text" name="" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input value={email} onChange={handleEmailChange} type="email" name="" required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input value={password} onChange={handlePasswordChange} type="password" name="" required />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input value={conformpassword} onChange={handleConformpasswordChange} type="text" name="" required />
          <label>Conformpassword</label>
        </div>
        <div className="user-box">
          <input value={mobilenumber} onChange={handleMobilenumberChange} type="text" name="" required />
          <label>Mobilenumber</label>
        </div>
          <button type="submit"  className="button" >Create</button>
        {/* <a href="#" className="atag"> 
           <span></span>
          <span></span>
          <span></span>
          <span></span>
          
        </a> */}
        </form>
    </div>
    
    
  );
};

export default Create;
