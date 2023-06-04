import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container' style={{backgroundColor:"light",border:"lightgrey",borderWidth:10,borderStyle:"solid",height:750,width:1520}} >
      <video src='/videos/car.mp4' autoPlay loop muted />
      
      
      <h1 style={{color:"black"}}>THE WORLD OF LUXURY</h1>
      <p  style={{color:"black"}}>ENJOY YOUR LIFE WITH COMFORTS</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link to='https://www.youtube.com/'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hello')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;