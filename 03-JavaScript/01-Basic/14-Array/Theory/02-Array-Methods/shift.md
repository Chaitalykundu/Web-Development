# Description

The `shift()` method removes the first item of an array.

The `shift()` method changes the original array.

The `shift()` method returns the shifted element.

&nbsp;

# Note

&nbsp;

&nbsp;

# Syntax

```js
array..shift()
```

&nbsp;

&nbsp;

# Parameters

NONE

&nbsp;

&nbsp;

# Return Value

| Type       | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| A variable | The removed item.                                                    |
|            | A string, a number, an array, or any other type allowed in an array. |

&nbsp;

&nbsp;

# Examples

The `shift()` method removes the first element of the array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

document.getElementById("demo").innerHTML = fruits; // Orange,Apple,Mango
```

&nbsp;

The `shift()` method returns the shifted element:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.shift(); // Banana
```

&nbsp;

&nbsp;

# Browser Support

`shift()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;
