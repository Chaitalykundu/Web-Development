# Overview

- [Overview](#overview)
- [Summary](#summary)
- [Type Operators](#type-operators)
- [Types of type operator](#types-of-type-operator)
- [The `typeof` operator](#the-typeof-operator)
  - [Example](#example)
- [Special Cases](#special-cases)
- [The `instanceof` Operator](#the-instanceof-operator)
  - [Example](#example-1)

&nbsp;

&nbsp;

&nbsp;

# Summary

| Operator   | Description                                                |
| ---------- | ---------------------------------------------------------- |
| typeof     | Returns the type of a variable                             |
| instanceof | Returns true if an object is an instance of an object type |
|            |                                                            |

&nbsp;

&nbsp;

# Type Operators

Type operators are used to determine or convert data types in JavaScript

&nbsp;

&nbsp;

# Types of type operator

There are two types of type operator.

1. typeof
2. instanceof

&nbsp;

&nbsp;

# The `typeof` operator

The `typeof` operator returns **a string** indicating the data type of a JavaScript variable.

The parentheses are optional.

&nbsp;

&nbsp;

## Example

```js
const myFun = new Function("5 + 2");
typeof myFun; // returns "function"
const shape = "round";
typeof shape; // returns "string"
```

&nbsp;

In JavaScript there are 5 different data types that can contain values:

- string
- number
- boolean
- object
- function

&nbsp;

There are 6 types of objects:

- Object
- Date
- Array
- String
- Number
- Boolean

&nbsp;

And 2 data types that cannot contain values:

- null
- undefined

&nbsp;

&nbsp;

# Special Cases

- `typeof null` returns "object" (this is a known JavaScript quirk).
- `typeof NaN` returns "number".

&nbsp;

&nbsp;

&nbsp;

# The `instanceof` Operator

The `instanceof` operator checks whether an object is an instance of a specific class or constructor.

The `instanceof` operator returns **true** if an object is an instance of the specified object.

&nbsp;

## Example

```js
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars instanceof Array); // Output : true
console.log(cars instanceof Object); // Output : true
console.log(cars instanceof String); // Output : false
console.log(cars instanceof Number); // Output : false
```
