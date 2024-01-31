console.log("index.js running");

let enemyCreationFrame = 100;
let enemy2CreationFrame = 100;
let frenemyCreationFrame = 70;
let scoreIncrementFrame = 10;
let enemyVelocity = 15;
let enemy2Velocity = 10;
let frenemyVelocity = 5;
let gameLives = 3;

const boardElement = document.querySelector("#game-board");
const boardWidth = boardElement.getBoundingClientRect().width;
const boardHeight = boardElement.getBoundingClientRect().height;
const bgmusic = document.querySelector("#bgmusic");
bgmusic2.volume = 0.2;


const startButton = document.querySelector("#startButton");
startButton.onclick = () => {

    boardElement.style.visibility = "visible";


    const deletePage = document.querySelector("#start-screen");
    deletePage.remove();

    fullGame();
    bgmusic2() 
};



let game
// Call the fullGame function to start the game
function fullGame() {
   
    
     game = new Game(gameLives);
    const gameBoard = document.getElementById("game-board");
    gameBoard.style.visibility = "visible";


    function gameloop() {

        if (!game.gameOver) {
            game.frames++;
            game.player.crashTest();
            game.player.crashTest2();
            game.player.crashTest3();
            if (game.frames % enemyCreationFrame === 0) {
                game.enemies.push(new Enemy(enemyVelocity));
                // Create and push three enemies
                game.enemies2.push(new Enemy2(enemy2Velocity));
                game.frenemies.push(new frenemy(frenemyVelocity));

            }
            if (game.frames % scoreIncrementFrame === 0) {
                for (let i = 0; i < 3; i++) {
                    game.frenemies.push(new frenemy(frenemyVelocity));
                }
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
            displayCrashMessage()



        }
    }
    requestAnimationFrame(gameloop);
    document.addEventListener("keydown", (event) => {
        if (!game.gameOver) {
            game.player.move(event.key);
        }
    
    });
}





const restartButton = document.querySelector("#restartButton");
restartButton.style.display = "visible";

// Add this condition to show the button when lives end
if (game.lives <= 0) {
    restartButton.style.display = "block";
}

restartButton.onclick = () => {
    location.reload();
}






