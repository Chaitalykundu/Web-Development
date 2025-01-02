# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Definition and Usage](#definition-and-usage)
- [Syntax](#syntax)
- [Example](#example)
- [Specification](#specification)
- [Property Values](#property-values)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- The `font-style` property specifies the font style for a text.

&nbsp;

&nbsp;

| Property   | Description              | Default value |
| ---------- | ------------------------ | ------------- |
| font-style | Specifies the font style | normal        |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `font-style` property specifies the font style for a text.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  font-style: normal|italic|oblique|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

set different font styles for three paragraphs:

```css
p.a {
  font-style: normal;
}

p.b {
  font-style: italic;
}

p.c {
  font-style: oblique;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                   |
| ------------------ | ----------------------------------------------------------------- |
| Inherited:         | yes                                                               |
| Animation type:    | no.                                                               |
| Version:           | CSS1                                                              |
| Applies to         | all elements. It also applies to ::first-letter and ::first-line. |
| JavaScript syntax: | object.style.fontStyle="italic"                                   |
|                    |                                                                   |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| normal  | The browser displays a normal font style.       |
| italic  | The browser displays an italic font style       |
| oblique | The browser displays an oblique font style      |
| initial | Sets this property to its default value.        |
| inherit | Inherits this property from its parent element. |
|         |                                                 |

&nbsp;

&nbsp;
