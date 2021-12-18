import React from 'react';
import "../styles/index.scss";
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";


const App = () => {
  return ( 
    <BrowserRouter>
    <div className="app">
      <div className='header'>
        {<Navigation/>}
        {<Header/>}
      </div>
      <main>
          {<Page/>}
      </main>
      <footer>
        {<Footer/>}
      </footer>
    </div>
    </BrowserRouter>
   );
}
 
export default App;