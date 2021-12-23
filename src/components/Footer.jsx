import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import $ from 'jquery';


const Footer = () => {


  return ( 
    <footer>
    <div className="footer">
      <ul className='footer__list'>
        <li className="footer__icon"><a href=""><FontAwesomeIcon icon={faHome}/></a></li>
        <li className="footer__icon"><a href='https://github.com/agapieniazek?tab=repositories'><FontAwesomeIcon icon={faGithub}/></a></li>
        <li className="footer__icon"><a href='https://www.linkedin.com/in/agnieszka-pieni%C4%85%C5%BCek-501422229/'><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
      </ul>
      </div>
    </footer>
   );
}
 
export default Footer;