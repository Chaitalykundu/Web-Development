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
|             |                                    |                        |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

A `font family` is a collection of fonts that share a similar design but may have variations in weight, style, or width. It helps maintain visual consistency across a design.

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

- A `generic font family` is a broad classification of fonts that acts as a fallback in case a specified font is not available on the user's system. These generic families ensure consistent styling across different browsers and devices.

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
  font-family: family-name | generic-family | initial |inherit;
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
|                              |                                                                     |

&nbsp;

&nbsp;

# Generic Font Family categories

CSS provides **five** generic font families.

&nbsp;

| Generic Family             | Description                                                  | Used for                                                                   | Example Fonts                                   | Best for                                                           |
| -------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------ |
| Serif                      | Fonts with small strokes (serifs) at the ends of characters, | Used in formal and print-based designs.                                    | Times New Roman, Georgia, Garamond, Baskerville | Newspapers, books, and formal documents.                           |
| Sans-serif                 | Clean and modern fonts without serifs,                       | Commonly used in digital design for better readability on screens.         | Arial, Helvetica, Roboto , Open Sans            | Websites, mobile apps, and digital documents                       |
| Monospace                  | Each character occupies equal space                          | Commonly used in programming and coding environmentsideal for coding.      | Courier New, Consolas, Monaco ,Source Code Pro  | Code editors, terminal applications, and typewriter-style designs. |
| Cursive                    | Fonts that resemble handwriting, often decorative.           | creative and decorative designs                                            | Brush Script, Pacifico, Lobster                 | Invitations, logos, and artistic designs                           |
| Fantasy & Decorative Fonts | Highly stylized and decorative fonts                         | used for creative designs, specific design elements rather than body text. | Papyrus, Jokerman, Impact                       | Posters, branding, and creative media.                             |
|                            |                                                              |                                                                            |                                                 |

&nbsp;

&nbsp;

# Why Use Generic Font Families?

✅ **_Improves Cross-Browser Compatibility_** – Ensures a readable font is always displayed.

✅ **_Enhances Performance_** – Reduces reliance on external fonts like Google Fonts.

✅ **_Prevents Layout Breakage_** – If a specific font isn't available, a visually similar alternative is used.
