# Overview

- Definition and Usage
- Note
- Syntax
- Example
- Specification
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `z-index` property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

- `z-index` only works on **positioned** elements (`position: absolute, position: relative, position: fixed, or position: sticky`) and **flex** items (elements that are direct children of `display:flex` elements).

- `z-index` doesn't work on **static position**

- Negative numbers are allowed.

&nbsp;

&nbsp;

# Properties

| Value   | Description                        | Default value |
| ------- | ---------------------------------- | ------------- |
| z-index | Sets the stack order of an element | auto          |

&nbsp;

&nbsp;

# Definition and Usage

The `z-index` property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

Negative numbers are allowed.

An element with greater stack order is always in front of an element with a lower stack order.

&nbsp;

# Note

`z-index` only works on **positioned** elements (`position: absolute / relative / fixed / sticky`) and **flex** items (elements that are direct children of `display:flex` elements).

`z-index` doesn't work on **static position**

&nbsp;

If two positioned elements overlap without a `z-index` specified, the element positioned last in the HTML code will be shown on top.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  z-index: auto|number|initial|inherit;
}
```

&nbsp;

```css
/* Keyword value */
selector {
  z-index: auto;
}

/* <integer> values */
selector {
  z-index: 0;
  z-index: 3;
  z-index: 289;
  z-index: -1; /* Negative values to lower the priority */
}

/* Global values */
selector {
  z-index: inherit;
  z-index: initial;
  z-index: revert;
  z-index: revert-layer;
  z-index: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                          |
| ------------------ | ------------------------ |
| Inherited:         | no                       |
| Animation type     | an integer               |
| Applies to         | positioned elements      |
| JavaScript syntax: | object.style.zIndex="-1" |
|                    |                          |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| auto    | Sets the stack order equal to its parents.      |
| number  | Sets the stack order of the element.            |
| initial | Sets this property to its default value.        |
| inherit | Inherits this property from its parent element. |
|         |                                                 |

&nbsp;

&nbsp;
