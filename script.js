let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {return Math.floor(Math.random()*10)};

const getAbsoluteDistance = (a,b) => {
    return Math.abs(a-b);
};


const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    if(humanGuess < 0 || humanGuess > 9) return alert('Number is out of range! Please enter a number between 0-9');
    if(getAbsoluteDistance(humanGuess,secretTarget)>getAbsoluteDistance(computerGuess, secretTarget)) return false;
    if(getAbsoluteDistance(humanGuess,secretTarget)<getAbsoluteDistance(computerGuess, secretTarget)) return true;
    else return true;
};

const updateScore = winner => {
    switch(winner){
        case 'human':
            humanScore = humanScore + 1;
            break;
        
        case 'computer':
            computerScore += 1;
            break;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};