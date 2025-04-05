# Overview

- [Overview](#overview)
- [Arrow functions (=\>)](#arrow-functions-)
  - [Note](#note)
- [Syntax](#syntax)
- [Before Arrow](#before-arrow)
- [With Arrow Function](#with-arrow-function)
  - [Example 1](#example-1)
  - [Example 2](#example-2)
- [Implicit Return (Shorter Syntax)](#implicit-return-shorter-syntax)
- [Arrow Function Variants](#arrow-function-variants)
  - [1. No Parameters](#1-no-parameters)
  - [2. Single Parameter (No Parentheses Needed)](#2-single-parameter-no-parentheses-needed)
  - [3. Multiple Parameters (Parentheses Required)](#3-multiple-parameters-parentheses-required)
  - [4. Multi-line Function (With {} and return)](#4-multi-line-function-with--and-return)
- [Key Characteristics of Arrow Functions](#key-characteristics-of-arrow-functions)
- [When to Use Arrow Functions](#when-to-use-arrow-functions)
  - [Callbacks and event listeners](#callbacks-and-event-listeners)
  - [Array methods](#array-methods)
  - [Inside objects (if this is not needed)](#inside-objects-if-this-is-not-needed)
- [When to Avoid Arrow Functions](#when-to-avoid-arrow-functions)
- [What About `this`](#what-about-this)

&nbsp;

&nbsp;

&nbsp;

# Arrow functions (=>)

Arrow functions were introduced in `ES6`.
Arrow functions allows a **short syntax for writing function expressions**.
They are often used for **short functions and callbacks**.

&nbsp;

Arrow functions do not have their own `this`. They are not well suited for defining object methods.
Arrow functions are **not hoisted**. They must be defined before they are used.

&nbsp;

&nbsp;

## Note

We don't need the `function` keyword, the `return` keyword, and the `curly brackets`if the function is a single statement.

```js
let myFunction = (a, b) => a * b;
```

&nbsp;

Using `const` is safer than using `var`, because a function expression is always constant value.

&nbsp;

&nbsp;

# Syntax

```js
const functionName = (parameters) => {
  // Function body
  return someValue; // (optional)
};
```

&nbsp;

Alternative

```js
const functionName = (parameters) => functionality;
```

&nbsp;

&nbsp;

# Before Arrow

```js
var hello = function () {
  return "Hello World!";
};
```

&nbsp;

&nbsp;

# With Arrow Function

## Example 1

```js
var hello = () => {
  return "Hello World!";
};
```

&nbsp;

## Example 2

```js
// ES5
var x = function (x, y) {
  return x * y;
};
// ES6
const x = (x, y) => x * y;
```

&nbsp;

&nbsp;

# Implicit Return (Shorter Syntax)

If the function has only one expression, the `return` keyword and `{}` can be omitted.

```js
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
```

&nbsp;

&nbsp;

# Arrow Function Variants

## 1. No Parameters

```js
const greeting = () => "Good Morning";
console.log(greeting());
```

&nbsp;

## 2. Single Parameter (No Parentheses Needed)

```js
const squareCalculate = (x) => x * x;
console.log(squareCalculate(4));
```

&nbsp;

## 3. Multiple Parameters (Parentheses Required)

```js
const multipleParameter = (a, b, c) =>
  a > b && a > c ? a : b > a && b > c ? b : c;
console.log(multipleParameter(4, 5, 4));
```

&nbsp;

## 4. Multi-line Function (With {} and return)

```js
const subtract = (a, b) => {
  console.log(`Subtracting ${b} from ${a}`);
  return a - b;
};
console.log(subtract(10, 4)); // Output: 6
```

&nbsp;

&nbsp;

# Key Characteristics of Arrow Functions

1. **No Own `this` Context**: Arrow functions inherit this from their surrounding scope.

```js
function Person(name) {
  this.name = name;
  this.sayName = () => {
    console.log(this.name);
  };
}
const person = new Person("Alice");
person.sayName(); // Output: Alice
```

If a regular function were used inside sayName, this would be undefined or refer to the global object.

&nbsp;

2. **Cannot be Used as Constructors**: Arrow functions cannot be used with new.

```js
const User = (name) => {
  this.name = name;
};
const user = new User("John"); // ❌ Error: User is not a constructor
```

&nbsp;

3. **No arguments Object**: Arrow functions do not have their own arguments object.

```js
function normalFunction() {
  console.log(arguments);
}
normalFunction(1, 2, 3); // ✅ Works
const arrowFunction = () => {
  console.log(arguments);
};
arrowFunction(1, 2, 3); // ❌ Error: arguments is not defined
```

Instead, you should use rest parameters:

```js
const arrowFunction = (…args) => {
console.log(args);
};
arrowFunction(1, 2, 3); // Output: [1, 2, 3]
```

&nbsp;

&nbsp;

# When to Use Arrow Functions

### Callbacks and event listeners

```js
document.addEventListener("click", () => console.log("Clicked!"));
```

&nbsp;

### Array methods

```js
const numbers = [1, 2, 3];
const squared = numbers.map((num) => num * num);
console.log(squared); // Output: [1, 4, 9]
```

&nbsp;

### Inside objects (if this is not needed)

&nbsp;

&nbsp;

# When to Avoid Arrow Functions

- You need this dynamically (e.g., inside a method in an object).
- You need a constructor function.
- You need the arguments object.

&nbsp;

&nbsp;

# What About `this`

The handling of `this` is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of `this`.

In regular functions the `this` keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the `this` keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.

&nbsp;
&nbsp;
&nbsp;
