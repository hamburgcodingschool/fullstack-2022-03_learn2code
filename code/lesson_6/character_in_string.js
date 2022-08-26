// E2: write a function that checks if a character is in a string
// Tip: Remember that Strings function almost like arrays: string[1] gives you the second character in a string
// Also, string.length gives you the length in characters
// Ignore the case
// Tip: "".toLowerCase(), "".toUpperCase()

function isInString(str, ch) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === ch.toLowerCase()) {
      return true;
    }
  }
  return false;
}

console.log(isInString("hello", "H")); // true
console.log(isInString("hello", "h")); // true
console.log(isInString("hello", "q")); // false
