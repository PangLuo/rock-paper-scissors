function getComputerChoice() {
  let num = Math.random();
  if (num < 1/3) {
    return "rock";
  } else if (num < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice() {
    let choice = prompt("Choose one from rock, paper and scissors.");
    return choice;
}


function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    const BEATS = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };
    if (humanChoice === computerChoice) {
      humanScore += 0.5;
      computerScore += 0.5;
      console.log(`It's a tie. Both chose ${humanChoice}.`);
    } else if (BEATS[humanSelection] === computerSelection) {
        humanScore += 1;
        console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
      }
    else {
      computerScore += 1;
      console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`);
    }
  }

  let humanSelection;
  let computerSelection;
  const ROUNDS = 5;
  for (let i = 0; i < ROUNDS; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Round ${i+1}: ${humanScore} (You) vs ${computerScore} (Computer)`);
  }
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie.");
  }
}


playGame();
