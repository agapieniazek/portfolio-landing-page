import React from 'react';
import "../styles/index.scss";
import Recipies from './Recipies';
import ryba from "../images/photo.jpg";

const App = () => {
  return ( 
    <>
    <section className="hero"></section>
    <main>
      <section>
        <h1>Oh hi React!</h1>
      </section>
      <img src={ryba} alt="ryba"  width="250"/>
      <Recipies/>
    </main>
    </>
   );
}
 
export default App;