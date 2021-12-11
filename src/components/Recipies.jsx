import {useState} from "react";

const elemShield = {
  leatherStrips: 2,
  iron: 3,
  mooonstone: 5
};
const elmGount = {
  ...elemShield,
  leather: 1,
  moonStone: 4
}
const Recipies = () => {
  const [recipie, setRecipie] = useState({});
  return ( 
    <div>
      <h3>Current recipie</h3>
      <button onClick={() => setRecipie(elemShield)}>Przepis 1</button>
      <button onClick={() => setRecipie(elmGount)}>Przepis 2</button>

      <ul>
        {Object.keys(recipie).map((material) => 
        (<li key={material}>
          {material}:{recipie[material]}
          </li>)
          )}
      </ul>
    </div>
   );
}
 
export default Recipies;

