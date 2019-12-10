//0 rock
//1 paper
//2 scissors
let playerDecision;
let computerDecision;
let score = 0;

//plays 5 rounds of the game
function game() {
  score = 0;
  for (let i = 1; i <= 5; i++) {
    computerDecision = computerPlay();
    playerDecision = prompt("Rock, paper or scissors?");
    let outcome = decideOutcome();
    console.log("Round " + i.toString() + ": " + outcome);
  }
  if (score >= 3) {
    console.log(
      "You won " + score.toString() + " out of 5 times so you are the winner!"
    );
  } else {
    console.log(
      "You won " + score.toString() + " out of 5 times so you are the loser!"
    );
  }
}

//decides what the computer will play (random)
function computerPlay() {
  let choice = Math.random() * 2;
  choice = Math.round(choice);
  if (choice == 0) {
    choice = "Rock";
  } else if (choice == 1) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
}

//decides the outcome of the game, case insensitive
function decideOutcome() {
  if (playerDecision.toUpperCase() === computerDecision.toUpperCase()) {
    return "It's a tie!" + playerDecision + " is same as " + computerDecision;
  } else {
    if (playerDecision.toUpperCase() == "ROCK") {
      if (computerDecision.toUpperCase() == "PAPER") {
        return (
          "You lose! " + playerDecision + " is weaker than " + computerDecision
        );
      } else {
        score++;
        return (
          "You win! " + playerDecision + " is stronger than " + computerDecision
        );
      }
    } else if (playerDecision.toUpperCase() == "PAPER") {
      if (computerDecision.toUpperCase() == "SCISSORS") {
        return (
          "You lose! " + playerDecision + " is weaker than " + computerDecision
        );
      } else {
        score++;
        return (
          "You win! " + playerDecision + " is stronger than " + computerDecision
        );
      }
    } else if (playerDecision.toUpperCase() == "SCISSORS") {
      if (computerDecision.toUpperCase() == "ROCK") {
        return (
          "You lose! " + playerDecision + " is weaker than " + computerDecision
        );
      } else {
        score++;
        return (
          "You win! " + playerDecision + " is stronger than " + computerDecision
        );
      }
    } else {
      //stigne li tuk ne e dobre
      alert("Ei sq si iba mamata");
    }
  }
}
