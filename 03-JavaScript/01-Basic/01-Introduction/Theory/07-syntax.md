# Overview

- [Overview](#overview)
- [JavaScript Values](#javascript-values)
- [Note](#note)
- [JavaScript Literals](#javascript-literals)
- [JavaScript Variables](#javascript-variables)
- [JavaScript Operators](#javascript-operators)
- [JavaScript Expressions](#javascript-expressions)
- [JavaScript Identifiers / Names](#javascript-identifiers--names)
  - [Rules for Identifiers](#rules-for-identifiers)
  - [Note](#note-1)

&nbsp;

&nbsp;

&nbsp;

# JavaScript Values

The JavaScript syntax defines **two** types of values:

- Fixed values
- Variable values

Fixed values are called **Literals**.

Variable values are called **Variables**.

&nbsp;

&nbsp;

# Example

```js
let x = 10;
```

Here `x` is variable and `10` is literal

&nbsp;

&nbsp;

# JavaScript Literals

In JavaScript, literals are fixed values that are directly written in the code without using variables or expressions.

&nbsp;

&nbsp;

## Types of JavaScript Literals

- String Literals
- Numeric Literals
- Boolean Literals
- Object Literals
- Array Literals
- Template Literals
- RegExp Literals
- Null & Undefined Literals

&nbsp;

&nbsp;

### String Literals

String literals are sequences of characters enclosed in **single (')**, **double (")**, or **backtick (`)** quotes.

```js
let str1 = "Hello, World!";
let str2 = "JavaScript Literals";
let str3 = `Template Literal`; // Uses backticks
```

&nbsp;

### Numeric Literals

These represent numbers, including integers and floating-point values.

```js
let intNum = 42; // Integer
let floatNum = 3.14; // Floating-point number
let hexNum = 0xa; // Hexadecimal (10 in decimal)
let binNum = 0b1010; // Binary (10 in decimal)
let octNum = 0o12; // Octal (10 in decimal)
```

&nbsp;

### 3. Boolean Literals

Boolean literals represent true or false values.

```js
let isJavaScriptFun = true;
let isSleeping = false;
```

&nbsp;

&nbsp;

## Syntax Rules for literals

| Literal Type | Syntax Rule                                 | Example                  |
| ------------ | ------------------------------------------- | ------------------------ |
| String       | Must be enclosed in ', ", or \` \`          | "Hello" / 'Hi' / \`Hey\` |
| Number       | Integers & floating points written normally | 42, 3.14                 |
| Boolean      | Only `true` or `false` in lowercase         | true, false              |
| Null         | Always written as null                      | null                     |
| Undefined    | Declared but not assigned                   | let x;                   |
| Object       | { key: value }                              | { name: "Alice" }        |
| Array        | [item1, item2]                              | ["Apple", "Banana"]      |
| Template     | Uses backticks and ${} for interpolation    | `Hello, ${name}!`        |
| RegExp       | Uses /pattern/ syntax                       | /hello/i                 |
|              |                                             |                          |

&nbsp;

&nbsp;

## Note

JavaScript is **Case Sensitive**

**Hyphens** are not allowed in JavaScript. They are reserved for subtractions.

&nbsp;

&nbsp;

# JavaScript Variables

Variables are used to store data values.

JavaScript uses the keywords `var`, `let` and `const` to declare variables.

An **equal** sign is used to assign values to variables.

```js
let x;
x = 6;
```

&nbsp;

&nbsp;

# JavaScript Operators

JavaScript uses **arithmetic operators** ( + - \* / ) to compute values and **assignment operator** ( = ) to assign values to variables:

```js
x = (5 + 6) * 10;
```

&nbsp;

&nbsp;

# JavaScript Expressions

An expression is a combination of values, variables, and operators, which computes to a value.

The computation is called an **evaluation**.

```js
res = 5 * 10;
```

&nbsp;

The values can be of various types, such as numbers and strings.

&nbsp;

&nbsp;

# JavaScript Identifiers / Names

An **identifier** is the name used to identify variables, functions, classes, modules, and other user-defined entities in a programming language.

It is a **unique name** that helps in referencing memory locations where data is stored.

&nbsp;

## Rules for Identifiers

- A identifier name must begin with:

  - A letter (A-Z or a-z)
  - A dollar sign ($)
  - Or an underscore (\_)

- Subsequent characters may be letters, digits, underscores, or dollar signs.

- Cannot be a keyword (e.g., int, if, for cannot be used as identifiers).

- Should be meaningful and descriptive (e.g., totalAmount is better than tA).

- No special characters except underscore (\_) (e.g., first-name is invalid, but first_name is valid).

&nbsp;

&nbsp;

# Types of Identifiers

Identifiers are used for different types of entities in a program:

- **Variable Identifiers** – Used to store values (e.g., num1, userName).
- **Function Identifiers** – Used to name functions (e.g., getData(), calculateTotal()).
- **Class Identifiers** – Used for class names (e.g., class Person {} in Java).
- **Constant Identifiers** – Used to define constants (e.g., const PI = 3.14; in JavaScript).

&nbsp;

&nbsp;

# Difference Between Variables and Literals in JavaScript

| Feature     | Variables                                                     | Literals                                              |
| ----------- | ------------------------------------------------------------- | ----------------------------------------------------- |
| Definition  | A named storage for data that can hold values and be updated. | A fixed value that is directly written in the code.   |
| Mutability  | Can change (except const).                                    | Cannot change (they are fixed values).                |
| Declaration | Declared using var, let, or const.                            | No declaration needed (used directly in expressions). |
| Example     | let name = "Alice";                                           | "Alice" (string literal)                              |
| Usage       | Used to store and manipulate values.                          | Directly represents data values in code.              |
| Memory      | Storage Allocated in memory for reuse.                        | Stored as part of the code itself.                    |
| Types       | Numbers, Strings, Booleans, Objects, Arrays, etc.             | Numeric (42), String ("Hello"), Boolean (true), etc.  |
|             |                                                               |                                                       |

&nbsp;

&nbsp;
