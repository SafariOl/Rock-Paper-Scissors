const OPTIONS = [
    {
        src: './img/scissors.png',
        name: 'scissors'
    },
    {
        src: './img/paper.png',
        name: 'paper'
    },
    {
        src: './img/rock.png',
        name: 'rock'
    }
]

const computerBoard = document.querySelector('.computer-option')
const playerBoard = document.querySelector('.player-option')
const reset = document.querySelector('.reset')
const result = document.querySelector('.result')

const allOptions = document.querySelectorAll('.option')

let computerVal = 0
let playerVal = 0

allOptions.forEach(option => {
    option.addEventListener('click', () => {
        reset.style.opacity = 1
        reset.style.height = 'auto'
        result.textContent = ''
        const playerChoice = option.getAttribute('data-option')
        const computerChoice = OPTIONS[Math.floor(Math.random() * 3)]
    
        for(let i = 0; i < OPTIONS.length; i++){
            if(playerChoice == OPTIONS[i].name){
                playerBoard.src = OPTIONS[i].src
            }
        }
        computerBoard.src = computerChoice.src

        if(playerChoice == 'scissors' && computerChoice.name == 'paper'){
            playerVal += 1
        }else if(computerChoice.name == 'scissors' && playerChoice == 'paper'){
            computerVal += 1
        }else if(playerChoice == 'paper' && computerChoice.name == 'rock'){
            playerVal += 1
        }else if(computerChoice.name == 'paper' && playerChoice == 'rock'){
            computerVal += 1
        }else if(playerChoice == 'rock' && computerChoice.name == 'scissors'){
            playerVal += 1
        }else if(computerChoice.name == 'rock' && playerChoice == 'scissors'){
            computerVal += 1
        }else{
            result.textContent = 'DRAW!'
        }

        document.querySelector('.computer-val').textContent = String(computerVal)
        document.querySelector('.player-val').textContent = String(playerVal)
    })
})


reset.addEventListener('click', () => location.reload())