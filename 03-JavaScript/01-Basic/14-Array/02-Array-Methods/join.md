# Description

The `join()` method returns an array as a string.

The `join()` method does not change the original array.

Any separator can be specified. The default is `comma` (,).

&nbsp;

# Note

&nbsp;

&nbsp;

# Syntax

```js
array.join(separator);
```

&nbsp;

&nbsp;

# Parameters

| Parameters | Description               |
| ---------- | ------------------------- |
| separator  | Optional.                 |
|            | The separator to be used. |
|            | Default is a comma.       |

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                             |
| -------- | ------------------------------------------------------- |
| A string | The array values, separated by the specified separator. |

&nbsp;

&nbsp;

# Examples

With default separator

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();

document.getElementById("demo").innerHTML = text; // Banana,Orange,Apple,Mango
```

&nbsp;

Another separator:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");

document.getElementById("demo").innerHTML = text; // Banana and Orange and Apple and Mango
```

&nbsp;

&nbsp;

# Browser Support

`join()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;
