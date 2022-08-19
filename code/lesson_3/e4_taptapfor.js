// E4 Output the following (count up to 20)
// Use the for loop
// 1 2 3 TAP! 4 5 6 TAP! 7 8 9 TAP! 10 11 12 TAP! ...

let output = "";

for (let counter = 1; counter <= 21; counter++) {
  output += " " + counter;
  if (counter % 3 === 0) {
    output += " TAP!";
  }
}
console.log(output);
