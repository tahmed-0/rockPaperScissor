
//  

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = parseInt(Math.random() * choices.length);
    return (choices[random]);
}

function playRound(playerSelection, computerSelection) {

    let result = document.getElementById('results');

    const buttons = document.querySelectorAll('button');


    computerSelection = getComputerChoice();

     buttons.forEach((button) => {

        button.addEventListener('click', () => {

            playerSelection = button.id;

            console.log(button.id);
            console.log("computer chose " + computerSelection);

            if(playerSelection === computerSelection) {
                result.innerHTML = "Its tie"
                console.log("Its Tie")
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                result.innerHTML = "Computer Wins"
        
                console.log("Computer Wins")
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                result.innerHTML = "Computer Wins"
        
                console.log("Computer Wins")
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                result.innerHTML = "Computer Wins"
                console.log("Computer Wins")
            } else {
              // document.getElementById('results').innerHTML = "you win"
        
               result.innerHTML = "you win"
        
                console.log("You win")
            }
        }


        
        );
        

     });
    
    

        //console.log(playerSelection);
            
            



    ///playerSelection = button.id;
    //computerSelection = getComputerChoice().toLocaleLowerCase();

    


}

playRound();

function game() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}

// newGame.addEventListener('click', () => {
//     game();
// })


