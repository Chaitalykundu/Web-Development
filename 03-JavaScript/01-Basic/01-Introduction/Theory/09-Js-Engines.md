# Overview

- [Overview](#overview)

&nbsp;

&nbsp;

&nbsp;

# JavaScript Engine

A JavaScript engine is a software or program that executes JavaScript code. It takes JavaScript code (written by developers) and converts it into machine code that the computer can understand.

It is like a powerful interpreter.

&nbsp;

&nbsp;

# Popular JavaScript Engines

| Browser         | JavaScript Engine       |
| --------------- | ----------------------- |
| Google Chrome   | V8                      |
| Mozilla Firefox | SpiderMonkey            |
| Microsoft Edge  | Chakra (Old) / V8 (New) |
| Safari          | JavaScriptCore (Nitro)  |
| Opera           | V8                      |
|                 |                         |

&nbsp;

&nbsp;

Some of the most popular JS engines today are :

1. **V8** - Developed by Google, V8 is one of the most widely used JavaScript engines. It powers the JavaScript execution in Google Chrome and Node.js.

2. **SpiderMonkey** - Developed by Mozilla Firefox, SpiderMonkey is the JavaScript engine used in the Firefox web browser. It was one of the first JavaScript engines ever created and is known for its performance and compliance with JavaScript standards.

3. **JavaScriptCore** - Used in Safari, known for its tight integration with Apple devices.

4. **Chakra** - Developed by Microsoft, Chakra was the JavaScript engine used in the Edge web browser. It has now been replaced by the Chromium-based Edge browser, which uses V8 as its JavaScript engine.

&nbsp;

&nbsp;

&nbsp;

# How a JavaScript Engine Works

A JavaScript engine follows these key steps:

&nbsp;

## 1. Parsing (Lexical Analysis & Syntax Analysis)

The engine reads JavaScript code and breaks it down into tokens.
Tokens are then converted into an Abstract Syntax Tree (AST).

&nbsp;

### Example of Parsing

```js
let x = 10 + 5;
```

The engine converts this into a syntax tree:

```scss
Assignment (let x)
 ├── Addition (+)
 │    ├── Number (10)
 │    ├── Number (5)
```

&nbsp;

&nbsp;

## 2. Compilation (JIT Compilation)

Unlike traditional languages (which are compiled beforehand), JavaScript uses **Just-In-Time (JIT) compilation**, meaning:

- The code is compiled at runtime.
- JIT Compiler converts JavaScript code into machine code just before execution for faster performance.

&nbsp;

&nbsp;

## 3. Execution

The compiled code is optimized and then executed.
The Garbage Collector (GC) manages memory automatically.

&nbsp;

### Example of Execution

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
```

The engine optimizes function calls and executes them efficiently.

&nbsp;

&nbsp;

# JIT (Just-In-Time) compilation

JIT - Just In Time

JIT (Just-In-Time) compilation is a technique used by JavaScript engines to improve performance by compiling code at runtime instead of before execution.

&nbsp;

It combines the advantages of:

- Interpretation (fast startup, executes line-by-line)
- Compilation (optimized machine code for better performance)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
