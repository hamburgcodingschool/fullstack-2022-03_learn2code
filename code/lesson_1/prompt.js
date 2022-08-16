let number = prompt("Give me a number");

let dollars;

dollars = parseInt(prompt("How many dollars do you want to convert?"));

let euros;
let conversionRate = 1.02;
euros = dollars / conversionRate;
console.log(euros + " EUR");
