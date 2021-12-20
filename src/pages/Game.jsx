import React from 'react';

import Board from './game-components/Board';
import Square from './game-components/Square';
import {useState, useEffect} from 'react';

const defaultSquares = () => new Array(9).fill(null);

const lines =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function Game() {
  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);
  
 
  useEffect(() => {
    const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;
    const linesThatAre =(a,b,c) => {
      return lines.filter(squareIndexes => {
        const squareValues = squareIndexes.map(index => squares[index]);
        return JSON.stringify([a,b,c].sort()) === JSON.stringify(squareValues.sort());
      });
    };
    const emptyIndexes = squares
    .map((square,index)=> square === null ? index : null)
    .filter(val => val !== null);

    const playerWon = linesThatAre("x","x","x").length > 0;
    const computerWon = linesThatAre("o","o","o").length > 0;
    if(playerWon){
      setWinner("X");
    }
    if(computerWon) {
      setWinner("O");
    }
    if(!computerWon && !playerWon && emptyIndexes.length === 0){
      setWinner("R");
    }
   
    if(emptyIndexes.length > 0){
      const putComputerAt = index => {
      let newSquares = squares;
      newSquares[index] = "o";
      setSquares([...newSquares]);
    }

    if(isComputerTurn){
      const winningLines = linesThatAre("o","o", null);
      if(winningLines.length > 0){
        const winIndex = winningLines[0].filter(index => squares[index]===null)[0];
        putComputerAt(winIndex);
        return;
      }
      const linesToBlock = linesThatAre("x","x", null);
      if(linesToBlock.length > 0){
        const blockIndex = linesToBlock[0].filter(index => squares[index]===null)[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre("o", null, null);
      if(linesToContinue.length > 0){
        putComputerAt(linesToContinue[0].filter(index => squares[index]===null)[0]);
        return;
      }

      const randomIndex = emptyIndexes[Math.ceil(Math.random()*emptyIndexes.length)];
      putComputerAt(randomIndex);
    }}
  }, [squares]);



  function handleSquareClick(index) {
    const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
    if(isPlayerTurn && !winner) {
      if(squares[index] === null){
      let newSquares = squares;
      newSquares[index] = "x";
      setSquares([...newSquares]);
    }else{
      return;
    }
    }
  }
  function resetState() {
    setWinner(null);
    setSquares(defaultSquares());
  }



  return (
    <div className="game">
      <h1 className="game__title">TIC TAC TOE GAME</h1>
   <div className='table'>
     <Board>
       {squares.map((square, index) => 
       <Square 
       x={square === "x" ? 1 : 0}
       o={square === "o" ? 1 : 0}
       onClick={()=> handleSquareClick(index)} />)}
     </Board>
     </div>
     <div className="result-wrapper">
     <div class="result">
       <div className="result__message">
         <h2>Do you know Tic Tac Toe game? </h2>
         <p>You are player X, the computer is O. Players take turn putting their marks in empty squares.
         The first player to get 3 of her marks in a row (up, down, across or diagonally) is the winner.
         When all 9 squares are full, game is over with tie.</p>
         <h4>Try to beat the computer.</h4>
       </div>
       <div className="result__winner">
       {!!winner && winner === "X" && (
         <h3>Brawo! You win!</h3>
       )}
       {!!winner && winner === "O" && (
         <h3>Unfortunately you lose... try again</h3>
       )}
       {!!winner && winner === "R" && (
         <h3>TIE</h3>
       )}
       </div>
     </div>
       <button className="btn-game" onClick={()=>resetState()}>NEW GAME</button>
       </div>
   
   </div>
  );
}

export default Game;
