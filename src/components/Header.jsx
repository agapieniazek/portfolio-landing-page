import React from 'react';
import Navigation from "./Navigation";
import img1 from "../images/header.jpg";
import img2 from "../images/hello.png";

const Header = () => {
  return ( 
    <>
    {<Navigation/>}
    <div className="header__main main">
      <div className="header__info main__info">
      <img src={img2} alt="" />
      <h1>I'm Aga Pieniążek</h1>
      <h2>nice to meet you</h2>
      </div>
      <div className="header__img main__img">
      <img src={img1} alt="" />
      </div>
    </div>
    </>
   );
}
 
export default Header;