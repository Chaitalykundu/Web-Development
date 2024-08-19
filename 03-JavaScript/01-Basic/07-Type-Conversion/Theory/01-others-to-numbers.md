# Implicit Conversion to Number

# 1. Numeric String to number

numeric string used with `- , / , \*` results number type

```js
let result;

result = "4" - "2";
console.log(result); // 2

result = "4" - 2;
console.log(result); // 2

result = "4" * 2;
console.log(result); // 8

result = "4" / 2;
console.log(result); // 2
```

&nbsp;

## more methods that can be used to convert strings to numbers:

| Method       | Description                                         |
| ------------ | --------------------------------------------------- |
| Number()     | Returns a number, converted from its argument       |
| parseFloat() | Parses a string and returns a floating point number |
| parseInt()   | Parses a string and returns an integer              |

&nbsp;

&nbsp;

## Note

You can also generate numbers from strings using `parseInt()`, `parseFloat()`, `unary operator +` and `Math.floor()`.

```js
let result;
result = parseInt("20.01");
console.log(result); // 20

result = parseFloat("20.01");
console.log(result); // 20.01

result = +"20.01";
console.log(result); // 20.01

result = Math.floor("20.01");
console.log(result); // 20
```

&nbsp;

&nbsp;

# 2. Non-numeric String with number

non-numeric string used with `- , / , \*` results to `NaN`

```js
let result;

result = "hello" - "world";
console.log(result); // NaN

result = "4" - "hello";
console.log(result); // NaN
```

&nbsp;

&nbsp;

# 3. Boolean to Number

if boolean is used, true is 1, false is 0

```js
let result;

result = "4" - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4
```

&nbsp;

## Note

JavaScript considers `0 as false` and `all non-zero number as true`. And, if true is converted to a number, the result is always 1

&nbsp;

&nbsp;

# 4. null to Number

null is `0` when used with number

```js
let result;

result = 4 + null;
console.log(result); // 4

result = 4 - null;
console.log(result); // 4
```

&nbsp;

&nbsp;

# 5. undefined to number

Arithmetic operation of undefined with number gives `NaN`

```js
let result;

result = 4 + undefined;
console.log(result); // NaN

result = 4 - undefined;
console.log(result); // NaN
```

&nbsp;

&nbsp;

&nbsp;

# Explicit Conversion to Number

# 1. Numeric String to number

To convert **numeric strings to numbers**, you can use `Number()`.

```js
let result;

// string to number
result = Number("324");
console.log(result); // 324

result = Number("324e-1");
console.log(result); // 32.4
```

&nbsp;

&nbsp;

# 2. Non-numeric String to number

If a string is non-numeric, the result will be `NaN`.

```js
let result;
result = Number("hello");
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN
```

&nbsp;

&nbsp;

# 3. boolean to number

To convert **boolean values to numbers**, you can use `Number()`.

```js
// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0
```

&nbsp;

&nbsp;

# 4. Empty string or null to number

In JavaScript, **empty strings** and **null values** return `0`.

```js
let result;

let result = Number(" ");
console.log(result); // 0

result = Number(null);
console.log(result); // 0
```

&nbsp;

&nbsp;

# 5. Converting Dates to Numbers

The global method `Number()` can be used to convert dates to numbers.

```js
d = new Date();
Number(d); // returns 1404568027739
```

&nbsp;

The date method `getTime()` does the same.

```js
d = new Date();
d.getTime(); // returns 1404568027739
```

&nbsp;

&nbsp;

# Summery of converting Strings to Numbers

The global method `Number()` converts a variable (or a value) into `a number`.

A `numeric string` (like "3.14") converts to `a number` (like 3.14).

An `empty string`(like "") converts to `0`.

A `non numeric string` (like "John") converts to `NaN` (Not a Number).

&nbsp;

### Examples

```js
// These will convert:
Number("3.14");
Number(Math.PI);
Number(" ");
Number("");

// These will not convert:
Number("99 88"); //
Number("John"); // NaN
```

&nbsp;

&nbsp;
