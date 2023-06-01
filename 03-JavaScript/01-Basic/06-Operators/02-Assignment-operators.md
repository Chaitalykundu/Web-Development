Assignment operators assign values to JavaScript variables.

The Addition Assignment Operator `(+=)` adds a value to a variable.

&nbsp;

## Example :

```js
let x = 10;
x += 5;
```

&nbsp;

# JavaScript Assignment Operators

| Operator | Name                               | Description         | Example                       |
| -------- | ---------------------------------- | ------------------- | ----------------------------- |
| =        |                                    | Assign              | 10+10 = 20                    |
| +=       | Addition Assignment Operator       | Add and assign      | var a=10; a+=20; Now a = 30   |
| -=       | Subtraction Assignment Operator    | Subtract and assign | var a=20; a-=10; Now a = 10   |
| \*=      | Multiplication Assignment Operator | Multiply and assign | var a=10; a\*=20; Now a = 200 |
| /=       | Division Assignment Operator       | Divide and assign   | var a=10; a/=2; Now a = 5     |
| %=       | Remainder Assignment Operator      | Modulus and assign  | var a=10; a%=2; Now a = 0     |
| \*\*=    | Exponentiation Assignment Operator | power and assign    |

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

&nbsp;

&nbsp;

# Logical Assignment Operators

| Operator | Name                            | Example   | Same As            |
| -------- | ------------------------------- | --------- | ------------------ |
| &&=      | Logical AND assignment operator | x &&= y   | x = x && (x = y)   |
| \|\|=    | Logical AND assignment operator | x \|\|= y | x = x \|\| (x = y) |
| ??=      | Logical AND assignment operator | x ??= y   | x = x ?? (x = y)   |

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

# The /= Operator

The **Division Assignment Operator** divides a variable.

## Example

```js
let x = 10;
x /= 5;
```

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
