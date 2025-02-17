# Overview

- [Overview](#overview)
- [Loops](#loops)
- [Loops in js](#loops-in-js)
- [Which Loop to Use?](#which-loop-to-use)
- [Difference Between for, for...in, and for...of Loops in JavaScript](#difference-between-for-forin-and-forof-loops-in-javascript)

&nbsp;

&nbsp;

&nbsp;

# Loops

Loops are used to execute a block of code multiple times.

They help in reducing code duplication and improving efficiency.

&nbsp;

&nbsp;

# Loops in js

- for loop
- for in loop
- for of loop
- while loop
- do-while loop

&nbsp;

&nbsp;

| Loop     | Use                                                               |
| -------- | ----------------------------------------------------------------- |
| for      | loops through a block of code a number of times                   |
| for in   | loops through the properties of an object                         |
| for of   | loops through the values of an iterable object                    |
| while    | loops through a block of code while a specified condition is true |
| do while | loops through a block of code while a specified condition is true |
|          |                                                                   |

&nbsp;

&nbsp;

# Which Loop to Use?

| Scenario                                 | Recommended Loop |
| ---------------------------------------- | ---------------- |
| Known number of iterations               | for loop         |
| Unknown number of iterations             | while loop       |
| Execute at least once                    | do...while loop  |
| Loop through object properties           | for...in loop    |
| Loop through arrays, strings, sets, maps | for...of loop    |
|                                          |                  |

&nbsp;

&nbsp;

# Difference Between for, for...in, and for...of Loops in JavaScript

| Feature     | for Loop                                                                          | for...in Loop                                   | for...of Loop                                                                      |
| ----------- | --------------------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| Purpose     | Used for looping over numeric indexes (arrays, loops with conditions).            | Used for looping over object properties (keys). | Used for looping over iterable objects (arrays, strings, maps, sets, etc.).        |
| Use Case    | When you need to iterate a fixed number of times or over an array using an index. | When you need to iterate over an object's keys. | When you need to iterate over values of an iterable (arrays, strings, maps, etc.). |
| Returns     | Numeric index values (if iterating over an array).                                | Object keys (as strings).                       | Values of the iterable directly.                                                   |
| Best for    | Arrays, loops with conditions.                                                    | Objects (not arrays).                           | Arrays, strings, sets, maps, etc.                                                  |
| Performance | Fastest for arrays.                                                               | Slower, as it looks up prototype chain.         | Efficient for iterables.                                                           |
|             |                                                                                   |                                                 |                                                                                    |

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
