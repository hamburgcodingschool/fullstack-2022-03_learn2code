# Let's guess some capital puns

In [hangman.js](../code/lesson_7/hangman.js) you can find the state of our hangman game before we finished the session.

The `while` loop at the bottom contains all the code needed, but we'll need to fill in two blanks:

1. The function `replaceInBoard(board, word, guess)`

It takes the board array (in the beginning all underscores) and replaces any occurences of guess in the original word.

```
function replaceInBoard(board, word, guess) {
    // [...]
    return board;
}


let board = ['_', '_', '_'];
let word = 'sup'
let guess = 's'

console.log(replaceInBoard(board, word, guess)) // ['s', '_', '_']
```

2. The function `checkIfSolved(board)`

It takes the board array and checks if there are any underscores left. If not, we have solved the word.

We have written a isInArray function before (lesson 5) that roughly does what this needs to do (but reverse)

```
function checkIfSolved(board) {
    // [...]
}

console.log(checkIfSolved(['_','c', 'e'])) // false
console.log(checkIfSolved(['a','c', 'e'])) // true
```

## Tips

- Copy over the package.json, package-lock.json and the node_modules folder from lesson 2 to your folder you're working on, that way we don't have to worry about npm
- Start the program in the Terminal instead of running it from VSCode Run > Run without debugger, because prompt does not work there.
- Since board is an array instead of a string, we can simply do board[i] = guess to replace an underscore with the guess. But remember that you need to check the guess against the original word!

## Additional questions

- Does your program work if the user uses uppercase characters?
- What happens if the user inputs multiple characters by accident? Can you think of a way to fix that?
