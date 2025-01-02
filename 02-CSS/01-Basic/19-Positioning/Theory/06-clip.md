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

| Value | Description                            | Default value |
| ----- | -------------------------------------- | ------------- |
| clip  | Clips an absolutely positioned element | auto          |

&nbsp;

&nbsp;

# Definition and Usage

The `clip` property lets you specify a rectangle to clip an absolutely positioned element.

The rectangle is specified as four coordinates, all from the top-left corner of the element to be clipped.

&nbsp;

# Note

The `clip` property does not work if `"overflow:visible"`.

The `clip` property is deprecated and will be replaced by the `clip-path` property in the future.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  clip: auto|shape|initial|inherit;
}
```

&nbsp;

```css
/* Keyword value */

selector {
  clip: auto;
}

/* <shape> values */
selector {
  clip: rect(1px, 10em, 3rem, 2ch);
}

/* Global values */
selector {
  clip: inherit;
  clip: initial;
  clip: revert;
  clip: revert-layer;
  clip: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
img {
  position: absolute;
  clip: rect(0px, 60px, 200px, 0px);
}
```

&nbsp;

&nbsp;

|                    |                                             |
| ------------------ | ------------------------------------------- |
| Inherited:         | no                                          |
| Animation type     | a rectangle                                 |
| Applies to         | absolutely positioned elements              |
| JavaScript syntax: | object.style.clip="rect(0px,50px,50px,0px)" |
|                    |                                             |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| auto    | No clipping will be applied.                                               |
| shape   | Clips an element. The only valid value is: rect (top, right, bottom, left) |
| initial | Sets this property to its default value.                                   |
| inherit | Inherits this property from its parent element.                            |
|         |                                                                            |

&nbsp;

&nbsp;
