# Overview

- [Overview](#overview)
- [Array](#array)
- [Characteristics of array](#characteristics-of-array)
- [Syntax](#syntax)
- [Why Use Arrays?](#why-use-arrays)
- [Converting an Array to a String](#converting-an-array-to-a-string)
  - [Example](#example)
- [Arrays are Objects](#arrays-are-objects)
- [The Difference Between Arrays and Objects](#the-difference-between-arrays-and-objects)
- [When to Use `Arrays`. When to use `Objects`](#when-to-use-arrays-when-to-use-objects)
- [Associative Arrays](#associative-arrays)
  - [Example](#example-1)
- [How to Recognize an Array](#how-to-recognize-an-array)
  - [Solution 1](#solution-1)
  - [Solution 2](#solution-2)

&nbsp;

&nbsp;

&nbsp;

# Array

An array is a special type of object used to store multiple values in a single variable.

```js
const cars = ["Saab", "Volvo", "BMW"];
const multiple = [3, "cow", false]; // it can hold different datatypes
```

&nbsp;

&nbsp;

# Characteristics of array

- **Ordered Collection**: Elements maintain the order in which they are inserted.
- **Zero-based Indexing**: The first element is accessed with index 0.
- **Flexible Types**: You can store different types of data in the same array (numbers, strings, objects, etc.).
- **Dynamically Sized**: Size of array is dynamic
- **Mutable**: Arrays are mutable. Means it can be changed.

&nbsp;

&nbsp;

# Syntax

Using Array Literals (most common way)

```js
let array_name = [value1, value2,...];
```

&nbsp;

&nbsp;

# Why Use Arrays?

An array can hold many values under a single variable, and you can access the values by referring to an index number.

&nbsp;

&nbsp;

# Converting an Array to a String

The JavaScript method `toString()` converts an array to a string of (comma separated) array values.

&nbsp;

## Example

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
// or
console.log(fruits.toString());
```

&nbsp;

&nbsp;

# Arrays are Objects

Arrays are the **_special type of objects_**. The `typeof` operator in JavaScript returns **"object"** for arrays.

But, JavaScript arrays are best described as arrays.

&nbsp;

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

```js
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

&nbsp;

&nbsp;

# The Difference Between Arrays and Objects

In JavaScript, `arrays` use **numbered indexes**.

In JavaScript, `objects` use **named indexes**.

Arrays are a special kind of objects, with numbered indexes.

&nbsp;

&nbsp;

# When to Use `Arrays`. When to use `Objects`

- JavaScript does not support associative arrays.
- You should use `objects` when you want the element names to be **strings** (text).
- You should use `arrays` when you want the element names to be **numbers**.

&nbsp;

&nbsp;

# Associative Arrays

Many programming languages support arrays with named indexes.

Arrays with named indexes are called `associative arrays` (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.

&nbsp;

## Example

```js
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length; // Will return 3
person[0]; // Will return "John"
```

&nbsp;

&nbsp;

# How to Recognize an Array

```js
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits; // object
```

The `typeof` operator returns `object` because a **JavaScript array is an object**. Then how do we know if a variable is an array?

&nbsp;

## Solution 1

To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method `Array.isArray()`:

```js
Array.isArray(fruits); // true
```

&nbsp;

## Solution 2

The `instanceof` operator returns true if an object is created by a given constructor:

```js
fruits instanceof Array; // true
```
