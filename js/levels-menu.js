function showLevels() {
    var levelsMenu = document.querySelector(".selecciona-nivel ul");

    levels.forEach(function(element, index){
        var levelControl = document.createElement("li");

        levelControl.innerHTML = '<button class="nivel" data-nivel="' + index + '">Nivel ' + (index + 1) + '</button>';

        levelsMenu.appendChild(levelControl);
    });
}

function changeLevel() {
    var level = parseInt(this.dataset.nivel);
    actualLevel = level;
    updateLevel();
    startGame();
}

function showMenuLevels(event) {
    event.stopPropagation();
    document.querySelector(".selecciona-nivel").classList.add("visible");
    console.log("is calling");
}

function hideMenuLevels() {
    document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickOutsideMenu(event){
    if(event.target.closest(".selecciona-nivel")){
        return;
    }
    document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function escCloseMenu(event){
    if(event.key === "Escape"){
        hideMenuLevels();
    }
}

function cheatCode(event){
    
    cheat[event.key] = true;
    var main = document.querySelector(".main-menu")

    if(cheat["Control"] && cheat["c"] && event.key === "a" && !main.classList.contains("visible")){
        console.log("cheat activated");
        statusCheat = true;
        completeLevel();
    }
}

