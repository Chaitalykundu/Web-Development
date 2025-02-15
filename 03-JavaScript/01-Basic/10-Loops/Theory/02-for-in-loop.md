# Overview

- [Overview](#overview)
- [for in loop](#for-in-loop)
- [Syntax :](#syntax-)
- [Example](#example)
  - [Example Explained](#example-explained)
- [For In Over Arrays](#for-in-over-arrays)
  - [Syntax](#syntax)
  - [Example](#example-1)
  - [Note :](#note-)
- [Array.forEach()](#arrayforeach)
  - [Example](#example-2)
  - [Example](#example-3)

&nbsp;

&nbsp;

&nbsp;

# for in loop

The JavaScript `for in` loop loops through the properties of an Object.

We use `for-in` loop in object and array

&nbsp;

# Syntax :

```js
for (let key in object_name) {
  // code block to be executed
}
```

&nbsp;

# Example

```js
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}
```

&nbsp;

## Example Explained

The `for in` loop iterates over a person object

Each iteration returns a key (x)

The key is used to access the value of the key

The value of the key is person[x]

&nbsp;

&nbsp;

# For In Over Arrays

The JavaScript `for in` statement can also loop over the properties of an Array:

## Syntax

```js
for (variable in array) {
  code;
}
```

&nbsp;

## Example

```js
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

## Note :

Do not use `for in` over an Array if the index `order` is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

&nbsp;

&nbsp;

# Array.forEach()

The `forEach()` method calls a function (a callback function) once for each array element.

## Example

```js
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
```

Note that the function takes 3 arguments:

- The item value
- The item index
- The array itself

&nbsp;

## Example

```js
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
