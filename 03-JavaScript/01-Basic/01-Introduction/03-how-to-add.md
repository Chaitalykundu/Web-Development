# The `<script>` Tag

In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

&nbsp;

3 Places to put JavaScript code

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

a JavaScript function is placed in the `<head>` section of an HTML page.

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

## External file: myScript.js

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

# External JavaScript Advantages

Placing scripts in external files has some advantages:

- It separates HTML and code
- It makes HTML and JavaScript easier to read and maintain
- Cached JavaScript files can speed up page loads
