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
  console.log({ player1, player2 });
});

board.addEventListener("click", (e) => {
  const row = e.target.id[0];
  const col = e.target.id[2];

  gameState.board[row][col] = gameState.currentPlayer;

  renderBoard();
  switchPlayers();
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
  // Maybe this calls other helper functions?
  // checkRow()
  // checkColumn()
  // checkDiagonals()
}
