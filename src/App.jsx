import './App.css';

import data from "./data"
import { useState } from "react";



const App = () => {
  let [bdays,Setbdays]=useState(data)
  console.log(bdays)
  return (
    <>
    <div className="Birthday">
      <h1>{bdays.length} birthdays today</h1>
      {bdays.map((person)=>{
        const {id,name,age,image}=person
        return(
          <div className="person" key={id}>
            <img src={image} alt={name}/>
            <div >
              <h4>{name}</h4>
              <p>{age} years</p>

            </div>
            <button className='Delete_Button' onClick={()=>Setbdays(bdays.filter((person)=>person.id!==id))}>Delete</button>
          </div>
        )
      })}
      <button className='Clear_Button' onClick={()=>Setbdays([])}>Clear All</button>

    </div>
  
  
    </>
  )
};
export default App;
