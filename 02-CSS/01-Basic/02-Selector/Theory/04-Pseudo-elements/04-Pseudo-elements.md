# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [All CSS Pseudo Elements](#all-css-pseudo-elements)
- [What is Pseudo-Element](#what-is-pseudo-element)
- [Syntax](#syntax)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- A CSS pseudo-element selector is used to style specified parts of an element. Example
  - Style the first letter, or line, of an element
  - Insert content before, or after the content of an element

&nbsp;

&nbsp;

# All CSS Pseudo Elements

| Selector       | Example         | Example description                                          |
| -------------- | --------------- | ------------------------------------------------------------ |
| ::after        | p::after        | Insert content after every `<p>` element                     |
| ::before       | p::before       | Insert content before every `<p>` element                    |
| ::first-letter | p::first-letter | Selects the first letter of every `<p>` element              |
| ::first-line   | p::first-line   | Selects the first line of every `<p>` element                |
| ::marker       | ::marker        | Selects the markers of list items                            |
| ::selection    | p::selection    | Selects the portion of an element that is selected by a user |
|                |                 |                                                              |

&nbsp;

&nbsp;

# What is Pseudo-Element

A CSS pseudo-element selector is used to style specified parts of an element.

For example, it can be used to:

- Style the first letter, or line, of an element

- Insert content before, or after the content of an element

&nbsp;

&nbsp;

# Syntax

```css
selector::pseudo-element {
  property: value;
}
```
