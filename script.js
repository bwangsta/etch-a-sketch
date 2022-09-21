const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

// Create a div using Javascript
// Add a class called squares to the new div
// Append it to the container div
const container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }
}

function draw() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = selectRandomColor();
        });
    });
}

function selectRandomColor() {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    return `rgb(${red}, ${green}, ${blue})`;
}

function main() {
    createGrid();
    draw();
}

main();