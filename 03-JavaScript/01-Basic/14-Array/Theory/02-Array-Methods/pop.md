# Description

The `pop()` method removes (pops) the last element of an array.

The `pop()` method changes the original array.

The `pop()` method returns the removed element.

&nbsp;

# Note

&nbsp;

&nbsp;

# Syntax

```js
array.pop();
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

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
document.getElementById("demo").innerHTML = fruits; // Banana,Orange,Apple
```

&nbsp;

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits.pop();
document.getElementById("demo").innerHTML = removed; // Mango
```

&nbsp;

&nbsp;

# Browser Support

`pop()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;
