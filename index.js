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
            console.log(game.enemies);
        }
        if (game.frames % scoreIncrementFrame === 0) {
            game.score++;
            game.updateScore();
        }
        game.enemies.forEach((enemy) => {
            enemy.move();
            enemy.checkForBoundaries();
        });
        requestAnimationFrame(gameloop);
    } else {
        game.player.element.remove();
        // displayCrashMessage()
    }
}

function gameloop2() {
    if (!game.gameOver) {
        game.frames++;
        game.player.crashTest();
        if (game.frames % enemy2CreationFrame === 0) {
            game.enemies2.push(new Enemy2(enemy2Velocity));
            console.log(game.enemies2);
        }
        if (game.frames % scoreIncrementFrame === 0) {
            game.score++;
            game.updateScore();
        }
        game.enemies2.forEach((enemy2) => {
            enemy2.move();
            enemy2.checkForBoundaries();
        });
        requestAnimationFrame(gameloop2);
    } else {
        game.player.element.remove();
        // displayCrashMessage()
    }
}

function gameloop3() {
    if (!game.gameOver) {
        game.frames++;
        game.player.crashTest();
        if (game.frames % frenemyCreationFrame === 0) {
            game.frenemies.push(new Frenemy(frenemyVelocity));
            console.log(game.frenemies);
        }
        if (game.frames % scoreIncrementFrame === 0) {
            game.score++;
            game.updateScore();
        }
        game.frenemies.forEach((frenemy) => {
            frenemy.move();
            frenemy.checkForBoundaries();
        });
        requestAnimationFrame(gameloop3);
    } else {
        game.player.element.remove();
        // displayCrashMessage()
    }
}

requestAnimationFrame(gameloop);
requestAnimationFrame(gameloop2);
requestAnimationFrame(gameloop3);

document.addEventListener("keydown", (event) => {
    if (!game.gameOver) {
        game.player.move(event.key);
    }
});
