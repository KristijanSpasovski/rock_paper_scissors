let computerChoice = getComputerChoice();
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let currentResultElement = document.querySelector("#current-result");
let playerScoreElement = document.querySelector("#player-score");
let computerScoreElement = document.querySelector("#computer-score");
let finalResultElement = document.querySelector("#final-result");

let playerScore = 0;
let computerScore = 0;

const rockButton = rock.addEventListener("click", function () {
  playGame("rock", getComputerChoice());
});

const paperButton = paper.addEventListener("click", function () {
  playGame("paper", getComputerChoice());
});

const scissorsButton = scissors.addEventListener("click", function () {
  playGame("scissors", getComputerChoice());
});

function getComputerChoice() {
  const gameChoices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomChoice];
}

function playGame(playerSelection, computerSelection) {
  let resultText = `You chose: ${playerSelection}<br>`;
  resultText += `Computer chose: ${computerSelection}<br>`;

  if (playerSelection === computerSelection) {
    resultText += "It's a tie!<br>";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    resultText += `You WIN! ${playerSelection} beats ${computerSelection}<br>`;
    playerScore++;
  } else {
    resultText += `You LOSE! ${computerSelection} beats ${playerSelection}<br>`;
    computerScore++;
  }

  // Update the score elements' innerHTML
  currentResultElement.innerHTML = resultText;
  playerScoreElement.innerHTML = `Player Score: ${playerScore}`;
  computerScoreElement.innerHTML = `Computer Score: ${computerScore}`;

  if (playerScore + computerScore === 5) {
    determineWinner();
  }
}

function determineWinner() {
  let resultText = "";
  if (playerScore > computerScore) {
    resultText += "<br>Congratulations! You are the overall winner!";
  } else if (playerScore < computerScore) {
    resultText += "<br>Sorry! You lost to the computer overall.";
  } else {
    resultText += "<br>It's a tie overall!";
  }

  // Display the final result
  finalResultElement.innerHTML = resultText;

  // Reset scores
  playerScore = 0;
  computerScore = 0;
}
