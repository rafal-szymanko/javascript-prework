let computerMove = ``;
let playerMove = ``;
let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt(`Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce`);


if (randomNumber == 1) {
    computerMove = `kamień`;
} else if (randomNumber == 2) {
    computerMove = `papier`;
} else {
    computerMove = `nożyce`;
}

if (playerInput == 1) {
    playerMove = `kamień`;
} else if (playerInput == 2) {
    playerMove = `papier`;
} else {
    playerMove = `nożyce`;
}

msg = printMessage(`Zagrałem ${computerMove}! Jeśli Twój ruch to papier, to wygrywasz!`);
