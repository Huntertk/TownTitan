import React from 'react'
import './service.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import webImg from '../assets/images/webdevelopment.png'
import mobiledevImg from '../assets/images/mobiledevTwo.png'
import contentstrategy from '../assets/images/mobiledev.png'
import digitalstrategy from '../assets/images/mobile.png'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
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
      desc: 'Our team of web developers and designers work closely with our clients to create a website',
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
  return (
    <main className='servicePageMainContainer'>
        <Navbar />
        <section className="servicePageContainer">
          <div className="serviceOfferContainer">
            <p className="ServicesOfferTitle">Services Offer</p>
              <div className="servicesPageCardContainer">
                {
                  data.map((item) => {
                    return <Link to={`/services/${item.id}`} key={item.id}>
                    <div className="servicesPageCard" >
                  <img src={item.image} alt="" className='servicesPageImg' />
                  <p className="servicesPageCardTitle">{item.title}</p>
                  <p className="servicesPageCardPara">{item.desc}</p>
                  <button className='btn'>Learn More...</button>
                </div>
                </Link>
                  })
                }

              </div>
          </div>
            <Services />
        </section>
        <Footer />
    </main>
  )
}

export default ServicesPage
