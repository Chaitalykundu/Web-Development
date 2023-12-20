# `const` keyword

The `const` keyword was introduced in ES6 (2015).

Variables defined with `const` cannot be Redeclared.

Variables defined with `const` cannot be Reassigned.

Variables defined with `const` have Block Scope.

&nbsp;

&nbsp;

# When to use JavaScript const?

Always declare a variable with `const` when you know that the value should **not be changed**.

## Example

```js
const PI = 3.141592653589793;
```

&nbsp;

Use `const` when you declare:

- A new Array
- A new Object
- A new Function
- A new RegExp

&nbsp;

&nbsp;

# Must be Assigned

JavaScript `const` variables must be assigned a value when they are declared

```js
// Correct
const PI = 3.14159265359;


// Incorrect
const PI;
PI = 3.14159265359;

```

&nbsp;

&nbsp;

# Cannot be Reassigned

A `const` variable cannot be reassigned:

```js
const PI = 3.141592653589793;
PI = 3.14; // This will give an error
PI = PI + 10; // This will also give an error
```

&nbsp;

&nbsp;

# Block Scope

Before ES6 (2015), JavaScript had **Global Scope** and **Function Scope**.

ES6 introduced two important new JavaScript keywords: `let` and `const`.These two keywords provide **Block Scope** in JavaScript.

Variables declared inside a `{ }` block cannot be accessed from outside the block

&nbsp;

## Example

```js
const x = 10;
// Here x is 10

{
  const x = 2;
  // Here x is 2
}

// Here x is 10
```

&nbsp;

&nbsp;

# Redeclaring Variables

Redeclaring an existing `var` or `let` variable to `const`, in the same scope, is not allowed:

&nbsp;

## Example

```js
var x = 2; // Allowed
const x = 2; // Not allowed

{
  let x = 2; // Allowed
  const x = 2; // Not allowed
}

{
  const x = 2; // Allowed
  const x = 2; // Not allowed
}
```

&nbsp;

&nbsp;

# `const` Hoisting

Variables defined with `const` are also hoisted to the top of the block, but not initialized.

Meaning: Using a `const` variable before it is declared will result in a `ReferenceError`:

## Example

```js
carName = "Saab";
const carName = "Volvo";
```

&nbsp;
&nbsp;
