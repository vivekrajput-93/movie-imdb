import React from 'react'
import { Link } from 'react-router-dom';
import "../CSS/Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
    <div className='home-link'>
        <Link to="/" >Home</Link>
        <Link to="/rated" >Rated</Link>
    </div>
    <Link to="/auth" className='login' >Login</Link>
    </div>
  )
}

export default Navbar 