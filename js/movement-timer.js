function updateMovements() {
    
    var movementsText;

    //movements++;

    movementsText = movements;

    if(movements < 10){
        movementsText = '0' + movements;
    }

    if(movements > levels[actualLevel].maxMov && !relaxMode){
        setTimeout(gameOver, 1000);
        return;
    }

    document.querySelector("#mov").innerText = movementsText;
}

function gameMovements() {
    
    if(levels[actualLevel].maxMov < 10){

        document.querySelector("#mov-total").innerText = "0" + levels[actualLevel].maxMov;
    } else {
        document.querySelector("#mov-total").innerText = levels[actualLevel].maxMov;
    }

}

function initCounter() {

    var seconds = levels[actualLevel].maxTimeSec;
    var minutes = levels[actualLevel].maxTimeMin;
    var secondsText;
    var minutesText;

    function updateCounter() {
        seconds--;
        
        if(seconds < 0){
            seconds = 59;
            minutes--;
        }

        if(minutes < 0){
            seconds = 0;
            minutes = 0;
            clearInterval(timer);
            setTimeout(gameOver, 100);
        
        }

        secondsText = seconds;
        minutesText = minutes;

        if(secondsText < 10){
            secondsText = '0' + seconds;
        }

        if(minutes < 10){
            minutesText = '0' + minutes
        }

        document.querySelector("#segundos").innerText = secondsText;
        document.querySelector("#minutos").innerText = minutesText;
        
    }

    timer = setInterval(updateCounter, 1000);

}
