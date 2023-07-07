import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
 function Navigation() {
  return (
    <div class="navi">
    <nav>
          <ul class="menu">
           <Link to={"/home"}><li><a href="home.html">Home</a></li></Link> 
           <Link to={"/Studentform"}><li><a href="Books.html">Studentform</a></li></Link> 
           
           <Link to={"/student"}><li><a href="new.html">Formregister</a></li></Link> 
           <Link to={"/books"}><li><a href="about.html">Books</a></li></Link> 
           <Link to={"/about"}><li><a href="contact.html">About</a></li></Link> 
           <Link to={"/new"}><li><a href="contact.html">New Releases</a></li></Link> 
          
    
          </ul>
        </nav>
      
    </div>
  )
}
export default Navigation
