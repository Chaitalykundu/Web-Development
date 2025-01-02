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

| Value | Description                                    | Default value |
| ----- | ---------------------------------------------- | ------------- |
| left  | Sets the left margin edge for a positioned box | auto          |

&nbsp;

&nbsp;

# Definition and Usage

The `left` property sets the **left margin edge** for a positioned box.

It affects the **horizontal** position of a positioned element.

This property has no effect on non-positioned elements.

Negative values are allowed.

&nbsp;

# Note

- If `position: absolute;` or `position: fixed;` - the left property sets the left edge of an element to a unit to the left of the left edge of its nearest positioned ancestor.

- If `position: relative;` - the left property sets the left edge of an element to a unit to the left/left of its normal position.

- If `position: sticky;` - the left property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.

- If `position: static;` - the left property has no effect.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  left: auto|length|percentage|initial|inherit;
}
```

&nbsp;

```css
/* <length> values */
selector {
  left: 3px;
  left: 2.4em;
}

/* <percentage>s of the height of the containing block */
selector {
  left: 10%;
}

/* Keyword value */

selector {
  left: auto;
}

/* Global values */
selector {
  left: inherit;
  left: initial;
  left: revert;
  left: revert-layer;
  left: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div.c {
  position: absolute;
  left: 150px;
  width: 200px;
  height: 120px;
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
| JavaScript syntax: | object.style.left="200px"       |
|                    |                                 |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                             |
| ------- | ------------------------------------------------------- |
| auto    | Lets the browser calculate the left edge position.      |
| length  | Sets the left edge position in px, cm, etc.             |
| %       | Sets the left edge position in % of containing element. |
| initial | Sets this property to its default value.                |
| inherit | Inherits this property from its parent element.         |
|         |                                                         |

&nbsp;

&nbsp;
