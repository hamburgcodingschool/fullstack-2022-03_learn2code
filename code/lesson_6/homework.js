// E1
// Write a function that has an argument 'lines' and outputs as many lines (could just be the line number)

function drawLines(lines, slope) {
  for (let i = 0; i < lines; i++) {
    console.log(stars((i + 1) * slope));
  }
}

function stars(numberOfStars) {
  let output = "";
  for (let i = 0; i < numberOfStars; i++) {
    output += "*";
  }
  return output;
}

drawLines(3, 3);
