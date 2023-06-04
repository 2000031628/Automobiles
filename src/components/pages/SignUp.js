import React,{useState} from 'react';
import '../../App.css';
import './signup.css';
import CardItem from '../CardItem';
import {NavLink} from 'react-router-dom'
import axios from 'axios'

function SignUp(){
  
       return (
        <div className='hero-container'>
        <video src='/videos/cars.mp4' autoPlay loop muted />
       <div class="sign-up" > 
       <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <form onSubmit={(e)=>login(e)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      
            </ul>
            
            </div>
            </div>
          
            </div>
            </div>
       )
}

function login(e){
  e.preventDefault();
  let request={
    email: document.getElementById('exampleInputEmail1').value,
password: document.getElementById('exampleInputPassword1').value,

  }
  axios.post('http://localhost:3000/login', request)
  .then(resp => {
    alert(resp.data.message);
  })
  .catch(err =>{
    console.log(err);
  })
}
export default SignUp
