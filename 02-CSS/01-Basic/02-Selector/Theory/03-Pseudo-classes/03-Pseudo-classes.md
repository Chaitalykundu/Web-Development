# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [What are Pseudo-classes](#what-are-pseudo-classes)
- [Syntax](#syntax)
- [All CSS Pseudo Classes](#all-css-pseudo-classes)
- [Anchor Pseudo-classes](#anchor-pseudo-classes)
  - [Note](#note)
- [Pseudo-classes and HTML Classes](#pseudo-classes-and-html-classes)
- [Simple Tooltip Hover](#simple-tooltip-hover)
- [The `:first-child` Pseudo-class](#the-first-child-pseudo-class)
  - [Match the first `<p>` element](#match-the-first-p-element)
  - [Match the first `<i>` element in all `<p>` elements](#match-the-first-i-element-in-all-p-elements)
  - [Match all `<i>` elements in all first child `<p>` elements](#match-all-i-elements-in-all-first-child-p-elements)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- A pseudo-class is used to define a **special state** of an element i.e hovers, visited, unvisited, focused

- `a:hover` MUST come after `a:link` and `a:visited` in the CSS definition in order to be effective! `a:active` MUST come after `a:hover` in the CSS definition in order to be effective!

&nbsp;

&nbsp;

# What are Pseudo-classes

A pseudo-class is used to define a **special state** of an element.

For example, it can be used to:

- Style an element when a user hovers over it
- Style visited and unvisited links differently
- Style an element when it gets focus

&nbsp;

&nbsp;

# Syntax

```css
selector:pseudo-class {
  property: value;
}
```

&nbsp;

&nbsp;

# All CSS Pseudo Classes

| Selector             | Example               | Example description                                                                                    |
| -------------------- | --------------------- | ------------------------------------------------------------------------------------------------------ |
| :active              | a:active              | Selects the active link                                                                                |
| :checked             | input:checked         | Selects every checked `<input>` element                                                                |
| :disabled            | input:disabled        | Selects every disabled `<input>` element                                                               |
| :empty               | p:empty               | Selects every `<p>` element that has no children                                                       |
| :enabled             | input:enabled         | Selects every enabled `<input>` element                                                                |
| :first-child         | p:first-child         | Selects every `<p>` elements that is the first child of its parent                                     |
| :first-of-type       | p:first-of-type       | Selects every `<p>` element that is the first `<p>` element of its parent                              |
| :focus               | input:focus           | Selects the `<input>` element that has focus                                                           |
| :hover               | a:hover               | Selects links on mouse over                                                                            |
| :in-range            | input:in-range        | Selects `<input>` elements with a value within a specified range                                       |
| :invalid             | input:invalid         | Selects all `<input>` elements with an invalid value                                                   |
| :lang(language)      | p:lang(it)            | Selects every `<p>` element with a lang attribute value starting with "it"                             |
| :last-child          | p:last-child          | Selects every `<p>` elements that is the last child of its parent                                      |
| :last-of-type        | p:last-of-type        | Selects every `<p>` element that is the last `<p>` element of its parent                               |
| :link                | a:link                | Selects all unvisited links                                                                            |
| :not(selector)       | :not(p)               | Selects every element that is not a `<p>` element                                                      |
| :nth-child(n)        | p:nth-child(2)        | Selects every `<p>` element that is the second child of its parent                                     |
| :nth-last-child(n)   | p:nth-last-child(2)   | Selects every `<p>` element that is the second child of its parent, counting from the last child       |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | Selects every `<p>`element that is the second`<p>` element of its parent, counting from the last child |
| :nth-of-type(n)      | p:nth-of-type(2)      | Selects every `<p>` element that is the second `<p>` element of its parent                             |
| :only-of-type        | p:only-of-type        | Selects every `<p>` element that is the only `<p>` element of its parent                               |
| :only-child          | p:only-child          | Selects every `<p>` element that is the only child of its parent                                       |
| :optional            | input:optional        | Selects `<input>` elements with no "required" attribute                                                |
| :out-of-range        | input:out-of-range    | Selects `<input>` elements with a value outside a specified range                                      |
| :read-only           | input:read-only       | Selects `<input>` elements with a "readonly" attribute specified                                       |
| :read-write          | input:read-write      | Selects `<input>` elements with no "readonly" attribute                                                |
| :required            | input:required        | Selects `<input>` elements with a "required" attribute specified                                       |
| :root                | root                  | Selects the document's root element                                                                    |
| :target              | #news:target          | Selects the current active #news element (clicked on a URL containing that anchor name)                |
| :valid               | input:valid           | Selects all `<input>` elements with a valid value                                                      |
| :visited             | a:visited             | Selects all visited links                                                                              |
|                      |                       |                                                                                                        |

&nbsp;

&nbsp;

&nbsp;

# Anchor Pseudo-classes

```css
/* unvisited link */
a:link {
  color: #ff0000;
}

/* visited link */
a:visited {
  color: #00ff00;
}

/* mouse over link */
a:hover {
  color: #ff00ff;
}

/* selected link */
a:active {
  color: #0000ff;
}
```

&nbsp;

## Note

`a:hover` MUST come after `a:link` and `a:visited` in the CSS definition in order to be effective! `a:active` MUST come after `a:hover` in the CSS definition in order to be effective!

&nbsp;

&nbsp;

# Pseudo-classes and HTML Classes

Pseudo-classes can be combined with HTML classes.

When you hover over the link in the example, it will change color:

```html
<p><a class="highlight" href="css_syntax.asp">CSS Syntax</a></p>
```

```css
a.highlight:hover {
  color: #ff0000;
}
```

&nbsp;

&nbsp;

# Simple Tooltip Hover

Hover over a `<div>` element to show a `<p>` element (like a tooltip):

```html
<div>
  Hover over this div element to show the p element
  <p>Tada! Here I am!</p>
</div>
```

```css
p {
  display: none;
  background-color: yellow;
  padding: 20px;
}

div:hover p {
  display: block;
}
```

&nbsp;

&nbsp;

# The `:first-child` Pseudo-class

## Match the first `<p>` element

In the following example, the selector matches any `<p>` element that is the first child of any element:

```css
p:first-child {
  color: blue;
}
```

&nbsp;

## Match the first `<i>` element in all `<p>` elements

```css
p i:first-child {
  color: blue;
}
```

&nbsp;

## Match all `<i>` elements in all first child `<p>` elements

```css
p:first-child i {
  color: blue;
}
```
