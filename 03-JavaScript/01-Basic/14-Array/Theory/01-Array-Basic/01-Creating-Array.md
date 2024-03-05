# Create an array

Using an array literal is the easiest way to create a JavaScript Array.

&nbsp;

# Syntax

```js
const array_name = [item1, item2, ...];
```

It is a common practice to declare arrays with the `const` keyword.

&nbsp;

&nbsp;

# Example

```js
const cars = ["Saab", "Volvo", "BMW"];
```

&nbsp;

&nbsp;

Spaces and line breaks are not important. A declaration can span multiple lines:

# Example

```js
const cars = ["Saab", "Volvo", "BMW"];
```

&nbsp;

&nbsp;

You can also create an array, and then provide the elements:

# Example

```js
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
```

&nbsp;

&nbsp;

# Using Keyword `new`

JavaScript has a built-in array constructor `new Array()`.

We can create an array using this .

## Syntax

```js

const array_name = new Array(item1, item2, ...);
```

&nbsp;

## Example

```js
const cars = new Array("Saab", "Volvo", "BMW");
```

&nbsp;

&nbsp;

# JavaScript `new Array()`

JavaScript has a built-in array constructor `new Array()`.

But you can safely use `[]` instead.

&nbsp;

These two different statements both create a new empty array named points:

```js
const points = new Array();
const points = [];
```

&nbsp;

These two different statements both create a new array containing 6 numbers:

```js
const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
```

&nbsp;

## A Common Error

These two are not the same as:

```js
// Create an array with 40 undefined elements:
const points = [40];

// Create an array with one element:

const points = new Array(40);
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

```

```
