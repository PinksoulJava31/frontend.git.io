import React, { useEffect, useState } from 'react'
import './Formregister.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
 function Formregister() {

    const [students, setStudents] = useState([]);
    const Navigate = useNavigate();

    useEffect(()=>{
        loadStudents();

    },[]);
    const loadStudents = async () =>{
        try{
            const respo = await axios.get("http://localhost:8080/student/List");
            setStudents(respo.data);
        }catch(error){
            console.log(error);
        }

    };
    const deletehandlesubmit = (stdId) =>{
      const popMsg =window.confirm('Are you sure you want to delete this?');
      if (popMsg){
        axios.delete(`http://localhost:8080/student/delete/${stdId}`)
        .then((res)=>{
          Navigate('/student');
          window.location.reload();
        })
      }
    }



    
        
  return (
    <div>
    <center><h2>STUDENTS DETAILS</h2></center> <br/><br/>

<table>
  <tr>
  <th>S/n</th>

    <th>First name</th>
    <th>Last name</th>
    <th>Adress</th>
    <th>Action</th>
  </tr>
  {
    students.length >0 ?(
      students.map((Custom, index) =>(
        <tr key={index} >
        <td>{index + 1}</td>
        <td>{Custom.fname}</td>
        <td>{Custom.lastname}</td>
        <td>{Custom.adress}</td>

        <td><button onClick={()=> deletehandlesubmit(Custom.stdId)} className='btn btn-info DELETE'><i className='fa fa-trash'></i></button>
        <Link to={`/update/${Custom.stdId}`}><button className='btn' style={{marginLeft: '1rem'}}><i className='fa fa-pencil'></i></button></Link>
        </td>
    
        </tr>


      ))
    ):(
      <tr>
        <td colSpain='4'>no cust</td>
      </tr>
    )
    
  }

 </table>
 
    </div>
  )
}
export default Formregister
