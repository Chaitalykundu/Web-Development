# Overview

- Datatypes
- Types of datatypes
- Primitive datatypes
- Non-primitives or Object datatypes
- Adding a number and a string
- JavaScript Types are Dynamic
- Empty Value

&nbsp;

&nbsp;

&nbsp;

# Datatypes

Datatypes are **types of data** which are stored in a variable.

&nbsp;

## Types of datatypes

There are **two** types of datatypes in JavaScript

- Primitive datatypes (NNSSBBU)
- Non-primitive datatypes or Objects

&nbsp;

&nbsp;

# Primitive datatypes

Primitive datatypes are the set of **basic datatypes** in javascript.

&nbsp;

There are **7** types of datatypes

```md
NNSSBBU

N = number
N = null
S = string
S = symbol
B = boolean
B = BigInt
U = undefined
```

&nbsp;

| Data Type | Description                                    |
| --------- | ---------------------------------------------- |
| number    | represents numeric values e.g. 100             |
| null      | represents null i.e. no value at all           |
| string    | represents sequence of characters e.g. "hello" |
| symbol    |                                                |
| Boolean   | represents boolean value either false or true  |
| BigInt    |                                                |
| undefined | represents undefined value                     |
|           |                                                |

&nbsp;

&nbsp;

# Non-primitives or Object datatypes

The Object Datatypes are :

1. An object
2. An array
3. A date
4. RegExp

&nbsp;

| Data Type | Description                                             |
| --------- | ------------------------------------------------------- |
| Object    | represents instance through which we can access members |
| Array     | represents group of similar values                      |
| date      | represents date                                         |
| RegExp    | represents regular expression                           |
|           |                                                         |

&nbsp;

If the value is **string** then, We can access the value of object using **[]** or **.**

If the value is **number** then, We can access the value of object using **[]**

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
// The value is "", the typeof is "string"

let car = "";
```

&nbsp;
