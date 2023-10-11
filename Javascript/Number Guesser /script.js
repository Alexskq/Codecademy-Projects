let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// 1 - Générer un chiffre random entre 0 et 9 

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

// Option - alerter si le nombre n'est pas entre 0 et 9
const checkUserGuess = (number) => (number >= 0 && number <= 9) ? true : (alert('You must enter a number between 0 and 9'), false);

// refacto - option 
const getAbslouteDistance = (number1, number2) => {
    return Math.abs(number1 - number2)
  }


//  2 - Déterminer qui est le plus proche du chiffre générer
const compareGuesses = (userGuess, computerGuess, generateTarget) => {
    const userDiff = getAbslouteDistance(userGuess,generateTarget)
    const computerDiff = getAbslouteDistance(computerGuess, generateTarget)
  
    console.log(userDiff, computerDiff)
  
    if ((userDiff === computerDiff) || (userDiff < computerDiff)) {
      return true
    }else {
      return false
    }
  }
  
  console.log(compareGuesses(2,7,6))

//   3 - Incrémenter le score du winner 
const updateScore = (winner) => {

    if (winner === 'human'){
      humanScore += 1
    }else{
      computerScore += 1
    }
  console.log(humanScore, computerScore)
  }

//   4 - Incrémenter le compteur de Round 
const advanceRound = () => {
    currentRoundNumber += 1
  }
  console.log(currentRoundNumber)