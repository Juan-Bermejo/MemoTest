function generateCardGroup(list){
    var x;

    for(x = levels[actualLevel].initNumber; x < levels[actualLevel].cardsNumber; x++){
        list[x] =  themes[themeNum].image + '(' + (x+1) + ').png';
    }
    
    list = list.concat(list);

    return list
}

function cardMixer(){
    var result;

    result = cardGroup.sort(
        function(){
            return 0.5 - Math.random();
        });

    return result;
}