const screenOne = document.querySelector('.screen1')
const screenTwo = document.querySelector('.screen2')

const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnPlayAgain')

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Events

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handlePlayAgainClick)

// Functions

function handleTryClick(event) {
    const inputNumber = document.querySelector("#inputNumber")    

    event.preventDefault()
    
    if(Number(inputNumber.value) == randomNumber){
        screenOne.classList.add("hide")
        screenTwo.classList.remove("hide")

        document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativa(s)`
    }else {
        xAttempts++
        inputNumber.value = ''
    }
}

function handlePlayAgainClick() {
    screenOne.classList.remove("hide")
    screenTwo.classList.add("hide")

    xAttempts = 1
    inputNumber.value = ''
    randomNumber = Math.round(Math.random() * 10)
}
