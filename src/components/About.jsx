import React from 'react'
import './about.css'
import aboutBackground from '../assets/images/aboutBackground.png'
import tick from '../assets/images/tick.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <section id='about' className='aboutMainSection'>
      <div className="aboutImgContainer">
        <img src={aboutBackground} alt="" className='aboutBackgroundImg' />
      </div>
      <div className="aboutTextContainer">
        <div className="aboutTextTopContainer">
            <p className="aboutPage">About Us</p>
            <p className='aboutTitle'>We are the best digital agency.</p>
            <p className="aboutPara">
                At TownTitan, we are more than just a digital marketing agency - we are your strategic partner in online success.
            </p>
        </div>
        <div className="aboutTextBottomContainer">
            <div className="aboutFeaturesContainer">
                <img src={tick} alt="" className='logotick'/>
                <p className="aboutFeaturesText">
                    Our team of digital marketing experts brings a wealth of knowledge and experience to every project, helping our clients achieve their goals and grow their businesses.
                </p>
            </div>

            <div className="aboutFeaturesContainer">
                <img src={tick} alt="" className='logotick' />
                <p className="aboutFeaturesText">
                    We are dedicated to staying on the cutting edge of digital marketing trends and technologies, and we take a data-driven approach to every campaign to ensure that we deliver results that matter.
                </p>
            </div>
        </div>
      <Link to="/about"><button className='btn'>Learn More</button></Link>
      </div>
    </section>
  )
}

export default About
