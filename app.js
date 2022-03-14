const clearBtn = document.querySelector('#clear-btn');
const pixelsUp = document.querySelector('#pixels-up-btn');
const pixelsDown = document.querySelector('#pixels-down-btn');
const blackPaint = document.querySelector('#black-option');
const rainbowPaint = document.querySelector('#rainbow-option');
let gridBlocks


let blocksAcross = 25;
let paintOpt = 'black'

function randomColor() {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    return `rgb(${r}, ${g}, ${b})`;
}

function startPaintBlack() {
    gridBlocks.forEach(block => block.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'black';
    }))
}

function startPaintRainbow() {
    gridBlocks.forEach(block => block.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = randomColor();
    }))
}
// function to make the grid, given a certain number of blocks across

function makeGrid(blocksAcross) {
    const area = blocksAcross * blocksAcross;
    for (let i = 1; i <= area; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('grid-block');
        gridBlock.id = `grid-block-${i}`;
        gridBlock.style.width = `${550 / blocksAcross}px`;
        gridBlock.style.height = gridBlock.style.width;
        document.getElementById('canvas').appendChild(gridBlock);
        gridBlocks = document.querySelectorAll('.grid-block');
    }
    if (paintOpt === 'black') {
        startPaintBlack();
    } else {
        startPaintRainbow();
    }
}

makeGrid(blocksAcross);

// Remove the grid (needed to repopulate with new pixel density)

function removeGrid() {
    gridBlocks.forEach(block => block.remove());
}

// Clear the grid

clearBtn.addEventListener('click', function () {
    gridBlocks.forEach(block => block.style.backgroundColor = '#eff3f1');
})

blackPaint.addEventListener('click', function () {
    paintOpt = 'black';
    blackPaint.classList.add('option-selected');
    rainbowPaint.classList.remove('option-selected');
    startPaintBlack();

})

rainbowPaint.addEventListener('click', function () {
    paintOpt = 'rainbow';
    rainbowPaint.classList.add('option-selected');
    blackPaint.classList.remove('option-selected');
    startPaintRainbow();
})

// Increase/Decrease Pixel Density

pixelsUp.addEventListener('click', function () {
    if (blocksAcross < 75) {
        removeGrid();
        blocksAcross += 1;
        makeGrid(blocksAcross);
    } else {
        alert('Maximum pixel density reached.');
    }
})

pixelsDown.addEventListener('click', function () {
    if (blocksAcross > 12) {
        removeGrid();
        blocksAcross -= 1;
        makeGrid(blocksAcross);
    } else {
        alert('Minimum pixel density reached.');
    }
})

