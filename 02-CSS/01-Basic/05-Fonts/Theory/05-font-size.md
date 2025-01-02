# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Definition and Usage](#definition-and-usage)
- [NOTE](#note)
  - [Absolute-size](#absolute-size)
  - [Relative-size](#relative-size)
- [Syntax](#syntax)
- [Example](#example)
- [Specification](#specification)
- [Property Values](#property-values)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- The `font-size` property sets the size of a font.

- The default size is 16px, which is equal to 1em.

- The font-size can be **absolute** or **relative**.

&nbsp;

&nbsp;

| Property  | Description               | Default value |
| --------- | ------------------------- | ------------- |
| font-size | Specifies the font size . | medium        |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `font-size` property sets the size of a font.

&nbsp;

&nbsp;

# NOTE

If we do not define a font-size, then for the normal text such as paragraphs, the default size is 16px, which is equal to 1em.

&nbsp;

The font-size can be **absolute** or **relative**.

&nbsp;

## <u>Absolute-size</u>

It is used to set the text to **a definite size**.

Using absolute-size, it is not possible to change the size of the text in all browsers. It is advantageous when we know the physical size of the output.

&nbsp;

## <u>Relative-size</u>

It is used to set the size of the text **relative to its neighboring elements**.

With relative-size, it is possible to change the size of the text in browsers.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  font-size: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|percentage|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Set different font weight for three paragraphs:

```css
.para1 {
  font-size: x-small;
}

.para2 {
  font-size: 50px;
}

.para3 {
  font-size: xx-large;
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
| JavaScript syntax: | object.style.fontSize="14px"                                          |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value    | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| xx-small | Sets the font-size to an xx-small size                            |
| x-small  | Sets the font-size to an extra small size                         |
| small    | Sets the font-size to a small size                                |
| medium   | Sets the font-size to a medium size.                              |
| large    | Sets the font-size to a large size                                |
| x-large  | Sets the font-size to an extra large size                         |
| xx-large | Sets the font-size to an xx-large size                            |
| smaller  | Sets the font-size to a smaller size than the parent element      |
| larger   | Sets the font-size to a larger size than the parent element       |
| length   | Sets the font-size to a fixed size in px, cm, etc.                |
| %        | Sets the font-size to a percent of the parent element's font size |
| initial  | Sets this property to its default value.                          |
| inherit  | Inherits this property from its parent element                    |
