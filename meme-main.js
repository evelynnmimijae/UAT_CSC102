// meme-main.js - Script to move the meme image using Start and Stop buttons

// Get image and button references
const meme = document.getElementById("memeImage");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const messageBox = document.getElementById("messageBox");
const form = document.getElementById("controlForm");

// Center the image on page to load
window.onload = () => {
  const memeWidth = meme.offsetWidth;
  const memeHeight = meme.offsetHeight;
  const centerX = (window.innerWidth - memeWidth) / 2;
  const centerY = (window.innerHeight - memeHeight) / 2;

  meme.style.left = `${centerX}px`;
  meme.style.top = `${centerY}px;`
};

// Track interval so we can stop movement
let moveInterval = null;

// Function to move the image randomly
function moveImage() {
  // Generate random x and y positions
  const x = Math.floor(Math.random() * window.innerWidth * 0.8);
  const y = Math.floor(Math.random() * window.innerHeight * 0.8);
  meme.style.left = `${x}px`;
  meme.style.top = `${y}px`;
}

// Function to start image movement
function startMovement() {
  // Disable Start, enable Stop
  startBtn.disabled = true;
  stopBtn.disabled = false;
  messageBox.innerHTML = "Image is moving!";

  // Move every 500ms
  moveInterval = setInterval(moveImage, 500);
}

// Function to stop image movement
function stopMovement() {
  // Enable Start, disable Stop
  startBtn.disabled = false;
  stopBtn.disabled = true;
  messageBox.innerHTML = "Image stopped.";

  clearInterval(moveInterval);
}

// Listen to form submission (required by assignment)
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent reload

  if (!startBtn.disabled) {
    startMovement();
  } else {
    stopMovement();
  }
});
