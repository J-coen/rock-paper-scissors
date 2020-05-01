// DOM elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScoreDisplay = document.getElementById('player-score');
const compScoreDisplay = document.getElementById('comp-score');
const playAgainBtn = document.getElementById('play-again');
const roundText = document.getElementById('round-text');
const endOfGameText = document.getElementById('end-game-text');
const overModal = document.getElementById('overModal');

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

    // Game conditions
    if(playerSelection === 'rock' && computerSelection === 'Paper') {
        compScore++;
        compScoreDisplay.innerText = compScore;
        roundText.innerText = "You Lose, Paper beats Rock";
    } else if(playerSelection === 'scissors' && computerSelection === 'Rock') {
        compScore++
        compScoreDisplay.innerText = compScore;
        roundText.innerText = "You Lose, Rock beats Scissors";
    } else if(playerSelection === 'paper' && computerSelection === 'Scissors') {
        compScore++
        compScoreDisplay.innerText = compScore;
        roundText.innerText = "You Lose, Scissors beats Paper";
    } else if(playerSelection === computerSelection.toLowerCase()) {
        gamesToPlay++
        roundText.innerText = 'This round is a draw';
    } else {
        playerScore++
        playerScoreDisplay.innerText = playerScore;
        roundText.innerText = `You Win, ${playerSelection} beats ${computerSelection}`;
    }

    // Call check score function
    checkScore();
}


// Check when score is 5 so game is over
function checkScore() {
    if(playerScore === 5 || compScore === 5) {
        gameOver();
    }
}

function gameOver() {
    roundText.innerText = '';
    overModal.classList.add('show');
    // Output the winner best out of 5 games
    endOfGameText.innerText = compScore > playerScore ? `Computer Wins! ${compScore} games to ${playerScore}` : `Player Wins! ${playerScore} games to ${compScore}`;
}

function resetGame() {
    // Reset scores and remove modal
    compScoreDisplay.innerText = 0;
    playerScoreDisplay.innerText = 0;
    playerScore = 0;
    compScore = 0;
    overModal.classList.remove('show');
}

// Event listeners
rock.addEventListener('click', () => play('rock', computerPlay()));
paper.addEventListener('click', () => play('paper', computerPlay()));
scissors.addEventListener('click', () => play('scissors', computerPlay()));
playAgainBtn.addEventListener('click', resetGame);
