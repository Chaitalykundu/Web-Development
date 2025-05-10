# Roadmap

| Day                                   | Theory                                                                | Practice                                                       | Status |
| ------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------- | ------ |
| Day 1: Introduction to Arrays         | What is an array?                                                     | Create, access, and update arrays                              |        |
|                                       | Creating arrays: [] vs new Array()                                    | Try small problems on arrays (e.g., reverse an array manually) |        |
|                                       | Accessing elements with indices                                       |                                                                |        |
|                                       | Modifying and assigning values                                        |                                                                |        |
|                                       | .length property                                                      |                                                                |        |
| Day 2: Adding & Removing Elements     | .push(), .pop()                                                       | Add/remove elements in different positions                     |        |
|                                       | .shift(), .unshift()                                                  | Implement your own .push() using indexing                      |        |
|                                       | .splice(), .slice()                                                   |                                                                |        |
| Day 3: Looping & Iteration            | Traditional for loop                                                  | Iterate and sum all array elements                             |        |
|                                       | for...of loop                                                         | Find max/min using loop                                        |        |
|                                       | .forEach() method                                                     |                                                                |        |
| Day 4: Searching and Indexing         | .indexOf(), .lastIndexOf()                                            | Search for items                                               |        |
|                                       | .includes(), .find(), .findIndex()                                    | Filter based on conditions                                     |        |
|                                       | .some(), .every()                                                     |                                                                |        |
| Day 5: Transforming Arrays            | .map()                                                                | Double values in an array using .map()                         |        |
|                                       | .filter()                                                             | Filter even/odd numbers                                        |        |
|                                       | .reduce()                                                             | Find sum or product using .reduce()                            |        |
| Day 6: Sorting and Advanced Features  | .sort() with compare functions                                        | Sort array of numbers or strings                               |        |
|                                       | .reverse()                                                            | Clone an array using spread operator                           |        |
|                                       | Destructuring arrays                                                  |                                                                |        |
|                                       | Spread/rest syntax                                                    |                                                                |        |
| Day 7: Real-World Practice & Chaining | Chaining methods: .filter().map().reduce()                            | Manipulate arrays of objects (e.g., filter users by age)       |        |
|                                       | Working with arrays of objects                                        | Solve 2–3 problems on LeetCode/HackerRank                      |        |
|                                       | Common array interview problems (e.g., frequency counter, duplicates) |

&nbsp;

&nbsp;

&nbsp;

# Beginner Level

Creating Arrays

let arr = [1, 2, 3];

let arr = new Array(3);

Accessing & Modifying Elements

arr[0], arr[1] = 10;

Basic Properties

.length

typeof arr (returns 'object')

Basic Methods

.push(), .pop()

.shift(), .unshift()

&nbsp;

&nbsp;

Intermediate Level
Looping Through Arrays

for, for...of, forEach()

Searching

.indexOf(), .includes()

.find(), .findIndex()

Transforming Arrays

.map()

.filter()

.reduce()

Sorting

.sort() (custom compare functions)

.reverse()

Modifying Arrays

.splice() (add/remove)

.slice() (copy portion)

.concat() (merge arrays)

String Conversion

.join()

split() (string to array)

🔴 Advanced Level
Destructuring

js
Copy
Edit
const [a, b] = arr;
Spread & Rest Operators

js
Copy
Edit
const newArr = [...arr];
const func = (...args) => args;
Multidimensional Arrays

js
Copy
Edit
const matrix = [[1, 2], [3, 4]];
High-Order Functions Mastery

Use .map(), .filter(), .reduce() in combination.

Chaining Methods

js
Copy
Edit
arr.filter(x => x > 0).map(x => x \* 2).reduce((a, b) => a + b);
Performance Optimization

Avoid mutating arrays unnecessarily.

Use Set, Map if required for performance.

Typed Arrays (for advanced performance)

Int32Array, Float64Array
