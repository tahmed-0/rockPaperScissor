
//  

let yourScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = parseInt(Math.random() * choices.length);
    return (choices[random]);
}


function playRound(playerSelection, computerSelection) {

    let result = document.getElementById('results');
    let score = document.getElementById('score');

    const buttons = document.querySelectorAll('button');


    

     buttons.forEach((button) => {

        button.addEventListener('click', () => {

            computerSelection = getComputerChoice();


            playerSelection = button.id;

            if(playerSelection === computerSelection) {
                result.innerHTML = "Its tie"
                console.log("Its Tie")
            } else if (playerSelection === "Rock" && computerSelection === "Paper") {
                result.innerHTML = "Computer Scored"
                computerScore += 1;
        
                console.log("Computer Wins")
            } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
                result.innerHTML = "Computer Scored"
                computerScore += 1;
        
                console.log("Computer Wins")
            } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
                result.innerHTML = "Computer Scored"
                console.log("Computer Scored")
                computerScore += 1;
            } else {
              // document.getElementById('results').innerHTML = "you win"
        
               result.innerHTML = "You Scored"
               yourScore += 1;
        
                console.log("You win")
            }

            score.innerHTML = "Your score: " +yourScore + " Computer Score " + computerScore;
        }


        
        );
        

     });
    
    

        //console.log(playerSelection);
            
            



    ///playerSelection = button.id;
    //computerSelection = getComputerChoice().toLocaleLowerCase();

    


}



function game() {
    for(let i = 0; i < 5; i++) {
    
      
    }

  
}
  playRound();
//game();

// newGame.addEventListener('click', () => {
//     game();
// })


