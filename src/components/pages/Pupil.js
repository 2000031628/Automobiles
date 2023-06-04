import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import CardItem from '../CardItem';

export default function Pupil() {
  return (
<>
    <h1 className='Pupil' style={{fontStyle:'italic',color:'black'}}>we are progress</h1><br></br>
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
            
            

            
</div>
          
        </div>
      </div>
      
    
    </>
    

           
  )
}


