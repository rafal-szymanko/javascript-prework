let computerMove = `kamień`;
let playerMove = `papier`

msg = printMessage(`Zagrałem ${computerMove}! Jeśli Twój ruch to papier, to wygrywasz!`);

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}