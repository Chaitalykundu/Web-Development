# Overview

- [Overview](#overview)
- [Logical operator](#logical-operator)
  - [Example](#example)
- [Logical AND (\&\&)](#logical-and-)
  - [Example](#example-1)
- [Logical OR (||)](#logical-or-)
  - [Example](#example-2)
- [Logical NOT (!)](#logical-not-)
  - [Example](#example-3)
- [Short-Circuit Behavior](#short-circuit-behavior)

&nbsp;

&nbsp;

&nbsp;

# Logical operator

Logical operators are used to determine the logic between variables or values.

Comparison and Logical operators are used to test for true or false.

These are used to perform boolean (true/false) operations

&nbsp;

&nbsp;

## Example

```js
let x = 10;
if (x == 5 || x == 10) return true;
```

&nbsp;

&nbsp;

| Operator | Description | Example                     |
| -------- | ----------- | --------------------------- |
| &&       | Logical AND | (10==10 && 20==33) = false  |
| \|\|     | Logical OR  | (10==10 \|\| 20==33) = true |
| !        | Logical Not | !(10==20) = true            |
|          |             |                             |

&nbsp;

&nbsp;

# Logical AND (&&)

Returns true if both operands are true;
otherwise, it returns false.

&nbsp;

### Example

```js
let a = true,
  b = false;
console.log(a && b); // Output: false
console.log(a && true); // Output: true
console.log(5 > 3 && 10 > 5); // Output: true
```

&nbsp;

&nbsp;

# Logical OR (||)

Returns true if at least one operand is true;
otherwise, it returns false.

&nbsp;

### Example

```js
let a = true,
  b = false;
console.log(a || b); // Output: true
console.log(b || false); // Output: false
console.log(5 < 3 || 10 > 5); // Output: true
```

&nbsp;

&nbsp;

# Logical NOT (!)

Negates (reverses) a boolean value.

&nbsp;

### Example

```js
let a = true;
console.log(!a); // Output: false
console.log(!false); // Output: true
console.log(!(5 > 3)); // Output: false
```

&nbsp;

&nbsp;

# Short-Circuit Behavior

Logical operators use short-circuiting:

- **For && (AND)**: If the first condition is false, the second condition is not evaluated.

- **For || (OR)**: If the first condition is true, the second condition is not evaluated
