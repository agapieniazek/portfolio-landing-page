import React from 'react';

import Game from '../pages/Game';
import AboutMe from "../pages/AboutMe";
import MyToolkit from "../pages/MyToolkit";
import Contact from "../pages/Contact";
import Footer from "./Footer";



const Page = () => {
  return ( 
    <>
    {<AboutMe/>}
    {<MyToolkit/>}
    {<Game/>}
    {<Contact/>}
   
    {<Footer />}
   
   </>
   );
}
 
export default Page;