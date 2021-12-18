import { Board } from "./Board";
export class Game {
  fields = ["","","","","","","","",""];
   activePlayer = "X";
   gameActive = true;

  winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ];


  constructor() {
    this.board = new Board(
      this.handleItemClick, 
      this.handleButtonClick);
      
      this.setDefaults();
  }


  validateGame = () => {
  let gameWon = false;
  for( let i = 0; i<=7; i++){
   const [posA, posB, posC] = this.winningConditions[i];
   const value1 = this.fields[posA];
   const value2 = this.fields[posB];
   const value3 = this.fields[posC];

   if(value1 !== "" && value1 === value2 && value1 === value3){
     gameWon = true;
     break;
   }
  }
  if(gameWon){
    this.gameActive = false;
    this.board.displayMessage(this.activePlayer);
  } else if(this.isBoardFull()){
    this.gameActive = false;
    this.board.displayRemisMessage();
  }
}

 isBoardFull = () => {
  return this.fields.find(field => field === "") === undefined;
}

 handleButtonClick = () => {
  this.setDefaults();
}

 handleItemClick = e => {
  const {pos} = e.target.dataset;
  if(this.gameActive && this.fields[pos] === ""){
    this.fields[pos] = this.activePlayer;
    e.target.classList.add(`board__item--filled-${this.activePlayer}`);
    this.validateGame();
    this.activePlayer = this.activePlayer === "X" ? "O" : "X";
  }
};


 setDefaults = () => {
  this.fields = ["","","","","","","","",""];
  this.activePlayer = "X";
  this.gameActive = true;
};
}

const game = new Game();
