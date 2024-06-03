# Overview

- Definition and Usage
- Tip
- Syntax
- Example
- Specification
- Property Values
- Opacity set
- Example

&nbsp;

&nbsp;

# Chapter Summary

- The `background-color` property specifies the **_background color_** of the element.

- If you do not want to apply opacity to child elements, use RGBA color values.

&nbsp;

&nbsp;

| Property         | Description                             | Default value |
| ---------------- | --------------------------------------- | ------------- |
| background-color | Sets the background color of an element | transparent   |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `background-color` property specifies the **_background color_** of the element.

&nbsp;

# Tip

Use a background color and a text color that makes the text easy to read.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  background-color: color|transparent|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

The background color of a page is set like this:

```css
body {
  background-color: lightblue;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | no                                                                    |
| Animation type:    | yes                                                                   |
| Version:           | CSS1                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.backgroundColor="#00FF00"                                |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value       | Description                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| color       | Specifies the background color. Look at CSS [Color Values](../03-Colors/00-theory.md) for a complete list of possible color values. |
| transparent | Specifies that the background color should be transparent.                                                                          |
| initial     | Sets this property to its default value.                                                                                            |
| inherit     | Inherits this property from its parent element.                                                                                     |

&nbsp;

&nbsp;

# Opacity set

If you do not want to apply opacity to child elements, use RGBA color values.

&nbsp;

# Example

```css
div {
  background: rgba(0, 128, 0, 0.3);
  /* Green background with 30% opacity */
}
```
