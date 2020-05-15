var moves = ["paper", "rock", "scissors"];
var computerMove = moves[Math.floor((Math.random() * 3))]

function rockPaperScissors(firstPlayerMove, secondPlayerMove){
    if(computerMove === "rock" && userMove === "scissors"){
        document.getElementById("win").textContent = "The computer wins!";
    } else if(computerMove === "scissors" && userMove === "paper"){
        getElementById("win").textContent = "The computer wins!";
    } else if(computerMove === "paper" && userMove === "rock"){
        getElementById("win").textContent = "The computer wins!";
    } else if(computerMove === userMove){
        getElementById("win").textContent = "TIE!";
    } else {
        getElementById("win").textContent = "You win!";
    }
}