(function (){
    document.getElementById("paper").addEventListener("click", function(){
        chooseComputerMove("paper");
    }); 
    document.getElementById("rock").addEventListener("click", function(){
        chooseComputerMove("rock");
    });
    document.getElementById("scissors").addEventListener("click", function(){
        chooseComputerMove("scissors");
    }); 

    function playRound(computerMove, userMove){
        if(computerMove === "rock" && userMove === "scissors"){
            document.getElementById("win").innerHTML = "Computer: Rock vs. You: Scissors.<br>The computer wins!";
        } else if(computerMove === "scissors" && userMove === "paper"){
            document.getElementById("win").innerHTML = "Computer: Scissors vs. You: Paper.<br>The computer wins!";
        } else if(computerMove === "paper" && userMove === "rock"){
            document.getElementById("win").innerHTML = "Computer: Paper vs. You: Rock.<br>The computer wins!";
        } else if(computerMove === userMove){
            computerMove = computerMove.charAt(0).toUpperCase() + computerMove.slice(1);
            document.getElementById("win").innerHTML = "Computer and You: " + computerMove + ".<br>TIE!";
        } else {
            computerMove = computerMove.charAt(0).toUpperCase() + computerMove.slice(1);
            userMove = userMove.charAt(0).toUpperCase() + userMove.slice(1);
            document.getElementById("win").innerHTML = "Computer: " + computerMove + " vs. You: " + userMove + ".<br>You win!";
        }
    }

    function chooseComputerMove(userMove){
        var moves = ["paper", "rock", "scissors"];
        computerMove = moves[Math.floor(Math.random() * 3)];
        playRound(computerMove, userMove);
    }

    var year = new Date().getFullYear();
    document.querySelector("footer").innerHTML = "Aggie Wheeler Bateman &copy; " +  year + " <a href=\"mailto:aggiewbdev\">aggiewbdev@gmail.com</a>";
}());