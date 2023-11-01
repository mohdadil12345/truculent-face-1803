import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <h2>Logo</h2>
        <Link to = "/">Home</Link>
        <Link to = "/login">Login</Link>
        <Link to = "/register">Signup</Link>
    </div>
  )
}

export default Navbar