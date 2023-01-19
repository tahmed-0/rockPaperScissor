
//  


let yourScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = parseInt(Math.random() * choices.length);
    return (choices[random]);
}

let result = document.getElementById('results');
let score = document.getElementById('score');

const buttons = document.querySelectorAll('.btn');



function playRound(playerSelection, computerSelection) {

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

            if(yourScore === 6 || computerScore === 6) {

               window.alert("Game Over")
               generate();
              
            }

            score.innerHTML = "Your score: " +yourScore + " Computer Score " + computerScore;
        }


        
        );
        

     });
    
    

        //console.log(playerSelection);
            
            



    ///playerSelection = button.id;
    //computerSelection = getComputerChoice().toLocaleLowerCase();

    


}


// playRound();

// function gamePlay() {

// }


function game() {

    playRound();

      if(yourScore === 5) {
        console.log("You won")
       
    } else if(computerScore === 5) {
        console.log("computer won")
    }
    
 
    
    }

  
game();





function generate() {

    yourScore = 0;
    computerScore = 0;
    score.innerHTML = "";
    result.innerHTML = "Play now";


//    const generateNewGame = document.querySelector(".newGameBtn");

//     generateNewGame.addEventListener('click', () => {
//     console.log("I been clicked")
//     yourScore = 0;
//     computerScore = 0;
//     score.innerHTML = "";
//     result.innerHTML = "Play now";



    
//    });

}




//Add a pop up when the score is 5, the pop up button has the option to plat game again