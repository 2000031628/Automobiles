import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

export default function Cards() {
  return (
    <div className='cards' >
      <h1 >#FUTURE IS AN ATTITUDE</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/audi.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='AUDI'
              path='/Car'
            />
            <CardItem
              src='images/jaguar.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='BMW'
              path='/Car1'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bmw1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='FERAARI'
              path='/Car2'
            />
            <CardItem
              src='images/royce.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='ROLLCE ROYCE'
              path='/Car3'
            />
            <CardItem
              src='images/skoda1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='SKODA'
              path='/Car4'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

