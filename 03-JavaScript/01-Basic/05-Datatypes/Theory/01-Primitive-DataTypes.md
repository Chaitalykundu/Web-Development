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

```js
var age = 21;
```

&nbsp;

# Null

```js
let nullvar = null;
```

&nbsp;

# Boolean

```js
let istrue = true;
```

&nbsp;

# BigInt

```js
let value = BigInt(573) + BigInt(7);
```

&nbsp;

# String

```js
var Name = "Chaitaly";
```

&nbsp;

# Symbol

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

```js
let undefvar;
```
