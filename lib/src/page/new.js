import React from 'react'
import './new.css'
import { Link } from 'react-router-dom'
import Navigation from '../component/navigation'


 function New() {
  return (
    <div>
    <Navigation/>
      <h2>New Releases</h2>
    <div class="book-container"div/>
      <div class="book">
        <img src="book1.jpg" alt="Book 1"/>
        <h3>Book 1 Title</h3>
        <p>Author: Book 1 Author</p>
      </div>
      <div class="book">
        <img src="book2.jpg" alt="Book 2"/>
        <h3>Book 2 Title</h3>
        <p>Author: Book 2 Author</p>
      </div>


    <p>&copy; 2023 Library Website. All rights reserved.</p>

    </div>
  )
}
export default New
