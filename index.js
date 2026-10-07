console.log('Hola')

let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    n = Math.random() * 3
    switch(n){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function getHumanChoice(){
    cOpt = prompt("Choose rock, paper or scissors")
}

function playRound(human, bot){
    hChoice = human.toLowerCase()

}