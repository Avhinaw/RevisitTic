"use strict";
const board = document.getElementById("board");
const cells = document.querySelectorAll(".cells");
const reset = document.getElementById("reset");
const winMsg = document.getElementById("win-msg");
const playerX = document.getElementById("player-x");
const playerO = document.getElementById("player-o");
let player = 1;
playerX === null || playerX === void 0 ? void 0 : playerX.classList.add('scale-125');
let totalTurn = 1;
let boardArr = Array(9).fill("E");
const winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];
const checkWinner = () => {
    for (let [idx0, idx1, idx2] of winner) {
        const a = boardArr[idx0 - 1];
        const b = boardArr[idx1 - 1];
        const c = boardArr[idx2 - 1];
        if (a !== "E" && a === b && b === c) {
            return true;
        }
    }
    return false;
};
const game = (e) => {
    const el = e.target;
    const cellId = parseInt(el.id);
    // Prevent playing on already filled cell
    if (boardArr[cellId - 1] !== "E")
        return;
    totalTurn++;
    if (player === 1) {
        el.innerText = "x";
        boardArr[cellId - 1] = "x";
        if (checkWinner()) {
            winMsg.innerText = "Player 1 Wins";
            board.removeEventListener("click", game);
            return;
        }
        playerX.classList.remove('scale-125');
        playerO.classList.add('scale-125');
        player = 2;
    }
    else {
        el.innerText = "o";
        boardArr[cellId - 1] = "o";
        if (checkWinner()) {
            winMsg.innerText = "Player 2 Wins";
            board.removeEventListener("click", game);
            return;
        }
        playerO.classList.remove('scale-125');
        playerX.classList.add('scale-125');
        player = 1;
    }
    if (totalTurn === 10) {
        winMsg.innerText = "Game Draw";
        return;
    }
};
board.addEventListener("click", game);
const clearCells = () => {
    cells.forEach((cell) => {
        cell.innerHTML = "";
    });
    boardArr = Array(9).fill("E");
    winMsg.innerText = "";
    player = 1;
    totalTurn = 1;
    board.addEventListener("click", game);
    playerO.classList.remove('scale-125');
    playerX.classList.add('scale-125');
};
reset.addEventListener("click", clearCells);
