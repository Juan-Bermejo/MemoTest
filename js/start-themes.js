
function startGame(){

    movements = 0;
    cardGroup = new Array();

    document.querySelector("#mov").innerText = "00";

    gameMovements();

    document.querySelector("#finishLevel").classList.remove("visible");
    document.querySelector("#finishGame").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");

    cardGroup = generateCardGroup(cardGroup);

    distributeCards();

    document.querySelectorAll(".tarjeta").forEach( function(element) {
        element.addEventListener("click", show);
    });

    if(!relaxMode){
        initCounter();
    } else {
        document.querySelector(".contador-tiempo").classList.add("oculto");
    }
}

function reset(){

    if(actualLevel < levels.length - 1){
        clearInterval(timer);
        startGame();
    
    } else {
        actualLevel = 0;
        clearInterval(timer);
        updateLevel();
        startGame();
    }
}

function startChallengeMode() {
    console.log(relaxMode);
    relaxMode = false;
    document.querySelector("#main-menu").classList.remove("visible");
    document.querySelector("#control-nivel").classList.add("oculto");
    document.querySelector(".contador-tiempo").classList.remove("oculto");
    document.querySelector("#mistakes").innerText = "Mistakes";
    startGame();
    checkWin = setInterval(checkCards, 1000);
}

function startRelaxMode() {
    relaxMode = true;
    document.querySelector("#main-menu").classList.remove("visible");
    document.querySelector("#control-nivel").classList.remove("oculto");
    document.querySelector("#mistakes").innerText = "Ideal Mistakes";
    startGame();
    checkWin = setInterval(checkCards, 1000);  
}

function returnMenu(){
    
    actualLevel = 0;
    relaxMode = false;
    movements = 0;
    cardGroup = new Array();
    
    clearInterval(timer);
    clearInterval(assert);
    clearInterval(checkWin);
    
    document.querySelector("#control-nivel").classList.add("oculto");
    document.querySelector("#main-menu").classList.add("visible");
    document.querySelector("#gameOver").classList.remove("visible");
    document.querySelector("#finishLevel").classList.remove("visible");
    document.querySelector("#finishGame").classList.remove("visible");
    
    updateLevel();
}

function pickCardStyle(){
    var cardStyle = this.getAttribute("data-style");

    if(cardStyle === "animals"){
        themeNum = 0;
        document.querySelector("#style-1").classList.add("selected");
        document.querySelector("#style-0").classList.remove("selected");
        document.querySelector("#style-2").classList.remove("selected");
    } 
    else if(cardStyle === "space"){    
        themeNum = 1;
        document.querySelector("#style-0").classList.add("selected");
        document.querySelector("#style-1").classList.remove("selected");
        document.querySelector("#style-2").classList.remove("selected");
    } else {
        themeNum = 2;
        document.querySelector("#style-2").classList.add("selected");
        document.querySelector("#style-0").classList.remove("selected");
        document.querySelector("#style-1").classList.remove("selected");
    
    }
}

function pickColorStyle(){
    colorStyle = this.getAttribute("data-style");

    if(colorStyle === "0"){
        document.querySelector(".blue-orange").classList.add("selected");
        document.querySelector(".violet-pink").classList.remove("selected");
        document.querySelector(".green-blue").classList.remove("selected");

        document.documentElement.style.setProperty('--primary', ' #ED3D11');
        document.documentElement.style.setProperty('--secondary', '#FFA200');
        document.documentElement.style.setProperty('--tertiary', '#5D737E');
        document.documentElement.style.setProperty('--dark', '#121228');
    }
    else if(colorStyle === "1"){
        document.querySelector(".violet-pink").classList.add("selected");
        document.querySelector(".blue-orange").classList.remove("selected");
        document.querySelector(".green-blue").classList.remove("selected");

        document.documentElement.style.setProperty('--primary', '#5139D7');
        document.documentElement.style.setProperty('--secondary', '#EC0D78');
        document.documentElement.style.setProperty('--tertiary', '#90B800');
        document.documentElement.style.setProperty('--dark', '#2a2b2a');
        
    } else {
        document.querySelector(".green-blue").classList.add("selected");
        document.querySelector(".blue-orange").classList.remove("selected");
        document.querySelector(".violet-pink").classList.remove("selected");

        document.documentElement.style.setProperty('--primary', '#06D6A0');
        document.documentElement.style.setProperty('--secondary', '#118AB2');
        document.documentElement.style.setProperty('--tertiary', '#ef476f');
        document.documentElement.style.setProperty('--dark', '#172121');
    }
}
