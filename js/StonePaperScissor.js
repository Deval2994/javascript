let compScore = 0; // Initialize computer score
let playerScore = 0; // Initialize player score

let displayPlayerScore = document.getElementById("playerScore"); // Get the element to display player score
let displayCompScore = document.getElementById("compScore"); // Get the element to display computer score
let gameStatus = document.getElementById("status"); // Get the element to display game status

let choices = document.querySelectorAll(".choice"); // Get all choice elements

// Function to generate computer's choice
const generateCompChoice = () => {
    const availableChoices = ["rock", "paper", "scissor"]; // Array of possible choices
    let index = Math.floor(Math.random() * 2); // Generate a random index between 0 and 2
    return availableChoices[index]; // Return the choice based on the random index
}

// Function to handle a draw scenario
const draw = (compChoice) => {
    gameStatus.textContent = `Game Draw, computer choice: ${compChoice}`; // Update game status to draw
}

// Function to handle computer win scenario
const compWins = (compChoice) => {
    compScore++; // Increment computer score
    gameStatus.textContent = `computer wins, computer choice: ${compChoice}`; // Update game status to computer win
}

// Function to handle player win scenario
const playerWins = (compChoice) => {
    playerScore++; // Increment player score
    gameStatus.textContent = `player wins, computer choice: ${compChoice}`; // Update game status to player win
}

// Function to check the winner based on choices
const checkWinner = (playerChoice, compChoice) => {
    if (playerChoice === "rock") {
        if (compChoice === "paper") {
            compWins(compChoice); // Computer wins if it chose paper
        } else if (compChoice === "scissor") {
            playerWins(compChoice); // Player wins if computer chose scissor
        } else draw(compChoice); // It's a draw if both chose rock
    } else if (playerChoice === "paper") {
        if (compChoice === "scissor") {
            compWins(compChoice); // Computer wins if it chose scissor
        } else if (compChoice === "rock") {
            playerWins(compChoice); // Player wins if computer chose rock
        } else draw(compChoice); // It's a draw if both chose paper
    } else {
        if (compChoice === "rock") {
            compWins(compChoice); // Computer wins if it chose rock
        } else if (compChoice === "paper") {
            playerWins(compChoice); // Player wins if computer chose paper
        } else draw(compChoice); // It's a draw if both chose scissor
    }
}

// Add event listener to each choice element
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let playerChoice = choice.getAttribute("id"); // Get the player's choice based on clicked element id
        let compChoice = generateCompChoice(); // Generate computer's choice
        checkWinner(playerChoice, compChoice); // Check the winner
        displayCompScore.textContent = `computer Score: ${compScore}`; // Update the displayed computer score
        displayPlayerScore.textContent = `player Score: ${playerScore}`; // Update the displayed player score
    });
});
