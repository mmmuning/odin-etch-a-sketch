const gridContainer = document.querySelector(".grid-container");

// alert prompt
let gridNum = 16;

for (let i = 0; i < gridNum; i++) {
  let gridRow = document.createElement("div");
  gridRow.classList.add("grid-row");

  for (let i = 0; i < gridNum; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridRow.appendChild(gridCell);
  }

  gridContainer.appendChild(gridRow);
}
