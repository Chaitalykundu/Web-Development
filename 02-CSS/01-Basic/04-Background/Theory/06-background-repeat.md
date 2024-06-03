# Overview

- Definition and Usage
- Syntax
- Example
- Specification
- Property Values
- Shorthand Syntax

&nbsp;

&nbsp;

# Chapter Summary

- The `background-repeat` property sets if/how a background image will be repeated.

&nbsp;

&nbsp;

| Property          | Description                                  | Default value: |
| ----------------- | -------------------------------------------- | -------------- |
| background-repeat | Sets how a background image will be repeated | repeat         |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `background-repeat` property sets if/how a background image will be repeated.

By default, the `background-image` property repeats an image both **_horizontally and vertically_**. To control this, we use `background-repeat` property

&nbsp;

&nbsp;

# Syntax

```css
selector {
  background-repeat: repeat|repeat-x|repeat-y|space | round |
    no-repeat|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Repeat a background image only horizontally:

```css
body {
  background-image: url("paper.gif");
  background-repeat: repeat-x;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Default value:     | repeat                                                                |
| Inherited:         | no                                                                    |
| Animation type:    | no                                                                    |
| Version:           | CSS1                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.backgroundRepeat="repeat-x"                              |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value     | Description                                                                                                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| repeat    | The background image is repeated both vertically and horizontally. The last image will be clipped if it does not fit. This is default                                                            |
| repeat-x  | The background image is repeated only horizontally                                                                                                                                               |
| repeat-y  | The background image is repeated only vertically                                                                                                                                                 |
| no-repeat | The background-image is not repeated. The image will only be shown once                                                                                                                          |
| space     | The background-image is repeated as much as possible without clipping. The first and last image is pinned to either side of the element, and whitespace is distributed evenly between the images |
| round     | The background-image is repeated and squished or stretched to fill the space (no gaps)                                                                                                           |
| initial   | Sets this property to its default value.                                                                                                                                                         |
| inherit   | Inherits this property from its parent element.                                                                                                                                                  |

&nbsp;

&nbsp;

# Shorthand Syntax

- The one-value syntax is a shorthand for the full two-value syntax:

| Single value | Two-value equivalent |
| ------------ | -------------------- |
| repeat-x     | repeat no-repeat     |
| repeat-y     | no-repeat repeat     |
| repeat       | repeat repeat        |
| space        | space space          |
| round        | round round          |
| no-repeat    | no-repeat no-repeat  |

&nbsp;

&nbsp;
&nbsp;
&nbsp;
