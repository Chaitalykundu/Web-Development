# Overview

- [Overview](#overview)
- What are Variables
- JavaScript Identifiers
- Naming rules
- Ways to Declare a JavaScript Variable
- Declaring a Variable
- Initializing a variable
- Declaring & Initializing together

&nbsp;

&nbsp;

&nbsp;

# Variables

Variables are containers, used to store data values

It allows you to store, update, and reuse information throughout your program.

It is a basic unit of storage in a program.

&nbsp;

## Example

In this example, x, y, and z, are variables, declared with the `var` keyword:

```js
var x = 5;
var y = 6;
var z = x + y;
```

&nbsp;

&nbsp;

# JavaScript Identifiers

All JavaScript variables must be identified with **unique** names. These unique names are called **_identifiers_**.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

&nbsp;

&nbsp;

# Naming rules

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter or $ or \_ .
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.
- Spaces are not allowed in variable names.

&nbsp;

&nbsp;

# Ways to Declare a JavaScript Variable

3 Ways to Declare a JavaScript Variable:

- Using `var`
- Using `let`
- Using `const`

These are the keywords which define that a variable is declared.

&nbsp;

&nbsp;

# Declaring a Variable

**Creating** a variable in JavaScript is called "**declaring**" a variable.

You can declare a JavaScript variable with the `var`, `let` or `const` keyword:

```js
var carName;
let carName;
const carName;
```

&nbsp;

After the declaration, the variable has no value (technically it is `undefined`).

&nbsp;

&nbsp;

# Initializing a variable

To initialize a value to the variable, use the `equal` sign:

```js
carName = "Volvo";
```

&nbsp;

&nbsp;

# Declaring & Initializing together

You can also assign a value to the variable when you declare it:

```js
let carName = "Volvo";
```

&nbsp;

&nbsp;

# One Statement, Many Variables

You can declare many variables in one statement.

Start the statement with let and separate the variables by comma:

```js
let person = "John Doe",
  carName = "Volvo",
  price = 200;
```

&nbsp;

&nbsp;

# Re-Declaring JavaScript Variables

If you re-declare a JavaScript variable declared with var, it will **not lose its value**.

## Example

```js
var carName = "Volvo";
var carName;
```

The variable `carName` will still have the value "`Volvo`" after the execution of these statements

&nbsp;

## Note

You cannot re-declare a variable declared with `let` or `const`.

&nbsp;

&nbsp;

&nbsp;

# Global JavaScript Variables

A global variable is a variable that is declared outside of a function, class, or block and can be accessed from anywhere in the program.

It has a global scope, meaning it is available throughout the execution of the program.

&nbsp;

&nbsp;

# Key Characteristics of Global Variables

- **Accessible Everywhere** – Can be used inside functions, loops, and even other files (if imported).

- **Persistent Value** – Retains its value throughout the program execution.

- **Risk of Unintended Modifications** – Can be modified by any function, which may lead to unexpected behaviors.

&nbsp;

&nbsp;

## Example

```js
let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}
```
