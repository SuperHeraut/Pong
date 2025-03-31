boardX = 500;
boardY = 500;
ballSize = 10;
player1score = 0;
player2score = 0;

ball = {
	x : boardX / 2,
	y : boardY / 2,
	width : ballSize,
	height : ballSize,
	velocityX : 1,
	velocityY : 1.5
}

//players
playerSize = 50;
playerThickness = 10
playerSpeed = 0
player1 = {
	x : 10,
	y : boardY / 2,
	width : playerThickness,
	height : playerSize,
	velocityY : playerSpeed
}
player2 = {
	x : boardX - playerThickness - 10,
	y : boardY / 2,
	width : playerThickness,
	height : playerSize,
	velocityY : playerSpeed
}

window.onload = function(){
	board = document.getElementById("board");
	board.height = boardY;
	board.width = boardX;
	context = board.getContext("2d");
	context.fillStyle = "#0f0";
	context.fillRect(
		player1.x,
		player1.y,
		player1.width,
		player1.height
	);
	context.fillRect(
		player2.x,
		player2.y,
		player2.width,
		player2.height
	);
	requestAnimationFrame(update);
	document.addEventListener("keyup", movePlayer);
}