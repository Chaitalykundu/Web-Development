# Overview

- Type coercion
- Example
- null and 0 comparison
- `==` vs `===`

&nbsp;

&nbsp;

&nbsp;

# Type Coercion

**Type coercion** is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

&nbsp;

&nbsp;

## Example

```js
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum); // 59
```

&nbsp;

&nbsp;

# null and 0 comparison

In JS `null` is converted to `0` when it is compared using >=, >, <, <=

```js
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
```

&nbsp;

&nbsp;

# `==` vs `===`

Double equals (==) will try to convert the values to the same data type and then try to compare them.

Triple equals (===) strictly compares the value and the datatype.
