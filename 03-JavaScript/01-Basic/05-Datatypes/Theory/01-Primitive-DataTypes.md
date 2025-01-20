# Overview

- Primitive datatypes
- Number
- Null
- Boolean
- BigInt
- String
- Symbol
- Undefined

&nbsp;

&nbsp;

&nbsp;

# Primitive datatypes

Primitive datatypes are the set of **basic datatypes** in javascript.

&nbsp;

| Type      | typeof return value | Object wrapper |
| --------- | ------------------- | -------------- |
| Number    | "number"            | Number         |
| Null      | "object"            | N/A            |
| Boolean   | "boolean"           | Boolean        |
| BigInt    | "bigint"            | BigInt         |
| String    | "string"            | String         |
| Symbol    | "symbol"            | Symbol         |
| Undefined | "undefined"         | N/A            |
|           |                     |                |

&nbsp;

&nbsp;

# Number

Represents integers and floating-point numbers.

```js
var age = 21;
```

&nbsp;

# Null

Represents the intentional absence of value.

```js
let nullvar = null;
```

&nbsp;

# Boolean

Represents `true` or `false`.

```js
let istrue = true;
```

&nbsp;

# BigInt

Used for numbers beyond the safe integer limit (2^53 - 1).

```js
let value = BigInt(573) + BigInt(7);
```

&nbsp;

# String

Used for textual data.

```js
var Name = "Chaitaly";
```

&nbsp;

# Symbol

Represents unique identifiers.

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
