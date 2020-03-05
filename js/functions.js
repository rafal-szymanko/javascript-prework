function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);	
	}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	}
  
	printMessage(`Nie znam ruchu o id ${argMoveId}`);
	return 'nieznany ruch';
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
	else if (argPlayerMove == `nieznany ruch`) {
		return alert(`Wybierz wartość od 1 do 3!!!`)
	}
	else {
		printMessage(`Remis`);
	}
  }


