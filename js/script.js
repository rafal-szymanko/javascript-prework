let gamePlayed = 0;
let gameWon = 0;
let gameLost = 0;
let gameDrew = 0;



document.getElementById('play-rock').addEventListener('click', function() {
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
	playGame(3);
});

showResult();
