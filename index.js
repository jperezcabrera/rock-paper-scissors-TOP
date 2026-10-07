console.log('Hola')

let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    const n = Math.floor(Math.random() * 3)
    switch(n){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function getHumanChoice(){
    return prompt("Choose rock, paper or scissors")
}

function playRound(human, bot){

    const hChoice = human.toLowerCase()

    switch(hChoice){
        case 'rock':
            if (bot === 'paper') {
                computerScore += 1
                return 'You lose, paper beats rock'
            }
            else if (bot === 'scissors') {
                humanScore += 1
                return 'You win, rock beats scissors'
            }
            return 'Tie'
        
        case 'paper':
            if (bot === 'scissors') {
                computerScore += 1
                return 'You lose, scissors beats paper'
            }
            else if (bot === 'rock') {
                humanScore += 1
                return 'You win, paper beats rock'
            }
            return 'Tie'
        
        case 'scissors':
            if (bot === 'rock') {
                computerScore += 1
                return 'You lose, rock beats scissors'
            }
            else if (bot === 'paper') {
                humanScore += 1
                return 'You win, scissors beats paper'
            }
            return 'Tie'
        
        default:
            return 'Round skipped'
    }

}

function playGame(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()))
    }
    console.log(`Human: ${humanScore} Computer: ${computerScore}`)
}

playGame()