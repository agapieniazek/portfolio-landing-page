import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from "../images/planet.png";

const navList = [
  {name: "start", desc:"Home", path:"/", exact: true},
  {name: "about", desc:"About me", path:"/about"},
  {name: "toolkit", desc:"My toolkit", path:"/toolkit"},
  {name: "contact", desc:"Contact", path:"/contact"},
];
const game = () => {
  const gameDesc = ["P", "L", "A", "Y", " ", "G", "A", "M", "E"];
  const desc = gameDesc.map(letter => <li key={letter} className='play__letter'>{letter}</li>)
  return desc;
};

const Navigation = () => {
  const menu = navList.map(item => {
    return (
      <li key={item.name} className="listElem menu__elem">
        <img src={planet} className='listIcon menu__icon'/>
        <NavLink className="menu__link" to={item.path} exact={item.exact ? item.exact : false}>{item.desc}</NavLink>
      </li>
    )
  })
  return ( 
    <nav>
    <input type="checkbox" className="toggler" />
    <div class="hamburger"><div className='hamburger__section'></div></div>
    <img src={planet} className='logo' alt="logo"/>
    <div className="menu">
      <div className="menu__first"> 
        <div className='menu__second'>
      <ul className='menu__list'>
       {menu}
       <NavLink className="menu__link play" to="/game">{game}</NavLink>
      </ul>
      </div>
      </div>
      </div>
    </nav>
   );
}
 
export default Navigation;