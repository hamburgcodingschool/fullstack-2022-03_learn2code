// E1: Write a program that has a variable called radius as the first line which is a number and outputs three numbers:
// - The circumference of the circle
// - The area of the circle
// - The area of an isoceles triangle sitting inside the upper half of the circle.
// Output the result in a nicely formatted text.
// Think of the unit you want to use

let prompt = require("prompt-sync")();

let radius = prompt("What's the radius in mm?");
radius = parseFloat(radius);
let r = radius;
let circumference = 2 * r * Math.PI;
let area = r * r * Math.PI;
let triangleArea = r * r;

console.log(
  "A circle with the Radius " +
    r +
    "mm has a circumference of " +
    circumference +
    "mm and an area of " +
    area +
    "mm²."
);
console.log(
  "A isoceles triangle that fits into the upper half of the circle has an area of " +
    triangleArea +
    "mm²"
);
