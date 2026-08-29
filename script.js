const container = document.querySelector('.grid-container')
const btn = document.querySelector('button')

function makeGrid(gridSize){
    container.textContent = ''
    for (let i  = 0; i < Math.pow(gridSize, 2); i++) {
        const square = document.createElement('div')
        square.classList.add('grid-item')
        square.style.width = `calc((100% - (${gridSize - 1} * 2px)) / ${gridSize})`
        square.style.height = `calc((100% - (${gridSize - 1} * 2px)) / ${gridSize})`
        container.appendChild(square)
    }
}

makeGrid(16)

btn.addEventListener('click', () => {
    let newGridSize = Number(prompt('Enter new grid size. Maximum is 100, Minimum is 16:'))
    while(newGridSize > 100 || newGridSize < 16){
        if(newGridSize > 100)
            newGridSize = +prompt('Too high, Maximum is 100, Minimum is 16. Please Enter again:');
        else if(newGridSize < 16)
            newGridSize = +prompt('Too low, Maximum is 100, Minimum is 16. Please Enter again:');
    
    }    
    makeGrid(newGridSize)
})

