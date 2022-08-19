// E3 Output the following (count up to 20)
// 1 2 3 TAP! 4 5 6 TAP! 7 8 9 TAP! 10 11 12 TAP! ...
// hint: cough modulo cough
// counter % 3
// 1 2 0 1 2 0 1 2 0

let output = "";
let counter = 1;

while (counter <= 21) {
  output += " " + counter;
  if (counter % 3 === 0) {
    output += " TAP!";
  }
  counter++;
}
console.log(output);
