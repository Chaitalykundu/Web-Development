# Overview

- Definition and Usage
- Syntax
- Example
- Specification
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `color` property specifies the color of text.- **Negative** values are not allowed for line-height

&nbsp;

&nbsp;

| Property | Description                  | Default value |
| -------- | ---------------------------- | ------------- |
| color    | Specifies the color of text. |               |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `color` property specifies the color of text.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  color: color|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Set the text color with a `HEX` value:

```css
body {
  color: #92a8d1;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | yes                                                                   |
| Animation type:    | yes                                                                   |
| Version:           | CSS1                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.color="#0000FF"                                          |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------- |
| color   | Specifies the text color. Look at [Color](<(../03-Colors/00-theory.md)>) for a list of possible color values. |
| initial | Sets this property to its default value.                                                                      |
| inherit | Inherits this property from its parent element.                                                               |
