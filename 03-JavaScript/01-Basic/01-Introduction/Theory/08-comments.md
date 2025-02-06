# Overview

- [Overview](#overview)
- [JavaScript Comments](#javascript-comments)
- [Single Line Comment](#single-line-comment)
  - [Example](#example)
- [Multi-line Comment](#multi-line-comment)
- [Example](#example-1)

&nbsp;

&nbsp;

&nbsp;

# JavaScript Comments

Comments in JavaScript are **non-executable** lines used to explain code. They help with readability, debugging, and documentation.

&nbsp;

JavaScript comments can be used to

- explain JavaScript code, and to make it more readable.
- prevent execution, when testing alternative code.

&nbsp;

&nbsp;

# Single Line Comment

Single line comment starts with `//`.

&nbsp;

## Example

```js
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";
```

&nbsp;

Single line comment can be used used at the end of the line

```js
let x = 5; // Declare x, give it the value of 5
let y = x + 2; // Declare y, give it the value of x + 2
```

&nbsp;

&nbsp;

# Multi-line Comment

Multi-line comment starts with /\* and end with \*/.

&nbsp;

# Example

```js
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```

&nbsp;
