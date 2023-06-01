# JavaScript Numbers

JavaScript has only one type of number. Numbers can be written with or without decimals.

## Example

```js
let x = 3.14; // A number with decimals
let y = 3; // A number without decimals
```

&nbsp;

Extra large or extra small numbers can be written with scientific (exponent) notation:

## Example

```js
let x = 123e5; // 12300000
let y = 123e-5; // 0.00123
```

&nbsp;

&nbsp;

# Integer Precision

Integers (numbers without a period or exponent notation) are accurate up to **15 digits**.

## Example

```js
let x = 999999999999999; // x will be 999999999999999

let y = 9999999999999999; // y will be 10000000000000000
```

The maximum number of decimals is 17.

&nbsp;

&nbsp;

# Floating Precision

Floating point arithmetic is not always 100% accurate:

```js
let x = 0.2 + 0.1;
```

To solve the problem above, it helps to multiply and divide:

```js
let x = (0.2 _ 10 + 0.1 _ 10) / 10;
```

&nbsp;

&nbsp;

# NaN - Not a Number

NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

## Example

```js
let x = 100 / "Apple";
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;
