const gridContainer = document.getElementById('grid-container');
const rows = 15;
const cols = 20;

// Generate grid cells
for (let i = 0; i < rows * cols; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  gridContainer.appendChild(cell);
}

// Function to create a raindrop
function createRaindrop(cell) {
  const drop = document.createElement('div');
  drop.classList.add('rain-drop');
  drop.style.backgroundColor = getRandomColor();
  drop.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
  drop.style.left = `${Math.random() * 90}%`;
  cell.appendChild(drop);

  // Remove drop after animation ends
  drop.addEventListener('animationend', () => {
    cell.removeChild(drop);
  });
}

// Generate random color
function getRandomColor() {
  const colors = ['#0ff', '#0f0', '#00f', '#ff0', '#f0f', '#f00'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Simulate rain
function simulateRain() {
  const cells = document.querySelectorAll('.cell');
  setInterval(() => {
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    createRaindrop(randomCell);
  }, 100);
}

// Start simulation
simulateRain();
