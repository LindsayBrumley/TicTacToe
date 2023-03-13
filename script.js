//It needs to interact when clicked, but before that I need to assign players.
//There needs to be a form for entering player names,
//I need an alert for when someone gets something wrong,
// I also want the board to reset after the game is over. Will there be a score keeper somewhere in the game

const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "x",
 };

 for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `${i}-${j}`;
    board.append(cell);
  }
 }
 
// //const nameButton = document.getElementById("setplayers");
// nameButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   const player1 = document.getElementById("Player1").value;
//   document.querySelector("#player1score p").innerHTML = player1;
//   const player2 = document.getElementById("Player2").value;
//   document.querySelector("#player2score p").innerHTML = player2;
// });

board.addEventListener("click", function (e)  => {
  const row = e.target.id[0];
  const col = e.target.id[2];

  gameState.board[row][col] =gameState.currentPlayer;

  renderBoard();
  switchPlayers();
});  
  // Figure out how to get the coordinates off event object (e.target.value)
  // Use those coordinates to reference indexes in our gameState.board
  // Set the position in our board to the current player


function renderGame() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.getElementById(`${i}-${j}`);
      cell.innerText = gameState.board[i][j];
    }
  } 
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
