console.log('hi');

// Function pour détermine le choix de l'utilisateur

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput ===' paper'|| userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else{
    console.log("Invalid input")
  }
}

// function pour le choix du Computer

function getComputerchoice(){
  let number = Math.floor(Math.random() * 3)
  // console.log(number)
  switch(number){
    case 0 :
      return'rock'
      break
    case 1:
      return 'paper'
      break;
    case 2:
      return 'scissors'
      break;
    default:
      console.log("Invalid input")
  }

}
// console.log(getComputerchoice())

// function qui permet de déterminer le vainqueur 


function determineWinner(userChoice, computerChoice){

  if(userChoice === computerChoice ){
    return 'Tie !'
  }

  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won'
    }else {
      return 'User Won'
    }
  }

  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer Won !'
    }else{
      return 'User won !'
    }
  }

  if(userChoice === 'scissors'){
    if(computerChoice ==='rock'){
      return 'Computer won !'
    }else {
      return 'You won !'
    }
  }
  if (userChoice === 'bomb'){
    return 'User WOOOOOON !'
  }
}

// les 3 fonctions sont faite pour le choix et la logique de vainqueur crée 

// function de jeu qui permet de lancer le jeu et de déterminer le choix du Computer

const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerchoice()
  console.log('You choose : ' + userChoice + ' and Computer chooses : ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()


