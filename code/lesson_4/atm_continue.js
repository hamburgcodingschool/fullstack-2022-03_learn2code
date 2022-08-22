let prompt = require("prompt-sync")();
let balance = 10000;

while (true) {
  // Continue continues here
  let withdraw = parseInt(prompt("How much would you like to withdraw?"));

  if (balance == 0) {
    break;
  }

  if (withdraw >= balance) {
    console.log("Insufficient funds");
    console.log(balance);
    continue;
  }

  balance -= withdraw;
  console.log(balance);
}
// after break: you're here
