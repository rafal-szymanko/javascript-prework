function printMessage(msg){
	const div = document.createElement('div'),
		createMessages = document.getElementById('messages');
	div.innerHTML = msg;
	if (msg == `Wygrałeś!!!`) {
		createMessages.appendChild(div).style.color = 'green'; 
	} else if (msg == `Przegrałeś :((`)  {
		createMessages.appendChild(div).style.color = 'red'; 
	} else if (msg == `Remis`) {
		createMessages.appendChild(div).style.color = 'grey';
	} else {
		createMessages.appendChild(div);
	}
}

function clearMessages(){
	const createMessages = document.getElementById('messages');
	createMessages.innerHTML = '';
}

function showResult() {
	printMessage(`Rozegrane partie ${game.played}`);
	printMessage(`Wygrane partie: ${game.won}`);
	printMessage(`Przegrane partie: ${game.lost}`);
	printMessage(`Remis: ${game.drew}`);
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
	game.played++;
	printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
	
	if (argPlayerMove == `papier` && argComputerMove == `kamień`) {
		printMessage(`Wygrałeś!!!`);
		game.won++;
	} else if (argPlayerMove == `papier` && argComputerMove == `nożyce`) {
		printMessage(`Przegrałeś :((`);
		game.lost++;
	} else if (argPlayerMove == `kamień` && argComputerMove == `papier`) {
		printMessage(`Przegrałeś :((`);
		game.lost++;
	} else if (argPlayerMove == `kamień` && argComputerMove == `nożyce`) {
		printMessage(`Wygrałeś!!!`);
		game.won++;
	} else if (argPlayerMove == `nożyce` && argComputerMove == `kamień`) {
		printMessage(`Przegrałeś :((`);
		game.lost++;
	} else if (argPlayerMove == `nożyce` && argComputerMove == `papier`) {
		printMessage(`Wygrałeś!!!`);
		game.won++;
	} 
	else  {
		printMessage(`Remis`);
		game.drew++;
	}
}

function playGame(playerInput) {
	let randomNumber = Math.floor(Math.random() * 3 + 1),
		computerMove = getMoveName(randomNumber),
		playerMove = getMoveName(playerInput);
	clearMessages();
	getMoveName();
	displayResult(computerMove, playerMove);
	showResult();
}
