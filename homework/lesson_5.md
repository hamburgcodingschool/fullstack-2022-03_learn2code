# Homework for a slopey triangle

Take the function that we've made in lesson 5 to output a triangle:

```JavaScript
function triangle(size) {
  for (let line = 0; line < size; i++) {
    let output = "";
    for (let x = 0; x < line; x++) {
      output += "*";
    }
    console.log(output);
  }
}

triangle(10);

```

and add an argument `slope` that changes the slope of the triangle.

if `slope` is 1, that means that each line, you'll add one dot.
if `slope` is 3, that means that each line, you'll add three dots.

You can test with these arguments:

`triangle(3, 1);` should result in:

```
*
**
***
```

`triangle(4,3);` should result in:

```
***
******
*********
************
```

## Bonus round

Instead of a rectangular triangle that sort of sticks to the lefthand wall, output an isoceles triangle.
How would you do that?

Try to solve it for slope 1 first. It doesn't get easier with the slope.

```
triangle(3, 1);

   *
  ***
 *****
*******

triangle(4, 2);

      **
    ******
  **********
**************
```
