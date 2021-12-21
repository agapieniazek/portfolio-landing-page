import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';


const Contact = () => {

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [info, setInfo] = useState("");
//const [isValid, setIsValid] = useState();



  function sendEmail(e) {
    e.preventDefault();

    const validation = formValidation();

    if(validation){
      setUsername("");
      setMessage("");
      setEmail("");
         emailjs.sendForm(
      "service_ou3pmir", 
      "template_jd31j7p", 
      e.target, 
      "user_cbkFPpp1MZW64fXLEg9Zr"
      )
      setInfo("Formularz został wysłany poprawnie");
    } else {
      setInfo("Proszę uzupełnić wszystkie pola i jeszcze raz wysłać wiadomość")
    }

 
  }

  function formValidation(){
    let usernameCheck = false;
    let emailCheck = false;
    let messageCheck = false;
    let isValid;

    if(username.length > 2){
      usernameCheck = true;
    }
    if(email.length > 0 && email.indexOf("@")!== -1){
      emailCheck = true;
    }
    if(message.length > 1){
      messageCheck = true;
    }

    if(usernameCheck && emailCheck && messageCheck){
     return true;
    } else {
      return  false;
    }
    
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
          <p className="form__info">{info}</p>
          <form className='form__content' onSubmit={sendEmail}>
            <label className="form__label" htmlFor="username">Name:</label>
            <input className="form__input" value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" id="username" name="username" placeholder="Your name..."/>
            <label className="form__label" htmlFor="email">Email: </label>
            <input className="form__input" value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" id="email" name="email" placeholder="Your email..."/>
            <label className="form__label" htmlFor="message">Message: </label>
            <input className="form__input" value={message} onChange={(e) => {setMessage(e.target.value)}} type="text" id="message" name="message" placeholder="Your message..."/>
            <button className="form__button" type="submit">Wyślij</button>
          </form>
          
        </div>
      </div>
    </div>
   );
}
 
export default Contact;