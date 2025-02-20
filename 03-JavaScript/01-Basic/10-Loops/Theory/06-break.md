# Overview

- [Overview](#overview)
- [break statement](#break-statement)
- [Syntax](#syntax)
- [Example](#example)
- [When to Use break](#when-to-use-break)

&nbsp;

&nbsp;

&nbsp;

# break statement

The `break` statement **"jumps out"** of a loop.

&nbsp;

The `break` statement is used to **exit a loop or switch statement immediately**, stopping further execution.

It is typically used inside **for, while, do…while, and switch statements**.

&nbsp;

&nbsp;

# Syntax

```js
break;
```

&nbsp;

&nbsp;

# Example

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>"; // 0 1 2
}
```

&nbsp;

&nbsp;

# When to Use break

- To stop a loop when a condition is met.
- To exit a switch case to avoid fall-through.
- To break out of nested loops (using labels).
- To optimize performance by avoiding unnecessary iterations.
