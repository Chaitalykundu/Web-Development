# Overview

- [Overview](#overview)
- [function definition](#function-definition)
- [Function Declarations](#function-declarations)
- [Note](#note)
- [Syntax 1:](#syntax-1)
- [Syntax 2:](#syntax-2)
- [Example](#example)
- [Function Expressions](#function-expressions)
- [The Function() Constructor](#the-function-constructor)
  - [Example](#example-1)
- [Function Hoisting](#function-hoisting)
- [Functions Can Be Used as Values](#functions-can-be-used-as-values)
- [Functions are Objects](#functions-are-objects)
  - [Example](#example-2)
- [Arrow Functions](#arrow-functions)
  - [Example](#example-3)

&nbsp;

&nbsp;

&nbsp;

# function definition

JavaScript functions are defined with the `function` keyword.

You can use a **function declaration** or a **function expression**.

&nbsp;

&nbsp;

# Function Declarations

Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

&nbsp;

To define a function, use

- the `function` keyword
- **function name**,
- **a set of parentheses** for parameters(if any) and
- **curly braces** to enclose the function body

&nbsp;

# Note

Function names can contain **letters, digits, underscores, and dollar signs** (same rules as variables).

&nbsp;

# Syntax 1:

Without parameters

```js
function function_name() {
  // code to be executed
}
```

&nbsp;

# Syntax 2:

With parameters

```js
function function_name(parameter 1, parameter 2,...) {
  // code to be executed
}
```

> Semicolons are used to separate executable JavaScript statements. Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

&nbsp;

&nbsp;

# Example

Adding two numbers

```js
function add(a, b) {
  return a + b;
}
```

&nbsp;

&nbsp;

&nbsp;

# Function Expressions

A JavaScript function can also be defined using an expression.

&nbsp;

A function expression can be stored in a variable:

```js
const x = function (a, b) {
  return a * b;
};
```

&nbsp;

After a function expression has been stored in a variable, the variable can be used as a function:

```js
const x = function (a, b) {
  return a * b;
};
let z = x(4, 3);
```

The function above is actually an **anonymous function** (a function without a name).

Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

&nbsp;

&nbsp;

&nbsp;

# The Function() Constructor

Functions can also be defined with a **built-in** JavaScript function constructor called `Function()`. This is called `Function() Constructor`

&nbsp;

## Example

```js
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);
```

&nbsp;

> Most of the time, you can avoid using the `new` keyword in JavaScript.

&nbsp;

&nbsp;

# Function Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

Hoisting applies to variable declarations and to function declarations.

Because of this, JavaScript functions can be called before they are declared:

```js
myFunction(5);

function myFunction(y) {
  return y * y;
}
```

Functions defined using an expression are not hoisted.

&nbsp;

&nbsp;

# Functions Can Be Used as Values

JavaScript functions can be used as values:

```js
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3);
```

&nbsp;

JavaScript functions can be used in expressions:

```js
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3) * 2;
```

&nbsp;

&nbsp;

# Functions are Objects

The typeof operator in JavaScript returns "function" for functions.

But, JavaScript functions can best be described as objects.

JavaScript functions have both properties and methods.

The `arguments.length` property returns the number of arguments received when the function was invoked:

```js
function myFunction(a, b) {
  return arguments.length;
}
```

&nbsp;

&nbsp;

The toString() method returns the function as a string:

## Example

```js
function myFunction(a, b) {
  return a * b;
}

let text = myFunction.toString();
```

&nbsp;

&nbsp;

A function defined as the property of an object, is called a method to the object.

A function designed to create new objects, is called an object constructor.
&nbsp;

&nbsp;

&nbsp;

# Arrow Functions

Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

## Example

```js
// ES5
var x = function (x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;
```

&nbsp;

Arrow functions do not have their own `this`. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

```js
const x = (x, y) => {
  return x * y;
};
```

&nbsp;

Arrow functions are not supported in IE11 or earlier.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
