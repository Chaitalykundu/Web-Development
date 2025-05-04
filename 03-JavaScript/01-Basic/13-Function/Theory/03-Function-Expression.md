# Overview

- [Overview](#overview)
- [Summary](#summary)
- [Function Expressions](#function-expressions)
- [Syntax](#syntax)
- [Example](#example)
- [Structure](#structure)
- [Why use Function Expressions?](#why-use-function-expressions)
- [When do we use Function Expression](#when-do-we-use-function-expression)
- [Key Characteristics / features](#key-characteristics--features)
- [Named vs Anonymous Function Expressions](#named-vs-anonymous-function-expressions)
  - [Anonymous Function Expression](#anonymous-function-expression)
  - [Named Function Expression](#named-function-expression)

&nbsp;

&nbsp;

&nbsp;

# Summary

| Feature                | Function Expression |
| ---------------------- | ------------------- |
| Assigned to a variable | Yes                 |
| Can be anonymous       | Yes                 |
| Hoisted                | No                  |
| Created                | At runtime          |
| Can be passed around   | Yes                 |
| Supports closures      | Yes                 |
| Used for callbacks     | Very common         |
|                        |                     |

&nbsp;

&nbsp;

&nbsp;

# Function Expressions

A Function Expression is when you create a function and assign it to a variable.

These are not hoisted, meaning they cannot be called before they are defined.

&nbsp;

&nbsp;

# Syntax

With named function

```js
let variableName = function (parameters) {
  // function body
  return someValue; // (optional)
};
```

&nbsp;

anonymous / without named function

```js
let variableName = function (parameters) {
  // function body
  return someVal  ue; // (optional)
};
```

- `variableName` → the name of the variable storing the function.
- `parameters` → input values the function can accept.

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
let z = x(4, 3); // call the function
```

&nbsp;

The function above is actually an **anonymous function** (a function without a name).

Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

&nbsp;

&nbsp;

# Structure

- Starts with variable_name
- `function`. keyword
- a **name** (optional)
- Can have zero, one, or multiple parameters.
- Contains a block of code inside `{}`.
- Optionally uses a return statement to give back a value.
- Semicolons are used to separate executable JavaScript statements.

&nbsp;

&nbsp;

# Why use Function Expressions?

- Flexibility: You can pass them around like data.
- Control over when they exist (created at runtime).
- Use them for callbacks (like in `setTimeout`, `map`, `filter`).
- Useful for functional programming styles.

&nbsp;

&nbsp;

# When do we use Function Expression

1. A function expression is often used when you need an anonymous function to pass around as a callback or event handler.
2. Returning Functions from Other Functions
3. Immediately Invoked Function Expressions (IIFE)
4. Function expressions, especially arrow functions, are widely used in asynchronous programming for promises and callbacks.
   ```js
   fetch("url")
     .then(function (response) {
       return response.json();
     })
     .then(function (data) {
       console.log(data);
     })
     .catch(function (error) {
       console.log("Error:", error);
     });
   ```
5. Creating Closures: Function expressions allow you to create closures, where an inner function has access to the variables of the outer function.

&nbsp;

&nbsp;

# Key Characteristics / features

1. Assigned to a Variable
2. Can Be Anonymous or Named
3. Not Hoisted
4. Created at Runtime
5. Can Be Passed Around
6. Can Be Used Immediately (IIFE)
7. Supports Closures
8. Use in Callbacks and Event Handlers

&nbsp;

&nbsp;

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

# Named vs Anonymous Function Expressions

## Anonymous Function Expression

(Most common — no name inside)

```javascript
const sayHi = function () {
  console.log("Hi there!");
};
```

&nbsp;

## Named Function Expression

(You give the function itself a name, useful for debugging)

```javascript
const sayHello = function greeting() {
  console.log("Hello!");
};
```

You still call it using the variable name (sayHello()), not the function name (greeting()).

If an error happens, the browser console will show greeting in stack traces — easier to debug.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
