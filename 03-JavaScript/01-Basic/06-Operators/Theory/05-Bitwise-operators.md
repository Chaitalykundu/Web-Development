The bitwise operators perform bitwise operations on operands.
&nbsp;

# Example :

```js
let x = 5 & 1;
```

&nbsp;

# Bitwise Operator

| Operator | Name                          | Description                                                                                              | Example                    |
| -------- | ----------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------- |
| &        | Bitwise AND                   | Sets each bit to 1 if both bits are 1                                                                    | (10==20 & 20==33) = false  |
| \|       | Bitwise OR                    | Sets each bit to 1 if one of two bits is 1                                                               | (10==20 \| 20==33) = false |
| ^        | Bitwise XOR                   | Sets each bit to 1 if only one of two bits is 1                                                          | (10==20 ^ 20==33) = false  |
| ~        | Bitwise NOT                   | Inverts all the bits                                                                                     | (~10) = -10                |
| <<       | Bitwise Left Shift            | Shifts left by pushing zeros in from the right and let the leftmost bits fall off                        | (10<<2) = 40               |
| >>       | Bitwise Right Shift           | Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off | (10>>2) = 2                |
| >>>      | Bitwise Right Shift with Zero | Shifts right by pushing zeros in from the left, and let the rightmost bits fall off                      | (10>>>2) = 2               |

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

&nbsp;

&nbsp;

# JavaScript Uses 32 bits Bitwise Operands

JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

&nbsp;

&nbsp;

# JavaScript Bitwise AND

When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.

## One bit example:

| Operation | Result |
| --------- | ------ |
| 0 & 0     | 0      |
| 0 & 1     | 0      |
| 1 & 0     | 0      |
| 1 & 1     | 1      |

&nbsp;

## 4 bits example:

| Operation   | Result |
| ----------- | ------ |
| 1111 & 0000 | 0000   |
| 1111 & 0001 | 0001   |
| 1111 & 0010 | 0010   |
| 1111 & 0100 | 0100   |

&nbsp;

&nbsp;

# JavaScript Bitwise OR

When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits is 1:

## One bit example:

| Operation | Result |
| --------- | ------ |
| 0 \| 0    | 0      |
| 0 \| 1    | 1      |
| 1 \| 0    | 1      |
| 1 \| 1    | 1      |

&nbsp;

## 4 bits example:

| Operation    | Result |
| ------------ | ------ |
| 1111 \| 0000 | 1111   |
| 1111 \| 0001 | 1111   |
| 1111 \| 0010 | 1111   |
| 1111 \| 0100 | 1111   |

&nbsp;

&nbsp;

# JavaScript Bitwise XOR

When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:

## One bit example:

| Operation | Result |
| --------- | ------ |
| 0 ^ 0     | 0      |
| 0 ^ 1     | 1      |
| 1 ^ 0     | 1      |
| 1 ^ 1     | 0      |

&nbsp;

## 4 bits example:

| Operation   | Result |
| ----------- | ------ |
| 1111 ^ 0000 | 1111   |
| 1111 ^ 0001 | 1110   |
| 1111 ^ 0010 | 1101   |
| 1111 ^ 0100 | 1011   |

&nbsp;

&nbsp;

# JavaScript Bitwise AND (&)

Bitwise AND returns 1 only if both bits are 1:

| Decimal | Binary                               |
| ------- | ------------------------------------ |
| 5       | 00000000000000000000000000000101     |
| 1       | 00000000000000000000000000000001     |
| 5 & 1   | 00000000000000000000000000000001 (1) |

&nbsp;

## Example

```js
let x = 5 & 1;
```

&nbsp;

&nbsp;

# JavaScript Bitwise OR (|)

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

# JavaScript Bitwise XOR (^)

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

This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:

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

This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:

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

This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

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
