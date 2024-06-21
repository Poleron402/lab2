let magicNumber
let numberAttempts = 0
function initializeGame(){
    magicNumber = Math.floor(Math.random()*98)+1
    console.log(magicNumber)
    document.querySelector("#resetBtn").style.display = "none"
    document.querySelector("#guessBtn").focus()
    document.querySelector("#guessesPrompt").style.display = "none"
    
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

    console.log("Player guess: "+ guess)
    let feedback = document.querySelector("#feedback")
    if (guess < 1 || guess > 99){
        feedback.textContent = "Guess out of range."
        document.querySelector("#playerGuess").value = ""
        return
    }
    if (!/\d/.test(guess)){
        feedback.textContent ="Guess must be an integer."
        document.querySelector("#playerGuess").value = ""
        return
    }

    numberAttempts++
    console.log("Attempts: "+numberAttempts)
    if(guess==magicNumber){
        feedback.textContent = "You guessed it! You won!"
        feedback.style.color = "green"
        gameOver()
    }else{
        document.querySelector("#guesses").textContent+= guess+" "
        if (numberAttempts == 7){
            feedback.textContent = "You lost."
            feedback.style.color = "red"
        }else if (guess > magicNumber){
            feedback.textContent = "Guess was high"
        }else{
            feedback.textContent = "Guess was low"
        }
    }
}
document.querySelector("#resetBtn").addEventListener("click", initializeGame)
document.querySelector("#guessBtn").addEventListener("click", checkGuess)