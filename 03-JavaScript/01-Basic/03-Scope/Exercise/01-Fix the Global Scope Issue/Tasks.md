# Problem Statement

The following JavaScript function has a problem where a variable is automatically becoming global. Identify the issue and fix it by properly declaring variables.

&nbsp;

&nbsp;

```js
function updateScore() {
  score = 10; // ❌ This is becoming an automatically global variable
  console.log("Score updated:", score);
}

updateScore();
console.log(score); // Should not be accessible globally, but it is!
```

&nbsp;

&nbsp;

# Tasks

- Identify the problem in the code.
- Fix the issue by ensuring score is not automatically global.
- Use the best practice (let, const, or var) to prevent global pollution.

&nbsp;

&nbsp;

# Expected Output (After Fixing)

- The score variable should only exist inside the function.
- Trying to access score outside the function should give an error.

&nbsp;

&nbsp;

&nbsp;
