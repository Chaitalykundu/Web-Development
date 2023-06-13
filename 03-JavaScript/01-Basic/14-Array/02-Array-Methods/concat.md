# Description

The `concat()` method concatenates (joins) two or more arrays.

The `concat()` method returns a new array, containing the joined arrays.

The `concat()` method does not change the existing arrays.

&nbsp;

&nbsp;

# Syntax

```js
array1.concat(array2, array3, ..., arrayX)

```

&nbsp;

&nbsp;

# Parameters

| Parameters          | Description                      |
| ------------------- | -------------------------------- |
| array1, array2,.... | Required                         |
|                     | The array(s) to be concatenated. |

&nbsp;

&nbsp;

# Return Value

| Type  | Description                         |
| ----- | ----------------------------------- |
| Array | The content from the joined arrays. |

&nbsp;

&nbsp;

# Examples

Join three arrays:

```js
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];

const children = arr1.concat(arr2, arr3);
document.getElementById("demo").innerHTML = children; // Cecilie,Lone,Emil,Tobias,Linus,Robin
```

&nbsp;

Concatenate nested arrays and strings:

```js
const arr1 = [1, 2, [3, 4]];
const arr2 = [[5, 6], 7, 8];
const arr3 = ["Cecilie", "Lone"];

const arr4 = arr1.concat(arr2, arr3); // 1,2,3,4,5,6,7,8,Cecilie,Lone
```

&nbsp;

&nbsp;

# Browser Support

`concat()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;

&nbsp;
