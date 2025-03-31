// constantes
const HTML = document.querySelector("html");
const HEAD = document.querySelector("head");

const CHARSET = document.createElement("meta");
const VIEWPORT = document.createElement("meta");
const RESET = document.createElement("link");
const STYLE = document.createElement("link");
const TABTITLE = document.createElement("title");
const FAVICON = document.createElement("link");

const PAGEURL = location.pathname.split("/");
const PAGENAME = "Pong"

const HEADER = document.querySelector("header");
const NAVBAR = document.createElement("nav");
const MENULIST = document.createElement("ul");

//variables (simple déclaration, l'assignation se fait en temps voulu)
let ball;
let ballSize;
let board;
let boardX;
let boardY;
let context;
let i;
let lang;
let nextPlayer1Y;
let nextPlayer2Y;
let playerSize;
let playerSpeed;
let playerThickness;
let player1;
let player2;
let player1score;
let player2score;

//fonctions

const update = () => {
	requestAnimationFrame(update);
	context.clearRect(
		0,
		0,
		boardX,
		boardY
	)
	context.fillStyle = "#0f0";

//player 1
	// player1.y += player1.velocityY;
	nextPlayer1Y = player1.y + player1.velocityY;
	if(!stopRightThere1(nextPlayer1Y)){
		player1.y = nextPlayer1Y;
	}
	context.fillRect(
		player1.x,
		player1.y,
		player1.width,
		player1.height
	);

//player 2
	// player2.y += player2.velocityY;
	nextPlayer2Y = player2.y + player2.velocityY;
	if(!stopRightThere2(nextPlayer2Y)){
		player2.y = nextPlayer2Y;
	}
	context.fillRect(
		player2.x,
		player2.y,
		player2.width,
		player2.height
	);

//ball
	ball.x += ball.velocityX;
	ball.y += ball.velocityY;
	context.fillRect(
		ball.x,
		ball.y,
		ball.width,
		ball.height
	);
	if (ball.y <= 0 || (ball.y + ball.height) > boardY) {
		ball.velocityY *= -1;
	}
	if (pong(ball, player1)) {
		if (ball.x + ball.width <= player2.x){
			ball.velocityX *= -1;
		}
	} else if (pong(ball, player2)) {
		if (ball.x >= player1.x + player1.width){
			ball.velocityX *= -1;
		}
	}

	if (ball.x < 0) {
		player2score ++;
		resetGame(1);
		// difficulty();
	} else if (ball.x + ball.width > boardX) {
		player1score ++;
		resetGame(-1)
		// difficulty();
	}

	context.font = "45px sans-serif";
	context.fillText(player1score, boardX / 5, 45)
	context.fillText(player2score, boardX * 4 / 5 -45, 45);

	for (i = 10; i < board.height; i += 25) {
		context.fillRect(board.width / 2 - 10, i, 5, 5);
	}
}

// const difficulty = () => {
// 	if (player1score > player2score) {
// 		if(player1.height == ball.height && player1.height <= (50 - (5*(player1score - player2score)))) {
// 			player1.height = 10;
// 		}
// 		else{
// 			player1.height = 50 - (5*(player1score - player2score));
// 		}
// 			player2.height = 50;
// 	} else if (player2score > player1score) {
// 		if ( player2.height == ball.height && player1.height <= (50 - (5*(player2score - player1score)))) {
// 			player2.height = 10;
// 		} else {
// 			player2.height = 50 - (5*(player2score - player1score))
// 		}
// 			player1.height = 50;
// 	}
// }

const movePlayer = (e) => {
//Player 1
	if (e.code == "KeyW") {
		player1.velocityY = -2;
	} else if (e.code == "KeyS") {
		player1.velocityY = 2;
	}
//Player 2
	if (e.code == "ArrowUp") {
		player2.velocityY = -2;
	} else if (e.code == "ArrowDown") {
		player2.velocityY = 2;
	}
}

const stopRightThere1 = (yPosition) => {
	return (yPosition < 0 || yPosition + player1.height > boardY);
}
const stopRightThere2 = (yPosition) => {
	return (yPosition < 0 || yPosition + player2.height > boardY);
}

const pong = (a, b) => {
	return a.x < b.x + b.width &&
		a.x + a.width > b.x &&
		a.y < b.y + b.height &&
		a.y + a.height > b.y; //shut up, it's magic
}

const resetGame = (direction) => {
	ball = {
	x : boardX / 2,
	y : boardY / 2,
	width : ballSize,
	height : ballSize,
	velocityX : direction,
	velocityY : 1.5
	}
}