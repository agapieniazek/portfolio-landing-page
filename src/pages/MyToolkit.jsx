import React from 'react';
const myskills = [
  {
    name: "HTML5",
    img: require("../images/html.png") 
  },
  {
    name: "CSS3",
    img: require("../images/css.png")
  },
  {
    name: "React",
    img: require("../images/react.png")
  },
  {
    name: "Sass",
    img: require("../images/sass.png")
  },
  {
    name: "GitHub",
    img: require("../images/github.png")
  }
];

const MyToolkit = () => {

const list = myskills.map((skill) => {
 return (<li key={skill.name} className='toolkit__elem'>
    <img src={skill.img} alt="icon"/>
    <h2>{skill.name}</h2>
  </li>)
})

  return ( 
    <div className="toolkit">
      <h1 className='toolkit__info'>My toolkit</h1>
      <div className="toolkit__list">
      <ul className='toolkit__box'>
        {list}
      </ul>
      </div>
    </div>
   );
}
 
export default MyToolkit;