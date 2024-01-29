console.log("index.js running");
let gameLives = 3;

const boardElement = document.querySelector("#game-board");
const boardWidth = boardElement.getBoundingClientRect().width;
const boardHeight = boardElement.getBoundingClientRect().height;


const game = new Game(gameLives);


requestAnimationFrame(gameLoop);


document.addEventListener("keydown", (event) => {
   
        game.player.move(event.key);
    })