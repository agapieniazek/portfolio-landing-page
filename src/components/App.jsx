import React from 'react';
import "../styles/index.scss";
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";


const App = () => {
  return ( 
    <BrowserRouter>
    <div className="app">
      <div className='header'>
        {<Header/>}
      </div>
      <main>
        <div className="page">
          {<Page/>}
        </div>
      </main>
      <footer>
        {<Footer/>}
      </footer>
    </div>
    </BrowserRouter>
   );
}
 
export default App;