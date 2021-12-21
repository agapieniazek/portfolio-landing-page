import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return ( 
    <footer>
    <div className="footer">
      <ul className='footer__list'>
        <li className="footer__icon"><a href=''><FontAwesomeIcon icon={faHome}/></a></li>
        <li className="footer__icon"><a href='https://github.com/agapieniazek?tab=repositories'><FontAwesomeIcon icon={faGithub}/></a></li>
        <li className="footer__icon"><a href=''><FontAwesomeIcon icon={faFacebookF}/></a></li>
        <li className="footer__icon"><a href=''><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
      </ul>
      </div>
    </footer>
   );
}
 
export default Footer;