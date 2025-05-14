let isAdmin = false;

const commandBar = document.getElementById("commandBar");
const commandInput = document.getElementById("commandInput");
const questionMarkButton = document.getElementById("questionMarkButton");
const closeCommandBarButton = document.getElementById("closeCommandBarButton");
const commandSubmit = document.getElementById("commandSubmit");

questionMarkButton.addEventListener("click", toggleCommandBar);
closeCommandBarButton.addEventListener("click", closeCommandBar);
commandSubmit.addEventListener("click", submitCommand);

function toggleCommandBar() {
  commandBar.style.display = commandBar.style.display === "flex" ? "none" : "flex";
}

function closeCommandBar() {
  commandBar.style.display = "none";
}

function submitCommand() {
  const command = commandInput.value.trim().toLowerCase();
  const args = command.split(' ');

  if (command === "unlockadmin") {
    isAdmin = true;
    showNotification("Admin unlocked! Here are the commands:");
    [
      "givepoints [amount]",
      "reset",
      "adminop",
      "boostclick [amount]",
      "maxspeed",
      "richmode",
      "unlockall",
      "prestigemax",
      "storm",
      "mysterybox"
    ].forEach(cmd => showNotification(cmd));
  } else if (args[0] === "givepoints" && isAdmin) {
    const points = parseInt(args[1]);
    if (!isNaN(points) && points > 0) {
      energy += points;
      updateScore();
      showNotification(`You gained ${points} energy!`);
    } else {
      showNotification("Invalid points value.");
    }
  } else if (command === "reset" && isAdmin) {
    energy = 0;
    spaceships = 0;
    energyBeam = 1;
    spaceshipSpeed = 1000;
    updateScore();
    showNotification("Game reset!");
  } else if (command === "adminop" && isAdmin) {
    energy = 1000;
    spaceships = 1000;
    energyBeam = 1000;
    spaceshipSpeed = 100;
    updateScore();
    showNotification("Admin mode: Everything maxed!");
  } else {
    showNotification("Unknown or unauthorized command.");
  }

  commandInput.value = "";
}
