# Overview

- [Overview](#overview)
- [Access the Full Array](#access-the-full-array)
  - [Example](#example)
- [Accessing Array Elements](#accessing-array-elements)
- [Note](#note)
- [Accessing the First Array Element](#accessing-the-first-array-element)
- [Accessing the Last Array Element](#accessing-the-last-array-element)

&nbsp;

&nbsp;

&nbsp;

# Access the Full Array

With JavaScript, the full array can be accessed by referring to the array name:

## Example

```js
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
// or
console.log(cars);
```

&nbsp;

&nbsp;

&nbsp;

# Accessing Array Elements

An array can hold many values under a single name, and you can access the values by referring to an index number.

```js
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0]; // Saab
```

&nbsp;

# Note

Array indexes start with 0.

[0] is the first element. [1] is the second element.

&nbsp;

&nbsp;

# Accessing the First Array Element

```js
const array_name = [item1, item2, ...];
let variable_name = array_name[0];
```

&nbsp;

&nbsp;

# Accessing the Last Array Element

```js
const array_name = [item1, item2, ...];
let variable_name = array_name[array_name.length - 1];
```

&nbsp;

&nbsp;
&nbsp;
