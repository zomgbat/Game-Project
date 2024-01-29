const player = document.getElementById("player");

// Initial player position
let playerX = 50;
let playerY = 50;

// Player speed
const playerSpeed = 5;

// Update player position
function updatePlayerPosition() {
    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;
}

// Handle keydown events
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            playerY -= playerSpeed;
            break;
        case "ArrowDown":
            playerY += playerSpeed;
            break;
        case "ArrowLeft":
            playerX -= playerSpeed;
            break;
        case "ArrowRight":
            playerX += playerSpeed;
            break;
    }

    // Update player position
    updatePlayerPosition();
});

// Initial update of player position
updatePlayerPosition();


