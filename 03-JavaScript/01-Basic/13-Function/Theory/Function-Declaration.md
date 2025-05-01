# Overview

- [Overview](#overview)
- [Summary](#summary)
- [Function Declaration](#function-declaration)
- [Syntax](#syntax)
  - [Syntax 1](#syntax-1)
  - [Syntax 2](#syntax-2)
    - [Important points](#important-points)
- [Example](#example)
- [Define a function](#define-a-function)
  - [Note](#note)
- [How Hoisting Works](#how-hoisting-works)
- [When to use Function Declarations?](#when-to-use-function-declarations)
- [Key Characteristics](#key-characteristics)

&nbsp;

&nbsp;

&nbsp;

# Summary

| Property                 | Function Declaration            |
| ------------------------ | ------------------------------- |
| Starts with              | function keyword                |
| Has a name               | Always                          |
| Hoisted                  | Yes                             |
| Called before definition | Yes                             |
| Used for                 | General purpose, reusable logic |
|                          |                                 |

&nbsp;

&nbsp;

&nbsp;

# Function Declaration

**Function Declaration** is the traditional way of creating a function in JavaScript using the `function` keyword with a **name**.

&nbsp;

It creates a **named function** that can be called anywhere in the scope, even before the function is written, because of a concept called hoisting.

Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

&nbsp;

&nbsp;

# Syntax

## Syntax 1

Without parameters

```js
function function_name() {
  // code to be executed
}
```

&nbsp;

## Syntax 2

With parameters

```js
function function_name(parameter 1, parameter 2,…) {
// code to be executed
}
```

&nbsp;

&nbsp;

### Important points

- Starts with `function`.
- Must have a **name**.
- Can have zero, one, or multiple parameters.
- Contains a block of code inside `{}`.
- Optionally uses a return statement to give back a value.
- Semicolons are used to separate executable JavaScript statements. Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

&nbsp;

&nbsp;

# Example

Without parameter

```js
function greet() {
  console.log("Hello, World!");
}
```

&nbsp;

Adding two numbers

```js
function add(a, b) {
  return a + b;
}
```

&nbsp;

&nbsp;

# Define a function

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

# How Hoisting Works

function declarations are hoisted, meaning they **can be called before their definition** in the code.

When JavaScript reads your code, it first scans and registers all function declarations.

This is why you can call the function before its actual definition.

&nbsp;

&nbsp;

# When to use Function Declarations?

- When the function needs to be available anywhere in the file.
- When defining utility/helper functions (like add(), subtract(), fetchData(), etc.).
- When you want cleaner, more readable code structure.

&nbsp;

&nbsp;

# Key Characteristics

| Feature  | Details                                              |
| -------- | ---------------------------------------------------- |
| Named    | Always has a name.                                   |
| Hoisted  | Moves to the top of the code during compilation.     |
| Scope    | Can be used inside global or block scopes.           |
| Reusable | Can call it multiple times with different arguments. |
|          |                                                      |

&nbsp;

&nbsp;

1. **<u>Hoisting</u>**: Function declarations are hoisted, meaning they can be called before they are defined in the code.

```js
sayHello(); // ✅ Works due to hoisting
function sayHello() {
  console.log("Hello!");
}
```

2. **<u>Named Function</u>**: The function has an explicit name, making debugging easier.

3. **<u>Global or Local Scope</u>**: Functions can be defined globally or within another function (nested functions).
