/*

  v.1.0.1

  Interactive Periodic Table - Copyright 2023 (c) Arturo Olivares
  table_generator.js
    
*/

const mainPeriodicTable = document.getElementById("main-periodic-table");

// Define the voids coordinates
const voids = [
  [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13], [1, 14], [1, 15], [1, 16],
  [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10], [2, 11],
  [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11],
  [6, 2],
  [7, 2]
];

for (let i = 1; i <= 7; i++) {
  const periodDiv = document.createElement("div");
  periodDiv.classList.add("period");

  // Create 18 divs for each period
  for (let j = 0; j < 18; j++) {
    const elementDiv = document.createElement("div");

    // Set the ID of the cell based on its coordinates
    elementDiv.id = `cell-${i}-${j + 1}`;

    // Check if the current coordinates match with any voids coordinates
    const isVoid = voids.some(coords => coords[0] === i && coords[1] === j);

    if (!isVoid) {
      // If it's not a void, add "element-cell" class and create a div with "contents" class inside
      elementDiv.classList.add("element-cell");
      const contentsDiv = document.createElement("div");
      contentsDiv.classList.add("contents");
      elementDiv.appendChild(contentsDiv);
    } else {
      // If it's a void, add "void" class
      elementDiv.classList.add("void");
    }

    // Append the elementDiv as a child of periodDiv
    periodDiv.appendChild(elementDiv);
  }

  mainPeriodicTable.appendChild(periodDiv);
}

