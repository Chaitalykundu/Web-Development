# Overview

- [Overview](#overview)
- [JavaScript Display Possibilities](#javascript-display-possibilities)
- [Using innerHTML](#using-innerhtml)
  - [Example](#example)
- [Using document.write()](#using-documentwrite)
  - [Example](#example-1)
    - [Note](#note)
- [Using window.alert()](#using-windowalert)
  - [Example](#example-2)
- [Using console.log()](#using-consolelog)
  - [Example](#example-3)
- [JavaScript Print](#javascript-print)
  - [Example](#example-4)

&nbsp;

&nbsp;

&nbsp;

# JavaScript Display Possibilities

JavaScript can "display" data in different ways:

- Writing into an HTML element, using `innerHTML`.
- Writing into the HTML output using `document.write()`.
- Writing into an alert box, using `window.alert()`.
- Writing into the browser console, using `console.log()`

&nbsp;

&nbsp;

# Using innerHTML

To access an HTML element, JavaScript can use the `document.getElementById(id)` method.

The id attribute defines the HTML element. The `innerHTML` property defines the HTML content:

&nbsp;

## Example

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>

    <p id="demo"></p>

    <script>
      document.getElementById("demo").innerHTML = 5 + 6;
    </script>
  </body>
</html>
```

&nbsp;

&nbsp;

# Using document.write()

For testing purposes, it is convenient to use `document.write()`:

&nbsp;

## Example

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <script>
      document.write(5 + 6);
    </script>
  </body>
</html>
```

&nbsp;

### Note

The `document.write()` method should only be used for testing.

Never call document.write after the document has finished loading. It will overwrite the whole document.

&nbsp;

&nbsp;

# Using window.alert()

## Example

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <script>
      alert(5 + 6);
      //  or window.alert(5 + 6);
    </script>
  </body>
</html>
```

&nbsp;

&nbsp;

# Using console.log()

For debugging purposes, you can call the `console.log()` method in the browser to display data.

&nbsp;

## Example

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      console.log(5 + 6);
    </script>
  </body>
</html>
```

&nbsp;

&nbsp;

# JavaScript Print

JavaScript does not have any print object or print methods.

You cannot access output devices from JavaScript.

The only exception is that you can call the `window.print()` method in the browser to print the content of the current window.

&nbsp;

## Example

```html
<!DOCTYPE html>
<html>
  <body>
    <button onclick="window.print()">Print</button>
  </body>
</html>
```
