let allNumbers = [1, 2, 3, 4];

// E1: Sum up all even numbers

let sum = 0;
for (let i = 0; i < allNumbers.length; i++) {
  let number = allNumbers[i];
  if (number % 2 === 0) {
    sum += number;
  }
}
console.log(sum);

/*

Helpful strategy: try to divide up what you're trying to do into smaller parts. 
Here's the inner part of the loop, so that you can test if it is doing the right thing:

let sum = 0;
let number = 1;
if (number % 2 === 0) {
  sum += number;
}
console.log(sum);
*/
