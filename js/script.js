let magicNumber
let numberAttempts
let wins = 0, losses = 0
function initializeGame(){
    numberAttempts = 7
    magicNumber = Math.floor(Math.random()*98)+1
    //console.log(magicNumber)
    document.querySelector("#resetBtn").style.display = "none"
    document.querySelector("#guessBtn").style.display = "inline"
    document.querySelector("#feedback").style.color = "aliceblue"
    document.querySelector("#feedback").style.display = "none"
    document.querySelector("#guessesPrompt").style.display = "none"
    document.querySelector("#guessesPrompt").focus()
    document.querySelector("#guesses").textContent = ""
    document.querySelector("#playerGuess").value = ""
    document.querySelector("#guessesCount").textContent = `Guesses left: ${numberAttempts}`
    let playerGuess = document.querySelector("#playerGuess")
    playerGuess.focus()
    
}
initializeGame()
function gameOver(){
    document.querySelector("#guessBtn").style.display = "none"
    document.querySelector("#resetBtn").style.display = "inline"
    
}
function checkGuess(){
    let guess = document.querySelector("#playerGuess").value
    document.querySelector("#guessesPrompt").style.display = "inline"
    document.querySelector("#feedback").style.display = "inline"
    
    console.log("Player guess: "+ guess)
    let feedback = document.querySelector("#feedback")
    if (guess < 1 || guess > 99){
        feedback.textContent = "Guess out of range."
        document.querySelector("#playerGuess").value = ""
        return
    }else if (!/^\d*\d$/.test(guess)){
        feedback.textContent = "Guess must be an integer."
        document.querySelector("#playerGuess").value = ""
        return
    }

    numberAttempts--
    console.log("Attempts: "+numberAttempts)
    if(guess==magicNumber){
        feedback.textContent = "You guessed it! You won!"
        feedback.style.color = "green"
        wins++
        document.querySelector("#winsAndLosses").innerHTML = `<span id="win">Wins: ${wins}</span>, <span id="loss">Losses: ${losses}</span>`
        document.querySelector("#guessesCount").textContent = `Guesses left: ${numberAttempts}`
        gameOver()
    }else{
        document.querySelector("#guessesCount").textContent = `Guesses left: ${numberAttempts}`
        document.querySelector("#guesses").textContent+= guess+" "
        if (numberAttempts == 0){
            feedback.textContent = "You lost."
            feedback.style.color = "red"
            losses++
            document.querySelector("#winsAndLosses").innerHTML =  `<span id="win">Wins: ${wins}</span>, <span id="loss">Losses: ${losses}</span>`
            gameOver()
        }else if (guess > magicNumber){
            feedback.textContent = "Guess was high"
        }else{
            feedback.textContent = "Guess was low"
        }
    }
}
document.querySelector("#resetBtn").addEventListener("click", initializeGame)
document.querySelector("#guessBtn").addEventListener("click", checkGuess)