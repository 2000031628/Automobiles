import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import CardItem from '../CardItem';
import './Career.css'
import Pupil from './Pupil';

export default function Career() {
  return (
<>
    <h1 className='Career' style={{fontStyle:'italic',color:'black'}}>we are progress</h1><br></br>
    <div className='cards'>
      <h1 style={{borderWidth:10,borderStyle:"solid",fontSize:'70px'}}>We are progress. With you.</h1>
      <p style={{fontSize:'30px',height:'2px'}}>Progress is what you bring with you. </p><br/>
      <p style={{fontSize:'30px',height:'4px'}}>At Audi we want to offer you the freedom to use and develop this progress. With flexible working hours.</p><br/>
      <p style={{fontSize:'30px',height:'2px'}}> With an in-house further education academy. With projects which combine </p><br/>
      <p style={{fontSize:'30px',height:'2px'}}>100 years of experience in premium mobility with an electrified future. For</p><br/>
      <p style={{fontSize:'30px',height:'2px'}}> a world that we keep on the move together – with you.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            
              src={'./images/man.jpg'}
              label='PUPILS'
              path='#'
            />
            
            <CardItem
              src={'./images/student.jpeg'}
              label='STUDENTS'
              path='#'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={'./images/graduates.jpg'}
              label='GRADUATES'
              path='#'
            />
            <CardItem
              src={'./images/professor.jpg'}
              label='PROFESSIONALS'
              path='#'
            />
            </ul>
            <p style={{textAlign:'center',fontSize:'50px'}}>Our focus</p>
            <p style={{fontSize:'20px',height:'20px'}}>The automotive industry is facing radical change. As well as quality and premium, we </p>
            <p style={{fontSize:'20px',height:'20px'}}>concentrating nowadays on autonomous driving, electric mobility, services,</p> 
              <p style={{fontSize:'20px',height:'20px'}}> and digitalization.These future areas are our focus. </p>

              <ul className='cards__items'>
            <CardItem
              src={'./images/dream.jpg'}
              text='In today’s digital era, data offers companies enormous added value.
               Audi uses this potential to make desicions based on data, 
               '
              label='Technology'
              path='#'
            />
            <CardItem
              src={'./images/cars.jpg'}
              text='Our vision is to develop services that inspire customers and set us apart from the competition.
               Your contribution will be to develop digital services .'
              label='Software Development'
              path='#'
            />
            </ul>

            
</div>
          
        </div>
      </div>
      
    
    </>
    

           
  )
}


