import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './products.css'
import CardItem from '../CardItem';

export default function Products() {
  return (
    <div className='hero-container'>
    <video src='/videos/speedcar.mp4' autoPlay loop muted />
  <h1 className='products'>
    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/luxury.jpg'
              text='BUGATTI :-
              Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/Tesla'
            />
            <CardItem
              src='images/luxury1.jpg'
              text='AUDI :- Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/Tesla1'
            />
            <CardItem
              src='images/luxury2.jpg'
              text='FERAARI :- Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/Tesla2'
            />
            
            
            </ul>
            </div>
            </div>
     
      <div className='hero-btns'>
        
        
      </div>
  </h1>
  </div>
  )
}


