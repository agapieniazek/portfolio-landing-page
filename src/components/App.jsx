import React from 'react';
import "../styles/index.scss";
import Recipies from './Recipies';

const App = () => {
  return ( 
    <>
    <section className="hero"></section>
    <main>
      <section>
        <h1>Oh hi React! Hello worlssnjs</h1>
      </section>
      <Recipies/>
    </main>
    </>
   );
}
 
export default App;