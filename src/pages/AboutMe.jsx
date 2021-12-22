import React, { useState } from 'react';
import video from "../images/videos/eye.mp4";
import img from "../images/femine.png";

const MainPage = () => {
  const [lang, setLang] = useState("en");

  const buttonSetPolish = () => setLang("pl");
  const buttonSetEnglish =() => setLang("en");

  const polishName = "Nazywam się Aga";
  const englishName = "My name is Aga";

  const polishText ="Ukończyłam studia ekonomiczne o kierunku finanse i rachunkowość na Uniwersytecie Ekonomicznym w Krakowie. Posiadam kilkuletnie doświadczenie jako księgowa. Dodatkowo od prawi dwóch lat rozwijam swoje hobby jakim jest programowanie aplikacji webowych, pod kątem front-endu. Szkoliłam się we własnym zakresie, moim przyjacielem w tej kwestii okazała sie platforma Udemy.";
  const englishText = "I have graduated Cracow University of Economics with bachelor degree in finance and accounting. I have several years of experience as accountant. Additionally for almost two years I have been developing my hobby, which is building web applications, with focus on front-end. I was learning and practision on my own. On this point Udemy platform turned out to be my friend.";


  return ( 
    <div className="aboutme">
      <div className="aboutme__info">
        <div className="aboutme__language">
          <button onClick = {buttonSetEnglish} className="en">en</button>
          <button onClick ={buttonSetPolish} className="pl">pl</button>
        </div>
        <div className="aboutme__tekst">
          <h1>{lang === "en" ? englishName : polishName}</h1>
          <p>{lang === "en" ? englishText : polishText} </p>
        </div>
      </div>
      <div className="aboutme__portret">
        <div className="aboutme__portret-container">
    <video className="aboutme__video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      </div>
      </div>
    </div>
   );
}
 
export default MainPage;