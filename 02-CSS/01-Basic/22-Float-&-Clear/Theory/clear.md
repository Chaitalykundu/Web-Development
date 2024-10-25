# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Properties](#properties)
- [Definition and Usage](#definition-and-usage)
- [Note](#note)
- [Syntax](#syntax)
- [Example](#example)
- [Specification](#specification)
- [Property Values](#property-values)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- The `clear` property specifies what should happen with the element that is next to a floating element.

&nbsp;

&nbsp;

# Properties

| Value | Description                                                                       | Default value |
| ----- | --------------------------------------------------------------------------------- | ------------- |
| clear | specifies what should happen with the element that is next to a floating element. | none          |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `clear` property specifies what should happen with the element that is next to a floating element.

&nbsp;

&nbsp;

# Note

The `clear` property applies to floating and non-floating elements.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  clear: none |left | right| both| inherit;
}
```

&nbsp;

```css
/* Keyword value */
selector {
  clear: none;
  clear: left;
  clear: right;
  clear: both;
  clear: inline-start;
  clear: inline-end;
}

/* Global values */
selector {
  clear: inherit;
  clear: initial;
  clear: revert;
  clear: revert-layer;
  clear: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
.section2 {
  clear: both;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                           |
| ------------------ | ------------------------- |
| Inherited:         | no                        |
| Animation type     | discrete                  |
| Applies to         | block-level elements      |
| JavaScript syntax: | object.style.clear="left" |
|                    |                           |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                      |
| ------- | ---------------------------------------------------------------- |
| none    | The element is not pushed below left or right floated elements.  |
| left    | The element is pushed below left floated elements                |
| right   | The element is pushed below right floated elements               |
| both    | The element is pushed below both left and right floated elements |
| inherit | The element inherits the clear value from its parent             |
|         |                                                                  |

&nbsp;

&nbsp;
