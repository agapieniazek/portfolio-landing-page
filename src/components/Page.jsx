import React from 'react';
import AboutMe from "../pages/AboutMe";
import GamePage from "../pages/GamePage";
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