# Overview

- [Overview](#overview)
- [do while loop](#do-while-loop)
- [Syntax](#syntax)
- [Example](#example)
- [Key Differences from while Loop](#key-differences-from-while-loop)
- [When to Use do...while?](#when-to-use-dowhile)

&nbsp;

&nbsp;

&nbsp;

# do while loop

The `do...while` loop is a variant of the while loop that ensures the loop body **executes at least once**, regardless of whether the condition is true or false.

If the condition is true, then it will repeat the loop as long as the condition is true.

&nbsp;

&nbsp;

# Syntax

```js
do {
  // code block to be executed
} while (condition);
```

&nbsp;

&nbsp;

# Example

```js
let i = 0;

do {
  text += "The number is " + i;
  i++;
} while (i < 10);
```

If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

&nbsp;

&nbsp;

# Key Differences from while Loop

- In a `while` loop, the condition is checked first, and if false, the loop does not run at all.

- In a `do...while` loop, the code executes first, then the condition is checked.

&nbsp;

&nbsp;

# When to Use do...while?

- When the code must run at least once, even if the condition is false.
- When prompting for user input validation.
- When working with randomized conditions.
- When retrying an operation until success (e.g., fetching data, logging in).

&nbsp;

&nbsp;
