const gridContainer = document.querySelector(".grid-container");
const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
  // Removes grid container first child until none remains
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

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

function makeGrid(gridSize = 16) {
  for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    for (let i = 0; i < gridSize; i++) {
      let gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridRow.appendChild(gridCell);
    }

    gridContainer.appendChild(gridRow);
  }
}

// Make grids on page load (default is 16 grids)
window.onload = () => makeGrid();
