const container = document.querySelector('.grid-container')
console.log(container);

for (let i  = 0; i < 256; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    container.appendChild(square)
    // square.addEventListener('mouseover', (e) => {
    //     e.target.style.backgroundColor = 'red'
    // })
}
