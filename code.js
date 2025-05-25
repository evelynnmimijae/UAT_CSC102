// Computer chooses rock, paper, or scissors when the user presses the button for their choice.
function computerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  // The Math.Floor function ensures that the computer makes one of three choices randomly.
  return options[Math.floor(Math.random() * options.length)];
}

// A winner is chosen based on the user and computer choices.
// When the winner is chosen, a message pops up telling the user who won. 
// Possible outcomes. `===` ensures exact instances for combinations. 
function decideWinner(user, comp) {
  if (user === comp) return "It's a tie";
  if (
    (user === 'rock'     && comp === 'scissors') ||
    (user === 'paper'    && comp === 'rock')     ||
    (user === 'scissors' && comp === 'paper')
  ) {
    return "You win! 🎉";
  }
  return "Computer wins. 🤖";
}

// Initiates functions when the user presses one of the buttons to choose.
function play(userChoice) {
  const compChoice = computerChoice();
  const outcome   = decideWinner(userChoice, compChoice);

  // DOM updates must be here, inside play()
  document.getElementById('heading').textContent =
    `You chose ${userChoice.toUpperCase()}, computer chose ${compChoice.toUpperCase()}.`;
  document.getElementById('result').textContent = outcome;
}
