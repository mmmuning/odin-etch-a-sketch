const gridContainer = document.querySelector(".grid-container");
const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", clearGrid);

// Removes parent's first child until none remains
function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Makes divs based on the inputted size
function makeGrid(gridSize = 16) {
  for (let row = 0; row < gridSize; row++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    for (let col = 0; col < gridSize; col++) {
      let gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");

      // Add mouseover event listener for the "hover-effect"
      gridCell.addEventListener("mouseover", () => hoverEffect(gridCell));

      gridRow.appendChild(gridCell);
    }

    gridContainer.appendChild(gridRow);
  }
}

function clearGrid() {
  // Remove gridContainer's children
  removeAllChildren(gridContainer);

  // Prompt user to enter new grid size
  let gridSize = parseInt(
    prompt("Enter grid size (1–100): e.g. 16 for a 16×16 grid")
  );

  // Validate input
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    makeGrid(gridSize);
  }
}

// Generate random values for red, green, and blue components (0-255)
function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = 0.1;

  return `${r}, ${g}, ${b}`;
}

function hoverEffect(element) {
  const newColor = getRandomRGBColor();

  if (element.dataset.backgroundColor === undefined) {
    element.dataset.backgroundColor = newColor;
    element.dataset.opacity = 0.1;
  } else {
    element.dataset.opacity = Math.min(
      parseFloat(element.dataset.opacity) + 0.1,
      1
    );
  }

  element.setAttribute(
    "style",
    `background-color: rgba(${element.dataset.backgroundColor}, ${element.dataset.opacity});`
  );
}

// Make grids on page load (default is 16 grids)
window.onload = () => makeGrid();
