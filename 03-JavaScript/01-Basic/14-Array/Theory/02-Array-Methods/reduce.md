# Description

The `reduce()` method executes a reducer function for array element.

The `reduce()` method returns a single value: the function's accumulated result.

The `reduce()` method does not execute the function for empty array elements.

The `reduce()` method does not change the original array.

&nbsp;

&nbsp;

# Note

At the first callback, there is no return value from the previous callback.

Normally, array element 0 is used as initial value, and the iteration starts from array element 1.

If an initial value is supplied, this is used, and the iteration starts from array element 0.

&nbsp;

&nbsp;

# Syntax

```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

&nbsp;

&nbsp;

# Parameter

| Parameter    | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| function()   | Required. A function to be run for each element in the array.        |
| initialValue | Optional. A value to be passed to the function as the initial value. |

&nbsp;

Reducer function parameters:

| Parameter    | Description                                                                   |
| ------------ | ----------------------------------------------------------------------------- |
| total        | Required. The initialValue, or the previously returned value of the function. |
| currentValue | Required. The value of the current element.                                   |
| currentIndex | Optional. The index of the current element.                                   |
| arr          | Optional. The array the current element belongs to.                           |

&nbsp;

&nbsp;

# Return Value

The accumulated result from the last call of the callback function.

&nbsp;

&nbsp;

# Examples

Return an array of all values in ages[] that are 18 or over:

Subtract all numbers in an array:

```js
const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
```

&nbsp;

Round all the numbers and display the sum:

```js
const numbers = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}
```

&nbsp;

&nbsp;

# Browser Support

`reduce()` is an `ECMAScript5 (ES5)` feature.

ES5 (JavaScript 2009) fully supported in all browsers

&nbsp;

&nbsp;

&nbsp;
