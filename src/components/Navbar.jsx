import React from 'react'
import logo from '../assets/images/logo.png'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='navBlogContainer'>
       <div className="navMainContainer">
                <Link to="/"><img src={logo} alt="" className='heaaderlogo' /></Link>
                <nav className="navlinksContainer">
                    <Link to='/'>Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/blog">Blog</Link>
               <Link to="/contact"> <button className="btn">CONTACT US</button></Link>
                </nav>
            </div>
    </header>
  )
}

export default Navbar
