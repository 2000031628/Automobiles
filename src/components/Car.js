import React from 'react'

export const Car = () => {
    return (
        <div>
            <>
            <center style={{color:'white'}}>
             <div style={{backgroundColor:"light",border:"lightgreen",borderWidth:10,borderStyle:"solid",height:750,width:1520}} >
<h1>AUDI E-TRON</h1>
<center> <img src="./images/brandaudi.jpg" alt="" width="600" height="300" /><br></br></center>

 <b>
Mileage :
20 to 55 KMPL<br></br>
Engine :
2098 to 20653 CC<br></br>
Transmission :
AUTOMATIC<br></br>
Fuel Type :
HYBRID / PETROL<br></br>
Seating Capacity : 
6 Seater<br></br>
(₹ 1.25 Crore - ₹ 8.83 Crore)
 </b><br></br>
 <p>{" "}<br></br>
 </p>
 <a href="https://www.audi.com/en.html"> <button style={{background:"lightpink"}}>BUY</button></a>

                </div>
            </center>
            </>
        </div>
    )
}
export default Car;