# Description

`map()` creates a new array from calling a function for every array element.

`map()` does not execute the function for empty elements.

`map()` does not change the original array.

&nbsp;

# Syntax

```js
array.map(function(currentValue, index, arr), thisValue)
```

&nbsp;

&nbsp;

# Parameter

| Parameter    | Description                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------- |
| function()   | Required. A function to be run for each array element.                                          |
| currentValue | Required. The value of the current element.                                                     |
| index        | Optional. The index of the current element.                                                     |
| arr          | Optional. The array of the current element.                                                     |
| thisValue    | Optional. Default value undefined. A value passed to the function to be used as its this value. |

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                       |
| -------- | ------------------------------------------------- |
| An array | The results of a function for each array element. |

&nbsp;

&nbsp;

# Examples

Return a new array with the square root of all element values:

```js
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
```

&nbsp;

Multiply all the values in an array with 10:

```js
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
```

&nbsp;

&nbsp;

# Browser Support

`map()` is an `ECMAScript5 (ES5)` feature.

ES5 (JavaScript 2009) fully supported in all browsers

&nbsp;

&nbsp;

&nbsp;
