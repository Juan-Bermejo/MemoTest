
function distributeCards(){

    var table = document.querySelector("#tablero");
    var mixedCards = cardMixer();
    var count = 0;

    table.innerHTML = '';

    mixedCards.forEach(function(element){

        var card = document.createElement("div");

        var content = document.createElement("img");

        card.innerHTML = '<div class="tarjeta" data-id="' + count + '" data-value="' + element + '">' +
                            '<div class="contenido">' + '<img width="50" height="50" class="images" src="' + element +  '"></div>' + '</div>';
    
        table.appendChild(card);    

        count++;

    });
}

function show(){
    
    var showingCards;
    var pairCards = document.querySelectorAll(".descubierta:not(.acertada)");
    
    if(pairCards.length > 1){
        return;
    }

    this.classList.add("descubierta");

    if(!statusCheat){
        document.querySelector("#sonido-carta").cloneNode().play();
    } else {
        document.querySelector("#sonido-carta").play();

    }


    showingCards = document.querySelectorAll(".descubierta:not(.acertada)");

    if(showingCards < 2){
        return;
    }

    comparing(showingCards);

    if(showingCards.length == 2){

        updateMovements();
    }

}