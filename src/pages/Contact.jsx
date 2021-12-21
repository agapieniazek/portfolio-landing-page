import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const containerStyle = {
  width: '400px',
  height: '400px',
};
const center = {
  lat: -3.745,
  lng: -38.523
};

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_ou3pmir", 
      "template_jd31j7p", 
      e.target, 
      "user_cbkFPpp1MZW64fXLEg9Zr"
      )
      .catch(err=> alert(err));
  }
  return ( 
    <div className='contact'>
      <div className="contact__wrapper">
        <div className="contact__info">
        <h1 className="contact__title">Contact <span className='contact__title-color'> me</span></h1>
        <p><FontAwesomeIcon className="contact__icon" icon={faEnvelope}/> 
        aagnieszka.pieniazek@gmail.com</p>
        <p><FontAwesomeIcon className="contact__icon" icon={faMobile}/>
        515-541-820</p>
        <p><FontAwesomeIcon className="contact__icon" icon={faMapMarker}/>
        Rzeszów</p>
        </div>
        <div className="form">
          <form className='form__content' onSubmit={sendEmail}>
            <label className="form__label" for="name">Name:</label>
            <input className="form__input" type="text" id="name" name="name" placeholder="Your name..."/>
            <label className="form__label" for="email">Email: </label>
            <input className="form__input" type="email" id="email" name="email" placeholder="Your email..."/>
            <label className="form__label" for="message">Message: </label>
            <textarea className="form__input" rows="4" id="message" name="message" placeholder="Your message..."/>
            <input className="form__submit" type="submit" value="Send"/>
          </form>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;