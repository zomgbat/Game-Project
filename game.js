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

/*

If I want to add a RADIO BUTTON with 4 options


function displayCrashMessage() {
    const options = [
        { id: "crashRadio1", value: "1", label: "OPTION 1" },
        { id: "crashRadio2", value: "2", label: "OPTION 2" },
        { id: "crashRadio3", value: "3", label: "OPTION 3" },
        { id: "crashRadio4", value: "4", label: "OPTION 4"
    
    }
    ];

    
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.fontSize = "24px";
    container.style.color = "red";
    container.style.backgroundColor = "white" ;

    

    options.forEach((option) => {
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = "crashOption";
        radioButton.id = option.id;
        radioButton.value = option.value;
        radioButton.style.marginRight = "10px";

        const label = document.createElement("label");
        label.textContent = option.label;
        label.setAttribute("for", option.id);

        container.appendChild(radioButton);
        container.appendChild(label);
    });

    

    document.body.appendChild(container);
}


*/