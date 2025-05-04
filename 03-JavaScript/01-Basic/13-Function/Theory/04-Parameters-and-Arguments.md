# Overview

- [Overview](#overview)
- [Summary](#summary)
- [Parameters](#parameters)
- [Arguments](#arguments)
- [Syntax](#syntax)
- [Example](#example)
- [Parameter Rules](#parameter-rules)
- [Types of parameters](#types-of-parameters)
- [Default Parameters](#default-parameters)
  - [Example](#example-1)
  - [Behind the Scenes](#behind-the-scenes)
- [Rest Parameter (…args)](#rest-parameter-args)
  - [Syntax](#syntax-1)
  - [Example](#example-2)
- [The Arguments Object (Regular Functions Only)](#the-arguments-object-regular-functions-only)
- [Arguments are Passed by Value](#arguments-are-passed-by-value)
- [Objects are Passed by Reference](#objects-are-passed-by-reference)

&nbsp;

&nbsp;

&nbsp;

# Summary

| Term      | Where It Appears     | Purpose                                       | Example              |
| --------- | -------------------- | --------------------------------------------- | -------------------- |
| Parameter | Function Definition  | Acts as a variable for input                  | function greet(name) |
| Argument  | Function Call        | Actual value passed to a function             | greet("Alice")       |
| Return    | Inside Function Body | Sends result back to where function is called | return a + b;        |
|           |                      |                                               |                      |

&nbsp;

&nbsp;

&nbsp;

# Parameters

The Parameters are the **variables** that are defined when the function is declared.

Function parameters are the names listed in the function definition.

A function can have zero, one, or multiple parameters.

&nbsp;

&nbsp;

# Arguments

Argument are the values that are declared within a function when the function is called.

Function arguments are the real values passed to (and received by) the function

&nbsp;

A JavaScript function does not perform any checking on parameter values (arguments).

&nbsp;

&nbsp;

# Syntax

```js
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}

// Call the function
functionName(argument1, argument2, argument3);
```

&nbsp;

&nbsp;

# Example

```js
function addition(a, b) {
  return a + b;
}
console.log(addition(2, 3));
```

&nbsp;

Here,

- a, b are parameters.
- 2, 3 are arguments

&nbsp;

&nbsp;

# Parameter Rules

- JavaScript `function` definitions do not specify data types for parameters.

- JavaScript `functions` do not perform type checking on the passed arguments.

- JavaScript `functions` do not check the number of arguments received.

&nbsp;

&nbsp;

# Types of parameters

| Parameter Type                 | Syntax/Use               | Example Purpose                       |
| ------------------------------ | ------------------------ | ------------------------------------- |
| Required Parameter             | function(a, b)           | Must be passed                        |
| Default Parameter              | function(a = 10)         | Assigns default if no argument        |
| Rest Parameter                 | function(...args)        | Collects remaining args in array      |
| Optional Parameter             | if (param !== undefined) | Logic decides if param is optional    |
| Named Parameter (Destructured) | function({a, b})         | Cleaner with many/optional parameters |

&nbsp;

&nbsp;

# Default Parameters

A default parameter allows you to assign a default value to a function parameter if no argument is passed for that parameter, or if it is explicitly `undefined`

If a function is called with **missing arguments** (argument is not provided), the missing values are set to undefined.

Using default parameters, we can set a **fallback** value.

Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter.

ES6 allows function parameters to have default values.

&nbsp;

&nbsp;

## Example

If y is not passed or undefined, then y = 10.

```js
function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);
```

&nbsp;

## Behind the Scenes

```javascript
function myFunction(x, y = 10) { ... }
```

is equivalent to:

```js
Copy;
Edit;
function myFunction(x, y = 10) {
  if (y === undefined) {
    y = 10;
  }
}
```

&nbsp;

&nbsp;

# Rest Parameter (…args)

The rest parameter `(...)` allows a function to accept an indefinite number of arguments as an array.

It collects the “rest” of the arguments not explicitly named.

If we don't know how many arguments will be passed, we use the `rest parameter (…)` to gather them into an array.

&nbsp;

## Syntax

```js
function func(...rest) {
  // rest is an array of all remaining arguments
}
```

&nbsp;

## Example

```js
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```

&nbsp;

&nbsp;

# The Arguments Object (Regular Functions Only)

JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the function was called (invoked).

This way you can simply use a function to find (for instance) the highest value in a list of numbers:

```js
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
```

&nbsp;

Or create a function to sum all input values:

```js
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
```

If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

&nbsp;

&nbsp;

# Arguments are Passed by Value

The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.

&nbsp;

&nbsp;

# Objects are Passed by Reference

In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.

Changes to object properties are visible (reflected) outside the function.

&nbsp;
