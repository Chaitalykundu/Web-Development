# Overview

- [Overview](#overview)
- [Scope](#scope)
- [Types of scope](#types-of-scope)
- [Global Scope](#global-scope)
  - [Example](#example)
  - [Problem](#problem)
- [Automatically Global](#automatically-global)
  - [Example](#example-1)
  - [Note](#note)
  - [Problem](#problem-1)
- [Function Scope / Local Scope](#function-scope--local-scope)
  - [Example](#example-2)
- [Block Scope](#block-scope)
  - [Example](#example-3)
  - [Example](#example-4)
- [Lifetime of a variable](#lifetime-of-a-variable)
- [Lexical Scope (Closures)](#lexical-scope-closures)

&nbsp;

&nbsp;

&nbsp;

# Scope

Scope determines the **accessibility** (visibility) of variables, objects, and functions from different parts of the code.

It determines where a variable can be used and how long it exists.

&nbsp;

&nbsp;

# Types of scope

JavaScript has 3 types of scope:

- Global scope
- Function scope
- Block scope

&nbsp;

&nbsp;

# Global Scope

Variables declared **Globally (outside any function or block)** have Global Scope.

Global variables can be **accessed from anywhere** in a JavaScript program.

`var`, `let` and `const` all have Global Scope:

Variables declared with `var`, `let` and `const` are quite similar when declared outside a block.

&nbsp;

&nbsp;

## Example

```js
var x = 2; // Global scope
let y = 3; // Global scope
const z = 4; // Global scope

function showGlobalVariable() {
  // Accessible inside function
  console.log(x);
  console.log(y);
  console.log(z);
}

showGlobalVariable();

// Accessible outside function
console.log(x);
console.log(y);
console.log(z);
```

&nbsp;

## Problem

Variables in the global scope stay in memory throughout the program execution.

If too many global variables exist, they can cause conflicts.

&nbsp;

&nbsp;

# Automatically Global

If we assign a value to a variable that has not been declared, it will automatically become a **GLOBAL** variable.

&nbsp;

## Example

This code example will declare a global variable `carName`, even if the value is assigned inside a function.

```js
function automaticallyGlobal() {
  carName = "Volvo"; // No `var`, `let`, or `const`
}
automaticallyGlobal();
console.log(carName);
```

&nbsp;

&nbsp;

## Note

In "**Strict Mode**", undeclared variables are not automatically global. It will throw an error for undeclared variables.

&nbsp;

&nbsp;

## Problem

- If you forget to declare a variable inside a function, it unintentionally becomes global.

- You may overwrite an existing global variable without realizing it.

&nbsp;

&nbsp;

&nbsp;

# Function Scope / Local Scope

JavaScript has function scope. Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with `var`, `let` and `const` are quite similar when declared inside a function.

&nbsp;

## Example

They all have Function Scope:

```js
function myFunction() {
  var carName = "Volvo"; // Function Scope
}

function myFunction() {
  let carName = "Volvo"; // Function Scope
}

function myFunction() {
  const carName = "Volvo"; // Function Scope
}
```

&nbsp;

&nbsp;

# Block Scope

Before ES6 (2015), JavaScript had only **Global Scope and Function Scope**.

ES6 introduced two important new JavaScript keywords: `let` and `const`.

These two keywords provide **Block Scope** in JavaScript.

Variables declared inside a `{ }` block cannot be accessed from outside the block.

&nbsp;

## Example

```js
{
  let x = 2;
}
// x can NOT be used here
```

&nbsp;

&nbsp;

Variables declared with the `var` keyword can NOT have block scope.

Variables declared inside a `{ }` block can be accessed from outside the block.

&nbsp;

## Example

```js
{
  var x = 2;
}
// x CAN be used here
```

&nbsp;

&nbsp;

# Lifetime of a variable

Local variable's lifetime is **within the block** of its declaration

Global variable's lifetime is **throughout the program**

&nbsp;

&nbsp;

# Lexical Scope (Closures)

Lexical scope means a function can access variables from its parent scope

&nbsp;

```js
function outer() {
  let outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar); // ✅ Accessible (lexical scope)
  }

  inner();
}
outer();
```

The inner function (inner()) can access outerVar from outer(). But outerVar is not accessible outside outer().
