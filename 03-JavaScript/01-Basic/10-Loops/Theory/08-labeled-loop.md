# Overview

- [Overview](#overview)
- [Labeled loop](#labeled-loop)
- [Syntax](#syntax)
- [Example](#example)
  - [Using `break` in a Labeled Loop](#using-break-in-a-labeled-loop)
  - [Using `continue` in a Labeled Loop](#using-continue-in-a-labeled-loop)
- [When to Use Labeled Loops?](#when-to-use-labeled-loops)
- [When to Use Labeled Loops in Real Projects?](#when-to-use-labeled-loops-in-real-projects)
- [Real Life Example](#real-life-example)

&nbsp;

&nbsp;

&nbsp;

# Labeled loop

A **labeled loop** is a way to assign a label (or name) to a loop, allowing you to use break or continue to control outer loops in nested loop structures.

&nbsp;

&nbsp;

# Syntax

```js
labelName: for (initialization; condition; increment) {
  for (initialization; condition; increment) {
    if (condition) {
      break labelName; // Exits the labeled loop
    }
  }
}
```

&nbsp;

- **labelName** → A custom name for the loop.
- **break labelName;** → Exits the entire labeled loop.
- **continue labelName;** → Skips to the next iteration of the labeled loop.

&nbsp;

&nbsp;

# Example

## Using `break` in a Labeled Loop

```js
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log(`Breaking out of outerLoop at i=${i}, j=${j}`);
      break outerLoop; // Exits both loops
    }
    console.log(`i=${i}, j=${j}`);
  }
}
```

&nbsp;

## Using `continue` in a Labeled Loop

```js
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log(`Skipping to next iteration of outerLoop at i=${i}, j=${j}`);
      continue outerLoop; // Skips the rest of inner loop and moves to next `i`
    }
    console.log(`i=${i}, j=${j}`);
  }
}
```

&nbsp;

&nbsp;

# When to Use Labeled Loops?

- When you need to exit multiple loops at once (**break labelName;**).
- When you want to skip the current iteration of an outer loop (**continue labelName;**).
- When dealing with deeply nested loops to improve code readability.

&nbsp;

&nbsp;

# When to Use Labeled Loops in Real Projects?

- Searching large datasets and stopping early.
- Form validation to exit checking once an error is found.
- Multi-level data processing where early exit saves time.

&nbsp;

&nbsp;

# Real Life Example

```js
let store = [
  ["Laptop", "Phone", "Tablet"],
  ["Shoes", "Shirt", "Jacket"],
  ["Apple", "Banana", "Mango"],
];
let searchItem = "Shirt";
let found = false;
searchLoop: for (let category of store) {
  for (let item of category) {
    if (item === searchItem) {
      console.log(`✅ Found "${searchItem}" in the store!`);
      found = true;
      break searchLoop; // Exit both loops
    }
  }
}
if (!found) {
  console.log(`"${searchItem}" not found in the store.`);
}
```

&nbsp;
&nbsp;
