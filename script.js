const divContainer = document.querySelector(".container")
const gridBtn = document.querySelector("#gridBtn")
const rainbowBtn = document.querySelector("#rainbowBtn")
    
function createGrid(size) {
    divContainer.innerHTML = ''
    const squareSize = 740 / size
    
    for (let i = 0; i < size * size; i++) {
        const divGrid = document.createElement("div")
        divGrid.style.width = `${squareSize - 2}px`
        divGrid.style.height = `${squareSize - 2}px`
        divContainer.appendChild(divGrid)
    
        divGrid.addEventListener("mouseover", function(event) {
            divGrid.style.backgroundColor = "#891947"
        })

        function randomBgColor(){
            let r = Math.floor(Math.random()* 256)
            let g = Math.floor(Math.random()* 256)
            let b = Math.floor(Math.random()* 256)
            let bgColor = 'rgb(' + r + ',' + g + ',' + b + ')'
                
            divGrid.style.background = bgColor
        }

        rainbowBtn.addEventListener("click", function(event) {
            divGrid.addEventListener("mouseover", function(event) {
                divGrid.style.backgroundColor = (randomBgColor())
            })
        })
    }
}
    
// Výchozí mřížka 16x16
createGrid(16)
    
gridBtn.addEventListener("click", function(event) {
    let size
    do {
        size = parseInt(prompt("Enter the number of squares per side (max 100):"), 10)
    } while (isNaN(size) || size < 1 || size > 100)
        
    createGrid(size)
})
    
