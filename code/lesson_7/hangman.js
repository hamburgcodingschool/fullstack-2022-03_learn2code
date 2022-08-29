let prompt = require("prompt-sync")();

function isInString(str, ch) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === ch.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function replaceInBoard(board, guess) {
  // [...]
  return board;
}

function checkIfSolved(board) {
  return; // [...]
}

let word = "monkey";
let solved = false;
let misses = [];
let board = [];
for (let i = 0; i < word.length; i++) {
  board[i] = "_";
}
console.log(board.join(" "));

while (!solved) {
  let guess = prompt("What is your guessed character? ");
  if (isInString(word, guess)) {
    board = replaceInBoard(board, word, guess);
  } else {
    misses[misses.length] = guess;
  }
  solved = checkIfSolved(board);
  console.log(board.join(" "));
}
