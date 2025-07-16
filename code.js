// Set up for the buttons and intro sound on page load
window.onload = function () {
  // Assigned functions to buttons directly
  document.getElementById("rockBtn").onclick = function () {
    play("rock");
  };
  document.getElementById("paperBtn").onclick = function () {
    play("paper");
  };
  document.getElementById("scissorsBtn").onclick = function () {
    play("scissors");
  };
};

// Plays the theme music when the "Play Theme Music" button is clicked
function startIntroSound() {
  // Intro music audio element
  const intro = document.getElementById("introSound");

  // "Play Theme Music" button
  const btn = document.getElementById("themeMusicBtn");

  // If intro music is paused, try to play it
  if (intro && intro.paused) {
    intro.play().catch((e) => console.log("Playback error:", e));
  }

  // Hide the button after it's clicked
  if (btn) {
    btn.style.display = "none";
  }
}

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
  // Stop the theme music if it's currently playing
  const introSound = document.getElementById("introSound");
  if (introSound && !introSound.paused) {
    introSound.pause();
    introSound.currentTime = 0;
  }

  // Play user choice sound
  if (userChoice === "rock") {
    document.getElementById("rockSound").play();
  } else if (userChoice === "paper") {
    document.getElementById("paperSound").play();
  } else if (userChoice === "scissors") {
    document.getElementById("scissorsSound").play();
  } 

  // Computer makes a choice
  const compChoice = computerChoice();

  // Decide who wins
  const outcome   = decideWinner(userChoice, compChoice);

  // DOM updates must be here, inside play()
  // Update page with choices and result
  document.getElementById('heading').textContent =
    `You chose ${userChoice.toUpperCase()}, computer chose ${compChoice.toUpperCase()}.`;
  document.getElementById('result').textContent = outcome;

  // Play result sound
  if (outcome.includes("You win")) {
    document.getElementById("winSound").play();
  } else if (outcome.includes("Computer wins")) {
    document.getElementById("loseSound").play();
  } else {
    document.getElementById("tieSound").play();
  }
}
