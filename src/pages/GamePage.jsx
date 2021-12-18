import React from 'react';

const GamePage = () => {

  return ( 
    <div className="game">
    <div class="wrapper">
    <p class="panel"></p>
  <div class="board">
    <div class="board__item"data-pos="0"></div>
    <div class="board__item"data-pos="1"></div>
    <div class="board__item"data-pos="2"></div>
    <div class="board__item"data-pos="3"></div>
    <div class="board__item"data-pos="4"></div>
    <div class="board__item"data-pos="5"></div>
    <div class="board__item"data-pos="6"></div>
    <div class="board__item"data-pos="7"></div>
    <div class="board__item"data-pos="8"></div>
  </div>
  <button class="reset-button">Reset the game</button>
</div>

    </div>
   );
}
 
export default GamePage;