# Description

The `reduce()` method executes a reducer function for array element.

The `reduce()` method returns a single value: the function's accumulated result.

The `reduce()` method does not execute the function for empty array elements.

The `reduce()` method does not change the original array.

**_`map`, `filter`, `reduce` are higher order array method._**

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

# Parameters

| Parameters   | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| function()   | Required                                                            |
|              | A function to be run for each element in the array.                 |
| total        | Required.                                                           |
|              | The initialValue, or the previously returned value of the function. |
| currentValue | Required                                                            |
|              | The value of the current element.                                   |
| currentIndex | Optional.                                                           |
|              | The index of the current element.                                   |
| arr          | Optional.                                                           |
|              | The array of the current element.                                   |
| initialValue | Optional.                                                           |
|              | A value to be passed to the function as the initial value.          |
|              |                                                                     |

&nbsp;

&nbsp;

# Return Value

The accumulated result from the last call of the callback function.


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
const numbers = [1,2,3,4];
const newArr = numbers.reduces(myFunction);

function myFunction(a,b)=> {
  return a+b;
}
```

&nbsp;

&nbsp;

# Browser Support

`reduce()` is an ECMAScript5 (ES5) feature.

ES5 (JavaScript 2009) fully supported in all modern browsers since July 2013

&nbsp;

&nbsp;

&nbsp;
