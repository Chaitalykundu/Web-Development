# Overview

- [Overview](#overview)
- [while loop](#while-loop)
- [Flow Chart](#flow-chart)
- [Syntax](#syntax)
- [Example](#example)
- [When to Use while Loop](#when-to-use-while-loop)

&nbsp;

&nbsp;

&nbsp;

# while loop

The `while loop` loops through a block of code as long as a specified condition is true.

It is useful when the **number of iterations is unknown** beforehand and depends on a condition.

The purpose of a `while loop` is to execute a statement or code block repeatedly as long as an expression is true. Once the expression becomes false, the loop terminates.

&nbsp;

&nbsp;

# Flow Chart

<img src="../../../assets/while_loop.jpg">

&nbsp;

&nbsp;

# Syntax

```js
while (condition) {
  // code block to be executed
}
```

&nbsp;

&nbsp;

# Example

```js
let count = 0;

while (count < 5) {
  console.log("Iteration:", count);
  count++; // Increment to avoid infinite loop
}
```

If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

&nbsp;

&nbsp;

# When to Use while Loop

- When the number of iterations is unknown beforehand.
- When waiting for a specific condition to be met (e.g., user input).
- When dealing with event-driven loops (e.g., polling, game loops).

&nbsp;

&nbsp;
