// E3: Let's write a simple ATM simulation
// Start with a fixed balance
// Prompt the user for the amount they want to withdraw
// Tell the user the new balance or
// Tell the user that they have insufficient funds
// (In a sarcastic Mike Skinner voice, obviously)

let prompt = require("prompt-sync")();

var fixedBalance = 2000;
let withdrawal = prompt("Amount to withdraw in EUR? ");
var newBalance = fixedBalance - withdrawal;

if (newBalance > 0) {
  console.log("Your new balance is " + newBalance + " EUR");
} else {
  console.log("Insufficient funds");
}
