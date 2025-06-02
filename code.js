// Computer chooses rock, paper, or scissors when the user presses the button for their choice.
function computerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  // The Math.Floor function ensures that the computer makes one of three choices randomly.
  // The Math.round function doesn't make the computer choose one of three choices consistently. 
  //   • values in [0.0, 0.499...) → 0
  //   • [0.5, 1.499...]         → 1
  //   • [1.5, 2.499...]         → 2
  //   • [2.5, 2.999...]         → 3   ← out of bounds (options[3] is undefined)
  // Math.random() returns a float in [0, 1).
  // Multiplying by options.length (3) gives a float in [0, 3).
  return options[Math.round(Math.random() * options.length)];
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
