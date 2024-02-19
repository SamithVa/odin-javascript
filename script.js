function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            return 'Draw'
        }
        else if (computerSelection === 'paper'){
            return 'Lose'
        }
        else{
            return 'Win'
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection === 'rock'){
            return 'Lose'
        }
        else if (computerSelection === 'paper'){
            return 'Win'
        }
        else{
            return 'Draw'
        }
    }
    else if(playerSelection == 'paper') {
        if(computerSelection === 'rock'){
            return 'Win'
        }
        else if (computerSelection === 'paper'){
            return 'Draw'
        }
        else{
            return 'Lose'
        }
    }
    else{
        return 'Invalid user input'
    }
}

function playGame(){
    let user = prompt('Enter you choice: ')
    let comp = getComputerChoice()
    console.log('user choice: ' + user)
    console.log('computer choice: ' + comp)
    console.log(playRound(user, comp))
}

playGame()
playGame()
playGame()
playGame()
playGame()



