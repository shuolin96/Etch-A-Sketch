const grid = document.querySelector('.grid');
const btn = document.querySelector('#btn');

// Prompt input
function promptInput() {
    gridSize = prompt('Please input the grid size: ');
}

// Button
btn.addEventListener('click', () => {history.go(0)});

// Create a 16 * 16 grid and add event listener for each cell
function createBoard() {
    grid.style['grid-template-columns'] = `repeat(${gridSize}, 2fr)`
    grid.style['grid-template-rows'] = `repeat(${gridSize}, 2fr)`
}

function createGrid() {
    for (let i = 0; i < gridSize ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = 'blue';
        });
        grid.appendChild(div);
    }
}

// Assembly fucntions into one 
function playGame() {
    promptInput();
    if (gridSize < 5 || gridSize > 100) {
        alert('Please input grid size between 5 and 100!');
        history.go(0);
    } else {
        createBoard();
        createGrid();
    }
}

// Play the game!
playGame();