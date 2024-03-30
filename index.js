
function random1(){
var value=Math.random();
value=value*6;
value=Math.floor(value)+1;
return value;
}
var player1="./images/dice"+random1()+".png";
var player2="./images/dice"+random1()+".png";

document.querySelector(".img1").setAttribute("src",player1);
document.querySelector(".img2").setAttribute("src",player2);
 
if(player1>player2)
{
    document.querySelector("h1").textContent="Player1 Wins🥳";
}
else if(player2>player1)
{
    document.querySelector("h1").textContent="Player2 Wins🥳";
}
else{
    document.querySelector("h1").textContent="It's a Draw😕";
}
