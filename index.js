let playerChoice = prompt();
let computerChoice = getComputerChoice();

function getComputerChoice() {
  const gameChoices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomChoice];
}

function playGame(playerSelection, computerSelection) {
  const convertLower = playerSelection.toLowerCase();
  if (convertLower == "rock" && computerSelection == "rock") {
    return "It's a tie";
  } else if (convertLower == "scissors" && computerSelection == "scissors") {
    return "It's a tie";
  } else if (convertLower == "paper" && computerSelection == "paper") {
    return "It's a tie";
  } else if (convertLower == "rock" && computerSelection == "scissors") {
    return "You WIN! Rock beats scissors";
  } else if (convertLower == "scissors" && computerSelection == "paper") {
    return "You WIN! Scissors beats paper";
  } else if (convertLower == "paper" && computerSelection == "rock") {
    return "You WIN! Paper beats rock";
  } else if (convertLower == "scissors" && computerSelection == "rock") {
    return "You LOSE! Rock beats scissors";
  } else if (convertLower == "paper" && computerSelection == "scissors") {
    return "You LOSE! Scissors beats paper";
  } else if (convertLower == "rock" && computerSelection == "paper") {
    return "You LOSE! Paper beats rock";
  } else {
    return "Invalid input!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result;

  // for (let i = 0; i < 5; i++) {
  //   computerChoice = getComputerChoice();
  //   console.log(`Game ${i + 1}`);
  //   result = playGame(playerChoice, computerChoice);
  //   console.log(result);

  //   if (result.includes("WIN")) {
  //     playerScore++;
  //   } else if (result.includes("LOSE")) {
  //     computerScore++;
  //   }
  // }

  if (playerScore > computerScore) {
    console.log("Congrats! You are the winner!");
  } else if (playerScore < computerScore) {
    console.log("Sorry! You lost to the computer..");
  } else {
    console.log("It's a tie!");
  }
}

game();
