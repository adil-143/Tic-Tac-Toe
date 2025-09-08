let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelectorAll('#reset');
let newGameButton = document.querySelectorAll('#newGame');
let messageDiv = document.querySelector('.msg');
let messageText = document.querySelector('#message');

let currentPlayer = true; // true for O, false for X

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    currentPlayer = true;
    enableAllBoxes();
    messageDiv.classList.add('hide');
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("Box clicked");
        if(currentPlayer){
            box.textContent = 'O';
            currentPlayer = false;
        }
        else{
            box.textContent = 'X';
            currentPlayer = true;
        }
        box.disabled = true;
        checkWin();
    });
});

const showWinner = (Winner) => {
    messageText.innerText = `Congratulations, Winner is ${Winner}!`;
    messageDiv.classList.remove('hide');
}

const checkWin = () => {
    for(let combination of winningCombinations){
        let pos1val = boxes[combination[0]].innerText;
        let pos2val = boxes[combination[1]].innerText; 
        let pos3val = boxes[combination[2]].innerText;

        if(pos1val !== "" && pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            boxes.forEach(box => box.disabled = true);
            return;
        }
}}

const enableAllBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.textContent = "";
    }
}

newGame.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);
