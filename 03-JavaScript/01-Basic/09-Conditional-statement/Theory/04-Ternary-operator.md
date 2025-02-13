# Overview

- [Overview](#overview)
- [Ternary operator](#ternary-operator)
  - [Syntax](#syntax)
  - [Example](#example)

&nbsp;

&nbsp;

# Ternary operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

This operator is frequently used as an alternative to an if...else statement.

&nbsp;

## Syntax

```js
condition ? exp1 : exp2;
```

&nbsp;

## Example

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

&nbsp;

&nbsp;
