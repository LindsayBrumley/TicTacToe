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
  if (checkDiagonals() || checkRow() || checkColumn()) {
    alert(`${gameState.currentPlayer} wins!`);
  }
}

function checkRow() {
  for (let i = 0; i < gameState.board.length; i++) {
    if (
      gameState.board[i][0] === gameState.currentPlayer &&
      gameState.board[i][1] === gameState.currentPlayer &&
      gameState.board[i][2] === gameState.currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkColumn() {
  for (let i = 0; i < gameState.board[0].length; i++) {
    if (
      gameState.board[0][i] === gameState.currentPlayer &&
      gameState.board[1][i] === gameState.currentPlayer &&
      gameState.board[2][i] === gameState.currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkDiagonals() {
  if (
    gameState.board[0][0] === gameState.currentPlayer &&
    gameState.board[1][1] === gameState.currentPlayer &&
    gameState.board[2][2] === gameState.currentPlayer
  ) {
    return true;
  }

  if (
    gameState.board[2][0] === gameState.currentPlayer &&
    gameState.board[1][1] === gameState.currentPlayer &&
    gameState.board[0][2] === gameState.currentPlayer
  ) {
    return true;
  }

  return false;
}

function refreshPage() {
  document.location.reload();
}

// function computerPlayer()
// let
//  if (gameState.board[row][col])
