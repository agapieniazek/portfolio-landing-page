import React from 'react';
import Navigation from "./Navigation";

const Header = () => {
  return ( 
    <>
    <div className="header__navigation">
    {<Navigation/>}
    </div>
    <div className="header__img">
      <h3>Hi!</h3>
      <h1>I'm Aga Pieniążek</h1>
      <h2>nice to meet you</h2>
    </div>
    </>
   );
}
 
export default Header;