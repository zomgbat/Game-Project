class Enemy2 {
    constructor(velocity) {
        this.velocity = velocity;
        this.element = document.createElement("div");
        this.element.classList.add("enemy2");
        boardElement.appendChild(this.element);
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        this.y = 0;
        this.x = Math.floor(Math.random() * (boardWidth - this.width))
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }

    move() {
        this.y += this.velocity;
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
    }

    checkForBoundaries() {
        if (this.y >= boardHeight) {
            this.deSpawn();
        }
    }

    deSpawn() {
        this.element.remove();
        const enemy2Index2 = game.enemies2.indexOf(this);
        game.enemies2.splice(enemyIndex2, 1);
    }
}




