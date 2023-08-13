import React from 'react'
import './works.css'

const Works = () => {
  return (
    <section className='worksMainContainer'>
      <div className="worksTextContainer">
        <p className="worksPage">Project</p>
        <p className="worksTitle">We help comany to grow.</p>
        <p className="worksPara">Our team of digital marketing experts works closely with our clients to identify their unique needs and develop a customized plan for growth. Whether it's increasing brand awareness, generating leads, or improving customer engagement, we create strategies that are tailored to our clients' specific goals.</p>
      </div>
      <div className="worksCardContainer">
        <div className="workCard">
            <p className="workCardSubtitle">Case Study</p>
            <p className="workCardTitle">Coffee Day Workshop Branding</p>
            <p className="workCardPara">Coffee Day, one of our esteemed clients, approached TownTitan to help them increase their online presence and customer engagement. Here's how we helped them achieve their goals:</p>
            <button className="btn">SEE PROJECTS</button>
        </div>

        <div className="workCard">
            <p className="workCardSubtitle">Case Study</p>
            <p className="workCardTitle">Resturant Workshop Branding</p>
            <p className="workCardPara">TownTitan worked with a local restaurant to help them increase their online presence and attract more customers. Here's how we helped them achieve their goals.</p>
            <button className="btn">SEE PROJECTS</button>
        </div>

        <div className="workCard">
            <p className="workCardSubtitle">Case Study</p>
            <p className="workCardTitle">Gold’s Gym Workshop Branding</p>
            <p className="workCardPara">Golds Gym, one of our valued clients, approached TownTitan to increase its online presence and attract more members to its fitness center. Here's how we helped them achieve their goals.</p>
            <button className="btn">SEE PROJECTS</button>
        </div>


      </div>
    </section>
  )
}

export default Works
