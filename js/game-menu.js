
showLevels();

document.querySelectorAll(".reiniciar").forEach(function(element) {
    element.addEventListener("click", reset);
});

document.querySelectorAll(".regresar").forEach(function(element) {
    element.addEventListener("click", returnMenu);
});


document.querySelector("#challenge-mode").addEventListener("click", startChallengeMode);

document.querySelector("#relax-mode").addEventListener("click", startRelaxMode);

document.querySelector("#style-0").addEventListener("click", pickCardStyle);
document.querySelector("#style-1").addEventListener("click", pickCardStyle);
document.querySelector("#style-2").addEventListener("click", pickCardStyle);

document.querySelector(".blue-orange").addEventListener("click", pickColorStyle);
document.querySelector(".violet-pink").addEventListener("click", pickColorStyle);
document.querySelector(".green-blue").addEventListener("click", pickColorStyle);

//return button in game
document.querySelector("#return").addEventListener("click", returnMenu);

//manu levels in relax mode
document.querySelector("#control-nivel").addEventListener("click", showMenuLevels);

document.querySelector("#cierra-niveles").addEventListener("click", hideMenuLevels); 

document.querySelectorAll(".nivel").forEach(function(element){
    element.addEventListener("click", changeLevel);
});

document.querySelector("#next").addEventListener("click", loadNewLevel);

document.querySelector("body").addEventListener("click", clickOutsideMenu);

document.addEventListener("keydown", escCloseMenu);

document.addEventListener("keydown", cheatCode);

//init of game
document.querySelector(".main-menu").classList.add("visible");
document.querySelector("#control-nivel").classList.add("oculto");
1