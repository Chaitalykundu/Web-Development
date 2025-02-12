# Overview

- [Overview](#overview)
- [Primitive datatypes](#primitive-datatypes)
- [Number](#number)
- [Null](#null)
- [Boolean](#boolean)
- [BigInt](#bigint)
- [String](#string)
- [Symbol](#symbol)
- [Undefined](#undefined)

&nbsp;

&nbsp;

&nbsp;

# Primitive datatypes

Primitive datatypes are the set of **basic datatypes** in javascript.

These are immutable and stored by value.

&nbsp;

&nbsp;

| Type      | typeof return value | Object wrapper | Description                                  | Example               |
| --------- | ------------------- | -------------- | -------------------------------------------- | --------------------- |
| Number    | "number"            | Number         | represents Integers & floating-point numbers | 100, 2.5432           |
| Null      | "object"            | N/A            | represents null i.e. no value at all         | let y = null;         |
| Boolean   | "boolean"           | Boolean        | represents logical / boolean value           | true, false           |
| BigInt    | "bigint"            | BigInt         | Large integers beyond Number limits.         | 12345678901234567890n |
| String    | "string"            | String         | represents sequence of characters            | "Hello"               |
| Symbol    | "symbol"            | Symbol         | Unique identifiers (used in objects).        | Symbol('id')          |
| Undefined | "undefined"         | N/A            | Variable declared but not assigned.          | let x; → undefined    |
|           |                     |                |                                              |                       |

&nbsp;

&nbsp;

# Number

- Represents both integers and floating-point numbers.

- The maximum value a number can hold is 1.7976931348623157e+308 (use Number.MAX_VALUE).

- Special values: Infinity, -Infinity, and NaN (Not a Number).

&nbsp;

```js
let intNum = 42; // Integer
let floatNum = 3.14; // Floating point
let infinityNum = Infinity; // Represents a value too large
let notANumber = "abc" / 2; // NaN (Not a Number)
console.log(notANumber); // Output: NaN
console.log(typeof NaN); // "number"
```

&nbsp;

&nbsp;

# Null

Represents an `empty` or `intentional absence` of a value.

```js
let nullvar = null;
```

&nbsp;

&nbsp;

# Boolean

Represents `true` or `false`.

```js
let istrue = true;
```

&nbsp;

&nbsp;

# BigInt

- Used for extremely large integers beyond Number limits (2^53 - 1).

- Defined by appending n at the end of a number.

&nbsp;

```js
let value = BigInt(573) + BigInt(7);
```

&nbsp;

# String

Used for textual data.

Represents a sequence of characters.

Can be enclosed in single ('), double ("), or backticks (` for template literals).

&nbsp;

```js
let str1 = "Hello"; // Double quotes
let str2 = "World"; // Single quotes
let str3 = `Hello ${str2}`; // Template literal (allows interpolation)
console.log(str3); // Output: Hello World
```

&nbsp;

# Symbol

- Represents Unique and immutable values.

- Mainly used as object property keys.

&nbsp;

```js
var sym = Symbol("I am a symbol");
```

&nbsp;

The following are not same.

```js
let id = Symbol("123");
let anotherID = Symbol("123");
console.log(id == anotherID); // false
```

&nbsp;

# Undefined

Represents a variable that has been declared but not assigned a value.

```js
let undefvar;
```
