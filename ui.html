let energy = 0;
let spaceships = 0;
let energyBeam = 1;
let spaceshipCost = 50;
let energyBeamCost = 20;
let solarPanelCost = 200;
let spaceshipSpeed = 1000;

const scoreDisplay = document.getElementById("score");
const clicker = document.getElementById("clicker");
const autoClickerBtn = document.getElementById("autoClickerBtn");
const multiplierBtn = document.getElementById("multiplierBtn");
const autoClickerSpeedBtn = document.getElementById("autoClickerSpeedBtn");
const autoClickerCursors = document.getElementById("autoClickerCursors");
const notificationBox = document.getElementById("notificationBox");

clicker.addEventListener("click", () => {
  energy += energyBeam;
  animateScore();
  updateScore();
});

function animateScore() {
  scoreDisplay.style.transform = "scale(1.1)";
  setTimeout(() => {
    scoreDisplay.style.transform = "scale(1)";
  }, 150);
}

function updateScore() {
  scoreDisplay.textContent = `Energy: ${energy}`;
  autoClickerBtn.textContent = `Buy Spaceship (Cost: ${spaceshipCost}, Level: ${spaceships})`;
  multiplierBtn.textContent = `Buy Energy Beam (Cost: ${energyBeamCost}, Level: ${energyBeam})`;
  autoClickerSpeedBtn.textContent = `Buy Solar Panel Speed (Cost: ${solarPanelCost})`;
  prestigeBtn.textContent = `Prestige (Requires ${prestigeThreshold} Energy)`;
  renderAutoClickers();
}

function renderAutoClickers() {
  autoClickerCursors.innerHTML = "";
  for (let i = 0; i < spaceships; i++) {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    cursor.style.left = `${Math.random() * 100}%`;
    cursor.style.top = `${Math.random() * 100}%`;
    autoClickerCursors.appendChild(cursor);
  }
}

function showNotification(message) {
  notificationBox.textContent = message;
  notificationBox.style.display = "block";
  setTimeout(() => {
    notificationBox.style.display = "none";
  }, 3000);
}

setInterval(() => {
  energy += spaceships * energyBeam;
  updateScore();
}, 1000);
