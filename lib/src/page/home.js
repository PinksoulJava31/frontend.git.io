import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Navigation from '../component/navigation'

 function Home() {
  return (
  <div>
  <Navigation/>
  <div class="hero-content">
    <img src="pic.jpg" alt="background" id="my-image"/>
    </div>
    
    <footer>
           
          <h1>Welcome to the Library!</h1>
       
          
          <p>Explore our vast collection of books and magazines.</p>
       
        

    

        <p>&copy; 2023 Your Library. All rights reserved.</p>
        </footer>
        </div>
    

    )
    }
      
      
        
 
    
    



    
export default  Home