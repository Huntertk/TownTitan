import React from 'react'
import './works.css'

import { Link } from 'react-router-dom';

const Works = () => {
  const data = [
  {
    id: 1,
    subtitle: 'Case Study',
    title: 'Coffee Day Workshop Branding',
    para: "Coffee Day, one of our esteemed clients, approached TownTitan to help them increase their online presence and customer engagement. Here's how we helped them achieve their goals",
  },
  {
    id: 2,
    subtitle: 'Case Study',
    title: 'Resturant Workshop Branding',
    para: "TownTitan worked with a local restaurant to help them increase their online presence and attract more customers. Here's how we helped them achieve their goals.",
  },
  {
    id: 3,
    subtitle: 'Case Study',
    title: 'Gold’s Gym Workshop Branding',
    para: "Golds Gym, one of our valued clients, approached TownTitan to increase its online presence and attract more members to its fitness center. Here's how we helped them achieve their goals.",
  },
]
  return (
    <section className='worksMainContainer'>
      <div className="worksTextContainer">
        <p className="worksPage">Project</p>
        <p className="worksTitle">We help comany to grow.</p>
        <p className="worksPara">Our team of digital marketing experts works closely with our clients to identify their unique needs and develop a customized plan for growth. Whether it's increasing brand awareness, generating leads, or improving customer engagement, we create strategies that are tailored to our clients' specific goals.</p>
      </div>
      <div className="worksCardContainer">
       
        {
          data.map((item) => {
            return <div className="workCard" key={item.id}>
            <p className="workCardSubtitle">{item.subtitle}</p>
            <p className="workCardTitle">{item.title}</p>
            <p className="workCardPara">{item.para}</p>
            <Link to={`project/${item.id}`}><button className="btn">SEE PROJECTS</button></Link>
        </div>
          })
        }
      </div>
    </section>
  )
}

export default Works
