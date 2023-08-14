import React, { useState } from 'react'
import './blogdetails.css'
import cardAvatarImg from '../assets/images/avatarOne.png'
import cardAvatarImgTwo from '../assets/images/avatarTwo.png'
import cardAvatarImgThree from '../assets/images/avatarThree.png'
import cardBackgroundImg from '../assets/images/cardBackgroundImg.png'
import cardBackgroundImgTwo from '../assets/images/cardBackgroundImgTwo.png'
import cardBackgroundImgThree from '../assets/images/cardBackgroundImgThree.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './aboutpage.css'
import { useParams } from 'react-router-dom'


const BlogDetails = () => {
    const {id} = useParams()
    
    const data = [
        {
            id: 1,
            postImg: cardBackgroundImg,
            avatarImg: cardAvatarImg,
            title: 'Anvitha',
            postTitle: 'Full Stack Developer',
      time: '2:00pm, Mon',
      postPara: 'The schematic plans and elevations are reviewed, revised and expanded to incorporate all the details and specifications required for construction....'
    },

    {
        id: 2,
        postImg: cardBackgroundImgTwo,
        avatarImg: cardAvatarImgTwo,
        title: 'Joanna',
        postTitle: 'Social Media Management',
        time: '12:00pm, Tue',
        postPara: 'Developing the strategies that maintain and grow a social presence, on top of administrative and team development tasks....'
    },
    
    {
        id: 3,
        postImg: cardBackgroundImgThree,
        avatarImg: cardAvatarImgThree,
        title: 'John Doe',
        postTitle: 'Google Ads',
        time: '4:09pm, Fri',
        postPara: 'SEM and PPC are two other common terms you will read about a lot here on Search Engine Land and hear about in the larger search marketing community....'
    },
]




const filterData = data.filter((item) => {
    return item.id == id
})



  return (
    <main>
      <Navbar />
      <div className="aboutPageContainer">
            <p className="aboutPageMainTitle">{filterData[0].postTitle}</p>
            <img src={filterData[0].postImg} alt="" className='aboutPageImg'/>
            <p className="aboutPageConpanyDetails">{filterData[0].postPara}</p>
            <p className="aboutPageConpanyDetails">Everything from email creation to SMS messaging to landing page building was done through Gleantap, giving us the chance to report on each stage of the process as these campaigns were created.

In this case study, we’ll review the initial challenges that we were able to overcome along with the lasting effects of these campaigns on Gold’s franchises. Our hope is to show how franchisees and other similar gyms and fitness studios can do the same with Gleantap’s powerful platform and technology.



Across all Gold’s Gym franchises, 500+ new members were added from referral campaigns.
One franchise saw 64 out of 323 people come back to the gym after receiving 1 text campaign.




WEBSITE: goldsgym.com
COMPANY: Gold’s Gym International, Inc. is a chain of international co-ed fitness centers. Each gym offers a variety of cardio and strength training equipment as well as group exercise programs.

CHALLENGE: Gold’s Gym partnered with Gleantap to improve member engagement throughout the onboarding process, hoping to create more revenue opportunities and improve retention long term.

RESULTS: Through the suggested campaigns Gleantap provided and conversations to figure out the best approach, Gleantap has been able to help Gold’s retain more members, engage with more members, and have more members upgrade to higher tiered memberships than previous years.
Here, we will review the most successful campaigns, how they were formulated, and how they were able to achieve the goals we set out for using Gleantap’s marketing technology.</p>
<p className="author">Author :- {filterData[0].title}</p>
            </div>
      <Footer />
    </main>
  )
}

export default BlogDetails