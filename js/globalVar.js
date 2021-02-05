
var timer;
var checkWin;
var cheat = {};
var statusCheat = false;
var relaxMode = false;
var movements = 0;
var cardGroup = new Array();
var actualLevel = 0;
var themeNum = 0;
var themeColor = 0;
var colorStyle = 0;

var levels = [
    {
        initNumber: 0,
        cardsNumber: 2,
        maxMov: 1,
        maxTimeSec: 6,
        maxTimeMin: 0
    },
    {
        initNumber: 2,
        cardsNumber: 6,
        maxMov: 3,
        maxTimeSec: 16,
        maxTimeMin: 0
    },
    {
        initNumber: 6,
        cardsNumber: 12,
        maxMov: 5,
        maxTimeSec: 31,
        maxTimeMin: 0
    },
    {
        initNumber: 12,
        cardsNumber: 20,
        maxMov: 8,
        maxTimeSec: 41,
        maxTimeMin: 0
    },
    {
        initNumber: 20,
        cardsNumber: 30,
        maxMov: 8,
        maxTimeSec: 51,
        maxTimeMin: 0
    },
    {
        initNumber: 28,
        cardsNumber: 40,
        maxMov: 10,
        maxTimeSec: 0,
        maxTimeMin: 1
    },
    {
        initNumber: 36,
        cardsNumber: 50,
        maxMov: 12,
        maxTimeSec: 11,
        maxTimeMin: 1
    },
    {
        initNumber: 14,
        cardsNumber: 30,
        maxMov: 12,
        maxTimeSec: 21,
        maxTimeMin: 1
    }
    ,
    {
        initNumber: 22,
        cardsNumber: 40,
        maxMov: 14,
        maxTimeSec: 31,
        maxTimeMin: 1
    }
    ,
    {
        initNumber: 30,
        cardsNumber: 50,
        maxMov: 20,
        maxTimeSec: 0,
        maxTimeMin: 2
    }

];

var themes = [
    {
        image: '../static/img/animalCards/animal'
    },
    {
        image: '../static/img/spaceCards/space'
    },
    {
        image: '../static/img/medievalCards/medieval'
    }
]