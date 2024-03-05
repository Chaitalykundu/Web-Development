# Description

The `filter()` method creates a new array filled with elements that pass a test provided by a function.

The `filter()` method does not execute the function for empty elements.

The `filter()` method does not change the original array.

&nbsp;

# Syntax

```js
array.filter(function(currentValue, index, arr), thisValue)
```

&nbsp;

&nbsp;

# Parameter

| Parameter    | Description                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------- |
| function()   | Required. A function to be run for each array element.                                              |
| currentValue | Required. The value of the current element.                                                         |
| index        | Optional. The index of the current element.                                                         |
| arr          | Optional. The array of the current element.                                                         |
| thisValue    | Optional. Default value `undefined`. A value passed to the function to be used as its `this` value. |

&nbsp;

&nbsp;

# Return Value

| Type  | Description                                  |
| ----- | -------------------------------------------- |
| Array | An array of elements that pass the test.     |
|       | An empty array if no elements pass the test. |

&nbsp;

&nbsp;

# Examples

Return an array of all values in ages[] that are 18 or over:

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

`filter()` is an `ECMAScript5 (ES5)` feature.

ES5 (JavaScript 2009) fully supported in all browsers

&nbsp;

&nbsp;

&nbsp;
