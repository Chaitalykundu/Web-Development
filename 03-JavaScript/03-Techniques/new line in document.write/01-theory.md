# Overview

- [Overview](#overview)
- [Ways to insert new line](#ways-to-insert-new-line)
  - [1. Use `<br>` for Line Breaks (HTML)](#1-use-br-for-line-breaks-html)
  - [2. Use `<p>` for Paragraph Breaks](#2-use-p-for-paragraph-breaks)
  - [3. Use `\n` for Console Output (Not for HTML)](#3-use-n-for-console-output-not-for-html)
  - [4. Use CSS for Display Formatting](#4-use-css-for-display-formatting)

&nbsp;

&nbsp;

&nbsp;

In JavaScript, `document.write()` does not interpret `\n` as a new line in HTML because it writes directly to the document as HTML content.

&nbsp;

&nbsp;

# Ways to insert new line

Here are a few ways to insert a new line:

&nbsp;

## 1. Use `<br>` for Line Breaks (HTML)

```js
document.write("First Line<br>");
document.write("Second Line");
```

- This inserts a line break in the rendered HTML.

&nbsp;

## 2. Use `<p>` for Paragraph Breaks

```js
document.write("<p>First Paragraph</p>");
document.write("<p>Second Paragraph</p>");
```

- This adds spacing between lines.

&nbsp;

## 3. Use `\n` for Console Output (Not for HTML)

```js
console.log("First Line\nSecond Line");
```

- Works in the console but not in `document.write()`.

&nbsp;

## 4. Use CSS for Display Formatting

```js
document.write(
  "<div style='white-space: pre-line;'>First Line\nSecond Line</div>",
);
```

- `white-space: pre-line;` allows `\n` to create new lines in HTML.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
