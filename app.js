const clearBtn = document.querySelector('#clear-btn');
const pixelsUp = document.querySelector('#pixels-up-btn');
const pixelsDown = document.querySelector('#pixels-down-btn');
const blackPaint = document.querySelector('#black-option');
const rainbowPaint = document.querySelector('#rainbow-option');
const paintCanvas = document.querySelector('#canvas');
let gridBlocks


let blocksAcross = 25;
let paintOpt = 'black'

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function makeGrid(blocksAcross) {
    const area = blocksAcross * blocksAcross;
    for (let i = 1; i <= area; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('grid-block');
        gridBlock.id = `grid-block-${i}`;
        gridBlock.style.width = `${550 / blocksAcross}px`;
        gridBlock.style.height = gridBlock.style.width;
        paintCanvas.appendChild(gridBlock);
        gridBlocks = document.querySelectorAll('.grid-block');
    }
}

makeGrid(blocksAcross);

paintCanvas.addEventListener('mouseover', function (e) {
    if (paintOpt === 'black') {
        e.target.style.backgroundColor = 'black';
    } else {
        e.target.style.backgroundColor = randomColor();
    }
})


function removeGrid() {
    gridBlocks.forEach(block => block.remove());
}


clearBtn.addEventListener('click', function () {
    gridBlocks.forEach(block => block.style.backgroundColor = '#eff3f1');
})

blackPaint.addEventListener('click', function () {
    paintOpt = 'black';
    blackPaint.classList.add('option-selected');
    rainbowPaint.classList.remove('option-selected');
})

rainbowPaint.addEventListener('click', function () {
    paintOpt = 'rainbow';
    rainbowPaint.classList.add('option-selected');
    blackPaint.classList.remove('option-selected');
})


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

