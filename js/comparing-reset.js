//Comparing the pair of cards showed
function comparing(cardsToCompare){

    if(typeof(cardsToCompare[1]) != 'undefined'){
        
        if(cardsToCompare[0].dataset.value === cardsToCompare[1].dataset.value){
            
            asserted(cardsToCompare);
        
        } else {
            
            notAsserted(cardsToCompare);
        }   
    }
}

//if the pair is even
function asserted(cards){

    cards.forEach(function(element){
        element.classList.add("acierto");
    });

    setTimeout(
        function(){
            cards.forEach(function(element){
                element.classList.add("acertada");
            });

            document.querySelector("#sonido-acierto").play();

    }, 500);
}

//if the pair is not even
function notAsserted(cards){

    movements++;

    setTimeout(
        function(){
            cards.forEach(function(element){
                element.classList.add("error");
            });

            document.querySelector("#sonido-error").play();

    },450);

    setTimeout(
        function (){
            cards.forEach(function(element){
                element.classList.remove("descubierta");
                element.classList.remove("error");
                element.classList.add("cubrir");
            });
        }, 800);

    setTimeout(
        function (){
            cards.forEach(function(element){
                element.classList.remove("cubrir");
            });
        }, 1300);

}

