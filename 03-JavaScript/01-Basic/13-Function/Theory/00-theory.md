# Overview

- [Overview](#overview)
- [Definition](#definition)
- [Features of Function / Why do we use functions](#features-of-function--why-do-we-use-functions)
- [Function Components](#function-components)
- [Syntax](#syntax)
- [Example](#example)
- [Types of Functions](#types-of-functions)
- [Keyword Description](#keyword-description)
- [Terminology](#terminology)
  - [Modularity](#modularity)
  - [Parameterization](#parameterization)

&nbsp;

&nbsp;

&nbsp;

# Definition

A function is a block of codes designed to perform a particular task.

It is reusable.

It helps in organizing code, reducing redundancy, and making programs more readable and maintainable.

&nbsp;

&nbsp;

# Features of Function / Why do we use functions

1. **Code Reusability :** Functions allow us to define a block of code that can be used multiple times.

2. **Abstraction & Encapsulation :** Functions help abstract away complex operations by providing a higher level interface. They also allow us to encapsulate a series of instructions into a single unit making our code more organization and easier to understand.

3. **Modularity :** Functions enable us to break down a large problem into smaller, manageable tasks.

4. **Code organization :** Functions enable code organization by breaking complex tasks into modular, reusable, and well-structured blocks.

5. **Readability & Maintainability :** Large programs become easier to maintain and update and improve readability by organizing code into logical blocks.

6. **Parameterization & flexibility :** Parameterization enhances flexibility by allowing functions to accept dynamic inputs, making them reusable for different scenarios.

7. **Function Composition :** Functions can be composed meaning they can be combined to create a new functions that perform complex operations.

&nbsp;

&nbsp;

# Function Components

- **Function Definition** - Declares the function with its logic.
- **Function Name** - Identifies the function.
- **Parameters** (Optional) - Inputs provided to the function.
- **Return Statement** (Optional) - Outputs a result.
- **Function Call** - Executes the function.

&nbsp;

&nbsp;

# Syntax

```js
function function_name(parameter) {
  // Code to be executed
  // return statement;
}

console.log(function_name(arguments)); // function call
```

&nbsp;

&nbsp;

# Example

```js
function greet(name) {
  // Function Definition
  return "Hello, " + name + "!"; // Returns a value
}

console.log(greet("Alice")); // Function Call
// Output: Hello, Alice!
```

&nbsp;

&nbsp;

# Types of Functions

- **Named Functions** - A function expression can also have a name (useful for recursion and debugging).

- **Anonymous Functions** - Functions without a name - (e.g., arrow functions in JavaScript).

- **Arrow Functions** - Arrow functions provide a shorter syntax for function expressions.

- **Immediately Invoked Function Expressions (IIFE)** - An IIFE is a function that runs immediately after being defined.

- **Generator Functions** - A generator function allows pausing and resuming execution using yield.

- **Constructor Functions** - JavaScript allows functions to be created dynamically using the Function constructor.

- **Higher-Order Functions** - Functions that take other functions as arguments or return them.

- **Callback Functions** -

- **Async Functions** - An async function allows handling asynchronous operations more easily.

- **Recursive Functions** - Calls itself to solve problems (e.g., factorial computation).

&nbsp;

&nbsp;

# Keyword Description

| function              | Standard function declaration    |
| --------------------- | -------------------------------- |
| function (expression) | Function assigned to a variable  |
| => (arrow function)   | Shorter syntax for functions     |
| async function        | Defines an asynchronous function |
| function\*            | Defines a generator function     |
| new Function()        | Dynamically creates a function   |
|                       |                                  |

&nbsp;

&nbsp;

# Terminology

## Modularity

Modularity refers to the practice of breaking down a system or program into separate, self-contained
modules or components.

&nbsp;

## Parameterization

Parameterization is the process of defining parameters in a function to make it more flexible and reusable by allowing different inputs.

&nbsp;
