# Overview

- [Overview](#overview)
- [String](#string)
  - [Example](#example)
  - [Example](#example-1)
- [Strings are immutable](#strings-are-immutable)
  - [Example](#example-2)

&nbsp;

&nbsp;

&nbsp;

# String

JavaScript `strings` are for storing and manipulating text.

A JavaScript string is **zero or more characters** written inside single or double quotes.

Strings are case-sensitive.

&nbsp;

&nbsp;

## Example

```js
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = "Volvo XC60"; // Single quotes
let carName3 = `Volvo XC60`; // backticks
```

&nbsp;

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

## Example

```js
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

&nbsp;

&nbsp;

# Strings are immutable

JavaScript Strings are **immutable**. Since once a string is created it will receive a reference in the memory and its value will never change.

&nbsp;

## Example

```js
str = "new string"
console.log(str); // new string
str.replace("new", "replaced");
console.log(str); // new string
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
