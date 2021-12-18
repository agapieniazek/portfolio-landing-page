import React, { useEffect } from 'react';
import Navigation from "./Navigation";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import img2 from "../images/hello.png";


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
      <div className="header__info">
      <img src={img2} alt="" />
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