# Functions

Functions are a way to write reusable code and structure it usefully.

Functions look like this:

```JavaScript
function functionName(argument1, argument2) {
    // Block of code that does something with the arguments
    return something // Optional: The function returns something, like a result from a calculation.
}
```

## Function names

The name of the function should be as descriptive and concise as possible (similar to variable names).

Good names are: `reverseArray`, `drawTriangle`, `login`

Bad names are: `h`, `reverseMethodTakingTwoParameters`

## Arguments

A function can have a number of arguments. An argument gets passed into the function when you call it and within the function, behaves like a variable.

Arguments are positional, so their order and position matters:

```JavaScript

function multiplyArray(array, multiplyer) {
    // Implementation left as an excersise to the reader
}

multiplyArray([1,2,3,12], 12); // Works
multiplyArray(12, [1,2,3,4]); // Does not work
```

If you pass in variables into a function, the values[^1] of the variables are now available as the arguments.

```JavaScript

let array = [1,2,3];
let multiplyer = 3;

function multiplyArray(ar, mu) {
    let out = [];
    for(let i=0;i<ar.length, i++) {
        out[i] = ar[i] * mu;
    }
    return out;
}

multiplyArray(array, multiplyer); // Returns [3,6,9]
// array becomes ar in the function, multiplyer becomes mu in the function
```

[^1]: That is not technically correct (If you really want to know, look up "pass by reference vs. pass by value") but it's good enough for now.
