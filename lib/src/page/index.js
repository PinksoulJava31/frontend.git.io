import React from 'react'
import './index.css'
import { Link, NavLink } from 'react-router-dom'

function     Index() {
  return (
    <div>
      <div class="login-container">
    <h2>Login to Online Library</h2>
    <form class="login-form" action="#" method="POST"/>
      <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Enter your username" required/>

      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" required/><br/><br/>
      <Link to={"./home"}> <button type="submit">Login</button></Link>
      
      <p class="error-message">Incorrect username or password.</p>
    

    <p>Don't have an account? <a href="#">Sign up</a></p>
  </div>

        
    </div>
  )
}
export default Index
