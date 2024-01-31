class Game {
    constructor(lives) {
        this.enemies = [];
        this.enemies2 = [];
        this.frenemies = [];
        this.player = new Player(100, 100);
        this.score = 0;
        this.frames = 0;
        this.gameOver = false;
        this.lives = lives;
        this.updateLives();
    }
    updateLives() {
        document.querySelector("#lives").innerText = this.lives;
        if (this.lives <= 0) {
            this.gameOver = true;
        }
    }
    updateScore() {
        document.querySelector("#score").innerText = this.score;
    }    
}





    
function displayCrashMessage() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.fontSize = "24px";
    container.style.color = "black";
    container.style.backgroundColor = "white";
    container.style.padding = "20px";
    container.style.textAlign = "center";
    container.style.borderRadius = "10px";
    container.textContent = `Game Over! You Collected ${game.score} points worth of Fish! Refresh to Restart` // Message text or any additional content can be added here
    container.appendChild(document.createElement("br"));
    container.appendChild(restartButton);

    document.body.appendChild(container);
}




