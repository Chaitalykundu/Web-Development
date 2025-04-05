# Overview

- [Overview](#overview)
- [Hoisting Summary](#hoisting-summary)
- [Hoisting](#hoisting)
  - [Note](#note)
- [Hoisting with `var`](#hoisting-with-var)
  - [Key point](#key-point)
- [Example](#example)
- [Hoisting with `let` and `const`](#hoisting-with-let-and-const)
  - [Key Point](#key-point-1)
- [Example](#example-1)
- [🚨 Real-World Bug Due to Hoisting](#-real-world-bug-due-to-hoisting)
  - [Buggy Code (Due to Hoisting)](#buggy-code-due-to-hoisting)
  - [Why Does This Bug Happen?](#why-does-this-bug-happen)
  - [Corrected Code (Using Function Declaration)](#corrected-code-using-function-declaration)

&nbsp;

&nbsp;

&nbsp;

# Hoisting Summary

| Feature                         | var                      | let & const        | Function Declaration | Function Expression (var) |
| ------------------------------- | ------------------------ | ------------------ | -------------------- | ------------------------- |
| Hoisted?                        | ✅ Yes                   | ✅ Yes             | ✅ Yes               | ✅ Yes                    |
| Initialized?                    | ❌ undefined             | ❌ TDZ (No Access) | ✅ Fully Hoisted     | ❌ undefined              |
| Can be used before declaration? | ✅ But returns undefined | ❌ ReferenceError  | ✅ Yes               | ❌ TypeError              |
|                                 |                          |                    |                      |                           |

&nbsp;

&nbsp;

&nbsp;

# Hoisting

Hoisting is JavaScript's behavior of **moving variable and function declarations to the top** of their scope before execution.

This means you can use variables and functions before they are declared

&nbsp;

## Note

Only the declarations are hoisted, not the initializations (assignments).

&nbsp;

&nbsp;

# Hoisting with `var`

When a variable is declared with `var`, JavaScript hoists the declaration, but not the assigned value.

&nbsp;

&nbsp;

## Key point

`var` variables are hoisted but initialized with `undefined`.

&nbsp;

&nbsp;

# Example

```js
console.log(a); // Output: undefined (Hoisted but not initialized)

var a = 10;

console.log(a); // Output: 10
```

&nbsp;

&nbsp;

&nbsp;

# Hoisting with `let` and `const`

Variables declared with `let` and `const` are hoisted but NOT initialized. Accessing them before declaration results in a `ReferenceError`.

&nbsp;

&nbsp;

## Key Point

`let` and `const` exist in a **Temporal Dead Zone (TDZ)** from the start of execution until they are initialized

&nbsp;

&nbsp;

# Example

```js
console.log(b); //  ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); //  Output: 20
```

&nbsp;

&nbsp;

# 🚨 Real-World Bug Due to Hoisting

Imagine you're building a **simple login system** where a user enters their credentials, and you validate them. However, due to hoisting, a bug appears that makes validation fail unexpectedly.

&nbsp;

### Buggy Code (Due to Hoisting)

```js
validateUser("admin", "12345"); // ❌ TypeError: validateUser is not a function

var validateUser = function (username, password) {
  if (username === "admin" && password === "12345") {
    console.log("✅ Login Successful!");
  } else {
    console.log("❌ Invalid Credentials");
  }
};
```

&nbsp;

## Why Does This Bug Happen?

- Function expressions (assigned to var) are NOT hoisted like function declarations.
- Only var validateUser; is hoisted, but the function is assigned later.
- When validateUser("admin", "12345") runs, validateUser is still undefined, causing a TypeError.

&nbsp;

&nbsp;

## Corrected Code (Using Function Declaration)

```js
validateUser("admin", "12345"); // ✅ Output: Login Successful!

function validateUser(username, password) {
  if (username === "admin" && password === "12345") {
    console.log("✅ Login Successful!");
  } else {
    console.log("❌ Invalid Credentials");
  }
}
```

&nbsp;

&nbsp;

&nbsp;
