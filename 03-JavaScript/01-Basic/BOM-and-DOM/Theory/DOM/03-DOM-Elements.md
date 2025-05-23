# Overview

- how to find and access HTML elements in an HTML page.

&nbsp;

# Finding HTML Elements

If you want to manipulate HTML elements, you have to find the elements first. There are several ways to do this:

- Finding HTML elements by id
- Finding HTML elements by tag name
- Finding HTML elements by class name
- Finding HTML elements by CSS selectors
- Finding HTML elements by HTML object collections

&nbsp;

&nbsp;

# Finding HTML Element by Id

The easiest way to find an HTML element in the DOM, is by using the `element id`.

## Example

This example finds the element with `id="intro"`:

```js
const result = document.getElementById("intro");
```

&nbsp;

If the element is found, the method will return the element as an object (in result).

If the element is not found, element will contain **null**.

&nbsp;

&nbsp;

# Finding HTML Elements by Tag Name

## Example

This example finds all `<p>` elements:

```js
const element = document.getElementsByTagName("p");
```

&nbsp;

This example finds the element with id="main", and then finds all `<p>` elements inside "main":

```js
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
```

&nbsp;

&nbsp;

# Finding HTML Elements by Class Name

If you want to find all HTML elements with the same class name, use `getElementsByClassName()`.

&nbsp;

## Example

This example returns a list of all elements with `class="intro"`.

```js
const x = document.getElementsByClassName("intro");
```

&nbsp;

&nbsp;

# Finding HTML Elements by CSS Selectors

If you want to find HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the `querySelector()` method.

&nbsp;

## Example

```js
const x = document.querySelector("p.intro");
```

&nbsp;

If you want to find **all** HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the `querySelectorAll()` method.

&nbsp;

## Example

This example returns a list of all `<p>` elements with `class="intro"`.

```js
const x = document.querySelectorAll("p.intro");
```

&nbsp;

&nbsp;

# Finding HTML Elements by HTML Object Collections

## Example

This example finds the form element with `id="frm1"`, in the forms collection, and displays all element values:

```js
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
```

&nbsp;

The following HTML objects (and object collections) are also accessible:

- document.anchors
- document.body
- document.documentElement
- document.embeds
- document.forms
- document.head
- document.images
- document.links
- document.scripts
- document.title

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;
