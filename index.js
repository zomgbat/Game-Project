console.log("index.js running");
let enemyCreationFrame = 100;
let scoreIncrementFrame = 10;
let enemyVelocity = 20;
let gameLives = 1;

const boardElement = document.querySelector("#game-board");
const boardWidth = boardElement.getBoundingClientRect().width;
const boardHeight = boardElement.getBoundingClientRect().height;

const game = new Game(gameLives);



function gameloop() {
    if (!game.gameOver) {
        
        game.frames++;
        game.player.crashTest()
        if (game.frames % enemyCreationFrame === 0) {
            game.enemies.push(new Enemy(enemyVelocity));
            console.log(game.enemies);
        }
        if (game.frames % scoreIncrementFrame === 0) {
            game.score++;
            game.updateScore();
        }
        game.enemies.forEach((enemy) => {
            enemy.move()
            enemy.checkForBoundaries()
        })
        requestAnimationFrame(gameloop); // we can create an infinite loop without braking it;
    } else {
        game.player.element.remove();
        displayCrashMessage()
    }
}



requestAnimationFrame(gameloop);


document.addEventListener("keydown", (event) => {
    if (!game.gameOver) {
        game.player.move(event.key);
    }
})