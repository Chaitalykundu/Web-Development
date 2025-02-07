# Overview

- [Overview](#overview)

&nbsp;

&nbsp;

&nbsp;

# `let` Keyword

`let` is one of the ways to declare variables in JavaScript

The `let` keyword was introduced in **ES6** (2015).

Variables defined with `let` can not be redeclared.

Variables defined with `let` must be declared before use.

Variables defined with `let` have block scope.

&nbsp;

&nbsp;

# Key Characteristics of let

- **Block-scoped** (limited to {} blocks like if, for, etc.)
- **Cannot be redeclared within the same scope**
- **Can be reassigned** (mutable)
- **Hoisted but not initialized** (Cannot access before declaration)

&nbsp;

&nbsp;

# When to use `let`

If you think the value of the variable **can change**, use `let`.

&nbsp;

## Example

```js
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
```

&nbsp;

&nbsp;

# Block Scope

Before ES6 (2015), JavaScript had **Global Scope** and **Function Scope**.

ES6 introduced two important new JavaScript keywords: `let` and `const`.These two keywords provide **Block Scope** in JavaScript.

Variables declared inside a `{ }` block cannot be accessed from outside the block

&nbsp;

## Example

```js
{
  let x = 2;
}
// x can't be used here
```

&nbsp;

&nbsp;

# Redeclaring Variables

Redeclaring a variable using the `let` in the same block is NOT allowed

&nbsp;

## Example

```js
var x = 2; // Allowed
let x = 3; // Not allowed

{
  let x = 2; // Allowed
  let x = 3; // Not allowed
}

{
  let x = 2; // Allowed
  var x = 3; // Not allowed
}
```

&nbsp;

&nbsp;

Redeclaring a variable using the `let` inside a block will not redeclare the variable outside the block

&nbsp;

## Example

```js
let x = 10;
// Here x is 10

{
  let x = 2;
  // Here x is 2
}

// Here x is 10
```

&nbsp;

&nbsp;

# `let` Hoisting

Variables defined with `let` are also hoisted to the top of the block, but not initialized.

Meaning: Using a `let` variable before it is declared will result in a `ReferenceError`

&nbsp;

## Example

```js
carName = "Saab";
let carName = "Volvo";
```

&nbsp;

&nbsp;
