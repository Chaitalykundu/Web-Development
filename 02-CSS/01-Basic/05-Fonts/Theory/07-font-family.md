# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Definition and Usage](#definition-and-usage)
- [Types of font family names](#types-of-font-family-names)
  - [family-name](#family-name)
  - [generic-family](#generic-family)
- [Note](#note)
- [Syntax](#syntax)
- [Example](#example)
- [Specification](#specification)
- [Property Values](#property-values)
- [Define the generic-family categories](#define-the-generic-family-categories)
- [serif](#serif)
- [sans-serif](#sans-serif)
- [cursive](#cursive)
- [monospace](#monospace)
- [fantasy](#fantasy)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- The `font-family` property specifies the **font** for an element.

&nbsp;

&nbsp;

| Property    | Description                        | Default value          |
| ----------- | ---------------------------------- | ---------------------- |
| font-family | Specifies the font for an element. | depends on the browser |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `font-family` property specifies the **font** for an element.

The font-family property can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font.

&nbsp;

&nbsp;

# Types of font family names

There are **two** types of font family names:

&nbsp;

## family-name

- The name of a font-family, like "times", "courier", "arial", etc.

&nbsp;

## generic-family

- The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

- Start with the font you want, and always end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.

&nbsp;

&nbsp;

# Note

- Separate each value with a comma.

- If a font name contains white-space, it must be quoted. Single quotes must be used when using the "style" attribute in HTML.

- It is a good practice to quote font family names that contain white space, digits, or punctuation characters other than hyphens. Ex:
  `font-family: "Goudy Bookletter 1911", sans-serif;
`

&nbsp;

&nbsp;

# Syntax

```css
selector {
  font-family: family-name|generic-family|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Specify the font for paragraphs:

```css
p.a {
  font-family: "Times New Roman", Times, serif;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | yes                                                                   |
| Animation type:    | no                                                                    |
| Version:           | CSS1                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.fontFamily="Verdana,sans-serif"                          |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value                        | Description                                                         |
| ---------------------------- | ------------------------------------------------------------------- |
| family-name / generic-family | A prioritized list of font family names and/or generic family names |
| initial                      | Sets this property to its default value.                            |
| inherit                      | Inherits this property from its parent element.                     |

&nbsp;

&nbsp;

# Define the generic-family categories

# serif

It is mainly used when we are writing the text for printing, such as books, magazines, newspapers, etc. It includes the font-family such as Georgia, Garamond, Times New Roman, Minion, and many more.

&nbsp;

# sans-serif

It is a modern, formal, and simple style. It is widely used but most often in the digital form of text. It includes the font-family that are Arial, Calibri, Verdana, Futura, Lato, and many more.

&nbsp;

# cursive

It is mainly used for writing the invitation letter, informal messages, etc. It is like a handwritten text which is written by a pen or a brush. The font-family that it includes is Insolente, Corsiva, Flanella, Belluccia, Zapfino, and many more.

&nbsp;

# monospace

It is for instructions, mailing address, typewritten text, etc. It includes the font-family that is Monaco, SimSun, Courier, Consolas, Inconsolata, and many more.

&nbsp;

# fantasy

It makes the text expressive, decorative, and impactful. It includes the font-family that is Impact, Copperplate, Cracked, Critter, and many more.
