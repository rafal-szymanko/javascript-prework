function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);	
	}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function playGame(playerInput) {
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);

	clearMessages()
	
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
		printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
	  
		if (playerMove == `papier` && argComputerMove == `kamień`) {
			printMessage(`Wygrałeś!!!`);
		} else if (argPlayerMove == `papier` && argComputerMove == `nożyce`) {
			printMessage(`Przegrałeś :((`);
		} else if (argPlayerMove == `kamień` && argComputerMove == `papier`) {
			printMessage(`Przegrałeś :((`);
		} else if (argPlayerMove == `kamień` && argComputerMove == `nożyce`) {
			printMessage(`Wygrałeś!!!`);
		} else if (argPlayerMove == `nożyce` && argComputerMove == `kamień`) {
			printMessage(`Przegrałeś :((`);
		} else if (argPlayerMove == `nożyce` && argComputerMove == `papier`) {
			printMessage(`Wygrałeś!!!`);
		} 
		else  {
			printMessage(`Remis`);
		}
	}

	displayResult(computerMove, playerMove);
}


document.getElementById('play-rock').addEventListener('click', function() {
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
	playGame(3);
});