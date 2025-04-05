# Description

The `unshift()` method adds new elements to the beginning of an array.

The `unshift()` method overwrites the original array.

&nbsp;

# Note

&nbsp;

&nbsp;

# Syntax

```js
array.unshift(item1, item2, ..., itemX)

```

&nbsp;

&nbsp;

# Parameters

| Parameters              | Description                      |
| ----------------------- | -------------------------------- |
| item1, item2, .., itemX | The item(s) to add to the array. |
|                         | Minimum one item is required.    |

&nbsp;

&nbsp;

# Examples

`unshift()` adds new items to the beginning of an array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");

document.getElementById("demo").innerHTML = fruits; // Lemon,Pineapple,Banana,Orange,Apple,Mango
```

&nbsp;

The `unshift()` method returns the new length:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML = fruits.unshift(
  "Lemon",
  "Pineapple",
); // 6
```

&nbsp;

&nbsp;

# Return Value

| Type     | Description                  |
| -------- | ---------------------------- |
| A number | The new length of the array. |

&nbsp;

&nbsp;

# Browser Support

`unshift()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;
