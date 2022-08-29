function hangmanFormatter(originalWord, guesses) {
  let output = "";

  for (let i = 0; i < originalWord.length; i++) {
    const element = originalWord[i];
    let notFound = true;
    for (let j = 0; j < guesses.length; j++) {
      if (element.toLowerCase() === guesses[j].toLowerCase()) {
        output += element;
        notFound = false;
      }
    }
    if (notFound) {
      output += "_";
    }
  }
  return output;
}

console.log(hangmanFormatter("sup", ["s"])); // "s__"
console.log(hangmanFormatter("Sup", ["s"])); // "S__"
console.log(hangmanFormatter("Relativity", ["m", "e", "i", "t"])); // "_e__ti_it_"
