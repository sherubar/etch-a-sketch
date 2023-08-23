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
      const row = document.createElement("div");
      row.style.cssText = `display: flex; flex-direction: row; flex:1; min-height = 0px;`
        for (let j = 0; j < numberOfSquares; j++){
            const newSquare = document.createElement('div')
            newSquare.classList.add('gridSquare')
            newSquare.style.cssText = `width: ${350/numberOfSquares}px; border: 0.5px solid lightgray; flex: 1;`
            row.appendChild(newSquare)
        }
        gridContainer.appendChild(row)
    }
    hoverColor()
}

function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hoverColor() {
    let gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach(square => {
      square.addEventListener('mouseover', () => {
        let squareColour = square.style.backgroundColor = `${generateRandomColor()}`;
        square.style.borderColor = `${squareColour}`
      }, {once : true});
    });
  }

function resetGrid(){
    gridContainer.innerHTML = ""
    newGridBtn.disabled = false
    newGridBtn.style.backgroundColor = 'lightskyblue'
        newGridBtn.style.color = 'black'
}

function disableNewGridBTn(){
    if (squaresByUser > 0){
        newGridBtn.disabled = true
        newGridBtn.style.backgroundColor = 'lightgray'
        newGridBtn.style.color = 'darkgray'
    }
    else {
        newGridBtn.disabled = false
    }
}

newGridBtn.addEventListener('click', askUser)
newGridBtn.addEventListener('click', createGrid)
resetBtn.addEventListener('click', resetGrid)
newGridBtn.addEventListener('click', disableNewGridBTn)