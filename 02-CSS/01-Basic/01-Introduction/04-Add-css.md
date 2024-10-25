# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Ways of inserting CSS](#ways-of-inserting-css)
- [Inline CSS](#inline-css)
  - [Example](#example)
- [Internal CSS](#internal-css)
  - [Example](#example-1)
- [External CSS](#external-css)
  - [Example](#example-2)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- There are **three** ways of inserting a style sheet:

  - External CSS
  - Internal CSS
  - Inline CSS

- Precedence of styling - **_Inline > Internal > External_**

- Inline CSS is used to style single line or element

- Internal CSS is used to apply CSS on a single document or page.

- External CSS is used to apply CSS on multiple pages or all pages.

&nbsp;

&nbsp;

# Ways of inserting CSS

- There are **three** ways of inserting a style sheet:

  - External CSS
  - Internal CSS
  - Inline CSS

Precedence of styling - **_Inline > Internal > External_**

&nbsp;

&nbsp;

# Inline CSS

Inline CSS is used to apply CSS on a single line or element.

An inline style is used to apply an unique style to a single element.

&nbsp;

## Example

```html
<p style="color:blue">Hello CSS</p>
```

&nbsp;

&nbsp;

# Internal CSS

Internal CSS is used to apply CSS on a single document or page.

It can affect all the elements of the page.

It is written inside the _style_ tag within head section of html.

&nbsp;

## Example

```html
<style>
  p {
    color: blue;
  }
</style>
```

&nbsp;

&nbsp;

# External CSS

External CSS is used to apply CSS on multiple pages or all pages.

Here, we write all the CSS code in a css file.

Its extension must be `.css` for example style.css.

&nbsp;

## Example

```css
p {
  color: blue;
}
```

You need to link this style.css file to your html pages like this:

```html
<link rel="stylesheet" type="text/css" href="style.css" />
```
