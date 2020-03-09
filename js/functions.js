function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	if (msg == `Wygrałeś!!!`) {
		document.getElementById('messages').appendChild(div).style.color = 'green'; 
	} else if (msg == `Przegrałeś :((`)  {
		document.getElementById('messages').appendChild(div).style.color = 'red'; 
	} else if (msg == `Remis`) {
		document.getElementById('messages').appendChild(div).style.color = 'grey';
	} else {
		document.getElementById('messages').appendChild(div);
	}
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function showResult() {
	printMessage(`Rozegrane partie ${gamePlayed}`);
	printMessage(`Wygrane partie: ${gameWon}`);
	printMessage(`Przegrane partie: ${gameLost}`);
	printMessage(`Remis: ${gameDrew}`);
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	}
  }

function displayResult(argComputerMove, argPlayerMove){
	gamePlayed++;
	printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
  
	if (argPlayerMove == `papier` && argComputerMove == `kamień`) {
		printMessage(`Wygrałeś!!!`);
		gameWon++;
	} else if (argPlayerMove == `papier` && argComputerMove == `nożyce`) {
		printMessage(`Przegrałeś :((`);
		gameLost++;
	} else if (argPlayerMove == `kamień` && argComputerMove == `papier`) {
		printMessage(`Przegrałeś :((`);
		gameLost++;
	} else if (argPlayerMove == `kamień` && argComputerMove == `nożyce`) {
		printMessage(`Wygrałeś!!!`);
		gameWon++;
	} else if (argPlayerMove == `nożyce` && argComputerMove == `kamień`) {
		printMessage(`Przegrałeś :((`);
		gameLost++;
	} else if (argPlayerMove == `nożyce` && argComputerMove == `papier`) {
		printMessage(`Wygrałeś!!!`);
		gameWon++;
	} 
	else  {
		printMessage(`Remis`);
		gameDrew++;
	}
}

function playGame(playerInput) {
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);
	clearMessages();
	getMoveName();
	displayResult(computerMove, playerMove);
	showResult()
}
