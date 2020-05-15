function rockPaperScissors(firstPlayerMove, secondPlayerMove){
    if(firstPlayerMove === "rock" && secondPlayerMove === "scissors"){
        console.log("Player 1 wins!");
    } else if(firstPlayerMove === "scissors" && secondPlayerMove === "paper"){
        console.log("Player 1 wins!");
    } else if(firstPlayerMove === "paper" && secondPlayerMove === "rock"){
        console.log("Player 1 wins!");
    } else if(firstPlayerMove === secondPlayerMove){
        console.log("TIE!");
    } else {
        console.log("Player 2 wins!");
    }
}