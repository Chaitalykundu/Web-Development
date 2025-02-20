# Overview

- [Overview](#overview)
- [continue statement](#continue-statement)
- [Syntax](#syntax)
- [Example](#example)
- [When to Use continue?](#when-to-use-continue)
- [Difference Between break and continue](#difference-between-break-and-continue)

# continue statement

The continue statement **skips the current iteration** of a loop and moves to the next iteration without stopping the entire loop.

&nbsp;

Typically used in for, while, and do…while loops.
Unlike break, which exits the loop, continue skips only the current iteration.

&nbsp;

&nbsp;

# Syntax

```js
continue;
```

&nbsp;

&nbsp;

# Example

This example skips the value of 3:

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>"; // 0 1 2 4
}
```

&nbsp;

&nbsp;

# When to Use continue?

- When skipping specific iterations (e.g., odd/even numbers).
- When avoiding unnecessary processing inside loops.
- When filtering out unwanted values in a loop.

&nbsp;

&nbsp;

# Difference Between break and continue

| Feature  | break                                | continue                                              |
| -------- | ------------------------------------ | ----------------------------------------------------- |
| Effect   | Exits the loop completely            | Skips the current iteration and moves to the next one |
| Use case | When you need to stop the loop early | When you need to skip certain iterations              |
| Best for | Exiting loops based on a condition   | Skipping unwanted values in loops                     |
|          |                                      |                                                       |

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
