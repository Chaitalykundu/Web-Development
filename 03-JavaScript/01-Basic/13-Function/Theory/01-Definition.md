# Overview

- [Overview](#overview)
- [Function Definition](#function-definition)
- [Ways of Function Definitions](#ways-of-function-definitions)
- [Function Declarations (Named Function)](#function-declarations-named-function)
  - [Key Features](#key-features)
  - [Note](#note)
  - [Syntax](#syntax)
    - [Syntax 1](#syntax-1)
    - [Syntax 2](#syntax-2)
  - [Example](#example)
- [Key Characteristics](#key-characteristics)
- [Function Expressions](#function-expressions)
  - [Syntax](#syntax-1)
- [Example](#example-1)
- [Key Characteristics](#key-characteristics-1)
- [Arrow Functions](#arrow-functions)
  - [Example](#example-2)
- [The Function() Constructor](#the-function-constructor)
  - [Example](#example-3)
- [Function Hoisting](#function-hoisting)
- [Functions Can Be Used as Values](#functions-can-be-used-as-values)
- [Functions are Objects](#functions-are-objects)
  - [Example](#example-4)

&nbsp;

&nbsp;

&nbsp;

# Function Definition

A **function definition** refers to the actual implementation of a function.
It can be created using a function declaration, a function expression, or an arrow function.

&nbsp;

&nbsp;

# Ways of Function Definitions

JavaScript provides multiple ways to define functions, each with its own syntax and use cases.

1. Function Declaration (Named Function)
2. Function Expression (Anonymous Function)
3. Arrow Function (ES6)
4. Immediately Invoked Function Expression (IIFE)
5. Function Constructor (Not Recommended)
6. Methods in Objects (Function as Object Properties)
7. Generator Function (function\*)

&nbsp;

&nbsp;

&nbsp;

# Function Declarations (Named Function)

A **function declaration** is when a function is defined using the `function` keyword with a `name`.
These functions are hoisted, meaning they **can be called before their definition** in the code.
Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

&nbsp;

## Key Features

To define a function, use

- the `function` keyword
- **function name**,
- **a set of parentheses** for parameters(if any) and
- **curly braces** to enclose the function body

&nbsp;

## Note

Function names can contain **letters, digits, underscores, and dollar signs** (same rules as variables).

&nbsp;

&nbsp;

## Syntax

### Syntax 1

Without parameters

```js
function function_name() {
  // code to be executed
}
```

&nbsp;

### Syntax 2

With parameters

```js
function function_name(parameter 1, parameter 2,…) {
// code to be executed
}
```

> Semicolons are used to separate executable JavaScript statements. Since a function declaration is not an
> executable statement, it is not common to end it with a semicolon.

&nbsp;

&nbsp;

## Example

Adding two numbers

```js
function add(a, b) {
  return a + b;
}
```

&nbsp;

&nbsp;

# Key Characteristics

1. **<u>Hoisting</u>**: Function declarations are hoisted, meaning they can be called before they are defined in the code.

```js
sayHello(); // ✅ Works due to hoisting
function sayHello() {
  console.log("Hello!");
}
```

2. **<u>Named Function</u>**: The function has an explicit name, making debugging easier.

3. **<u>Global or Local Scope</u>**: Functions can be defined globally or within another function (nested functions).

&nbsp;

&nbsp;

&nbsp;

# Function Expressions

A function expression assigns a function to a variable.
These are not hoisted, meaning they cannot be called before they are defined.

&nbsp;

&nbsp;

## Syntax

```js
const expression_name = function (parameters) {
  // Function body
  return someValue; // (optional)
};
```

&nbsp;

&nbsp;

# Example

This assigns a function to a variable

```js
const x = function (a, b) {
  return a * b;
};
```

&nbsp;

After a function expression has been stored in a variable, the variable can be used as a function:

```js
const x = function (a, b) {
  return a * b;
};
let z = x(4, 3);
```

&nbsp;

The function above is actually an **anonymous function** (a function without a name).
Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

&nbsp;

&nbsp;

# Key Characteristics

1. **<u>Not Hoisted</u>**: Function expressions are not hoisted, so they must be defined before use.

```js
console.log(sayHello()); // ❌ Error: Cannot access 'sayHello' before initialization
const sayHello = function () {
  return "Hello!";
};
```

2. **<u>Anonymous Functions</u>**: The function does not require a name (though it can have one).

3. **<u>Named Function Expressions</u>**: You can also use a named function inside a function expression.

```js
const factorial = function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5)); // Output: 120
```

4. **<u>Useful for Callbacks</u>**: Function expressions are commonly used as callback functions.

```js
setTimeout(function () {
  console.log("This runs after 2 seconds.");
}, 2000);
```

&nbsp;

&nbsp;

&nbsp;

# Arrow Functions

## Example

```js
// ES5
var x = function (x, y) {
  return x * y;
};
// ES6
const x = (x, y) => x * y;
```

&nbsp;

```js
const x = (x, y) => {
  return x * y;
};
```

&nbsp;

Arrow functions are not supported in IE11 or earlier.

&nbsp;

&nbsp;

&nbsp;

# The Function() Constructor

Functions can also be defined with a **built-in** JavaScript function constructor called `Function()`. This is called `Function() Constructor`

&nbsp;

## Example

```js
const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
```

&nbsp;

> Most of the time, you can avoid using the `new` keyword in JavaScript.

&nbsp;

&nbsp;

# Function Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
Hoisting applies to variable declarations and to function declarations.
Because of this, JavaScript functions can be called before they are declared:

```js
myFunction(5);
function myFunction(y) {
  return y * y;
}
```

Functions defined using an expression are not hoisted.

&nbsp;

&nbsp;

# Functions Can Be Used as Values

JavaScript functions can be used as values:

```js
function myFunction(a, b) {
  return a * b;
}
let x = myFunction(4, 3);
```

&nbsp;
JavaScript functions can be used in expressions:

```js
function myFunction(a, b) {
  return a * b;
}
let x = myFunction(4, 3) * 2;
```

&nbsp;

&nbsp;

# Functions are Objects

The typeof operator in JavaScript returns "function" for functions.

But, JavaScript functions can best be described as objects.

JavaScript functions have both properties and methods.

The `arguments.length` property returns the number of arguments received when the function was invoked:

```js
function myFunction(a, b) {
  return arguments.length;
}
```

&nbsp;

&nbsp;

The toString() method returns the function as a string:

## Example

```js
function myFunction(a, b) {
  return a * b;
}
let text = myFunction.toString();
```

&nbsp;

&nbsp;

A function defined as the property of an object, is called a method to the object.

A function designed to create new objects, is called an object constructor.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
