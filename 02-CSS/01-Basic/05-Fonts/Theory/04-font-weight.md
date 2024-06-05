# Overview

- Definition and Usage
- Syntax
- Example
- Specification
- Property Values
- Common weight name mapping

&nbsp;

&nbsp;

# Chapter Summary

- The `font-weight` property sets how **thick** or **thin** characters in text should be displayed.

&nbsp;

&nbsp;

| Property    | Description               | Default value |
| ----------- | ------------------------- | ------------- |
| font-weight | Specifies the font weight | normal        |

&nbsp;

# Definition and Usage

The `font-weight` property sets how **thick** or **thin** characters in text should be displayed.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  font-weight: normal|bold|bolder|lighter|number|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Set different font weight for three paragraphs:

```css
p.normal {
  font-weight: normal;
}

p.thick {
  font-weight: bold;
}

p.thicker {
  font-weight: 900;
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
| JavaScript syntax: | object.style.fontWeight="bold"                                        |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value                                       | Description                                                                                   |
| ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| normal                                      | Defines normal characters                                                                     |
| bold                                        | Defines thick characters                                                                      |
| bolder                                      | Defines thicker characters                                                                    |
| lighter                                     | Defines lighter characters                                                                    |
| 100, 200, 300, 400, 500, 600, 700, 800, 900 | Defines from thin to thick characters. 400 is the same as normal, and 700 is the same as bold |
| initial                                     | Sets this property to its default value.                                                      |
| inherit                                     | Inherits this property from its parent element.                                               |
|                                             |                                                                                               |

&nbsp;

&nbsp;

# Common weight name mapping

| Value | Common weight name        |
| ----- | ------------------------- |
| 100   | Thin (Hairline)           |
| 200   | Extra Light (Ultra Light) |
| 300   | Light                     |
| 400   | Normal (Regular)          |
| 500   | Medium                    |
| 600   | Semi Bold                 |
| 700   | Bold                      |
| 800   | Extra Bold (Ultra Bold)   |
| 900   | Black (Heavy)             |
| 950   | Extra Black (Ultra Black) |
|       |                           |
