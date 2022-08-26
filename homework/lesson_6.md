# I heard you like strings...

1. Write a function that checks if two strings are identical, but it's ignoring the case

```
function stringsAreEqual(a, b) {
    return [...]
}

console.log(stringsAreEqual('hello', 'hello')) // true
console.log(stringsAreEqual('hello', 'HELLO')) // true
console.log(stringsAreEqual('hello', 'ehlo')) // false

```

2. Write a hangman (Galgenraten) formatter (again, make it ignore case)

Tip: You can probably reuse the [isInArray() function we built in Lesson 5](../code/lesson_5/e2_is_in_array.js)

Tip: Leave the original string intact and construct a new string while iterating over the original

```
function hangmanFormatter(originalWord, guesses) {

}

console.log(hangmanFormatter("sup", ["s"])) // "s__"
console.log(hangmanFormatter("Sup", ["s"])) // "S__"
console.log(hangmanFormatter("Relativity", ["m", "e", "i", "t"])) // "_e__ti_it_"
```

3. Write a function that takes the same arguments as the last one and just return the number of wrong guesses

```JavaScript
function hangmanErrors(originalWord, guesses) {

}

console.log(hangmanFormatter("sup", ["s"])) // 0
console.log(hangmanFormatter("Sup", ["s"])) // 0
console.log(hangmanFormatter("Relativity", ["m", "e", "i", "t"])) // 1
```

# That sinewave

If you're fed up with strings and characters, maybe try this one?

Here's a loop for you, it's free:

```JavaScript

for(let y=0;y<200;y++) {
  drawSine(y);
}

```

1. Modify the `drawLine()` method so that it takes an extra argument that will pad the line with spaces

```JavaScript
function drawLine(spaces, stars) {

}

drawLine(2,3);  // "  ***"
drawLine(10,1); // "          *"
```

2. Write a `drawSine()` method that will use the drawLine method to draw a line of a sinewave in the terminal so that the for loop from above draws a sine wave.

Tip: `Math.sin(x)` will give you the sine for x. The sine goes from -1 to 1, so for it to look good in the terminal, you can use the following formula:

```
    x = (Math.sin(y) + 1) * 10 // first, add one so that the value is 0 - 2 instead. Then multiply by 10 so that it is from 0 to 10.
```

Tip: The argument for Math.sin is the angle in "radians" which goes from 0 to 2\*PI for a full sine wave. To make it look good, you need to divide the input of your function by a certain amount. 5-10 seem to work fine:

```
    x = (Math.sin(y / 5) + 1) * 10
```

You can play around with the various factors, dividers etc. to get different looks.

Tip: Running this directly in VSCode (with Run>Run without debugger), you will notice that that (2) repeat badge shows up. You can run your program from Terminal to get around that.
