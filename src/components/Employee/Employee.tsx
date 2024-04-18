import  { useState } from 'react'
import "./Employee.scss"




type EmployeeProps = {
   name:string;
   role:string;
    
}

const Employee =({name,role}:EmployeeProps) =>{


const [ticketCount,setTicketCount]= useState<number>(0);

//increment the number
const incrementTicket =() =>{
    setTicketCount(ticketCount+1)
};


//decrease the number
const decrementTicket = () =>{
    if(ticketCount > 0){
    setTicketCount(ticketCount-1)
    }
}


  return (
    <div >
    <div className="ticket-tracker">
      <p>{name}</p>
      <p>{role}</p>
      <div className="ticket-tracker__counter">
        <p >Counter</p>
        <p >{ticketCount}</p>
        <button className="ticket-tracker__button"onClick={incrementTicket}> +</button>
        <button className="ticket-tracker__button" onClick={decrementTicket}>-</button>
      </div>
    </div>
    </div>
  )
}

export default Employee
