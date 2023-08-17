import React, { useState } from 'react'
import './header.css'
import logo from '../assets/images/logo.png'
import rectangle from '../assets/images/Rectangle22.png'
import obj from '../assets/images/Group7.png'
import smallEclipsPink from '../assets/images/Ellipse70.png'
import purplEsclips from '../assets/images/Ellipse69.png'
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
        <header className='headerMainContainer'>
            <img src={rectangle} alt=""  className='blueRectangles'/>
            <div className="yellowEclips"></div>
            <img src={obj} alt="" className='gropuObj'/>
            <img className="smallEclipsPink" src={smallEclipsPink} />
            
            <div className="smallEclips"></div>
            <div className="redrectangle"></div>
            <img className="purplEsclips" src={purplEsclips} />

            <div className="navContainer">
                <img src={logo} alt="" className='heaaderlogo' />
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
                    <p><Link to="blog">Blog</Link></p>
                    <Link to="contact"> <button className="btn">CONTACT US</button></Link>
                </nav>
                }
                <nav className="navlinks">
                    <p><Link to='/'>Home</Link></p>
                    <p><Link to="/about">About Us</Link></p>
                    <p><Link to="/services">Services</Link></p>
                    <p><Link to="blog">Blog</Link></p>
                    <Link to="contact"> <button className="btn">CONTACT US</button></Link>
                </nav>
            </div>
            <div className="contentContainer">
                <h1>Unlock Your Business's Potential with TownTitan's Digital Marketing Solutions</h1>
                <p>TownTitan is a digital marketing agency focused on helping local businesses such as cafes, restaurants, and gyms increase their online presence and attract more customers.</p>
                <Link to="/services" ><button className="btn btn-learn-more">Learn More</button></Link>
            </div>
        </header>
  )
}

export default Header
