function nextLevel() {
    actualLevel++;
}

function updateLevel() {

    var textLevel = actualLevel + 1;

    if(textLevel < 10){
        textLevel = "0" + textLevel;
    }

    document.querySelector("#nivel").innerText = textLevel;
}

function loadNewLevel() {
    nextLevel();
    updateLevel();
    startGame();
}