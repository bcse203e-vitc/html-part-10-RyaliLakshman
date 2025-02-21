// Select the buttons
let redButton = document.getElementById("redButton");
let blueButton = document.getElementById("blueButton");

// Function to change background to red
redButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

// Function to change background to blue
blueButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});
