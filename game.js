console.log("start")

const cells = document.querySelectorAll('.cell')

let PlayerOne = "X";

let gameActive = true;

let gameState = ["", "", "", "", "", "", "", "", ""];

let round = 0 ; 

const Display = document.querySelector('.gameCondtion');

Display.innerHTML = `Start Play ${PlayerOne} `;




function cellIndex(event){


// to click on cell// 
    const currentCell = event.target;


    const clickedCellIndex = parseInt(
        currentCell.getAttribute('zoom')
      );

    
 
  //check if the cell has been seleted before //
      if (gameState[clickedCellIndex] !== "" || !gameActive) {
          return;
      }

      gameState[clickedCellIndex] = PlayerOne;
 
      currentCell.innerHTML = PlayerOne;
  

    Result();




}


for(let i =0 ; i< cells.length; i++){

cells[i].addEventListener("click", cellIndex)


} 



//this all condition to win the game 

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];





//start check the result for the game//
function Result() {
   
    let roundWon = false;
    let round = 0 ; 
  

    for (let j = 0; j <=7; j++) {
        
       
        const winCondition = winningConditions[j];
        let cellIndex1 = gameState[winCondition[0]];
        let cellIndex2 = gameState[winCondition[1]];
        let cellIndex3 = gameState[winCondition[2]];

    
//here check if there is cell empty"
         if (cellIndex1 === "" || cellIndex2 === "" || cellIndex3 === "") {
            
            continue;
         }
         // if they are same winningConditions
           if (cellIndex1 === cellIndex2 && cellIndex2 === cellIndex3) {
            roundWon = true;
            break;
         }
     
    }

// if you win 
             if (roundWon) { 

                Display.innerHTML = `You Win ${PlayerOne} congras, Round ${round}`  ;
                   gameActive = false;
                    return ;
    
                     }
//if the game end in draw  
    let roundDraw = !gameState.includes("");
     if (roundDraw) {
        Display.innerHTML = "Draw , Play Again !"
        gameActive = false;
        return "play again";
    }

    changePlayer();
}

//change between the player
function changePlayer () {
    PlayerOne = PlayerOne === "X" ? "O" : "X";
    Display.innerHTML = `Your Turn ${PlayerOne} Play`;


  }
 
  function refreshPage(){
    window.location.reload();
} 


