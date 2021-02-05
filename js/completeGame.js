var assert;

function completeLevel(){

    assert = setInterval(assertCards, 100);
}

function assertCards(){
    
    var x;

    var arrayCards = cardGroup.filter(function(element){
        return true;
    });

    arrayCards.forEach(function(element){
        
        var element_one = document.querySelector("[data-value='" + element + "']");
        var data_one = element_one.getAttribute("data-id");


        for(x=0; x<arrayCards.length; x++){

            var element_two = document.querySelector("[data-id='" + x + "']");
            var data_two = element_two.getAttribute("data-value");
            
            if(element_one.getAttribute("data-value") === data_two && data_one != element_two){
                
                simulateClick(element_one, 'click');
                simulateClick(element_two, 'click');

            }
        }
    });
}

function simulateClick(element, eventType){
    if(element.fireEvent){
        element.fireEvent('on' + eventType);
    } else {
        var eventObj = new Event('');
        eventObj.initEvent(eventType, true, false);
        element.dispatchEvent(eventObj);
    }
}


//document.querySelector(".complete").addEventListener("click", completeLevel);