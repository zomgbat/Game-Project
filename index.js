console.log("index.js running");

let enemyCreationFrame = 100;
let enemy2CreationFrame = 100;
let frenemyCreationFrame = 100;
let scoreIncrementFrame = 10;
let enemyVelocity = 1;
let enemy2Velocity = 1;
let frenemyVelocity = 1;
let gameLives = 100;

const boardElement = document.querySelector("#game-board");
const boardWidth = boardElement.getBoundingClientRect().width;
const boardHeight = boardElement.getBoundingClientRect().height;

const game = new Game(gameLives);

function gameloop() {
    if (!game.gameOver) {
        game.frames++;
        game.player.crashTest();
        if (game.frames % enemyCreationFrame === 0) {
            game.enemies.push(new Enemy(enemyVelocity));
            // Create and push three enemies
            game.enemies2.push(new Enemy2(enemy2Velocity));
             game.frenemies.push(new frenemy(frenemyVelocity));
            
            
        }
        if (game.frames % scoreIncrementFrame === 0) {
            game.score++;
            game.updateScore();
        }
        game.enemies.forEach((enemy) => {
            enemy.move();
            enemy.checkForBoundaries();
        });
        game.enemies2.forEach((enemy2) => {
            enemy2.move();
            enemy2.checkForBoundaries();
        });
        game.frenemies.forEach((frenemy) => {
            frenemy.move();
            frenemy.checkForBoundaries();
        });
        requestAnimationFrame(gameloop);
    } else {
        game.player.element.remove();
        // displayCrashMessage()
    }
}

requestAnimationFrame(gameloop);


document.addEventListener("keydown", (event) => {
    if (!game.gameOver) {
        game.player.move(event.key);
    }
});
