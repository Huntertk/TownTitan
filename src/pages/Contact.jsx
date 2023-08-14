import React from 'react'
import './contact.css'
import contactImg from '../assets/images/conactImg.png'
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTwitter,BsInstagram,BsLinkedin } from 'react-icons/bs';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import Navbar from '../components/Navbar';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
    <Navbar />
    <main className='contactMainContainer'>
      <div className="contactPageContainer">
        <div className="contactTextContainer">
            <p className="contactPageTitle">Contact US</p>
            <p className="contactPara">Need to connect with us?<br /> Fill out the form with your inquiry.</p>
            <img src={contactImg} alt="" />
        </div>
            <form  className="formContainer" onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="number" placeholder='Phone Number' />
                <textarea placeholder='Message' cols="30" rows="10"></textarea>
                <select>
                    <option value="servic">Service</option>
                    <option value="servic">Web Developement</option>
                    <option value="servic">Mobile Developement</option>
                    <option value="servic">Content Strategy</option>
                    <option value="servic">Digital Strategy</option>
                </select>
                <button className="btn">Submit</button>
            </form>
      </div>

      <div className="contactFooter">
        <div className="leftSideBottomContainer">
            <div className="contactAddress">
                <MdLocationOn className='conatctIcon' />
                <p className="loaction">601 Pennsylvania Avenue Northwest Suite 900 <br /> Washington, DC 20004</p>
            </div>
            <div className="contactEmail">
                <MdEmail className='conatctIcon' />
                <div className="email">team@engajmedia.com</div>
            </div>
        </div>
        <div className="rightSideBottomContainer">
            <p className="textContact">Follow Us On</p>
            <BsTwitter className='conatctIcons' />
            <AiFillFacebook className='conatctIcons' />
            <AiFillYoutube className='conatctIcons' />
            <BsInstagram className='conatctIcons' />
            <BsLinkedin className='conatctIcons' />
        </div>
      </div>
    </main>
    </>
  )
}

export default Contact
