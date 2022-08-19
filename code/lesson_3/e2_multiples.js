// E2 output all numbers but as multiples of a user input number
// User inputs 5
// Outputs 5 10 15 ...
let prompt = require("prompt-sync")();

let counter = 1;
let output = "";
let multiplier = prompt("What is your multiplier? ");
while (counter <= 10) {
  output += " " + (counter * multiplier).toString();
  counter = counter + 1;
}
console.log(output);

// npm install
