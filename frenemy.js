class Enemy2 {
    constructor(velocity) {

        this.velocity = velocity;
        this.element = document.createElement("div");
        this.element.classList.add("frenemy");
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
        this.deSpawn()
    }
}

  /*  this.x = boardWidth;
    this.y = Math.floor(Math.random() * (boardHeight - this.height))
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
}
move() {
    this.x -= this.velocity;
    this.element.style.left = `${this.x}px`
}
checkForBoundaries() {
    if (this.x <= 0 - this.width) {
        this.deSpawn()
    }
}



*/



    deSpawn3() {
        this.element.remove()
        const enemyIndex = game.frenemies.indexOf(this) // Where am I?
        game.frenemies.splice(frenemyIndex, 1);
    }
}