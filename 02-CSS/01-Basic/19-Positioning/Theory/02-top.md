# Overview

- [Overview](#overview)
- [Properties](#properties)
- [Definition and Usage](#definition-and-usage)
- [Note](#note)
- [Syntax](#syntax)
- [Example](#example)
- [Property Values](#property-values)

&nbsp;

&nbsp;

# Properties

| Value | Description                                   | Default value |
| ----- | --------------------------------------------- | ------------- |
| top   | Sets the top margin edge for a positioned box | auto          |

&nbsp;

&nbsp;

# Definition and Usage

The `top` property Sets the top margin edge for a positioned box.

It affects the **vertical** position of a positioned element.

This property has no effect on non-positioned elements.

Negative values are allowed.

&nbsp;

# Note

- If `position: absolute;` or `position: fixed;` - the top property sets the top edge of an element to a unit above/below the top edge of its nearest positioned ancestor.

- If `position: relative;` - the top property makes the element's top edge to move above/below its normal position.

- If `position: sticky;` - the top property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.

- If `position: static;` - the top property has no effect.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  top: auto|length|percentage|initial|inherit;
}
```

&nbsp;

```css
/* <length> values */
selector {
  top: 3px;
  top: 2.4em;
}

/* <percentage>s of the height of the containing block */
selector {
  top: 10%;
}

/* Keyword value */
selector {
  top: auto;
}

/* Global values */
selector {
  top: inherit;
  top: initial;
  top: revert;
  top: revert-layer;
  top: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div {
  position: absolute;
  top: 50px;
  border: 3px solid green;
}
```

&nbsp;

&nbsp;

|                    |                                 |
| ------------------ | ------------------------------- |
| Inherited:         | no                              |
| Animation type     | a length, percentage or calc(); |
| Applies to         | positioned elements             |
| JavaScript syntax: | object.style.top="100px"        |
|                    |                                 |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                            |
| ------- | ------------------------------------------------------ |
| auto    | Lets the browser calculate the top edge position.      |
| length  | Sets the top edge position in px, cm, etc.             |
| %       | Sets the top edge position in % of containing element. |
| initial | Sets this property to its default value.               |
| inherit | Inherits this property from its parent element.        |
|         |                                                        |

&nbsp;

&nbsp;
