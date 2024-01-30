class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = 70
        this.element = document.querySelector("#player");
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }

    move(direction) {

        switch (direction) {
            case "ArrowUp":
                this.y -= this.velocity;
                break;
            case "ArrowDown":
                this.y += this.velocity;
                break;
            case "ArrowLeft":
                this.x -= this.velocity;
                break;
            case "ArrowRight":
                this.x += this.velocity;
                break;
        }
        
        this.checkForBoundaries()

        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
    checkForBoundaries() {
        if (this.x <= 0) {
            this.x = 0;
        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.y >= boardHeight - this.height) {
            this.y = boardHeight - this.height;
        }
        if (this.x >= boardWidth - this.width) {
            this.x = boardWidth - this.width;
        }
    }
    crashTest() {
        game.enemies.forEach((enemy) => {
            // HUMAN READABLE 😅
            const enemyLeftEdge = enemy.x;
            const enemyRightEdge = enemy.x + enemy.width;
            const enemyTopEdge = enemy.y;
            const enemyBottomEdge = enemy.y + enemy.height;

            const playerLeftEdge = this.x;
            const playerRightEdge = this.x + this.width;
            const playerTopEdge = this.y;
            const playerBottomEdge = this.y + this.height;

            if (
                playerLeftEdge < enemyRightEdge &&
                playerRightEdge > enemyLeftEdge &&
                playerTopEdge < enemyBottomEdge &&
                playerBottomEdge > enemyTopEdge
            ) {
                game.lives -= 1;
                game.updateLives();
                enemy.deSpawn();
            }
        });
    }
}
