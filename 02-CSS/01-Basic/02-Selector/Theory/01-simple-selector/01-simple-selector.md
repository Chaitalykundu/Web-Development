# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [All CSS Simple Selectors](#all-css-simple-selectors)
  - [Precedence](#precedence)
- [The CSS id Selector](#the-css-id-selector)
  - [Note](#note)
  - [Example](#example)
- [The CSS class Selector](#the-css-class-selector)
  - [Example](#example-1)
- [The CSS Universal Selector](#the-css-universal-selector)
  - [Example](#example-2)
- [The CSS element Selector](#the-css-element-selector)
  - [Example](#example-3)
- [The CSS Grouping Selector](#the-css-grouping-selector)
  - [Example](#example-4)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- The `id selector` uses the `id` attribute of an HTML element to select a specific element.

- The `class selector` selects HTML elements with a specific `class` attribute.

- The `universal selector` (\*) selects all HTML `elements` on the page.

- The `element selector` selects HTML elements based on the `element name`.

- The `grouping selector` selects all the HTML elements with the `same style definitions`.

&nbsp;

&nbsp;

# All CSS Simple Selectors

| Selector Name          | Syntax             | Example    | Example description                            |
| ---------------------- | ------------------ | ---------- | ---------------------------------------------- |
| id selector            | #id                | #firstname | Selects the element with id="firstname"        |
| class selector         | . class            | .intro     | Selects all elements with class="intro"        |
| element.class selector | element.class      | p.intro    | Selects only `<p>` elements with class="intro" |
| Universal selector     | \*                 | \*         | Selects all elements                           |
| Element selector       | element            | p          | Selects all `<p>` elements                     |
| Grouping Selector      | element,element,.. | div, p     | Selects all `<div>` and `<p>` elements         |
|                        |                    |            |                                                |

&nbsp;

## Precedence

id > class > tag / element

&nbsp;

&nbsp;

# The CSS id Selector

- The `id selector` uses the `id` attribute of an HTML element to select a specific element.

- The id of an element is **unique within a page**, so the id selector is used to select one unique element!

- To select an element with a specific id, write a **hash** (#) character, followed by the id of the element.

&nbsp;

## Note

An id name cannot start with a number!

&nbsp;

## Example

```css
#para1 {
  text-align: center;
  color: red;
}
```

&nbsp;

&nbsp;

# The CSS class Selector

- The class selector selects HTML elements with a specific `class` attribute.

- To select elements with a specific class, write a **period** (.) character, followed by the class name.

&nbsp;

## Example

```css
.center {
  text-align: center;
  color: red;
}
```

&nbsp;

&nbsp;

# The CSS Universal Selector

- The universal selector (\*) selects all HTML elements on the page.

&nbsp;

## Example

```css
* {
  text-align: center;
  color: blue;
}
```

&nbsp;

&nbsp;

# The CSS element Selector

- The element selector selects HTML elements based on the element name.

&nbsp;

## Example

```css
p {
  text-align: center;
  color: red;
}
```

&nbsp;

&nbsp;

# The CSS Grouping Selector

- The grouping selector selects all the HTML elements with the same style definitions.

&nbsp;

## Example

```css
h1,
h2,
p {
  text-align: center;
  color: red;
}
```

&nbsp;

&nbsp;
