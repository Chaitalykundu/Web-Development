# Overview

- [Overview](#overview)
- [Ternary operator](#ternary-operator)
- [Syntax](#syntax)
- [Example](#example)
- [Advantages](#advantages)
- [Nested Ternary Operator](#nested-ternary-operator)

&nbsp;

&nbsp;

&nbsp;

# Ternary operator

JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

The ternary operator is a concise way to write an `if-else` statement in a single line.

Ternary operator is also known as **Conditional** operator.

&nbsp;

&nbsp;

# Syntax

```js
variablename = condition ? value1 : value2;
```

&nbsp;

&nbsp;

# Example

```js
let voteable = age < 18 ? "Too young" : "Old enough";
```

&nbsp;

&nbsp;

# Advantages

- **Concise**: Reduces lines of code compared to if-else.
- **Readable**: Useful for simple conditions.

&nbsp;

&nbsp;

# Nested Ternary Operator

```js
let score = 85;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log(grade); // Output: "B"
```

&nbsp;

&nbsp;

&nbsp;
