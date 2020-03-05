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
} else if (playerInput == 3) {
    playerMove = `nożyce`;
} else {
    playerMove = `nieznany ruch`;
}

printMessage(`Twój ruch: ${playerMove}`);
printMessage(`Ruch komputera: ${computerMove}`);


if (playerMove == `papier` && computerMove == `kamień`) {
    printMessage(`Wygrałeś!!!`);
} else if (playerMove == `papier` && computerMove == `nożyce`) {
    printMessage(`Przegrałeś :((`);
} else if (playerMove == `kamień` && computerMove == `papier`) {
    printMessage(`Przegrałeś :((`);
} else if (playerMove == `kamień` && computerMove == `nożyce`) {
    printMessage(`Wygrałeś!!!`);
} else if (playerMove == `nożyce` && computerMove == `kamień`) {
    printMessage(`Przegrałeś :((`);
} else if (playerMove == `nożyce` && computerMove == `papier`) {
    printMessage(`Wygrałeś!!!`);
} else if (playerMove == `nieznany ruch`) {
    alert(`Wybierz wartość od 1 do 3!!!`)
}
else {
    printMessage(`Remis`);
}


