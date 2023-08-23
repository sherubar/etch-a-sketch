const gridContainer = document.querySelector('.container')
const newGridBtn = document.querySelector('.new-grid')
const resetBtn = document.querySelector('.resetBtn')

function askUser(){
    squaresByUser = +(prompt("How many squares in the rows and columns of your grid?:"))
    if (squaresByUser <=1 || squaresByUser > 100){
        alert("Please choose an amount from 2 to 100!")
        squaresByUser = 0
    }
    else if (isNaN(squaresByUser)){
        alert("Your chosen value has to be a number!")
    }
    else{   
        console.log(squaresByUser);
        return squaresByUser
    }
}

function createGrid(numberOfSquares){
    numberOfSquares = squaresByUser
    for (let i = 0; i < numberOfSquares; i++){
        for (let j = 0; j < numberOfSquares; j++){
            const newSquare = document.createElement('div')
            newSquare.style.cssText = `border: 0.5px solid lightgray; flex-grow: 1; flex-shrink: 1; height: ${350/numberOfSquares}px;`
            gridContainer.appendChild(newSquare)
        }
    }
}

function resetGrid(){
    gridContainer.innerHTML = ""
    newGridBtn.disabled = false
}

function disableNewGridBTn(){
    if (squaresByUser > 0){
        newGridBtn.disabled = true
    }
    else {
        newGridBtn.disabled = false
    }
}

newGridBtn.addEventListener('click', askUser)
newGridBtn.addEventListener('click', createGrid)
resetBtn.addEventListener('click', resetGrid)
newGridBtn.addEventListener('click', disableNewGridBTn)