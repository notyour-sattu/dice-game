var button = document.getElementById("roll-button");

function rollDice(){
function getDice(){
    var randomNo=Math.floor(Math.random() * 6 + 1);
    return randomNo;
     
}
function getDice2(){
    var randomNo=Math.floor(Math.random() * 6 + 1);
    return randomNo;
     
}

 var randomNumber1= getDice();
 var randomNumber2= getDice2();
 
 document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
 document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

 if (randomNumber1 == randomNumber2) {
    document.querySelector(".headBig").innerHTML = "Draw";
 
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".headBig").innerHTML = "Player 2 is Winner.";
}else{
    document.querySelector(".headBig").innerHTML="Player 1 is Winner.";
}
}

button.addEventListener("click", rollDice);