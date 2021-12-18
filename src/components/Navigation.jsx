import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from "../images/planet.png";

const game = () => {
  const gameDesc = ["P", "L", "A", "Y", " ", "G", "A", "M", "E"];
  const desc = gameDesc.map(letter => <li key={letter} className='play__letter'>{letter}</li>)
  return desc;
};

const Navigation = () => {

  return ( 
    <nav>
    <input type="checkbox" className="toggler" />
    <div class="hamburger"><div className='hamburger__section'></div></div>
    <img src={planet} className='logo' alt="logo"/>
    <div className="menu">
      <div className="menu__first"> 
        <div className='menu__second'>
      <ul className='menu__list'>
        <li className="menu__elem"><img src={planet} alt="" className="menu__icon" />
        <NavLink className="menu__link" to="/" exact="true">Home</NavLink>
        </li>
        <li className="menu__elem"><img src={planet} alt="" className="menu__icon" />
        <a href="" className="menu__link">About me</a>
        </li>
        <li className="menu__elem"><img src={planet} alt="" className="menu__icon" />
        <a href="" className="menu__link">My toolkit</a>
        </li>
        <li className="menu__elem"><img src={planet} alt="" className="menu__icon" />
        <a href="" className="menu__link">Contact</a>
        </li>
        <NavLink className="menu__link play" to="/game">{game}</NavLink>
      </ul>
      </div>
      </div>
      </div>
    </nav>
   );
}
 
export default Navigation;