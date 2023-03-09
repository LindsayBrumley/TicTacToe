//I want the start of the game to have a grid that is empty,
//It needs to interact when clicked, but before that I need to assign players.
//There needs to be a form for entering player names,
//I need an alert for when someone gets something wrong,
// I also want the board to reset after the game is over. Will there be a score keeper somewhere in the game

let gameState = {
  board: [
    ["0,1", "0,2", "0,3"],
    ["1,1", "1,2", "1,3"],
    ["2,1", "2,2", "2,3"],
  ],
  // Maybe a current Player?
  // A game status?? 'isPlaying' or 'over'
  // Any other data your game logic depends on?
};

const nameButton = document.getElementById("setplayers");
nameButton.addEventListener("click", function (event) {
  event.preventDefault();
  const player1 = document.getElementById("Player1").value;
  document.querySelector("#player1score p").innerHTML = player1;
  const player2 = document.getElementById("Player2").value;
  document.querySelector("#player2score p").innerHTML = player2;
});

board.addEventListener("click", function (event) {
  // Figure out how to get the coordinates off event object (e.target.value)
  // Use those coordinates to reference indexes in our gameState.board
  // Set the position in our board to the current player
});

function renderGame() {
  // Call this function after you've changed your state values
  // Make references to DOM elements, and set the innerText,
  // or innerHTML to reflect our gameState.board
}

function switchPlayer() {
  // ???
}

function checkWin() {
  // Maybe this calls other helper functions?
  // checkRow()
  // checkColumn()
  // checkDiagonals()
}
