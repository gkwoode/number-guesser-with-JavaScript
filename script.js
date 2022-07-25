let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, secretGuess) => {
    if (humanGuess <= 0 || humanGuess >= 9){
        alert('Number out of range!');
      }

    const humanDifference = Math.abs(secretGuess - humanGuess);
    const computerDifference = Math.abs(secretGuess - computerGuess);

    return humanDifference <= computerDifference;
}

const updateScore = winner => {
    if (winner === 'human'){
        humanScore++;
    }else if(winner === 'computer'){
        computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = (secretNumber, guessNumber) => Math.abs(secretNumber - guessNumber);
