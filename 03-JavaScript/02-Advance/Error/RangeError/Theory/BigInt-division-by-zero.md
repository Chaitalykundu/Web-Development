# Overview

- Introduction
- Message
- Error type
- Return
- Examples
- What went wrong

&nbsp;

&nbsp;

&nbsp;

# Introduction

The JavaScript exception "BigInt division by zero" occurs when a **BigInt is divided by 0n**.

&nbsp;

&nbsp;

# Message

RangeError: Division by zero (V8-based)

RangeError: BigInt division by zero (Firefox)

RangeError: 0 is an invalid divisor value. (Safari)

&nbsp;

&nbsp;

# Error type

RangeError.

&nbsp;

&nbsp;

# Return

RangeError: Division by zero

&nbsp;

&nbsp;

# Examples

```js
const a = BigInt("0o377777777777777777");
const b = BigInt("0");
const quotient = a / b;
console.log(quotient);

// RangeError: Division by zero
```

&nbsp;

&nbsp;

# What went wrong?

The divisor of a division or remainder operator is 0n. In Number arithmetic, this produces **Infinity**, but there's no "infinity value" in BigInts, so an error is issued. Check if the divisor is 0n before doing the division.

&nbsp;

&nbsp;

&nbsp;

&nbsp;
