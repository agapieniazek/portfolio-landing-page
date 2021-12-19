import React from 'react';

import GamePage from '../pages/GamePage';
import AboutMe from "../pages/AboutMe";
import MyToolkit from "../pages/MyToolkit";
import Contact from "../pages/Contact";



const Page = () => {
  return ( 
    <>
    {<AboutMe/>}
    {<MyToolkit/>}
    {<GamePage/>}
    {<Contact/>}
   </>
   );
}
 
export default Page;