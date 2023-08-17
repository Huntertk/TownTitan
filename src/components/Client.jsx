import React from 'react'
import './client.css'
import planningImg from '../assets/images/Shape.png'
import designingImg from '../assets/images/Path.png'
import processingImg from '../assets/images/linklogo.png'

const Client = () => {
  return (
    <section className='clientSectionContainer'>
      <div className="textContainer">
        <p className="textContainerSubheading">Our Way</p>
        <h1 className='textContainerHeading'>How we solve the problem?</h1>
        <p  className='textContainerPara'>Welcome to TownTitan, a digital marketing agency dedicated to helping local businesses grow their online presence and attract more customers. We specialize in providing tailored digital marketing solutions to small and medium-sized businesses such as cafes, restaurants, and gyms.</p>
      </div>
      <div className="cardContainer">
        <div className="card">
          <div className="cardEclips one">
            <img src={planningImg} alt="" className='cardEllipsLogo' />
          </div>
          <div className="cardText">
            <p className='cardHeading'>Planning</p>
            <p className='cardPara'>Towntitan Digital Agency, my first step in the design planning process would be to thoroughly understand the project's requirements and objectives.</p>
          </div>

        </div>

         <div className="card">
          <div className="cardEclips two">
            <img src={designingImg} alt="" className='cardEllipsLogo' />
          </div>
          <div className="cardText">
            <p className='cardHeading'>Designing</p>
            <p className='cardPara'>Using the information gathered during the planning phase, my team and I will work on creating initial design concepts.</p>
          </div>

        </div>

         <div className="card">
          <div className="cardEclips three">
            <img src={processingImg} alt="" className='cardEllipsLogo' />
          </div>
          <div className="cardText">
            <p className='cardHeading'>Processing</p>
            <p className='cardPara'>This includes developing and testing the website or app's functionality, ensuring that it is user-friendly. </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Client
