import React from 'react';
import "../styles/index.scss";
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from './Navigation';
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";


const App = () => {
  return ( 
    <Router>
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
    </Router>
   );
}
 
export default App;