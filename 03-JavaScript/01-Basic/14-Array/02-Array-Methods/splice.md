# Description

The `splice()` method adds and/or removes array elements.

The `splice()` method overwrites the original array.

&nbsp;

&nbsp;

# Syntax

```js
array.splice(index, howmany, item1, ....., itemX)
```

&nbsp;

&nbsp;

# Parameters

| Parameters        | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| index             | Required.                                                      |
|                   | The position to add/remove items.                              |
|                   | Negative value defines the position from the end of the array. |
| howmany           | Optional.                                                      |
|                   | Number of items to be removed.                                 |
| item1, ..., itemX | Optional.                                                      |
|                   | New elements(s) to be added.                                   |

&nbsp;

&nbsp;

# Return Value

An array containing the removed items (if any).

&nbsp;

&nbsp;

# Examples

At position 2, add 2 elements:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

document.getElementById("demo").innerHTML = fruits; // Banana,Orange,Lemon,Kiwi,Apple,Mango
```

&nbsp;

At position 2, remove 2 items:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

fruits.splice(2, 2);

document.getElementById("demo").innerHTML = fruits; //Banana,Orange,Kiwi
```

&nbsp;

At position 2, add 2 elements, remove 1:

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "Lemon", "Kiwi");

document.getElementById("demo").innerHTML = fruits; // Banana,Orange,Lemon,Kiwi,Mango
```

&nbsp;

&nbsp;

# Browser Support

`splice()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;

&nbsp;
