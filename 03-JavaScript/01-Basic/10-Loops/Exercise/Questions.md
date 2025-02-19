1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable

2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array

3. Write a `do while` loop that prompts a user to enter their favourite tea type until they emter `stop`. Store each tea type in an array named `teaCollection`

4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`

5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the result in a new array named `multipliedNumbers`

6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`

7. Write a `for` loop that loops through the array [1,2,3,4,5,6,7,8,9] and stops the loop when it finds 5, Stores all elements before 5 in a new array.

8. Write a `for` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and skips 5.
   Stores all elements in a new array.

9. Write a `for of` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and stops the loop when it finds 5. Stores all elements before 5 in a new array.

10. Write a `for of` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and skips 5.
    Stores all elements in a new array.

11. Write a `for in` loop that loops through an object containing city populations.
    Stops the loop when the population of "Berlin" is found.
    Stores all the previous cities' populations in a new object named `newCityPopulation`

12. Write a `forEach` loop that loops through the array `[1,2,3,4,5,6,7,8,9]`.
    Stores all the elements in a new array.

\*\*\*\*\*\*\*\*\*\*\*\* 13. Write a `for in` loop that loops through an object containing city populations.
Slip the city with the population bellow 100000.
Stores the rest cities in a new object named `largePopulation`

14. Write a `forEach` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and stops the loop when it finds 5. Stores all elements before 5 in a new array.

15. Write a `forEach` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and skips 5.
    Stores all previous elements in a new array.

&nbsp;

&nbsp;

&nbsp;

Suggested

How does the performance of a `for...of` loop compare to a traditional `for` loop when iterating over large arrays?

Can you explain when using `break` or `continue` might be problematic in loops?

Are there any best practices for optimizing loops in JavaScript for performance?

How do `forEach` and `map` compare to traditional loops in terms of efficiency and use cases?

What are some best practices for optimizing a `for` loop in JavaScript?

How does a `for...of` loop compare to a traditional `for` loop in terms of performance?

Can you give an example where a `for` loop might not be the best choice?

How does JavaScript handle scoping for the loop variable in a `for` loop?

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# What are some best practices for optimizing a `for` loop in JavaScript?

### 1. Minimize Work Inside the Loop

**<u>Bad Example (Unnecessary Function Call)</u>**

```js
for (let i = 0; i < expensiveFunction(); i++) {
  console.log(i);
}
```

`expensiveFunction()` is called on every iteration, which is inefficient.

&nbsp;

**<u>Optimized Example</u>**

```js
let limit = expensiveFunction(); // Store result once
for (let i = 0; i < limit; i++) {
  console.log(i);
}
```

The function is called once before the loop starts.

&nbsp;

### 2. Cache array.length in a Variable

**<u>Bad Example (Recalculating Length)</u>**

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

&nbsp;

**<u>Optimized Example</u>**

```js
let len = arr.length; // Cache array length
for (let i = 0; i < len; i++) {
  console.log(arr[i]);
}
```

&nbsp;

### 3. Use for...of for Iterating Over Arrays

If you only need values, prefer for...of, as it’s more readable and optimized for arrays.

```js
let numbers = [10, 20, 30];

for (let num of numbers) {
  console.log(num);
}
```

&nbsp;

### 4. Avoid Using break and continue Unnecessarily

**<u>Bad Example (Unnecessary continue)</u>**

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
```

&nbsp;

**<u>Optimized Example</u>**

```js
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}
```

&nbsp;

### 5. Use map(), forEach(), or reduce() When Possible

```js
arr.forEach((item) => console.log(item));
```

```js
let doubled = arr.map((num) => num * 2);
```

&nbsp;

### 6. Avoid Unnecessary Variable Reassignments

**<u>Bad Example</u>**

```js
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
```

**<u>Optimized Example</u>**

```js
let sum = 0;
for (let i = 0, len = arr.length; i < len; i++) {
  sum += arr[i]; // Uses shorthand operator
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;
