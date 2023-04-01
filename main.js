const gameBoard = document.querySelector('.gameBoard');
const col = new Array(89);
const bomb = new Array(89);

newBombs();
for (var i = 1; i < 89; i++) {
    const tile = document.createElement("div");
    const element = document.querySelector(".gameBoard");
    tile.id = i;
    if (i % 2 != 0) {
        tile.className = "light tile";
    } else {
        tile.className = "dark tile";
    }
    let j;
    if (i <= 11) {
        j = i;
        col[i] = j;
    } else if (i <= 22) {
        j = i-11;
        col[i] = j;
    } else if (i <= 33) {
        j = i-22;
        col[i] = j;
    } else if (i <= 44) {
        j = i-33;
        col[i] = j;
    } else if (i <= 55) {
        j = i-44;
        col[i] = j;
    } else if (i <= 66) {
        j = i-55;
        col[i] = j;
    } else if (i <= 77) {
        j = i-66;
        col[i] = j;
    } else if (i <= 88) {
        j = i-77; 
        col[i] = j;
    }
    
    element.appendChild(tile);
    const tiles = document.querySelectorAll('.tile');
    Array.from(tiles).forEach(div => {
        div.addEventListener('click', tileClicked);
    });
}

newGame();
function newGame() {
    const tiles = document.querySelectorAll('.tile');
    Array.from(tiles).forEach(div => {
        div.innerHTML = "";
        if (div.id % 2 != 0) {
            div.style.backgroundColor = "rgb(170,215,82)";
        } else {
            div.style.backgroundColor = "rgb(145, 187, 67)";
        }
        div.style.backgroundImage = "";
        div.style.border = "0.5px solid rgb(78, 107, 62)";
        div.style.height = "64px";
    });
    newBombs();
}

function tileClicked() {
    this.style.backgroundColor = "transparent";
    const id = this.id;
    let b = 0;
    if (bomb[id - 10] == 1) {
        b++;
    }
    if (bomb[id - 11] == 1) {
        b++;
    }
    if (col[id] != 1) {
        if (bomb[id - 1] == 1) {
            b++;
        }
        if (bomb[id - 12] == 1) {
            b++;
        }
    }
    var temp = parseFloat(id);
    if (col[id] != 11) {
        if (bomb[temp + 1] == 1) {
            b++;
        }
        if (bomb[temp + 10] == 1) {
            b++;
        }
    }
    if (bomb[temp + 12] == 1) {
        b++;
    }
    if (bomb[temp + 11] == 1) {
        b++;
    }
    if (b == 1) {
        this.style.color = "darkcyan";
    } else if (b == 2) {
        this.style.color = "goldenrod";
    } else if (b == 3 || b == 4) {
        this.style.color = "darkgoldenrod";
    } else if (b == 4 || b == 5) {
        this.style.color = "sandybrown";
    } else if (b == 6 || b == 7) {
        this.style.color = "orangered";
    } else if (b == 8) {
        this.style.color = "tomato";
    } else if (b == 0) {
        this.style.color = "Green";
    } 
    this.innerHTML = b;
    if (bomb[id] == 1) {
        console.log("bomb");
        this.innerHTML = "";
        this.style.backgroundImage = "url('assets/bomb.png')";
        setTimeout(gameOver, 1500);
    } 
}

function newBombs() {
    for (var i = 1; i < 89; i++) {
        const rand = Math.floor(Math.random()*4);
        if (rand <= 2) {
            bomb[i] = 0;
        } else {
            bomb[i] = 1;
        }
    }
    bomb[1] = 0;
    bomb[12] = 0;
    bomb[23] = 0;
    bomb[34] = 0;
    bomb[45] = 0;
    bomb[56] = 0;
    bomb[67] = 0;
    bomb[78] = 0;
    bomb[11] = 0;
    bomb[22] = 0;
    bomb[33] = 0;
    bomb[44] = 0;
    bomb[55] = 0;
    bomb[66] = 0;
    bomb[77] = 0;
    bomb[88] = 0;
}

function gameOver() {
    const tiles = document.querySelectorAll('.tile');
    Array.from(tiles).forEach(div => {
        div.style.height = "0px";
        div.border = "0px";
    });
    setTimeout(newGame, 1500)
}
