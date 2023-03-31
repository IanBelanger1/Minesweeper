const gameBoard = document.querySelector('.gameBoard');

for (var i = 1; i < 81; i++) {
    const tile = document.createElement("div");
    const element = document.querySelector(".gameBoard");
    if (i <= 10) {
        tile.id = i + "a";
    } else if (i <= 20) {
        tile.id = i + "b";
    } else if (i <= 30) {
        tile.id = i + "c";
    } else if (i <= 40) {
        tile.id = i + "d";
    } else if (i <= 50) {
        tile.id = i + "e";
    } else if (i <= 60) {
        tile.id = i + "f";
    } else if (i <= 70) {
        tile.id = i + "g";
    } else if (i <= 80) {
        tile.id = i + "h";
    }
    tile.className = "tile";
    element.appendChild(tile);
    const tiles = document.querySelectorAll('.tile');
    Array.from(tiles).forEach(div => {
        div.addEventListener('click', tileClicked);
    });
}

function tileClicked(click) {
        this.style.backgroundColor = "transparent";
}