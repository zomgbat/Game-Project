class Player {
    constructor(x, y) {
        this.x = x;
        this.y = boardHeight - 150;
        this.velocity = 70;
        this.element = document.querySelector("#player");
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    move(direction) {
        switch (direction) {
            case "ArrowUp":
                this.y -= this.velocity;

                // Ensure the player does not move above line 150
                if (this.y < 400) {
                    this.y = 400;
                }

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


        this.checkForBoundaries();

      

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
        if (this.y >= boardHeight - this.height ) {
            this.y = boardHeight  - this.height ;
        }
        if (this.x >= boardWidth - this.width) {
            this.x = boardWidth - this.width;
        }
    }

    crashTest() {
        game.enemies.forEach((enemy) => {
            
            
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
                playCollisionSound3() 
            }
        });
    }

    crashTest2() {
        game.enemies2.forEach((enemy2) => {
            const enemy2LeftEdge = enemy2.x;
            const enemy2RightEdge = enemy2.x + enemy2.width;
            const enemy2TopEdge = enemy2.y;
            const enemy2BottomEdge = enemy2.y + enemy2.height;

            const playerLeftEdge = this.x;
            const playerRightEdge = this.x + this.width;
            const playerTopEdge = this.y;
            const playerBottomEdge = this.y + this.height;

            if (
                playerLeftEdge < enemy2RightEdge &&
                playerRightEdge > enemy2LeftEdge &&
                playerTopEdge < enemy2BottomEdge &&
                playerBottomEdge > enemy2TopEdge
            ) {
                game.lives -= 1;
                game.updateLives();
                enemy2.deSpawn();
                playCollisionSound2() 
            }
        });
    }

    crashTest3() {
        game.frenemies.forEach((frenemy) => {
            const frenemyLeftEdge = frenemy.x;
            const frenemyRightEdge = frenemy.x + frenemy.width;
            const frenemyTopEdge = frenemy.y;
            const frenemyBottomEdge = frenemy.y + frenemy.height;

            const playerLeftEdge = this.x;
            const playerRightEdge = this.x + this.width;
            const playerTopEdge = this.y;
            const playerBottomEdge = this.y + this.height;

            if (
                playerLeftEdge < frenemyRightEdge &&
                playerRightEdge > frenemyLeftEdge &&
                playerTopEdge < frenemyBottomEdge &&
                playerBottomEdge > frenemyTopEdge
            ) {
                game.score += 100;
                game.updateScore();
                frenemy.deSpawn();
                playCollisionSound() 
            }
        });
    }
}

