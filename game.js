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


function playCollisionSound() {
    const collisionSound = document.getElementById('collisionSound');
    collisionSound.play();
    collisionSound.currentTime = 0; // Reset the audio to the beginning
    
}
// Example usage: call this function at a specific interval for more frequent play
//setInterval(playCollisionSound, 2000); // Play every 1000 milliseconds (1 second)
function playCollisionSound2() {
    const collisionSound2 = document.getElementById('collisionSound2');
    collisionSound2.play();
    collisionSound2.currentTime = 0; // Reset the audio to the beginning
    
}

function playCollisionSound3() {
    const collisionSound3 = document.getElementById('collisionSound3');
    collisionSound3.play();
    collisionSound3.currentTime = 0; // Reset the audio to the beginning
    
}
    
function bgmusic2() {
    const bgmusic2 = document.getElementById('bgmusic2');
    bgmusic2.play();
    
}

//MAKES GAME SLOW (Trying to make coin noise louder than music)

//function playBackgroundMusic() {
   // const backgroundMusic = document.getElementById('backgroundMusic');
    //backgroundMusic.volume = 0.7; // Adjust the volume (0.5 is 50% volume)
   // backgroundMusic.play();
//}


    
function displayCrashMessage() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%"; // Set left to 50%
    container.style.transform = "translate(-50%, -50%)";
    container.style.fontSize = "24px";
    container.style.color = "black";
    container.style.backgroundColor = "white";
   container.style.textAlign = "center";
    container.style.borderRadius = "10px";
    container.textContent = `Game Over! You Collected ${game.score} points worth of Fish! Refresh to Restart`; // Message text or any additional content can be added here
    container.appendChild(document.createElement("br"));
    container.appendChild(restartButton);

    document.body.appendChild(container);
}





