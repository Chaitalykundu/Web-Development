# Overview

- [Overview](#overview)
- [for of loop](#for-of-loop)
- [Syntax :](#syntax-)
- [Example : Looping over a Array](#example--looping-over-a-array)
- [Example : Looping over a String](#example--looping-over-a-string)

&nbsp;

&nbsp;

&nbsp;

# for of loop

The JavaScript `for of` loop loops through the values of an iterable object (array or string).

&nbsp;

&nbsp;

# Syntax :

```js
for (variable of iterable) {
  // code block to be executed
}
```

- variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

- iterable - An object that has iterable properties (Ex : array or string).

&nbsp;

&nbsp;

# Example : Looping over a Array

```js
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
```

&nbsp;

&nbsp;

# Example : Looping over a String

```js
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x;
}
```
