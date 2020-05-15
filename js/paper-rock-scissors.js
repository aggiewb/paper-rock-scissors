function rockPaperScissors(firstPlayerMove, secondPlayerMove){
    if(computerMove === "rock" && userMove === "scissors"){
        console.log("The computer wins!");
    } else if(computerMove === "scissors" && userMove === "paper"){
        console.log("The computer wins!");
    } else if(computerMove === "paper" && userMove === "rock"){
        console.log("The computer wins!");
    } else if(computerMove === userMove){
        console.log("TIE!");
    } else {
        console.log("You win!");
    }
}