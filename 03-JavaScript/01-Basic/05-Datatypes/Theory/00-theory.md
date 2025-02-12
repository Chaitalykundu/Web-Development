# Overview

- [Overview](#overview)
- [Datatypes](#datatypes)
- [Types of datatypes](#types-of-datatypes)
- [Primitive datatypes](#primitive-datatypes)
  - [Example](#example)
- [Non-primitives or Object datatypes](#non-primitives-or-object-datatypes)
  - [Example](#example-1)
- [Adding a number and a string](#adding-a-number-and-a-string)
- [JavaScript Types are Dynamic](#javascript-types-are-dynamic)
  - [Example](#example-2)
- [Empty Values](#empty-values)
  - [Example](#example-3)
- [Special Cases](#special-cases)

&nbsp;

&nbsp;

&nbsp;

# Datatypes

Datatypes are **types of data** which are stored in a variable.

&nbsp;

&nbsp;

# Types of datatypes

There are **two** types of datatypes in JavaScript

- Primitive datatypes (NNSSBBU)
- Non-primitive datatypes or Objects

&nbsp;

&nbsp;

# Primitive datatypes

Primitive datatypes are the set of **basic datatypes** in javascript.

These are immutable and stored by value.

&nbsp;

There are **7** types of primitive datatypes

```md
NNBBSSU

N = number
N = null
B = boolean
B = BigInt
S = string
S = symbol
U = undefined
```

&nbsp;

| Data Type | Description                                  | Example               |
| --------- | -------------------------------------------- | --------------------- |
| number    | represents Integers & floating-point numbers | 100, 2.5432           |
| null      | represents null i.e. no value at all         | let y = null;         |
| Boolean   | represents logical / boolean value           | true, false           |
| BigInt    | Large integers beyond Number limits.         | 12345678901234567890n |
| string    | represents sequence of characters            | "Hello"               |
| symbol    | Unique identifiers (used in objects).        | Symbol('id')          |
| undefined | Variable declared but not assigned.          | let x; → undefined    |
|           |                                              |                       |

&nbsp;

&nbsp;

## Example

```js
let str = "Hello"; // String
let num = 42; // Number
let bigNum = 9007199254740991n; // BigInt
let isJSFun = true; // Boolean
let x; // Undefined
let y = null; // Null
let sym = Symbol("id"); // Symbol
```

&nbsp;

&nbsp;

# Non-primitives or Object datatypes

These are mutable and stored by reference.

The Object Datatypes are :

1. An object
2. An array
3. Function
4. A date
5. RegExp
6. Map
7. Set
8. WeakMap & WeakSet (WeakMap, WeakSet)

&nbsp;

| Data Type        | Description                   | Example    |
| ---------------- | ----------------------------- | ---------- |
| Object           | Collection of key-value pairs | {name:     |
| "John", age: 30} |                               |
| Array            | represents group of values    | [1, 2, 3]  |
| Function         | Reusable blocks of code.      | function() |
| {}               |                               |
| date             | represents date               |            |
| RegExp           | represents regular expression |            |
|                  |                               |            |

&nbsp;

If the value is **string** then, We can access the value of object using **[]** or **.**

If the value is **number** then, We can access the value of object using **[]**

&nbsp;

&nbsp;

## Example

```js
let person = { name: "John", age: 30 }; // Object

let numbers = [1, 2, 3, 4]; // Array

function greet() {
  return "Hello!";
} // Function
```

&nbsp;

&nbsp;

# Adding a number and a string

When adding a number and a string, JavaScript will treat **the number as a string**.

JavaScript evaluates expressions from **left to right**. Different sequences can produce different results:

```js
let x = 16 + 4 + "Volvo";
// Result: 20Volvo

let x = "Volvo" + 16 + 4;
// Result: Volvo164
```

&nbsp;

&nbsp;

# JavaScript Types are Dynamic

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

&nbsp;

## Example

```js
let x; // Now x is undefined
x = 5; // Now x is a Number
x = "John"; // Now x is a String
```

&nbsp;

&nbsp;

# Empty Values

The empty value represents the intentional absence of any object value.

It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

An empty string has both a legal value and a type.

&nbsp;

## Example

```js
let car = "";
// The value is "", the typeof is "string"
```

&nbsp;

&nbsp;

# Special Cases

- typeof null → "object" (JavaScript bug)
- typeof NaN → "number"
- typeof [] → "object"
- typeof function() {} → "function"
