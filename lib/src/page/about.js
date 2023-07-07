import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'
import Navigation from '../component/navigation'

 function About() {
  return (
    <div>
    <Navigation/>
    <header>
    <h1>Welcome to our About Page</h1>
    </header>
  
  <div class="container">
    <div class="image">
      <img src="nanny.jpg" alt=""/>
    </div>
    
    <div class="mission">
      <h2>Mission</h2>
      <p>Each type of library — public, school, and academic — should have a central, guiding mission statement that defines the library’s purpose and describes who the library serves. Additionally, the mission statement may be expanded to include a vision statement that clearly identifies what the library would be if the mission statement was achieved and a list of values, commitments, or goals that would help the library achieve its mission statement. At the minimum, a mission statement is needed to provide guidance for all efforts of the library.

        .</p>
    </div>
    
    <div class="vision">
      <h2>Vision</h2>
      <p>A library vision statement sets out your students' (or community's) future. It shows what you want your visitors to have learned once they leave: “We aspire for our students to be…” “Our students will be equipped with skills through online so as they can discover more things through online.</p>
    </div>
  </div>
  
  <footer>
    <p>Contact us: email@safia.com | Phone: 123-456-7890</p>
  
    <p>&copy; 2023 Library Website. All rights reserved.</p>
  </footer>
      
    </div>
  )
}
export default About
