# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Properties](#properties)
- [Definition and Usage](#definition-and-usage)
- [How it works](#how-it-works)
- [Syntax](#syntax)
- [Example](#example)
- [Specification](#specification)
- [Property Values](#property-values)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- The `float` property is used for positioning and formatting content e.g. let an image float left to the text in a container.

&nbsp;

&nbsp;

# Properties

| Value | Description                        | Default value |
| ----- | ---------------------------------- | ------------- |
| float | positioning and formatting content | none          |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `float` property is used for positioning and formatting content e.g. let an image float left to the text in a container.

&nbsp;

&nbsp;

# How it works

- Elements are floated only horizontally. So it is possible only to float elements left or right, not up or down.

- A floated element may be moved as far to the left or the right as possible. Simply, it means that a floated element can display at extreme left or extreme right.

- The elements after the floating element will flow around it.

- The elements before the floating element will not be affected.

- If the image floated to the right, the texts flow around it, to the left and if the image floated to the left, the text flows around it, to the right.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  float: left| right| none| inherit;
}
```

&nbsp;

```css
/* Keyword value */
selector {
  float: left;
  float: right;
  float: none;
  float: inline-start;
  float: inline-end;
}

/* Global values */
selector {
  float: inherit;
  float: initial;
  float: revert;
  float: revert-layer;
  float: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
img {
  width: 450px;
  float: left; /*  here image will be in left and other contents will be in right side */
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                  |
| ------------------ | ---------------------------------------------------------------- |
| Inherited:         | no                                                               |
| Animation type     | discrete                                                         |
| Applies to         | all elements, but has no effect if the value of display is none. |
| JavaScript syntax: | object.style.float="left"                                        |
|                    |                                                                  |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                     |
| ------- | ------------------------------------------------------------------------------- |
| left    | The element floats to the left of its container                                 |
| right   | The element floats to the right of its container                                |
| none    | The element does not float (will be displayed just where it occurs in the text) |
| inherit | The element inherits the float value of its parent                              |
|         |                                                                                 |

&nbsp;

&nbsp;
