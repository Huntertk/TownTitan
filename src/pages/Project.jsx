import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './project.css'
import gym from '../assets/images/gym.png'
import resturant from '../assets/images/resturant.jpg'
import coffee from '../assets/images/cofffee.jpg'

const Project = () => {
    const param = useParams()
    console.log(param.id);


    const data = [
        {
            id: 1,
            image: gym,
            title: "Gold's Gym" 
        },
        {
            id: 2,
            image: resturant,
            title: "Resturant" 
        },
        {
            id: 3,
            image: coffee,
            title: "Coffee" 
        },
    ]

    const newData = data.filter((item) => {return item.id == param.id})
    console.log(newData);
  return (
    <main className='projectMainContainer'>
        <Navbar />
        <div className="projectContentContainer">
            <p className="projectPage">Case Study</p>
           <p className="projectTitle"> 
              {newData[0].title} has been using Gleantap to run successful & engaging marketing campaigns through both email and SMS for the last 2 years.</p>
            
            <div className="projectTextWrapper">

                <p className="projectPara">
                    Everything from email creation to SMS messaging to landing page building was done through Gleantap, giving us the chance to report on each stage of the process as these campaigns were created.<br />In this case study, we’ll review the initial challenges that we were able to overcome along with the lasting effects of these campaigns on Gold’s franchises. Our hope is to show how franchisees and other similar gyms and fitness studios can do the same with Gleantap’s powerful platform and technology.<br />Across all Gold’s Gym franchises, 500+ new members were added from referral campaigns.<br />One franchise saw 64 out of 323 people come back to the gym after receiving 1 text campaign.<br />WEBSITE: goldsgym.com <br />
    COMPANY: Gold’s Gym International, Inc. is a chain of international co-ed fitness centers. Each gym offers a variety of cardio and strength training equipment as well as group exercise programs. </p>
    <img src={newData[0].image} alt="" />
            </div>
        </div>
    </main>
  )
}

export default Project
