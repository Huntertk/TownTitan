import React, { useState } from 'react'
import './blog.css'
import Footer from '../components/Footer'
import searchIcon from '../assets/images/search.png'
import filterIcon from '../assets/images/filter.png'
import cardAvatarImg from '../assets/images/avatarOne.png'
import cardAvatarImgTwo from '../assets/images/avatarTwo.png'
import cardAvatarImgThree from '../assets/images/avatarThree.png'
import cardBackgroundImg from '../assets/images/cardBackgroundImg.png'
import cardBackgroundImgTwo from '../assets/images/cardBackgroundImgTwo.png'
import cardBackgroundImgThree from '../assets/images/cardBackgroundImgThree.png'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Blog = () => {
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

  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [postData, setPostData] = useState(data)

  const handleFilterOpen = () => {
    setIsFilterOpen((prev) => {
      return prev ? false : true
    })
  }

  const filterPost = (id) => {
    setIsFilterOpen(false)
    const newFilteredData = data.filter((item) => {
    return item.id === id 
  })
  setPostData(newFilteredData)
  console.log(newFilteredData);
}

  
  return (
    <main>
      <Navbar />
      { 
      isFilterOpen &&
      <div className="filterContainer">
        <button className='filterBtn' onClick={() => {
          setPostData(data)
          setIsFilterOpen(false)
        }}
          >All</button>
        {data.map((item) => {
          return <button key={item.id} className='filterBtn' onClick={() => filterPost(item.id)}>{item.postTitle}</button>
        })}
      </div>
    }
      <section className="blogPageMainContainer">
        <div className="blogtopContainer">
          <h1>Our Blogs</h1>
          <div className="blogPostSearchContainer">  
            <input type="text" placeholder="Search..." className='searchInput'/>
            <div className="greeenEsclips">
              <img src={searchIcon} alt="" className='searchIconImg'/>
            </div>
            <div className="blogfilBtnContainer">
              <img src={filterIcon} alt="" className='filtericon' onClick={handleFilterOpen} />
            </div>
          </div>
        </div>
          <div className="blogPostCardContainer">
            {
              postData.map((item) => {
                 return <div className="blogPostCard" key={item.id}>
              <img src={item.postImg} alt="" />
              <div className="blogPostDevDetails">
                <img src={item.avatarImg} alt="" className='blogPostAvatarImg' />
                <div className="blogPostDevDetailsTextContainer">
                  <p className="blogPostCardTitle">
                    {item.title}
                  </p>
                  <p className="blogPostCardPostName">
                    {item.postTitle}
                  </p>
                  <p className="time">
                    {item.time}
                  </p>
                </div>
              </div>
              <p className="blogPostDesc">{item.postPara}</p>
                  <Link to={`/blog/${item.id}`} >
                    <button className='btn'>Read More</button>
                    </Link>
            </div>
              })
            }
            
          </div>
      </section>

      <Footer />
    </main>

    // <main>
    // { 
    //   isFilterOpen &&
    //   <div className="filterContainer">
    //     <button className='filterBtn' onClick={() => {
    //       setPostData(data)
    //       setIsFilterOpen(false)
    //     }}
    //       >All</button>
    //     {data.map((item) => {
    //       return <button key={item.id} className='filterBtn' onClick={() => filterPost(item.id)}>{item.postTitle}</button>
    //     })}
    //   </div>
    // }
    // <Navbar />
    // <div className='blogMainContainer'>
    //   <p className="pageTitle">Our Blogs</p>
    //   <div className="searchContainer">
    //     <input type="text" placeholder='Search...' className='inputBox' />
    //     <div className="searchBtnContainer">
    //         <img src={searchIcon} alt="" className='searchIcon' />
    //     </div>
    //     <img src={filterIcon} alt=""  className='filterIcon' onClick={handleFilterOpen}/>
    //   </div>
    //   <div className="blogCardContainer">
    //     {
    //       postData.map((cardData) => {
    //         return  <div className="blogCard" key={cardData.id}>
    //         <img src={cardData.postImg} alt="" className='cardCoverImg'/>
    //         <div className="developerDetailsContainer">
    //             <img src={cardData.avatarImg} alt="" className='cardAvatarImg'/>
    //             <div>
    //               <p className="developerTitle">{cardData.title}</p>
    //               <p className="developerPost">{cardData.postTitle}</p>
    //               <p className="time">{cardData.time}</p>
    //             </div>
    //         </div>
    //         <p className="blogCardPara">{cardData.postPara}</p>
    //         <Link to={`/blog/${cardData.id}`} ><button className="btn">Read more</button></Link>
    //     </div>
    //       })
    //     }
    //   </div>
    // </div>
    // <Footer />
    // </main>
  )
}

export default Blog