# Description

The `sort()` sorts the elements of an array.

The `sort()` overwrites the original array.

The `sort()` sorts the elements as strings in alphabetical and ascending order.

&nbsp;

&nbsp;

# Syntax

```js
array.sort(compareFunction);
```

&nbsp;

&nbsp;

# parameter

| Parameter       | Description                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compareFunction | Optional.                                                                                                                                                                                            |
|                 | A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments: `function(a, b){return a-b}`                                       |
|                 | When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.                                       |
|                 | Example: The sort function will sort 40 as a value lower than 100. When comparing 40 and 100, sort() calls the function(40,100). The function calculates 40-100, and returns -60 (a negative value). |

&nbsp;

&nbsp;

# Return Value

The array with the items sorted.

&nbsp;

&nbsp;

# Examples

Sort array

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.sort(); //Apple,Banana,Mango,Orange
```

&nbsp;

Sort numbers

```js
// ascending order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
document.getElementById("demo").innerHTML = points; // 1,5,10,25,40,100

// descending order
points.sort(function (a, b) {
  return b - a;
});
document.getElementById("demo").innerHTML = points; //100,40,25,10,5,1
```

&nbsp;

&nbsp;

# Browser Support

`reverse()` is an `ECMAScript1 (ES1)` feature.

ES1 (JavaScript 1997) is fully supported in all browsers

&nbsp;

&nbsp;

&nbsp;

# Numeric Sort

By default, the `sort()` function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the `sort()` method will produce incorrect result when sorting numbers.

For this we use compare function.

&nbsp;

&nbsp;

# The Compare Function

The purpose of the `compare function` is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

```js
function(a, b){return a - b}
```

&nbsp;

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

- If the result is negative, a is sorted before b.
- If the result is positive, b is sorted before a.
- If the result is 0, no changes are done with the sort order of the two values.

&nbsp;

&nbsp;

# Sorting an Array in Random Order

```js
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function () {
    return 0.5 - Math.random();
  });
  document.getElementById("demo").innerHTML = points;
}
```

&nbsp;

&nbsp;

# The Fisher Yates Method

&nbsp;

&nbsp;

# Find the Highest (or Lowest) Array Value

There are no built-in functions for finding the max or min value in an array.

However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

&nbsp;

Sorting ascending:

```js
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
let lowestValue = points[0];
let heightValue = points[points.length - 1];
```

&nbsp;

Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

&nbsp;

# Using `Math.max()` on an Array

You can use `Math.max.apply` to find the highest number in an array:

```js
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
```

`Math.max.apply(null, [1, 2, 3])` is equivalent to `Math.max(1, 2, 3)`.

&nbsp;

&nbsp;

# Using `Math.min()` on an Array

You can use `Math.min.apply` to find the lowest number in an array:

```js
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
```

`Math.min.apply(null, [1, 2, 3])` is equivalent to `Math.min(1, 2, 3)`.

&nbsp;

&nbsp;

# Sorting Object Arrays

```js
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort(function (a, b) {
  return a.year - b.year;
});
```

&nbsp;

&nbsp;

&nbsp;
