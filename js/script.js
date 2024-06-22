let magicNumber
let numberAttempts
let wins = 0, losses = 0
function initializeGame(){
    numberAttempts = 7
    magicNumber = Math.floor(Math.random()*98)+1
    //console.log(magicNumber)
    document.querySelector("#resetBtn").style.display = "none"
    document.querySelector("#guessBtn").style.display = "inline"
    //resetting the color of feedback since we changed it to green/red
    document.querySelector("#feedback").style.color = "aliceblue"
    document.querySelector("#feedback").style.display = "none"
    document.querySelector("#guessesPrompt").focus()
    document.querySelector("#guesses").textContent = ""
    document.querySelector("#playerGuess").value = ""
    document.querySelector("#guessesCount").textContent = `Guesses left: ${numberAttempts}`
    document.querySelector("#playerGuess").focus()
}
initializeGame()
function gameOver(){
    document.querySelector("#guessBtn").style.display = "none"
    document.querySelector("#resetBtn").style.display = "inline"
    
}
function checkGuess(){
    let guess = parseInt(document.querySelector("#playerGuess").value)
    document.querySelector("#guessesPrompt").style.display = "inline"
    document.querySelector("#feedback").style.display = "inline"
    // erasing the content in input field so that it is easier to reenter a value
    document.querySelector("#playerGuess").value = ""
    // console.log("Player guess: "+ guess)
    let feedback = document.querySelector("#feedback")
    if (guess < 1 || guess > 99){
        feedback.textContent = "Guess out of range!"   
        feedback.style.color = "orange"  
        // return
        //I thought I'd add a validation that the string entered consists of digits
    }else if (!/^\d*\d$/.test(guess) || guess==''){
        feedback.textContent = "Guess must be an integer."
        feedback.style.color = "orange"  
        // return
    }else{
        numberAttempts--
        // console.log("Attempts: "+numberAttempts)
        if(guess==magicNumber){
            feedback.textContent = "You guessed it! You won!"
            feedback.style.color = "green"
            wins++
            document.querySelector("#winsAndLosses").innerHTML = `<span id="win">Wins: ${wins}</span> <span id="loss">Losses: ${losses}</span>`
            document.querySelector("#guessesCount").textContent = `Guesses left: ${numberAttempts}`
            gameOver()
        }else{
            document.querySelector("#guessesCount").textContent = `Guesses left: ${numberAttempts}`
            document.querySelector("#guesses").textContent+= guess+" "
            if (numberAttempts == 0){
                feedback.textContent = `You lost. The number was ${magicNumber}`
                feedback.style.color = "red"
                losses++
                document.querySelector("#winsAndLosses").innerHTML =  `<span id="win">Wins: ${wins}</span> <span id="loss">Losses: ${losses}</span>`
                gameOver()
            }else if (guess > magicNumber){
                feedback.textContent = "Guess was high"
            }else{
                feedback.textContent = "Guess was low"
            }
        }
    }
}
document.querySelector("#resetBtn").addEventListener("click", initializeGame)
document.querySelector("#guessBtn").addEventListener("click", checkGuess)