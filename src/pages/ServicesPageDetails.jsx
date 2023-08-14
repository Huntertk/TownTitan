import React from 'react';
import { useParams } from 'react-router-dom';
import './project.css'
import './servicedetails.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import webImg from '../assets/images/webdevelopment.png'
import mobiledevImg from '../assets/images/mobiledevTwo.png'
import contentstrategy from '../assets/images/mobiledev.png'
import digitalstrategy from '../assets/images/mobile.png'

const ServicesPageDetails = () => {

  const param = useParams()
  const data = [
    {
      id:1,
      title: 'Web Developement',
      desc: 'Our team of web developers and designers work closely with our clients to create a website',
      image: webImg
    },
    {
      id:2,
      title: 'Mobile Developement',
      desc: 'Our team of mobile developers and designers work closely with our clients to create a website',
      image: mobiledevImg
    },
    {
      id: 3,
      title: 'Content Strategy',
      desc: 'Our team of content strategists works closely with our clients to develop a customized content strategy.',
      image: contentstrategy
    },
    {
      id: 4,
      title: 'Digital Strategy',
      desc: 'Our team of digital strategists works closely with our clients to identify their business goals and target audience.',
      image: digitalstrategy
    },
  ]

  const newData = data.filter((item) => {return item.id == param.id})
  return (
    <main className='projectMainContainer'>
      <Navbar />
        <div className="projectContentContainer">
            <p className="projectPage">{newData[0].title}</p>
           <p className="projectTitle"> 
               {newData[0].desc}</p>
            
            <div className="projectTextWrapper">

                <p className="projectPara">
                    Everything from email creation to SMS messaging to landing page building was done through Gleantap, giving us the chance to report on each stage of the process as these campaigns were created.<br />In this case study, we’ll review the initial challenges that we were able to overcome along with the lasting effects of these campaigns on Gold’s franchises. Our hope is to show how franchisees and other similar gyms and fitness studios can do the same with Gleantap’s powerful platform and technology.<br />Across all Gold’s Gym franchises, 500+ new members were added from referral campaigns.<br />One franchise saw 64 out of 323 people come back to the gym after receiving 1 text campaign.<br />WEBSITE: goldsgym.com <br />
    COMPANY: Gold’s Gym International, Inc. is a chain of international co-ed fitness centers. Each gym offers a variety of cardio and strength training equipment as well as group exercise programs. </p>
    <img src={newData[0].image} alt="" className='serviceDetailsImg'/>
            </div>
        </div>
      <Footer />
    </main>
  )
}

export default ServicesPageDetails
