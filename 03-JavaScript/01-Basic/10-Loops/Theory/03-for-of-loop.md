# Overview

- [Overview](#overview)
- [for.....of loop](#forof-loop)
- [Syntax](#syntax)
- [Example](#example)
  - [Looping over a Array](#looping-over-a-array)
  - [Looping over a String](#looping-over-a-string)
- [When to Use for...of?](#when-to-use-forof)

# for.....of loop

The JavaScript `for.....of` loop loops through the **values of an iterable object** (like arrays, strings, maps, sets, and more).

It allows you to **directly access values** rather than indices or property names.

&nbsp;

&nbsp;

# Syntax

```js
for (let item of iterable) {
  // Code to execute
}
```

- item - Represents the value of each element.
- iterable - An object that has iterable properties (Ex : arrays, strings, maps, sets).

&nbsp;

&nbsp;

# Example

## Looping over a Array

```js
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x;
}
```

&nbsp;

&nbsp;

## Looping over a String

```js
let language = "JavaScript";
for (let char of language) {
  console.log(char);
}
```

&nbsp;

&nbsp;

# When to Use for...of?

- When looping through arrays, strings, maps, or sets.
- When you only need values (not keys or indices).
- When you need `break` or `continue` (unlike `.forEach()`).
- Not for objects (use `for...in` or `Object.entries()` instead).
