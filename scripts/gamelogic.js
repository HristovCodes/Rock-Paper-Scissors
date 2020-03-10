//0 rock
//1 paper
//2 scissors
let playerDecision;
let computerDecision;
let score = 0;
let round = 0;

const elscore = document.getElementById("score");
const elround = document.getElementById("round");
const eloutcome = document.getElementById("outcome");
const elcomputer = document.getElementById("computer");
const elmessage = document.getElementById("message");

//plays 5 rounds of the game
document.getElementById("startgame").onclick = function game() {
  score = 0;
  round = 0;
  elscore.innerText = "Score: " + score;
  elround.innerText = "Round: " + round;
  eloutcome.innerText = "The game has officialy started.";
  elmessage.innerText = "Good luck!";
  document.getElementById("buttons").classList.replace("hidden", "buttons");
};

//starts the next round after player chooses
function nextRound() {
  round++;
  elmessage.innerText = "";
  computerDecision = computerPlay();
  let outcome = decideOutcome();
  elround.innerText = "Round " + round.toString();
  eloutcome.innerText = outcome;
  elscore.innerText = "Score: " + score.toString();
  if (score >= 3) {
    eloutcome.innerText = "";
    elmessage.innerText =
      "You won " + score.toString() + " out of 5 times so you are the winner!";
    document.getElementById("buttons").classList.replace("buttons", "hidden");
    round = 0;
    score = 0;
  } else if (score < 3 && round == 5) {
    eloutcome.innerText = "";
    elmessage.innerText =
      "You won " + score.toString() + " out of 5 times so you are the loser!";
    document.getElementById("buttons").classList.replace("buttons", "hidden");
    round = 0;
    score = 0;
  }
}

//decides what the computer will play (random)
function computerPlay() {
  let choice = Math.random() * 10;
  choice = Math.round(choice);
  if (choice < 3.33) {
    choice = "Rock";
  } else if (choice < 6.66) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  elcomputer.innerText = "Computer's decision: " + choice;
  return choice;
}

document.getElementById("rock").onclick = function() {
  playerDecision = "Rock";
  nextRound();
};

document.getElementById("paper").onclick = function() {
  playerDecision = "Paper";
  nextRound();
};

document.getElementById("scissors").onclick = function() {
  playerDecision = "Scissors";
  nextRound();
};

//decides the outcome of the game, case insensitive
function decideOutcome() {
  if (playerDecision.toUpperCase() === computerDecision.toUpperCase()) {
    return (
      "It's a tie! " + playerDecision + " is same as " + computerDecision + "."
    );
  } else {
    if (playerDecision.toUpperCase() == "ROCK") {
      if (computerDecision.toUpperCase() == "PAPER") {
        return (
          "You lose! " +
          playerDecision +
          " is weaker than " +
          computerDecision +
          "."
        );
      } else {
        score++;
        return (
          "You win! " +
          playerDecision +
          " is stronger than " +
          computerDecision +
          "."
        );
      }
    } else if (playerDecision.toUpperCase() == "PAPER") {
      if (computerDecision.toUpperCase() == "SCISSORS") {
        return (
          "You lose! " +
          playerDecision +
          " is weaker than " +
          computerDecision +
          "."
        );
      } else {
        score++;
        return (
          "You win! " +
          playerDecision +
          " is stronger than " +
          computerDecision +
          "."
        );
      }
    } else if (playerDecision.toUpperCase() == "SCISSORS") {
      if (computerDecision.toUpperCase() == "ROCK") {
        return (
          "You lose! " +
          playerDecision +
          " is weaker than " +
          computerDecision +
          "."
        );
      } else {
        score++;
        return (
          "You win! " +
          playerDecision +
          " is stronger than " +
          computerDecision +
          "."
        );
      }
    } else {
      //stigne li tuk ne e dobre
      alert("Ei sq si iba mamata");
    }
  }
}
