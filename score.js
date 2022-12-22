// Iteration 8: Making scoreboard functional
var url = new URLSearchParams(window.location.search);
console.log(url);
var score = url.get("score");

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) => {
  location.href = "./game.html";
};