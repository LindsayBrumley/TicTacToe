const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "x",
};

const board = document.querySelector(".board");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `${i}-${j}`;
    board.append(cell);
  }
}

const nameForm = document.querySelector("form");
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const player1 = event.target[0].value;
  document.querySelector("#player1name").innerText = player1;
  const player2 = event.target[1].value;
  document.querySelector("#player2name").innerText = player2;
  event.target[0].value = "";
  event.target[1].value = "";
});

board.addEventListener("click", (e) => {
  const row = e.target.id[0];
  const col = e.target.id[2];

  gameState.board[row][col] = gameState.currentPlayer;

  renderBoard();
  checkWin();
  switchPlayer();
});

function renderBoard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.getElementById(`${i}-${j}`);
      cell.innerText = gameState.board[i][j];
      console.log(gameState.board);
    }
  }
}
function switchPlayer() {
  if (gameState.currentPlayer === "x") {
    gameState.currentPlayer = "o";
  } else {
    gameState.currentPlayer = "x";
  }
}

function checkWin() {
  checkDiagonals();
  checkRow();
  checkColumn();
}

function checkRow() {
  const winRows = gameState.board.filter((row) => {
    const filteredRow = row.filter((cell) => cell == gameState.currentPlayer);
    return row.length == filteredRow.length;
  });
  return winRows.length > 0;
}

function checkRow() {
  for (let i = 0; i < gameState.board.length; i++) {
    if (
      gameState.board[i][0] === "x" &&
      gameState.board[i][1] === "x" &&
      gameState.board[i][2] === "x"
    ) {
      console.log("X has won!");
    }
    if (
      gameState.board[i][0] === "o" &&
      gameState.board[i][1] === "o" &&
      gameState.board[i][2] === "o"
    ) {
      console.log("O has won!");
    }
  }
}

function checkColumn() {
  const board = gameState.board;
  for (let i = 0; i < board[0].length; i++) {
    let thisColumn = [];
    thisColumn.push(board[0][i]);
    thisColumn.push(board[1][i]);
    thisColumn.push(board[2][i]);
    if (
      thisColumn[0] === "x" &&
      thisColumn[1] === "x" &&
      thisColumn[2] === "x"
    ) {
      console.log(`X is the winner!`);
    }
    if (
      thisColumn[0] === "o" &&
      thisColumn[1] === "o" &&
      thisColumn[2] === "o"
    ) {
      console.log(`O is the winner!`);
    }
  }
}

function checkDiagonals() {
  const board = gameState.board;
  if (board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x") {
    console.log("x is the winner (diagnal)");
  }
  if (board[2][0] === "x" && board[1][1] === "x" && board[0][2] === "x") {
    console.log("x is the winner (diagnal)");
  }
  if (board[0][0] === "o" && board[1][1] === "o" && board[2][2] === "o") {
    console.log("o is the winner (diagnal)");
  }
  if (board[2][0] === "o" && board[1][1] === "o" && board[0][2] === "o") {
    console.log("o is the winner (diagnal)");
  }
}
