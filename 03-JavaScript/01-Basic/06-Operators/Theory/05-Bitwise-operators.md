# Overview

- [Overview](#overview)
- [Bitwise Operator](#bitwise-operator)
- [Example](#example)
- [Bitwise Operator](#bitwise-operator-1)
- [Examples](#examples)
- [JavaScript Uses 32 bits Bitwise Operands](#javascript-uses-32-bits-bitwise-operands)
- [Bitwise AND (\&)](#bitwise-and-)
  - [One bit example](#one-bit-example)
  - [4 bits example](#4-bits-example)
  - [Example](#example-1)
- [Bitwise OR (|)](#bitwise-or-)
  - [One bit example](#one-bit-example-1)
  - [4 bits example](#4-bits-example-1)
  - [Example](#example-2)
- [JavaScript Bitwise XOR](#javascript-bitwise-xor)
  - [One bit example](#one-bit-example-2)
  - [4 bits example](#4-bits-example-2)
  - [Example](#example-3)
- [JavaScript Bitwise NOT (~)](#javascript-bitwise-not-)
  - [Example](#example-4)
- [JavaScript (Zero Fill) Bitwise Left Shift (\<\<)](#javascript-zero-fill-bitwise-left-shift-)
  - [Example](#example-5)
- [JavaScript (Sign Preserving) Bitwise Right Shift (\>\>)](#javascript-sign-preserving-bitwise-right-shift-)
  - [Example](#example-6)
- [JavaScript (Zero Fill) Right Shift (\>\>\>)](#javascript-zero-fill-right-shift-)
  - [Example](#example-7)
- [Difference Between \>\> and \>\>\>](#difference-between--and-)
- [When to Use \>\>\>?](#when-to-use-)
- [Binary Numbers](#binary-numbers)
- [Converting Decimal to Binary](#converting-decimal-to-binary)
  - [Example](#example-8)
- [Converting Binary to Decimal](#converting-binary-to-decimal)
  - [Example](#example-9)

&nbsp;

&nbsp;

&nbsp;

# Bitwise Operator

The bitwise operators perform bitwise operations on operands.

These perform operations on binary numbers.

Bitwise operators manipulate individual bits of numbers.

&nbsp;

&nbsp;

# Example

```js
let x = 5 & 1;
```

&nbsp;

&nbsp;

# Bitwise Operator

| Operator | Name                             | Description                                                                                              | Example                    | Use Cases                               |
| -------- | -------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| &        | Bitwise AND                      | Sets each bit to 1 if both bits are 1                                                                    | (10==20 & 20==33) = false  | Bit masking (Extracting specific bits)  |
| \|       | Bitwise OR                       | Sets each bit to 1 if one of two bits is 1                                                               | (10==20 \| 20==33) = false |                                         |
| ^        | Bitwise XOR                      | Sets each bit to 1 if only one of two bits is 1                                                          | (10==20 ^ 20==33) = false  | Bit flipping (Toggling bits)            |
| ~        | Bitwise NOT                      | Inverts all the bits                                                                                     | (~10) = -10                | Negation (Flipping all bits)            |
| <<       | Bitwise Left Shift               | Shifts left by pushing zeros in from the right and let the leftmost bits fall off                        | (10<<2) = 40               | Efficient multiplication by powers of 2 |
| >>       | Bitwise Right Shift              | Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off | (10>>2) = 2                | Efficient division by powers of 2       |
| >>>      | Bitwise Unsigned Shift with Zero | Shifts right by pushing zeros in from the left, and let the rightmost bits fall off                      | (10>>>2) = 2               | Handling unsigned integers              |
|          |                                  |                                                                                                          |                            |                                         |

&nbsp;

&nbsp;

# Examples

| Operation | Result | Same as      | Result |
| --------- | ------ | ------------ | ------ |
| 5 & 1     | 1      | 0101 & 0001  | 0001   |
| 5 \| 1    | 5      | 0101 \| 0001 | 0101   |
| ~ 5       | 10     | ~0101        | 1010   |
| 5 << 1    | 10     | 0101 << 1    | 1010   |
| 5 ^ 1     | 4      | 0101 ^ 0001  | 0100   |
| 5 >> 1    | 2      | 0101 >> 1    | 0010   |
| 5 >>> 1   | 2      | 0101 >>> 1   | 0010   |
|           |        |              |        |

&nbsp;

&nbsp;

# JavaScript Uses 32 bits Bitwise Operands

JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

&nbsp;

&nbsp;

# Bitwise AND (&)

When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.

&nbsp;

## One bit example

| Operation | Result |
| --------- | ------ |
| 0 & 0     | 0      |
| 0 & 1     | 0      |
| 1 & 0     | 0      |
| 1 & 1     | 1      |
|           |        |

&nbsp;

## 4 bits example

| Operation   | Result |
| ----------- | ------ |
| 1111 & 0000 | 0000   |
| 1111 & 0001 | 0001   |
| 1111 & 0010 | 0010   |
| 1111 & 0100 | 0100   |
|             |        |

&nbsp;

Bitwise AND returns 1 only if both bits are 1:

| Decimal | Binary                               |
| ------- | ------------------------------------ |
| 5       | 00000000000000000000000000000101     |
| 1       | 00000000000000000000000000000001     |
| 5 & 1   | 00000000000000000000000000000001 (1) |
|         |                                      |

&nbsp;

## Example

```js
let x = 5 & 1;
```

&nbsp;

&nbsp;

# Bitwise OR (\|)

When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits is 1.

&nbsp;

## One bit example

| Operation | Result |
| --------- | ------ |
| 0 \| 0    | 0      |
| 0 \| 1    | 1      |
| 1 \| 0    | 1      |
| 1 \| 1    | 1      |
|           |        |

&nbsp;

## 4 bits example

| Operation    | Result |
| ------------ | ------ |
| 1111 \| 0000 | 1111   |
| 1111 \| 0001 | 1111   |
| 1111 \| 0010 | 1111   |
| 1111 \| 0100 | 1111   |
|              |        |

&nbsp;

Bitwise OR returns 1 if one of the bits is 1:

| Decimal | Binary                               |
| ------- | ------------------------------------ |
| 5       | 00000000000000000000000000000101     |
| 1       | 00000000000000000000000000000001     |
| 5 \| 1  | 00000000000000000000000000000101 (5) |

&nbsp;

## Example

```js
let x = 5 | 1;
```

&nbsp;

&nbsp;

# JavaScript Bitwise XOR

When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different.

&nbsp;

## One bit example

| Operation | Result |
| --------- | ------ |
| 0 ^ 0     | 0      |
| 0 ^ 1     | 1      |
| 1 ^ 0     | 1      |
| 1 ^ 1     | 0      |

&nbsp;

## 4 bits example

| Operation   | Result |
| ----------- | ------ |
| 1111 ^ 0000 | 1111   |
| 1111 ^ 0001 | 1110   |
| 1111 ^ 0010 | 1101   |
| 1111 ^ 0100 | 1011   |

&nbsp;

Bitwise XOR returns 1 if the bits are different:

| Decimal | Binary                               |
| ------- | ------------------------------------ |
| 5       | 00000000000000000000000000000101     |
| 1       | 00000000000000000000000000000001     |
| 5 ^ 1   | 00000000000000000000000000000100 (4) |

&nbsp;

## Example

```js
let x = 5 ^ 1;
```

&nbsp;

&nbsp;

# JavaScript Bitwise NOT (~)

Inverts all bits (0 → 1, 1 → 0).

&nbsp;

| Decimal | Binary                                |
| ------- | ------------------------------------- |
| 5       | 00000000000000000000000000000101      |
| ~5      | 11111111111111111111111111111010 (-6) |

&nbsp;

## Example

```js
let x = ~5;
```

&nbsp;

&nbsp;

# JavaScript (Zero Fill) Bitwise Left Shift (<<)

- Shifts bits left by n places (Multiplies by 2^n).
- Fills right side with 0

&nbsp;

| Decimal | Binary                                |
| ------- | ------------------------------------- |
| 5       | 00000000000000000000000000000101      |
| 5 << 1  | 00000000000000000000000000001010 (10) |

&nbsp;

## Example

```js
let x = 5 << 1;
```

&nbsp;

&nbsp;

# JavaScript (Sign Preserving) Bitwise Right Shift (>>)

- Shifts bits right by n places (Divides by 2^n).
- Preserves sign (1 for negative numbers, 0 for positive)

&nbsp;

| Decimal | Binary                                |
| ------- | ------------------------------------- |
| -5      | 11111111111111111111111111111011      |
| -5 >> 1 | 11111111111111111111111111111101 (-3) |

&nbsp;

## Example

```js
let x = -5 >> 1;
```

&nbsp;

&nbsp;

# JavaScript (Zero Fill) Right Shift (>>>)

- Shifts bits right by n places, filling left with 0 (ignores sign).
- Works differently for negative numbers.

&nbsp;

| Decimal | Binary                               |
| ------- | ------------------------------------ |
| 5       | 00000000000000000000000000000101     |
| 5 >>> 1 | 00000000000000000000000000000010 (2) |

&nbsp;

## Example

```js
let x = 5 >>> 1;
```

&nbsp;

&nbsp;

# Difference Between >> and >>>

| Operator | Name                 | Fills Left Bits     | Works on                   | Example (x = -8) | Output     |
| -------- | -------------------- | ------------------- | -------------------------- | ---------------- | ---------- |
| >>       | Signed Right Shift   | Preserves sign bit  | Integers (int, long, etc.) | x >> 2           | -2         |
| >>>      | Unsigned Right Shift | Always fills with 0 | Only works on int and long | x >>> 2          | 1073741822 |
|          |                      |                     |                            |                  |            |

&nbsp;

&nbsp;

# When to Use >>>?

- Use `>>>` when you need to perform an unsigned shift, especially when dealing with bit manipulation or cryptographic algorithms.

- Do not use `>>>` when you need to maintain the sign of a number.

&nbsp;

&nbsp;

# Binary Numbers

Binary numbers with only one bit set are easy to understand:

| Binary Representation            | Decimal value |
| -------------------------------- | ------------- |
| 00000000000000000000000000000001 | 1             |
| 00000000000000000000000000000010 | 2             |
| 00000000000000000000000000000100 | 4             |
| 00000000000000000000000000001000 | 8             |
| 00000000000000000000000000010000 | 16            |
| 00000000000000000000000000100000 | 32            |
| 00000000000000000000000001000000 | 64            |

&nbsp;

Setting a few more bits reveals the binary pattern:

| Binary Representation            | Decimal value       |
| -------------------------------- | ------------------- |
| 00000000000000000000000000000101 | 5 (4 + 1)           |
| 00000000000000000000000000001101 | 13 (8 + 4 + 1)      |
| 00000000000000000000000000101101 | 45 (32 + 8 + 4 + 1) |

&nbsp;

JavaScript binary numbers are stored in two's complement format.

This means that a negative number is the bitwise NOT of the number plus 1:

| Binary Representation            | Decimal value |
| -------------------------------- | ------------- |
| 00000000000000000000000000000101 | 5             |
| 11111111111111111111111111111011 | -5            |
| 00000000000000000000000000000110 | 6             |
| 11111111111111111111111111111010 | -6            |
| 00000000000000000000000000101000 | 40            |
| 11111111111111111111111111011000 | -40           |

&nbsp;

&nbsp;

# Converting Decimal to Binary

## Example

```js
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
```

&nbsp;

&nbsp;

# Converting Binary to Decimal

## Example

```js
function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}
```

&nbsp;
