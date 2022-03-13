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
}

makeGrid(blocksAcross);

gridBlocks.forEach(block => block.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'black';
}))

