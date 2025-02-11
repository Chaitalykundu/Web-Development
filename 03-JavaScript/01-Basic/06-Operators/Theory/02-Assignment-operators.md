# Overview

- [Overview](#overview)
- [Assignment operator](#assignment-operator)
- [Example](#example)
- [Types of Assignment Operators](#types-of-assignment-operators)
- [Basic Assignment Operator](#basic-assignment-operator)
- [Compound Assignment Operators](#compound-assignment-operators)
- [Shift Assignment Operators](#shift-assignment-operators)
- [Bitwise Assignment Operators](#bitwise-assignment-operators)
- [Logical Assignment Operators](#logical-assignment-operators)
- [Chained Assignment Operator](#chained-assignment-operator)
    - [Example](#example-1)
- [The += Operator](#the--operator)
  - [Examples](#examples)
- [The -= Operator](#the---operator)
  - [Example](#example-2)
- [The \*= Operator](#the--operator-1)
  - [Example](#example-3)
- [The /= Operator](#the--operator-2)
  - [Example](#example-4)
- [The %= Operator](#the--operator-3)
  - [Example](#example-5)
- [The \*\*= Operator](#the--operator-4)
  - [Example](#example-6)
- [The \<\<= Operator](#the--operator-5)
  - [Example](#example-7)
- [The \>\>= Operator](#the--operator-6)
  - [Example](#example-8)
- [The \>\>\>= Operator](#the--operator-7)
  - [Example](#example-9)
- [The \&= Operator](#the--operator-8)
  - [Example](#example-10)
- [The |= Operator](#the--operator-9)
  - [Example](#example-11)
- [The ^= Operator](#the--operator-10)
  - [Example](#example-12)
- [The \&\&= Operator](#the--operator-11)
  - [Example](#example-13)
- [The ||= Operator](#the--operator-12)
  - [Example](#example-14)
- [The ??= Operator](#the--operator-13)
  - [Example](#example-15)
- [Special Cases](#special-cases)

&nbsp;

&nbsp;

&nbsp;

# Assignment operator

Assignment operator Assignment operators are used to assign values to JavaScript variables.

The most basic assignment operator is the **=** (equal sign)

&nbsp;

&nbsp;

# Example

The Addition Assignment Operator `(+=)` adds a value to a variable.

```js
let x = 10;
x += 5;
```

&nbsp;

&nbsp;

# Types of Assignment Operators

1. Basic Assignment Operator
2. Compound Assignment Operators
3. Shift Assignment Operators
4. Bitwise Assignment Operators
5. Logical Assignment Operators
6. Chained Assignment Operator

&nbsp;

&nbsp;

# Basic Assignment Operator

| Operator | Name                | Description | Example    |
| -------- | ------------------- | ----------- | ---------- |
| =        | Assignment Operator | Assign      | 10+10 = 20 |

&nbsp;

&nbsp;

# Compound Assignment Operators

| Operator | Name                               | Description         | Example                       |
| -------- | ---------------------------------- | ------------------- | ----------------------------- |
| =        | Assignment Operator                | Assign              | 10+10 = 20                    |
| +=       | Addition Assignment Operator       | Add and assign      | var a=10; a+=20; Now a = 30   |
| -=       | Subtraction Assignment Operator    | Subtract and assign | var a=20; a-=10; Now a = 10   |
| \*=      | Multiplication Assignment Operator | Multiply and assign | var a=10; a\*=20; Now a = 200 |
| /=       | Division Assignment Operator       | Divide and assign   | var a=10; a/=2; Now a = 5     |
| %=       | Remainder Assignment Operator      | Modulus and assign  | var a=10; a%=2; Now a = 0     |
| \*\*=    | Exponentiation Assignment Operator | power and assign    |                               |
|          |                                    |                     |                               |

&nbsp;

&nbsp;

# Shift Assignment Operators

| Operator | Name                                     | Example  | Same As     |
| -------- | ---------------------------------------- | -------- | ----------- |
| <<=      | Left Shift Assignment Operator           | x <<= y  | x = x << y  |
| >>=      | Right Shift Assignment Operator          | x >>= y  | x = x >> y  |
| >>>=     | Unsigned Right Shift Assignment Operator | x >>>= y | x = x >>> y |

&nbsp;

&nbsp;

# Bitwise Assignment Operators

| Operator | Name                            | Example | Same As    |
| -------- | ------------------------------- | ------- | ---------- |
| &=       | Bitwise AND Assignment Operator | x &= y  | x = x & y  |
| \|=      | Bitwise OR Assignment Operator  | x \|= y | x = x \| y |
| ^=       | Bitwise XOR Assignment Operator | x ^= y  | x = x ^ y  |
|          |                                 |         |            |

&nbsp;

&nbsp;

# Logical Assignment Operators

| Operator | Name                            | Example   | Same As            |
| -------- | ------------------------------- | --------- | ------------------ |
| &&=      | Logical AND assignment operator | x &&= y   | x = x && (x = y)   |
| \|\|=    | Logical AND assignment operator | x \|\|= y | x = x \|\| (x = y) |
| ??=      | Logical AND assignment operator | x ??= y   | x = x ?? (x = y)   |
|          |                                 |           |                    |

&nbsp;

&nbsp;

# Chained Assignment Operator

Multiple variables can be assigned the same value in a single line.

&nbsp;

### Example

```js
let a, b, c;
a = b = c = 20; // All three variables get assigned 20
console.log(a, b, c); // Output: 20 20 20
```

&nbsp;

&nbsp;

&nbsp;

# The += Operator

The **Addition Assignment Operator** adds a value to a variable.

## Examples

```js
let x = 10;
x += 5;

let text = "Hello";
text += " World";
```

&nbsp;

&nbsp;

# The -= Operator

The **Subtraction Assignment Operator** subtracts a value from a variable.

## Example

```js
let x = 10;
x -= 5;
```

&nbsp;

&nbsp;

# The \*= Operator

The **Multiplication Assignment Operator** multiplies a variable.

## Example

```js
let x = 10;
x \*= 5;
```

&nbsp;

&nbsp;

# The /= Operator

The **Division Assignment Operator** divides a variable.

## Example

```js
let x = 10;
x /= 5;
```

&nbsp;

&nbsp;

# The %= Operator

The **Remainder Assignment Operator =** assigns a remainder to a variable.

## Example

```js
let x = 10;
x %= 5;
```

&nbsp;

&nbsp;

# The \*\*= Operator

The **Exponentiation Assignment Operator** raises a variable to the power of the operand.

## Example

```js
let x = 10;
x \*\*= 5;
```

&nbsp;

&nbsp;

# The <<= Operator

The **Left Shift Assignment Operator** left shifts a variable.

## Example

```js
let x = -100;
x <<= 5;
```

# The >>= Operator

The **Right Shift Assignment Operator** right shifts a variable (signed).

## Example

```js
let x = -100;
x >>= 5;
```

&nbsp;

&nbsp;

# The >>>= Operator

The **Unsigned Right Shift Assignment Operator** right shifts a variable (unsigned).

## Example

```js
let x = -100;
x >>>= 5;
```

&nbsp;

&nbsp;

# The &= Operator

The **Bitwise AND Assignment Operator** does a bitwise AND operation on two operands and assigns the result to the the variable.

## Example

```js
let x = 10;
x &= 5;
```

&nbsp;

&nbsp;

# The |= Operator

The **Bitwise OR Assignment Operator** does a bitwise OR operation on two operands and assigns the result to the variable.

## Example

```js
let x = 10;
x |= 5;
```

&nbsp;

&nbsp;

# The ^= Operator

The **Bitwise XOR Assignment Operator** does a bitwise XOR operation on two operands and assigns the result to the variable.

## Example

```js
let x = 10;
x ^= 5;
```

&nbsp;

&nbsp;

# The &&= Operator

The **Logical AND assignment operator** is used between two values.

If the first value is true, the second value is assigned.

## Example

```js
let x = 10;
x &&= 5;
```

&nbsp;

&nbsp;

# The ||= Operator

The **Logical OR assignment operator** is used between two values.

If the first value is false, the second value is assigned.

## Example

```js
let x = 10;
x ||= 5;
```

&nbsp;

&nbsp;

# The ??= Operator

The **Nullish coalescing assignment operator** is used between two values.

If the first value is undefined or null, the second value is assigned.

## Example

```js
let x = 10;
x ??= 5;
```

&nbsp;

&nbsp;

# Special Cases

- When using `/=` in JavaScript, division by zero results in **Infinity**.
- In Java, division by zero for integers causes an **ArithmeticException**.
- The `%=` operator gives the remainder, and in JavaScript, (-5 % 3) results in -2 (sign follows the numerator).
