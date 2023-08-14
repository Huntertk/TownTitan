import React from 'react'
import './header.css'
import logo from '../assets/images/logo.png'
import rectangle from '../assets/images/Rectangle22.png'
import obj from '../assets/images/Group7.png'
import smallEclipsPink from '../assets/images/Ellipse70.png'
import purplEsclips from '../assets/images/Ellipse69.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section id='home'>
        <header>
            <img src={obj} alt="" className='gropuObj'/>
            <img src={rectangle} alt=""  className='blueRectangles'/>
            <div className="redrectangle"></div>
            <div className="yellowEclips"></div>
            <div className="smallEclips"></div>
            <img className="smallEclipsPink" src={smallEclipsPink} />
            <img className="purplEsclips" src={purplEsclips} />

            <div className="navContainer">
                <img src={logo} alt="" />
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
    </section>
  )
}

export default Header
