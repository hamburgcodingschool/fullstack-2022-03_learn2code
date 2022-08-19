// E1: Reuse the simple counter example but output all on one line
// 1 2 3 4 5
// let aString = ""
// aString = aString + "something";
// aString += "something";

let counter = 1;
let output = "";
while (counter <= 5) {
  output += counter + " ";
  counter = counter + 1;
}
console.log(output);
