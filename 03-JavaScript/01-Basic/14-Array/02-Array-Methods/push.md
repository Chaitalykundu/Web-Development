# Description

The `push()` method adds new items to the end of an array.

The `push()` method changes the length of the array.

The `push()` method returns the new length.

&nbsp;

# Note

&nbsp;

&nbsp;

# Syntax

```js
array.push(item1, item2, ..., itemX)
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

# Return Value

| Type     | Description                  |
| -------- | ---------------------------- |
| A number | The new length of the array. |

&nbsp;

&nbsp;

# Examples

Add two new items to the array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");

document.getElementById("demo").innerHTML = fruits; // Banana,Orange,Apple,Mango,Kiwi,Lemon
```

&nbsp;

`push()` returns the new length:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.push("Kiwi"); // 5
```

&nbsp;

&nbsp;

# Browser Support

`push()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;
