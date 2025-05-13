"use strict";
const board = document.getElementById("board");
let player = 1;
let winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
const boardArr = Array(9).fill('E');
const checkWinner = () => {
};
board.addEventListener("click", (e) => {
    let el = e.target;
    if (player == 1) {
        el.innerText = 'x';
        boardArr[parseInt(el.id) - 1] = 'x';
        player = 2;
    }
    else {
        el.innerText = 'o';
        player = 1;
    }
});
const reset = document.getElementById("reset");
const cells = document.querySelectorAll(".cells");
reset.addEventListener('click', (e) => {
    cells.forEach((cell) => {
        cell.innerHTML = '';
    });
    player = 1;
});
