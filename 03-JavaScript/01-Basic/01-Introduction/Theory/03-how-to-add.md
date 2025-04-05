# Overview

- [Overview](#overview)
- [The `<script>` Tag](#the-script-tag)
- [3 Places to put JavaScript code](#3-places-to-put-javascript-code)
- [JavaScript in `<body>`](#javascript-in-body)
- [JavaScript in `<head>`](#javascript-in-head)
- [External JavaScript](#external-javascript)
  - [External file: myScript.js](#external-file-myscriptjs)
- [External JavaScript Advantages](#external-javascript-advantages)

&nbsp;

&nbsp;

&nbsp;

# The `<script>` Tag

In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

&nbsp;

&nbsp;

# 3 Places to put JavaScript code

- Between the body tag of html
- Between the head tag of html
- In .js file (external javaScript)

&nbsp;

&nbsp;

# JavaScript in `<body>`

A JavaScript function is placed in the `<body>` section of an HTML page.

The function is invoked (called) when a **button** is clicked:

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Demo JavaScript in Body</h2>

    <p id="demo">A Paragraph</p>

    <!-- button for the js code -->
    <button type="button" onclick="myFunction()">Try it</button>

    <!-- javascript code -->
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </body>
</html>
```

&nbsp;

&nbsp;

# JavaScript in `<head>`

JavaScript function is placed in the `<head>` section of an HTML page.

The function is invoked (called) when a **button** is clicked:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- javascript code -->
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </head>

  <body>
    <h2>Demo JavaScript in Head</h2>

    <p id="demo">A Paragraph</p>

    <!-- button for the js code -->
    <button type="button" onclick="myFunction()">Try it</button>
  </body>
</html>
```

&nbsp;

&nbsp;

# External JavaScript

External scripts are practical when the same code is used in many different web pages.

### External file: myScript.js

```js
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```

&nbsp;

To use an external script, put the name of the script file in the **src** (source) attribute of a `<script>` tag and placed it in html file:

```html
<script src="myScript.js"></script>
```

&nbsp;

&nbsp;

# External JavaScript Advantages

Placing scripts in external files has some advantages:

- It separates HTML and JS code and we can get both the code clean and it's easy to update
- It makes HTML and JavaScript organized and easier to read and maintain
- Cached JavaScript files can speed up page loads
- By using external JavaScript, the same code can be reused on multiple HTML pages without needing to copy-paste.
- With external JS files, the separation between structure (HTML), styling (CSS), and behavior (JS) leads to faster development cycles.
- You can defer or asynchronously load external JavaScript files, ensuring they do not block the rest of the page from loading.
- External JavaScript files can use source maps (in development) to make debugging easier by linking compiled or minified code back to the original source code.
- External files can be easily inspected and debugged in browser developer tools (e.g., Chrome DevTools), making it easier to track errors or performance issues
