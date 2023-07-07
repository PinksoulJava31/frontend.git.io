import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'

 function Update() {

    const navigate =useNavigate();
    const {stdId} =useParams();
    const [data,setData] = useState({});
useEffect(()=>{
    const fetchdataById = async()=>{
        try{
            const response = await axios.get(`http://localhost:8080/student/getbyid/${stdId}`);

            setData(response.data);
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
        
    
    };
    fetchdataById();
},[stdId]);
function handlesubmit(event){
    event.preventDefault();
    axios.put(`http://localhost:8080/student/update/${stdId}`,data);
    navigate("/student");
}

  return (
    <div>
    
      <p>Fill this form below to register in our Library:</p>

      <form onSubmit={handlesubmit}>
        <label for="name">First name:</label>
        <input value= {data.fname} onChange={event=>setData({...data,fname:event.target.value})} type="text" id="fname" name="fname" required/>

        <label for="name">Last name:</label>
        <input value= {data.lastname} onChange={event=>setData({...data,lastname:event.target.value})} type="text" id="lastname" name="lastname" required/>

        <label for="adress">Adress:</label>
        <input value= {data.adress} onChange={event=>setData({...data,adress:event.target.value})}  type="adress" id="adress" name="adress" required/><br/><br/>

        <button type="submit">Submit</button>
      </form>


  </div>
      
      

  )
}
export default Update