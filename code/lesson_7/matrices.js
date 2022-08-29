let something = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(something[1][1]); // 5

// E1: function that sums up all the elements in the matrix
function sumMatrix(matrix) {
  let sum = 0;
  for (let y = 0; y < matrix.length; y++) {
    let innerArray = matrix[y];
    sum += sumArray(innerArray);
  }
  // something needs to happen here
  return sum;
}

function sumArray(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    sum += element;
  }
  return sum;
}

console.log(sumArray([1, 2, 3])); // 6

console.log(sumMatrix(something)); // 45
