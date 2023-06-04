The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

The loop will always be executed `at least once`, even if the condition is false, because the code block is executed before the condition is tested:

&nbsp;

# Flow Chart

<img src="../assets/while_loop.jpg">

&nbsp;

&nbsp;

# Syntax

```js
do {
  // code block to be executed
} while (condition);
```

&nbsp;

# Example

```js
do {
  text += "The number is " + i;
  i++;
} while (i < 10);
```

If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

&nbsp;

&nbsp;
