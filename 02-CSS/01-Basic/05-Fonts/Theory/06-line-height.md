# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Definition and Usage](#definition-and-usage)
- [Note](#note)
- [Syntax](#syntax)
- [Example](#example)
- [Property Values](#property-values)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- The CSS `line-height` property is used to define the **minimal height of line boxes within the element**.

- **Negative** values are not allowed for line-height

&nbsp;

&nbsp;

| Property    | Description                | Default value |
| ----------- | -------------------------- | ------------- |
| line-height | Specifies the line-height. | normal        |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The CSS `line-height` property is used to define the **minimal height of line boxes within the element**.

It sets the differences between **two** lines of your content.

It defines the amount of space above and below inline elements. It allows you to set the height of a line of independently from the font size.

&nbsp;

# Note

**Negative** values are not allowed.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  line-height: normal|number|length|percentage|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Set the line height in pixels and % for different `<div>` elements:

```css
div.a {
  line-height: 10px;
}

div {
  line-height: 120%;
  font-size: 10px;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | yes                                                                   |
| Animation type:    | yes                                                                   |
| Version:           | CSS1                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.lineHeight="30px"                                        |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                        |
| ------- | ---------------------------------------------------------------------------------- |
| normal  | A normal line height                                                               |
| number  | A number that will be multiplied with the current font-size to set the line height |
| length  | A fixed line height in px, pt, cm, etc.                                            |
| %       | A line height in percent of the current font size                                  |
| initial | Sets this property to its default value.                                           |
| inherit | Inherits this property from its parent element.                                    |
