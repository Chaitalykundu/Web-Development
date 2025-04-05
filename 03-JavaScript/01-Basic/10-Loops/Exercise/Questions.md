# Questions

1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable

2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array

3. Write a `do while` loop that prompts a user to enter their favourite tea type until they enter `stop`. Store each tea type in an array named `teaCollection`

4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`

5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the result in a new array named `multipliedNumbers`

6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`

7. Write a `for` loop that loops through the array [1,2,3,4,5,6,7,8,9] and stops the loop when it finds 5, Stores all elements before 5 in a new array.

8. Write a `for` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and skips 5. Stores all elements in a new array.

9. Write a `for of` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and stops the loop when it finds 5. Stores all elements before 5 in a new array.

10. Write a `for of` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and skips 5. Stores all elements in a new array.

11. Write a `for in` loop that loops through an object containing city populations. Stops the loop when the population of "Berlin" is found. Stores all the previous cities' populations in a new object named `newCityPopulation`

12. Write a `forEach` loop that loops through the array `[1,2,3,4,5,6,7,8,9]`. Stores all the elements in a new array.

13. \*\*\*\*\*\*\*\*\*\*\*\* Write a `for in` loop that loops through an object containing city populations. Slip the city with the population bellow 100000. Stores the rest cities in a new object named `largePopulation`

14. Write a `forEach` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and stops the loop when it finds 5. Stores all elements before 5 in a new array.

15. Write a `forEach` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and skips 5. Stores all previous elements in a new array.

&nbsp;

&nbsp;

# Basic Loop Exercises

1. Print Numbers: Write a for loop that prints numbers from 1 to 10.
2. Sum of Numbers: Use a for loop to calculate the sum of numbers from 1 to 100.
3. Even Numbers: Print all even numbers between 1 and 50 using a while loop.
4. Odd Numbers: Use a do…while loop to print all odd numbers between 1 and 20.
5. Factorial Calculation: Write a for loop to calculate the factorial of a number n.
6. Multiplication Table: Create a program that prints the multiplication table of 5 using a loop.
7. Reverse Order: Print numbers from 10 to 1 using a for loop.

&nbsp;

&nbsp;

# Intermediate Loop Exercises

1. Find Prime Numbers: Write a program that prints all prime numbers between 1 and 50.
2. Fibonacci Series: Use a loop to print the first 10 numbers of the Fibonacci series.
3. Reverse a String: Given a string, use a loop to print it in reverse order.
4. Count Digits: Use a while loop to count the number of digits in a given number.
5. Sum of Digits: Write a loop to calculate the sum of digits of a number.
6. Check Palindrome Number: Use a loop to check if a given number is a palindrome (e.g., 121).
7. Print a Pattern: Print the following pattern using a nested loop:

```
*
**
***
****
*****
```

8. Number Triangle: Print the following pattern using loops:

```yaml
1
12
123
1234
12345
```

&nbsp;

&nbsp;

# Advanced Loop Exercises

1. Skip Multiples of 3: Use continue in a loop to print numbers from 1 to 20, but skip multiples of 3.
2. Stop on Negative Number: Given an array of numbers, stop printing when a negative number is encountered (break).
3. Find First Even Number: Use a loop with break to find the first even number in an array.
4. Find Largest Number: Use a loop to find the largest number in an array.
5. Sum of Array Elements: Write a loop to calculate the sum of all elements in an array.
6. Count Vowels in a String: Use a loop to count the number of vowels in a given string.
7. Remove Duplicates from an Array: Use a loop to remove duplicate elements from an array.
8. Nested Loop for Multiplication Table: Print the multiplication table from 1 to 10 using a nested loop.
9. Labeled Loop Example: Use a labeled loop to break out of nested loops when a specific condition is met.
10. Check if an Array is Sorted: Use a loop to determine whether an array is sorted in ascending order.

&nbsp;

&nbsp;

# Bonus Challenges (Hard)

1. Find Second Largest Number: Use loops to find the second largest number in an array.
2. Find Missing Number in Array (1 to N): Given an array of numbers from 1 to N (with one missing), find the missing number using a loop.
3. Flatten a Nested Array: Use a loop to flatten a deeply nested array into a single array.
4. Rotate an Array: Given an array [1, 2, 3, 4, 5], rotate it 2 times to the right ([4, 5, 1, 2, 3]).
5. Generate Pascal's Triangle: Write a program that prints Pascal's triangle up to n rows using loops.

&nbsp;

&nbsp;

&nbsp;

# Suggested

1. How does the performance of a `for…of` loop compare to a traditional `for` loop when iterating over large arrays?

2. Can you explain when using `break` or `continue` might be problematic in loops?

3. Are there any best practices for optimizing loops in JavaScript for performance?

4. How do `forEach` and `map` compare to traditional loops in terms of efficiency and use cases?

5. What are some best practices for optimizing a `for` loop in JavaScript?

6. How does a `for…of` loop compare to a traditional `for` loop in terms of performance?

7. Can you give an example where a `for` loop might not be the best choice?

8. How does JavaScript handle scoping for the loop variable in a `for` loop?

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

### 3. Use for…of for Iterating Over Arrays

If you only need values, prefer for…of, as it's more readable and optimized for arrays.

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
