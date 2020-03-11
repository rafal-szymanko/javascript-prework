const game = {
	played: 0,
	won: 0,
	lost: 0,
	drew: 0,
};

const play = {
	rock: document.getElementById('play-rock'),
	paper: document.getElementById('play-paper'),
	scissors: document.getElementById('play-scissors'),
};

play.rock.addEventListener('click', function() {
	playGame(1);
});

play.paper.addEventListener('click', function() {
	playGame(2);
});
play.scissors.addEventListener('click', function() {
	playGame(3);
});

showResult();
