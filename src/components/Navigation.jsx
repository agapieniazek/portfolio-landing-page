import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/_navigation.scss";
import planet from "../images/planet.png";

const navList = [
  {name: "start", desc:"Home", path:"/", exact: true},
  {name: "about", desc:"About me", path:"/about"},
  {name: "toolkit", desc:"My toolkit", path:"/toolkit"},
  {name: "contact", desc:"Contact", path:"/contact"},
  {name: "game", desc:"Let's play", path:"/game"}
]

const Navigation = () => {
  const menu = navList.map(item => {
    return (
      <li key={item.name} className="listElem">
        <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.desc}</NavLink>
      </li>
    )
  })
  return ( 
    <nav>
    <img src={planet} alt="logo"/>
      <ul>
       {menu}
      </ul>
    </nav>
   );
}
 
export default Navigation;