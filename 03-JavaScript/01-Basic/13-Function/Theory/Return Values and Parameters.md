# Overview

- [Overview](#overview)
- [Function Parameters](#function-parameters)
  - [Example](#example)
- [Return Values](#return-values)
  - [Example](#example-1)
- [Function with Default Parameters](#function-with-default-parameters)
  - [Example](#example-2)
- [Function Returning Multiple Values](#function-returning-multiple-values)
  - [Example](#example-3)
    - [Returning an Array](#returning-an-array)
    - [Returning an Object](#returning-an-object)
- [Arrow Functions with Return Values](#arrow-functions-with-return-values)
- [Function Without Return (Void Function)](#function-without-return-void-function)
  - [Example](#example-4)

&nbsp;

&nbsp;

&nbsp;

In JavaScript, functions can take parameters as input and return values as output.

&nbsp;

&nbsp;

# Function Parameters

Parameters allow you to pass values into a function.

You can define multiple parameters, separated by commas.

&nbsp;

&nbsp;

## Example

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
```

&nbsp;

Here, `name` is a parameter, and `"Alice"` is an argument passed to the function.

&nbsp;

&nbsp;

&nbsp;

# Return Values

The `return` statement sends a value back from the function.

If a function does not have a `return` statement, it returns `undefined` by default.

&nbsp;

&nbsp;

## Example

```js
function add(a, b) {
  return a + b; // Returns the sum of a and b
}

let result = add(5, 3);
console.log(result); // Output: 8
```

&nbsp;

- The function add takes two parameters (a and b).
- The return statement sends the sum back to the caller.
- The returned value is stored in result.

&nbsp;

&nbsp;

# Function with Default Parameters

You can set default values for parameters

&nbsp;

&nbsp;

## Example

```js
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(4)); // Output: 8 (4 * 2)
console.log(multiply(4, 3)); // Output: 12 (4 * 3)
```

&nbsp;

If `b` is not provided, it defaults to 2.

&nbsp;

&nbsp;

# Function Returning Multiple Values

JavaScript does not support returning multiple values directly, but you can return an array or an object.

&nbsp;

&nbsp;

## Example

### Returning an Array

```js
function getCoordinates() {
  return [10, 20];
}

let [x, y] = getCoordinates();
console.log(x, y); // Output: 10 20
```

&nbsp;

### Returning an Object

```js
function getUser() {
  return { name: "Alice", age: 25 };
}

let user = getUser();
console.log(user.name, user.age); // Output: Alice 25
```

&nbsp;

&nbsp;

# Arrow Functions with Return Values

Arrow functions can be used for compact function expressions.

```js
const square = (num) => num * num;

console.log(square(5)); // Output: 25
```

Single-line arrow functions implicitly return the expression after `=>`

&nbsp;

&nbsp;

# Function Without Return (Void Function)

If a function doesn’t return anything, it implicitly returns `undefined`

&nbsp;

## Example

```js
function sayHello() {
  console.log("Hello!");
}

let message = sayHello();
console.log(message); // Output: undefined
```

&nbsp;

&nbsp;

&nbsp;
