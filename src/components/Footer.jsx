import React from 'react'
import './footer.css'
import logo from '../assets/images/logo.png'
import metaImg from '../assets/images/meta.png'
import yellowCircle from '../assets/images/Ellipse67.png'
import purpleCircle from '../assets/images/Ellipse69.png'
import { BsFacebook,BsTwitter,BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footerMainContainer'>
        <img src={yellowCircle} alt="" className='yellowCircle' />
        <img src={purpleCircle} alt="" className='purpleCircle' />
      <div className="sideIconContainer">
        <p className="textSideIcon">Follow Us On</p>
        <div className="iconContainer">
            <BsFacebook  className='icon'/>
            <BsTwitter  className='icon'/>
            <BsYoutube  className='icon'/>
        </div>
      </div>

      <div className="textContainer">
        <img src={logo} alt="" className='footerLogo'/>
        <p className="address">601 Pennsylvania Avenue Northwest Suite 900</p>
        <p className="address">Washington, DC 20004</p>
        <p className="address">(+11) 8734 3457</p>
      </div>

      <div className="sideImgContainer">
        <img src={metaImg} alt="" />
      </div>
    </footer>
  )
}

export default Footer
