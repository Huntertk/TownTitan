import React from 'react'
import './aboutpage.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import officeImg from '../assets/images/office.jpg'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <main>
      <Navbar />
        <div className="aboutPageContainer">
            <p className="aboutPageMainTitle">About Us</p>
            <img src={officeImg} alt="" className='aboutPageImg'/>
            <p className="aboutPageConpanyDetails">At Engaj Media, our vision is to be a trailblazing force in the marketing industry, driving positive change and making a meaningful impact in the world. We aim to help purpose-driven companies and individuals stand out in a crowded marketplace, leveraging the power of AI, VR/AR, and entrepreneurship. Our vision extends beyond success and profitability. We are committed to fostering a culture of collaboration, inclusivity, and continuous learning, where our team members can unleash their genius and thrive in a dynamic work environment.By embracing our vision and values, we strive to build strong relationships with our clients, partners, and communities. Together, we can shape a better world, one purpose driven idea at a time.</p>
            <p className="email">Email us: Team@engajmedia.com</p>
            <Link to="/contact"><button  className="btn">Contact Us</button></Link>
        </div>
      <Footer />
    </main>
  )
}

export default AboutPage
