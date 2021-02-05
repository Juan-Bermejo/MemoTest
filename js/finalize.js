function finishGame() {

    if(actualLevel < levels.length - 1){

        document.querySelector("#finishLevel").classList.add("visible");
        document.querySelector("#sonido-ganar").play();
        clearInterval(timer);

    } else {
 
        document.querySelector("#finishGame").classList.add("visible");
        document.querySelector("#sonido-ganar").play();
    }
    //Autocomplete Game interval
    statusCheat = false;
    clearInterval(assert);
    
}

function checkCards() {

    var pendingCards = document.querySelectorAll(".tarjeta:not(.acertada)");

    var winMenu = document.querySelector("#finishLevel")

    if(pendingCards.length === 0 && !winMenu.classList.contains("visible")){
        
        finishGame();
    }
}

function gameOver() {

    if(!relaxMode){ 

        if(movements > levels[actualLevel].maxMov){

            document.querySelector(".type-loss").innerText = "No errors left";

        } else {

            document.querySelector(".type-loss").innerText = "No time left";

        }
    
        document.querySelector("#gameOver").classList.add("visible");
        document.querySelector("#sonido-perder").play();

    }

    //Autocomplete Game interval
    clearInterval(assert);
}