
export class Board {
 
  fieldsElements = document.querySelectorAll(".board__item");
   panel = document.querySelector(".panel");
   button = document.querySelector(".reset-button");
  modeSelect = document.querySelector("#mode-select");

   constructor(onItemClick, onButtonClick) {
     this.onButtonClick = onButtonClick;
    this.button.addEventListener("click", this.handleButtonClick);
  
      this.fieldsElements.forEach(field => {
        field.addEventListener("click", onItemClick)
      });
     };
     
     handleButtonClick =() => {
      this.resetBoardClasses();
      this.clearMessage();
      this.onButtonClick();
     }
  
     resetBoardClasses =() => {
      this.fieldsElements.forEach(field => {
        field.classList.remove("board__item--filled-X", "board__item--filled-O");
      });
    };
     displayMessage =(activePlayer) => {
      this.panel.innerHTML = `Gratulacje ${activePlayer}. Wygrałeś!`;
    };
    
     displayRemisMessage =() => {
      this.panel.innerHTML = `Remis!`;
    };
    
     clearMessage =() => {
      this.panel.innerHTML="";
    };
  }

