let names = ["Jan", "Ringo", "Andi", "Stefan", "Rene", "Celine", "Agustina"];

let longestIndex = 0;
//let longestName = "";
for (let i = 0, len = names.length; i < len; i++) {
  // if (names[i].length > longestName.length) {

  if (names[i].length > names[longestIndex].length) {
    // longestName = names[i]
    longestIndex = i;
  }
}
// console.log(longestName);
console.log(names[longestIndex]);

/*
Sometimes it makes sense to use an index to something instead of the thing itself to address it. 
In this simple case it's not really important, though.

*/
