import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import {useNavigate} from 'react-router-dom';

export default function Signup() {
  const navigate=useNavigate();
  const [username,SetuserName]=useState('');
  const[email,SetEmail]=useState('');
  const [phone,SetPhone]=useState();
  const [password,SetPassword]=useState('');
  const firebase=useContext(FirebaseContext)
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      return result.user.updateProfile({displayName:username}).then(()=>
        firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phone:phone

      }))
    })
    .then(()=>{
      console.log("User data added to Firestore");
      navigate('/login')
    })
    
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username} onChange={(e)=>SetuserName(e.target.value)}
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone} onChange={(e)=>SetPhone(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password} onChange={(e)=>{SetPassword(e.target.value)}}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
