import React from 'react'
import './cta.css'
import groupImg from '../assets/images/GroupDot.png'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='ctaMainContainer'>
        <img src={groupImg} alt="" className="imgTopSide" />
        <img src={groupImg} alt="" className="imgBottomSide" />
      <p className="ctaTitle">Get in touch with us!</p>
      <p className="ctaPara">At TownTitan, we are always here to help. Whether you have a question about our services, or you're ready to start working with us, we're just a phone call or email away. We pride ourselves on being responsive and easy to work with, and we're committed to providing exceptional customer service to all of our clients.</p>
      <Link to="contact"><button className="btn">CONTACT US</button></Link>
    </section>
  )
}

export default CTA
