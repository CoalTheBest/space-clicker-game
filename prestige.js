let prestigeLevel = 0;
let prestigeThreshold = 1000;

const prestigeBtn = document.getElementById("prestigeBtn");

prestigeBtn.addEventListener("click", prestige);

function prestige() {
  if (energy >= prestigeThreshold) {
    energy = 0;
    spaceships = 0;
    energyBeam = 1;
    spaceshipSpeed = 1000;
    prestigeLevel++;
    prestigeThreshold = Math.floor(prestigeThreshold * 2);
    updateScore();
    showNotification(`Prestiged! You are now at prestige level ${prestigeLevel}.`);
  } else {
    showNotification(`You need ${prestigeThreshold} energy to prestige.`);
  }
}
