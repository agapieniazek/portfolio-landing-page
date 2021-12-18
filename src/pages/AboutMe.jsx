import React, { useState } from 'react';

import img from "../images/femine.png";

const MainPage = () => {
  const [lang, setLang] = useState("en");

  const buttonSetPolish = () => setLang("pl");
  const buttonSetEnglish =() => setLang("en");

  const polishName = "Nazywam się Aga";
  const englishName = "My name is Aga";

  const polishText ="Miałam pracę, którą lubiłam, mogłam liczyć na kilku wypróbowanych przyjaciół i mieszkałam z mamą. Ale bywały chwile, kiedy czułam, że życie przecieka mi przez palce. Miałam wtedy trzydzieści trzy lata i mieszkałam w niewielkiej miejscowości w centralnej Polsce. Nie miałam męża, dzieci, ani żadnych zobowiązań, poza pracą.";
  const englishText = "Daniel Peter, a Swiss candle-maker joined his father-in-law's chocolate business. In 1867 he began experimenting with milk as an ingredient. He brought his new product, milk chocolate, to market in 1875. He was assisted in removing the water content from the milk to prevent mildewing by a neighbor, a baby food manufacturer named Henri Nestlé.";


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
      <img src={img} alt="femine"/>
      </div>
      </div>
    </div>
   );
}
 
export default MainPage;