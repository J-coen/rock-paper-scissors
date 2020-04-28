// Global variables
let gamesToPlay = 5;
let playerScore = 0;
let compScore = 0;

// Get computers choice
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];

    // Return computer option selected by a random number between 0 and 2
    return options[Math.floor(Math.random() * Math.floor(3))];
    
}

// Play function
function play(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'Paper') {
        compScore++;
        return "You Lose, Paper beats Rock";
    } else if(playerSelection === 'scissors' && computerSelection === 'Rock') {
        compScore++
        return "You Lose, Rock beats Scissors";
    } else if(playerSelection === 'paper' && computerSelection === 'Scissors') {
        compScore++
        return "You Lose, Scissors beats Paper";
    } else if(playerSelection === computerSelection.toLowerCase()) {
        gamesToPlay++
        return 'This round is a draw';
    } else {
        playerScore++
        return `You Win, ${playerSelection} beats ${computerSelection}`;
    }
}


function game() {
    // Loop to call play function 5 times
    for(let i = 0; i < gamesToPlay; i++) {
        const playerSelection = prompt('Enter Rock, Paper or Scissors').toLowerCase();
        const computerSelection = computerPlay();
        console.log(play(playerSelection, computerSelection));
    }

    // Output the winner best out of 5 games
    return compScore > playerScore ? `Computer Wins! ${compScore} games to ${playerScore}` : `Player Wins! ${playerScore} games to ${compScore}`;
}

// Init game function
console.log(game());
