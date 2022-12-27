function randomGenerator(){
    var random=Math.floor((Math.random() *6)+1);
    return random;
}
function diceGame(){
var num1=randomGenerator();
var num2=randomGenerator();
// Dice 1
switch(num1){
    case 1:
        document.querySelector("img").setAttribute("src","pictures/dice-six-faces-one.png"); break;
        case 2:
        document.querySelector("img").setAttribute("src","pictures/dice-six-faces-two.png"); break;
        case 3:
        document.querySelector("img").setAttribute("src","pictures/dice-six-faces-three.png"); break;
        case 4:
        document.querySelector("img").setAttribute("src","pictures/dice-six-faces-four.png"); break;
        case 5:
        document.querySelector("img").setAttribute("src","pictures/dice-six-faces-five.png"); break;
        case 6:
        document.querySelector("img").setAttribute("src","pictures/dice-six-faces-six.png"); break;
}
// Dice 2
switch(num2){
    case 1:
        document.querySelector(".dice-img2").setAttribute("src","pictures/dice-six-faces-one.png"); break;
        case 2:
        document.querySelector(".dice-img2").setAttribute("src","pictures/dice-six-faces-two.png"); break;
        case 3:
        document.querySelector(".dice-img2").setAttribute("src","pictures/dice-six-faces-three.png"); break;
        case 4:
        document.querySelector(".dice-img2").setAttribute("src","pictures/dice-six-faces-four.png"); break;
        case 5:
        document.querySelector(".dice-img2").setAttribute("src","pictures/dice-six-faces-five.png"); break;
        case 6:
        document.querySelector(".dice-img2").setAttribute("src","pictures/dice-six-faces-six.png"); break;
}
if(num1>num2){
    document.querySelector("h1").innerHTML="Player One Wins 🎉";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML="Player Two Wins 🎉";
}
else{
    document.querySelector("h1").innerHTML="Draw-Match!";
}
}

