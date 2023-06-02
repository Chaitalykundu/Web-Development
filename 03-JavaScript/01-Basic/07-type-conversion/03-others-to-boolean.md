There are `2` Ways to Convert Values to Boolean in JavaScript

&nbsp;

### using `Boolean()`

```js
Boolean(value);
```

&nbsp;

### Using `!!`

```js
!!value;
```

Looks like the `!!` is a bit faster than `Boolean()`

&nbsp;

# How the `!!` works

The first `!` coerce the value to a boolean and inverse it. In this case, `!value` will return `false`. So to reverse it back to true, we put another ! on it. Hence the double use `!!`.

```js
const value = "string";

!value; // false

!!value; // true
```

&nbsp;

&nbsp;

# Convert to boolean

# 1. String to boolean

```js
let result = "string";

!!result; // true

Boolean(result); // true
```

&nbsp;

&nbsp;

# 2. Empty string to boolean

```js
let result = "";

!!result; // false
Boolean(result); // false
```

&nbsp;

&nbsp;

# 3. Number to boolean

```js
let result = 100;

!!result; // true
Boolean(result); // true
```

# 4. 0 to boolean

```js
let result = 0;

!!result; // false
Boolean(result); // false
```

&nbsp;

&nbsp;

# Falsy Values

A `falsy` (sometimes written `falsey`) value is a value that is considered false when encountered in a Boolean context.

In JavaScript, there are 6 falsy values. If you convert any of these to a boolean, it will return false.

```
false
undefined
null
NaN
0
"" (empty string)
```

&nbsp;

Applying `!!` on falsy values

```js
!!false; // false
!!undefined; // false
!!null; // false
!!NaN; // false
!!0; // false
!!""; // false
```

&nbsp;

Applying `Boolean()` on falsy values

```js
Boolean(false); // false
Boolean(undefined); // false
Boolean(null); // false
Boolean(NaN); // false
Boolean(0); // false
Boolean(""); // false
```

&nbsp;

&nbsp;

The following table provides a complete list of JavaScript falsy values:

| Value        | Type      | Description                                                                                                       |
| ------------ | --------- | ----------------------------------------------------------------------------------------------------------------- |
| null         | Null      | The keyword null — the absence of any value.                                                                      |
| undefined    | Undefined | undefined — the primitive value.                                                                                  |
| false        | Boolean   | The keyword false.                                                                                                |
| NaN          | Number    | NaN — not a number.                                                                                               |
| 0            | Number    | The Number zero, also including 0.0, 0x0, etc.                                                                    |
| -0           | Number    | The Number negative zero, also including -0.0, -0x0, etc.                                                         |
| 0n           | BigInt    | The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n. |
| ""           | String    | Empty string value, also including '' and ``.                                                                     |
| document.all | Object    | The only falsy object in JavaScript is the built-in document.all.                                                 |
