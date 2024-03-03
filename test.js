// Prompt the user to enter their name
var name = prompt("What is your name?");

// Check if the user entered a name
if (name !== null && name !== "") {
    // If a name is provided, greet the user
    console.log("Hello, " + name + "! Welcome to our website.");
} else {
    // If no name is provided, display a generic greeting
    console.log("Hello! Welcome to our website.");
}
