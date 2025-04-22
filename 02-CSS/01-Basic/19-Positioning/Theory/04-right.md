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

| Value | Description                                     | Default value |
| ----- | ----------------------------------------------- | ------------- |
| right | Sets the right margin edge for a positioned box | auto          |

&nbsp;

&nbsp;

# Definition and Usage

The `right` property sets the right margin edge for a positioned box.

It affects the **horizontal** position of a positioned element.

This property has no effect on non-positioned elements.

Negative values are allowed.

&nbsp;

# Note

- If `position: absolute;` or `position: fixed;` - the `right` property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor.

- If `position: relative;` - the right property sets the right edge of an element to a unit to the left/right of its normal position.

- If `position: sticky;` - the right property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.

- If `position: static;` - the right property has no effect.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  right: auto|length|percentage|initial|inherit;
}
```

&nbsp;

```css
/* <length> values */
selector {
  right: 3px;
  right: 2.4em;
}

/* <percentage>s of the height of the containing block */
selector {
  right: 10%;
}

/* Keyword value */

selector {
  right: auto;
}

/* Global values */
selector {
  right: inherit;
  right: initial;
  right: revert;
  right: revert-layer;
  right: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div.absolute {
  position: absolute;
  right: 10px;
  width: 50%;
  border: 3px solid #8ac007;
}
```

&nbsp;

&nbsp;

|                    |                                 |
| ------------------ | ------------------------------- |
| Inherited:         | no                              |
| Animation type     | a length, percentage or calc(); |
| Applies to         | positioned elements             |
| JavaScript syntax: | object.style.right="200px"      |
|                    |                                 |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                              |
| ------- | -------------------------------------------------------- |
| auto    | Lets the browser calculate the right edge position.      |
| length  | Sets the right edge position in px, cm, etc.             |
| %       | Sets the right edge position in % of containing element. |
| initial | Sets this property to its default value.                 |
| inherit | Inherits this property from its parent element.          |
|         |                                                          |

&nbsp;

&nbsp;
