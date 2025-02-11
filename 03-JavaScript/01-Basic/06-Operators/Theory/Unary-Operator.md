# Overview

- [Overview](#overview)
- [Unary operators](#unary-operators)
- [Types of Unary operators](#types-of-unary-operators)
- [Increment Operator (++)](#increment-operator-)
  - [Pre-Increment (++variable)](#pre-increment-variable)
    - [Example](#example)
  - [Post-Increment (variable++)](#post-increment-variable)
    - [Example](#example-1)
- [Decrement Operator (--)](#decrement-operator---)
  - [Pre-Decrement (--variable)](#pre-decrement---variable)
    - [Example](#example-2)
  - [Post-Decrement (variable--)](#post-decrement-variable--)
    - [Example](#example-3)
- [Increment and decrement operators](#increment-and-decrement-operators)
- [Use Cases](#use-cases)

&nbsp;

&nbsp;

&nbsp;

# Unary operators

Unary operators used to increase or decrease a variable's value by 1.

&nbsp;

&nbsp;

# Types of Unary operators

There are two types of Unary operators

1. Increment Operator
   - Pre Increment operator
   - Post Increment operator
2. Decrement Operator
   - Pre Decrement operator
   - Post Decrement operator

&nbsp;

&nbsp;

# Increment Operator (++)

Increases a variable's value by 1.

&nbsp;

## Pre-Increment (++variable)

The value is incremented before it's used in an expression.

### Example

```js
let a = 5;
let b = ++a; // a is incremented first, then assigned to b
console.log(a); // Output: 6
console.log(b); // Output: 6
```

&nbsp;

## Post-Increment (variable++)

The value is used first, then incremented.

### Example

```js
let a = 5;
let b = a++; // a is assigned to b first, then incremented
console.log(a); // Output: 6
console.log(b); // Output: 5
```

&nbsp;
&nbsp;

# Decrement Operator (--)

Decreases a variable's value by 1.

&nbsp;

## Pre-Decrement (--variable)

The value is decremented before being used.

### Example

```js
let a = 5;
let b = --a; // a is decremented first, then assigned to b
console.log(a); // Output: 4
console.log(b); // Output: 4
```

&nbsp;

## Post-Decrement (variable--)

The value is used first, then decremented.

### Example

```js
let a = 5;
let b = a--; // a is assigned to b first, then decremented
console.log(a); // Output: 4
console.log(b); // Output: 5
```

&nbsp;

&nbsp;

# Increment and decrement operators

| Type           | Behavior                            | Example (Initial a = 5) | Result (b and a) |
| -------------- | ----------------------------------- | ----------------------- | ---------------- |
| Pre-Increment  | Increment first, then use the value | b = ++a;                | a = 6, b = 6     |
| Post-Increment | Use the value first, then increment | b = a++;                | a = 6, b = 5     |
| Pre-Decrement  | Decrement first, then use the value | b = --a;                | a = 4, b = 4     |
| Post-Decrement | Use the value first, then decrement | b = a--;                | a = 4, b = 5     |
|                |                                     |                         |                  |

&nbsp;

&nbsp;

# Use Cases

- Loops (e.g., for loops)
- Iterating through arrays
- Optimizing arithmetic operations
