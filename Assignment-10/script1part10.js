let number = Math.floor(Math.random() *50) + 1;
let guess;
let message = document.getElementById("message");

function checkGuess() {
    guess = parseInt(document.getElementById("guessInput").value);

    while(guess != number) {
        if (guess < number) {
            message.innerHTML = "Too low! Try again."
        } else {
            message.innerHTML = "Too high! Try again."
        }
        return;
    }
    message.innerHTML = "Congratulations! You guessed the number"
}