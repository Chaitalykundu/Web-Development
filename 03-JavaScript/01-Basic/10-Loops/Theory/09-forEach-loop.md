# Overview

- [Overview](#overview)
  [forEach loop](#foreach-loop)
- [Syntax](#syntax)
  - [Basic Syntax](#basic-syntax)
  - [Another Syntax](#another-syntax)
- [Parameters](#parameters)
- [Example](#example)
  - [Basic example](#basic-example)
  - [Using index Parameter](#using-index-parameter)
- [Important Points](#important-points)
- [Alternatives to forEach()](#alternatives-to-foreach)
- [Conclusion](#conclusion)

&nbsp;

&nbsp;

&nbsp;

# forEach loop

The `forEach()` loop in JavaScript is a built-in array method used to iterate over elements in an array.

It executes a provided function once for each array element in order.

&nbsp;

&nbsp;

# Syntax

### Basic Syntax

```js
array.forEach((currentValue){
    //Code to be executed
});
```

&nbsp;

### Another Syntax

```js
array.forEach(callbackFunction(currentValue, index, array), thisArg);
```

&nbsp;

&nbsp;

# Parameters

1. **callbackFunction** - A function executed for each element in the array. It takes three arguments:

   - **currentValue** (mandatory) - The current element being processed.
   - **index** (optional) - The index of the current element.
   - **array** (optional) - The entire array that forEach() is called on.

2. **thisArg** (optional) - Value to use as this when executing the callback function.

&nbsp;

&nbsp;

# Example

### Basic example

```js
let arr = [1, 2, 3, 4];
arr.forEach((i) => {
  console.log(i * 2);
});
```

&nbsp;

### Using index Parameter

```js
arr.forEach((i, index) => {
  console.log(` Index ${index}:${i}`);
});
```

&nbsp;

&nbsp;

# Important Points

1. Does Not Return a New Array

   - Unlike `.map()`, `forEach()` does not return a new array. It simply executes the function for each element.

2. Cannot Break or Return Early

   - Unlike a for loop, `forEach()` cannot use break or return to exit early.
   - Instead, you can use a `for…of` or `some()` method.

3. Modifying the Array Inside `forEach()`

   - Modifications affect the original array.

&nbsp;

&nbsp;

# Alternatives to forEach()

1. Use `map()` - If you need a new array

   ```js
   const doubled = numbers.map((num) => num * 2);
   console.log(doubled); // [2, 4, 6]
   ```

2. Use `for…of` -If you need break or continue

   ```js
   for (let num of numbers) {
     if (num === 2) break;
     console.log(num);
   }
   ```

&nbsp;

&nbsp;

# Conclusion

- `forEach()` is useful for executing operations on each element without modifying the array structure.
- It is not ideal if you need to stop iteration early or create a transformed array.
- Use `map()`, `filter()`, or `for…of` for other cases.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
