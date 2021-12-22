import React, { useEffect } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import video from "../images/videos/car.mp4";


const Header = () => {
  useEffect(()=>{
    $(".about__btn").on("click", function() {
      $("body, html").animate({
        scrollTop: $("main").offset().top
      }, 1200)
    })
  })

  return ( 
    <>
    <div className="header__main">
    <video className="header__video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="header__info">
      <h1>I'm Aga Pieniążek</h1>
      <p>nice to meet you</p>
      </div>
      <div className="about">
        <div className="about__arrow">
          <button className="about__btn">{<FontAwesomeIcon icon={faChevronCircleDown} className='about__icon'/>}</button>
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Header;