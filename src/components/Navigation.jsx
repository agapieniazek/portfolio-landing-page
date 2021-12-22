import React from 'react';
import planet from "../images/travel.png";
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';

const game = () => {
  const gameDesc = ["P", "L", "A", "Y", " ", "G", "A", "M", "E"];
  const desc = gameDesc.map(letter => <li key={letter} className='play__letter'>{letter}</li>)
  return desc;
};

const Navigation = () => {
 
  useEffect(()=>{
    $(".toolkit-btn").on("click", function() {
      $("body, html").animate({
        scrollTop: $(".toolkit").offset().top -85
      }, 1200)
    });
    $(".contact-btn").on("click", function() {
      $("body, html").animate({
        scrollTop: $(".contact").offset().top 
      }, 1200)
    });
    $(".about-btn").on("click", function() {
      $("body, html").animate({
        scrollTop: $(".about").offset().top +20
      }, 1200)
    })    
    $(".play").on("click", function() {
      $("body, html").animate({
        scrollTop: $(".game").offset().top +20
      }, 1200)
    }) 
  })

  return ( 
    <nav>
    <input type="checkbox" className="toggler" />
    <div class="hamburger"><div className='hamburger__section'></div></div>
    <img src={planet} className='logo' alt="logo"/>
    <div className="menu">
      <div className="menu__first"> 
        <div className='menu__second'>
      <div className='menu__list'>
        <div className="menu__elem">
        <button className="home-btn menu__link"><a href="/">Home</a></button>
        </div>
        <div className="menu__elem">
        <button className="about-btn menu__link">About me</button>
        </div>
        <div className="menu__elem">
        <button className="toolkit-btn menu__link">My toolkit</button>
        </div>
        <div className="menu__elem">
        <button className="contact-btn menu__link">Contact</button>
        </div>
        <NavLink className="menu__link play" to="/game">{game}</NavLink>
      </div>
      </div>
      </div>
      </div>
    </nav>
   );
}
 
export default Navigation;