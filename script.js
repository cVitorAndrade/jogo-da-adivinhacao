const randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)

let xAttempts = 1

function handleClick(event) {
    const inputNumber = document.querySelector("#inputNumber")
    console.log(inputNumber.value)
    

    event.preventDefault()
    
    if(Number(inputNumber.value) == randomNumber){
        document.querySelector('.screen1').classList.add("hide")
        document.querySelector('.screen2').classList.remove("hide")

        document.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativa(s)`
    }else {
        xAttempts++
    }
}