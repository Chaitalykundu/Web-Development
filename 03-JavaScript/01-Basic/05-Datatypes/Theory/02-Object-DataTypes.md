# Overview

- [Overview](#overview)
- [Non-Primitive / Object / Reference datatypes](#non-primitive--object--reference-datatypes)
- [Object](#object)
  - [Example](#example)
  - [Accessing Object Properties](#accessing-object-properties)
  - [Modifying an object](#modifying-an-object)
- [Array](#array)
  - [Example](#example-1)
  - [Array Methods](#array-methods)
  - [Example](#example-2)
  - [Array Methods](#array-methods-1)
- [Function](#function)
  - [Example](#example-3)
- [Date (object)](#date-object)
  - [Example](#example-4)
- [Regular Expressions (RegExp)](#regular-expressions-regexp)
  - [Example](#example-5)
- [Map](#map)
  - [Example](#example-6)
- [Set](#set)
- [WeakMap and WeakSet](#weakmap-and-weakset)

&nbsp;

&nbsp;

&nbsp;

# Non-Primitive / Object / Reference datatypes

Non-primitive data types are mutable and stored by reference in memory.

Unlike primitive data types, which are copied by value, non-primitive data types store a reference to the actual memory location.

&nbsp;

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

| Type                                 | typeof return value                  |
| ------------------------------------ | ------------------------------------ |
| object                               | "object"                             |
| array                                | "object"                             |
| function                             | "function" ( this is objectfunction) |
| An object                            |                                      |
| An array                             |                                      |
| Function                             |                                      |
| A date                               |                                      |
| RegExp                               |                                      |
| Map                                  |                                      |
| Set                                  |                                      |
| WeakMap & WeakSet (WeakMap, WeakSet) |                                      |
|                                      |                                      |

&nbsp;

&nbsp;

# Object

Objects are collections of key-value pairs, where the keys are strings (or Symbols) and the values can be of any type.

Represents a collection of key-value pairs.

&nbsp;

## Example

```js
const car = { type: "Fiat", model: "500", color: "white" };
```

&nbsp;

## Accessing Object Properties

- Dot notation: person.name
- Bracket notation: person["name"]

&nbsp;

## Modifying an object

```js
person.age = 26; // Modify an existing property
person.city = "New York"; // Add a new property
delete person.isDeveloper; // Remove a property

console.log(person);
```

&nbsp;

&nbsp;

# Array

Arrays are ordered collections of values, indexed starting from 0.

&nbsp;

## Example

```js
const cars = ["Saab", "Volvo", "BMW"];
```

&nbsp;

## Array Methods

```js
fruits.push("Mango"); // Add at the end
fruits.pop(); // Remove last element
fruits.unshift("Grapes"); // Add at the beginning
fruits.shift(); // Remove first element
console.log(fruits);
```

&nbsp;

&nbsp;

Arrays are ordered collections of values, indexed starting from 0.

&nbsp;

## Example

```js
const cars = ["Saab", "Volvo", "BMW"];
```

&nbsp;

## Array Methods

```js
fruits.push("Mango"); // Add at the end
fruits.pop(); // Remove last element
fruits.unshift("Grapes"); // Add at the beginning
fruits.shift(); // Remove first element
console.log(fruits);
```

&nbsp;

&nbsp;

# Function

Functions are first-class objects in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

A block of code designed to perform a task.

&nbsp;

## Example

```js
function findname() {}
```

&nbsp;

&nbsp;

# Date (object)

Represents dates and times.

&nbsp;

## Example

```js
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time
console.log(currentDate.getFullYear()); // Get year
console.log(currentDate.getMonth() + 1); // Get month (0-based)
console.log(currentDate.getDate()); // Get day of the month
```

&nbsp;

&nbsp;

# Regular Expressions (RegExp)

Regular expressions are objects used for pattern matching in strings.

&nbsp;

## Example

```js
let pattern = /hello/i; // Case-insensitive search for "hello"
console.log(pattern.test("Hello World")); // Output: true
```

&nbsp;

&nbsp;

# Map

A Map is a collection of key-value pairs where keys can be any type (including objects).

&nbsp;

## Example

```js
let map = new Map();
map.set("key", "value");
console.log(map);
```

&nbsp;

&nbsp;

# Set

A collection of unique values.

```js
let set = new Set([1, 2, 3, 3]);
console.log(set); // Output : Set(3) { 1, 2, 3 }
```

&nbsp;

&nbsp;

# WeakMap and WeakSet

Similar to `Map` and `Set` but with weakly held references for keys/values
