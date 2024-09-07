import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'
import { useNavigate } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email,SetEmail]=useState('');
  const [password,SetPassword]=useState('');
  const navigate=useNavigate()
  const firebase =useContext(FirebaseContext)
  const handleLogin=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate('/');

    }).catch((error)=>{

      alert(error.message)

    } )

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email} onChange={(e)=>SetEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password} onChange={(e)=>SetPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
