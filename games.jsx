<!DOCTYPE html>
<html>
<head>
    <title>Guess the Number Game</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <h1>Guess the Number Game</h1>
    <p>I'm thinking of a number between 1 and 100...</p>
    <p>Can you guess what it is?</p>

    <input type="text" id="guessField">
    <input type="submit" value="Submit Guess" id="guessSubmit">
    <p class="message"></p>

    <script>
        // Generate a random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        const guessSubmit = document.getElementById("guessSubmit");
        const guessField = document.getElementById("guessField");
        const message = document.querySelector(".message");

        guessSubmit.addEventListener("click", checkGuess);

        function checkGuess() {
            const userGuess = Number(guessField.value);
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                message.textContent = "Please enter a valid number between 1 and 100.";
            } else {
                attempts++;
                if (userGuess === randomNumber) {
                    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts. The number was ${randomNumber}.`;
                    guessField.disabled = true;
                    guessSubmit.disabled = true;
                } else {
                    message.textContent = userGuess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
                    guessField.value = "";
                }
            }
        }
    </script>
</body>
</html>
