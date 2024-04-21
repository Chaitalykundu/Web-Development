# Description

The `filter()` method creates a new array filled with elements that pass a test provided by a function.

The `filter()` method does not execute the function for empty elements.

The `filter()` method does not change the original array.

**_`map`, `filter`, `reduce` are higher order array method._**

&nbsp;

&nbsp;

# Syntax

```js
array.filter(function(currentValue, index, arr), thisValue)
```

&nbsp;

&nbsp;

# Parameters

| Parameters   | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| function()   | Required                                                     |
|              | A function to be run for each array element.                 |
| currentValue | Required                                                     |
|              | The value of the current element.                            |
| index        | Optional.                                                    |
|              | The index of the current element.                            |
| arr          | Optional.                                                    |
|              | The array of the current element.                            |
| thisValue    | Optional.                                                    |
|              | Default value undefined.                                     |
|              | A value passed to the function to be used as its this value. |
|||

&nbsp;

&nbsp;

# Return Value

| Type     | Description                                       |
| -------- | ------------------------------------------------- |
| An array | An array of elements that pass the test.
||An empty array if no elements pass the test. |

&nbsp;

&nbsp;

# Examples

Return a new array with the age >=18

```js
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
```

&nbsp;

&nbsp;

# Browser Support

`filter()` is an ECMAScript5 (ES5) feature.

ES5 (JavaScript 2009) fully supported in all modern browsers since July 2013

&nbsp;

&nbsp;

&nbsp;
