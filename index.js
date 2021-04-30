
function onClick() {
				var randomDice1 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = Math.floor(Math.random() * 6) + 1;

function dice(n) {
    var diceList = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    
    var srcDice = diceList[n- 1];
    
    
    return srcDice;
}
if (randomDice1 > randomDice2) {
 document.querySelector("h1").innerHTML = "Player-1 Wins";
} else if (randomDice1 === randomDice2) {
    document.querySelector("h1").innerHTML = "Draw!!";
} else {
    document.querySelector("h1").innerHTML = "Player-2 Wins";
}
document.querySelector(".img1").src = dice(randomDice1);
document.querySelector(".img2").src = dice(randomDice2);
				
}



