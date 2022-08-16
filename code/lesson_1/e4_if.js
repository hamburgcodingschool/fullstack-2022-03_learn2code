// E4: Tell the user if they are allowed to drink hard liquour in germany
// Bonus points for using prompt() instead of line 3
let age = prompt("Let me know your age, please.");
let allowedToDrink = age >= 18;

if (allowedToDrink) {
  console.log("Go grab a drink!");
} else {
  console.log("Please stick to soda for now!");
}

// E5: Let's solve a more complex thing: In Germany you're allowed to drink soft alcoholic drinks from 16 on.
// Let's handle all three cases

let age = prompt("Let me know your age, please.");
let allowedToDrinkAllAlcohol = age >= 18;
let allowedToDrinkSoftAlcohol = age >= 16;
if (allowedToDrinkAllAlcohol) {
  console.log("Go grab a drink!");
} else {
  if (allowedToDrinkSoftAlcohol) {
    console.log("You can have a beer or wine");
  } else {
    console.log("Please stick to soda for now!");
  }
}

// Alternative 1

let age = prompt("Let me know your age, please.");
let allowedToDrinkAllAlcohol = age >= 18;
let allowedToDrinkSoftAlcohol = age >= 16;
if (allowedToDrinkSoftAlcohol) {
  if (allowedToDrinkAllAlcohol) {
    console.log("Have a drink!");
  } else {
    console.log("You can have a beer or wine");
  }
} else {
  console.log("Please stick to soda for now!");
}

// Alternative 2 (Slighty harder to understand, order is important, but you see this in real life all the time)

let age = prompt("Let me know your age, please.");
let allowedToDrinkAllAlcohol = age >= 18;
let allowedToDrinkSoftAlcohol = age >= 16;

if (allowedToDrinkAllAlcohol) {
  console.log("Have a drink!");
} else if (allowedToDrinkSoftAlcohol) {
  console.log("You can have a beer or wine");
} else {
  console.log("Please stick to soda for now!");
}
