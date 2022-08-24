function multiply(array, multiplicator) {
  let output = [];
  // Check if anything is given for array, if not, return an empty array
  if (array == null) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    output[i] = element * multiplicator;
  }
  return output;
}

let myArray = [1, 2, 3, 4, 5];
let otherArray = [52, 23, 42, 3];
// Different ways of calling the functions...
console.log(multiply(myArray, 2));
console.log(multiply(myArray, 4));
console.log(multiply(otherArray, 10));
console.log(multiply([1, 2, 3], 10));
// JavaScript does not check number of arguments or types of arguments
console.log(multiply([1, 2, 3], 2, "hallo", true));
console.log(multiply());
