import React from 'react'
import star from '../assets/images/star.png'
import avatarOne from '../assets/images/avatarOne.png'
import avatarTwo from '../assets/images/avatarTwo.png'
import avatarThree from '../assets/images/avatarThree.png'
import quoteImg from '../assets/images/qouteImg.png'
import './testimonials.css'

const Testimonials = () => {
  return (
    <section className='testimonialsMainContainer'>
      <img src={quoteImg} className='quoteImg' alt="" />
      <div className="testimonialTextContainer">
        <p className="testimonialPage">TESTIMONIALS</p>
        <p className="testimonialTitle">What our customer says? </p>
      </div>
      <div className="testimonialCardContainer">
        <div className="testimonialCard">
          <img src={avatarOne} alt="" className='testimonialCardAvatarImg' />
          <div className="starContainer">
            <img src={star} alt="" className='testimonialCardStarImg' />
          </div>
          <p className="tesimonialCardPara">”Towntitan has been very impressive, they willtake the time to understand your business and requirements and meticulously deliver on what they say they will.</p>
          <p className="tesimonialCardTitle">John Adam</p>
          <p className="tesimonialCardPost">CEO Media</p>
        </div>

         <div className="testimonialCard">
          <img src={avatarTwo} alt="" className='testimonialCardAvatarImg' />
          <div className="starContainer">
            <img src={star} alt="" className='testimonialCardStarImg' />
          </div>
          <p className="tesimonialCardPara">”I’ve been really happy with the team at Towntitan. They have been extremely responsive, attentive to my needs, flexible and will provide suggestions outside the scope of work just to be helpful
</p>
          <p className="tesimonialCardTitle">Michael John</p>
          <p className="tesimonialCardPost">Co- Founder Teams</p>
        </div>

         <div className="testimonialCard">
          <img src={avatarThree} alt="" className='testimonialCardAvatarImg' />
          <div className="starContainer">
            <img src={star} alt="" className='testimonialCardStarImg' />
          </div>
          <p className="tesimonialCardPara">”Towntitan provides us with great confidence we can actually start growing our business. Nice that someone has our back. We are only three people.”</p>
          <p className="tesimonialCardTitle">Adam</p>
          <p className="tesimonialCardPost">CEO Media</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
