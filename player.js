class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = 10
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
        
}
}