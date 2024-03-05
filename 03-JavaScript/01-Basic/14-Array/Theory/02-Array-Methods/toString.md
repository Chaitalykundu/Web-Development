# Description

The `toString()` method returns a string with array values separated by commas.

The `toString()` method does not change the original array.

&nbsp;

# Note

Every JavaScript object has a `toString()` method.

The `toString()` method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.

Normally, you will not use it in your own code.

&nbsp;

&nbsp;

# Syntax

```js
array.toString();
```

&nbsp;

&nbsp;

# Parameters

NONE

&nbsp;

&nbsp;

# Return Value

| Type     | Description                           |
| -------- | ------------------------------------- |
| A string | The array values separated by commas. |

&nbsp;

&nbsp;

# Examples

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();

document.getElementById("demo").innerHTML = text; // Banana,Orange,Apple,Mango
```

&nbsp;

&nbsp;

# Browser Support

`toString()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;

# Difference between toString() & join()

The `join()` method also joins all array elements into a string.

It behaves just like `toString()`, but in addition you can specify **the separator**

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * "); // Banana * Orange * Apple * Mango
```
