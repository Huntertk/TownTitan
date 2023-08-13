import React from 'react'
import './blog.css'
import searchIcon from '../assets/images/search.png'
import filterIcon from '../assets/images/filter.png'
import cardAvatarImg from '../assets/images/avatarOne.png'
import cardAvatarImgTwo from '../assets/images/avatarTwo.png'
import cardAvatarImgThree from '../assets/images/avatarThree.png'
import cardBackgroundImg from '../assets/images/cardBackgroundImg.png'
import cardBackgroundImgTwo from '../assets/images/cardBackgroundImgTwo.png'
import cardBackgroundImgThree from '../assets/images/cardBackgroundImgThree.png'
import Navbar from '../components/Navbar'

const Blog = () => {
  return (
    <>
    <Navbar />
    <main className='blogMainContainer'>
      <p className="pageTitle">Our Blogs</p>
      <div className="searchContainer">
        <input type="text" placeholder='Search...' className='inputBox' />
        <div className="searchBtnContainer">
            <img src={searchIcon} alt="" className='searchIcon' />
        </div>
        <img src={filterIcon} alt=""  className='filterIcon'/>
      </div>
      <div className="blogCardContainer">
        <div className="blogCard">
            <img src={cardBackgroundImg} alt="" className='cardCoverImg'/>
            <div className="developerDetailsContainer">
                <img src={cardAvatarImg} alt="" className='cardAvatarImg'/>
                <div>
                  <p className="developerTitle">Anvitha</p>
                  <p className="developerPost">Full Stack Developer</p>
                  <p className="time">2:00pm, Mon</p>
                </div>
            </div>
            <p className="blogCardPara">The schematic plans and elevations are reviewed, revised and expanded to incorporate all the details and specifications required for construction....</p>
            <button className="btn">Read more</button>
        </div>

        <div className="blogCard">
            <img src={cardBackgroundImgTwo} alt="" className='cardCoverImg'/>
            <div className="developerDetailsContainer">
                <img src={cardAvatarImgTwo} alt="" className='cardAvatarImg'/>
                <div>
                  <p className="developerTitle">Joanna</p>
                  <p className="developerPost">Social Media Management</p>
                  <p className="time">12:00pm, Tue</p>
                </div>
            </div>
            <p className="blogCardPara">Developing the strategies that maintain and grow a social presence, on top of administrative and team development tasks....</p>
            <button className="btn">Read more</button>
        </div>

        <div className="blogCard">
            <img src={cardBackgroundImgThree} alt="" className='cardCoverImg'/>
            <div className="developerDetailsContainer">
                <img src={cardAvatarImgThree} alt="" className='cardAvatarImg'/>
                <div>
                  <p className="developerTitle">John Doe</p>
                  <p className="developerPost">Google Ads</p>
                  <p className="time">4:09pm, Fri</p>
                </div>
            </div>
            <p className="blogCardPara">SEM and PPC are two other common terms you will read about a lot here on Search Engine Land and hear about in the larger search marketing community....</p>
            <button className="btn">Read more</button>
        </div>
      </div>
    </main>
    </>
  )
}

export default Blog
