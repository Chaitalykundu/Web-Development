# Overview

- [Overview](#overview)

&nbsp;

&nbsp;

&nbsp;

# `var` Keyword

`var` is one of the ways to declare variables in JavaScript

The `var` keyword is used in all JavaScript code **before ES6** (from 1995 to 2015).

Variables defined with `var` can be redeclared.

Variables declared with the `var` have **global scope**.

&nbsp;

&nbsp;

## Note

Variables declared inside a `{ }` block can be accessed from outside the block.

&nbsp;

&nbsp;

# Example

```js
{
  var x = 2;
}
// "x" can be used here
```

&nbsp;

&nbsp;

# Key Characteristics of var

- **Function-scoped** (not block-scoped)
- **Can be redeclared and reassigned**
- **Hoisted** (moved to the top but initialized as undefined)
- **Creates properties on the window object in browsers**

&nbsp;

&nbsp;

# When to Use JavaScript var

If we want your code to run in **older browsers**, we must use `var`.

&nbsp;

&nbsp;

# Redeclaring Variables

Redeclaring a variable using the `var` in the same block is allowed:

&nbsp;

## Example

```js
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
```

&nbsp;

Redeclaring a variable using the `var` keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block

&nbsp;

## Example

```js
var x = 10;
// Here x is 10

{

  var x = 2;
  // Here x is 2
}

// Here x is 2
```

&nbsp;

&nbsp;

# `var` Hoisting

Variables defined with `var` are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared.

&nbsp;

## Example

This is OK:

```js
carName = "Volvo";
var carName;
```

&nbsp;
