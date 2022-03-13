const clearBtn = document.querySelector('#clear-btn');
const pixelsUp = document.querySelector('#pixels-up-btn');
const pixelsDown = document.querySelector('#pixels-down-btn');
let gridBlocks


let blocksAcross = 25;

function makeGrid(blocksAcross) {
    const area = blocksAcross * blocksAcross;
    for (let i = 1; i <= area; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('grid-block');
        gridBlock.id = `grid-block-${i}`;
        gridBlock.style.width = `${550 / blocksAcross}px`;
        gridBlock.style.height = gridBlock.style.width;
        document.getElementById('canvas').appendChild(gridBlock);
    }
    gridBlocks = document.querySelectorAll('.grid-block');
    gridBlocks.forEach(block => block.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'black';
    }))
}

makeGrid(blocksAcross);

function removeGrid() {
    gridBlocks.forEach(block => block.remove());
}

clearBtn.addEventListener('click', function () {
    gridBlocks.forEach(block => block.style.backgroundColor = '#eff3f1');
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

