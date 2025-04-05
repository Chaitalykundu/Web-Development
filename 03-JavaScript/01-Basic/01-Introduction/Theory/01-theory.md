# Overview

- [Overview](#overview)
- [Programming](#programming)
- [ECMAScript](#ecmascript)
  - [Why ECMAScript Matters](#why-ecmascript-matters)
- [JavaScript](#javascript)
- [Features of JavaScript](#features-of-javascript)
- [Application of JavaScript](#application-of-javascript)
- [What can we build using JavaScript](#what-can-we-build-using-javascript)
- [Key Points](#key-points)
  - [High-level language](#high-level-language)
  - [Light-weight programming language](#light-weight-programming-language)
  - [Interpreted language](#interpreted-language)
- [Dynamic Language](#dynamic-language)
  - [JavaScript is dynamically typed, meaning:](#javascript-is-dynamically-typed-meaning)
  - [Weakly typed (loosely typed) language](#weakly-typed-loosely-typed-language)
- [EcmaScript vs JavaScript](#ecmascript-vs-javascript)
- [Statically Typed vs. Dynamically Typed Languages](#statically-typed-vs-dynamically-typed-languages)

&nbsp;

&nbsp;

&nbsp;

# Programming

Programming is a way to talk to computers.

&nbsp;

# ECMAScript

`ES` stands for **ECMAScript**.

`ECMA` defines specifications of scripting language.

`ECMAScript` (/ˈɛkməskrɪpt/; ES) is a specification or standard that tells how scripting language should be.

The **ECMAScript** specification is a blueprint for creating a scripting language. **JavaScript** is an implementation of that blueprint.

It was created to ensure that different documents on javascript are talking about the same language.

&nbsp;

&nbsp;

## Why ECMAScript Matters

- Ensures **compatibility** and **consistency** across JavaScript
  engines (V8, SpiderMonkey, Chakra, etc.).

- Provides modern features that improve code readability,
  performance, and maintainability.

- Helps developers understand how JavaScript evolves over time.

&nbsp;

&nbsp;

# JavaScript

JavaScript is a **high-level, lightweight, interpreted, event-based, client-side, object-oriented dynamic programming language**.

JavaScript is used to create client-side dynamic pages.

This is a scripting language for web pages.

&nbsp;

JavaScript is not a compiled language, but it is a translated language. The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser.

&nbsp;

&nbsp;

# Features of JavaScript

<img src="../../assets/features-of-js.png" height=300px>

&nbsp;

- **_Scripting_** : Javascript executes the client-side script in the browser.

- **_Interpreted language_** : No need for compilation. The browser interprets JavaScript code.

- **_Event Handling_** : Events are actions. Javascript provides event-handling options.

- **_Light Weight_** : As Javascript is not a compiled language, source code never changes to byte code before running time. Low-end devices can also run Javascript because of its lightweight feature.

- **_Case Sensitive_** : In Javascript, names, variables, keywords, and functions are case-sensitive.

- **_Control Statements_** : Javascript has control statements like if-else-if, switch case, and loop. Users can write complex code using these control statements.

- **_Objects as first-class Citizens_** : Javascript arrays, functions, and symbols are objects which can inherit the Object prototype properties. Objects being first-class citizens means Objects can do all tasks.

- **_Supports Functional Programming_** : Javascript functions can be an argument to another function, can call by reference, and can assign to a variable.

- **_Dynamic Typing_** : Javascript variables can have any value type. The same variable can have a string value, an integer value, or any other.

- **_Client-side Validations_** : Javascript client-side validations allow users to submit valid data to the server during a form submission.

- **_Platform Independent_** : Javascript will run in the same way in all systems with any operating system.

- **_Backward compatible_**

&nbsp;

&nbsp;

# Application of JavaScript

JavaScript is used to create interactive websites. It is mainly used for:

- modifying an HTML page dynamically.
- changing the HTML contents or attributes
- changing CSS style
- hiding elements or showing the hidden html elements
- validating user input
- create cookies
- Displaying date and time,
- Displaying pop-up windows and dialog boxes (like an alert dialog box, confirm dialog box and prompt dialog box),
- Displaying clocks etc.
- Javascript user interaction does not require any communication with the server

&nbsp;

&nbsp;

# What can we build using JavaScript

- Websites
- Web-server
- Game Development
- 3-D drawing
- Mobile apps
- Smart watch apps

&nbsp;

&nbsp;

# Key Points

## High-level language

A high-level language is one that is designed to be easy for humans to read and write.

It abstracts away complex details like memory management, register allocation, and CPU instructions, allowing developers to focus on logic rather than low-level hardware operations.

&nbsp;

## Light-weight programming language

Lightweight programming languages are designed to have small memory footprint, are easy to implement.

&nbsp;

## Interpreted language

An interpreted language is executed line-by-line at runtime by an interpreter, rather than being compiled into machine code beforehand.

&nbsp;

&nbsp;

# Dynamic Language

A dynamic language allows changes to variables, objects, and types at runtime (without needing explicit type declarations).

&nbsp;

### JavaScript is dynamically typed, meaning:

- You don't need to declare variable types explicitly (let x = 10; instead of int x = 10;).

- A variable can hold different types at different times (let x = 10; x = "hello"; is valid).

- Type errors are only caught at runtime (console.log(5 + "5"); // "55" instead of throwing an error).

However, TypeScript (a superset of JavaScript) brings static typing to JavaScript, allowing type checking at compile time.

&nbsp;

&nbsp;

## Weakly typed (loosely typed) language

A weakly typed (loosely typed) language allows implicit type conversions (type coercion), meaning variables can be used in operations even if they are of different types. The language automatically converts values between types as needed.

&nbsp;

&nbsp;

# EcmaScript vs JavaScript

| Feature         | ECMAScript                                                  | JavaScript                                                             |
| --------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| Definition      | Language Specification                                      | Language Implementation                                                |
| Purpose         | Defines rules, syntax, and features for scripting languages | Implements ECMAScript for web and other platforms                      |
| Standardization | Managed by Ecma International (ECMA-262)                    | Developed initially by Netscape, now managed by multiple organizations |
| Core            | Features Data types, control structures, standard library   | ECMAScript + Web APIs (DOM, BOM) + additional features                 |
| Usage           | Not directly executable                                     | Widely used in browsers, servers (Node.js), mobile apps, etc.          |
| Examples        | ES5, ES6, ES7, ES2023                                       | JavaScript (in browsers, Node.js)                                      |
|                 |                                                             |                                                                        |

&nbsp;

&nbsp;

# Statically Typed vs. Dynamically Typed Languages

| Feature          | Statically Typed                                   | Dynamically Typed                                                  |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------------------ |
| Definition       | Data types are checked at compile time.            | Data types are checked at runtime.                                 |
| Type Declaration | Variables must be explicitly declared with a type. | Variables can hold any type, and their type can change at runtime. |
| Error Detection  | Type-related errors are detected before execution. | Type-related errors are only detected when the code runs.          |
| Performance      | Faster execution due to early type checking.       | Slower execution since types are resolved dynamically.             |
| Examples         | C, C++, Java, TypeScript, Go                       | JavaScript, Python, Ruby, PHP                                      |
|                  |                                                    |                                                                    |

&nbsp;

&nbsp;
