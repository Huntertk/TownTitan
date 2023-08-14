import React from 'react'
import './services.css'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section id='service' className='servicesMainContainer'>
        <div className="servicesTextContainer">
            <p className="servicesPage">Services</p>
            <p className="servicesTitle">What we do for your business?</p>
            <p className="servicesPara">Working with TownTitan has been a game changer for our business. Their digital marketing expertise has helped us increase our online visibility and attract more customers. They are responsive, professional, and always willing to go above and beyond to help us achieve our goals. I highly recommend TownTitan to any business looking to grow and succeed in the digital world.</p>
            <Link to="/services"><button className='btn'>Learn More</button></Link>
        </div>
        <div className="servicesCardContainer">
            <div className="serviceCard one">
                <p className="serviceCardTitle">
                    Web Development
                </p>
                <p className="serviceCardPara">
                    Our team of web developers and designers work closely with our clients to create a website
                </p>
            </div>

             <div className="serviceCard two">
                <p className="serviceCardTitle">
                    Mobile
                </p>
                <p className="serviceCardPara">
                    Our team of web developers and designers work closely with our clients to create a website
                </p>
            </div>

             <div className="serviceCard three">
                <p className="serviceCardTitle">
                    Content Strategy
                </p>
                <p className="serviceCardPara">
                    Our team of content strategists works closely with our clients to develop a customized content strategy .
                </p>
            </div>

             <div className="serviceCard four">
                <p className="serviceCardTitle">
                    Digital Strategy
                </p>
                <p className="serviceCardPara">
                    Our team of digital strategists works closely with our clients to identify their business goals and target audience.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Services
