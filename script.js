// Create a div using Javascript
// Add a class called squares to the new div
// Append it to the container div
const container = document.querySelector(".container");
const button = document.querySelector("button");

createGrid(16);
draw();

button.addEventListener("click", () => {
    let gridSize = Number(window.prompt("Choose the size of the grid"));
    // Only creates new grid if user enters valid input or does not cancel
    if (gridSize > 0) {
        resetGrid();
        createGrid(gridSize);
        draw();
    }
});

function draw() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = selectRandomColor();
        });
    });
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }

    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
}

function resetGrid() {
    container.textContent = "";
}

function selectRandomColor() {
    let red = Math.random() * 256;
    let green = Math.random() * 256;
    let blue = Math.random() * 256;

    return `rgb(${red}, ${green}, ${blue})`;
}