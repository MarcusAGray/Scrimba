
const player1 = 0;
const player2 = 0;
let activePlayer = player1;

const turnDisplay = document.getElementById("turn-display");

const player1ScoreDisplay = document.getElementById("player1-score-display");
const player2ScoreDisplay = document.getElementById("player2-score-display");


const rollBtn = document.getElementById("rollBtn");

rollBtn.addEventListener("click", function() {
    player1 += rollDice()
})

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
  }

function addPlayersScore() {
    let player;
    if (activePlayer === player1) {
        player = player1;
    } else {
        player = player2
    }

    player +=
}