import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/images/logo.png'
import {GiHamburgerMenu,GiCrossMark} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isNavOpen ,setIsNavOpen] = useState(false)

    const handleNavOpen = () => {
        setIsNavOpen((prev) => {
            return prev ? false : true
        })
    }

  return (
        <header className='headerMainContainers'>
            <div className="navContainer">
                <Link to="/"><img src={logo} alt="" className='heaaderlogo' /></Link>
                <div className="navOpenContainer" onClick={handleNavOpen}>
                    {
                        isNavOpen ? 
                        <GiCrossMark className='cross rotate-center'/>
                        : 
                        <GiHamburgerMenu className='rotate-center' />
                    }
                </div>
                {
                    isNavOpen &&
                <nav className="navlink">
                    <p><Link to='/'>Home</Link></p>
                    <p><Link to="/about">About Us</Link></p>
                    <p><Link to="/services">Services</Link></p>
                    <p><Link to="/blog">Blog</Link></p>
                    <Link to="/contact"> <button className="btn">CONTACT US</button></Link>
                </nav>
                }
                <nav className="navlinks">
                    <p><Link to='/'>Home</Link></p>
                    <p><Link to="/about">About Us</Link></p>
                    <p><Link to="/services">Services</Link></p>
                    <p><Link to="/blog">Blog</Link></p>
                    <Link to="/contact"> <button className="btn">CONTACT US</button></Link>
                </nav>
            </div>
          
        </header>
  )
}

export default Header
