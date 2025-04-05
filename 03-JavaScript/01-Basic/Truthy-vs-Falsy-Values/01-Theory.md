# Overview

- [Overview](#overview)
- [Truthy Value](#truthy-value)
  - [Some truthy values](#some-truthy-values)
  - [Example](#example)
- [Falsy Value](#falsy-value)
  - [Some falsy values](#some-falsy-values)
- [Logical Operators with Truthy and Falsy](#logical-operators-with-truthy-and-falsy)
  - [Logical AND (\&\&)](#logical-and-)
    - [How it works](#how-it-works)
    - [Example](#example-1)
    - [Explanation](#explanation)
  - [Logical OR (||)](#logical-or-)
    - [How it works](#how-it-works-1)
    - [Example](#example-2)
    - [Explanation](#explanation-1)

&nbsp;

&nbsp;

&nbsp;

# Truthy Value

Truthy values are values that are evaluated to be true when used in a Boolean context.

Any value that is not explicitly falsy is considered truthy.

&nbsp;

&nbsp;

## Some truthy values

These are some truthy values

- **Non-zero numbers**: 42, -1, 3.14
- **Non-empty strings**: "hello", "0", " "
- **Objects and arrays**: {}, []
- **Functions**: function() {}
- **Dates**: new Date()
- **Symbols**: Symbol()
- **BigInt** values other than 0n: 10n

&nbsp;

&nbsp;

## Example

```js
console.log(Boolean(0));
```

&nbsp;

&nbsp;

&nbsp;

# Falsy Value

False Values are values which are not exactly false, but will become false when these will be converted into boolean.

&nbsp;

&nbsp;

## Some falsy values

There are 5 falsy values in JavaScript

1. 0 (and -0)
2. 0n (BigInt zero)
3. ''
4. undefined
5. null
6. NaN
7. document.all (used for backward compatibility)

&nbsp;

&nbsp;

&nbsp;

# Logical Operators with Truthy and Falsy

## Logical AND (&&)

### How it works

- `&&` evaluates **left to right**.
- It returns **first falsy value** it encounters.
- If both operands are truthy, it returns the last operand.

&nbsp;

### Example

```js
console.log(true && "JavaScript"); // O.P.: JavaScript
```

&nbsp;

### Explanation

- true → truthy
- "JavaScript" → non-empty string → truthy

`true && "JavaScript"` → both are truthy → returns "JavaScript" (last operand).

&nbsp;

&nbsp;

## Logical OR (||)

### How it works

- `||` evaluates **left to right**.
- Returns **first truthy value** it finds.
- If none are truthy, returns the last operand.

&nbsp;

### Example

```js
console.log(false || "Hello!"); // O.P.: Hello
```

&nbsp;

### Explanation

- false → falsy
- "Hello!" → non-empty string → truthy

`false || "Hello!"` → false is falsy, so moves to "Hello!" → returns "Hello!"

&nbsp;
