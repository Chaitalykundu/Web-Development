# Overview

- [Overview](#overview)
- [String](#string)
- [Creating Strings](#creating-strings)
  - [1. Using String Literals](#1-using-string-literals)
    - [Example](#example)
    - [Example](#example-1)
  - [2. Using the String Constructor](#2-using-the-string-constructor)
- [Strings are immutable](#strings-are-immutable)
  - [Example](#example-2)

&nbsp;

&nbsp;

&nbsp;

# String

A string is a sequence of **zero or more characters** used to represent text, written using **single (')**, **double (")**, or **backticks (`)** for template literals.

JavaScript `strings` are for storing and manipulating text.

Strings are case-sensitive.

Strings are **immutable** (cannot be changed after creation).

&nbsp;

&nbsp;

# Creating Strings

## 1. Using String Literals

### Example

```js
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = "Volvo XC60"; // Single quotes
let carName3 = `Volvo XC60`; // backticks
```

&nbsp;

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

### Example

```js
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

&nbsp;

## 2. Using the String Constructor

```js
let str4 = new String("This is a string object");
console.log(typeof str4); // "object"
```

- Note: It's generally not recommended to use `new String()` because it creates an `object`, not a primitive string.

&nbsp;

&nbsp;

# Strings are immutable

JavaScript Strings are **immutable**. Since once a string is created it will receive a reference in the memory and its value will never change.

&nbsp;

## Example

```js
str = "new string";
console.log(str); // new string
str.replace("new", "replaced");
console.log(str); // new string
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
