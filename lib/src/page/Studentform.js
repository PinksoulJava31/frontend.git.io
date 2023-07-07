import React, { useState } from 'react'
import './contact.css'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../component/navigation'
import axios from 'axios';

 function Studentform() {
  const [fname,setfname]=useState(['']);
  const [lastname,setlastname]=useState(['']);
  const [adress,setadress]=useState(['']);
  const navigate = useNavigate();
  const handlesubmit=(event)=>{
    event.preventDefault();
    const request={
      fname:fname,
      lastname:lastname,
      adress:adress,
    };
    axios.post("http://localhost:8080/student/save",request).then(response=>{
      console.log(response.data);
      navigate("/student");
    })
  }
  return (
    <div>
    <Navigation/>
    
    
     <h2>Student Form</h2>
      <p>Fill this form below to register in our Library:</p>

      <form onSubmit={handlesubmit}>
        <label for="name">First name:</label>
        <input value= {fname} onChange={event=>setfname(event.target.value)} type="text" id="name" name="name" required/>

        <label for="name">Last name:</label>
        <input value= {lastname} onChange={event=>setlastname(event.target.value)} type="text" id="name" name="name" required/>

        <label for="adress">Adress:</label>
        <input value= {adress} onChange={event=>setadress(event.target.value)}  type="adress" id="adress" name="adress" required/><br/><br/>

        <button type="submit">Submit</button>
      </form>


  <footer>
    <p>&copy; 2023 Library Free Books. All rights reserved.</p>
  </footer>
      
    </div>
  )
}
export default Studentform

