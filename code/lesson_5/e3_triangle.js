// E3: implement the following function
// function triangle(size) {
//   // outputs a triangle like this:
//   // for size = 3
//   // *
//   // **
//   // ***
// }

function triangle(size, slope) {
  for (let y = 0; y < size; y++) {
    let output = "";
    for (let x = 0; x < y + 1; x++) {
      output += "*";
    }
    console.log(output);
  }
}
