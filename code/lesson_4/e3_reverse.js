//E4: Print the array in reverse

let myArray = [1, 2, 3, 4, 5, 6];

// [...]

// Output: 6 5 4 3 2 1
// i = 5 4 3 2 1 0
// o = 0 1 2 3 4 5
let output = [];
for (let i = myArray.length - 1; i >= 0; i--) {
  let o = myArray.length - 1 - i;
  output[o] = myArray[i];
}
console.log(output);
